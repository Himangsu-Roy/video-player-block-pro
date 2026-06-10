import { useEffect, useRef, useState } from "react";
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
import EditorEmbedPortal from "../../../_shared/media/EditorEmbedPortal";
import AdaptiveVideo from "../../../_shared/media/AdaptiveVideo";

/**
 * Inline CSS injected into the top-level admin window when the lightbox modal
 * is open inside the block editor. We portal the modal there so it isn't
 * confined to the editor iframe, and this ensures the styles travel with it.
 */
const MODAL_STYLES_ID = "vpb-vl-modal-editor-styles";

const injectTopWindowStyles = () => {
  const topDoc = window.top?.document || window.document;
  if (topDoc.getElementById(MODAL_STYLES_ID)) return;

  const style = topDoc.createElement("style");
  style.id = MODAL_STYLES_ID;
  style.textContent = `
    .vpb-vl-modal {
      position: fixed;
      inset: 0;
      z-index: 100000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    .vpb-vl-modal--anim-fade { animation: vpbVlFade 0.2s ease-out; }
    .vpb-vl-modal--anim-scale .vpb-vl-modal-body { animation: vpbVlScale 0.22s cubic-bezier(0.2,0.8,0.2,1); }
    .vpb-vl-modal--anim-slide .vpb-vl-modal-body { animation: vpbVlSlide 0.28s cubic-bezier(0.2,0.8,0.2,1); }
    @keyframes vpbVlFade { from { opacity: 0; } to { opacity: 1; } }
    @keyframes vpbVlScale { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }
    @keyframes vpbVlSlide { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .vpb-vl-modal-backdrop { position: absolute; inset: 0; }
    .vpb-vl-modal-body {
      position: relative;
      width: 100%;
      max-height: calc(100vh - 48px);
      overflow: hidden;
      box-shadow: 0 40px 80px rgba(0,0,0,0.6);
      z-index: 1;
    }
    .vpb-vl-modal--theme-dark .vpb-vl-modal-body { background: #000; color: #fff; }
    .vpb-vl-modal--theme-light .vpb-vl-modal-body { background: #fff; color: #111; }
    .vpb-vl-modal--theme-glass .vpb-vl-modal-body {
      background: rgba(20,20,20,0.55); color: #fff;
      backdrop-filter: blur(18px) saturate(180%);
      -webkit-backdrop-filter: blur(18px) saturate(180%);
      border: 1px solid rgba(255,255,255,0.08);
    }
    .vpb-vl-modal--size-fullscreen .vpb-vl-modal-body {
      width: 100vw; height: 100vh; max-height: 100vh; border-radius: 0 !important;
    }
    .vpb-vl-modal-frame {
      position: relative; width: 100%;
    }
    .vpb-vl-modal-frame > iframe,
    .vpb-vl-modal-frame > video {
      position: absolute; inset: 0; width: 100%; height: 100%; border: 0; background: #000;
    }
    .vpb-vl-modal--size-fullscreen .vpb-vl-modal-frame { aspect-ratio: auto !important; height: 100%; }
    .vpb-vl-close {
      position: absolute; top: 10px; right: 10px; z-index: 5;
      background: rgba(255,255,255,0.16); color: #fff; border: 0;
      cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
      transition: background 0.15s ease, transform 0.15s ease;
    }
    .vpb-vl-close:hover { background: rgba(255,255,255,0.28); transform: rotate(90deg); }
    .vpb-vl-close--circle { width: 38px; height: 38px; border-radius: 50%; padding: 9px; }
    .vpb-vl-close--square { width: 38px; height: 38px; border-radius: 4px; padding: 9px; }
    .vpb-vl-close--minimal { background: transparent; width: 32px; height: 32px; padding: 4px; }
    .vpb-vl-modal--theme-light .vpb-vl-close { background: rgba(0,0,0,0.08); color: #111; }
    .vpb-vl-modal--theme-light .vpb-vl-close:hover { background: rgba(0,0,0,0.16); }
    .vpb-vl-modal-empty { padding: 64px 24px; text-align: center; color: inherit; opacity: 0.85; }
  `;
  topDoc.head.appendChild(style);
};

const removeTopWindowStyles = () => {
  const topDoc = window.top?.document || window.document;
  topDoc.getElementById(MODAL_STYLES_ID)?.remove();
};

/**
 * The lightbox modal. Lazy: we build the player <iframe> / <video> only
 * once the modal mounts, so nothing heavy ships on the initial page load.
 *
 * In the editor the modal is portaled to the top-level admin window so it
 * renders above the editor iframe. On the frontend it portals to the
 * current document body as usual.
 */
const Modal = ({ attributes, blockId, onClose, inEditor = false }) => {
  const {
    videoUrl,
    videoSource = "youtube",
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
  const [portalTarget, setPortalTarget] = useState(null);

  // Determine portal target: top window body for editor, current body for frontend.
  useEffect(() => {
    if (inEditor) {
      injectTopWindowStyles();
      const topBody = window.top?.document?.body || document.body;
      setPortalTarget(topBody);
    } else {
      setPortalTarget(document.body);
    }

    return () => {
      if (inEditor) removeTopWindowStyles();
    };
  }, [inEditor]);

  useEffect(() => {
    if (!closeOnEsc) return undefined;

    // In the editor, listen on the top window so Escape works even when
    // focus is on the top-window-portaled modal.
    const targetDoc = inEditor
      ? window.top?.document || document
      : document;

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    targetDoc.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Also lock the top window scroll in the editor.
    let prevTopOverflow;
    if (inEditor && window.top?.document?.body) {
      prevTopOverflow = window.top.document.body.style.overflow;
      window.top.document.body.style.overflow = "hidden";
    }

    // Focus the dialog so SR users hear the dialog label.
    dialogRef.current?.focus?.();

    return () => {
      targetDoc.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      if (inEditor && window.top?.document?.body && prevTopOverflow !== undefined) {
        window.top.document.body.style.overflow = prevTopOverflow;
      }
    };
  }, [closeOnEsc, onClose, inEditor]);

  if (typeof document === "undefined" || !portalTarget) return null;

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
      const allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen";

      // In the editor the modal is already portaled to the top window, so
      // we can render the iframe directly — no need for EditorEmbedPortal.
      return (
        <div className="vpb-vl-modal-frame">
          <iframe
            src={iframeSrc}
            title={a11yModalLabel}
            allow={allow}
            allowFullScreen
            loading="eager"
          />
        </div>
      );
    }

    // Native / HLS / DASH / Bunny / MP4
    return (
      <div className="vpb-vl-modal-frame">
        <AdaptiveVideo
          src={videoUrl}
          sourceType={videoSource}
          controls
          autoPlay={!!autoplayOnOpen}
          muted={!!muteOnOpen}
          loop={!!loopVideo}
          playsInline
        >
          <track kind="captions" />
        </AdaptiveVideo>
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

  return createPortal(node, portalTarget);
};

export default Modal;
