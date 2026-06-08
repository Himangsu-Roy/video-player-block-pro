import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  getYoutubeId,
  getVimeoId,
  getWistiaId,
  isYoutube,
  isVimeo,
  isWistia,
} from "../../utils/functions";
import { closeIcon } from "../../utils/icons";

/**
 * The lightbox modal. Lazy: we build the player <iframe> / <video> only
 * once the modal mounts, so nothing heavy ships on the initial page load.
 * Portaled to <body> so the parent's overflow/transform never traps it.
 */
const Modal = ({ attributes, blockId, onClose }) => {
  const {
    videoUrl,
    videoSource = "youtube",
    videoEngine = "plyr",
    modalTheme = "dark",
    modalAnimation = "fade",
    modalSize = "large",
    autoplayOnOpen = true,
    muteOnOpen = false,
    loopVideo = false,
    closeOnOverlayClick = true,
    closeOnEsc = true,
    showCloseButton = true,
    closeButtonStyle = "circle",
    a11yModalLabel = "Video player dialog",
  } = attributes;

  const dialogRef = useRef(null);

  useEffect(() => {
    if (!closeOnEsc) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Focus the dialog so SR users hear the dialog label.
    dialogRef.current?.focus?.();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [closeOnEsc, onClose]);

  if (typeof document === "undefined") return null;

  const buildIframeSrc = () => {
    const src = videoSource;
    if (src === "youtube" || isYoutube(videoUrl)) {
      const id = getYoutubeId(videoUrl);
      if (!id) return null;
      const params = new URLSearchParams({
        autoplay: autoplayOnOpen ? "1" : "0",
        mute: muteOnOpen ? "1" : "0",
        loop: loopVideo ? "1" : "0",
        rel: "0",
        modestbranding: "1",
      });
      if (loopVideo) params.set("playlist", id);
      return `https://www.youtube.com/embed/${id}?${params.toString()}`;
    }
    if (src === "vimeo" || isVimeo(videoUrl)) {
      const id = getVimeoId(videoUrl);
      if (!id) return null;
      const params = new URLSearchParams({
        autoplay: autoplayOnOpen ? "1" : "0",
        muted: muteOnOpen ? "1" : "0",
        loop: loopVideo ? "1" : "0",
        title: "0",
        byline: "0",
        portrait: "0",
      });
      return `https://player.vimeo.com/video/${id}?${params.toString()}`;
    }
    if (src === "wistia" || isWistia(videoUrl)) {
      const id = getWistiaId(videoUrl);
      if (!id) return null;
      const params = new URLSearchParams({
        autoPlay: autoplayOnOpen ? "true" : "false",
        muted: muteOnOpen ? "true" : "false",
      });
      return `https://fast.wistia.net/embed/iframe/${id}?${params.toString()}`;
    }
    return null;
  };

  const renderPlayer = () => {
    if (!videoUrl) {
      return (
        <div className="vpb-vl-modal-empty">No video URL configured.</div>
      );
    }

    const iframeSrc = buildIframeSrc();
    if (iframeSrc) {
      return (
        <div className="vpb-vl-modal-frame">
          <iframe
            src={iframeSrc}
            title={a11yModalLabel}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            loading="eager"
            data-engine={videoEngine}
          />
        </div>
      );
    }

    // Native / HLS / Bunny / MP4
    return (
      <div className="vpb-vl-modal-frame">
        <video
          src={videoUrl}
          controls
          autoPlay={!!autoplayOnOpen}
          muted={!!muteOnOpen}
          loop={!!loopVideo}
          playsInline
          data-engine={videoEngine}
        >
          <track kind="captions" />
        </video>
      </div>
    );
  };

  const node = (
    <div
      data-vpb-vl-modal={blockId}
      className={`vpb-vl-modal vpb-vl-modal--theme-${modalTheme} vpb-vl-modal--size-${modalSize} vpb-vl-modal--anim-${modalAnimation}`}
      role="dialog"
      aria-modal="true"
      aria-label={a11yModalLabel}
      ref={dialogRef}
      tabIndex="-1"
    >
      <div
        className="vpb-vl-modal-backdrop"
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden="true"
      />
      <div className="vpb-vl-modal-body">
        {showCloseButton && (
          <button
            type="button"
            className={`vpb-vl-close vpb-vl-close--${closeButtonStyle}`}
            onClick={onClose}
            aria-label="Close video"
          >
            {closeIcon}
          </button>
        )}
        {renderPlayer()}
      </div>
    </div>
  );

  return createPortal(node, document.body);
};

export default Modal;
