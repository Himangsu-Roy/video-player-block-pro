import { resolveHeroHeight } from "../../utils/functions";

/**
 * Emits the hero's per-instance CSS custom properties + the height/aspect
 * rules. Inlined as a <style> tag scoped to the block id so the same code
 * works in the editor and on the frontend.
 */
const Style = ({ attributes, id }) => {
  const {
    heightMode = "viewport",
    heightValue,
    heightAspect,
    minHeight,
    containerBorderRadius = 0,
  } = attributes;

  const sel = `#${id}`;
  const height = resolveHeroHeight(heightMode, heightValue);

  const stageRules =
    heightMode === "aspect"
      ? `aspect-ratio: ${heightAspect || "21/9"}; height: auto;`
      : `height: ${height};`;

  const css = `
    ${sel} { border-radius: ${containerBorderRadius}px; overflow: hidden; }
    ${sel} .vpb-vh-stage {
      ${stageRules}
      min-height: ${minHeight || "0"};
    }
  `;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
};

export default Style;
