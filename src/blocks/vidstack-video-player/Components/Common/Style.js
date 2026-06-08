const FONT_FAMILY_MAP = {
	"Proportional Sans-Serif": "Arial, Helvetica, sans-serif",
	"Monospaced Sans-Serif": "'Courier New', Courier, monospace",
	"Proportional Serif": "Georgia, 'Times New Roman', serif",
	"Monospaced Serif": "'Courier New', Courier, serif",
	Casual: "'Comic Sans MS', cursive",
	Cursive: "cursive, fantasy",
	"Small Capitals": "Georgia, serif",
};

function hexToRgba(hex, opacity) {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	if (!result) return `rgba(0,0,0,${opacity / 100})`;
	return `rgba(${parseInt(result[1], 16)}, ${parseInt(
		result[2],
		16,
	)}, ${parseInt(result[3], 16)}, ${opacity / 100})`;
}

const typoStyle = (typo) => {
	if (!typo) return "";
	return `
    ${typo.fontFamily && typo.fontFamily !== "Default" ? `font-family: '${typo.fontFamily}', ${typo.fontCategory || "sans-serif"} !important;` : ""}
    ${typo.fontSize?.desktop ? `font-size: ${typo.fontSize.desktop} !important;` : ""}
    ${typo.fontWeight ? `font-weight: ${typo.fontWeight} !important;` : ""}
    ${typo.fontStyle ? `font-style: ${typo.fontStyle} !important;` : ""}
    ${typo.textTransform ? `text-transform: ${typo.textTransform} !important;` : ""}
    ${typo.textDecoration ? `text-decoration: ${typo.textDecoration} !important;` : ""}
    ${typo.lineHeight ? `line-height: ${typo.lineHeight} !important;` : ""}
    ${typo.letterSpace ? `letter-spacing: ${typo.letterSpace} !important;` : ""}
  `;
};

const Style = ({ attributes, id }) => {
	const {
		captionStyles = {},
		playerStyles = {},
		playerOptions = {},
		dimensions = {},
	} = attributes;

	const dims = {
		width: "100%",
		height: "",
		aspectRatio: "16/9",
		...dimensions,
	};

	const dimsWidth = dims.width;
	const dimsHeight = dims.height;

	const cs = {
		fontFamily: "Proportional Sans-Serif",
		fontSize: 100,
		textColor: "#ffffff",
		textOpacity: 100,
		textBgColor: "#000000",
		textBgOpacity: 80,
		displayBgColor: "#000000",
		displayBgOpacity: 0,
		...captionStyles,
	};

	const ps = {
		primaryColor: playerStyles.primaryColor,
		secondaryColor: playerStyles.secondaryColor,
		backgroundColor: playerStyles.backgroundColor,
		textColor: playerStyles.textColor,
		titleColor: playerStyles.titleColor,
		titleTypography: playerStyles.titleTypography || {
			fontSize: {
				desktop: 18,
				tablet: 18,
				mobile: 18,
			},
			fontWeight: "600",
			lineHeight: 1.75,
		},
		playerBackgroundColor: playerStyles.playerBackgroundColor,
		controlBackgroundColor: playerStyles.controlBackgroundColor,
		menuBackgroundColor:
			playerStyles.menuBackgroundColor,
		tooltipBackgroundColor:
			playerStyles.tooltipBackgroundColor,
		iconColor: playerStyles.iconColor,
		activeColor: playerStyles.activeColor,
		borderRadius:
			playerStyles.borderRadius,
	};

	const po = {
		posterFit: "cover",
		...playerOptions,
	};

	const mainSl = `#${id}`;
	const fontFamily = FONT_FAMILY_MAP[cs.fontFamily] || "Arial, sans-serif";
	const fontSizeMultiplier = cs.fontSize / 100;
	const textColor = hexToRgba(cs.textColor, cs.textOpacity);
	const textBgColor = hexToRgba(cs.textBgColor, cs.textBgOpacity);
	const displayBgColor = hexToRgba(cs.displayBgColor, cs.displayBgOpacity);

	// ${mainSl} .player,
	// 	${mainSl} [data-vds-player] {
	// 		--media-brand: ${ps.primaryColor} !important;
	// 		--media-active-color: ${ps.activeColor};
	// 		--media-primary: ${ps.primaryColor};
	// 		--media-icon-color: ${ps.iconColor};
	// 		--media-controls-bg: ${ps.controlBackgroundColor}; !important;
	// 		--media-border-radius: ${ps.borderRadius}px !important;
	// 		background-color: ${ps.playerBackgroundColor} !important;
	// 		color: ${ps.textColor} !important;

	// 		--media-slider-track-fill-bg: ${ps.primaryColor} !important;
	// 	}

	const css = `
   ${mainSl} .vds-title, 
    ${mainSl} [data-part="title"] {
        color: ${ps.titleColor} !important;
        ${typoStyle(ps.titleTypography)}
    }

	${mainSl} .player,
  	${mainSl} [data-vds-player] {
  		--media-brand: ${playerStyles.primaryColor} !important;
  		--media-focus-ring-color: ${playerStyles.secondaryColor
		} !important;
  		--media-border-radius: ${playerStyles.containerBorderRadius
		}px !important;
		border-radius: ${playerStyles.containerBorderRadius}px !important;
  		--media-icon-color: ${playerStyles.iconColor} !important;
		--media-active-color: ${playerStyles.activeColor} !important;
		--media-secondary-color: ${playerStyles.secondaryColor} !important;
  		--media-controls-bg: ${playerStyles.controlBackgroundColor
		} !important;
		--media-button-hover-color: ${playerStyles.buttonHoverColor
		} !important;
  		background-color: ${playerStyles.playerBackgroundColor
		} !important;
  		color: ${playerStyles.textColor} !important;

  		--media-slider-track-fill-bg: ${playerStyles.primaryColor
		} !important;
  		--media-slider-thumb-bg: ${playerStyles.primaryColor} !important;

		${dimsWidth ? `width: ${dimsWidth} !important;` : ""}
		${dimsHeight ? `height: ${dimsHeight} !important;` : ""}
		${dimsHeight ? "aspect-ratio: unset !important;" : dims.aspectRatio ? `aspect-ratio: ${dims.aspectRatio} !important;` : ""}
  	}

	${mainSl} .vds-button:hover,
	${mainSl} .vds-menu-button:hover {
		background-color: var(--media-button-hover-color) !important;
	}
	
	${mainSl} .vds-button,
	${mainSl} .vds-menu-button {
		color: ${playerStyles.iconColor} !important;
		background: ${playerStyles.controlBackgroundColor} !important;
		--media-icon-color: ${playerStyles.iconColor} !important;
		--media-controls-bg: ${playerStyles.controlBackgroundColor} !important;
		border-radius: ${playerStyles.borderRadius}px !important;
	}

	${mainSl} .vds-button[data-active],
	${mainSl} .vds-button[aria-expanded="true"],
	${mainSl} .vds-menu-button[aria-expanded="true"],
	${mainSl} .vds-button[data-active] svg,
	${mainSl} .vds-button[aria-expanded="true"] svg,
	${mainSl} .vds-menu-button[aria-expanded="true"] svg {
		color: ${ps.activeColor} !important;
		fill: ${ps.activeColor} !important;
		--media-icon-color: ${ps.activeColor} !important;
	}


	
    
   
  
	${mainSl} .vds-controls[data-visible],
	${mainSl} [data-part="controls"][data-visible] {
		background-image: linear-gradient(
			to top,
			${playerStyles.controlBackgroundColor} 0%,
			rgba(0, 0, 0, 0.3) 50%,
			transparent 100%
		) !important;
	}

	${mainSl} .vds-controls-group {
		background-color: ${playerStyles.controlBackgroundColor} !important;
	}

	${mainSl} .vds-menu,
	${mainSl} .vds-menu-content,
	${mainSl} [data-part="menu-content"] {
		background-color: ${playerStyles.menuBackgroundColor
		} !important;
		backdrop-filter: blur(12px) !important;
		-webkit-backdrop-filter: blur(12px) !important;
		border: 1px solid rgba(255, 255, 255, 0.1) !important;
		border-radius: ${playerStyles.menuBorderRadius}px !important;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5) !important;
		color: ${playerStyles.textColor} !important;
		--media-menu-hover-color: ${playerStyles.menuHoverColor
		};
	}

	${mainSl} .vds-menu [role="menuitem"],
	${mainSl} .vds-menu [role="menuitemradio"] {
		color: ${playerStyles.textColor} !important;
		transition: background-color 0.2s ease;
	}

	${mainSl} .vds-menu [role="menuitem"]:hover,
	${mainSl} .vds-menu [role="menuitemradio"]:hover,
	${mainSl} .vds-submenu-button:hover {
		background-color: var(--media-menu-hover-color) !important;
	}

	${mainSl} [role="menuitemradio"][data-checked],
	${mainSl} [data-vds-radio][data-checked],
	${mainSl} [data-checked] [class*="radioCheck"] {
		color: ${ps.activeColor} !important;
		border-color: ${ps.activeColor} !important;
	}

	${mainSl} [data-checked] [class*="radioCheck"] {
		background-color: ${ps.activeColor} !important;
		box-shadow: 0 0 8px ${ps.activeColor} !important;
	}

	${mainSl} [class*="progressBar"]::after {
		background-color: ${ps.activeColor} !important;
	}

	
	${mainSl} .vds-tooltip-content,
	${mainSl} [data-part="tooltip-content"] {
		background-color: ${playerStyles.tooltipBackgroundColor
		} !important;
		backdrop-filter: blur(8px) !important;
		-webkit-backdrop-filter: blur(8px) !important;
		border: 1px solid rgba(255, 255, 255, 0.15) !important;
		color: #fff !important;
		border-radius: 6px !important;
		padding: 4px 10px !important;
		font-weight: 500 !important;
	}
	
	${mainSl} [data-part='cue'] {
		font-family: ${fontFamily} !important;
		font-size: calc(var(--overlay-height, 480px) / 100 * 4.5 * ${fontSizeMultiplier}) !important;
		color: ${textColor} !important;
		background-color: ${textBgColor} !important;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8) !important;
		padding: 0.1em 0.3em !important;
		border-radius: 2px !important;
	}

	${mainSl} [data-part='cue-display'] {
		background-color: ${displayBgColor} !important;
	}


	${mainSl} [data-part="poster"] img,
	${mainSl} [data-part="poster"],
	${mainSl} .vds-poster img,
	${mainSl} .vds-poster,
	${mainSl} [data-part="provider"] video,
	${mainSl} video,
	${mainSl} [data-vds-provider] video {
		object-fit: ${po.posterFit} !important;
	}

	
	${mainSl} .vds-gesture[action*="toggle:paused"] {
		cursor: pointer;
	}
	
	`;

	return <style dangerouslySetInnerHTML={{ __html: css }} />;
};

export default Style;
