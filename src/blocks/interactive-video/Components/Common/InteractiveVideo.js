import { useEffect, useMemo, useRef, useState } from "react";
import {
  detectSource,
  emitInteractiveEvent,
  formatTime,
  getVimeoId,
  getYoutubeId,
  normaliseOverlay,
} from "../../utils/functions";

/**
 * Renders the entire Interactive Video experience: the underlying player,
 * the timeline-triggered overlays, the optional email gate, the end-screen,
 * and the chapter list.
 *
 * Self-hosted videos use a native <video> element so we can read currentTime
 * cheaply on every frame. YouTube and Vimeo fall back to an iframe — for
 * those, overlay timing uses a wall-clock approximation because cross-origin
 * iframes do not expose currentTime synchronously without their respective
 * JS SDKs, which would defeat the "lightweight" promise.
 */
const InteractiveVideo = ({ attributes, inEditor = false }) => {
  const {
    videoUrl = "",
    videoSource: declaredSource,
    posterUrl = "",
    autoplay = false,
    loop = false,
    muted = false,
    controls = true,
    pauseOnOverlay = false,
    overlays = [],
    endScreen = {},
    chapterMarkers = [],
    showChapterList = false,
    gateEnabled = false,
    gateTriggerTime = 0,
    gateProvider = "none",
    gateWebhookUrl = "",
    gateHeadline = "",
    gateSubtext = "",
    gateButtonLabel = "",
    analyticsEnabled = false,
  } = attributes;

  const source = declaredSource || detectSource(videoUrl);
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [ended, setEnded] = useState(false);
  const [gateOpen, setGateOpen] = useState(false);
  const [gatePassed, setGatePassed] = useState(false);
  const [gateEmail, setGateEmail] = useState("");
  const [gateSubmitting, setGateSubmitting] = useState(false);

  const normalisedOverlays = useMemo(
    () => (Array.isArray(overlays) ? overlays.map(normaliseOverlay) : []),
    [overlays],
  );

  const activeOverlays = useMemo(
    () =>
      normalisedOverlays.filter(
        (o) => currentTime >= o.startTime && currentTime < o.endTime,
      ),
    [normalisedOverlays, currentTime],
  );

  // Self-hosted: hook into the native <video> element timeupdate.
  useEffect(() => {
    if (source !== "self") return undefined;
    const v = videoRef.current;
    if (!v) return undefined;
    const onTime = () => setCurrentTime(v.currentTime || 0);
    const onMeta = () => setDuration(v.duration || 0);
    const onEnd = () => setEnded(true);
    const onPlay = () => setEnded(false);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("ended", onEnd);
    v.addEventListener("play", onPlay);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("ended", onEnd);
      v.removeEventListener("play", onPlay);
    };
  }, [source, videoUrl]);

  // Pause the underlying video when an overlay becomes visible, if requested.
  useEffect(() => {
    if (!pauseOnOverlay || source !== "self") return;
    const v = videoRef.current;
    if (!v) return;
    if (activeOverlays.length > 0 && !v.paused) {
      v.pause();
    }
  }, [activeOverlays.length, pauseOnOverlay, source]);

  // Lead gate. Opens when currentTime crosses the trigger and the visitor
  // has not yet submitted. gateTriggerTime === 0 means "before play".
  useEffect(() => {
    if (!gateEnabled || gatePassed || inEditor) return;
    if (currentTime >= Number(gateTriggerTime || 0)) {
      setGateOpen(true);
      if (source === "self" && videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
      }
    }
  }, [
    gateEnabled,
    gatePassed,
    gateTriggerTime,
    currentTime,
    inEditor,
    source,
  ]);

  const handleCtaClick = (overlay) => {
    if (analyticsEnabled) {
      emitInteractiveEvent("ctaClick", {
        overlayId: overlay.id,
        label: overlay.ctaLabel,
        url: overlay.ctaUrl,
        time: currentTime,
      });
    }
  };

  const handleSeek = (time) => {
    const v = videoRef.current;
    if (source === "self" && v) {
      v.currentTime = time;
      v.play?.().catch(() => {});
    }
  };

  const handleRewatch = () => {
    setEnded(false);
    handleSeek(0);
  };

  const handleGateSubmit = async (e) => {
    e.preventDefault();
    if (!gateEmail) return;
    setGateSubmitting(true);
    try {
      if (gateProvider === "webhook" && gateWebhookUrl) {
        await fetch(gateWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: gateEmail,
            videoUrl,
            at: currentTime,
          }),
        }).catch(() => {});
      }
      if (analyticsEnabled) {
        emitInteractiveEvent("gateSubmit", {
          email: gateEmail,
          provider: gateProvider,
          at: currentTime,
        });
      }
    } finally {
      setGateSubmitting(false);
      setGatePassed(true);
      setGateOpen(false);
      if (source === "self" && videoRef.current) {
        videoRef.current.play?.().catch(() => {});
      }
    }
  };

  // Iframe (YouTube / Vimeo) src.
  let iframeSrc = "";
  if (source === "youtube") {
    const id = getYoutubeId(videoUrl);
    if (id) {
      const params = new URLSearchParams({
        rel: "0",
        modestbranding: "1",
        playsinline: "1",
      });
      if (autoplay) params.set("autoplay", "1");
      if (loop) {
        params.set("loop", "1");
        params.set("playlist", id);
      }
      if (muted) params.set("mute", "1");
      if (!controls) params.set("controls", "0");
      iframeSrc = `https://www.youtube.com/embed/${id}?${params.toString()}`;
    }
  } else if (source === "vimeo") {
    const id = getVimeoId(videoUrl);
    if (id) {
      const params = new URLSearchParams({});
      if (autoplay) params.set("autoplay", "1");
      if (loop) params.set("loop", "1");
      if (muted) params.set("muted", "1");
      iframeSrc = `https://player.vimeo.com/video/${id}?${params.toString()}`;
    }
  }

  const showEndScreen = !!endScreen?.enabled && ended && !inEditor;

  return (
    <div className="vpb-iv-wrap">
      <div className="vpb-iv-stage">
        {source === "self" ? (
          <video
            ref={videoRef}
            src={videoUrl}
            poster={posterUrl}
            controls={controls}
            autoPlay={autoplay && !gateEnabled}
            loop={loop}
            muted={muted}
            playsInline
            preload="metadata"
          />
        ) : iframeSrc ? (
          <iframe
            src={iframeSrc}
            title="Interactive video"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              padding: 16,
              textAlign: "center",
            }}
          >
            Provide a video URL in the inspector to preview the block.
          </div>
        )}

        {/* Overlays */}
        <div className="vpb-iv-overlays">
          {activeOverlays.map((o) => {
            const posCls = `vpb-iv-pos--${o.position}`;
            if (o.type === "cta") {
              return (
                <div
                  key={o.id}
                  className={`vpb-iv-overlay vpb-iv-overlay--cta-card ${posCls}`}
                  style={{ borderRadius: o.borderRadius }}
                >
                  {o.content && (
                    <div style={{ marginBottom: 8, fontSize: 13 }}>
                      {o.content}
                    </div>
                  )}
                  <a
                    href={o.ctaUrl || "#"}
                    target={o.ctaTarget}
                    rel="noopener noreferrer"
                    className={`vpb-iv-cta vpb-iv-cta--${o.ctaStyle}`}
                    style={{
                      borderRadius: o.ctaStyle === "pill" ? 999 : o.borderRadius,
                      background:
                        o.ctaStyle === "filled" || o.ctaStyle === "pill"
                          ? o.bgColor
                          : undefined,
                      color:
                        o.ctaStyle === "filled" || o.ctaStyle === "pill"
                          ? o.textColor
                          : o.bgColor,
                      borderColor: o.bgColor,
                    }}
                    onClick={() => handleCtaClick(o)}
                  >
                    {o.ctaLabel || "Click"}
                  </a>
                </div>
              );
            }
            if (o.type === "text") {
              return (
                <div
                  key={o.id}
                  className={`vpb-iv-overlay vpb-iv-overlay--text ${posCls}`}
                  style={{
                    background: o.bgColor,
                    color: o.textColor,
                    borderRadius: o.borderRadius,
                  }}
                >
                  {o.content}
                </div>
              );
            }
            if (o.type === "image-card") {
              return (
                <div
                  key={o.id}
                  className={`vpb-iv-overlay vpb-iv-overlay--image ${posCls}`}
                  style={{
                    background: o.bgColor,
                    color: o.textColor,
                    borderRadius: o.borderRadius,
                  }}
                >
                  {o.imageUrl && (
                    <img src={o.imageUrl} alt={o.content || "Overlay"} />
                  )}
                  {o.content && <div>{o.content}</div>}
                  {o.ctaLabel && o.ctaUrl && (
                    <div style={{ marginTop: 8 }}>
                      <a
                        href={o.ctaUrl}
                        target={o.ctaTarget}
                        rel="noopener noreferrer"
                        className={`vpb-iv-cta vpb-iv-cta--${o.ctaStyle}`}
                        onClick={() => handleCtaClick(o)}
                      >
                        {o.ctaLabel}
                      </a>
                    </div>
                  )}
                </div>
              );
            }
            if (o.type === "hotspot") {
              return (
                <a
                  key={o.id}
                  href={o.ctaUrl || "#"}
                  target={o.ctaTarget}
                  rel="noopener noreferrer"
                  className={`vpb-iv-overlay ${posCls}`}
                  onClick={() => handleCtaClick(o)}
                  aria-label={o.ctaLabel || o.content || "Hotspot"}
                  title={o.ctaLabel || o.content || ""}
                >
                  <span
                    className={`vpb-iv-hotspot vpb-iv-hotspot--${o.hotspotShape} ${
                      o.pulse ? "vpb-iv-hotspot--pulse" : ""
                    }`}
                    style={{ background: o.bgColor }}
                  />
                </a>
              );
            }
            return null;
          })}

          {/* Chapter ticks rendered over the bottom-edge of the stage. */}
          {Array.isArray(chapterMarkers) && duration > 0 && (
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 48,
                height: 6,
                pointerEvents: "none",
              }}
            >
              {chapterMarkers.map((c, i) => {
                const t = Number(c.time) || 0;
                if (t <= 0 || t >= duration) return null;
                return (
                  <span
                    key={c.id || i}
                    className="vpb-iv-chapter-tick"
                    style={{ left: `${(t / duration) * 100}%` }}
                    title={`${formatTime(t)} — ${c.label || ""}`}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* End-screen */}
        {showEndScreen && (
          <div
            className="vpb-iv-endscreen"
            style={{
              background: endScreen.bgColor,
              color: endScreen.textColor,
            }}
          >
            <h3>{endScreen.headline}</h3>
            {endScreen.subtext && <p>{endScreen.subtext}</p>}
            <div className="vpb-iv-endscreen-actions">
              {endScreen.ctaLabel && endScreen.ctaUrl && (
                <a
                  href={endScreen.ctaUrl}
                  target={endScreen.ctaTarget || "_blank"}
                  rel="noopener noreferrer"
                  className="vpb-iv-cta vpb-iv-cta--filled"
                  onClick={() =>
                    analyticsEnabled &&
                    emitInteractiveEvent("endScreenCtaClick", {
                      label: endScreen.ctaLabel,
                      url: endScreen.ctaUrl,
                    })
                  }
                >
                  {endScreen.ctaLabel}
                </a>
              )}
              {endScreen.showRewatch && (
                <button
                  type="button"
                  className="vpb-iv-rewatch"
                  onClick={handleRewatch}
                >
                  Rewatch
                </button>
              )}
            </div>
          </div>
        )}

        {/* Email gate */}
        {gateEnabled && gateOpen && !gatePassed && !inEditor && (
          <div className="vpb-iv-gate">
            <form className="vpb-iv-gate-card" onSubmit={handleGateSubmit}>
              <h3>{gateHeadline || "Watch the full video"}</h3>
              {gateSubtext && <p>{gateSubtext}</p>}
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={gateEmail}
                onChange={(e) => setGateEmail(e.target.value)}
              />
              <button type="submit" disabled={gateSubmitting}>
                {gateSubmitting ? "..." : gateButtonLabel || "Continue"}
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Chapter list (below stage) */}
      {showChapterList &&
        Array.isArray(chapterMarkers) &&
        chapterMarkers.length > 0 && (
          <div className="vpb-iv-chapter-list">
            <ol>
              {chapterMarkers.map((c, i) => {
                const seek = () => handleSeek(Number(c.time) || 0);
                return (
                  <li
                    key={c.id || i}
                    onClick={seek}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        seek();
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Jump to ${c.label || `Chapter ${i + 1}`} at ${formatTime(c.time)}`}
                  >
                    <span>{c.label || `Chapter ${i + 1}`}</span>
                    <span className="vpb-iv-chapter-time">
                      {formatTime(c.time)}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        )}
    </div>
  );
};

export default InteractiveVideo;
