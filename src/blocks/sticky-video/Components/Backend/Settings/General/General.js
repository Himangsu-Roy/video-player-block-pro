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
  videoSourceOptions,
  aspectRatioOptions,
  stickyCornerOptions,
  dockAnimationOptions,
  preloadOptions,
} from "../../../../utils/options";
import { detectSource } from "../../../../utils/functions";

const General = ({ attributes, setAttributes }) => {
  const {
    videoSource = {},
    posterUrl,
    autoplay,
    muted,
    loopVideo,
    playsInline,
    showControls,
    preload,
    inlineWidth,
    aspectRatio,
    customAspectRatio,
    stickyEnabled,
    stickyCorner,
    stickyWidth,
    stickyMargin,
    triggerThreshold,
    onlyWhenPlaying,
    showCloseButton,
    showMinimizeButton,
    rememberDismissal,
    pipEnabled,
    autoPipOnLeave,
    enableOnMobile,
    mobileBreakpoint,
    respectReducedMotion,
    dockAnimation,
    title,
    ariaLabel,
  } = attributes;

  const updateSource = (key, val) =>
    setAttributes({ videoSource: { ...videoSource, [key]: val } });

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Video Source", "video-player-block")}
        initialOpen={true}
      >
        <TextControl
          label={__("Video URL", "video-player-block")}
          value={videoSource?.url || ""}
          onChange={(val) => {
            const detected = detectSource(val);
            setAttributes({
              videoSource: { ...videoSource, url: val, type: detected },
            });
          }}
          placeholder="https://..."
          help={__(
            "MP4 / WebM, HLS (.m3u8), YouTube or Vimeo URL.",
            "video-player-block",
          )}
        />
        <SelectControl
          label={__("Source type", "video-player-block")}
          value={videoSource?.type || "mp4"}
          options={videoSourceOptions}
          onChange={(val) => updateSource("type", val)}
        />
        <InlineMediaUpload
          label={__("Poster image", "video-player-block")}
          value={posterUrl || ""}
          types={["image"]}
          onChange={(val) => setAttributes({ posterUrl: val || "" })}
        />
        <TextControl
          label={__("Title (shown on docked bar)", "video-player-block")}
          value={title || ""}
          onChange={(val) => setAttributes({ title: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Playback", "video-player-block")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Show native controls", "video-player-block")}
          checked={!!showControls}
          onChange={(val) => setAttributes({ showControls: val })}
        />
        <ToggleControl
          label={__("Autoplay", "video-player-block")}
          checked={!!autoplay}
          onChange={(val) => setAttributes({ autoplay: val })}
        />
        <ToggleControl
          label={__("Muted (required for autoplay)", "video-player-block")}
          checked={!!muted}
          onChange={(val) => setAttributes({ muted: val })}
        />
        <ToggleControl
          label={__("Loop", "video-player-block")}
          checked={!!loopVideo}
          onChange={(val) => setAttributes({ loopVideo: val })}
        />
        <ToggleControl
          label={__("Plays inline (iOS)", "video-player-block")}
          checked={!!playsInline}
          onChange={(val) => setAttributes({ playsInline: val })}
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
        title={__("Inline Layout", "video-player-block")}
        initialOpen={false}
      >
        <TextControl
          label={__("Inline width", "video-player-block")}
          value={inlineWidth || ""}
          onChange={(val) => setAttributes({ inlineWidth: val })}
          placeholder="100%"
          help={__(
            "Width of the in-flow player before it docks (e.g. 100%, 720px).",
            "video-player-block",
          )}
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
            placeholder="16/9"
          />
        )}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Sticky Behavior", "video-player-block")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Enable sticky on scroll", "video-player-block")}
          checked={!!stickyEnabled}
          onChange={(val) => setAttributes({ stickyEnabled: val })}
        />
        <SelectControl
          label={__("Dock corner", "video-player-block")}
          value={stickyCorner || "bottom-right"}
          options={stickyCornerOptions}
          onChange={(val) => setAttributes({ stickyCorner: val })}
        />
        <RangeControl
          label={__("Docked width (px)", "video-player-block")}
          value={stickyWidth ?? 360}
          min={180}
          max={640}
          step={10}
          onChange={(val) => setAttributes({ stickyWidth: val })}
        />
        <RangeControl
          label={__("Edge margin (px)", "video-player-block")}
          value={stickyMargin ?? 20}
          min={0}
          max={80}
          onChange={(val) => setAttributes({ stickyMargin: val })}
        />
        <RangeControl
          label={__("Scroll trigger threshold (px)", "video-player-block")}
          value={triggerThreshold ?? 120}
          min={0}
          max={800}
          step={10}
          onChange={(val) => setAttributes({ triggerThreshold: val })}
          help={__(
            "Pixels scrolled past the player before it docks.",
            "video-player-block",
          )}
        />
        <ToggleControl
          label={__("Only dock while playing", "video-player-block")}
          checked={!!onlyWhenPlaying}
          onChange={(val) => setAttributes({ onlyWhenPlaying: val })}
        />
        <SelectControl
          label={__("Dock animation", "video-player-block")}
          value={dockAnimation || "slide"}
          options={dockAnimationOptions}
          onChange={(val) => setAttributes({ dockAnimation: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Docked Controls", "video-player-block")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Show close (X) button", "video-player-block")}
          checked={!!showCloseButton}
          onChange={(val) => setAttributes({ showCloseButton: val })}
        />
        <ToggleControl
          label={__("Show minimize button", "video-player-block")}
          checked={!!showMinimizeButton}
          onChange={(val) => setAttributes({ showMinimizeButton: val })}
        />
        <ToggleControl
          label={__("Remember dismissal (this session)", "video-player-block")}
          checked={!!rememberDismissal}
          onChange={(val) => setAttributes({ rememberDismissal: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Picture-in-Picture", "video-player-block")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Show Picture-in-Picture button", "video-player-block")}
          checked={!!pipEnabled}
          onChange={(val) => setAttributes({ pipEnabled: val })}
        />
        <ToggleControl
          label={__("Auto-PiP when switching tabs", "video-player-block")}
          checked={!!autoPipOnLeave}
          onChange={(val) => setAttributes({ autoPipOnLeave: val })}
          help={__(
            "Native PiP works for self-hosted MP4 / HLS sources only.",
            "video-player-block",
          )}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Devices & Accessibility", "video-player-block")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Enable sticky on mobile", "video-player-block")}
          checked={!!enableOnMobile}
          onChange={(val) => setAttributes({ enableOnMobile: val })}
        />
        <RangeControl
          label={__("Mobile breakpoint (px)", "video-player-block")}
          value={mobileBreakpoint ?? 768}
          min={320}
          max={1280}
          step={8}
          onChange={(val) => setAttributes({ mobileBreakpoint: val })}
        />
        <ToggleControl
          label={__("Respect prefers-reduced-motion", "video-player-block")}
          checked={!!respectReducedMotion}
          onChange={(val) => setAttributes({ respectReducedMotion: val })}
        />
        <TextControl
          label={__("ARIA label", "video-player-block")}
          value={ariaLabel || ""}
          onChange={(val) => setAttributes({ ariaLabel: val })}
        />
      </PanelBody>
    </>
  );
};

export default General;
