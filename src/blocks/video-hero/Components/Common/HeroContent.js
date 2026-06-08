/**
 * The actual content layer: eyebrow, headline, subheadline, CTAs, and the
 * optional "Watch trailer" button. Pure presentational - any state for the
 * trailer modal lives in the Hero wrapper.
 */
const HeroContent = ({ attributes, onOpenTrailer }) => {
  const {
    eyebrowText,
    eyebrowColor,
    headline,
    headlineColor,
    headlineSize,
    headlineWeight,
    subheadline,
    subheadlineColor,
    subheadlineSize,
    primaryCta = {},
    secondaryCta = {},
    primaryCtaColor,
    primaryCtaTextColor,
    secondaryCtaColor,
    secondaryCtaTextColor,
    ctaBorderRadius = 8,
    trailerEnabled,
    trailerButtonLabel,
    trailerButtonStyle = "pill",
  } = attributes;

  const renderCta = (cta, isPrimary) => {
    if (!cta?.label) return null;
    const style = cta.style || (isPrimary ? "filled" : "ghost");
    const bg = isPrimary ? primaryCtaColor : secondaryCtaColor;
    const fg = isPrimary ? primaryCtaTextColor : secondaryCtaTextColor;
    const inline = { borderRadius: `${ctaBorderRadius}px` };

    if (style === "filled") {
      inline.background = bg;
      inline.color = fg;
      inline.border = `1px solid ${bg}`;
    } else if (style === "outline") {
      inline.background = "transparent";
      inline.color = bg;
      inline.border = `1px solid ${bg}`;
    } else if (style === "ghost") {
      inline.background = "rgba(255,255,255,0.08)";
      inline.color = fg;
      inline.border = "1px solid rgba(255,255,255,0.2)";
    } else if (style === "underline") {
      inline.background = "transparent";
      inline.color = fg;
      inline.border = "none";
      inline.borderBottom = `2px solid ${bg}`;
      inline.borderRadius = 0;
      inline.padding = "4px 0";
    }

    return (
      <a
        className={`vpb-vh-cta vpb-vh-cta--${isPrimary ? "primary" : "secondary"} is-style-${style}`}
        href={cta.url || "#"}
        target={cta.openInNewTab ? "_blank" : "_self"}
        rel={cta.openInNewTab ? "noopener noreferrer" : undefined}
        style={inline}
      >
        {cta.label}
      </a>
    );
  };

  return (
    <div className="vpb-vh-content">
      {eyebrowText ? (
        <div className="vpb-vh-eyebrow" style={{ color: eyebrowColor }}>
          {eyebrowText}
        </div>
      ) : null}

      {headline ? (
        <h1
          className="vpb-vh-headline"
          style={{
            color: headlineColor,
            fontSize: headlineSize,
            fontWeight: headlineWeight,
          }}
          dangerouslySetInnerHTML={{ __html: headline }}
        />
      ) : null}

      {subheadline ? (
        <p
          className="vpb-vh-subheadline"
          style={{ color: subheadlineColor, fontSize: subheadlineSize }}
          dangerouslySetInnerHTML={{ __html: subheadline }}
        />
      ) : null}

      {(primaryCta?.label || secondaryCta?.label || trailerEnabled) && (
        <div className="vpb-vh-actions">
          {renderCta(primaryCta, true)}
          {renderCta(secondaryCta, false)}

          {trailerEnabled && (
            <button
              type="button"
              className={`vpb-vh-trailer-btn vpb-vh-trailer-btn--${trailerButtonStyle}`}
              onClick={onOpenTrailer}
              aria-label={trailerButtonLabel || "Watch trailer"}
            >
              <span className="vpb-vh-trailer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <polygon points="6,4 20,12 6,20" />
                </svg>
              </span>
              <span className="vpb-vh-trailer-label">
                {trailerButtonLabel || "Watch trailer"}
              </span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default HeroContent;
