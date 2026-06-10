import { __ } from "@wordpress/i18n";
import { PanelBody, RangeControl } from "@wordpress/components";
import { ColorControl, Typography } from "../../../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes }) => {
  const { playerStyles = {} } = attributes;

  const updatePlayerStyles = (key, value) =>
    setAttributes({ playerStyles: { ...playerStyles, [key]: value } });

  return (
    <PanelBody
      className="bPlPanelBody"
      title={__("Player Style", "video-player-block")}
      initialOpen={true}>
      <ColorControl
        label={__("Primary Color", "video-player-block")}
        color={playerStyles.primaryColor}
        onChange={(val) => updatePlayerStyles("primaryColor", val)}
        defaultColor={playerStyles.primaryColor}
        value={playerStyles.primaryColor}
      />

      <ColorControl
        label={__("Secondary Color", "video-player-block")}
        color={playerStyles.secondaryColor}
        onChange={(val) => updatePlayerStyles("secondaryColor", val)}
        defaultColor={playerStyles.secondaryColor}
        value={playerStyles.secondaryColor}
      />

      <ColorControl
        label={__("Menu Active Color", "video-player-block")}
        color={playerStyles.activeColor}
        onChange={(val) => updatePlayerStyles("activeColor", val)}
        defaultColor={playerStyles.activeColor}
        value={playerStyles.activeColor}
      />

      {/* <ColorControl
        label={__("Background Color", "video-player")}
        color={playerStyles.backgroundColor}
        onChange={(val) => updatePlayerStyles("backgroundColor", val)}
        defaultColor={playerStyles.backgroundColor}
        value={playerStyles.backgroundColor}
      /> */}

      <ColorControl
        label={__("Text Color", "video-player-block")}
        color={playerStyles.textColor}
        onChange={(val) => updatePlayerStyles("textColor", val)}
        defaultColor={playerStyles.textColor}
        value={playerStyles.textColor}
      />

      <ColorControl
        label={__("Title Color", "video-player-block")}
        color={playerStyles.titleColor}
        onChange={(val) => updatePlayerStyles("titleColor", val)}
        defaultColor={playerStyles.titleColor}
        value={playerStyles.titleColor}
      />

      <Typography
        label={__("Title Typography", "video-player-block")}
        value={playerStyles.titleTypography}
        onChange={(val) => updatePlayerStyles("titleTypography", val)}
      />

      {/* <ColorControl
        label={__("Player Background", "video-player")}
        color={playerStyles.playerBackgroundColor}
        onChange={(val) => updatePlayerStyles("playerBackgroundColor", val)}
        defaultColor={playerStyles.playerBackgroundColor}
        value={playerStyles.playerBackgroundColor}
      /> */}

      <ColorControl
        label={__("Control Background", "video-player-block")}
        color={playerStyles.controlBackgroundColor}
        onChange={(val) => updatePlayerStyles("controlBackgroundColor", val)}
        defaultColor={playerStyles.controlBackgroundColor}
        value={playerStyles.controlBackgroundColor}
      />

      <ColorControl
        label={__("Button Hover Color", "video-player-block")}
        color={playerStyles.buttonHoverColor}
        onChange={(val) => updatePlayerStyles("buttonHoverColor", val)}
        defaultColor={playerStyles.buttonHoverColor}
        value={playerStyles.buttonHoverColor}
      />

      <ColorControl
        label={__("Menu Background", "video-player-block")}
        color={playerStyles.menuBackgroundColor}
        onChange={(val) => updatePlayerStyles("menuBackgroundColor", val)}
        defaultColor={playerStyles.menuBackgroundColor}
        value={playerStyles.menuBackgroundColor}
      />

      <ColorControl
        label={__("Menu Hover Color", "video-player-block")}
        color={playerStyles.menuHoverColor}
        onChange={(val) => updatePlayerStyles("menuHoverColor", val)}
        defaultColor={playerStyles.menuHoverColor}
        value={playerStyles.menuHoverColor}
      />

      <RangeControl
        label={__("Menu Border Radius", "video-player-block")}
        value={playerStyles.menuBorderRadius}
        onChange={(val) => updatePlayerStyles("menuBorderRadius", val)}
        min={0}
        max={50}
      />

      {/* <ColorControl
        label={__("Tooltip Background", "video-player")}
        color={playerStyles.tooltipBackgroundColor}
        onChange={(val) => updatePlayerStyles("tooltipBackgroundColor", val)}
        defaultColor={playerStyles.tooltipBackgroundColor}
        value={playerStyles.tooltipBackgroundColor}
      /> */}

      <ColorControl
        label={__("Icon Color", "video-player-block")}
        color={playerStyles.iconColor}
        onChange={(val) => updatePlayerStyles("iconColor", val)}
        defaultColor={playerStyles.iconColor}
        value={playerStyles.iconColor}
      />

      <RangeControl
        className="mt10"
        label={__("Player Container Border Radius", "video-player-block")}
        value={playerStyles.containerBorderRadius}
        onChange={(val) => updatePlayerStyles("containerBorderRadius", val)}
        min={0}
        max={100}
      />

      <RangeControl
        className="mt10"
        label={__("Menu Button Hover Border Radius", "video-player-block")}
        value={playerStyles.borderRadius}
        onChange={(val) => updatePlayerStyles("borderRadius", val)}
        min={0}
        max={40}
      />
    </PanelBody>
  );
};

export default Style;
