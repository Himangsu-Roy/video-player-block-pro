import { resolveAspect } from "../../utils/functions";

const shadowToCss = (s) => {
  if (!s) return "none";
  return `${s.x || 0}px ${s.y || 0}px ${s.blur || 0}px ${s.spread || 0}px ${
    s.color || "rgba(0,0,0,0.35)"
  }`;
};

const Style = ({ attributes, id }) => {
  const {
    accentColor = "#136EF5",
    queueBackground = "#0f1115",
    queueTextColor = "#e6e7eb",
    queueMutedColor = "rgba(230, 231, 235, 0.65)",
    activeItemBackground = "rgba(19, 110, 245, 0.18)",
    hoverItemBackground = "rgba(255, 255, 255, 0.06)",
    playerBackground = "#000000",
    containerBackground = "#0b0c10",
    borderRadius = 12,
    boxShadow = {},
    padding = 0,
    gap = 16,
    aspectRatio = "16:9",
    customAspect = "16/9",
    queueWidth = 32,
    queueMaxHeight = 560,
  } = attributes;

  const aspect = resolveAspect(aspectRatio, customAspect);
  const sel = `#${id}`;

  const css = `
    ${sel} {
      --vpb-vp-accent: ${accentColor};
      --vpb-vp-queue-bg: ${queueBackground};
      --vpb-vp-queue-text: ${queueTextColor};
      --vpb-vp-queue-muted: ${queueMutedColor};
      --vpb-vp-active-bg: ${activeItemBackground};
      --vpb-vp-hover-bg: ${hoverItemBackground};
      --vpb-vp-player-bg: ${playerBackground};
      --vpb-vp-container-bg: ${containerBackground};
      --vpb-vp-radius: ${borderRadius}px;
      --vpb-vp-shadow: ${shadowToCss(boxShadow)};
      --vpb-vp-padding: ${padding}px;
      --vpb-vp-gap: ${gap}px;
      --vpb-vp-aspect: ${aspect};
      --vpb-vp-queue-width: ${queueWidth}%;
      --vpb-vp-queue-maxh: ${queueMaxHeight}px;
    }
  `;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
};

export default Style;
