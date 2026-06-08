import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  RangeControl,
  SelectControl,
  TextControl,
  Button,
} from "@wordpress/components";
import { ColorControl } from "../../../../../../../../bpl-tools/Components";
import {
  overlayTypeOptions,
  blendModeOptions,
} from "../../../../utils/options";

const Style = ({ attributes, setAttributes }) => {
  const {
    overlayType,
    overlayColor,
    overlayColors = [],
    overlayGradientAngle,
    overlayBlendMode,
    overlayBlur,
    noiseOpacity,
    vignetteStrength,
    eyebrowColor,
    headlineColor,
    headlineSize,
    headlineWeight,
    subheadlineColor,
    subheadlineSize,
    primaryCtaColor,
    primaryCtaTextColor,
    secondaryCtaColor,
    secondaryCtaTextColor,
    ctaBorderRadius,
    scrollIndicatorColor,
    containerBorderRadius,
  } = attributes;

  const stops = overlayColors?.length
    ? overlayColors
    : [
        { color: "rgba(0,0,0,0.85)", stop: 0 },
        { color: "rgba(0,0,0,0.15)", stop: 100 },
      ];

  const updateStop = (index, key, val) => {
    const next = stops.map((s, i) =>
      i === index ? { ...s, [key]: val } : s,
    );
    setAttributes({ overlayColors: next });
  };

  const removeStop = (index) => {
    if (stops.length <= 2) return;
    setAttributes({ overlayColors: stops.filter((_, i) => i !== index) });
  };

  const addStop = () => {
    const next = [...stops, { color: "rgba(0,0,0,0.5)", stop: 50 }];
    setAttributes({ overlayColors: next });
  };

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Overlay", "video-player-block")}
        initialOpen={true}
      >
        <SelectControl
          label={__("Overlay type", "video-player-block")}
          value={overlayType || "gradient"}
          options={overlayTypeOptions}
          onChange={(val) => setAttributes({ overlayType: val })}
        />

        {overlayType === "solid" && (
          <ColorControl
            label={__("Overlay color", "video-player-block")}
            value={overlayColor}
            onChange={(val) => setAttributes({ overlayColor: val })}
          />
        )}

        {(overlayType === "gradient" || overlayType === "radial") && (
          <>
            {overlayType === "gradient" && (
              <RangeControl
                label={__("Gradient angle (deg)", "video-player-block")}
                value={overlayGradientAngle ?? 180}
                min={0}
                max={360}
                onChange={(val) =>
                  setAttributes({ overlayGradientAngle: val })
                }
              />
            )}
            {stops.map((s, i) => (
              <div
                key={i}
                style={{
                  marginBottom: 10,
                  padding: 8,
                  border: "1px solid #e5e7eb",
                  borderRadius: 4,
                }}
              >
                <ColorControl
                  label={
                    __("Stop", "video-player-block") + ` ${i + 1}`
                  }
                  value={s.color}
                  onChange={(val) => updateStop(i, "color", val)}
                />
                <RangeControl
                  label={__("Position (%)", "video-player-block")}
                  value={s.stop ?? 0}
                  min={0}
                  max={100}
                  onChange={(val) => updateStop(i, "stop", val)}
                />
                <Button
                  isSmall
                  isDestructive
                  onClick={() => removeStop(i)}
                  disabled={stops.length <= 2}
                >
                  {__("Remove stop", "video-player-block")}
                </Button>
              </div>
            ))}
            <Button variant="secondary" onClick={addStop}>
              {__("Add stop", "video-player-block")}
            </Button>
          </>
        )}

        <SelectControl
          label={__("Blend mode", "video-player-block")}
          value={overlayBlendMode || "normal"}
          options={blendModeOptions}
          onChange={(val) => setAttributes({ overlayBlendMode: val })}
        />

        <RangeControl
          label={__("Overlay blur (px)", "video-player-block")}
          value={overlayBlur ?? 0}
          min={0}
          max={40}
          onChange={(val) => setAttributes({ overlayBlur: val })}
        />

        <RangeControl
          label={__("Noise texture opacity (%)", "video-player-block")}
          value={noiseOpacity ?? 0}
          min={0}
          max={100}
          onChange={(val) => setAttributes({ noiseOpacity: val })}
        />

        <RangeControl
          label={__("Vignette strength", "video-player-block")}
          value={vignetteStrength ?? 0}
          min={0}
          max={100}
          onChange={(val) => setAttributes({ vignetteStrength: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Typography Colors", "video-player-block")}
        initialOpen={false}
      >
        <ColorControl
          label={__("Eyebrow color", "video-player-block")}
          value={eyebrowColor}
          onChange={(val) => setAttributes({ eyebrowColor: val })}
        />
        <ColorControl
          label={__("Headline color", "video-player-block")}
          value={headlineColor}
          onChange={(val) => setAttributes({ headlineColor: val })}
        />
        <TextControl
          label={__("Headline size", "video-player-block")}
          value={headlineSize || ""}
          onChange={(val) => setAttributes({ headlineSize: val })}
          help={__(
            "Any CSS size, e.g. 'clamp(2rem, 5vw, 4rem)' or '64px'.",
            "video-player-block",
          )}
        />
        <SelectControl
          label={__("Headline weight", "video-player-block")}
          value={headlineWeight || "700"}
          options={[
            { label: "300", value: "300" },
            { label: "400", value: "400" },
            { label: "500", value: "500" },
            { label: "600", value: "600" },
            { label: "700", value: "700" },
            { label: "800", value: "800" },
            { label: "900", value: "900" },
          ]}
          onChange={(val) => setAttributes({ headlineWeight: val })}
        />
        <ColorControl
          label={__("Subheadline color", "video-player-block")}
          value={subheadlineColor}
          onChange={(val) => setAttributes({ subheadlineColor: val })}
        />
        <TextControl
          label={__("Subheadline size", "video-player-block")}
          value={subheadlineSize || ""}
          onChange={(val) => setAttributes({ subheadlineSize: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("CTA Colors", "video-player-block")}
        initialOpen={false}
      >
        <ColorControl
          label={__("Primary background", "video-player-block")}
          value={primaryCtaColor}
          onChange={(val) => setAttributes({ primaryCtaColor: val })}
        />
        <ColorControl
          label={__("Primary text", "video-player-block")}
          value={primaryCtaTextColor}
          onChange={(val) => setAttributes({ primaryCtaTextColor: val })}
        />
        <ColorControl
          label={__("Secondary background", "video-player-block")}
          value={secondaryCtaColor}
          onChange={(val) => setAttributes({ secondaryCtaColor: val })}
        />
        <ColorControl
          label={__("Secondary text", "video-player-block")}
          value={secondaryCtaTextColor}
          onChange={(val) => setAttributes({ secondaryCtaTextColor: val })}
        />
        <RangeControl
          label={__("CTA border radius (px)", "video-player-block")}
          value={ctaBorderRadius ?? 8}
          min={0}
          max={40}
          onChange={(val) => setAttributes({ ctaBorderRadius: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Container", "video-player-block")}
        initialOpen={false}
      >
        <RangeControl
          label={__("Border radius (px)", "video-player-block")}
          value={containerBorderRadius ?? 0}
          min={0}
          max={60}
          onChange={(val) => setAttributes({ containerBorderRadius: val })}
        />
        <ColorControl
          label={__("Scroll indicator color", "video-player-block")}
          value={scrollIndicatorColor}
          onChange={(val) => setAttributes({ scrollIndicatorColor: val })}
        />
      </PanelBody>
    </>
  );
};

export default Style;
