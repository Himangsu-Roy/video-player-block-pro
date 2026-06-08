import { useEffect } from "react";
import {
  getYoutubeId,
  getVimeoId,
  isYoutube,
  isVimeo,
} from "../../utils/functions";

/**
 * Modal that plays the (non-muted) trailer video. Closes on backdrop click,
 * Escape key, or the explicit close button.
 */
const TrailerModal = ({ attributes, onClose }) => {
  const { trailerVideoUrl, trailerSource } = attributes;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    // Lock body scroll while modal is open.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (!trailerVideoUrl) {
    return (
      <div
        className="vpb-vh-modal"
        role="dialog"
        aria-modal="true"
        onClick={onClose}
      >
        <div
          className="vpb-vh-modal-body"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="vpb-vh-modal-close"
            onClick={onClose}
            aria-label="Close trailer"
          >
            ×
          </button>
          <div className="vpb-vh-modal-empty">
            No trailer video URL configured.
          </div>
        </div>
      </div>
    );
  }

  const isYt = trailerSource === "youtube" || isYoutube(trailerVideoUrl);
  const isVm = trailerSource === "vimeo" || isVimeo(trailerVideoUrl);

  let playerNode = null;
  if (isYt) {
    const id = getYoutubeId(trailerVideoUrl);
    playerNode = (
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
        title="Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  } else if (isVm) {
    const id = getVimeoId(trailerVideoUrl);
    playerNode = (
      <iframe
        src={`https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0`}
        title="Trailer"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    );
  } else {
    playerNode = (
      <video src={trailerVideoUrl} controls autoPlay playsInline>
        <track kind="captions" />
      </video>
    );
  }

  return (
    <div
      className="vpb-vh-modal"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="vpb-vh-modal-body" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="vpb-vh-modal-close"
          onClick={onClose}
          aria-label="Close trailer"
        >
          ×
        </button>
        <div className="vpb-vh-modal-frame">{playerNode}</div>
      </div>
    </div>
  );
};

export default TrailerModal;
