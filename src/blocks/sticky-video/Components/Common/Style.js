import { resolveAspectRatio, resolveBoxShadow } from "../../utils/functions";

/**
 * Emits the per-instance CSS custom properties for a sticky-video block,
 * scoped to its wrapper id. Used in both the editor preview and on the
 * frontend so the same rules apply everywhere.
 */
const Style = ({ attributes, id }) => {
  const {
    inlineWidth = "100%",
    aspectRatio = "16:9",
    customAspectRatio = "16/9",
    stickyWidth = 360,
    stickyMargin = 20,
    borderRadius = 8,
    boxShadow = "medium",
    accentColor = "#136EF5",
    controlColor = "#ffffff",
    dockBackground = "#000000",
  } = attributes;

  const sel = `#${id}`;
  const ar = resolveAspectRatio(aspectRatio, customAspectRatio);

  const css = `
    ${sel} {
      --vpb-sv-inline-width: ${inlineWidth || "100%"};
      --vpb-sv-aspect: ${ar};
      --vpb-sv-sticky-width: ${stickyWidth}px;
      --vpb-sv-margin: ${stickyMargin}px;
      --vpb-sv-radius: ${borderRadius}px;
      --vpb-sv-shadow: ${resolveBoxShadow(boxShadow)};
      --vpb-sv-accent: ${accentColor};
      --vpb-sv-control: ${controlColor};
      --vpb-sv-dock-bg: ${dockBackground};
    }
  `;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
};

export default Style;
