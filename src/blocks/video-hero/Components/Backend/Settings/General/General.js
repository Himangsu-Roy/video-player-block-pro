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
  videoEngineOptions,
  videoSourceOptions,
  mobileBehaviorOptions,
  heightModeOptions,
  horizontalAlignOptions,
  verticalAlignOptions,
  ctaStyleOptions,
  trailerButtonStyleOptions,
  videoFitOptions,
  preloadOptions,
  scrollIndicatorStyleOptions,
} from "../../../../utils/options";
import { detectSource } from "../../../../utils/functions";

const General = ({ attributes, setAttributes }) => {
  const {
    backgroundVideoUrl,
    backgroundVideoSource,
    videoEngine,
    posterImage = {},
    mobileBehavior,
    mobileBreakpoint,
    loopVideo,
    autoplay,
    muted,
    playsInline,
    playbackRate,
    videoFit,
    videoPosition,
    videoOpacity,
    heightMode,
    heightValue,
    heightAspect,
    minHeight,
    contentAlignment = {},
    contentMaxWidth,
    contentPadding,
    eyebrowText,
    headline,
    subheadline,
    primaryCta = {},
    secondaryCta = {},
    trailerEnabled,
    trailerVideoUrl,
    trailerSource,
    trailerButtonLabel,
    trailerButtonStyle,
    scrollIndicator,
    scrollIndicatorStyle,
    respectReducedMotion,
    respectSaveData,
    lazyLoadVideo,
    preload,
    ariaLabel,
  } = attributes;

  const align = { horizontal: "center", vertical: "middle", ...contentAlignment };

  const updateAlign = (key, val) =>
    setAttributes({ contentAlignment: { ...align, [key]: val } });

  const updateCta = (which, key, val) =>
    setAttributes({
      [which]: {
        ...(which === "primaryCta" ? primaryCta : secondaryCta),
        [key]: val,
      },
    });

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Background Video", "video-player-block")}
        initialOpen={true}
      >
        <TextControl
          label={__("Background Video URL", "video-player-block")}
          value={backgroundVideoUrl || ""}
          onChange={(val) => {
            setAttributes({ backgroundVideoUrl: val });
            const detected = detectSource(val);
            if (detected && detected !== backgroundVideoSource) {
              setAttributes({ backgroundVideoSource: detected });
            }
          }}
          placeholder="https://..."
          help={__(
            "MP4, WebM, HLS (.m3u8), DASH (.mpd), YouTube or Vimeo URL.",
            "video-player-block",
          )}
        />

        <SelectControl
          label={__("Source", "video-player-block")}
          value={backgroundVideoSource || "mp4"}
          options={videoSourceOptions}
          onChange={(val) => setAttributes({ backgroundVideoSource: val })}
        />

        <SelectControl
          label={__("Player Engine", "video-player-block")}
          value={videoEngine || "html5"}
          options={videoEngineOptions}
          onChange={(val) => setAttributes({ videoEngine: val })}
          help={__(
            "HTML5 is the lightest and recommended for looping background video. The other engines kick in for non-background trailer playback.",
            "video-player-block",
          )}
        />

        <InlineMediaUpload
          label={__("Poster / Fallback Image", "video-player-block")}
          value={posterImage?.url || ""}
          types={["image"]}
          onChange={(val) =>
            setAttributes({
              posterImage: {
                id: posterImage?.id || 0,
                url: val || "",
                alt: posterImage?.alt || "",
              },
            })
          }
        />

        <SelectControl
          label={__("Mobile Behavior", "video-player-block")}
          value={mobileBehavior || "poster"}
          options={mobileBehaviorOptions}
          onChange={(val) => setAttributes({ mobileBehavior: val })}
          help={__(
            "What to do under the mobile breakpoint. 'Show poster only' avoids paying the data cost on phones.",
            "video-player-block",
          )}
        />

        <RangeControl
          label={__("Mobile Breakpoint (px)", "video-player-block")}
          value={mobileBreakpoint || 768}
          min={320}
          max={1280}
          step={8}
          onChange={(val) => setAttributes({ mobileBreakpoint: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Playback", "video-player-block")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Autoplay", "video-player-block")}
          checked={!!autoplay}
          onChange={(val) => setAttributes({ autoplay: val })}
        />
        <ToggleControl
          label={__("Loop", "video-player-block")}
          checked={!!loopVideo}
          onChange={(val) => setAttributes({ loopVideo: val })}
        />
        <ToggleControl
          label={__("Muted (required for autoplay)", "video-player-block")}
          checked={!!muted}
          onChange={(val) => setAttributes({ muted: val })}
        />
        <ToggleControl
          label={__("Plays inline (iOS)", "video-player-block")}
          checked={!!playsInline}
          onChange={(val) => setAttributes({ playsInline: val })}
        />
        <RangeControl
          label={__("Playback rate", "video-player-block")}
          value={playbackRate || 1}
          min={0.25}
          max={2}
          step={0.05}
          onChange={(val) => setAttributes({ playbackRate: val })}
        />
        <SelectControl
          label={__("Preload", "video-player-block")}
          value={preload || "metadata"}
          options={preloadOptions}
          onChange={(val) => setAttributes({ preload: val })}
        />
        <ToggleControl
          label={__("Lazy load video", "video-player-block")}
          checked={!!lazyLoadVideo}
          onChange={(val) => setAttributes({ lazyLoadVideo: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Stage Size", "video-player-block")}
        initialOpen={false}
      >
        <SelectControl
          label={__("Height mode", "video-player-block")}
          value={heightMode || "viewport"}
          options={heightModeOptions}
          onChange={(val) => setAttributes({ heightMode: val })}
        />

        {heightMode !== "aspect" && (
          <TextControl
            label={__("Height value", "video-player-block")}
            value={heightValue || ""}
            onChange={(val) => setAttributes({ heightValue: val })}
            placeholder={heightMode === "fixed" ? "600px" : "90vh"}
          />
        )}

        {heightMode === "aspect" && (
          <TextControl
            label={__("Aspect ratio", "video-player-block")}
            value={heightAspect || "21/9"}
            onChange={(val) => setAttributes({ heightAspect: val })}
            placeholder="21/9"
          />
        )}

        <TextControl
          label={__("Minimum height", "video-player-block")}
          value={minHeight || ""}
          onChange={(val) => setAttributes({ minHeight: val })}
          placeholder="480px"
        />

        <SelectControl
          label={__("Video fit", "video-player-block")}
          value={videoFit || "cover"}
          options={videoFitOptions}
          onChange={(val) => setAttributes({ videoFit: val })}
        />

        <TextControl
          label={__("Video position", "video-player-block")}
          value={videoPosition || "center center"}
          onChange={(val) => setAttributes({ videoPosition: val })}
          help={__(
            "CSS object-position value, e.g. 'center top' or '25% 50%'.",
            "video-player-block",
          )}
        />

        <RangeControl
          label={__("Video opacity (%)", "video-player-block")}
          value={videoOpacity ?? 100}
          min={0}
          max={100}
          onChange={(val) => setAttributes({ videoOpacity: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Content Layout", "video-player-block")}
        initialOpen={false}
      >
        <SelectControl
          label={__("Horizontal alignment", "video-player-block")}
          value={align.horizontal}
          options={horizontalAlignOptions}
          onChange={(val) => updateAlign("horizontal", val)}
        />
        <SelectControl
          label={__("Vertical alignment", "video-player-block")}
          value={align.vertical}
          options={verticalAlignOptions}
          onChange={(val) => updateAlign("vertical", val)}
        />
        <TextControl
          label={__("Content max-width", "video-player-block")}
          value={contentMaxWidth || ""}
          onChange={(val) => setAttributes({ contentMaxWidth: val })}
          placeholder="780px"
        />
        <TextControl
          label={__("Content padding", "video-player-block")}
          value={contentPadding || ""}
          onChange={(val) => setAttributes({ contentPadding: val })}
          placeholder="32px"
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Headline & Copy", "video-player-block")}
        initialOpen={false}
      >
        <TextControl
          label={__("Eyebrow text", "video-player-block")}
          value={eyebrowText || ""}
          onChange={(val) => setAttributes({ eyebrowText: val })}
        />
        <TextareaControl
          label={__("Headline", "video-player-block")}
          value={headline || ""}
          onChange={(val) => setAttributes({ headline: val })}
          rows={2}
        />
        <TextareaControl
          label={__("Subheadline", "video-player-block")}
          value={subheadline || ""}
          onChange={(val) => setAttributes({ subheadline: val })}
          rows={3}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Primary CTA", "video-player-block")}
        initialOpen={false}
      >
        <TextControl
          label={__("Label", "video-player-block")}
          value={primaryCta?.label || ""}
          onChange={(val) => updateCta("primaryCta", "label", val)}
        />
        <TextControl
          label={__("URL", "video-player-block")}
          value={primaryCta?.url || ""}
          onChange={(val) => updateCta("primaryCta", "url", val)}
        />
        <SelectControl
          label={__("Style", "video-player-block")}
          value={primaryCta?.style || "filled"}
          options={ctaStyleOptions}
          onChange={(val) => updateCta("primaryCta", "style", val)}
        />
        <ToggleControl
          label={__("Open in new tab", "video-player-block")}
          checked={!!primaryCta?.openInNewTab}
          onChange={(val) => updateCta("primaryCta", "openInNewTab", val)}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Secondary CTA", "video-player-block")}
        initialOpen={false}
      >
        <TextControl
          label={__("Label", "video-player-block")}
          value={secondaryCta?.label || ""}
          onChange={(val) => updateCta("secondaryCta", "label", val)}
        />
        <TextControl
          label={__("URL", "video-player-block")}
          value={secondaryCta?.url || ""}
          onChange={(val) => updateCta("secondaryCta", "url", val)}
        />
        <SelectControl
          label={__("Style", "video-player-block")}
          value={secondaryCta?.style || "ghost"}
          options={ctaStyleOptions}
          onChange={(val) => updateCta("secondaryCta", "style", val)}
        />
        <ToggleControl
          label={__("Open in new tab", "video-player-block")}
          checked={!!secondaryCta?.openInNewTab}
          onChange={(val) => updateCta("secondaryCta", "openInNewTab", val)}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Trailer Modal", "video-player-block")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Enable trailer button", "video-player-block")}
          checked={!!trailerEnabled}
          onChange={(val) => setAttributes({ trailerEnabled: val })}
        />
        {trailerEnabled && (
          <>
            <TextControl
              label={__("Trailer video URL", "video-player-block")}
              value={trailerVideoUrl || ""}
              onChange={(val) => {
                setAttributes({ trailerVideoUrl: val });
                const detected = detectSource(val);
                if (detected && detected !== trailerSource) {
                  setAttributes({ trailerSource: detected });
                }
              }}
              placeholder="https://..."
            />
            <SelectControl
              label={__("Trailer source", "video-player-block")}
              value={trailerSource || "mp4"}
              options={videoSourceOptions}
              onChange={(val) => setAttributes({ trailerSource: val })}
            />
            <TextControl
              label={__("Button label", "video-player-block")}
              value={trailerButtonLabel || ""}
              onChange={(val) => setAttributes({ trailerButtonLabel: val })}
            />
            <SelectControl
              label={__("Button style", "video-player-block")}
              value={trailerButtonStyle || "pill"}
              options={trailerButtonStyleOptions}
              onChange={(val) => setAttributes({ trailerButtonStyle: val })}
            />
          </>
        )}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Scroll Indicator", "video-player-block")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Show scroll indicator", "video-player-block")}
          checked={!!scrollIndicator}
          onChange={(val) => setAttributes({ scrollIndicator: val })}
        />
        <SelectControl
          label={__("Indicator style", "video-player-block")}
          value={scrollIndicatorStyle || "mouse"}
          options={scrollIndicatorStyleOptions}
          onChange={(val) => setAttributes({ scrollIndicatorStyle: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Accessibility", "video-player-block")}
        initialOpen={false}
      >
        <TextControl
          label={__("ARIA label", "video-player-block")}
          value={ariaLabel || ""}
          onChange={(val) => setAttributes({ ariaLabel: val })}
        />
        <ToggleControl
          label={__("Respect prefers-reduced-motion", "video-player-block")}
          checked={!!respectReducedMotion}
          onChange={(val) => setAttributes({ respectReducedMotion: val })}
        />
        <ToggleControl
          label={__("Respect Save-Data", "video-player-block")}
          checked={!!respectSaveData}
          onChange={(val) => setAttributes({ respectSaveData: val })}
        />
      </PanelBody>
    </>
  );
};

export default General;
