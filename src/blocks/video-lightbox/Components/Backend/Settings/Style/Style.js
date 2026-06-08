import { __ } from "@wordpress/i18n";
import { PanelBody, RangeControl } from "@wordpress/components";
import { ColorControl } from "../../../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes }) => {
  const {
    thumbnailBorderRadius,
    thumbnailOverlayColor,
    playIconSize,
    playIconColor,
    playIconBgColor,
    buttonBgColor,
    buttonTextColor,
    buttonBorderRadius,
    modalBgColor,
    modalOverlayColor,
    modalOverlayOpacity,
    modalBorderRadius,
    captionColor,
    triggerType,
  } = attributes;

  return (
    <>
      {triggerType !== "button" && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Thumbnail / Icon", "video-player-block")}
          initialOpen={true}
        >
          <RangeControl
            label={__("Thumbnail border radius (px)", "video-player-block")}
            value={thumbnailBorderRadius ?? 12}
            min={0}
            max={60}
            onChange={(val) =>
              setAttributes({ thumbnailBorderRadius: val })
            }
          />
          <ColorControl
            label={__("Thumbnail overlay tint", "video-player-block")}
            value={thumbnailOverlayColor}
            onChange={(val) =>
              setAttributes({ thumbnailOverlayColor: val })
            }
          />
          <RangeControl
            label={__("Play icon size (px)", "video-player-block")}
            value={playIconSize ?? 72}
            min={24}
            max={200}
            onChange={(val) => setAttributes({ playIconSize: val })}
          />
          <ColorControl
            label={__("Play icon color", "video-player-block")}
            value={playIconColor}
            onChange={(val) => setAttributes({ playIconColor: val })}
          />
          <ColorControl
            label={__("Play icon background", "video-player-block")}
            value={playIconBgColor}
            onChange={(val) => setAttributes({ playIconBgColor: val })}
          />
          <ColorControl
            label={__("Caption color", "video-player-block")}
            value={captionColor}
            onChange={(val) => setAttributes({ captionColor: val })}
          />
        </PanelBody>
      )}

      {triggerType === "button" && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Button", "video-player-block")}
          initialOpen={true}
        >
          <ColorControl
            label={__("Background color", "video-player-block")}
            value={buttonBgColor}
            onChange={(val) => setAttributes({ buttonBgColor: val })}
          />
          <ColorControl
            label={__("Text color", "video-player-block")}
            value={buttonTextColor}
            onChange={(val) => setAttributes({ buttonTextColor: val })}
          />
          <RangeControl
            label={__("Border radius (px)", "video-player-block")}
            value={buttonBorderRadius ?? 8}
            min={0}
            max={40}
            onChange={(val) => setAttributes({ buttonBorderRadius: val })}
          />
        </PanelBody>
      )}

      <PanelBody
        className="bPlPanelBody"
        title={__("Modal", "video-player-block")}
        initialOpen={false}
      >
        <ColorControl
          label={__("Modal background", "video-player-block")}
          value={modalBgColor}
          onChange={(val) => setAttributes({ modalBgColor: val })}
        />
        <ColorControl
          label={__("Overlay color", "video-player-block")}
          value={modalOverlayColor}
          onChange={(val) => setAttributes({ modalOverlayColor: val })}
        />
        <RangeControl
          label={__("Overlay opacity (%)", "video-player-block")}
          value={modalOverlayOpacity ?? 85}
          min={0}
          max={100}
          onChange={(val) => setAttributes({ modalOverlayOpacity: val })}
        />
        <RangeControl
          label={__("Modal border radius (px)", "video-player-block")}
          value={modalBorderRadius ?? 10}
          min={0}
          max={40}
          onChange={(val) => setAttributes({ modalBorderRadius: val })}
        />
      </PanelBody>
    </>
  );
};

export default Style;
