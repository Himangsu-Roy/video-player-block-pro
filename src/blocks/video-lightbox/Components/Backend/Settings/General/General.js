import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  ToggleControl,
  SelectControl,
  RangeControl,
} from "@wordpress/components";
import { InlineMediaUpload } from "../../../../../../../../bpl-tools/Components";
import {
  triggerTypeOptions,
  aspectRatioOptions,
  buttonIconOptions,
  buttonStyleOptions,
  playIconStyleOptions,
  thumbnailHoverEffectOptions,
  videoSourceOptions,
  modalSizeOptions,
  modalThemeOptions,
  modalAnimationOptions,
  openTriggerOptions,
  closeButtonStyleOptions,
} from "../../../../utils/options";
import { detectSource } from "../../../../utils/functions";

const General = ({ attributes, setAttributes }) => {
  const {
    triggerType,
    thumbnailImage = {},
    thumbnailAspectRatio,
    buttonText,
    buttonIcon,
    buttonStyle,
    playIconStyle,
    thumbnailHoverEffect,
    showDuration,
    durationText,
    showCaption,
    captionText,
    videoSource,
    videoUrl,
    modalSize,
    modalMaxWidth,
    modalAspectRatio,
    modalTheme,
    modalAnimation,
    autoplayOnOpen,
    muteOnOpen,
    loopVideo,
    closeOnOverlayClick,
    closeOnEsc,
    showCloseButton,
    closeButtonStyle,
    pauseOnClose,
    resetOnClose,
    openTrigger,
    openDelaySeconds,
    urlHashKey,
    lazyLoadEngine,
    cookieKey,
    triggerMaxWidth,
    a11yLabel,
    a11yModalLabel,
  } = attributes;

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Trigger", "video-player-block")}
        initialOpen={true}
      >
        <SelectControl
          label={__("Trigger type", "video-player-block")}
          value={triggerType || "thumbnail"}
          options={triggerTypeOptions}
          onChange={(val) => setAttributes({ triggerType: val })}
        />

        {triggerType === "thumbnail" && (
          <>
            <InlineMediaUpload
              label={__("Thumbnail image", "video-player-block")}
              value={thumbnailImage?.url || ""}
              types={["image"]}
              onChange={(val) =>
                setAttributes({
                  thumbnailImage: {
                    id: thumbnailImage?.id || 0,
                    url: val || "",
                    alt: thumbnailImage?.alt || "",
                  },
                })
              }
            />
            <TextControl
              label={__("Image alt text", "video-player-block")}
              value={thumbnailImage?.alt || ""}
              onChange={(val) =>
                setAttributes({
                  thumbnailImage: { ...thumbnailImage, alt: val },
                })
              }
            />
            <SelectControl
              label={__("Thumbnail aspect ratio", "video-player-block")}
              value={thumbnailAspectRatio || "16:9"}
              options={aspectRatioOptions}
              onChange={(val) =>
                setAttributes({ thumbnailAspectRatio: val })
              }
            />
            <SelectControl
              label={__("Hover effect", "video-player-block")}
              value={thumbnailHoverEffect || "zoom"}
              options={thumbnailHoverEffectOptions}
              onChange={(val) =>
                setAttributes({ thumbnailHoverEffect: val })
              }
            />
            <SelectControl
              label={__("Play icon style", "video-player-block")}
              value={playIconStyle || "circle"}
              options={playIconStyleOptions}
              onChange={(val) => setAttributes({ playIconStyle: val })}
            />
            <ToggleControl
              label={__("Show duration badge", "video-player-block")}
              checked={!!showDuration}
              onChange={(val) => setAttributes({ showDuration: val })}
            />
            {showDuration && (
              <TextControl
                label={__("Duration text", "video-player-block")}
                value={durationText || ""}
                onChange={(val) => setAttributes({ durationText: val })}
                placeholder="2:30"
              />
            )}
            <ToggleControl
              label={__("Show caption", "video-player-block")}
              checked={!!showCaption}
              onChange={(val) => setAttributes({ showCaption: val })}
            />
            {showCaption && (
              <TextControl
                label={__("Caption text", "video-player-block")}
                value={captionText || ""}
                onChange={(val) => setAttributes({ captionText: val })}
              />
            )}
          </>
        )}

        {triggerType === "button" && (
          <>
            <TextControl
              label={__("Button text", "video-player-block")}
              value={buttonText || ""}
              onChange={(val) => setAttributes({ buttonText: val })}
            />
            <SelectControl
              label={__("Button icon", "video-player-block")}
              value={buttonIcon || "play"}
              options={buttonIconOptions}
              onChange={(val) => setAttributes({ buttonIcon: val })}
            />
            <SelectControl
              label={__("Button style", "video-player-block")}
              value={buttonStyle || "filled"}
              options={buttonStyleOptions}
              onChange={(val) => setAttributes({ buttonStyle: val })}
            />
          </>
        )}

        {triggerType === "playIcon" && (
          <SelectControl
            label={__("Play icon style", "video-player-block")}
            value={playIconStyle || "circle"}
            options={playIconStyleOptions}
            onChange={(val) => setAttributes({ playIconStyle: val })}
          />
        )}

        <TextControl
          label={__("Trigger max-width", "video-player-block")}
          value={triggerMaxWidth || ""}
          onChange={(val) => setAttributes({ triggerMaxWidth: val })}
          placeholder="640px"
          help={__(
            "Limits the visible trigger to this width while keeping its alignment.",
            "video-player-block",
          )}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Video Source", "video-player-block")}
        initialOpen={false}
      >
        <TextControl
          label={__("Video URL", "video-player-block")}
          value={videoUrl || ""}
          onChange={(val) => {
            setAttributes({ videoUrl: val });
            const detected = detectSource(val);
            if (detected && detected !== videoSource) {
              setAttributes({ videoSource: detected });
            }
          }}
          placeholder="https://..."
          help={__(
            "YouTube, Vimeo, MP4 / WebM or HLS (.m3u8) URL.",
            "video-player-block",
          )}
        />
        <SelectControl
          label={__("Source", "video-player-block")}
          value={videoSource || "youtube"}
          options={videoSourceOptions}
          onChange={(val) => setAttributes({ videoSource: val })}
        />
        <ToggleControl
          label={__("Lazy-load player engine", "video-player-block")}
          checked={!!lazyLoadEngine}
          onChange={(val) => setAttributes({ lazyLoadEngine: val })}
          help={__(
            "Defer the player bundle until the modal first opens (recommended).",
            "video-player-block",
          )}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Modal", "video-player-block")}
        initialOpen={false}
      >
        <SelectControl
          label={__("Size", "video-player-block")}
          value={modalSize || "large"}
          options={modalSizeOptions}
          onChange={(val) => setAttributes({ modalSize: val })}
        />
        {modalSize === "custom" && (
          <RangeControl
            label={__("Custom max-width (px)", "video-player-block")}
            value={modalMaxWidth || 1080}
            min={320}
            max={2400}
            step={20}
            onChange={(val) => setAttributes({ modalMaxWidth: val })}
          />
        )}
        <SelectControl
          label={__("Aspect ratio", "video-player-block")}
          value={modalAspectRatio || "16:9"}
          options={aspectRatioOptions}
          onChange={(val) => setAttributes({ modalAspectRatio: val })}
        />
        <SelectControl
          label={__("Theme", "video-player-block")}
          value={modalTheme || "dark"}
          options={modalThemeOptions}
          onChange={(val) => setAttributes({ modalTheme: val })}
        />
        <SelectControl
          label={__("Open animation", "video-player-block")}
          value={modalAnimation || "fade"}
          options={modalAnimationOptions}
          onChange={(val) => setAttributes({ modalAnimation: val })}
        />
        <ToggleControl
          label={__("Show close button", "video-player-block")}
          checked={!!showCloseButton}
          onChange={(val) => setAttributes({ showCloseButton: val })}
        />
        {showCloseButton && (
          <SelectControl
            label={__("Close button style", "video-player-block")}
            value={closeButtonStyle || "circle"}
            options={closeButtonStyleOptions}
            onChange={(val) => setAttributes({ closeButtonStyle: val })}
          />
        )}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Playback", "video-player-block")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Autoplay on open", "video-player-block")}
          checked={!!autoplayOnOpen}
          onChange={(val) => setAttributes({ autoplayOnOpen: val })}
        />
        <ToggleControl
          label={__("Start muted", "video-player-block")}
          checked={!!muteOnOpen}
          onChange={(val) => setAttributes({ muteOnOpen: val })}
        />
        <ToggleControl
          label={__("Loop video", "video-player-block")}
          checked={!!loopVideo}
          onChange={(val) => setAttributes({ loopVideo: val })}
        />
        <ToggleControl
          label={__("Pause on close", "video-player-block")}
          checked={!!pauseOnClose}
          onChange={(val) => setAttributes({ pauseOnClose: val })}
          help={__(
            "Default. Disable only if you want playback to continue in the background after close.",
            "video-player-block",
          )}
        />
        <ToggleControl
          label={__("Reset to beginning on close", "video-player-block")}
          checked={!!resetOnClose}
          onChange={(val) => setAttributes({ resetOnClose: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Close Behaviour", "video-player-block")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Close on overlay click", "video-player-block")}
          checked={!!closeOnOverlayClick}
          onChange={(val) => setAttributes({ closeOnOverlayClick: val })}
        />
        <ToggleControl
          label={__("Close on Escape key", "video-player-block")}
          checked={!!closeOnEsc}
          onChange={(val) => setAttributes({ closeOnEsc: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Open Trigger", "video-player-block")}
        initialOpen={false}
      >
        <SelectControl
          label={__("Open via", "video-player-block")}
          value={openTrigger || "click"}
          options={openTriggerOptions}
          onChange={(val) => setAttributes({ openTrigger: val })}
        />
        {openTrigger === "autoDelay" && (
          <RangeControl
            label={__("Open after (seconds)", "video-player-block")}
            value={openDelaySeconds || 5}
            min={0}
            max={120}
            step={1}
            onChange={(val) => setAttributes({ openDelaySeconds: val })}
          />
        )}
        <TextControl
          label={__("URL hash key", "video-player-block")}
          value={urlHashKey || ""}
          onChange={(val) => setAttributes({ urlHashKey: val })}
          placeholder="hero"
          help={__(
            "When set, visiting the page with #<key> in the URL auto-opens the lightbox.",
            "video-player-block",
          )}
        />
        <TextControl
          label={__("Cookie key (auto-open / exit-intent)", "video-player-block")}
          value={cookieKey || ""}
          onChange={(val) => setAttributes({ cookieKey: val })}
          placeholder="vpb_seen_hero"
          help={__(
            "Optional. When set, the modal will auto-open only once per visitor.",
            "video-player-block",
          )}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Accessibility", "video-player-block")}
        initialOpen={false}
      >
        <TextControl
          label={__("Trigger ARIA label", "video-player-block")}
          value={a11yLabel || ""}
          onChange={(val) => setAttributes({ a11yLabel: val })}
          placeholder="Play video"
        />
        <TextareaControl
          label={__("Modal dialog ARIA label", "video-player-block")}
          value={a11yModalLabel || ""}
          onChange={(val) => setAttributes({ a11yModalLabel: val })}
          rows={2}
          placeholder="Video player dialog"
        />
      </PanelBody>
    </>
  );
};

export default General;
