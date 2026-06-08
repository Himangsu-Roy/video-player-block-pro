import { __ } from "@wordpress/i18n";
import { PanelBody, RangeControl } from "@wordpress/components";
import { ColorControl } from "../../../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes }) => {
  const {
    dividerColor,
    dividerWidth,
    handleColor,
    handleBgColor,
    handleSize,
    labelBgColor,
    labelTextColor,
    borderRadius,
  } = attributes;

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Divider", "video-player-block")}
        initialOpen={true}
      >
        <ColorControl
          label={__("Divider color", "video-player-block")}
          value={dividerColor}
          onChange={(val) => setAttributes({ dividerColor: val })}
        />
        <RangeControl
          label={__("Divider thickness (px)", "video-player-block")}
          value={dividerWidth ?? 3}
          min={0}
          max={20}
          onChange={(val) => setAttributes({ dividerWidth: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Handle", "video-player-block")}
        initialOpen={false}
      >
        <ColorControl
          label={__("Handle background", "video-player-block")}
          value={handleBgColor}
          onChange={(val) => setAttributes({ handleBgColor: val })}
        />
        <ColorControl
          label={__("Handle icon color", "video-player-block")}
          value={handleColor}
          onChange={(val) => setAttributes({ handleColor: val })}
        />
        <RangeControl
          label={__("Handle size (px)", "video-player-block")}
          value={handleSize ?? 44}
          min={16}
          max={120}
          onChange={(val) => setAttributes({ handleSize: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Labels", "video-player-block")}
        initialOpen={false}
      >
        <ColorControl
          label={__("Label background", "video-player-block")}
          value={labelBgColor}
          onChange={(val) => setAttributes({ labelBgColor: val })}
        />
        <ColorControl
          label={__("Label text color", "video-player-block")}
          value={labelTextColor}
          onChange={(val) => setAttributes({ labelTextColor: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Frame", "video-player-block")}
        initialOpen={false}
      >
        <RangeControl
          label={__("Border radius (px)", "video-player-block")}
          value={borderRadius ?? 12}
          min={0}
          max={60}
          onChange={(val) => setAttributes({ borderRadius: val })}
        />
      </PanelBody>
    </>
  );
};

export default Style;
