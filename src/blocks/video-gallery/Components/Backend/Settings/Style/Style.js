import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  RangeControl,
  SelectControl,
  __experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import { ColorControl } from "../../../../../../../../bpl-tools/Components";
import {
  playIconStyleOptions,
  hoverEffectOptions,
  lightboxThemeOptions,
} from "../../../../utils/options";

const Style = ({ attributes, setAttributes }) => {
  const {
    tileBorderRadius,
    tileShadow = {},
    tileOverlayColor,
    tileBgColor,
    titleColor,
    descriptionColor,
    filterActiveColor,
    filterTextColor,
    playIconColor,
    playIconBgColor,
    playIconStyle,
    hoverEffect,
    lightboxTheme,
  } = attributes;

  const shadow = {
    x: 0,
    y: 4,
    blur: 16,
    spread: 0,
    color: "rgba(0,0,0,0.18)",
    ...tileShadow,
  };

  const updateShadow = (key, val) =>
    setAttributes({ tileShadow: { ...shadow, [key]: val } });

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Tile Appearance", "video-player-block")}
        initialOpen={true}
      >
        <RangeControl
          label={__("Border Radius", "video-player-block")}
          value={tileBorderRadius}
          min={0}
          max={40}
          onChange={(val) => setAttributes({ tileBorderRadius: val })}
        />

        <ColorControl
          label={__("Background Color", "video-player-block")}
          value={tileBgColor}
          onChange={(val) => setAttributes({ tileBgColor: val })}
        />

        <ColorControl
          label={__("Overlay Color", "video-player-block")}
          value={tileOverlayColor}
          onChange={(val) => setAttributes({ tileOverlayColor: val })}
        />

        <SelectControl
          label={__("Hover Effect", "video-player-block")}
          value={hoverEffect}
          options={hoverEffectOptions}
          onChange={(val) => setAttributes({ hoverEffect: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Tile Shadow", "video-player-block")}
        initialOpen={false}
      >
        <NumberControl
          label={__("X offset (px)", "video-player-block")}
          value={shadow.x}
          onChange={(val) => updateShadow("x", parseInt(val || 0, 10))}
        />
        <NumberControl
          label={__("Y offset (px)", "video-player-block")}
          value={shadow.y}
          onChange={(val) => updateShadow("y", parseInt(val || 0, 10))}
        />
        <NumberControl
          label={__("Blur (px)", "video-player-block")}
          value={shadow.blur}
          onChange={(val) => updateShadow("blur", parseInt(val || 0, 10))}
        />
        <NumberControl
          label={__("Spread (px)", "video-player-block")}
          value={shadow.spread}
          onChange={(val) => updateShadow("spread", parseInt(val || 0, 10))}
        />
        <ColorControl
          label={__("Shadow Color", "video-player-block")}
          value={shadow.color}
          onChange={(val) => updateShadow("color", val)}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Play Icon", "video-player-block")}
        initialOpen={false}
      >
        <SelectControl
          label={__("Icon Style", "video-player-block")}
          value={playIconStyle}
          options={playIconStyleOptions}
          onChange={(val) => setAttributes({ playIconStyle: val })}
        />
        <ColorControl
          label={__("Icon Color", "video-player-block")}
          value={playIconColor}
          onChange={(val) => setAttributes({ playIconColor: val })}
        />
        <ColorControl
          label={__("Icon Background", "video-player-block")}
          value={playIconBgColor}
          onChange={(val) => setAttributes({ playIconBgColor: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Typography Colors", "video-player-block")}
        initialOpen={false}
      >
        <ColorControl
          label={__("Title Color", "video-player-block")}
          value={titleColor}
          onChange={(val) => setAttributes({ titleColor: val })}
        />
        <ColorControl
          label={__("Description Color", "video-player-block")}
          value={descriptionColor}
          onChange={(val) => setAttributes({ descriptionColor: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Filter Bar", "video-player-block")}
        initialOpen={false}
      >
        <ColorControl
          label={__("Active Color", "video-player-block")}
          value={filterActiveColor}
          onChange={(val) => setAttributes({ filterActiveColor: val })}
        />
        <ColorControl
          label={__("Filter Text Color", "video-player-block")}
          value={filterTextColor}
          onChange={(val) => setAttributes({ filterTextColor: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Lightbox", "video-player-block")}
        initialOpen={false}
      >
        <SelectControl
          label={__("Theme", "video-player-block")}
          value={lightboxTheme}
          options={lightboxThemeOptions}
          onChange={(val) => setAttributes({ lightboxTheme: val })}
        />
      </PanelBody>
    </>
  );
};

export default Style;
