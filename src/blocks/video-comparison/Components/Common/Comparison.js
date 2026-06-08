import { useCallback, useEffect, useId, useRef, useState } from "react";
import { clamp } from "../../utils/functions";
import {
  handleArrowsIcon,
  muteIcon,
  pauseIcon,
  playIcon,
  volumeIcon,
} from "../../utils/icons";

/**
 * Video Comparison block. Renders two HTML5 video elements layered on top
 * of each other and reveals one over the other via a draggable divider.
 *
 * Playback strategy:
 *   - `synced`      : the "before" video is the leader; the "after" video
 *                     follows its currentTime + play / pause / mute state.
 *                     Resync runs both on the timeupdate loop and whenever
 *                     drift exceeds 0.18s.
 *   - `independent` : both videos play / pause together but their
 *                     timelines drift freely.
 */
const Comparison = ({ attributes, blockId, inEditor = false }) => {
  const {
    beforeVideoUrl,
    afterVideoUrl,
    beforePosterUrl,
    afterPosterUrl,
    orientation = "horizontal",
    initialPosition = 50,
    beforeLabel,
    afterLabel,
    showLabels = true,
    handleStyle = "circle",
    autoplay = true,
    autoplayOnScroll = true,
    loop = true,
    muted = true,
    playsInline = true,
    preload = "metadata",
    hideControls = false,
    playMode = "synced",
    a11yLabel,
  } = attributes;

  const [pos, setPos] = useState(clamp(Number(initialPosition) || 50, 0, 100));
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(!!muted);

  const containerRef = useRef(null);
  const beforeRef = useRef(null);
  const afterRef = useRef(null);
  const draggingRef = useRef(false);
  const positionRef = useRef(pos);
  const reactId = useId();
  const sliderId = `${blockId || `vpb-vc-${reactId}`}-slider`;

  positionRef.current = pos;

  // Keep state in sync when the editor changes attributes live.
  useEffect(() => {
    setPos(clamp(Number(initialPosition) || 50, 0, 100));
  }, [initialPosition]);

  useEffect(() => {
    setIsMuted(!!muted);
  }, [muted]);

  /* ------------------------------------------------------------------ *
   * Sync helpers
   * ------------------------------------------------------------------ */

  const syncFollower = useCallback(() => {
    if (playMode !== "synced") return;
    const a = beforeRef.current;
    const b = afterRef.current;
    if (!a || !b) return;
    if (!isFinite(a.currentTime)) return;
    const drift = Math.abs(a.currentTime - b.currentTime);
    if (drift > 0.18) {
      try {
        b.currentTime = a.currentTime;
      } catch (err) {
        /* noop */
      }
    }
  }, [playMode]);

  /* ------------------------------------------------------------------ *
   * Play / pause / mute control
   * ------------------------------------------------------------------ */

  const playBoth = useCallback(() => {
    const a = beforeRef.current;
    const b = afterRef.current;
    if (!a || !b) return;
    const pa = a.play();
    const pb = b.play();
    [pa, pb].forEach((p) => {
      if (p && typeof p.catch === "function") p.catch(() => {});
    });
    setIsPlaying(true);
  }, []);

  const pauseBoth = useCallback(() => {
    const a = beforeRef.current;
    const b = afterRef.current;
    if (a) a.pause();
    if (b) b.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) pauseBoth();
    else playBoth();
  }, [isPlaying, pauseBoth, playBoth]);

  const toggleMute = useCallback(() => {
    const next = !isMuted;
    setIsMuted(next);
    if (beforeRef.current) beforeRef.current.muted = next;
    if (afterRef.current) afterRef.current.muted = next;
  }, [isMuted]);

  /* ------------------------------------------------------------------ *
   * Source / attribute resets
   * ------------------------------------------------------------------ */

  useEffect(() => {
    // When the editor swaps a URL, reload so the new source is honoured.
    if (beforeRef.current) beforeRef.current.load();
  }, [beforeVideoUrl]);

  useEffect(() => {
    if (afterRef.current) afterRef.current.load();
  }, [afterVideoUrl]);

  /* ------------------------------------------------------------------ *
   * Autoplay (immediate or on-scroll)
   * ------------------------------------------------------------------ */

  useEffect(() => {
    if (inEditor) return undefined;
    if (!autoplay) return undefined;

    if (!autoplayOnScroll || typeof IntersectionObserver === "undefined") {
      playBoth();
      return undefined;
    }
    const target = containerRef.current;
    if (!target) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) playBoth();
          else pauseBoth();
        });
      },
      { threshold: 0.35 },
    );
    io.observe(target);
    return () => io.disconnect();
  }, [inEditor, autoplay, autoplayOnScroll, playBoth, pauseBoth]);

  /* ------------------------------------------------------------------ *
   * Pointer drag handling for the divider
   * ------------------------------------------------------------------ */

  const updatePositionFromEvent = useCallback(
    (clientX, clientY) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      let next;
      if (orientation === "vertical") {
        next = ((clientY - rect.top) / rect.height) * 100;
      } else {
        next = ((clientX - rect.left) / rect.width) * 100;
      }
      setPos(clamp(next, 0, 100));
    },
    [orientation],
  );

  const onPointerDown = useCallback(
    (e) => {
      draggingRef.current = true;
      try {
        e.currentTarget.setPointerCapture?.(e.pointerId);
      } catch (err) {
        /* noop */
      }
      updatePositionFromEvent(e.clientX, e.clientY);
    },
    [updatePositionFromEvent],
  );

  const onPointerMove = useCallback(
    (e) => {
      if (!draggingRef.current) return;
      updatePositionFromEvent(e.clientX, e.clientY);
    },
    [updatePositionFromEvent],
  );

  const onPointerUp = useCallback((e) => {
    draggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    } catch (err) {
      /* noop */
    }
  }, []);

  // Allow click-to-jump anywhere on the container surface.
  const onContainerClick = useCallback(
    (e) => {
      if (e.target.closest(".vpb-vc-controls")) return;
      if (e.target.closest(".vpb-vc-handle")) return;
      updatePositionFromEvent(e.clientX, e.clientY);
    },
    [updatePositionFromEvent],
  );

  // Keyboard accessibility on the slider handle.
  const onHandleKeyDown = useCallback((e) => {
    const step = e.shiftKey ? 10 : 2;
    let next = positionRef.current;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") next -= step;
    else if (e.key === "ArrowRight" || e.key === "ArrowUp") next += step;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = 100;
    else return;
    e.preventDefault();
    setPos(clamp(next, 0, 100));
  }, []);

  /* ------------------------------------------------------------------ *
   * Style for the reveal mask
   * ------------------------------------------------------------------ */

  const beforeClip =
    orientation === "vertical"
      ? `inset(0 0 ${100 - pos}% 0)`
      : `inset(0 ${100 - pos}% 0 0)`;

  const dividerStyle =
    orientation === "vertical"
      ? { top: `${pos}%`, left: 0, right: 0, height: "var(--vpb-vc-divider-w, 3px)", transform: "translateY(-50%)" }
      : { left: `${pos}%`, top: 0, bottom: 0, width: "var(--vpb-vc-divider-w, 3px)", transform: "translateX(-50%)" };

  const handlePosStyle =
    orientation === "vertical"
      ? { top: `${pos}%`, left: "50%", transform: "translate(-50%, -50%)" }
      : { left: `${pos}%`, top: "50%", transform: "translate(-50%, -50%)" };

  return (
    <div
      ref={containerRef}
      className={`vpb-vc vpb-vc--${orientation} vpb-vc--handle-${handleStyle}`}
      role="group"
      aria-label={a11yLabel || "Before and after video comparison"}
      onClick={onContainerClick}
    >
      <div className="vpb-vc-frame">
        <video
          ref={afterRef}
          className="vpb-vc-video vpb-vc-video--after"
          src={afterVideoUrl || undefined}
          poster={afterPosterUrl || undefined}
          muted={isMuted}
          loop={loop}
          playsInline={playsInline}
          preload={preload}
          // The "after" video sits on the bottom of the visual stack so the
          // clipped "before" video reveals it. It is the audio-bearing track
          // when unmuted because it represents the post-state.
        />
        <video
          ref={beforeRef}
          className="vpb-vc-video vpb-vc-video--before"
          src={beforeVideoUrl || undefined}
          poster={beforePosterUrl || undefined}
          muted
          loop={loop}
          playsInline={playsInline}
          preload={preload}
          style={{ clipPath: beforeClip, WebkitClipPath: beforeClip }}
          onTimeUpdate={syncFollower}
          onSeeking={syncFollower}
          onPlay={() => {
            setIsPlaying(true);
            if (playMode === "synced") syncFollower();
            const b = afterRef.current;
            if (b && b.paused) {
              const p = b.play();
              if (p && typeof p.catch === "function") p.catch(() => {});
            }
          }}
          onPause={() => {
            setIsPlaying(false);
            const b = afterRef.current;
            if (b && !b.paused) b.pause();
          }}
        />

        {showLabels && (
          <>
            {beforeLabel ? (
              <span className="vpb-vc-label vpb-vc-label--before">
                {beforeLabel}
              </span>
            ) : null}
            {afterLabel ? (
              <span className="vpb-vc-label vpb-vc-label--after">
                {afterLabel}
              </span>
            ) : null}
          </>
        )}

        <div
          className="vpb-vc-divider"
          style={dividerStyle}
          aria-hidden="true"
        />

        <div
          className={`vpb-vc-handle vpb-vc-handle--${handleStyle}`}
          style={handlePosStyle}
          role="slider"
          id={sliderId}
          aria-label="Comparison divider"
          aria-orientation={orientation === "vertical" ? "vertical" : "horizontal"}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onKeyDown={onHandleKeyDown}
        >
          {handleStyle === "arrows" && (
            <span className="vpb-vc-handle-icon" aria-hidden="true">
              {handleArrowsIcon}
            </span>
          )}
        </div>
      </div>

      {!hideControls && (
        <div className="vpb-vc-controls" role="toolbar" aria-label="Playback">
          <button
            type="button"
            className="vpb-vc-ctrl vpb-vc-ctrl--play"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            <span className="vpb-vc-ctrl-icon" aria-hidden="true">
              {isPlaying ? pauseIcon : playIcon}
            </span>
          </button>
          <button
            type="button"
            className="vpb-vc-ctrl vpb-vc-ctrl--mute"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            <span className="vpb-vc-ctrl-icon" aria-hidden="true">
              {isMuted ? muteIcon : volumeIcon}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Comparison;
