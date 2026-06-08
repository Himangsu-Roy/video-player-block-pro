import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  RangeControl,
  __experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import { ColorControl } from "../../../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes }) => {
  const {
    accentColor,
    queueBackground,
    queueTextColor,
    queueMutedColor,
    activeItemBackground,
    hoverItemBackground,
    playerBackground,
    containerBackground,
    borderRadius,
    boxShadow = {},
    padding,
    gap,
  } = attributes;

  const shadow = {
    x: 0,
    y: 12,
    blur: 36,
    spread: 0,
    color: "rgba(0,0,0,0.35)",
    ...boxShadow,
  };

  const updateShadow = (key, val) =>
    setAttributes({ boxShadow: { ...shadow, [key]: val } });

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Accent & Player", "video-player-block")}
        initialOpen={true}>
        <ColorControl
          label={__("Accent Color", "video-player-block")}
          value={accentColor}
          onChange={(val) => setAttributes({ accentColor: val })}
        />
        <ColorControl
          label={__("Player Background", "video-player-block")}
          value={playerBackground}
          onChange={(val) => setAttributes({ playerBackground: val })}
        />
        <ColorControl
          label={__("Container Background", "video-player-block")}
          value={containerBackground}
          onChange={(val) => setAttributes({ containerBackground: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Queue Colors", "video-player-block")}
        initialOpen={false}>
        <ColorControl
          label={__("Queue Background", "video-player-block")}
          value={queueBackground}
          onChange={(val) => setAttributes({ queueBackground: val })}
        />
        <ColorControl
          label={__("Queue Text", "video-player-block")}
          value={queueTextColor}
          onChange={(val) => setAttributes({ queueTextColor: val })}
        />
        <ColorControl
          label={__("Queue Muted Text", "video-player-block")}
          value={queueMutedColor}
          onChange={(val) => setAttributes({ queueMutedColor: val })}
        />
        <ColorControl
          label={__("Active Item Background", "video-player-block")}
          value={activeItemBackground}
          onChange={(val) => setAttributes({ activeItemBackground: val })}
        />
        <ColorControl
          label={__("Hover Item Background", "video-player-block")}
          value={hoverItemBackground}
          onChange={(val) => setAttributes({ hoverItemBackground: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Container Shape", "video-player-block")}
        initialOpen={false}>
        <RangeControl
          label={__("Border Radius", "video-player-block")}
          value={borderRadius}
          min={0}
          max={40}
          onChange={(val) => setAttributes({ borderRadius: val })}
        />
        <RangeControl
          label={__("Padding", "video-player-block")}
          value={padding}
          min={0}
          max={48}
          onChange={(val) => setAttributes({ padding: val })}
        />
        <RangeControl
          label={__("Gap", "video-player-block")}
          value={gap}
          min={0}
          max={48}
          onChange={(val) => setAttributes({ gap: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Drop Shadow", "video-player-block")}
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
