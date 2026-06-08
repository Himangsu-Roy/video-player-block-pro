import { useEffect, useRef, useState, useCallback } from "react";
import VideoEngine from "./VideoEngine";
import {
  closeIcon,
  minimizeIcon,
  expandIcon,
  pipIcon,
} from "../../utils/icons";
import {
  shouldDisableSticky,
  prefersReducedMotion,
} from "../../utils/functions";

/**
 * The Sticky Video wrapper.
 *
 * Renders an in-flow player. On the frontend it watches the player's position
 * with an IntersectionObserver; once the placeholder scrolls past the
 * configured threshold (and, optionally, only while the video is playing) it
 * detaches into a fixed-position docked mini-player in the chosen corner.
 * Supports minimize-to-tab, close (with sessionStorage persistence), native
 * Picture-in-Picture, and auto-PiP when the tab loses focus.
 *
 * In the editor (inEditor) it renders only the static in-flow preview so the
 * author can configure the player without it flying into a corner.
 */
const StickyVideo = ({ attributes, inEditor = false, instanceId }) => {
  const {
    stickyCorner = "bottom-right",
    triggerThreshold = 120,
    onlyWhenPlaying = true,
    showCloseButton = true,
    showMinimizeButton = true,
    rememberDismissal = true,
    pipEnabled = true,
    autoPipOnLeave = false,
    dockAnimation = "slide",
    respectReducedMotion = true,
    title,
    ariaLabel,
  } = attributes;

  const placeholderRef = useRef(null);
  const videoRef = useRef(null);
  const sentinelRef = useRef(null);

  const [docked, setDocked] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [closed, setClosed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const storageKey = `vpbStickyClosed_${instanceId || "sv"}`;

  const animated =
    dockAnimation !== "none" && !(respectReducedMotion && prefersReducedMotion());

  // Restore dismissed state for the session.
  useEffect(() => {
    if (inEditor || !rememberDismissal) return;
    try {
      if (window.sessionStorage.getItem(storageKey) === "1") setClosed(true);
    } catch (e) {
      /* sessionStorage unavailable */
    }
  }, [inEditor, rememberDismissal, storageKey]);

  // Track play state from the native video element.
  useEffect(() => {
    if (inEditor) return;
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onPause);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("ended", onPause);
    };
  }, [inEditor]);

  // Scroll-driven docking via IntersectionObserver on a sentinel placed
  // `triggerThreshold` px below the top of the player.
  useEffect(() => {
    if (inEditor || closed) return;
    if (shouldDisableSticky(attributes)) {
      setDocked(false);
      return;
    }
    const sentinel = sentinelRef.current;
    if (!sentinel || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Past the player (scrolled below it) → candidate for docking.
        const scrolledPast = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        setDocked(scrolledPast);
      },
      { rootMargin: `-${Math.max(0, triggerThreshold)}px 0px 0px 0px`, threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [inEditor, closed, attributes, triggerThreshold]);

  // Auto-PiP when the visitor switches tabs while playing.
  useEffect(() => {
    if (inEditor || !autoPipOnLeave || !pipEnabled) return;
    const onVisibility = async () => {
      const v = videoRef.current;
      if (!v) return;
      try {
        if (
          document.hidden &&
          isPlaying &&
          document.pictureInPictureEnabled &&
          !v.disablePictureInPicture &&
          document.pictureInPictureElement !== v
        ) {
          await v.requestPictureInPicture();
        }
      } catch (e) {
        /* PiP denied / unsupported */
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [inEditor, autoPipOnLeave, pipEnabled, isPlaying]);

  const requestPip = useCallback(async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      if (document.pictureInPictureElement === v) {
        await document.exitPictureInPicture();
      } else if (document.pictureInPictureEnabled) {
        await v.requestPictureInPicture();
      }
    } catch (e) {
      /* unsupported */
    }
  }, []);

  const handleClose = useCallback(() => {
    setClosed(true);
    setDocked(false);
    const v = videoRef.current;
    if (v) {
      try {
        v.pause();
      } catch (e) {
        /* noop */
      }
    }
    if (rememberDismissal) {
      try {
        window.sessionStorage.setItem(storageKey, "1");
      } catch (e) {
        /* noop */
      }
    }
  }, [rememberDismissal, storageKey]);

  // The docked player should only show when "onlyWhenPlaying" is satisfied.
  // For iframe sources we cannot read play state, so we treat them as always
  // eligible once scrolled past.
  const hasNativeVideo = !!videoRef.current;
  const playGateOk = !onlyWhenPlaying || !hasNativeVideo || isPlaying;
  const isDockedNow = !inEditor && docked && !closed && playGateOk;

  const stageClasses = [
    "vpb-sv-stage",
    isDockedNow ? "is-docked" : "",
    isDockedNow ? `vpb-sv-corner-${stickyCorner}` : "",
    isDockedNow && minimized ? "is-minimized" : "",
    animated ? "is-animated" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className="vpb-sv-root"
      ref={placeholderRef}
      role="region"
      aria-label={ariaLabel || "Sticky video player"}
    >
      {/* Sentinel used by the IntersectionObserver to detect scroll-past. */}
      <span ref={sentinelRef} className="vpb-sv-sentinel" aria-hidden="true" />

      {/* Reserve the in-flow space so the page does not jump when docking. */}
      <div className="vpb-sv-slot">
        {isDockedNow && (
          <div className="vpb-sv-placeholder" aria-hidden="true" />
        )}

        <div className={stageClasses}>
          {isDockedNow && (
            <div className="vpb-sv-bar">
              <span className="vpb-sv-bar-title">{title || ""}</span>
              <span className="vpb-sv-bar-actions">
                {pipEnabled && hasNativeVideo && (
                  <button
                    type="button"
                    className="vpb-sv-btn"
                    onClick={requestPip}
                    aria-label="Picture in Picture"
                    title="Picture in Picture"
                  >
                    {pipIcon}
                  </button>
                )}
                {showMinimizeButton && (
                  <button
                    type="button"
                    className="vpb-sv-btn"
                    onClick={() => setMinimized((m) => !m)}
                    aria-label={minimized ? "Expand" : "Minimize"}
                    title={minimized ? "Expand" : "Minimize"}
                  >
                    {minimized ? expandIcon : minimizeIcon}
                  </button>
                )}
                {showCloseButton && (
                  <button
                    type="button"
                    className="vpb-sv-btn"
                    onClick={handleClose}
                    aria-label="Close"
                    title="Close"
                  >
                    {closeIcon}
                  </button>
                )}
              </span>
            </div>
          )}

          <div className="vpb-sv-media">
            <VideoEngine
              ref={videoRef}
              attributes={attributes}
              inEditor={inEditor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyVideo;
