import { aspectToCss } from "../../utils/functions";

/**
 * Scoped per-instance styles. Inlined so the editor preview and the
 * frontend render share the same exact CSS.
 */
const Style = ({ attributes, id }) => {
  const {
    aspectRatio = "16:9",
    customAspectRatio = "21:9",
    borderRadius = 12,
    maxWidth = 1200,
    dividerColor = "#ffffff",
    dividerWidth = 3,
    handleColor = "#ffffff",
    handleBgColor = "#136EF5",
    handleSize = 44,
    labelBgColor = "rgba(0,0,0,0.65)",
    labelTextColor = "#ffffff",
  } = attributes;

  const sel = `#${id}`;
  const ar = aspectToCss(aspectRatio, customAspectRatio);

  const css = `
    ${sel} .vpb-vc {
      max-width: ${Math.max(120, Number(maxWidth) || 1200)}px;
      --vpb-vc-divider-w: ${Math.max(0, Number(dividerWidth) || 0)}px;
      margin-left: auto;
      margin-right: auto;
    }
    ${sel} .vpb-vc-frame {
      aspect-ratio: ${ar};
      border-radius: ${Math.max(0, Number(borderRadius) || 0)}px;
    }
    ${sel} .vpb-vc-divider {
      background: ${dividerColor};
    }
    ${sel} .vpb-vc-handle {
      width: ${Math.max(16, Number(handleSize) || 44)}px;
      height: ${Math.max(16, Number(handleSize) || 44)}px;
      background: ${handleBgColor};
      color: ${handleColor};
    }
    ${sel} .vpb-vc-handle--bar {
      width: ${Math.max(16, Number(handleSize) || 44) * 0.6}px;
      height: ${Math.max(16, Number(handleSize) || 44) * 1.4}px;
      border-radius: 6px;
    }
    ${sel} .vpb-vc-label {
      background: ${labelBgColor};
      color: ${labelTextColor};
    }
  `;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
};

export default Style;
