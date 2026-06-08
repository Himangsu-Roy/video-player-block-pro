import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  TextControl,
  ToggleControl,
  SelectControl,
  RangeControl,
} from "@wordpress/components";
import { InlineMediaUpload } from "../../../../../../../../bpl-tools/Components";
import {
  orientationOptions,
  handleStyleOptions,
  playModeOptions,
  aspectRatioOptions,
  preloadOptions,
} from "../../../../utils/options";

const General = ({ attributes, setAttributes }) => {
  const {
    beforeVideoUrl,
    afterVideoUrl,
    beforePosterUrl,
    afterPosterUrl,
    orientation,
    initialPosition,
    beforeLabel,
    afterLabel,
    showLabels,
    handleStyle,
    autoplay,
    autoplayOnScroll,
    loop,
    muted,
    playsInline,
    preload,
    hideControls,
    playMode,
    aspectRatio,
    customAspectRatio,
    maxWidth,
    a11yLabel,
  } = attributes;

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Videos", "video-player-block")}
        initialOpen={true}
      >
        <InlineMediaUpload
          label={__("Before video (MP4 / WebM)", "video-player-block")}
          value={beforeVideoUrl || ""}
          types={["video"]}
          onChange={(val) => setAttributes({ beforeVideoUrl: val || "" })}
          placeholder="https://.../before.mp4"
        />
        <InlineMediaUpload
          label={__("Before poster image", "video-player-block")}
          value={beforePosterUrl || ""}
          types={["image"]}
          onChange={(val) => setAttributes({ beforePosterUrl: val || "" })}
        />

        <InlineMediaUpload
          label={__("After video (MP4 / WebM)", "video-player-block")}
          value={afterVideoUrl || ""}
          types={["video"]}
          onChange={(val) => setAttributes({ afterVideoUrl: val || "" })}
          placeholder="https://.../after.mp4"
        />
        <InlineMediaUpload
          label={__("After poster image", "video-player-block")}
          value={afterPosterUrl || ""}
          types={["image"]}
          onChange={(val) => setAttributes({ afterPosterUrl: val || "" })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Divider & Layout", "video-player-block")}
        initialOpen={false}
      >
        <SelectControl
          label={__("Orientation", "video-player-block")}
          value={orientation || "horizontal"}
          options={orientationOptions}
          onChange={(val) => setAttributes({ orientation: val })}
        />
        <RangeControl
          label={__("Initial divider position (%)", "video-player-block")}
          value={initialPosition ?? 50}
          min={0}
          max={100}
          onChange={(val) => setAttributes({ initialPosition: val })}
        />
        <SelectControl
          label={__("Handle style", "video-player-block")}
          value={handleStyle || "circle"}
          options={handleStyleOptions}
          onChange={(val) => setAttributes({ handleStyle: val })}
        />
        <SelectControl
          label={__("Aspect ratio", "video-player-block")}
          value={aspectRatio || "16:9"}
          options={aspectRatioOptions}
          onChange={(val) => setAttributes({ aspectRatio: val })}
        />
        {aspectRatio === "custom" && (
          <TextControl
            label={__("Custom aspect ratio", "video-player-block")}
            value={customAspectRatio || ""}
            onChange={(val) => setAttributes({ customAspectRatio: val })}
            placeholder="21:9"
            help={__("Use width:height notation, e.g. 21:9.", "video-player-block")}
          />
        )}
        <RangeControl
          label={__("Max width (px)", "video-player-block")}
          value={maxWidth ?? 1200}
          min={320}
          max={2400}
          step={20}
          onChange={(val) => setAttributes({ maxWidth: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Labels", "video-player-block")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Show corner labels", "video-player-block")}
          checked={!!showLabels}
          onChange={(val) => setAttributes({ showLabels: val })}
        />
        {showLabels && (
          <>
            <TextControl
              label={__("Before label", "video-player-block")}
              value={beforeLabel || ""}
              onChange={(val) => setAttributes({ beforeLabel: val })}
              placeholder="Before"
            />
            <TextControl
              label={__("After label", "video-player-block")}
              value={afterLabel || ""}
              onChange={(val) => setAttributes({ afterLabel: val })}
              placeholder="After"
            />
          </>
        )}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Playback", "video-player-block")}
        initialOpen={false}
      >
        <SelectControl
          label={__("Sync mode", "video-player-block")}
          value={playMode || "synced"}
          options={playModeOptions}
          onChange={(val) => setAttributes({ playMode: val })}
          help={__(
            "Synced enforces a shared timeline (both videos should be the same length). Independent lets each loop separately.",
            "video-player-block",
          )}
        />
        <ToggleControl
          label={__("Autoplay", "video-player-block")}
          checked={!!autoplay}
          onChange={(val) => setAttributes({ autoplay: val })}
        />
        {autoplay && (
          <ToggleControl
            label={__("Only when in viewport", "video-player-block")}
            checked={!!autoplayOnScroll}
            onChange={(val) => setAttributes({ autoplayOnScroll: val })}
            help={__(
              "Recommended. Pauses when the block scrolls off-screen.",
              "video-player-block",
            )}
          />
        )}
        <ToggleControl
          label={__("Loop", "video-player-block")}
          checked={!!loop}
          onChange={(val) => setAttributes({ loop: val })}
        />
        <ToggleControl
          label={__("Start muted", "video-player-block")}
          checked={!!muted}
          onChange={(val) => setAttributes({ muted: val })}
          help={__(
            "Required for autoplay in most browsers.",
            "video-player-block",
          )}
        />
        <ToggleControl
          label={__("Play inline (mobile)", "video-player-block")}
          checked={!!playsInline}
          onChange={(val) => setAttributes({ playsInline: val })}
        />
        <ToggleControl
          label={__("Hide unified play / mute controls", "video-player-block")}
          checked={!!hideControls}
          onChange={(val) => setAttributes({ hideControls: val })}
        />
        <SelectControl
          label={__("Preload", "video-player-block")}
          value={preload || "metadata"}
          options={preloadOptions}
          onChange={(val) => setAttributes({ preload: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Accessibility", "video-player-block")}
        initialOpen={false}
      >
        <TextControl
          label={__("Group ARIA label", "video-player-block")}
          value={a11yLabel || ""}
          onChange={(val) => setAttributes({ a11yLabel: val })}
          placeholder="Before and after video comparison"
        />
      </PanelBody>
    </>
  );
};

export default General;
