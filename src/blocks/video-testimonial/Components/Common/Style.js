import { aspectToCss, resolveCardBackground } from "../../utils/functions";

/**
 * Scoped per-instance styles. Inlined so the editor preview and the
 * frontend render share the same exact CSS.
 */
const Style = ({ attributes, id }) => {
  const {
    layout = "media-left",
    aspectRatio = "16:9",
    borderRadius = 16,
    cardPadding = 28,
    cardShadow = true,
    mediaWidth = 48,
    maxWidth = 980,
    accentColor = "#136EF5",
    cardBackground,
    cardTextColor = "#0f172a",
    mutedTextColor = "#64748b",
    quoteStyle = "large-quote-mark",
  } = attributes;

  const sel = `#${id}`;
  const ar = aspectToCss(aspectRatio);
  const bg = resolveCardBackground(cardBackground);

  const mw = Math.max(20, Math.min(80, Number(mediaWidth) || 48));
  const contentWidth = 100 - mw;

  const isSideLayout = layout === "media-left" || layout === "media-right";
  const isTopLayout = layout === "media-top";

  const shadow = cardShadow
    ? "0 18px 48px rgba(15, 23, 42, 0.12), 0 2px 6px rgba(15, 23, 42, 0.06)"
    : "none";

  const bubbleBg =
    quoteStyle === "card-bubble"
      ? "background: rgba(15,23,42,0.05);"
      : "";

  const css = `
    ${sel} .vpb-vt {
      max-width: ${Math.max(280, Number(maxWidth) || 980)}px;
      border-radius: ${Math.max(0, Number(borderRadius) || 0)}px;
      background: ${bg};
      color: ${cardTextColor};
      box-shadow: ${shadow};
    }
    ${sel} .vpb-vt-media {
      width: ${isSideLayout ? mw + "%" : "100%"};
    }
    ${sel} .vpb-vt-content {
      width: ${isSideLayout ? contentWidth + "%" : "100%"};
      padding: ${Math.max(0, Number(cardPadding) || 28)}px;
    }
    ${sel} .vpb-vt-media-frame {
      aspect-ratio: ${ar};
    }
    ${sel} .vpb-vt-play {
      color: ${accentColor};
    }
    ${sel} .vpb-vt-rating-star--full {
      color: ${accentColor === "#136EF5" ? "#f59e0b" : accentColor};
    }
    ${sel} .vpb-vt-author-title {
      color: ${mutedTextColor};
    }
    ${sel} .vpb-vt-quote--large-quote-mark::before {
      color: ${accentColor};
    }
    ${sel} .vpb-vt-quote--card-bubble {
      ${bubbleBg}
    }
    ${isTopLayout ? `${sel} .vpb-vt-media-frame { border-radius: 0; }` : ""}
  `;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
};

export default Style;
