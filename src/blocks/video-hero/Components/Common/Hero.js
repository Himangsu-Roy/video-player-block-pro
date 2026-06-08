import { useState } from "react";
import BackgroundVideo from "./BackgroundVideo";
import Overlay from "./Overlay";
import HeroContent from "./HeroContent";
import TrailerModal from "./TrailerModal";
import ScrollIndicator from "./ScrollIndicator";

/**
 * The Hero wrapper - composes the background video, overlay layers, the
 * content layer (eyebrow / headline / sub / CTAs) and the optional trailer
 * modal and scroll indicator.
 *
 * Used by both the editor preview and the frontend hydration entry point.
 */
const Hero = ({ attributes, inEditor = false }) => {
  const [trailerOpen, setTrailerOpen] = useState(false);

  const {
    contentAlignment = { horizontal: "center", vertical: "middle" },
    contentMaxWidth,
    contentPadding,
    scrollIndicator,
    scrollIndicatorStyle,
    scrollIndicatorColor,
    ariaLabel,
  } = attributes;

  const hAlign = contentAlignment?.horizontal || "center";
  const vAlign = contentAlignment?.vertical || "middle";

  return (
    <div
      className={`vpb-vh-stage vpb-vh-halign-${hAlign} vpb-vh-valign-${vAlign}`}
      role="region"
      aria-label={ariaLabel || "Hero section"}
    >
      <BackgroundVideo attributes={attributes} inEditor={inEditor} />
      <Overlay attributes={attributes} />

      <div
        className="vpb-vh-content-wrap"
        style={{
          maxWidth: contentMaxWidth || "780px",
          padding: contentPadding || "32px",
        }}
      >
        <HeroContent
          attributes={attributes}
          onOpenTrailer={() => setTrailerOpen(true)}
        />
      </div>

      {scrollIndicator && (
        <ScrollIndicator
          style={scrollIndicatorStyle}
          color={scrollIndicatorColor}
        />
      )}

      {trailerOpen && (
        <TrailerModal
          attributes={attributes}
          onClose={() => setTrailerOpen(false)}
        />
      )}
    </div>
  );
};

export default Hero;
