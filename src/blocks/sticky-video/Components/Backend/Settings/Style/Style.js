import { __ } from "@wordpress/i18n";
import { PanelBody, RangeControl, SelectControl } from "@wordpress/components";
import { ColorControl } from "../../../../../../../../bpl-tools/Components";
import { boxShadowOptions } from "../../../../utils/options";

const Style = ({ attributes, setAttributes }) => {
  const {
    borderRadius,
    boxShadow,
    accentColor,
    controlColor,
    dockBackground,
  } = attributes;

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Docked Player", "video-player-block")}
        initialOpen={true}
      >
        <RangeControl
          label={__("Border radius (px)", "video-player-block")}
          value={borderRadius ?? 8}
          min={0}
          max={40}
          onChange={(val) => setAttributes({ borderRadius: val })}
        />
        <SelectControl
          label={__("Box shadow", "video-player-block")}
          value={boxShadow || "medium"}
          options={boxShadowOptions}
          onChange={(val) => setAttributes({ boxShadow: val })}
        />
        <ColorControl
          label={__("Dock background", "video-player-block")}
          value={dockBackground}
          onChange={(val) => setAttributes({ dockBackground: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Colors", "video-player-block")}
        initialOpen={false}
      >
        <ColorControl
          label={__("Accent color", "video-player-block")}
          value={accentColor}
          onChange={(val) => setAttributes({ accentColor: val })}
        />
        <ColorControl
          label={__("Control / icon color", "video-player-block")}
          value={controlColor}
          onChange={(val) => setAttributes({ controlColor: val })}
        />
      </PanelBody>
    </>
  );
};

export default Style;
