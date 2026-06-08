import { __ } from "@wordpress/i18n";
import { PanelBody, RangeControl, ToggleControl } from "@wordpress/components";
import { ColorControl } from "../../../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes }) => {
  const {
    accentColor,
    cardBackground,
    cardTextColor,
    mutedTextColor,
    borderRadius,
    cardPadding,
    cardShadow,
    mediaWidth,
    maxWidth,
  } = attributes;

  const bgValue =
    (cardBackground && cardBackground.value) || "#ffffff";

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Colors", "video-player-block")}
        initialOpen={true}
      >
        <ColorControl
          label={__("Accent color", "video-player-block")}
          value={accentColor}
          onChange={(val) => setAttributes({ accentColor: val })}
        />
        <ColorControl
          label={__("Card background", "video-player-block")}
          value={bgValue}
          onChange={(val) =>
            setAttributes({
              cardBackground: { type: "color", value: val },
            })
          }
        />
        <ColorControl
          label={__("Body text", "video-player-block")}
          value={cardTextColor}
          onChange={(val) => setAttributes({ cardTextColor: val })}
        />
        <ColorControl
          label={__("Muted text (author title)", "video-player-block")}
          value={mutedTextColor}
          onChange={(val) => setAttributes({ mutedTextColor: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Card", "video-player-block")}
        initialOpen={false}
      >
        <RangeControl
          label={__("Border radius (px)", "video-player-block")}
          value={borderRadius ?? 16}
          min={0}
          max={60}
          onChange={(val) => setAttributes({ borderRadius: val })}
        />
        <RangeControl
          label={__("Inner padding (px)", "video-player-block")}
          value={cardPadding ?? 28}
          min={0}
          max={80}
          onChange={(val) => setAttributes({ cardPadding: val })}
        />
        <ToggleControl
          label={__("Drop shadow", "video-player-block")}
          checked={!!cardShadow}
          onChange={(val) => setAttributes({ cardShadow: val })}
        />
        <RangeControl
          label={__("Media width (%)", "video-player-block")}
          value={mediaWidth ?? 48}
          min={20}
          max={80}
          step={1}
          onChange={(val) => setAttributes({ mediaWidth: val })}
          help={__(
            "Only applies to side-by-side layouts.",
            "video-player-block",
          )}
        />
        <RangeControl
          label={__("Max width (px)", "video-player-block")}
          value={maxWidth ?? 980}
          min={320}
          max={1600}
          step={10}
          onChange={(val) => setAttributes({ maxWidth: val })}
        />
      </PanelBody>
    </>
  );
};

export default Style;
