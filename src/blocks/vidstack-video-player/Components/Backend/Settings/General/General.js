import { __ } from "@wordpress/i18n";
import {
  TextControl,
  PanelBody,
  ToggleControl,
  SelectControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { InlineMediaUpload } from "../../../../../../../../bpl-tools/Components";

const General = ({ attributes, setAttributes }) => {
  const {
    items = {},
    playerOptions = {},
    controls = {},
    dimensions = {},
  } = attributes;

  const effectiveDimensions = {
    width: "100%",
    height: "",
    aspectRatio: "16/9",
    ...dimensions,
  };

  const updateDimensions = (key, value) =>
    setAttributes({ dimensions: { ...dimensions, [key]: value } });

  const effectivePlayerOptions = {
    autoplay: false,
    loop: false,
    muted: false,
    playsInline: true,
    crossOrigin: false,
    preload: "metadata",
    load: "visible",
    posterFit: "cover",
    nativeControls: false,
    playbackRates: "0.5, 0.75, 1, 1.25, 1.5, 2",
    ...playerOptions,
  };
  const effectiveControls = {
    showPlayControl: true,
    showMuteControl: true,
    showVolumeControl: true,
    showTimeControl: true,
    showCaptionControl: true,
    showChaptersControl: true,
    showCastControl: true,
    showSettingsControl: true,
    showPipControl: true,
    showFullscreenControl: true,
    ...controls,
  };

  const updateItems = (key, value) =>
    setAttributes({ items: { ...items, [key]: value } });

  const updatePlayerOptions = (key, value) =>
    setAttributes({ playerOptions: { ...playerOptions, [key]: value } });

  const updateControls = (key, value) =>
    setAttributes({ controls: { ...controls, [key]: value } });

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Media & Source", "video-player-block")}
        initialOpen={true}>
        <InlineMediaUpload
          label={__("Video URL", "video-player-block")}
          value={items.videoUrl}
          types={["video"]}
          onChange={(val) => updateItems("videoUrl", val)}
        />

        <p
          style={{
            margin: "6px 0 0",
            fontSize: 11,
            fontStyle: "italic",
            color: "#757575",
          }}>
          {__(
            "Editor preview only: some player interactions (click-to-seek, captions, and the hover thumbnail preview) may be limited here — they work fully on the published page.",
            "video-player-block",
          )}
        </p>

        <InlineMediaUpload
          className="mt15"
          label={__("Poster URL", "video-player-block")}
          value={items.posterUrl}
          types={["image"]}
          onChange={(val) => updateItems("posterUrl", val)}
        />

        <TextControl
          className="mt15"
          label={__("Video Title", "video-player-block")}
          value={items.playerTitle}
          onChange={(val) => updateItems("playerTitle", val)}
        />

        <div className="mt15">
          <SelectControl
            label={__("Poster Fit", "video-player-block")}
            value={effectivePlayerOptions.posterFit}
            options={[
              { label: "Cover", value: "cover" },
              { label: "Contain", value: "contain" },
              { label: "Scale Down", value: "scale-down" },
              { label: "None", value: "none" },
            ]}
            onChange={(val) => updatePlayerOptions("posterFit", val)}
          />
        </div>
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Tracks & Subtitles", "video-player-block")}
        initialOpen={false}>
        <div className="mt15">
          <InlineMediaUpload
            label={__("Thumbnails URL (.vtt)", "video-player-block")}
            value={items.thumbnailsUrl}
            types={["text"]}
            onChange={(val) => updateItems("thumbnailsUrl", val)}
            placeholder="https://example.com/thumbnails.vtt"
          />
        </div>

        <div className="mt15">
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
            }}>
            {__("Manage Text Tracks", "video-player-block")}
          </label>
          <div
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "4px",
              background: "#f9f9f9",
            }}>
            {(items?.textTracks).map((track, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "15px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  background: "#fff",
                }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}>
                  <strong>
                    {__("Track #", "video-player-block")}
                    {index + 1}
                  </strong>
                  <button
                    type="button"
                    style={{
                      color: "#d94f4f",
                      background: "none",
                      border: "1px solid #d94f4f",
                      cursor: "pointer",
                      padding: "5px 10px",
                      borderRadius: "2px",
                    }}
                    onClick={() => {
                      const newTracks = [...items?.textTracks];
                      newTracks.splice(index, 1);
                      updateItems("textTracks", newTracks);
                    }}>
                    {__("Remove", "video-player-block")}
                  </button>
                </div>

                <InlineMediaUpload
                  label={__("URL", "video-player-block")}
                  value={track.src}
                  types={["text"]}
                  onChange={(val) => {
                    const newTracks = [...items?.textTracks];
                    newTracks[index].src = val;
                    updateItems("textTracks", newTracks);
                  }}
                  placeholder="https://example.com/track.vtt"
                />

                <div
                  style={{
                    marginTop: "8px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                  }}>
                  <TextControl
                    label={__("Label", "video-player-block")}
                    value={track.label}
                    onChange={(val) => {
                      const newTracks = [...(items.textTracks || [])];
                      newTracks[index].label = val;
                      updateItems("textTracks", newTracks);
                    }}
                  />
                  <TextControl
                    label={__("Language", "video-player-block")}
                    value={track.language}
                    onChange={(val) => {
                      const newTracks = [...(items.textTracks || [])];
                      newTracks[index].language = val;
                      updateItems("textTracks", newTracks);
                    }}
                    placeholder="en-US"
                  />
                </div>

                <SelectControl
                  label={__("Kind", "video-player-block")}
                  value={track.kind}
                  options={[
                    // { label: "Subtitles", value: "subtitles" },
                    { label: "Captions", value: "captions" },
                    { label: "Chapters", value: "chapters" },
                  ]}
                  onChange={(val) => {
                    const newTracks = [...(items.textTracks || [])];
                    newTracks[index].kind = val;
                    updateItems("textTracks", newTracks);
                  }}
                />

                <ToggleControl
                  label={__("Default", "video-player-block")}
                  checked={track.default}
                  onChange={(val) => {
                    const newTracks = [...(items.textTracks || [])];
                    // If setting this to default, disable others of the same kind
                    if (val) {
                      newTracks.forEach((t) => {
                        if (t.kind === track.kind) t.default = false;
                      });
                    }
                    newTracks[index].default = val;
                    updateItems("textTracks", newTracks);
                  }}
                />
              </div>
            ))}

            <button
              type="button"
              className="components-button is-secondary"
              style={{
                width: "100%",
                display: "block",
                justifyContent: "center",
              }}
              onClick={() => {
                const newTracks = [...(items.textTracks || [])];
                newTracks.push({
                  src: "",
                  label: "English",
                  language: "en-US",
                  kind: "subtitles",
                  default: false,
                });
                updateItems("textTracks", newTracks);
              }}>
              {__("Add Track", "video-player-block")}
            </button>
          </div>
        </div>

        {(items.subtitlesUrl || items.captionUrl || items.chaptersUrl) && (
          <div
            className="mt15"
            style={{
              padding: "10px",
              border: "1px dashed #d94f4f",
              borderRadius: "4px",
              background: "#fff5f5",
            }}>
            <p
              style={{
                margin: "0 0 10px 0",
                fontSize: "12px",
                color: "#d94f4f",
              }}>
              <strong>{__("Legacy Tracks Detected", "video-player-block")}</strong>:{" "}
              {__(
                "These tracks are from an older version. Please clear them if you are using the new manager above.",
                "video-player-block",
              )}
            </p>
            {items.subtitlesUrl && (
              <TextControl
                label={__("Legacy Subtitles URL", "video-player-block")}
                value={items.subtitlesUrl}
                onChange={(val) => updateItems("subtitlesUrl", val)}
              />
            )}
            {items.captionUrl && (
              <TextControl
                label={__("Legacy Caption URL", "video-player-block")}
                value={items.captionUrl}
                onChange={(val) => updateItems("captionUrl", val)}
              />
            )}
            {items.chaptersUrl && (
              <TextControl
                label={__("Legacy Chapters URL", "video-player-block")}
                value={items.chaptersUrl}
                onChange={(val) => updateItems("chaptersUrl", val)}
              />
            )}
          </div>
        )}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Dimensions", "video-player-block")}
        initialOpen={true}>
        <div className="mt15">
          <UnitControl
            label={__("Width", "video-player-block")}
            value={effectiveDimensions.width}
            onChange={(val) => updateDimensions("width", val)}
            units={[
              { value: "%", label: "%", default: 100 },
              { value: "px", label: "px", default: 800 },
              { value: "vw", label: "vw", default: 100 },
            ]}
          />
        </div>

        <div className="mt15">
          <UnitControl
            label={__("Height", "video-player-block")}
            value={effectiveDimensions.height}
            onChange={(val) => updateDimensions("height", val)}
            units={[
              { value: "px", label: "px", default: 450 },
              { value: "vh", label: "vh", default: 50 },
            ]}
            placeholder={__("Auto (from aspect ratio)", "video-player-block")}
          />
        </div>

        <div className="mt15">
          <SelectControl
            label={__("Aspect Ratio", "video-player-block")}
            value={effectiveDimensions.aspectRatio}
            options={[
              { label: "16:9 (Widescreen)", value: "16/9" },
              { label: "4:3 (Standard)", value: "4/3" },
              { label: "21:9 (Ultrawide)", value: "21/9" },
              { label: "1:1 (Square)", value: "1/1" },
              { label: "9:16 (Vertical)", value: "9/16" },
              { label: "None", value: "" },
            ]}
            onChange={(val) => updateDimensions("aspectRatio", val)}
            help={
              effectiveDimensions.height
                ? __("Disabled when a fixed height is set.", "video-player-block")
                : ""
            }
            disabled={!!effectiveDimensions.height}
          />
        </div>
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Player Behavior", "video-player-block")}
        initialOpen={false}>
        <ToggleControl
          label={__("Autoplay", "video-player-block")}
          checked={effectivePlayerOptions.autoplay}
          onChange={(val) => updatePlayerOptions("autoplay", val)}
        />

        <ToggleControl
          label={__("Loop", "video-player-block")}
          checked={effectivePlayerOptions.loop}
          onChange={(val) => updatePlayerOptions("loop", val)}
        />

        <ToggleControl
          label={__("Muted", "video-player-block")}
          checked={effectivePlayerOptions.muted}
          onChange={(val) => updatePlayerOptions("muted", val)}
        />

        <ToggleControl
          label={__("Plays Inline", "video-player-block")}
          checked={effectivePlayerOptions.playsInline}
          onChange={(val) => updatePlayerOptions("playsInline", val)}
        />

        <ToggleControl
          label={__("Cross Origin", "video-player-block")}
          checked={effectivePlayerOptions.crossOrigin}
          onChange={(val) => updatePlayerOptions("crossOrigin", val)}
        />

        <ToggleControl
          label={__("Native UI", "video-player-block")}
          checked={effectivePlayerOptions.nativeControls}
          onChange={(val) => updatePlayerOptions("nativeControls", val)}
          help={__("Use the browser's native video player UI.", "video-player-block")}
        />

        <div className="mt15">
          <SelectControl
            label={__("Preload", "video-player-block")}
            value={effectivePlayerOptions.preload}
            options={[
              { label: "None", value: "none" },
              { label: "Metadata", value: "metadata" },
              { label: "Auto", value: "auto" },
            ]}
            onChange={(val) => updatePlayerOptions("preload", val)}
          />
        </div>

        <div className="mt15">
          <SelectControl
            label={__("Load Strategy", "video-player-block")}
            value={effectivePlayerOptions.load}
            options={[
              { label: "Eager", value: "eager" },
              { label: "Visible", value: "visible" },
              { label: "Play", value: "play" },
            ]}
            onChange={(val) => updatePlayerOptions("load", val)}
            help={__(
              "When the player should start loading the media.",
              "video-player-block",
            )}
          />
        </div>

        <TextControl
          label={__("Playback Rates", "video-player-block")}
          value={effectivePlayerOptions.playbackRates}
          onChange={(val) => updatePlayerOptions("playbackRates", val)}
          help={__(
            "Comma-separated list of playback speeds (e.g., 0.5, 1, 1.5, 2).",
            "video-player-block",
          )}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("UI Controls Manager", "video-player-block")}
        initialOpen={false}>
        <ToggleControl
          label={__("Show Play Control", "video-player-block")}
          checked={effectiveControls.showPlayControl}
          onChange={(val) => updateControls("showPlayControl", val)}
        />

        <ToggleControl
          label={__("Show Mute Control", "video-player-block")}
          checked={effectiveControls.showMuteControl}
          onChange={(val) => updateControls("showMuteControl", val)}
        />

        <ToggleControl
          label={__("Show Volume Control", "video-player-block")}
          checked={effectiveControls.showVolumeControl}
          onChange={(val) => updateControls("showVolumeControl", val)}
        />

        <ToggleControl
          label={__("Show Time Control", "video-player-block")}
          checked={effectiveControls.showTimeControl}
          onChange={(val) => updateControls("showTimeControl", val)}
        />

        <ToggleControl
          label={__("Show Caption Control", "video-player-block")}
          checked={effectiveControls.showCaptionControl}
          onChange={(val) => updateControls("showCaptionControl", val)}
        />

        <ToggleControl
          label={__("Show Chapters Control", "video-player-block")}
          checked={effectiveControls.showChaptersControl}
          onChange={(val) => updateControls("showChaptersControl", val)}
        />

        <ToggleControl
          label={__("Show Cast Control", "video-player-block")}
          checked={effectiveControls.showCastControl}
          onChange={(val) => updateControls("showCastControl", val)}
        />

        <ToggleControl
          label={__("Show Settings Control", "video-player-block")}
          checked={effectiveControls.showSettingsControl}
          onChange={(val) => updateControls("showSettingsControl", val)}
        />

        <ToggleControl
          label={__("Show PIP Control", "video-player-block")}
          checked={effectiveControls.showPipControl}
          onChange={(val) => updateControls("showPipControl", val)}
        />

        <ToggleControl
          label={__("Show Fullscreen Control", "video-player-block")}
          checked={effectiveControls.showFullscreenControl}
          onChange={(val) => updateControls("showFullscreenControl", val)}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Accessibility Settings", "video-player-block")}
        initialOpen={false}>
        <ToggleControl
          label={__("Announcements", "video-player-block")}
          checked={playerOptions.announcements ?? true}
          onChange={(val) => updatePlayerOptions("announcements", val)}
        />

        <ToggleControl
          label={__("Keyboard Animations", "video-player-block")}
          checked={playerOptions.keyboardAnimations ?? true}
          onChange={(val) => updatePlayerOptions("keyboardAnimations", val)}
        />
      </PanelBody>
    </>
  );
};

export default General;
