import { resolveAspect, shadowToCss } from "../../utils/functions";

const Style = ({ attributes, id }) => {
  const {
    aspectRatio = "9:16",
    accentColor = "#136EF5",
    ctaTextColor = "#ffffff",
    overlayTextColor = "#ffffff",
    overlayMutedColor = "rgba(255,255,255,0.78)",
    containerBackground = "#000000",
    overlayGradient = "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.75) 100%)",
    borderRadius = 18,
    cardShadow = {},
    progressBarColor = "#ffffff",
    progressBarTrackColor = "rgba(255,255,255,0.25)",
    actionRailIconColor = "#ffffff",
    hashtagColor = "rgba(255,255,255,0.9)",
    feedMaxWidth = 420,
    containerHeight = 720,
    gridColumns = { desktop: 4, tablet: 3, mobile: 2 },
  } = attributes;

  const aspect = resolveAspect(aspectRatio);
  const sel = `#${id} .vpb-vr-root`;

  const css = `
    ${sel} {
      --vpb-vr-aspect: ${aspect};
      --vpb-vr-accent: ${accentColor};
      --vpb-vr-cta-text: ${ctaTextColor};
      --vpb-vr-text: ${overlayTextColor};
      --vpb-vr-muted: ${overlayMutedColor};
      --vpb-vr-bg: ${containerBackground};
      --vpb-vr-overlay: ${overlayGradient};
      --vpb-vr-radius: ${borderRadius}px;
      --vpb-vr-shadow: ${shadowToCss(cardShadow)};
      --vpb-vr-progress: ${progressBarColor};
      --vpb-vr-progress-track: ${progressBarTrackColor};
      --vpb-vr-rail-icon: ${actionRailIconColor};
      --vpb-vr-hash-color: ${hashtagColor};
      --vpb-vr-feed-width: ${feedMaxWidth}px;
      --vpb-vr-height: ${containerHeight}px;
      --vpb-vr-cols: ${gridColumns.desktop || 4};
      --vpb-vr-cols-tablet: ${gridColumns.tablet || 3};
      --vpb-vr-cols-mobile: ${gridColumns.mobile || 2};
    }
  `;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
};

export default Style;
