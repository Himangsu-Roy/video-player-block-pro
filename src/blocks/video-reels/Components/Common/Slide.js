import { useEffect, useRef, useState } from "react";
import {
  buildSrcUrl,
  formatHashtag,
  resolvePoster,
} from "../../utils/functions";
import EditorEmbedPortal from "../../../_shared/media/EditorEmbedPortal";
import AdaptiveVideo from "../../../_shared/media/AdaptiveVideo";
import {
  playIcon,
  pauseIcon,
  muteIcon,
  unmuteIcon,
  heartIcon,
  heartFilledIcon,
  shareIcon,
  fullscreenIcon,
} from "../../utils/icons";

const STORAGE_KEY = "vpb.reels.liked";

const loadLiked = () => {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
  } catch (e) {
    return {};
  }
};

const persistLiked = (next) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch (e) {
    /* noop */
  }
};

const Slide = ({
  reel,
  index,
  total,
  attributes,
  isActive,
  isEditor,
  isMuted,
  onToggleMute,
  onVisibilityChange,
  onFullscreenRequest,
  shouldPreload,
}) => {
  const {
    showProgressBar = true,
    showCaption = true,
    showAuthor = true,
    showCTA = true,
    ctaPosition = "bottom",
    showHashtags = true,
    showActionRail = true,
    showCounter = true,
    autoplayOnVisible = true,
    startMuted = true,
    loopClips = true,
    preloadStrategy = "next-one",
  } = attributes;

  const ref = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [posterHidden, setPosterHidden] = useState(false);
  const [liked, setLiked] = useState(false);
  // Editor-only: a YouTube/Vimeo embed is mounted (via portal) only after the
  // user clicks play, and torn down when the slide is scrolled out of view.
  const [editorPlaying, setEditorPlaying] = useState(false);

  useEffect(() => {
    const lk = loadLiked();
    setLiked(!!lk[reel.id]);
  }, [reel?.id]);

  // Stop the editor embed (and free the scroll-blocking overlay) once this
  // slide is no longer the active one.
  useEffect(() => {
    if (!isActive) setEditorPlaying(false);
  }, [isActive]);

  // IntersectionObserver: report visibility to the parent so it can track the
  // active slide. Runs in the editor too, so scrolling pauses the previous clip.
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (onVisibilityChange) {
            onVisibilityChange(index, entry.intersectionRatio);
          }
        });
      },
      { threshold: [0, 0.25, 0.5, 0.6, 0.75, 1] },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index, isEditor, onVisibilityChange]);

  // Native video play/pause based on isActive. Non-active clips are paused in
  // BOTH the editor and frontend so scrolling away stops the previous audio;
  // autoplay of the active clip only happens on the frontend.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (isActive) {
      if (isEditor || !autoplayOnVisible) return;
      try {
        v.muted = isMuted;
        const p = v.play();
        if (p && typeof p.catch === "function") {
          p.catch(() => {
            /* autoplay blocked */
          });
        }
        setIsPlaying(true);
      } catch (e) {
        /* noop */
      }
    } else {
      try {
        v.pause();
        setIsPlaying(false);
      } catch (e) {
        /* noop */
      }
    }
  }, [isActive, isEditor, autoplayOnVisible, isMuted]);

  // Sync mute toggle into <video>
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = isMuted;
  }, [isMuted]);

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v) return;
    const dur = v.duration || 0;
    if (!dur) return;
    setProgress(Math.min(100, (v.currentTime / dur) * 100));
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setPosterHidden(true);
  };
  const handlePause = () => setIsPlaying(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  };

  const toggleLike = (e) => {
    if (e) e.stopPropagation();
    const next = !liked;
    setLiked(next);
    const map = loadLiked();
    if (next) map[reel.id] = 1;
    else delete map[reel.id];
    persistLiked(map);
  };

  const share = async (e) => {
    if (e) e.stopPropagation();
    if (typeof window === "undefined") return;
    const url =
      window.location.origin + window.location.pathname + `#reel=${index}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: reel.title || "Reel", url });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      }
    } catch (err) {
      /* user canceled or permission denied */
    }
  };

  const source = reel.source || "mp4";
  const isIframe = source === "youtube" || source === "vimeo";
  const srcUrl = buildSrcUrl(reel);
  const poster = resolvePoster(reel);
  // Where the embed is actually mounted (vs. just showing the poster).
  const iframeFrontend = isIframe && !!srcUrl && isActive && !isEditor;
  const iframeEditor =
    isIframe && !!srcUrl && isActive && isEditor && editorPlaying;
  const preloadAttr =
    preloadStrategy === "none"
      ? "none"
      : preloadStrategy === "metadata"
        ? "metadata"
        : shouldPreload
          ? "auto"
          : "metadata";

  const hashtags = Array.isArray(reel.hashtags) ? reel.hashtags : [];
  const ctaClass = `vpb-vr-cta is-${reel.ctaStyle || "solid"} is-at-${ctaPosition}`;

  return (
    <div className="vpb-vr-slide" ref={ref} data-reel-index={index}>
      <div className="vpb-vr-media">
        {/* Frontend: live embed for the active slide. */}
        {iframeFrontend ? (
          <iframe
            src={srcUrl}
            title={reel.title || `Reel ${index + 1}`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : null}

        {/* Editor: portal the embed to the top window (the Studio canvas is a
            sandboxed iframe). Mounted only for the active slide after the user
            clicks play, so it doesn't block feed scrolling by default and is
            torn down on scroll-away. */}
        {iframeEditor ? (
          <EditorEmbedPortal
            src={srcUrl}
            title={reel.title || `Reel ${index + 1}`}
            allow="autoplay; encrypted-media; picture-in-picture"
            clickThrough
          />
        ) : null}

        {!isIframe && srcUrl && (isActive || shouldPreload || isEditor) ? (
          <AdaptiveVideo
            ref={videoRef}
            src={srcUrl}
            sourceType={source}
            poster={poster || undefined}
            preload={preloadAttr}
            muted={startMuted ? true : isMuted}
            loop={loopClips}
            playsInline
            onPlay={handlePlay}
            onPause={handlePause}
            onTimeUpdate={handleTimeUpdate}
          />
        ) : null}
      </div>

      {poster ? (
        <img
          className={`vpb-vr-poster ${
            (posterHidden && isPlaying) || iframeFrontend || iframeEditor
              ? "is-hidden"
              : ""
          }`}
          src={poster}
          alt={reel.title || ""}
          loading="lazy"
        />
      ) : null}

      <div className="vpb-vr-overlay" />

      {/* Tap layer for play/pause */}
      {!isIframe && (
        <button
          type="button"
          className="vpb-vr-tap-layer"
          onClick={togglePlay}
          aria-label="Toggle play"
        />
      )}

      {/* Big play button when paused */}
      {!isIframe && (
        <button
          type="button"
          className={`vpb-vr-big-play ${!isPlaying ? "is-visible" : ""}`}
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Play"}>
          {isPlaying ? pauseIcon : playIcon}
        </button>
      )}

      {/* Editor: click to mount the YouTube/Vimeo embed for the active slide. */}
      {isIframe && isEditor && isActive && srcUrl && !editorPlaying && (
        <button
          type="button"
          className="vpb-vr-big-play is-visible"
          onClick={() => setEditorPlaying(true)}
          aria-label="Play video">
          {playIcon}
        </button>
      )}

      {showProgressBar && !isIframe && (
        <div className="vpb-vr-progress">
          <div
            className="vpb-vr-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {showAuthor && (reel.authorName || reel.authorAvatar) && (
        <div className="vpb-vr-author">
          {reel.authorAvatar ? (
            <img
              className="vpb-vr-author-avatar"
              src={reel.authorAvatar}
              alt={reel.authorName || ""}
              loading="lazy"
            />
          ) : (
            <span
              className="vpb-vr-author-avatar"
              aria-hidden="true"
              style={{ display: "inline-block" }}
            />
          )}
          {reel.authorName && (
            <span className="vpb-vr-author-name">{reel.authorName}</span>
          )}
        </div>
      )}

      {showCounter && (
        <span className="vpb-vr-counter">{`${index + 1} / ${total}`}</span>
      )}

      {showCaption && (reel.title || reel.caption) && (
        <div className="vpb-vr-caption">
          {reel.title && <p className="vpb-vr-title">{reel.title}</p>}
          {reel.caption && <p className="vpb-vr-text">{reel.caption}</p>}
          {showHashtags && hashtags.length > 0 && (
            <div className="vpb-vr-hashtags">
              {hashtags.map((t, i) => (
                <span key={i} className="vpb-vr-hash">
                  {formatHashtag(t)}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {showCTA && reel.ctaLabel && reel.ctaUrl && (
        <>
          {ctaPosition === "center" ? (
            <a
              className={ctaClass}
              href={reel.ctaUrl}
              target="_blank"
              rel="noopener noreferrer">
              {reel.ctaLabel}
            </a>
          ) : (
            <div className="vpb-vr-cta-wrap">
              <a
                className={ctaClass}
                href={reel.ctaUrl}
                target="_blank"
                rel="noopener noreferrer">
                {reel.ctaLabel}
              </a>
            </div>
          )}
        </>
      )}

      {showActionRail && (
        <div className="vpb-vr-rail" aria-label="Reel actions">
          <button
            type="button"
            className={`vpb-vr-rail-btn ${liked ? "is-active" : ""}`}
            onClick={toggleLike}
            aria-pressed={liked}
            aria-label="Like">
            {liked ? heartFilledIcon : heartIcon}
          </button>
          <button
            type="button"
            className="vpb-vr-rail-btn"
            onClick={share}
            aria-label="Share">
            {shareIcon}
          </button>
          <button
            type="button"
            className="vpb-vr-rail-btn"
            onClick={(e) => {
              e.stopPropagation();
              if (onToggleMute) onToggleMute();
            }}
            aria-label={isMuted ? "Unmute" : "Mute"}>
            {isMuted ? muteIcon : unmuteIcon}
          </button>
          {!isIframe && (
            <button
              type="button"
              className="vpb-vr-rail-btn"
              onClick={(e) => {
                e.stopPropagation();
                if (onFullscreenRequest) onFullscreenRequest(videoRef.current);
              }}
              aria-label="Fullscreen">
              {fullscreenIcon}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Slide;
