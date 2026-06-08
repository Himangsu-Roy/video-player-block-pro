const Style = ({ attributes, id }) => {
  const {
    captionStyles = {},
    playerStyles = {},
  } = attributes;

  const mainSl = `#${id}`;

  const css = `
    ${mainSl} .media-default-skin--video {
      --media-surface-background-color: ${playerStyles.menuBackgroundColor};
      --media-surface-inner-border-color: ${playerStyles.surfaceInnerBorderColor};
      --media-surface-outer-border-color: ${playerStyles.surfaceOuterBorderColor};
      --media-surface-shadow-color: ${playerStyles.surfaceShadowColor};
      --media-surface-backdrop-filter: ${playerStyles.surfaceBackdropFilter};
      --media-border-radius: ${playerStyles.borderRadius}px;
      border-radius: ${playerStyles.borderRadius}px;
      background-color: ${playerStyles.playerBackgroundColor};
      color: ${playerStyles.iconColor};
      ${
        playerStyles.shadow &&
        playerStyles.shadow.length > 0 &&
        playerStyles.shadow[0].color !== undefined 
          ? `box-shadow: ${playerStyles.shadow[0].hOffset || "0px"} ${
              playerStyles.shadow[0].vOffset || "0px"
            } ${playerStyles.shadow[0].blur || "0px"} ${
              playerStyles.shadow[0].spreed || "0px"
            } ${playerStyles.shadow[0].color} ${
              playerStyles.shadow[0].isInset ? "inset" : ""
            };`
          : ""
      }
    }

    ${mainSl} .media-button {
      color: ${playerStyles.iconColor};
    }

    ${mainSl} .media-button--icon:hover,
    ${mainSl} .media-button--icon:focus-visible,
    ${mainSl} .media-button--icon[aria-expanded="true"] {
      background-color: ${playerStyles.buttonHoverColor};
    }

    ${mainSl} .media-slider__fill,
    ${mainSl} .media-slider__thumb {
      color: ${playerStyles.primaryColor};
    }

    ${mainSl} .media-slider:hover .media-slider__thumb,
    ${mainSl} .media-slider__thumb:focus-visible,
    ${mainSl} .media-slider__thumb--persistent {
      color: ${playerStyles.hoverColor};
    }

    ${mainSl} .media-slider__track {
      background-color: ${playerStyles.secondaryColor};
    }

    ${mainSl} .media-captions-menu__item--active {
      color: ${playerStyles.activeColor};
    }

    ${mainSl} .media-captions-menu__item:hover {
      background-color: ${playerStyles.menuHoverColor};
    }

    ${mainSl} .media-tooltip {
      background-color: ${playerStyles.tooltipBackgroundColor};
      border-radius: ${playerStyles.menuBorderRadius}px;
      color: ${playerStyles.textColor};
    }

    ${mainSl} .media-popover {
      background-color: ${playerStyles.menuBackgroundColor};
      border-radius: ${playerStyles.menuBorderRadius}px;
      color: ${playerStyles.textColor};
    }

    ${mainSl} media-captions-display {
      --media-captions-font-size: ${captionStyles.fontSize || 100}%;
      --media-captions-font-family: ${captionStyles.fontFamily || "inherit"};
      --media-captions-color: ${captionStyles.textColor || "#fff"};
      --media-captions-background: ${captionStyles.textBgColor || "rgba(0,0,0,0.8)"};
      --media-captions-display-background: ${captionStyles.displayBgColor || "transparent"};
    }
  `;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
};

export default Style;
