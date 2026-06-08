import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  ToggleControl,
  SelectControl,
  RangeControl,
  Button,
} from "@wordpress/components";
import {
  videoSourceOptions,
  aspectRatioOptions,
  overlayTypeOptions,
  overlayPositionOptions,
  ctaStyleOptions,
  ctaTargetOptions,
  hotspotShapeOptions,
  gateProviderOptions,
} from "../../../../utils/options";
import { detectSource, normaliseOverlay, uid } from "../../../../utils/functions";
import { trashIcon } from "../../../../utils/icons";

const General = ({ attributes, setAttributes }) => {
  const {
    videoSource,
    videoUrl,
    posterUrl,
    aspectRatio,
    autoplay,
    loop,
    muted,
    controls,
    pauseOnOverlay,
    overlays = [],
    endScreen = {},
    chapterMarkers = [],
    showChapterList,
    gateEnabled,
    gateTriggerTime,
    gateProvider,
    gateWebhookUrl,
    gateHeadline,
    gateSubtext,
    gateButtonLabel,
    analyticsEnabled,
    containerMaxWidth,
  } = attributes;

  const updateOverlay = (index, patch) => {
    const next = overlays.map((o, i) =>
      i === index ? normaliseOverlay({ ...o, ...patch }) : o,
    );
    setAttributes({ overlays: next });
  };
  const removeOverlay = (index) => {
    setAttributes({ overlays: overlays.filter((_, i) => i !== index) });
  };
  const addOverlay = (type = "cta") => {
    setAttributes({
      overlays: [
        ...overlays,
        normaliseOverlay({
          id: uid("ov"),
          type,
          startTime: 0,
          endTime: 5,
          position: "bottom-right",
          ctaLabel: type === "cta" ? "Click here" : "",
          ctaUrl: type === "cta" || type === "hotspot" ? "https://example.com" : "",
        }),
      ],
    });
  };

  const updateChapter = (index, patch) => {
    const next = chapterMarkers.map((c, i) =>
      i === index ? { ...c, ...patch } : c,
    );
    setAttributes({ chapterMarkers: next });
  };
  const removeChapter = (index) => {
    setAttributes({
      chapterMarkers: chapterMarkers.filter((_, i) => i !== index),
    });
  };
  const addChapter = () => {
    setAttributes({
      chapterMarkers: [
        ...chapterMarkers,
        { id: uid("ch"), time: 0, label: "New chapter" },
      ],
    });
  };

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Video source", "video-player-block")}
        initialOpen={true}
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
            "Self-hosted MP4 / WebM, YouTube, or Vimeo URL.",
            "video-player-block",
          )}
        />
        <SelectControl
          label={__("Source type", "video-player-block")}
          value={videoSource || "self"}
          options={videoSourceOptions}
          onChange={(val) => setAttributes({ videoSource: val })}
        />
        <TextControl
          label={__("Poster image URL", "video-player-block")}
          value={posterUrl || ""}
          onChange={(val) => setAttributes({ posterUrl: val })}
          placeholder="https://..."
        />
        <SelectControl
          label={__("Aspect ratio", "video-player-block")}
          value={aspectRatio || "16:9"}
          options={aspectRatioOptions}
          onChange={(val) => setAttributes({ aspectRatio: val })}
        />
        <TextControl
          label={__("Container max-width", "video-player-block")}
          value={containerMaxWidth || ""}
          onChange={(val) => setAttributes({ containerMaxWidth: val })}
          placeholder="960px"
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Playback", "video-player-block")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Autoplay (muted)", "video-player-block")}
          checked={!!autoplay}
          onChange={(val) => setAttributes({ autoplay: val })}
        />
        <ToggleControl
          label={__("Loop", "video-player-block")}
          checked={!!loop}
          onChange={(val) => setAttributes({ loop: val })}
        />
        <ToggleControl
          label={__("Start muted", "video-player-block")}
          checked={!!muted}
          onChange={(val) => setAttributes({ muted: val })}
        />
        <ToggleControl
          label={__("Show native controls", "video-player-block")}
          checked={!!controls}
          onChange={(val) => setAttributes({ controls: val })}
        />
        <ToggleControl
          label={__("Pause video while an overlay is visible", "video-player-block")}
          checked={!!pauseOnOverlay}
          onChange={(val) => setAttributes({ pauseOnOverlay: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Timeline overlays", "video-player-block")}
        initialOpen={false}
      >
        {(!overlays || overlays.length === 0) && (
          <p style={{ marginTop: 0, opacity: 0.7 }}>
            {__("No overlays yet.", "video-player-block")}
          </p>
        )}

        {overlays.map((raw, index) => {
          const o = normaliseOverlay(raw);
          return (
            <div
              key={o.id}
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: 6,
                padding: 10,
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <strong style={{ fontSize: 12 }}>
                  #{index + 1} · {o.type}
                </strong>
                <Button
                  isDestructive
                  isSmall
                  onClick={() => removeOverlay(index)}
                  aria-label={__("Remove overlay", "video-player-block")}
                >
                  {trashIcon}
                </Button>
              </div>

              <SelectControl
                label={__("Type", "video-player-block")}
                value={o.type}
                options={overlayTypeOptions}
                onChange={(val) => updateOverlay(index, { type: val })}
              />

              <div style={{ display: "flex", gap: 8 }}>
                <RangeControl
                  label={__("Start (s)", "video-player-block")}
                  value={o.startTime}
                  min={0}
                  max={3600}
                  step={0.5}
                  onChange={(val) =>
                    updateOverlay(index, { startTime: Number(val) || 0 })
                  }
                />
                <RangeControl
                  label={__("End (s)", "video-player-block")}
                  value={o.endTime}
                  min={0}
                  max={3600}
                  step={0.5}
                  onChange={(val) =>
                    updateOverlay(index, { endTime: Number(val) || 0 })
                  }
                />
              </div>

              <SelectControl
                label={__("Position", "video-player-block")}
                value={o.position}
                options={overlayPositionOptions}
                onChange={(val) => updateOverlay(index, { position: val })}
              />

              {(o.type === "text" || o.type === "cta" || o.type === "image-card") && (
                <TextareaControl
                  label={__("Content / annotation", "video-player-block")}
                  value={o.content}
                  rows={2}
                  onChange={(val) => updateOverlay(index, { content: val })}
                />
              )}

              {o.type === "image-card" && (
                <TextControl
                  label={__("Image URL", "video-player-block")}
                  value={o.imageUrl}
                  onChange={(val) => updateOverlay(index, { imageUrl: val })}
                  placeholder="https://..."
                />
              )}

              {(o.type === "cta" || o.type === "hotspot" || o.type === "image-card") && (
                <>
                  <TextControl
                    label={__("CTA label", "video-player-block")}
                    value={o.ctaLabel}
                    onChange={(val) => updateOverlay(index, { ctaLabel: val })}
                  />
                  <TextControl
                    label={__("CTA URL", "video-player-block")}
                    value={o.ctaUrl}
                    onChange={(val) => updateOverlay(index, { ctaUrl: val })}
                    placeholder="https://..."
                  />
                  <SelectControl
                    label={__("Open in", "video-player-block")}
                    value={o.ctaTarget}
                    options={ctaTargetOptions}
                    onChange={(val) => updateOverlay(index, { ctaTarget: val })}
                  />
                </>
              )}

              {o.type === "cta" && (
                <SelectControl
                  label={__("CTA style", "video-player-block")}
                  value={o.ctaStyle}
                  options={ctaStyleOptions}
                  onChange={(val) => updateOverlay(index, { ctaStyle: val })}
                />
              )}

              {o.type === "hotspot" && (
                <>
                  <SelectControl
                    label={__("Shape", "video-player-block")}
                    value={o.hotspotShape}
                    options={hotspotShapeOptions}
                    onChange={(val) =>
                      updateOverlay(index, { hotspotShape: val })
                    }
                  />
                  <ToggleControl
                    label={__("Pulse animation", "video-player-block")}
                    checked={!!o.pulse}
                    onChange={(val) => updateOverlay(index, { pulse: val })}
                  />
                </>
              )}

              <TextControl
                label={__("Background color", "video-player-block")}
                value={o.bgColor}
                onChange={(val) => updateOverlay(index, { bgColor: val })}
                placeholder="#136EF5"
              />
              <TextControl
                label={__("Text color", "video-player-block")}
                value={o.textColor}
                onChange={(val) => updateOverlay(index, { textColor: val })}
                placeholder="#ffffff"
              />
              <RangeControl
                label={__("Border radius (px)", "video-player-block")}
                value={o.borderRadius}
                min={0}
                max={40}
                onChange={(val) =>
                  updateOverlay(index, { borderRadius: Number(val) || 0 })
                }
              />
            </div>
          );
        })}

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          <Button isSecondary onClick={() => addOverlay("cta")}>
            + CTA
          </Button>
          <Button isSecondary onClick={() => addOverlay("text")}>
            + Text
          </Button>
          <Button isSecondary onClick={() => addOverlay("image-card")}>
            + Image card
          </Button>
          <Button isSecondary onClick={() => addOverlay("hotspot")}>
            + Hotspot
          </Button>
        </div>
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("End-screen", "video-player-block")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Show end-screen", "video-player-block")}
          checked={!!endScreen?.enabled}
          onChange={(val) =>
            setAttributes({ endScreen: { ...endScreen, enabled: val } })
          }
        />
        {endScreen?.enabled && (
          <>
            <TextControl
              label={__("Headline", "video-player-block")}
              value={endScreen?.headline || ""}
              onChange={(val) =>
                setAttributes({ endScreen: { ...endScreen, headline: val } })
              }
            />
            <TextareaControl
              label={__("Subtext", "video-player-block")}
              value={endScreen?.subtext || ""}
              rows={2}
              onChange={(val) =>
                setAttributes({ endScreen: { ...endScreen, subtext: val } })
              }
            />
            <TextControl
              label={__("CTA label", "video-player-block")}
              value={endScreen?.ctaLabel || ""}
              onChange={(val) =>
                setAttributes({ endScreen: { ...endScreen, ctaLabel: val } })
              }
            />
            <TextControl
              label={__("CTA URL", "video-player-block")}
              value={endScreen?.ctaUrl || ""}
              onChange={(val) =>
                setAttributes({ endScreen: { ...endScreen, ctaUrl: val } })
              }
              placeholder="https://..."
            />
            <SelectControl
              label={__("Open in", "video-player-block")}
              value={endScreen?.ctaTarget || "_blank"}
              options={ctaTargetOptions}
              onChange={(val) =>
                setAttributes({ endScreen: { ...endScreen, ctaTarget: val } })
              }
            />
            <ToggleControl
              label={__("Show Rewatch button", "video-player-block")}
              checked={!!endScreen?.showRewatch}
              onChange={(val) =>
                setAttributes({ endScreen: { ...endScreen, showRewatch: val } })
              }
            />
            <TextControl
              label={__("Background color", "video-player-block")}
              value={endScreen?.bgColor || ""}
              onChange={(val) =>
                setAttributes({ endScreen: { ...endScreen, bgColor: val } })
              }
              placeholder="rgba(0,0,0,0.85)"
            />
            <TextControl
              label={__("Text color", "video-player-block")}
              value={endScreen?.textColor || ""}
              onChange={(val) =>
                setAttributes({ endScreen: { ...endScreen, textColor: val } })
              }
              placeholder="#ffffff"
            />
          </>
        )}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Chapters", "video-player-block")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Show chapter list below player", "video-player-block")}
          checked={!!showChapterList}
          onChange={(val) => setAttributes({ showChapterList: val })}
        />

        {chapterMarkers.map((c, index) => (
          <div
            key={c.id || index}
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: 6,
              padding: 8,
              marginBottom: 8,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 6,
              }}
            >
              <strong style={{ fontSize: 12 }}>#{index + 1}</strong>
              <Button
                isDestructive
                isSmall
                onClick={() => removeChapter(index)}
                aria-label={__("Remove chapter", "video-player-block")}
              >
                {trashIcon}
              </Button>
            </div>
            <TextControl
              label={__("Label", "video-player-block")}
              value={c.label || ""}
              onChange={(val) => updateChapter(index, { label: val })}
            />
            <RangeControl
              label={__("Time (s)", "video-player-block")}
              value={Number(c.time) || 0}
              min={0}
              max={3600}
              step={1}
              onChange={(val) => updateChapter(index, { time: Number(val) || 0 })}
            />
          </div>
        ))}

        <Button isSecondary onClick={addChapter}>
          {__("+ Add chapter", "video-player-block")}
        </Button>
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Email gate", "video-player-block")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Require email before playback continues", "video-player-block")}
          checked={!!gateEnabled}
          onChange={(val) => setAttributes({ gateEnabled: val })}
        />
        {gateEnabled && (
          <>
            <RangeControl
              label={__("Trigger time (seconds, 0 = before play)", "video-player-block")}
              value={Number(gateTriggerTime) || 0}
              min={0}
              max={3600}
              step={1}
              onChange={(val) =>
                setAttributes({ gateTriggerTime: Number(val) || 0 })
              }
            />
            <SelectControl
              label={__("Provider", "video-player-block")}
              value={gateProvider || "none"}
              options={gateProviderOptions}
              onChange={(val) => setAttributes({ gateProvider: val })}
            />
            {gateProvider === "webhook" && (
              <TextControl
                label={__("Webhook URL", "video-player-block")}
                value={gateWebhookUrl || ""}
                onChange={(val) => setAttributes({ gateWebhookUrl: val })}
                placeholder="https://hooks.example.com/..."
              />
            )}
            <TextControl
              label={__("Gate headline", "video-player-block")}
              value={gateHeadline || ""}
              onChange={(val) => setAttributes({ gateHeadline: val })}
            />
            <TextareaControl
              label={__("Gate subtext", "video-player-block")}
              value={gateSubtext || ""}
              rows={2}
              onChange={(val) => setAttributes({ gateSubtext: val })}
            />
            <TextControl
              label={__("Submit button label", "video-player-block")}
              value={gateButtonLabel || ""}
              onChange={(val) => setAttributes({ gateButtonLabel: val })}
            />
          </>
        )}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Analytics", "video-player-block")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Emit click / gate events via wp.hooks", "video-player-block")}
          checked={!!analyticsEnabled}
          onChange={(val) => setAttributes({ analyticsEnabled: val })}
          help={__(
            "Fires `vpb.interactiveVideo.<event>` actions plus a window CustomEvent so GA, Plausible, and custom listeners can record CTA clicks, hotspot taps, gate submissions, and end-screen actions.",
            "video-player-block",
          )}
        />
      </PanelBody>
    </>
  );
};

export default General;
