import { useCallback, useEffect, useRef, useState } from "react";
import { buildEmbedUrl } from "../../utils/functions";
import { checkIcon, playIcon, starIcon } from "../../utils/icons";
import EditorEmbedPortal from "../../../_shared/media/EditorEmbedPortal";
import AdaptiveVideo from "../../../_shared/media/AdaptiveVideo";

/**
 * Video Testimonial Card. Renders a single testimonial with an inline-playable
 * (or lightbox / hover-preview) video clip and attributed quote + rating.
 */
const Testimonial = ({ attributes, inEditor = false }) => {
  const {
    layout = "media-left",
    videoSource = "upload",
    videoUrl,
    posterUrl,
    playMode = "inline",
    quote,
    quoteStyle = "large-quote-mark",
    authorName,
    authorTitle,
    authorAvatarUrl,
    companyLogoUrl,
    rating = 5,
    showVerifiedBadge = true,
    verifiedLabel = "Verified customer",
    playerControls = true,
    playerMuted = false,
    playerLoop = false,
    playerAutoplay = false,
  } = attributes;

  const [activated, setActivated] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [hoverPlay, setHoverPlay] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setActivated(false);
    setLightboxOpen(false);
    setHoverPlay(false);
  }, [playMode, videoUrl, posterUrl]);

  const handleActivate = useCallback(() => {
    if (playMode === "lightbox") {
      setLightboxOpen(true);
      return;
    }
    setActivated(true);
    // play the underlying HTML5 element once it mounts
    requestAnimationFrame(() => {
      const v = videoRef.current;
      if (v && typeof v.play === "function") {
        const p = v.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      }
    });
  }, [playMode]);

  const onHoverStart = useCallback(() => {
    if (playMode !== "hover-preview") return;
    setHoverPlay(true);
    const v = videoRef.current;
    if (v && typeof v.play === "function") {
      v.muted = true;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
  }, [playMode]);

  const onHoverEnd = useCallback(() => {
    if (playMode !== "hover-preview") return;
    setHoverPlay(false);
    const v = videoRef.current;
    if (v && typeof v.pause === "function") {
      try {
        v.pause();
        v.currentTime = 0;
      } catch (e) {
        /* noop */
      }
    }
  }, [playMode]);

  const renderPlayer = (forceAutoplay = false, forceControls = true) => {
    if (videoSource === "youtube" || videoSource === "vimeo") {
      const src = buildEmbedUrl(videoSource, videoUrl, {
        autoplay: forceAutoplay || playerAutoplay,
        muted: playerMuted,
        loop: playerLoop,
        controls: forceControls && playerControls,
      });
      if (!src) return null;
      const allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      const title = authorName ? `${authorName} testimonial` : "Testimonial video";
      if (inEditor) {
        return (
          <EditorEmbedPortal
            className="vpb-vt-video"
            src={src}
            title={title}
            allow={allow}
          />
        );
      }
      return (
        <iframe
          className="vpb-vt-video"
          src={src}
          title={title}
          frameBorder="0"
          allow={allow}
          allowFullScreen
        />
      );
    }
    return (
      <AdaptiveVideo
        ref={videoRef}
        className="vpb-vt-video"
        src={videoUrl || undefined}
        sourceType={videoSource}
        poster={posterUrl || undefined}
        controls={forceControls && playerControls}
        muted={playerMuted}
        loop={playerLoop}
        autoPlay={forceAutoplay || playerAutoplay}
        playsInline
        preload="metadata"
      />
    );
  };

  const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));
  const stars = Array.from({ length: 5 }, (_, i) => {
    const v = safeRating - i;
    if (v >= 1) return "full";
    if (v >= 0.5) return "half";
    return "empty";
  });

  const shouldShowPoster =
    !activated && !hoverPlay && posterUrl;
  const inlineWithoutPoster =
    !activated && !hoverPlay && !posterUrl;

  return (
    <div
      className={`vpb-vt vpb-vt--${layout}`}
      role="figure"
      aria-label={authorName ? `Testimonial from ${authorName}` : "Testimonial"}
    >
      <div
        className="vpb-vt-media"
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
      >
        <div className="vpb-vt-media-frame">
          {/* Always mount the player so hover-preview / inline activation work without remount jank. */}
          {/* Inline mode: native controls always on so users can play/pause/seek/volume/fullscreen even before clicking the poster overlay. Hover-preview mode hides controls intentionally so they don't interfere with the silent-preview UX. */}
          {playMode === "inline" &&
            !inEditor &&
            renderPlayer(activated, true)}
          {playMode === "hover-preview" &&
            !inEditor &&
            renderPlayer(hoverPlay, false)}
          {inEditor &&
            (activated || !shouldShowPoster) &&
            renderPlayer(activated, true)}

          {shouldShowPoster && (
            <img
              className="vpb-vt-poster"
              src={posterUrl}
              alt=""
              onClick={handleActivate}
            />
          )}
          {(shouldShowPoster ||
            inlineWithoutPoster ||
            playMode === "lightbox") && (
              <button
                type="button"
                className="vpb-vt-play"
                onClick={handleActivate}
                aria-label="Play video testimonial"
              >
                <span className="vpb-vt-play-icon" aria-hidden="true">
                  {playIcon}
                </span>
              </button>
            )}
        </div>
      </div>

      <div className="vpb-vt-content">
        {safeRating > 0 && (
          <div
            className="vpb-vt-rating"
            role="img"
            aria-label={`Rated ${safeRating} out of 5`}
          >
            {stars.map((kind, i) => (
              <span
                key={i}
                className={`vpb-vt-rating-star vpb-vt-rating-star--${kind}`}
              >
                {starIcon}
                {kind === "half" && (
                  <span
                    className="vpb-vt-rating-star-half-fill"
                    aria-hidden="true"
                  >
                    {starIcon}
                  </span>
                )}
              </span>
            ))}
          </div>
        )}

        <blockquote
          className={`vpb-vt-quote vpb-vt-quote--${quoteStyle}`}
          dangerouslySetInnerHTML={{ __html: quote || "" }}
        />

        <div className="vpb-vt-meta-row">
          <div className="vpb-vt-author">
            {authorAvatarUrl && (
              <img
                className="vpb-vt-avatar"
                src={authorAvatarUrl}
                alt={authorName || ""}
                loading="lazy"
              />
            )}
            <div className="vpb-vt-author-meta">
              {authorName && (
                <span className="vpb-vt-author-name">{authorName}</span>
              )}
              {authorTitle && (
                <span className="vpb-vt-author-title">{authorTitle}</span>
              )}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            {companyLogoUrl && (
              <img
                className="vpb-vt-company-logo"
                src={companyLogoUrl}
                alt=""
                loading="lazy"
              />
            )}
            {showVerifiedBadge && (
              <span className="vpb-vt-badge">
                <span className="vpb-vt-badge-icon" aria-hidden="true">
                  {checkIcon}
                </span>
                {verifiedLabel || "Verified"}
              </span>
            )}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="vpb-vt-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Video testimonial"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxOpen(false);
          }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 960,
              aspectRatio: "16 / 9",
              background: "#000",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            {renderPlayer(true, true)}
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close video"
              style={{
                position: "absolute",
                top: -42,
                right: 0,
                background: "transparent",
                border: 0,
                color: "#fff",
                fontSize: 24,
                cursor: "pointer",
                lineHeight: 1,
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
