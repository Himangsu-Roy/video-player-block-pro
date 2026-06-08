import { resolveAspect } from "../../utils/functions";

const shadowToCss = (s) => {
  if (!s) return "none";
  return `${s.x || 0}px ${s.y || 0}px ${s.blur || 0}px ${s.spread || 0}px ${s.color || "rgba(0,0,0,0.18)"}`;
};

const Style = ({ attributes, id }) => {
  const {
    columns = {},
    gap = 16,
    aspectRatio = "16:9",
    customAspect = "16/9",
    tileBorderRadius = 10,
    tileShadow = {},
    tileOverlayColor,
    tileBgColor,
    titleColor,
    descriptionColor,
    filterActiveColor,
    filterTextColor,
    playIconColor,
    playIconBgColor,
    carouselSettings = {},
  } = attributes;

  const cols = {
    desktop: 3,
    tablet: 2,
    mobile: 1,
    ...columns,
  };

  const aspect = resolveAspect(aspectRatio, customAspect);
  const sel = `#${id}`;

  const css = `
    ${sel} {
      --vpb-vg-gap: ${gap}px;
      --vpb-vg-cols-d: ${cols.desktop};
      --vpb-vg-cols-t: ${cols.tablet};
      --vpb-vg-cols-m: ${cols.mobile};
      --vpb-vg-aspect: ${aspect};
      --vpb-vg-tile-radius: ${tileBorderRadius}px;
      --vpb-vg-tile-shadow: ${shadowToCss(tileShadow)};
      --vpb-vg-tile-bg: ${tileBgColor || "#0f1115"};
      --vpb-vg-overlay: ${tileOverlayColor || "rgba(0,0,0,0.45)"};
      --vpb-vg-title: ${titleColor || "#fff"};
      --vpb-vg-desc: ${descriptionColor || "rgba(255,255,255,0.78)"};
      --vpb-vg-filter-active: ${filterActiveColor || "#136EF5"};
      --vpb-vg-filter-text: ${filterTextColor || "#1d1d1f"};
      --vpb-vg-play-color: ${playIconColor || "#fff"};
      --vpb-vg-play-bg: ${playIconBgColor || "rgba(19,110,245,0.92)"};
      --vpb-vg-cslides: ${carouselSettings.slidesToShow || 3};
    }
  `;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
};

export default Style;
