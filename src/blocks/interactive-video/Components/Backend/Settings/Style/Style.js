import { __ } from "@wordpress/i18n";
import { PanelBody, RangeControl, SelectControl } from "@wordpress/components";
import { ColorControl } from "../../../../../../../../bpl-tools/Components";
import { boxShadowOptions } from "../../../../utils/options";

const Style = ({ attributes, setAttributes }) => {
  const {
    accentColor,
    overlayBgColor,
    overlayTextColor,
    chapterListBgColor,
    chapterListTextColor,
    borderRadius,
    boxShadow,
  } = attributes;

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Player container", "video-player-block")}
        initialOpen={true}
      >
        <RangeControl
          label={__("Border radius (px)", "video-player-block")}
          value={borderRadius ?? 10}
          min={0}
          max={40}
          onChange={(val) =>
            setAttributes({ borderRadius: Number(val) || 0 })
          }
        />
        <SelectControl
          label={__("Box shadow", "video-player-block")}
          value={boxShadow || "md"}
          options={boxShadowOptions}
          onChange={(val) => setAttributes({ boxShadow: val })}
        />
        <ColorControl
          label={__("Accent color", "video-player-block")}
          value={accentColor}
          onChange={(val) => setAttributes({ accentColor: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Overlays", "video-player-block")}
        initialOpen={false}
      >
        <ColorControl
          label={__("Default overlay background", "video-player-block")}
          value={overlayBgColor}
          onChange={(val) => setAttributes({ overlayBgColor: val })}
        />
        <ColorControl
          label={__("Default overlay text", "video-player-block")}
          value={overlayTextColor}
          onChange={(val) => setAttributes({ overlayTextColor: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Chapter list", "video-player-block")}
        initialOpen={false}
      >
        <ColorControl
          label={__("Background", "video-player-block")}
          value={chapterListBgColor}
          onChange={(val) => setAttributes({ chapterListBgColor: val })}
        />
        <ColorControl
          label={__("Text color", "video-player-block")}
          value={chapterListTextColor}
          onChange={(val) => setAttributes({ chapterListTextColor: val })}
        />
      </PanelBody>
    </>
  );
};

export default Style;
