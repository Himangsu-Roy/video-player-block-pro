import { playIcon } from "../../utils/icons";

/**
 * Renders the visible "click to open" surface (thumbnail / button / icon).
 * The actual modal mount is owned by <Lightbox>.
 */
const Trigger = ({ attributes, onOpen, a11yId }) => {
  const {
    triggerType = "thumbnail",
    thumbnailImage = {},
    buttonText = "Watch video",
    buttonIcon = "play",
    buttonStyle = "filled",
    playIconStyle = "circle",
    thumbnailHoverEffect = "zoom",
    showDuration,
    durationText,
    showCaption,
    captionText,
    a11yLabel = "Play video",
  } = attributes;

  const baseAria = {
    "aria-label": a11yLabel,
    "aria-haspopup": "dialog",
    "aria-controls": a11yId,
  };

  if (triggerType === "button") {
    return (
      <button
        type="button"
        className={`vpb-vl-trigger vpb-vl-btn vpb-vl-btn--${buttonStyle}`}
        onClick={onOpen}
        {...baseAria}
      >
        {buttonIcon === "play" && (
          <span className="vpb-vl-btn-icon" aria-hidden="true">
            {playIcon}
          </span>
        )}
        <span className="vpb-vl-btn-label">{buttonText}</span>
      </button>
    );
  }

  if (triggerType === "playIcon") {
    return (
      <button
        type="button"
        className="vpb-vl-trigger vpb-vl-icon-trigger"
        onClick={onOpen}
        {...baseAria}
      >
        <span className={`vpb-vl-play vpb-vl-play--${playIconStyle}`}>
          {playIcon}
        </span>
      </button>
    );
  }

  // Default: thumbnail
  const hoverClass = `vpb-vl-hover-${thumbnailHoverEffect || "none"}`;
  return (
    <>
      <button
        type="button"
        className={`vpb-vl-trigger ${hoverClass}`}
        onClick={onOpen}
        {...baseAria}
      >
        <span className="vpb-vl-thumb-wrap">
          {thumbnailImage?.url ? (
            <img
              src={thumbnailImage.url}
              alt={thumbnailImage.alt || ""}
              className="vpb-vl-thumb"
              loading="lazy"
            />
          ) : (
            <span
              className="vpb-vl-thumb"
              style={{ background: "#0a0a0a", display: "block" }}
            />
          )}
          <span className="vpb-vl-overlay" aria-hidden="true" />
          <span
            className={`vpb-vl-play vpb-vl-play--${playIconStyle}`}
            aria-hidden="true"
          >
            {playIcon}
          </span>
          {showDuration && durationText && (
            <span className="vpb-vl-duration">{durationText}</span>
          )}
        </span>
      </button>
      {showCaption && captionText && (
        <div className="vpb-vl-meta">
          <span className="vpb-vl-caption">{captionText}</span>
        </div>
      )}
    </>
  );
};

export default Trigger;
