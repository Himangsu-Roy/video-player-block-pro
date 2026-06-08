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
  layoutOptions,
  videoSourceOptions,
  playModeOptions,
  aspectRatioOptions,
  quoteStyleOptions,
} from "../../../../utils/options";

const General = ({ attributes, setAttributes }) => {
  const {
    layout,
    videoSource,
    videoUrl,
    posterUrl,
    playMode,
    aspectRatio,
    quote,
    quoteStyle,
    authorName,
    authorTitle,
    authorAvatarUrl,
    companyLogoUrl,
    rating,
    showVerifiedBadge,
    verifiedLabel,
    playerControls,
    playerMuted,
    playerLoop,
    playerAutoplay,
    enableSchemaMarkup,
    reviewItemName,
  } = attributes;

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Layout", "video-player-block")}
        initialOpen={true}
      >
        <SelectControl
          label={__("Card layout", "video-player-block")}
          value={layout || "media-left"}
          options={layoutOptions}
          onChange={(val) => setAttributes({ layout: val })}
        />
        <SelectControl
          label={__("Aspect ratio", "video-player-block")}
          value={aspectRatio || "16:9"}
          options={aspectRatioOptions}
          onChange={(val) => setAttributes({ aspectRatio: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Video", "video-player-block")}
        initialOpen={false}
      >
        <SelectControl
          label={__("Source type", "video-player-block")}
          value={videoSource || "upload"}
          options={videoSourceOptions}
          onChange={(val) => setAttributes({ videoSource: val })}
        />
        {videoSource === "upload" ? (
          <InlineMediaUpload
            label={__("Video file (MP4 / WebM)", "video-player-block")}
            value={videoUrl || ""}
            types={["video"]}
            onChange={(val, id) =>
              setAttributes({ videoUrl: val || "", videoId: id || 0 })
            }
            placeholder="https://..."
          />
        ) : (
          <TextControl
            label={__("Video URL", "video-player-block")}
            value={videoUrl || ""}
            onChange={(val) => setAttributes({ videoUrl: val })}
            placeholder="https://..."
            help={__(
              "Paste a YouTube, Vimeo or other video URL matching the source you selected above.",
              "video-player-block",
            )}
          />
        )}
        <InlineMediaUpload
          label={__("Poster image (thumbnail)", "video-player-block")}
          value={posterUrl || ""}
          types={["image"]}
          onChange={(val) => setAttributes({ posterUrl: val || "" })}
        />
        <SelectControl
          label={__("Play mode", "video-player-block")}
          value={playMode || "inline"}
          options={playModeOptions}
          onChange={(val) => setAttributes({ playMode: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Playback options", "video-player-block")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Show player controls", "video-player-block")}
          checked={!!playerControls}
          onChange={(val) => setAttributes({ playerControls: val })}
        />
        <ToggleControl
          label={__("Start muted", "video-player-block")}
          checked={!!playerMuted}
          onChange={(val) => setAttributes({ playerMuted: val })}
        />
        <ToggleControl
          label={__("Loop", "video-player-block")}
          checked={!!playerLoop}
          onChange={(val) => setAttributes({ playerLoop: val })}
        />
        <ToggleControl
          label={__("Autoplay after activation", "video-player-block")}
          checked={!!playerAutoplay}
          onChange={(val) => setAttributes({ playerAutoplay: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Quote", "video-player-block")}
        initialOpen={false}
      >
        <TextareaControl
          label={__("Quote", "video-player-block")}
          value={quote || ""}
          onChange={(val) => setAttributes({ quote: val })}
          rows={4}
          help={__(
            "Inline HTML is allowed (e.g. <em>, <strong>).",
            "video-player-block",
          )}
        />
        <SelectControl
          label={__("Quote treatment", "video-player-block")}
          value={quoteStyle || "large-quote-mark"}
          options={quoteStyleOptions}
          onChange={(val) => setAttributes({ quoteStyle: val })}
        />
        <RangeControl
          label={__("Star rating (0–5, half steps)", "video-player-block")}
          value={Number(rating) || 0}
          min={0}
          max={5}
          step={0.5}
          onChange={(val) => setAttributes({ rating: val })}
          help={__("Set to 0 to hide the star row.", "video-player-block")}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Author", "video-player-block")}
        initialOpen={false}
      >
        <TextControl
          label={__("Author name", "video-player-block")}
          value={authorName || ""}
          onChange={(val) => setAttributes({ authorName: val })}
        />
        <TextControl
          label={__("Author title / company", "video-player-block")}
          value={authorTitle || ""}
          onChange={(val) => setAttributes({ authorTitle: val })}
          placeholder="Head of Product, Acme"
        />
        <InlineMediaUpload
          label={__("Author avatar", "video-player-block")}
          value={authorAvatarUrl || ""}
          types={["image"]}
          onChange={(val, id) =>
            setAttributes({
              authorAvatarUrl: val || "",
              authorAvatarId: id || 0,
            })
          }
        />
        <InlineMediaUpload
          label={__("Company logo (optional)", "video-player-block")}
          value={companyLogoUrl || ""}
          types={["image"]}
          onChange={(val, id) =>
            setAttributes({
              companyLogoUrl: val || "",
              companyLogoId: id || 0,
            })
          }
        />
        <ToggleControl
          label={__("Show verified badge", "video-player-block")}
          checked={!!showVerifiedBadge}
          onChange={(val) => setAttributes({ showVerifiedBadge: val })}
        />
        {showVerifiedBadge && (
          <TextControl
            label={__("Verified badge label", "video-player-block")}
            value={verifiedLabel || ""}
            onChange={(val) => setAttributes({ verifiedLabel: val })}
            placeholder="Verified customer"
          />
        )}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("SEO / Schema", "video-player-block")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Output schema.org/Review JSON-LD", "video-player-block")}
          checked={!!enableSchemaMarkup}
          onChange={(val) => setAttributes({ enableSchemaMarkup: val })}
        />
        {enableSchemaMarkup && (
          <TextControl
            label={__("Reviewed item name", "video-player-block")}
            value={reviewItemName || ""}
            onChange={(val) => setAttributes({ reviewItemName: val })}
            placeholder="Your Product / Service name"
            help={__(
              "Required by Google for valid Review structured data.",
              "video-player-block",
            )}
          />
        )}
      </PanelBody>
    </>
  );
};

export default General;
