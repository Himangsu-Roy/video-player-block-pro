import { stopsToGradient } from "../../utils/functions";

/**
 * Renders the layered visual overlay on top of the background video:
 *
 *   - solid    -> flat overlay color
 *   - gradient -> linear gradient from overlayColors stops
 *   - radial   -> radial gradient from overlayColors stops
 *   - noise    -> SVG noise texture (subtle film-grain look)
 *
 * Always renders the vignette layer when vignetteStrength > 0 and the
 * optional blur layer when overlayBlur > 0.
 */
const Overlay = ({ attributes }) => {
  const {
    overlayType = "gradient",
    overlayColor,
    overlayColors = [],
    overlayGradientAngle = 180,
    overlayBlendMode = "normal",
    overlayBlur = 0,
    noiseOpacity = 0,
    vignetteStrength = 0,
  } = attributes;

  let background = "transparent";
  if (overlayType === "solid") {
    background = overlayColor || "rgba(0,0,0,0.5)";
  } else if (overlayType === "gradient") {
    background = stopsToGradient(overlayColors, overlayGradientAngle, "linear");
  } else if (overlayType === "radial") {
    background = stopsToGradient(overlayColors, overlayGradientAngle, "radial");
  }

  const showOverlay = overlayType !== "none";

  return (
    <>
      {showOverlay && (
        <div
          className="vpb-vh-overlay"
          aria-hidden="true"
          style={{
            background,
            mixBlendMode: overlayBlendMode,
            backdropFilter: overlayBlur ? `blur(${overlayBlur}px)` : undefined,
            WebkitBackdropFilter: overlayBlur
              ? `blur(${overlayBlur}px)`
              : undefined,
          }}
        />
      )}
      {(overlayType === "noise" || noiseOpacity > 0) && (
        <div
          className="vpb-vh-noise"
          aria-hidden="true"
          style={{ opacity: noiseOpacity / 100 }}
        />
      )}
      {vignetteStrength > 0 && (
        <div
          className="vpb-vh-vignette"
          aria-hidden="true"
          style={{
            boxShadow: `inset 0 0 ${Math.max(80, vignetteStrength * 3)}px ${vignetteStrength * 2}px rgba(0,0,0,0.85)`,
          }}
        />
      )}
    </>
  );
};

export default Overlay;
