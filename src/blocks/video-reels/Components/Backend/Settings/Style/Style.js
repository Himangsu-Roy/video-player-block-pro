import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  RangeControl,
  TextControl,
  __experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import { ColorControl } from "../../../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes }) => {
  const {
    accentColor,
    ctaTextColor,
    overlayTextColor,
    overlayMutedColor,
    containerBackground,
    overlayGradient,
    borderRadius,
    cardShadow = {},
    progressBarColor,
    progressBarTrackColor,
    actionRailIconColor,
    hashtagColor,
  } = attributes;

  const shadow = {
    x: 0,
    y: 18,
    blur: 48,
    spread: 0,
    color: "rgba(0,0,0,0.45)",
    ...cardShadow,
  };

  const updateShadow = (key, val) =>
    setAttributes({ cardShadow: { ...shadow, [key]: val } });

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Brand & Container", "video-player-block")}
        initialOpen={true}>
        <ColorControl
          label={__("Accent / CTA Color", "video-player-block")}
          value={accentColor}
          onChange={(val) => setAttributes({ accentColor: val })}
        />
        <ColorControl
          label={__("CTA Text Color", "video-player-block")}
          value={ctaTextColor}
          onChange={(val) => setAttributes({ ctaTextColor: val })}
        />
        <ColorControl
          label={__("Container Background", "video-player-block")}
          value={containerBackground}
          onChange={(val) => setAttributes({ containerBackground: val })}
        />
        <RangeControl
          label={__("Border Radius (px)", "video-player-block")}
          value={borderRadius}
          min={0}
          max={48}
          onChange={(val) => setAttributes({ borderRadius: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Overlay Text", "video-player-block")}
        initialOpen={false}>
        <ColorControl
          label={__("Overlay Text", "video-player-block")}
          value={overlayTextColor}
          onChange={(val) => setAttributes({ overlayTextColor: val })}
        />
        <ColorControl
          label={__("Overlay Muted Text", "video-player-block")}
          value={overlayMutedColor}
          onChange={(val) => setAttributes({ overlayMutedColor: val })}
        />
        <ColorControl
          label={__("Hashtag Color", "video-player-block")}
          value={hashtagColor}
          onChange={(val) => setAttributes({ hashtagColor: val })}
        />
        <TextControl
          label={__("Overlay Gradient (CSS)", "video-player-block")}
          value={overlayGradient}
          onChange={(val) => setAttributes({ overlayGradient: val })}
          help={__(
            "Any valid CSS background value. The default fades the bottom of each clip to dark for legibility.",
            "video-player-block",
          )}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Progress & Action Rail", "video-player-block")}
        initialOpen={false}>
        <ColorControl
          label={__("Progress Bar Color", "video-player-block")}
          value={progressBarColor}
          onChange={(val) => setAttributes({ progressBarColor: val })}
        />
        <ColorControl
          label={__("Progress Bar Track", "video-player-block")}
          value={progressBarTrackColor}
          onChange={(val) => setAttributes({ progressBarTrackColor: val })}
        />
        <ColorControl
          label={__("Action Rail Icons", "video-player-block")}
          value={actionRailIconColor}
          onChange={(val) => setAttributes({ actionRailIconColor: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Card Drop Shadow", "video-player-block")}
        initialOpen={false}>
        <NumberControl
          label={__("X offset (px)", "video-player-block")}
          value={shadow.x}
          onChange={(val) => updateShadow("x", parseInt(val || 0, 10))}
        />
        <NumberControl
          label={__("Y offset (px)", "video-player-block")}
          value={shadow.y}
          onChange={(val) => updateShadow("y", parseInt(val || 0, 10))}
        />
        <NumberControl
          label={__("Blur (px)", "video-player-block")}
          value={shadow.blur}
          onChange={(val) => updateShadow("blur", parseInt(val || 0, 10))}
        />
        <NumberControl
          label={__("Spread (px)", "video-player-block")}
          value={shadow.spread}
          onChange={(val) => updateShadow("spread", parseInt(val || 0, 10))}
        />
        <ColorControl
          label={__("Shadow Color", "video-player-block")}
          value={shadow.color}
          onChange={(val) => updateShadow("color", val)}
        />
      </PanelBody>
    </>
  );
};

export default Style;
