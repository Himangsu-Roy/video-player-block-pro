import { useEffect, useRef } from "react";
import PlayerEmbed from "./PlayerEmbed";

const Lightbox = ({
  video,
  attributes,
  onClose,
  onPrev,
  onNext,
  showNav,
  isEditor = false,
}) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose && onClose();
      if (e.key === "ArrowLeft") onPrev && onPrev();
      if (e.key === "ArrowRight") onNext && onNext();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  if (!video) return null;

  const theme = attributes?.lightboxTheme || "dark";

  return (
    <div
      className={`vpb-vg-lightbox is-${theme}`}
      role="dialog"
      aria-modal="true"
      aria-label={video.title || "Video"}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose && onClose();
      }}
      ref={dialogRef}
    >
      <div className="vpb-vg-lb-inner">
        <button
          type="button"
          className="vpb-vg-lb-close"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>

        {showNav && (
          <>
            <button
              type="button"
              className="vpb-vg-lb-nav prev"
              aria-label="Previous video"
              onClick={onPrev}
            >
              ‹
            </button>
            <button
              type="button"
              className="vpb-vg-lb-nav next"
              aria-label="Next video"
              onClick={onNext}
            >
              ›
            </button>
          </>
        )}

        <div className="vpb-vg-lb-stage">
          <PlayerEmbed video={video} attributes={attributes} isEditor={isEditor} />
        </div>

        {video.title && <h2 className="vpb-vg-lb-title">{video.title}</h2>}
      </div>
    </div>
  );
};

export default Lightbox;
