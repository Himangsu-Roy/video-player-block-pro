import { useEffect, useRef } from "react";
import { aspectToCss, resolveModalMaxWidth } from "../../utils/functions";

/**
 * Per-instance CSS custom properties + rules. Inlined as a scoped <style>
 * tag so the same logic works in the editor preview and on the frontend.
 *
 * When `inEditor` is true, the modal-specific rules are also injected into
 * the top-level admin window (since the modal is portaled there).
 */
const Style = ({ attributes, id, inEditor = false }) => {
  const {
    thumbnailAspectRatio = "16:9",
    thumbnailBorderRadius = 12,
    playIconSize = 72,
    playIconColor = "#ffffff",
    playIconBgColor = "rgba(0,0,0,0.55)",
    thumbnailOverlayColor = "rgba(0,0,0,0.15)",
    buttonBgColor = "#136EF5",
    buttonTextColor = "#ffffff",
    buttonBorderRadius = 8,
    triggerMaxWidth = "640px",
    modalSize = "large",
    modalMaxWidth = 1080,
    modalAspectRatio = "16:9",
    modalBgColor = "#000000",
    modalOverlayColor = "#000000",
    modalOverlayOpacity = 85,
    modalBorderRadius = 10,
    captionColor = "#000000",
  } = attributes;

  const sel = `#${id}`;
  const thumbAr = aspectToCss(thumbnailAspectRatio);
  const modalAr = aspectToCss(modalAspectRatio);
  const maxW = resolveModalMaxWidth(modalSize, modalMaxWidth);

  // Convert percent opacity to 0-1 with two decimal precision.
  const overlayAlpha = Math.max(0, Math.min(100, modalOverlayOpacity)) / 100;

  const triggerCss = `
    ${sel} .vpb-vl-wrap { max-width: ${triggerMaxWidth || "100%"}; }
    ${sel} .vpb-vl-thumb-wrap {
      border-radius: ${thumbnailBorderRadius}px;
      ${thumbAr ? `aspect-ratio: ${thumbAr};` : ""}
    }
    ${sel} .vpb-vl-overlay { background: ${thumbnailOverlayColor}; }
    ${sel} .vpb-vl-play {
      width: ${playIconSize}px;
      height: ${playIconSize}px;
      color: ${playIconColor};
      background: ${playIconBgColor};
    }
    ${sel} .vpb-vl-play--minimal { color: ${playIconColor}; }
    ${sel} .vpb-vl-btn {
      background: ${buttonBgColor};
      color: ${buttonTextColor};
      border-radius: ${buttonBorderRadius}px;
    }
    ${sel} .vpb-vl-btn.vpb-vl-btn--outline,
    ${sel} .vpb-vl-btn.vpb-vl-btn--ghost,
    ${sel} .vpb-vl-btn.vpb-vl-btn--underline { color: ${buttonBgColor}; }
    ${sel} .vpb-vl-caption { color: ${captionColor}; }
  `;

  const modalCss = `
    /* Modal styles are scoped via a data attribute since the modal is
       portaled to the document root, not nested inside the block.       */
    [data-vpb-vl-modal="${id}"] .vpb-vl-modal-backdrop {
      background: ${modalOverlayColor};
      opacity: ${overlayAlpha};
    }
    [data-vpb-vl-modal="${id}"] .vpb-vl-modal-body {
      max-width: ${maxW};
      background: ${modalBgColor};
      border-radius: ${modalBorderRadius}px;
    }
    [data-vpb-vl-modal="${id}"] .vpb-vl-modal-frame {
      ${modalAr ? `aspect-ratio: ${modalAr};` : "aspect-ratio: 16 / 9;"}
    }
  `;

  const styleId = `vpb-vl-modal-instance-${id}`;
  const prevStyleRef = useRef(null);

  // In the editor the modal is portaled to the top window, so the
  // per-instance modal CSS must also live there.
  useEffect(() => {
    if (!inEditor) return undefined;

    const topDoc = window.top?.document || window.document;

    // Remove any previous version of this style.
    topDoc.getElementById(styleId)?.remove();

    const el = topDoc.createElement("style");
    el.id = styleId;
    el.textContent = modalCss;
    topDoc.head.appendChild(el);
    prevStyleRef.current = el;

    return () => {
      el.remove();
      prevStyleRef.current = null;
    };
  }, [inEditor, modalCss, styleId]);

  // On the frontend the full CSS (trigger + modal) lives inline.
  const fullCss = `${triggerCss}\n${modalCss}`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: inEditor ? triggerCss : fullCss,
      }}
    />
  );
};

export default Style;
