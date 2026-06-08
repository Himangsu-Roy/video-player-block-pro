import { aspectToCss, resolveModalMaxWidth } from "../../utils/functions";

/**
 * Per-instance CSS custom properties + rules. Inlined as a scoped <style>
 * tag so the same logic works in the editor preview and on the frontend.
 */
const Style = ({ attributes, id }) => {
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
    captionColor = "#ffffff",
  } = attributes;

  const sel = `#${id}`;
  const thumbAr = aspectToCss(thumbnailAspectRatio);
  const modalAr = aspectToCss(modalAspectRatio);
  const maxW = resolveModalMaxWidth(modalSize, modalMaxWidth);

  // Convert percent opacity to 0-1 with two decimal precision.
  const overlayAlpha = Math.max(0, Math.min(100, modalOverlayOpacity)) / 100;

  const css = `
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

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
};

export default Style;
