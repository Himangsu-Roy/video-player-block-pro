/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/videojs-player/Components/Common/Style.js"
/*!**************************************************************!*\
  !*** ./src/blocks/videojs-player/Components/Common/Style.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Style = ({
  attributes,
  id
}) => {
  const {
    playerStyles = {}
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
      ${playerStyles.shadow && playerStyles.shadow.length > 0 && playerStyles.shadow[0].color !== undefined ? `box-shadow: ${playerStyles.shadow[0].hOffset || "0px"} ${playerStyles.shadow[0].vOffset || "0px"} ${playerStyles.shadow[0].blur || "0px"} ${playerStyles.shadow[0].spreed || "0px"} ${playerStyles.shadow[0].color} ${playerStyles.shadow[0].isInset ? "inset" : ""};` : ""}
    }

    ${mainSl} .media-controls {
      background-color: ${playerStyles.controlBackgroundColor};
      ${parseInt(playerStyles.controlBackdropBlur) > 0 ? `backdrop-filter: blur(${typeof playerStyles.controlBackdropBlur === "number" ? `${playerStyles.controlBackdropBlur}px` : playerStyles.controlBackdropBlur}); -webkit-backdrop-filter: blur(${typeof playerStyles.controlBackdropBlur === "number" ? `${playerStyles.controlBackdropBlur}px` : playerStyles.controlBackdropBlur});` : ""}
      border-radius: ${typeof playerStyles.controlBorderRadius === "number" ? `${playerStyles.controlBorderRadius}px` : playerStyles.controlBorderRadius};
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
  `;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style", {
    dangerouslySetInnerHTML: {
      __html: css
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ },

/***/ "./src/blocks/videojs-player/Components/Common/VideoJS/Button.js"
/*!***********************************************************************!*\
  !*** ./src/blocks/videojs-player/Components/Common/VideoJS/Button.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   SEEK_TIME: () => (/* binding */ SEEK_TIME)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const SEEK_TIME = 10;
const Button = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function Button({
  className,
  ...props
}, ref) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    ref: ref,
    type: "button",
    className: ["media-button", className].filter(Boolean).join(" "),
    ...props
  });
});

/***/ },

/***/ "./src/blocks/videojs-player/Components/Common/VideoJS/CaptionsMenu.js"
/*!*****************************************************************************!*\
  !*** ./src/blocks/videojs-player/Components/Common/VideoJS/CaptionsMenu.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/store/selectors.js");
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/ui/popover/index.parts.js");
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/ui/tooltip/index.parts.js");
/* harmony import */ var _VideoJS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VideoJS */ "./src/blocks/videojs-player/Components/Common/VideoJS/VideoJS.js");
/* harmony import */ var _Labels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Labels */ "./src/blocks/videojs-player/Components/Common/VideoJS/Labels.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons */ "./src/blocks/videojs-player/Components/Common/VideoJS/Icons.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);






const CaptionsMenu = () => {
  const textTrackState = (0,_VideoJS__WEBPACK_IMPORTED_MODULE_3__.usePlayer)(_videojs_core_dom__WEBPACK_IMPORTED_MODULE_0__.selectTextTrack);
  const media = (0,_VideoJS__WEBPACK_IMPORTED_MODULE_3__.useMedia)();

  // Filter to only subtitle/caption tracks
  const captionTracks = (textTrackState?.textTrackList || []).map((track, index) => ({
    ...track,
    index
  })).filter(t => t.kind === "subtitles" || t.kind === "captions");
  const handleTrackSelect = captionIndex => {
    if (!media) return;

    // Disable all subtitle/caption tracks first
    let ci = 0;
    for (let i = 0; i < media.textTracks.length; i++) {
      const track = media.textTracks[i];
      if (track.kind === "subtitles" || track.kind === "captions") {
        track.mode = ci === captionIndex ? "showing" : "disabled";
        ci++;
      }
    }
  };

  // Find the active caption index among caption tracks
  const activeCaptionIndex = captionTracks.findIndex(t => t.mode === "showing");
  if (!captionTracks.length) return null;

  // If there's only one caption track, render a simple toggle
  if (captionTracks.length === 1) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_videojs_react__WEBPACK_IMPORTED_MODULE_2__.index_parts_exports.Root, {
      side: "top",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_2__.index_parts_exports.Trigger, {
        render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
          type: "button",
          className: "media-button media-button--icon media-button--captions",
          "data-active": activeCaptionIndex === 0 ? "" : undefined,
          onClick: () => handleTrackSelect(activeCaptionIndex === 0 ? -1 : 0),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_5__.CaptionsOffIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_5__.CaptionsOnIcon, {})]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_2__.index_parts_exports.Popup, {
        className: "media-surface media-tooltip",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Labels__WEBPACK_IMPORTED_MODULE_4__.CaptionsLabel, {})
      })]
    });
  }

  // Multiple caption tracks — render a popover menu
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_videojs_react__WEBPACK_IMPORTED_MODULE_1__.index_parts_exports.Root, {
    side: "top",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_1__.index_parts_exports.Trigger, {
      render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
        type: "button",
        className: "media-button media-button--icon media-button--captions",
        "data-captions-showing": textTrackState?.subtitlesShowing ? "" : undefined,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_5__.CaptionsOffIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_5__.CaptionsOnIcon, {})]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_1__.index_parts_exports.Popup, {
      className: "media-surface media-popover media-popover--captions",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "media-captions-menu",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
          type: "button",
          className: `media-captions-menu__item ${activeCaptionIndex === -1 ? "media-captions-menu__item--active" : ""}`,
          onClick: () => handleTrackSelect(-1),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "media-captions-menu__check",
            children: activeCaptionIndex === -1 ? "✓" : ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "media-captions-menu__label",
            children: "Off"
          })]
        }), captionTracks.map((track, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
          type: "button",
          className: `media-captions-menu__item ${activeCaptionIndex === i ? "media-captions-menu__item--active" : ""}`,
          onClick: () => handleTrackSelect(i),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "media-captions-menu__check",
            children: activeCaptionIndex === i ? "✓" : ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "media-captions-menu__label",
            children: track.label || track.language || `Track ${i + 1}`
          })]
        }, i))]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CaptionsMenu);

/***/ },

/***/ "./src/blocks/videojs-player/Components/Common/VideoJS/ErrorDialog.js"
/*!****************************************************************************!*\
  !*** ./src/blocks/videojs-player/Components/Common/VideoJS/ErrorDialog.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorDialog: () => (/* binding */ ErrorDialog),
/* harmony export */   errorClasses: () => (/* binding */ errorClasses)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/store/selectors.js");
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/player/context.js");
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/ui/alert-dialog/index.parts.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);




const errorClasses = {
  root: "media-error",
  dialog: "media-error__dialog media-surface",
  content: "media-error__content",
  title: "media-error__title",
  description: "media-error__description",
  actions: "media-error__actions",
  close: "media-button"
};
function ErrorDialog({
  classes
}) {
  const errorState = (0,_videojs_react__WEBPACK_IMPORTED_MODULE_2__.usePlayer)(_videojs_core_dom__WEBPACK_IMPORTED_MODULE_1__.selectError);
  const lastError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(errorState?.error);
  if (errorState?.error) lastError.current = errorState.error;
  if (!errorState) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_3__.index_parts_exports.Root, {
    open: !!errorState.error,
    onOpenChange: open => {
      if (!open) errorState.dismissError();
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_3__.index_parts_exports.Popup, {
      className: classes?.root,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: classes?.dialog,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: classes?.content,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_3__.index_parts_exports.Title, {
            className: classes?.title,
            children: "Something went wrong."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_3__.index_parts_exports.Description, {
            className: classes?.description,
            children: lastError.current?.message ?? "An error occurred while trying to play the video. Please try again."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: classes?.actions,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_3__.index_parts_exports.Close, {
            className: classes?.close,
            children: "OK"
          })
        })]
      })
    })
  });
}

/***/ },

/***/ "./src/blocks/videojs-player/Components/Common/VideoJS/Icons.js"
/*!**********************************************************************!*\
  !*** ./src/blocks/videojs-player/Components/Common/VideoJS/Icons.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BufferingIcon: () => (/* binding */ BufferingIcon),
/* harmony export */   CaptionsOffIcon: () => (/* binding */ CaptionsOffIcon),
/* harmony export */   CaptionsOnIcon: () => (/* binding */ CaptionsOnIcon),
/* harmony export */   FullscreenEnterIcon: () => (/* binding */ FullscreenEnterIcon),
/* harmony export */   FullscreenExitIcon: () => (/* binding */ FullscreenExitIcon),
/* harmony export */   PauseIcon: () => (/* binding */ PauseIcon),
/* harmony export */   PiPIcon: () => (/* binding */ PiPIcon),
/* harmony export */   PlayIcon: () => (/* binding */ PlayIcon),
/* harmony export */   RestartIcon: () => (/* binding */ RestartIcon),
/* harmony export */   SeekIcon: () => (/* binding */ SeekIcon),
/* harmony export */   VolumeHighIcon: () => (/* binding */ VolumeHighIcon),
/* harmony export */   VolumeLowIcon: () => (/* binding */ VolumeLowIcon),
/* harmony export */   VolumeOffIcon: () => (/* binding */ VolumeOffIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BufferingIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  className: "media-icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "0 0 18 18",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "2",
    height: "5",
    x: "8",
    y: ".5",
    opacity: ".5",
    rx: "1",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
      attributeName: "opacity",
      begin: "0s",
      calcMode: "linear",
      dur: "1s",
      repeatCount: "indefinite",
      values: "1;0"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "2",
    height: "5",
    x: "12.243",
    y: "2.257",
    opacity: ".45",
    rx: "1",
    transform: "rotate(45 13.243 4.757)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
      attributeName: "opacity",
      begin: "0.125s",
      calcMode: "linear",
      dur: "1s",
      repeatCount: "indefinite",
      values: "1;0"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "5",
    height: "2",
    x: "12.5",
    y: "8",
    opacity: ".4",
    rx: "1",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
      attributeName: "opacity",
      begin: "0.25s",
      calcMode: "linear",
      dur: "1s",
      repeatCount: "indefinite",
      values: "1;0"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "5",
    height: "2",
    x: "10.743",
    y: "12.243",
    opacity: ".35",
    rx: "1",
    transform: "rotate(45 13.243 13.243)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
      attributeName: "opacity",
      begin: "0.375s",
      calcMode: "linear",
      dur: "1s",
      repeatCount: "indefinite",
      values: "1;0"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "2",
    height: "5",
    x: "8",
    y: "12.5",
    opacity: ".3",
    rx: "1",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
      attributeName: "opacity",
      begin: "0.5s",
      calcMode: "linear",
      dur: "1s",
      repeatCount: "indefinite",
      values: "1;0"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "2",
    height: "5",
    x: "3.757",
    y: "10.743",
    opacity: ".25",
    rx: "1",
    transform: "rotate(45 4.757 13.243)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
      attributeName: "opacity",
      begin: "0.625s",
      calcMode: "linear",
      dur: "1s",
      repeatCount: "indefinite",
      values: "1;0"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "5",
    height: "2",
    x: ".5",
    y: "8",
    opacity: ".15",
    rx: "1",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
      attributeName: "opacity",
      begin: "0.75s",
      calcMode: "linear",
      dur: "1s",
      repeatCount: "indefinite",
      values: "1;0"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "5",
    height: "2",
    x: "2.257",
    y: "3.757",
    opacity: ".1",
    rx: "1",
    transform: "rotate(45 4.757 4.757)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
      attributeName: "opacity",
      begin: "0.875s",
      calcMode: "linear",
      dur: "1s",
      repeatCount: "indefinite",
      values: "1;0"
    })
  })]
});
const RestartIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  className: "media-icon media-icon--restart",
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  fill: "none",
  "aria-hidden": "true",
  viewBox: "0 0 18 18",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M9 17a8 8 0 0 1-8-8h2a6 6 0 1 0 1.287-3.713l1.286 1.286A.25.25 0 0 1 5.396 7H1.25A.25.25 0 0 1 1 6.75V2.604a.25.25 0 0 1 .427-.177l1.438 1.438A8 8 0 1 1 9 17"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "m11.61 9.639-3.331 2.07a.826.826 0 0 1-1.15-.266.86.86 0 0 1-.129-.452V6.849C7 6.38 7.374 6 7.834 6c.158 0 .312.045.445.13l3.331 2.071a.858.858 0 0 1 0 1.438"
  })]
});
const PlayIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  className: "media-icon media-icon--play",
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  fill: "none",
  "aria-hidden": "true",
  viewBox: "0 0 18 18",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "m14.051 10.723-7.985 4.964a1.98 1.98 0 0 1-2.758-.638A2.06 2.06 0 0 1 3 13.964V4.036C3 2.91 3.895 2 5 2c.377 0 .747.109 1.066.313l7.985 4.964a2.057 2.057 0 0 1 .627 2.808c-.16.257-.373.475-.627.637"
  })
});
const PauseIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  className: "media-icon media-icon--pause",
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  fill: "none",
  "aria-hidden": "true",
  viewBox: "0 0 18 18",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "5",
    height: "14",
    x: "2",
    y: "2",
    fill: "currentColor",
    rx: "1.75"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "5",
    height: "14",
    x: "11",
    y: "2",
    fill: "currentColor",
    rx: "1.75"
  })]
});
const SeekIcon = ({
  flipped
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  className: `media-icon media-icon--seek${flipped ? " media-icon--flipped" : ""}`,
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  fill: "none",
  "aria-hidden": "true",
  viewBox: "0 0 18 18",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M1 9c0 2.21.895 4.21 2.343 5.657l1.414-1.414a6 6 0 1 1 8.956-7.956l-1.286 1.286a.25.25 0 0 0 .177.427h4.146a.25.25 0 0 0 .25-.25V2.604a.25.25 0 0 0-.427-.177l-1.438 1.438A8 8 0 0 0 1 9"
  })
});
const VolumeOffIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  className: "media-icon media-icon--volume-off",
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  fill: "none",
  "aria-hidden": "true",
  viewBox: "0 0 18 18",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M.714 6.008h3.072l4.071-3.857c.5-.376 1.143 0 1.143.601V15.28c0 .602-.643.903-1.143.602l-4.071-3.858H.714c-.428 0-.714-.3-.714-.752V6.76c0-.451.286-.752.714-.752M14.5 7.586l-1.768-1.768a1 1 0 1 0-1.414 1.414L13.085 9l-1.767 1.768a1 1 0 0 0 1.414 1.414l1.768-1.768 1.768 1.768a1 1 0 0 0 1.414-1.414L15.914 9l1.768-1.768a1 1 0 0 0-1.414-1.414z"
  })
});
const VolumeLowIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  className: "media-icon media-icon--volume-low",
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  fill: "none",
  "aria-hidden": "true",
  viewBox: "0 0 18 18",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M.714 6.008h3.072l4.071-3.857c.5-.376 1.143 0 1.143.601V15.28c0 .602-.643.903-1.143.602l-4.071-3.858H.714c-.428 0-.714-.3-.714-.752V6.76c0-.451.286-.752.714-.752m10.568.59a.91.91 0 0 1 0-1.316.91.91 0 0 1 1.316 0c1.203 1.203 1.47 2.216 1.522 3.208q.012.255.011.51c0 1.16-.358 2.733-1.533 3.803a.7.7 0 0 1-.298.156c-.382.106-.873-.011-1.018-.156a.91.91 0 0 1 0-1.316c.57-.57.995-1.551.995-2.487 0-.944-.26-1.667-.995-2.402"
  })
});
const VolumeHighIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  className: "media-icon media-icon--volume-high",
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  fill: "none",
  "aria-hidden": "true",
  viewBox: "0 0 18 18",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M15.6 3.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4C15.4 5.9 16 7.4 16 9s-.6 3.1-1.8 4.3c-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3C17.1 13.2 18 11.2 18 9s-.9-4.2-2.4-5.7"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M.714 6.008h3.072l4.071-3.857c.5-.376 1.143 0 1.143.601V15.28c0 .602-.643.903-1.143.602l-4.071-3.858H.714c-.428 0-.714-.3-.714-.752V6.76c0-.451.286-.752.714-.752m10.568.59a.91.91 0 0 1 0-1.316.91.91 0 0 1 1.316 0c1.203 1.203 1.47 2.216 1.522 3.208q.012.255.011.51c0 1.16-.358 2.733-1.533 3.803a.7.7 0 0 1-.298.156c-.382.106-.873-.011-1.018-.156a.91.91 0 0 1 0-1.316c.57-.57.995-1.551.995-2.487 0-.944-.26-1.667-.995-2.402"
  })]
});
const CaptionsOffIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  className: "media-icon media-icon--captions-off",
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  fill: "none",
  "aria-hidden": "true",
  viewBox: "0 0 18 18",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "16",
    height: "12",
    x: "1",
    y: "3",
    stroke: "currentColor",
    strokeWidth: "2",
    rx: "3"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "3",
    height: "2",
    x: "3",
    y: "8",
    fill: "currentColor",
    rx: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "2",
    height: "2",
    x: "13",
    y: "8",
    fill: "currentColor",
    rx: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "4",
    height: "2",
    x: "11",
    y: "11",
    fill: "currentColor",
    rx: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "5",
    height: "2",
    x: "7",
    y: "8",
    fill: "currentColor",
    rx: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "7",
    height: "2",
    x: "3",
    y: "11",
    fill: "currentColor",
    rx: "1"
  })]
});
const CaptionsOnIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  className: "media-icon media-icon--captions-on",
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  fill: "none",
  "aria-hidden": "true",
  viewBox: "0 0 18 18",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M15 2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM4 11a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM4 8a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm4 0a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2zm6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
  })
});
const PiPIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  className: "media-icon",
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  fill: "none",
  "aria-hidden": "true",
  viewBox: "0 0 18 18",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M13 2a4 4 0 0 1 4 4v2.035A3.5 3.5 0 0 0 16.5 8H15V6.273C15 5.018 13.96 4 12.679 4H4.32C3.04 4 2 5.018 2 6.273v5.454C2 12.982 3.04 14 4.321 14H6v1.5q0 .255.035.5H4a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "10",
    height: "7",
    x: "8",
    y: "10",
    fill: "currentColor",
    rx: "2"
  })]
});
const FullscreenEnterIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  className: "media-icon media-icon--fullscreen-enter",
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  fill: "none",
  "aria-hidden": "true",
  viewBox: "0 0 18 18",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M9.57 3.617A1 1 0 0 0 8.646 3H4c-.552 0-1 .449-1 1v4.646a.996.996 0 0 0 1.001 1 1 1 0 0 0 .706-.293l4.647-4.647a1 1 0 0 0 .216-1.089m4.812 4.812a1 1 0 0 0-1.089.217l-4.647 4.647a.998.998 0 0 0 .708 1.706H14c.552 0 1-.449 1-1V9.353a1 1 0 0 0-.618-.924"
  })
});
const FullscreenExitIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  className: "media-icon media-icon--fullscreen-exit",
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  fill: "none",
  "aria-hidden": "true",
  viewBox: "0 0 18 18",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M7.883 1.93a.99.99 0 0 0-1.09.217L2.146 6.793A.998.998 0 0 0 2.853 8.5H7.5c.551 0 1-.449 1-1V2.854a1 1 0 0 0-.617-.924m7.263 7.57H10.5c-.551 0-1 .449-1 1v4.646a.996.996 0 0 0 1.001 1.001 1 1 0 0 0 .706-.293l4.646-4.646a.998.998 0 0 0-.707-1.707z"
  })
});

/***/ },

/***/ "./src/blocks/videojs-player/Components/Common/VideoJS/Labels.js"
/*!***********************************************************************!*\
  !*** ./src/blocks/videojs-player/Components/Common/VideoJS/Labels.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaptionsLabel: () => (/* binding */ CaptionsLabel),
/* harmony export */   FullscreenLabel: () => (/* binding */ FullscreenLabel),
/* harmony export */   PiPLabel: () => (/* binding */ PiPLabel),
/* harmony export */   PlayLabel: () => (/* binding */ PlayLabel)
/* harmony export */ });
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/player/context.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function PlayLabel() {
  const paused = (0,_videojs_react__WEBPACK_IMPORTED_MODULE_0__.usePlayer)(s => Boolean(s.paused));
  const ended = (0,_videojs_react__WEBPACK_IMPORTED_MODULE_0__.usePlayer)(s => Boolean(s.ended));
  if (ended) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: "Replay"
  });
  return paused ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: "Play"
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: "Pause"
  });
}
function CaptionsLabel() {
  const active = (0,_videojs_react__WEBPACK_IMPORTED_MODULE_0__.usePlayer)(s => Boolean(s.subtitlesShowing));
  return active ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: "Disable captions"
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: "Enable captions"
  });
}
function PiPLabel() {
  const pip = (0,_videojs_react__WEBPACK_IMPORTED_MODULE_0__.usePlayer)(s => Boolean(s.pip));
  return pip ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: "Exit picture-in-picture"
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: "Enter picture-in-picture"
  });
}
function FullscreenLabel() {
  const fullscreen = (0,_videojs_react__WEBPACK_IMPORTED_MODULE_0__.usePlayer)(s => Boolean(s.fullscreen));
  return fullscreen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: "Exit fullscreen"
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: "Enter fullscreen"
  });
}

/***/ },

/***/ "./src/blocks/videojs-player/Components/Common/VideoJS/VideoJS.js"
/*!************************************************************************!*\
  !*** ./src/blocks/videojs-player/Components/Common/VideoJS/VideoJS.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useMedia: () => (/* binding */ useMedia),
/* harmony export */   usePlayer: () => (/* binding */ usePlayer)
/* harmony export */ });
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/player/create-player.js");
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/core/dist/dev/dom/store/features/presets.js");
/* harmony import */ var _videojs_react_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/react/video */ "./node_modules/@videojs/react/dist/dev/media/video.js");
/* harmony import */ var _VideoJSSkin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VideoJSSkin */ "./src/blocks/videojs-player/Components/Common/VideoJS/VideoJSSkin.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);




const Player = (0,_videojs_react__WEBPACK_IMPORTED_MODULE_0__.createPlayer)({
  features: _videojs_react__WEBPACK_IMPORTED_MODULE_1__.videoFeatures
});
const {
  usePlayer,
  useMedia
} = Player;
const VideoJS = ({
  attributes
}) => {
  const {
    items = {},
    playerOptions = {},
    controls = {},
    dimensions = {}
  } = attributes;
  const effectiveDimensions = {
    width: "100%",
    height: "",
    aspectRatio: "16/9",
    ...dimensions
  };

  // Create a key from text tracks and videoUrl so the player re-mounts when tracks or video change
  const trackKey = JSON.stringify({
    url: items.videoUrl,
    tracks: items.textTracks || [],
    thumbnails: items.thumbnailsUrl
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Player.Provider, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_VideoJSSkin__WEBPACK_IMPORTED_MODULE_3__["default"], {
      posterUrl: items.posterUrl,
      controls: controls,
      playerOptions: playerOptions,
      dimensions: effectiveDimensions,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_videojs_react_video__WEBPACK_IMPORTED_MODULE_2__.Video, {
        playsInline: playerOptions.playsInline !== false,
        autoPlay: playerOptions.autoplay || false,
        loop: playerOptions.loop || false,
        muted: playerOptions.autoplay || playerOptions.muted || false,
        preload: playerOptions.preload || "metadata",
        crossOrigin: playerOptions.crossOrigin ? "anonymous" : undefined,
        children: [items?.videoUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("source", {
          src: items.videoUrl,
          type: items.videoUrl.includes(".m3u8") ? "application/x-mpegURL" : items.videoUrl.includes(".webm") ? "video/webm" : "video/mp4"
        }), (items.textTracks || []).map((track, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("track", {
          kind: track.kind,
          label: track.label,
          srcLang: track.language,
          src: track.src,
          default: track.default || false
        }, index)), items?.thumbnailsUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("track", {
          kind: "metadata",
          label: "thumbnails",
          src: items?.thumbnailsUrl,
          default: true
        })]
      })
    })
  }, trackKey);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoJS);

/***/ },

/***/ "./src/blocks/videojs-player/Components/Common/VideoJS/VideoJSSkin.js"
/*!****************************************************************************!*\
  !*** ./src/blocks/videojs-player/Components/Common/VideoJS/VideoJSSkin.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/player/context.js");
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/ui/buffering-indicator/buffering-indicator.js");
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/ui/controls/index.parts.js");
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/ui/fullscreen-button/fullscreen-button.js");
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/ui/mute-button/mute-button.js");
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/ui/pip-button/pip-button.js");
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/ui/play-button/play-button.js");
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/ui/playback-rate-button/playback-rate-button.js");
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/ui/popover/index.parts.js");
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/ui/poster/poster.js");
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/ui/seek-button/seek-button.js");
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/ui/slider/index.parts.js");
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/ui/time/index.parts.js");
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/ui/time-slider/index.parts.js");
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/ui/tooltip/index.parts.js");
/* harmony import */ var _videojs_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @videojs/react */ "./node_modules/@videojs/react/dist/dev/ui/volume-slider/index.parts.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Button */ "./src/blocks/videojs-player/Components/Common/VideoJS/Button.js");
/* harmony import */ var _ErrorDialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ErrorDialog */ "./src/blocks/videojs-player/Components/Common/VideoJS/ErrorDialog.js");
/* harmony import */ var _CaptionsMenu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./CaptionsMenu */ "./src/blocks/videojs-player/Components/Common/VideoJS/CaptionsMenu.js");
/* harmony import */ var _Labels__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Labels */ "./src/blocks/videojs-player/Components/Common/VideoJS/Labels.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Icons */ "./src/blocks/videojs-player/Components/Common/VideoJS/Icons.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__);







const VideoJSSkin = ({
  children,
  className,
  posterUrl,
  controls = {},
  dimensions = {},
  ...rest
}) => {
  const {
    showPlayControl = true,
    showSeekControls = true,
    showMuteControl = true,
    showVolumeControl = true,
    showTimeControl = true,
    showPlaybackRateControl = true,
    showCaptionControl = true,
    showPipControl = true,
    showFullscreenControl = true
  } = controls;
  const hasExplicitHeight = !!dimensions.height;
  const containerStyle = {
    width: dimensions.width || "100%",
    maxWidth: "100%",
    height: hasExplicitHeight ? dimensions.height : undefined,
    aspectRatio: hasExplicitHeight ? undefined : dimensions.aspectRatio || "16/9",
    margin: dimensions.width !== "100%" ? "0 auto" : undefined
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_videojs_react__WEBPACK_IMPORTED_MODULE_0__.Container, {
    className: ["media-default-skin media-default-skin--video", className].filter(Boolean).join(" "),
    style: containerStyle,
    ...rest,
    children: [children, posterUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_9__.Poster, {
      src: posterUrl,
      alt: ""
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_1__.BufferingIndicator, {
      render: props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        ...props,
        className: "media-buffering-indicator",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
          className: "media-surface",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_20__.BufferingIcon, {})
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ErrorDialog__WEBPACK_IMPORTED_MODULE_17__.ErrorDialog, {
      classes: _ErrorDialog__WEBPACK_IMPORTED_MODULE_17__.errorClasses
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_2__.index_parts_exports.Root, {
      className: "media-surface media-controls",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_videojs_react__WEBPACK_IMPORTED_MODULE_14__.index_parts_exports.Provider, {
        children: [showPlayControl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_videojs_react__WEBPACK_IMPORTED_MODULE_14__.index_parts_exports.Root, {
          side: "top",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_14__.index_parts_exports.Trigger, {
            render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_6__.PlayButton, {
              render: props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Button__WEBPACK_IMPORTED_MODULE_16__.Button, {
                ...props,
                className: "media-button--icon media-button--play",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_20__.RestartIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_20__.PlayIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_20__.PauseIcon, {})]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_14__.index_parts_exports.Popup, {
            className: "media-surface media-tooltip",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Labels__WEBPACK_IMPORTED_MODULE_19__.PlayLabel, {})
          })]
        }), showSeekControls && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_videojs_react__WEBPACK_IMPORTED_MODULE_14__.index_parts_exports.Root, {
          side: "top",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_14__.index_parts_exports.Trigger, {
            render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_10__.SeekButton, {
              seconds: -_Button__WEBPACK_IMPORTED_MODULE_16__.SEEK_TIME,
              render: props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_16__.Button, {
                ...props,
                className: "media-button--icon media-button--seek",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("span", {
                  className: "media-icon__container",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_20__.SeekIcon, {
                    flipped: true
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("span", {
                    className: "media-icon__label",
                    children: _Button__WEBPACK_IMPORTED_MODULE_16__.SEEK_TIME
                  })]
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_videojs_react__WEBPACK_IMPORTED_MODULE_14__.index_parts_exports.Popup, {
            className: "media-surface media-tooltip",
            children: ["Seek backward ", _Button__WEBPACK_IMPORTED_MODULE_16__.SEEK_TIME, " seconds"]
          })]
        }), showSeekControls && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_videojs_react__WEBPACK_IMPORTED_MODULE_14__.index_parts_exports.Root, {
          side: "top",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_14__.index_parts_exports.Trigger, {
            render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_10__.SeekButton, {
              seconds: _Button__WEBPACK_IMPORTED_MODULE_16__.SEEK_TIME,
              render: props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_16__.Button, {
                ...props,
                className: "media-button--icon media-button--seek",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("span", {
                  className: "media-icon__container",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_20__.SeekIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("span", {
                    className: "media-icon__label",
                    children: _Button__WEBPACK_IMPORTED_MODULE_16__.SEEK_TIME
                  })]
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_videojs_react__WEBPACK_IMPORTED_MODULE_14__.index_parts_exports.Popup, {
            className: "media-surface media-tooltip",
            children: ["Seek forward ", _Button__WEBPACK_IMPORTED_MODULE_16__.SEEK_TIME, " seconds"]
          })]
        }), showTimeControl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_videojs_react__WEBPACK_IMPORTED_MODULE_12__.index_parts_exports.Group, {
          className: "media-time",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_12__.index_parts_exports.Value, {
            type: "current",
            className: "media-time__value"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_videojs_react__WEBPACK_IMPORTED_MODULE_13__.index_parts_exports.Root, {
            className: "media-slider",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_videojs_react__WEBPACK_IMPORTED_MODULE_13__.index_parts_exports.Track, {
              className: "media-slider__track",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_13__.index_parts_exports.Fill, {
                className: "media-slider__fill"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_13__.index_parts_exports.Buffer, {
                className: "media-slider__buffer"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_13__.index_parts_exports.Thumb, {
              className: "media-slider__thumb"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_11__.index_parts_exports.Thumbnail, {
              className: "media-slider__thumbnail"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_12__.index_parts_exports.Value, {
            type: "duration",
            className: "media-time__value"
          })]
        }), showPlaybackRateControl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_videojs_react__WEBPACK_IMPORTED_MODULE_14__.index_parts_exports.Root, {
          side: "top",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_14__.index_parts_exports.Trigger, {
            render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_7__.PlaybackRateButton, {
              render: props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_16__.Button, {
                ...props,
                className: "media-button--icon media-button--playback-rate"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_14__.index_parts_exports.Popup, {
            className: "media-surface media-tooltip",
            children: "Toggle playback rate"
          })]
        }), showMuteControl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_videojs_react__WEBPACK_IMPORTED_MODULE_8__.index_parts_exports.Root, {
          openOnHover: true,
          delay: 200,
          closeDelay: 100,
          side: "top",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_8__.index_parts_exports.Trigger, {
            render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_4__.MuteButton, {
              render: props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Button__WEBPACK_IMPORTED_MODULE_16__.Button, {
                ...props,
                className: "media-button--icon media-button--mute",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_20__.VolumeOffIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_20__.VolumeLowIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_20__.VolumeHighIcon, {})]
              })
            })
          }), showVolumeControl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_8__.index_parts_exports.Popup, {
            className: "media-surface media-popover media-popover--volume",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_videojs_react__WEBPACK_IMPORTED_MODULE_15__.index_parts_exports.Root, {
              className: "media-slider",
              orientation: "vertical",
              thumbAlignment: "edge",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_15__.index_parts_exports.Track, {
                className: "media-slider__track",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_15__.index_parts_exports.Fill, {
                  className: "media-slider__fill"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_15__.index_parts_exports.Thumb, {
                className: "media-slider__thumb media-slider__thumb--persistent"
              })]
            })
          })]
        }), showCaptionControl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_CaptionsMenu__WEBPACK_IMPORTED_MODULE_18__["default"], {}), showPipControl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_videojs_react__WEBPACK_IMPORTED_MODULE_14__.index_parts_exports.Root, {
          side: "top",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_14__.index_parts_exports.Trigger, {
            render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_5__.PiPButton, {
              render: props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_16__.Button, {
                ...props,
                className: "media-button--icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_20__.PiPIcon, {})
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_14__.index_parts_exports.Popup, {
            className: "media-surface media-tooltip",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Labels__WEBPACK_IMPORTED_MODULE_19__.PiPLabel, {})
          })]
        }), showFullscreenControl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_videojs_react__WEBPACK_IMPORTED_MODULE_14__.index_parts_exports.Root, {
          side: "top",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_14__.index_parts_exports.Trigger, {
            render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_3__.FullscreenButton, {
              render: props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_Button__WEBPACK_IMPORTED_MODULE_16__.Button, {
                ...props,
                className: "media-button--icon media-button--fullscreen",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_20__.FullscreenEnterIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Icons__WEBPACK_IMPORTED_MODULE_20__.FullscreenExitIcon, {})]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_videojs_react__WEBPACK_IMPORTED_MODULE_14__.index_parts_exports.Popup, {
            className: "media-surface media-tooltip",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Labels__WEBPACK_IMPORTED_MODULE_19__.FullscreenLabel, {})
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
      className: "media-overlay"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoJSSkin);

/***/ },

/***/ "./src/blocks/videojs-player/style.scss"
/*!**********************************************!*\
  !*** ./src/blocks/videojs-player/style.scss ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "react-dom/client"
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
(module) {

module.exports = window["ReactDOM"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/media/types.js"
/*!*****************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/media/types.js ***!
  \*****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaStreamTypes: () => (/* binding */ MediaStreamTypes),
/* harmony export */   TypedEventTarget: () => (/* binding */ TypedEventTarget)
/* harmony export */ });
//#region src/core/media/types.ts
function TypedEventTarget() {
	return EventTarget;
}
/**
* Canonical values for {@link MediaStreamType}.
*
* - `ON_DEMAND` — a finite-duration asset (VOD). Scrubbing is generally
*   supported across the full timeline.
* - `LIVE` — a live or DVR stream. The seekable window may slide as new
*   segments are published, and `duration` is typically `Infinity`.
* - `UNKNOWN` — the stream type has not been determined yet (no source,
*   or metadata has not loaded).
*/
const MediaStreamTypes = {
	ON_DEMAND: "on-demand",
	LIVE: "live",
	UNKNOWN: "unknown"
};
//#endregion


//# sourceMappingURL=types.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/alert-dialog/alert-dialog-core.js"
/*!***************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/alert-dialog/alert-dialog-core.js ***!
  \***************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertDialogCore: () => (/* binding */ AlertDialogCore)
/* harmony export */ });
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transition.js */ "./node_modules/@videojs/core/dist/dev/core/ui/transition.js");

//#region src/core/ui/alert-dialog/alert-dialog-core.ts
var AlertDialogCore = class {
	static defaultProps = {
		open: false,
		defaultOpen: false
	};
	/** Accept props for API consistency. Props are consumed by platform layers. */
	setProps(_props) {}
	#input = null;
	#titleId = void 0;
	#descriptionId = void 0;
	setInput(input) {
		this.#input = input;
	}
	setTitleId(id) {
		this.#titleId = id;
	}
	setDescriptionId(id) {
		this.#descriptionId = id;
	}
	getState() {
		const input = this.#input;
		return {
			open: input.active,
			status: input.status,
			titleId: this.#titleId,
			descriptionId: this.#descriptionId,
			...(0,_transition_js__WEBPACK_IMPORTED_MODULE_0__.getTransitionFlags)(input.status)
		};
	}
	getAttrs(state) {
		return {
			role: "alertdialog",
			"aria-modal": "true",
			"aria-labelledby": state.titleId,
			"aria-describedby": state.descriptionId
		};
	}
};
//#endregion


//# sourceMappingURL=alert-dialog-core.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/alert-dialog/alert-dialog-data-attrs.js"
/*!*********************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/alert-dialog/alert-dialog-data-attrs.js ***!
  \*********************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertDialogDataAttrs: () => (/* binding */ AlertDialogDataAttrs)
/* harmony export */ });
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transition.js */ "./node_modules/@videojs/core/dist/dev/core/ui/transition.js");

//#region src/core/ui/alert-dialog/alert-dialog-data-attrs.ts
const AlertDialogDataAttrs = {
	open: "data-open",
	..._transition_js__WEBPACK_IMPORTED_MODULE_0__.TransitionDataAttrs
};
//#endregion


//# sourceMappingURL=alert-dialog-data-attrs.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/buffering-indicator/buffering-indicator-core.js"
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/buffering-indicator/buffering-indicator-core.js ***!
  \*****************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BufferingIndicatorCore: () => (/* binding */ BufferingIndicatorCore)
/* harmony export */ });
/* harmony import */ var _videojs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/store */ "./node_modules/@videojs/store/dist/dev/core/state.js");
/* harmony import */ var _videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/object */ "./node_modules/@videojs/utils/dist/object/defaults.js");


//#region src/core/ui/buffering-indicator/buffering-indicator-core.ts
var BufferingIndicatorCore = class BufferingIndicatorCore {
	static defaultProps = { delay: 500 };
	state = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_0__.createState)({ visible: false });
	#props = { ...BufferingIndicatorCore.defaultProps };
	#timer = null;
	setProps(props) {
		this.#props = (0,_videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__.defaults)(props, BufferingIndicatorCore.defaultProps);
	}
	destroy() {
		this.#clearTimer();
	}
	update(media) {
		const buffering = media.waiting && !media.paused;
		if (buffering && !this.state.current.visible && !this.#timer) this.#timer = setTimeout(() => {
			this.#timer = null;
			this.state.patch({ visible: true });
		}, this.#props.delay);
		else if (!buffering) {
			this.#clearTimer();
			this.state.patch({ visible: false });
		}
	}
	#clearTimer() {
		if (this.#timer !== null) {
			clearTimeout(this.#timer);
			this.#timer = null;
		}
	}
};
//#endregion


//# sourceMappingURL=buffering-indicator-core.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/buffering-indicator/buffering-indicator-data-attrs.js"
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/buffering-indicator/buffering-indicator-data-attrs.js ***!
  \***********************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BufferingIndicatorDataAttrs: () => (/* binding */ BufferingIndicatorDataAttrs)
/* harmony export */ });
//#region src/core/ui/buffering-indicator/buffering-indicator-data-attrs.ts
const BufferingIndicatorDataAttrs = { visible: "data-visible" };
//#endregion


//# sourceMappingURL=buffering-indicator-data-attrs.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/controls/controls-core.js"
/*!*******************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/controls/controls-core.js ***!
  \*******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlsCore: () => (/* binding */ ControlsCore)
/* harmony export */ });
//#region src/core/ui/controls/controls-core.ts
var ControlsCore = class {
	#media = null;
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		return {
			visible: media.controlsVisible,
			userActive: media.userActive
		};
	}
};
//#endregion


//# sourceMappingURL=controls-core.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/controls/controls-data-attrs.js"
/*!*************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/controls/controls-data-attrs.js ***!
  \*************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlsDataAttrs: () => (/* binding */ ControlsDataAttrs)
/* harmony export */ });
//#region src/core/ui/controls/controls-data-attrs.ts
const ControlsDataAttrs = {
	visible: "data-visible",
	userActive: "data-user-active"
};
//#endregion


//# sourceMappingURL=controls-data-attrs.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/fullscreen-button/fullscreen-button-core.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/fullscreen-button/fullscreen-button-core.js ***!
  \*************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullscreenButtonCore: () => (/* binding */ FullscreenButtonCore)
/* harmony export */ });
/* harmony import */ var _videojs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/store */ "./node_modules/@videojs/store/dist/dev/core/state.js");
/* harmony import */ var _videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/object */ "./node_modules/@videojs/utils/dist/object/defaults.js");
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");



//#region src/core/ui/fullscreen-button/fullscreen-button-core.ts
var FullscreenButtonCore = class FullscreenButtonCore {
	static defaultProps = {
		label: "",
		disabled: false
	};
	state = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_0__.createState)({
		fullscreen: false,
		availability: "available",
		label: ""
	});
	#props = { ...FullscreenButtonCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = (0,_videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__.defaults)(props, FullscreenButtonCore.defaultProps);
	}
	getLabel(state) {
		const { label } = this.#props;
		if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_2__.isFunction)(label)) {
			const customLabel = label(state);
			if (customLabel) return customLabel;
		} else if (label) return label;
		return state.fullscreen ? "Exit fullscreen" : "Enter fullscreen";
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-disabled": this.#props.disabled ? "true" : void 0
		};
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		this.state.patch({
			fullscreen: media.fullscreen,
			availability: media.fullscreenAvailability
		});
		this.state.patch({ label: this.getLabel(this.state.current) });
		return this.state.current;
	}
	async toggle(media) {
		if (this.#props.disabled) return;
		if (media.fullscreenAvailability !== "available") return;
		try {
			if (media.fullscreen) await media.exitFullscreen();
			else await media.requestFullscreen();
		} catch {}
	}
};
//#endregion


//# sourceMappingURL=fullscreen-button-core.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/fullscreen-button/fullscreen-button-data-attrs.js"
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/fullscreen-button/fullscreen-button-data-attrs.js ***!
  \*******************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullscreenButtonDataAttrs: () => (/* binding */ FullscreenButtonDataAttrs)
/* harmony export */ });
//#region src/core/ui/fullscreen-button/fullscreen-button-data-attrs.ts
const FullscreenButtonDataAttrs = {
	fullscreen: "data-fullscreen",
	availability: "data-availability"
};
//#endregion


//# sourceMappingURL=fullscreen-button-data-attrs.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/mute-button/mute-button-core.js"
/*!*************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/mute-button/mute-button-core.js ***!
  \*************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MuteButtonCore: () => (/* binding */ MuteButtonCore)
/* harmony export */ });
/* harmony import */ var _videojs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/store */ "./node_modules/@videojs/store/dist/dev/core/state.js");
/* harmony import */ var _videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/object */ "./node_modules/@videojs/utils/dist/object/defaults.js");
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");



//#region src/core/ui/mute-button/mute-button-core.ts
var MuteButtonCore = class MuteButtonCore {
	static defaultProps = {
		label: "",
		disabled: false
	};
	state = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_0__.createState)({
		muted: false,
		volumeLevel: "off",
		label: ""
	});
	#props = { ...MuteButtonCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = (0,_videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__.defaults)(props, MuteButtonCore.defaultProps);
	}
	getLabel(state) {
		const { label } = this.#props;
		if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_2__.isFunction)(label)) {
			const customLabel = label(state);
			if (customLabel) return customLabel;
		} else if (label) return label;
		return state.muted ? "Unmute" : "Mute";
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-disabled": this.#props.disabled ? "true" : void 0
		};
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		this.state.patch({
			muted: media.muted || media.volume === 0,
			volumeLevel: getVolumeLevel(media)
		});
		this.state.patch({ label: this.getLabel(this.state.current) });
		return this.state.current;
	}
	toggle(media) {
		if (this.#props.disabled) return;
		media.toggleMuted();
	}
};
function getVolumeLevel(media) {
	if (media.muted || media.volume === 0) return "off";
	if (media.volume < .5) return "low";
	if (media.volume < .75) return "medium";
	return "high";
}
//#endregion


//# sourceMappingURL=mute-button-core.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/mute-button/mute-button-data-attrs.js"
/*!*******************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/mute-button/mute-button-data-attrs.js ***!
  \*******************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MuteButtonDataAttrs: () => (/* binding */ MuteButtonDataAttrs)
/* harmony export */ });
//#region src/core/ui/mute-button/mute-button-data-attrs.ts
const MuteButtonDataAttrs = {
	muted: "data-muted",
	volumeLevel: "data-volume-level"
};
//#endregion


//# sourceMappingURL=mute-button-data-attrs.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/pip-button/pip-button-core.js"
/*!***********************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/pip-button/pip-button-core.js ***!
  \***********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PiPButtonCore: () => (/* binding */ PiPButtonCore)
/* harmony export */ });
/* harmony import */ var _videojs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/store */ "./node_modules/@videojs/store/dist/dev/core/state.js");
/* harmony import */ var _videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/object */ "./node_modules/@videojs/utils/dist/object/defaults.js");
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");



//#region src/core/ui/pip-button/pip-button-core.ts
var PiPButtonCore = class PiPButtonCore {
	static defaultProps = {
		label: "",
		disabled: false
	};
	state = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_0__.createState)({
		pip: false,
		availability: "available",
		label: ""
	});
	#props = { ...PiPButtonCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = (0,_videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__.defaults)(props, PiPButtonCore.defaultProps);
	}
	getLabel(state) {
		const { label } = this.#props;
		if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_2__.isFunction)(label)) {
			const customLabel = label(state);
			if (customLabel) return customLabel;
		} else if (label) return label;
		return state.pip ? "Exit picture-in-picture" : "Enter picture-in-picture";
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-disabled": this.#props.disabled ? "true" : void 0
		};
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		this.state.patch({
			pip: media.pip,
			availability: media.pipAvailability
		});
		this.state.patch({ label: this.getLabel(this.state.current) });
		return this.state.current;
	}
	async toggle(media) {
		if (this.#props.disabled) return;
		if (media.pipAvailability !== "available") return;
		try {
			if (media.pip) await media.exitPictureInPicture();
			else await media.requestPictureInPicture();
		} catch {}
	}
};
//#endregion


//# sourceMappingURL=pip-button-core.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/pip-button/pip-button-data-attrs.js"
/*!*****************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/pip-button/pip-button-data-attrs.js ***!
  \*****************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PiPButtonDataAttrs: () => (/* binding */ PiPButtonDataAttrs)
/* harmony export */ });
//#region src/core/ui/pip-button/pip-button-data-attrs.ts
const PiPButtonDataAttrs = {
	pip: "data-pip",
	availability: "data-availability"
};
//#endregion


//# sourceMappingURL=pip-button-data-attrs.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/play-button/play-button-core.js"
/*!*************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/play-button/play-button-core.js ***!
  \*************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayButtonCore: () => (/* binding */ PlayButtonCore)
/* harmony export */ });
/* harmony import */ var _videojs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/store */ "./node_modules/@videojs/store/dist/dev/core/state.js");
/* harmony import */ var _videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/object */ "./node_modules/@videojs/utils/dist/object/defaults.js");
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");



//#region src/core/ui/play-button/play-button-core.ts
var PlayButtonCore = class PlayButtonCore {
	static defaultProps = {
		label: "",
		disabled: false
	};
	state = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_0__.createState)({
		paused: true,
		ended: false,
		started: false,
		label: ""
	});
	#props = { ...PlayButtonCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = (0,_videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__.defaults)(props, PlayButtonCore.defaultProps);
	}
	getLabel(state) {
		const { label } = this.#props;
		if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_2__.isFunction)(label)) {
			const customLabel = label(state);
			if (customLabel) return customLabel;
		} else if (label) return label;
		if (state.ended) return "Replay";
		return state.paused ? "Play" : "Pause";
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-disabled": this.#props.disabled ? "true" : void 0
		};
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		this.state.patch({
			paused: media.paused,
			ended: media.ended,
			started: media.started
		});
		this.state.patch({ label: this.getLabel(this.state.current) });
		return this.state.current;
	}
	async toggle(media) {
		if (this.#props.disabled) return;
		if (media.paused || media.ended) return media.play();
		media.pause();
	}
};
//#endregion


//# sourceMappingURL=play-button-core.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/play-button/play-button-data-attrs.js"
/*!*******************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/play-button/play-button-data-attrs.js ***!
  \*******************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayButtonDataAttrs: () => (/* binding */ PlayButtonDataAttrs)
/* harmony export */ });
//#region src/core/ui/play-button/play-button-data-attrs.ts
const PlayButtonDataAttrs = {
	paused: "data-paused",
	ended: "data-ended",
	started: "data-started"
};
//#endregion


//# sourceMappingURL=play-button-data-attrs.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/playback-rate-button/playback-rate-button-core.js"
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/playback-rate-button/playback-rate-button-core.js ***!
  \*******************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaybackRateButtonCore: () => (/* binding */ PlaybackRateButtonCore)
/* harmony export */ });
/* harmony import */ var _videojs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/store */ "./node_modules/@videojs/store/dist/dev/core/state.js");
/* harmony import */ var _videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/object */ "./node_modules/@videojs/utils/dist/object/defaults.js");
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");



//#region src/core/ui/playback-rate-button/playback-rate-button-core.ts
var PlaybackRateButtonCore = class PlaybackRateButtonCore {
	static defaultProps = {
		label: "",
		disabled: false
	};
	state = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_0__.createState)({
		rate: 1,
		label: ""
	});
	#props = { ...PlaybackRateButtonCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = (0,_videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__.defaults)(props, PlaybackRateButtonCore.defaultProps);
	}
	getLabel(state) {
		const { label } = this.#props;
		if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_2__.isFunction)(label)) {
			const customLabel = label(state);
			if (customLabel) return customLabel;
		} else if (label) return label;
		return `Playback rate ${state.rate}`;
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-disabled": this.#props.disabled ? "true" : void 0
		};
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		this.state.patch({ rate: media.playbackRate });
		this.state.patch({ label: this.getLabel(this.state.current) });
		return this.state.current;
	}
	cycle(media) {
		if (this.#props.disabled) return;
		const { playbackRates, playbackRate } = media;
		if (playbackRates.length === 0) return;
		const idx = playbackRates.indexOf(playbackRate);
		const next = idx === -1 ? playbackRates.find((r) => r > playbackRate) ?? playbackRates[0] : playbackRates[(idx + 1) % playbackRates.length];
		media.setPlaybackRate(next);
	}
};
//#endregion


//# sourceMappingURL=playback-rate-button-core.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/playback-rate-button/playback-rate-button-data-attrs.js"
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/playback-rate-button/playback-rate-button-data-attrs.js ***!
  \*************************************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaybackRateButtonDataAttrs: () => (/* binding */ PlaybackRateButtonDataAttrs)
/* harmony export */ });
//#region src/core/ui/playback-rate-button/playback-rate-button-data-attrs.ts
const PlaybackRateButtonDataAttrs = { rate: "data-rate" };
//#endregion


//# sourceMappingURL=playback-rate-button-data-attrs.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/popover/popover-core.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/popover/popover-core.js ***!
  \*****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopoverCore: () => (/* binding */ PopoverCore)
/* harmony export */ });
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transition.js */ "./node_modules/@videojs/core/dist/dev/core/ui/transition.js");
/* harmony import */ var _videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/object */ "./node_modules/@videojs/utils/dist/object/defaults.js");


//#region src/core/ui/popover/popover-core.ts
var PopoverCore = class PopoverCore {
	static defaultProps = {
		side: "top",
		align: "center",
		modal: false,
		closeOnEscape: true,
		closeOnOutsideClick: true,
		open: false,
		defaultOpen: false,
		openOnHover: false,
		delay: 300,
		closeDelay: 0
	};
	#props = { ...PopoverCore.defaultProps };
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = (0,_videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__.defaults)(props, PopoverCore.defaultProps);
	}
	#input = null;
	setInput(input) {
		this.#input = input;
	}
	getState() {
		const input = this.#input;
		return {
			open: input.active,
			status: input.status,
			side: this.#props.side,
			align: this.#props.align,
			modal: this.#props.modal,
			...(0,_transition_js__WEBPACK_IMPORTED_MODULE_0__.getTransitionFlags)(input.status)
		};
	}
	getTriggerAttrs(state, popupId) {
		return {
			"aria-expanded": state.open ? "true" : "false",
			"aria-haspopup": "dialog",
			"aria-controls": popupId
		};
	}
	getPopupAttrs(state) {
		return {
			popover: "manual",
			role: "dialog",
			"aria-modal": state.modal === true ? "true" : void 0
		};
	}
};
//#endregion


//# sourceMappingURL=popover-core.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/popover/popover-css-vars.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/popover/popover-css-vars.js ***!
  \*********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopoverCSSVars: () => (/* binding */ PopoverCSSVars)
/* harmony export */ });
//#region src/core/ui/popover/popover-css-vars.ts
const PopoverCSSVars = {
	sideOffset: "--media-popover-side-offset",
	alignOffset: "--media-popover-align-offset",
	boundaryOffset: "--media-popover-boundary-offset",
	anchorWidth: "--media-popover-anchor-width",
	anchorHeight: "--media-popover-anchor-height",
	availableWidth: "--media-popover-available-width",
	availableHeight: "--media-popover-available-height"
};
//#endregion


//# sourceMappingURL=popover-css-vars.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/popover/popover-data-attrs.js"
/*!***********************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/popover/popover-data-attrs.js ***!
  \***********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopoverDataAttrs: () => (/* binding */ PopoverDataAttrs)
/* harmony export */ });
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transition.js */ "./node_modules/@videojs/core/dist/dev/core/ui/transition.js");

//#region src/core/ui/popover/popover-data-attrs.ts
const PopoverDataAttrs = {
	open: "data-open",
	side: "data-side",
	align: "data-align",
	..._transition_js__WEBPACK_IMPORTED_MODULE_0__.TransitionDataAttrs
};
//#endregion


//# sourceMappingURL=popover-data-attrs.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/poster/poster-core.js"
/*!***************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/poster/poster-core.js ***!
  \***************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PosterCore: () => (/* binding */ PosterCore)
/* harmony export */ });
//#region src/core/ui/poster/poster-core.ts
var PosterCore = class {
	#media = null;
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		return { visible: !this.#media.started };
	}
};
//#endregion


//# sourceMappingURL=poster-core.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/poster/poster-data-attrs.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/poster/poster-data-attrs.js ***!
  \*********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PosterDataAttrs: () => (/* binding */ PosterDataAttrs)
/* harmony export */ });
//#region src/core/ui/poster/poster-data-attrs.ts
const PosterDataAttrs = { visible: "data-visible" };
//#endregion


//# sourceMappingURL=poster-data-attrs.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/seek-button/seek-button-core.js"
/*!*************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/seek-button/seek-button-core.js ***!
  \*************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeekButtonCore: () => (/* binding */ SeekButtonCore)
/* harmony export */ });
/* harmony import */ var _videojs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/store */ "./node_modules/@videojs/store/dist/dev/core/state.js");
/* harmony import */ var _videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/object */ "./node_modules/@videojs/utils/dist/object/defaults.js");
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");



//#region src/core/ui/seek-button/seek-button-core.ts
var SeekButtonCore = class SeekButtonCore {
	static defaultProps = {
		seconds: 30,
		label: "",
		disabled: false
	};
	state = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_0__.createState)({
		seeking: false,
		direction: "forward",
		label: ""
	});
	#props = { ...SeekButtonCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = (0,_videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__.defaults)(props, SeekButtonCore.defaultProps);
	}
	getLabel(state) {
		const { label } = this.#props;
		if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_2__.isFunction)(label)) {
			const customLabel = label(state);
			if (customLabel) return customLabel;
		} else if (label) return label;
		const abs = Math.abs(this.#props.seconds);
		return state.direction === "backward" ? `Seek backward ${abs} seconds` : `Seek forward ${abs} seconds`;
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-disabled": this.#props.disabled ? "true" : void 0
		};
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		const direction = this.#props.seconds < 0 ? "backward" : "forward";
		this.state.patch({
			seeking: media.seeking,
			direction
		});
		this.state.patch({ label: this.getLabel(this.state.current) });
		return this.state.current;
	}
	async seek(media) {
		if (this.#props.disabled) return;
		await media.seek(media.currentTime + this.#props.seconds);
	}
};
//#endregion


//# sourceMappingURL=seek-button-core.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/seek-button/seek-button-data-attrs.js"
/*!*******************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/seek-button/seek-button-data-attrs.js ***!
  \*******************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeekButtonDataAttrs: () => (/* binding */ SeekButtonDataAttrs)
/* harmony export */ });
//#region src/core/ui/seek-button/seek-button-data-attrs.ts
const SeekButtonDataAttrs = {
	seeking: "data-seeking",
	direction: "data-direction"
};
//#endregion


//# sourceMappingURL=seek-button-data-attrs.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/slider/slider-core.js"
/*!***************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/slider/slider-core.js ***!
  \***************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderCore: () => (/* binding */ SliderCore)
/* harmony export */ });
/* harmony import */ var _videojs_utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/utils/object */ "./node_modules/@videojs/utils/dist/object/defaults.js");
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");
/* harmony import */ var _videojs_utils_number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/number */ "./node_modules/@videojs/utils/dist/number/number.js");



//#region src/core/ui/slider/slider-core.ts
/** Base slider logic: value mapping, ARIA attrs, and step calculations. */
var SliderCore = class SliderCore {
	static defaultProps = {
		label: "",
		step: 1,
		largeStep: 10,
		orientation: "horizontal",
		disabled: false,
		thumbAlignment: "center",
		value: 0,
		min: 0,
		max: 100
	};
	static defaultInput = {
		pointerPercent: 0,
		dragPercent: 0,
		dragging: false,
		pointing: false,
		focused: false
	};
	#props = { ...SliderCore.defaultProps };
	#input = { ...SliderCore.defaultInput };
	get props() {
		return this.#props;
	}
	get input() {
		return this.#input;
	}
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = (0,_videojs_utils_object__WEBPACK_IMPORTED_MODULE_0__.defaults)(props, SliderCore.defaultProps);
	}
	setInput(input) {
		this.#input = input;
	}
	getSliderState(value) {
		const { orientation, disabled, thumbAlignment } = this.#props;
		const { pointerPercent, dragging, pointing, focused } = this.#input;
		return {
			value,
			fillPercent: this.percentFromValue(value),
			pointerPercent,
			dragging,
			pointing,
			interactive: dragging || pointing || focused,
			orientation,
			disabled,
			thumbAlignment
		};
	}
	getLabel(state) {
		const { label } = this.#props;
		if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_1__.isFunction)(label)) {
			const customLabel = label(state);
			if (customLabel) return customLabel;
		} else if (label) return label;
		return "";
	}
	getAttrs(state) {
		return {
			role: "slider",
			tabIndex: state.disabled ? -1 : 0,
			autoComplete: "off",
			"aria-label": this.getLabel(state),
			"aria-valuemin": this.#props.min,
			"aria-valuemax": this.#props.max,
			"aria-valuenow": state.value,
			"aria-orientation": state.orientation,
			"aria-disabled": state.disabled ? "true" : void 0
		};
	}
	valueFromPercent(percent) {
		const { min, max, step } = this.#props;
		return (0,_videojs_utils_number__WEBPACK_IMPORTED_MODULE_2__.roundToStep)((0,_videojs_utils_number__WEBPACK_IMPORTED_MODULE_2__.clamp)(min + percent / 100 * (max - min), min, max), step, min);
	}
	/** Convert percent to a clamped value without applying step rounding. */
	rawValueFromPercent(percent) {
		const { min, max } = this.#props;
		return (0,_videojs_utils_number__WEBPACK_IMPORTED_MODULE_2__.clamp)(min + percent / 100 * (max - min), min, max);
	}
	percentFromValue(value) {
		const { min, max } = this.#props;
		if (max === min) return 0;
		return (value - min) / (max - min) * 100;
	}
	/** Step as a percentage of the slider range. */
	getStepPercent() {
		const { step, min, max } = this.#props;
		const range = max - min;
		return range > 0 ? step / range * 100 : 0;
	}
	/** Large step as a percentage of the slider range. */
	getLargeStepPercent() {
		const { largeStep, min, max } = this.#props;
		const range = max - min;
		return range > 0 ? largeStep / range * 100 : 0;
	}
	adjustPercentForAlignment(rawPercent, thumbSize, trackSize) {
		if (this.#props.thumbAlignment === "center" || trackSize === 0) return rawPercent;
		const thumbHalf = thumbSize / trackSize * 100 / 2;
		const minPercent = thumbHalf;
		const maxPercent = 100 - thumbHalf;
		return minPercent + rawPercent / 100 * (maxPercent - minPercent);
	}
};
//#endregion


//# sourceMappingURL=slider-core.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/slider/slider-css-vars.js"
/*!*******************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/slider/slider-css-vars.js ***!
  \*******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderCSSVars: () => (/* binding */ SliderCSSVars)
/* harmony export */ });
//#region src/core/ui/slider/slider-css-vars.ts
/** CSS custom property names for slider visual state. */
const SliderCSSVars = {
	fill: "--media-slider-fill",
	pointer: "--media-slider-pointer",
	buffer: "--media-slider-buffer"
};
//#endregion


//# sourceMappingURL=slider-css-vars.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/slider/slider-data-attrs.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/slider/slider-data-attrs.js ***!
  \*********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderDataAttrs: () => (/* binding */ SliderDataAttrs)
/* harmony export */ });
//#region src/core/ui/slider/slider-data-attrs.ts
const SliderDataAttrs = {
	dragging: "data-dragging",
	pointing: "data-pointing",
	interactive: "data-interactive",
	orientation: "data-orientation",
	disabled: "data-disabled"
};
//#endregion


//# sourceMappingURL=slider-data-attrs.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/thumbnail/thumbnail-core.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/thumbnail/thumbnail-core.js ***!
  \*********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThumbnailCore: () => (/* binding */ ThumbnailCore)
/* harmony export */ });
//#region src/core/ui/thumbnail/thumbnail-core.ts
var ThumbnailCore = class {
	findActiveThumbnail(thumbnails, time) {
		if (thumbnails.length === 0) return void 0;
		let low = 0;
		let high = thumbnails.length - 1;
		let result;
		while (low <= high) {
			const mid = low + high >>> 1;
			const image = thumbnails[mid];
			if (time >= image.startTime) {
				result = image;
				low = mid + 1;
			} else high = mid - 1;
		}
		return result;
	}
	/**
	* Parse CSS constraint strings into numeric `ThumbnailConstraints`.
	*
	* Accepts any object with string `minWidth`/`maxWidth`/`minHeight`/`maxHeight`
	* properties — `CSSStyleDeclaration` satisfies this structurally.
	*/
	parseConstraints(raw) {
		const minW = parseFloat(raw.minWidth);
		const maxW = parseFloat(raw.maxWidth);
		const minH = parseFloat(raw.minHeight);
		const maxH = parseFloat(raw.maxHeight);
		return {
			minWidth: Number.isFinite(minW) ? minW : 0,
			maxWidth: Number.isFinite(maxW) ? maxW : Infinity,
			minHeight: Number.isFinite(minH) ? minH : 0,
			maxHeight: Number.isFinite(maxH) ? maxH : Infinity
		};
	}
	/**
	* Calculate a uniform scale factor that fits `tileWidth × tileHeight` within the
	* given CSS min/max constraints while preserving aspect ratio.
	*
	* - Scales down when the tile exceeds max constraints.
	* - Scales up when the tile is smaller than min constraints.
	* - Returns `1` when no scaling is needed.
	*/
	calculateScale(tileWidth, tileHeight, constraints) {
		const { minWidth, maxWidth, minHeight, maxHeight } = constraints;
		const maxRatio = Math.min(maxWidth / tileWidth, maxHeight / tileHeight);
		const minRatio = Math.max(minWidth / tileWidth, minHeight / tileHeight);
		if (Number.isFinite(maxRatio) && maxRatio < 1) return maxRatio;
		if (Number.isFinite(minRatio) && minRatio > 1) return minRatio;
		return 1;
	}
	/**
	* Compute container and image dimensions for the current thumbnail, scaled to
	* fit within the element's CSS min/max constraints.
	*
	* The container clips the sprite sheet via `overflow: hidden`, and the image is
	* positioned with `transform: translate()` to show the correct tile.
	*/
	resize(thumbnail, imgNaturalWidth, imgNaturalHeight, constraints) {
		const tileWidth = thumbnail.width ?? imgNaturalWidth;
		const tileHeight = thumbnail.height ?? imgNaturalHeight;
		if (!tileWidth || !tileHeight) return void 0;
		const scale = this.calculateScale(tileWidth, tileHeight, constraints);
		const coordX = thumbnail.coords?.x ?? 0;
		const coordY = thumbnail.coords?.y ?? 0;
		const inset = scale !== 1 ? 1 : 0;
		return {
			scale,
			containerWidth: Math.max(0, Math.floor(tileWidth * scale) - inset * 2),
			containerHeight: Math.max(0, Math.floor(tileHeight * scale) - inset * 2),
			imageWidth: Math.ceil(imgNaturalWidth * scale),
			imageHeight: Math.ceil(imgNaturalHeight * scale),
			offsetX: Math.ceil(coordX * scale) + inset,
			offsetY: Math.ceil(coordY * scale) + inset
		};
	}
	getState(loading, error, thumbnail) {
		return {
			loading,
			error,
			hidden: !loading && !thumbnail
		};
	}
	getAttrs(_state) {
		return {
			role: "img",
			"aria-hidden": "true"
		};
	}
};
//#endregion


//# sourceMappingURL=thumbnail-core.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/thumbnail/thumbnail-data-attrs.js"
/*!***************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/thumbnail/thumbnail-data-attrs.js ***!
  \***************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThumbnailDataAttrs: () => (/* binding */ ThumbnailDataAttrs)
/* harmony export */ });
//#region src/core/ui/thumbnail/thumbnail-data-attrs.ts
const ThumbnailDataAttrs = {
	loading: "data-loading",
	error: "data-error",
	hidden: "data-hidden"
};
//#endregion


//# sourceMappingURL=thumbnail-data-attrs.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/thumbnail/thumbnail-media-fragment.js"
/*!*******************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/thumbnail/thumbnail-media-fragment.js ***!
  \*******************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapCuesToThumbnails: () => (/* binding */ mapCuesToThumbnails),
/* harmony export */   parseMediaFragment: () => (/* binding */ parseMediaFragment)
/* harmony export */ });
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");

//#region src/core/ui/thumbnail/thumbnail-media-fragment.ts
/** Parse `url#xywh=x,y,w,h` into a URL and optional sprite coordinates. */
function parseMediaFragment(text, baseURL) {
	const parts = text.trim().split("#");
	const rawURL = parts[0] ?? "";
	const hash = parts[1];
	const url = baseURL ? new URL(rawURL, baseURL).href : rawURL;
	if (!hash) return { url };
	const eqIndex = hash.indexOf("=");
	if (eqIndex === -1) return { url };
	const keys = hash.slice(0, eqIndex);
	const values = hash.slice(eqIndex + 1).split(",").map(Number);
	const data = {};
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		const value = values[i];
		if (key && (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value) && !Number.isNaN(value)) data[key] = value;
	}
	const result = { url };
	if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isNumber)(data.w)) result.width = data.w;
	if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isNumber)(data.h)) result.height = data.h;
	if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isNumber)(data.x) && (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isNumber)(data.y)) result.coords = {
		x: data.x,
		y: data.y
	};
	return result;
}
/**
* Convert an array of text cues (e.g. `VTTCue` from a `<track>` element)
* into {@link ThumbnailImage} entries by parsing the media-fragment in
* each cue's text.
*/
function mapCuesToThumbnails(cues, baseURL) {
	const images = [];
	for (const cue of cues) {
		const fragment = parseMediaFragment(cue.text, baseURL);
		const image = {
			url: fragment.url,
			startTime: cue.startTime,
			endTime: cue.endTime
		};
		if (fragment.width) image.width = fragment.width;
		if (fragment.height) image.height = fragment.height;
		if (fragment.coords) image.coords = fragment.coords;
		images.push(image);
	}
	return images;
}
//#endregion


//# sourceMappingURL=thumbnail-media-fragment.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/time-slider/time-slider-core.js"
/*!*************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/time-slider/time-slider-core.js ***!
  \*************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeSliderCore: () => (/* binding */ TimeSliderCore)
/* harmony export */ });
/* harmony import */ var _slider_slider_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../slider/slider-core.js */ "./node_modules/@videojs/core/dist/dev/core/ui/slider/slider-core.js");
/* harmony import */ var _videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/object */ "./node_modules/@videojs/utils/dist/object/defaults.js");
/* harmony import */ var _videojs_utils_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/time */ "./node_modules/@videojs/utils/dist/time/format.js");



//#region src/core/ui/time-slider/time-slider-core.ts
/** Time-domain slider: maps media time/buffer state to slider state. */
var TimeSliderCore = class TimeSliderCore extends _slider_slider_core_js__WEBPACK_IMPORTED_MODULE_0__.SliderCore {
	static defaultProps = {
		..._slider_slider_core_js__WEBPACK_IMPORTED_MODULE_0__.SliderCore.defaultProps,
		label: "Seek",
		changeThrottle: 100
	};
	#props = { ...TimeSliderCore.defaultProps };
	#media = null;
	constructor(props) {
		super();
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = (0,_videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__.defaults)(props, TimeSliderCore.defaultProps);
		super.setProps({
			...props,
			min: 0
		});
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const { duration, currentTime, seeking, buffered } = this.#media;
		super.setProps({
			...this.#props,
			min: 0,
			max: duration
		});
		const base = super.getSliderState(currentTime);
		const bufferedEnd = buffered.length > 0 ? buffered[buffered.length - 1][1] : 0;
		const bufferPercent = duration > 0 ? bufferedEnd / duration * 100 : 0;
		return {
			...base,
			currentTime,
			duration,
			seeking,
			bufferPercent
		};
	}
	getLabel(state) {
		return super.getLabel(state) || "Seek";
	}
	getAttrs(state) {
		const base = super.getAttrs(state);
		const announceValue = state.dragging ? this.rawValueFromPercent(state.pointerPercent) : state.value;
		const currentPhrase = (0,_videojs_utils_time__WEBPACK_IMPORTED_MODULE_2__.formatTimeAsPhrase)(announceValue);
		const durationPhrase = (0,_videojs_utils_time__WEBPACK_IMPORTED_MODULE_2__.formatTimeAsPhrase)(state.duration);
		const valuetext = durationPhrase ? `${currentPhrase} of ${durationPhrase}` : currentPhrase;
		return {
			...base,
			"aria-valuenow": announceValue,
			"aria-valuetext": valuetext
		};
	}
};
//#endregion


//# sourceMappingURL=time-slider-core.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/time-slider/time-slider-data-attrs.js"
/*!*******************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/time-slider/time-slider-data-attrs.js ***!
  \*******************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeSliderDataAttrs: () => (/* binding */ TimeSliderDataAttrs)
/* harmony export */ });
/* harmony import */ var _slider_slider_data_attrs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../slider/slider-data-attrs.js */ "./node_modules/@videojs/core/dist/dev/core/ui/slider/slider-data-attrs.js");

//#region src/core/ui/time-slider/time-slider-data-attrs.ts
const TimeSliderDataAttrs = {
	..._slider_slider_data_attrs_js__WEBPACK_IMPORTED_MODULE_0__.SliderDataAttrs,
	seeking: "data-seeking"
};
//#endregion


//# sourceMappingURL=time-slider-data-attrs.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/time/time-core.js"
/*!***********************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/time/time-core.js ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeCore: () => (/* binding */ TimeCore)
/* harmony export */ });
/* harmony import */ var _videojs_utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/utils/object */ "./node_modules/@videojs/utils/dist/object/defaults.js");
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");
/* harmony import */ var _videojs_utils_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/time */ "./node_modules/@videojs/utils/dist/time/format.js");



//#region src/core/ui/time/time-core.ts
const DEFAULT_LABELS = {
	current: "Current time",
	duration: "Duration",
	remaining: "Remaining"
};
var TimeCore = class TimeCore {
	static defaultProps = {
		type: "current",
		negativeSign: "-",
		label: ""
	};
	#props = { ...TimeCore.defaultProps };
	#media = null;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = (0,_videojs_utils_object__WEBPACK_IMPORTED_MODULE_0__.defaults)(props, TimeCore.defaultProps);
	}
	setMedia(media) {
		this.#media = media;
	}
	#getSeconds() {
		const media = this.#media;
		const { type } = this.#props;
		switch (type) {
			case "current": return media.currentTime;
			case "duration": return media.duration;
			case "remaining": return media.currentTime - media.duration;
			default: return 0;
		}
	}
	#getText() {
		const media = this.#media;
		const seconds = this.#getSeconds();
		return (0,_videojs_utils_time__WEBPACK_IMPORTED_MODULE_2__.formatTime)(Math.abs(seconds), media.duration);
	}
	#getPhrase() {
		const { type } = this.#props;
		const seconds = this.#getSeconds();
		if (type === "remaining") return (0,_videojs_utils_time__WEBPACK_IMPORTED_MODULE_2__.formatTimeAsPhrase)(seconds < 0 ? seconds : -Math.abs(seconds));
		return (0,_videojs_utils_time__WEBPACK_IMPORTED_MODULE_2__.formatTimeAsPhrase)(seconds);
	}
	#getDatetime() {
		const seconds = this.#getSeconds();
		return (0,_videojs_utils_time__WEBPACK_IMPORTED_MODULE_2__.secondsToIsoDuration)(Math.abs(seconds));
	}
	getLabel(state) {
		const { label } = this.#props;
		if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_1__.isFunction)(label)) {
			const customLabel = label(state);
			if (customLabel) return customLabel;
		} else if (label) return label;
		return DEFAULT_LABELS[this.#props.type];
	}
	getAttrs(state) {
		return {
			"aria-label": this.getLabel(state),
			"aria-valuetext": state.phrase
		};
	}
	getState() {
		const seconds = this.#getSeconds();
		return {
			type: this.#props.type,
			seconds,
			negative: this.#props.type === "remaining" && seconds < 0,
			text: this.#getText(),
			phrase: this.#getPhrase(),
			datetime: this.#getDatetime()
		};
	}
};
//#endregion


//# sourceMappingURL=time-core.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/time/time-data-attrs.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/time/time-data-attrs.js ***!
  \*****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeDataAttrs: () => (/* binding */ TimeDataAttrs)
/* harmony export */ });
//#region src/core/ui/time/time-data-attrs.ts
const TimeDataAttrs = { type: "data-type" };
//#endregion


//# sourceMappingURL=time-data-attrs.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/tooltip/tooltip-core.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/tooltip/tooltip-core.js ***!
  \*****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TooltipCore: () => (/* binding */ TooltipCore)
/* harmony export */ });
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transition.js */ "./node_modules/@videojs/core/dist/dev/core/ui/transition.js");
/* harmony import */ var _videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/object */ "./node_modules/@videojs/utils/dist/object/defaults.js");


//#region src/core/ui/tooltip/tooltip-core.ts
var TooltipCore = class TooltipCore {
	static defaultProps = {
		side: "top",
		align: "center",
		open: false,
		defaultOpen: false,
		delay: 600,
		closeDelay: 0,
		disableHoverablePopup: true,
		disabled: false
	};
	#props = { ...TooltipCore.defaultProps };
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = (0,_videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__.defaults)(props, TooltipCore.defaultProps);
	}
	#input = null;
	setInput(input) {
		this.#input = input;
	}
	getState() {
		const input = this.#input;
		return {
			open: input.active,
			status: input.status,
			side: this.#props.side,
			align: this.#props.align,
			...(0,_transition_js__WEBPACK_IMPORTED_MODULE_0__.getTransitionFlags)(input.status)
		};
	}
	getPopupAttrs(_state) {
		return {
			popover: "manual",
			role: "presentation"
		};
	}
};
//#endregion


//# sourceMappingURL=tooltip-core.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/tooltip/tooltip-css-vars.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/tooltip/tooltip-css-vars.js ***!
  \*********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TooltipCSSVars: () => (/* binding */ TooltipCSSVars)
/* harmony export */ });
//#region src/core/ui/tooltip/tooltip-css-vars.ts
const TooltipCSSVars = {
	sideOffset: "--media-tooltip-side-offset",
	alignOffset: "--media-tooltip-align-offset",
	boundaryOffset: "--media-tooltip-boundary-offset",
	anchorWidth: "--media-tooltip-anchor-width",
	anchorHeight: "--media-tooltip-anchor-height",
	availableWidth: "--media-tooltip-available-width",
	availableHeight: "--media-tooltip-available-height"
};
//#endregion


//# sourceMappingURL=tooltip-css-vars.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/tooltip/tooltip-data-attrs.js"
/*!***********************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/tooltip/tooltip-data-attrs.js ***!
  \***********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TooltipDataAttrs: () => (/* binding */ TooltipDataAttrs)
/* harmony export */ });
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transition.js */ "./node_modules/@videojs/core/dist/dev/core/ui/transition.js");

//#region src/core/ui/tooltip/tooltip-data-attrs.ts
const TooltipDataAttrs = {
	open: "data-open",
	side: "data-side",
	align: "data-align",
	..._transition_js__WEBPACK_IMPORTED_MODULE_0__.TransitionDataAttrs
};
//#endregion


//# sourceMappingURL=tooltip-data-attrs.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/tooltip/tooltip-group-core.js"
/*!***********************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/tooltip/tooltip-group-core.js ***!
  \***********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TooltipGroupCore: () => (/* binding */ TooltipGroupCore)
/* harmony export */ });
/* harmony import */ var _videojs_utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/utils/object */ "./node_modules/@videojs/utils/dist/object/defaults.js");

//#region src/core/ui/tooltip/tooltip-group-core.ts
var TooltipGroupCore = class TooltipGroupCore {
	static defaultProps = {
		delay: 600,
		closeDelay: 0,
		timeout: 400
	};
	#props = { ...TooltipGroupCore.defaultProps };
	#lastCloseTime = 0;
	#isOpen = false;
	constructor(props) {
		if (props) this.setProps(props);
	}
	setProps(props) {
		this.#props = (0,_videojs_utils_object__WEBPACK_IMPORTED_MODULE_0__.defaults)(props, TooltipGroupCore.defaultProps);
	}
	get delay() {
		return this.#props.delay;
	}
	get closeDelay() {
		return this.#props.closeDelay;
	}
	shouldSkipDelay() {
		if (this.#isOpen) return true;
		return Date.now() - this.#lastCloseTime < this.#props.timeout;
	}
	notifyOpen() {
		this.#isOpen = true;
	}
	notifyClose() {
		this.#isOpen = false;
		this.#lastCloseTime = Date.now();
	}
};
//#endregion


//# sourceMappingURL=tooltip-group-core.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/transition.js"
/*!*******************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/transition.js ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransitionDataAttrs: () => (/* binding */ TransitionDataAttrs),
/* harmony export */   getTransitionFlags: () => (/* binding */ getTransitionFlags),
/* harmony export */   getTransitionStyleAttrs: () => (/* binding */ getTransitionStyleAttrs)
/* harmony export */ });
//#region src/core/ui/transition.ts
/** Shared data attributes for open/close transition state. Spread into component data-attrs objects. */
const TransitionDataAttrs = {
	transitionStarting: "data-starting-style",
	transitionEnding: "data-ending-style"
};
function getTransitionFlags(status) {
	return {
		transitionStarting: status === "starting",
		transitionEnding: status === "ending"
	};
}
function getTransitionStyleAttrs({ transitionStarting, transitionEnding }) {
	return {
		[TransitionDataAttrs.transitionStarting]: transitionStarting ? "" : void 0,
		[TransitionDataAttrs.transitionEnding]: transitionEnding ? "" : void 0
	};
}
//#endregion


//# sourceMappingURL=transition.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/volume-slider/volume-slider-core.js"
/*!*****************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/volume-slider/volume-slider-core.js ***!
  \*****************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VolumeSliderCore: () => (/* binding */ VolumeSliderCore)
/* harmony export */ });
/* harmony import */ var _slider_slider_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../slider/slider-core.js */ "./node_modules/@videojs/core/dist/dev/core/ui/slider/slider-core.js");
/* harmony import */ var _videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/object */ "./node_modules/@videojs/utils/dist/object/defaults.js");


//#region src/core/ui/volume-slider/volume-slider-core.ts
/** Volume-domain slider: maps media volume/mute state to slider state. */
var VolumeSliderCore = class VolumeSliderCore extends _slider_slider_core_js__WEBPACK_IMPORTED_MODULE_0__.SliderCore {
	static defaultProps = {
		..._slider_slider_core_js__WEBPACK_IMPORTED_MODULE_0__.SliderCore.defaultProps,
		label: "Volume",
		wheelStep: 5
	};
	#media = null;
	constructor(props) {
		super();
		if (props) this.setProps(props);
	}
	setProps(props) {
		super.setProps((0,_videojs_utils_object__WEBPACK_IMPORTED_MODULE_1__.defaults)(props, VolumeSliderCore.defaultProps));
	}
	setMedia(media) {
		this.#media = media;
	}
	getState() {
		const media = this.#media;
		const { volume, muted } = media;
		const effectivelyMuted = muted || volume === 0;
		const { dragging, dragPercent } = this.input;
		const volumePercent = volume * 100;
		const value = dragging ? this.valueFromPercent(dragPercent) : volumePercent;
		const base = super.getSliderState(value);
		return {
			...base,
			fillPercent: effectivelyMuted ? 0 : base.fillPercent,
			volume,
			muted: effectivelyMuted,
			availability: media.volumeAvailability
		};
	}
	/** Wheel step as a percentage of the slider range. */
	getWheelStepPercent() {
		const props = this.props;
		const range = props.max - props.min;
		return range > 0 ? props.wheelStep / range * 100 : 0;
	}
	getLabel(state) {
		return super.getLabel(state) || "Volume";
	}
	getAttrs(state) {
		const base = super.getAttrs(state);
		const valuetext = `${Math.round(state.value)} percent${state.muted ? ", muted" : ""}`;
		return {
			...base,
			"aria-valuetext": valuetext
		};
	}
};
//#endregion


//# sourceMappingURL=volume-slider-core.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/core/ui/volume-slider/volume-slider-data-attrs.js"
/*!***********************************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/core/ui/volume-slider/volume-slider-data-attrs.js ***!
  \***********************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VolumeSliderDataAttrs: () => (/* binding */ VolumeSliderDataAttrs)
/* harmony export */ });
/* harmony import */ var _slider_slider_data_attrs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../slider/slider-data-attrs.js */ "./node_modules/@videojs/core/dist/dev/core/ui/slider/slider-data-attrs.js");

//#region src/core/ui/volume-slider/volume-slider-data-attrs.ts
const VolumeSliderDataAttrs = {
	..._slider_slider_data_attrs_js__WEBPACK_IMPORTED_MODULE_0__.SliderDataAttrs,
	availability: "data-availability"
};
//#endregion


//# sourceMappingURL=volume-slider-data-attrs.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/feature.js"
/*!************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/feature.js ***!
  \************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   definePlayerFeature: () => (/* binding */ definePlayerFeature)
/* harmony export */ });
/* harmony import */ var _videojs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/store */ "./node_modules/@videojs/store/dist/dev/core/slice.js");

//#region src/dom/feature.ts
const definePlayerFeature = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_0__.defineSlice)();
//#endregion


//# sourceMappingURL=feature.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/gesture/coordinator.js"
/*!************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/gesture/coordinator.js ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GestureCoordinator: () => (/* binding */ GestureCoordinator),
/* harmony export */   findGestureCoordinator: () => (/* binding */ findGestureCoordinator),
/* harmony export */   getGestureCoordinator: () => (/* binding */ getGestureCoordinator)
/* harmony export */ });
/* harmony import */ var _region_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./region.js */ "./node_modules/@videojs/core/dist/dev/dom/gesture/region.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/interactive.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/listen.js");


//#region src/dom/gesture/coordinator.ts
const TAP_THRESHOLD = 250;
var GestureCoordinator = class {
	#target;
	#bindings = [];
	#recognizers = /* @__PURE__ */ new Set();
	#disconnect = null;
	#subscribers = /* @__PURE__ */ new Set();
	constructor(target) {
		this.#target = target;
	}
	get bindings() {
		return this.#bindings;
	}
	subscribe(callback) {
		this.#subscribers.add(callback);
		return () => this.#subscribers.delete(callback);
	}
	add(binding) {
		const wrapped = {
			...binding,
			onActivate: (event) => {
				if (this.#subscribers.size > 0) {
					const activateEvent = {
						type: binding.type,
						source: "gesture",
						action: binding.action,
						value: binding.value,
						region: binding.region,
						pointer: binding.pointer,
						event
					};
					for (const cb of this.#subscribers) try {
						cb(activateEvent);
					} catch (error) {
						console.warn("[vjs-gesture] subscribe callback threw:", error);
					}
				}
				binding.onActivate(event);
			}
		};
		this.#bindings.push(wrapped);
		this.#recognizers.add(wrapped.recognizer);
		this.#connect();
		let removed = false;
		return () => {
			if (removed) return;
			removed = true;
			const idx = this.#bindings.indexOf(wrapped);
			if (idx !== -1) this.#bindings.splice(idx, 1);
			this.#maybeDisconnect();
		};
	}
	#connect() {
		if (this.#disconnect) return;
		this.#disconnect = new AbortController();
		const { signal } = this.#disconnect;
		let pointerDownTime = 0;
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(this.#target, "pointerdown", (event) => {
			if (event.button !== 0) return;
			pointerDownTime = Date.now();
		}, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(this.#target, "pointerup", (event) => {
			if (event.button !== 0) return;
			if (Date.now() - pointerDownTime > TAP_THRESHOLD) return;
			if ((0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isInteractiveTarget)(event)) return;
			const pointerType = event.pointerType;
			const clientX = event.clientX;
			const target = this.#target;
			const bindings = this.#bindings;
			const matches = { resolve: (type) => matchBindings(bindings, type, pointerType, clientX, target) };
			for (const recognizer of this.#recognizers) recognizer.handleUp(matches, event);
		}, { signal });
	}
	#maybeDisconnect() {
		if (this.#bindings.length > 0) return;
		for (const recognizer of this.#recognizers) recognizer.reset();
		this.#recognizers.clear();
		this.#disconnect?.abort();
		this.#disconnect = null;
	}
};
const coordinators = /* @__PURE__ */ new WeakMap();
/** Look up the gesture coordinator for a target element, if one exists. */
function findGestureCoordinator(target) {
	return coordinators.get(target);
}
function getGestureCoordinator(target) {
	let coordinator = coordinators.get(target);
	if (!coordinator) {
		coordinator = new GestureCoordinator(target);
		coordinators.set(target, coordinator);
	}
	return coordinator;
}
function matchBindings(bindings, type, pointerType, clientX, target) {
	const rect = target.getBoundingClientRect();
	const activeRegions = getActiveRegions(bindings, type, pointerType);
	const region = activeRegions.size > 0 ? (0,_region_js__WEBPACK_IMPORTED_MODULE_0__.resolveRegion)(clientX, rect, activeRegions) : null;
	const matches = [];
	for (const binding of bindings) {
		if (binding.disabled) continue;
		if (binding.type !== type) continue;
		if (binding.pointer && binding.pointer !== pointerType) continue;
		if (binding.region) {
			if (binding.region !== region) continue;
		} else if (region !== null) continue;
		matches.push(binding);
	}
	return matches;
}
function getActiveRegions(bindings, type, pointerType) {
	const regions = /* @__PURE__ */ new Set();
	for (const binding of bindings) {
		if (binding.disabled) continue;
		if (binding.type !== type) continue;
		if (binding.pointer && binding.pointer !== pointerType) continue;
		if (binding.region) regions.add(binding.region);
	}
	return regions;
}
//#endregion


//# sourceMappingURL=coordinator.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/gesture/region.js"
/*!*******************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/gesture/region.js ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveRegion: () => (/* binding */ resolveRegion)
/* harmony export */ });
//#region src/dom/gesture/region.ts
/**
* Determine which named region a pointer position falls into.
*
* Regions divide the container width equally based on how many are active:
* - `left` + `right` → halves (50% / 50%)
* - `left` + `center` + `right` → thirds (33% / 34% / 33%)
*
* Single region: `left` covers the left half, `right` the right half,
* and `center` covers the full surface. Partial two-region combos
* (e.g. `left` + `center`) use the same natural zones — positions outside
* all active zones return `null` so full-surface gestures can handle them.
*/
function resolveRegion(clientX, containerRect, activeRegions) {
	if (activeRegions.size === 0) return null;
	const relativeX = clientX - containerRect.left;
	const width = containerRect.width;
	if (width === 0) return null;
	const ratio = relativeX / width;
	if (activeRegions.size === 2 && activeRegions.has("left") && activeRegions.has("right")) return ratio < .5 ? "left" : "right";
	if (activeRegions.size === 3) {
		if (ratio < 1 / 3) return "left";
		if (ratio < 2 / 3) return "center";
		return "right";
	}
	if (activeRegions.has("left") && ratio < .5) return "left";
	if (activeRegions.has("right") && ratio >= .5) return "right";
	if (activeRegions.has("center")) {
		if (activeRegions.size === 1) return "center";
		if (ratio >= 1 / 3 && ratio < 2 / 3) return "center";
	}
	return null;
}
//#endregion


//# sourceMappingURL=region.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/hotkey/aria.js"
/*!****************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/hotkey/aria.js ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toAriaKeyShortcut: () => (/* binding */ toAriaKeyShortcut)
/* harmony export */ });
//#region src/dom/hotkey/aria.ts
const ARIA_MODIFIER_MAP = {
	shift: "Shift",
	ctrl: "Control",
	alt: "Alt",
	meta: "Meta"
};
const MODIFIER_ORDER = [
	"ctrl",
	"shift",
	"alt",
	"meta"
];
/**
* Convert parsed key bindings to a WAI-ARIA `aria-keyshortcuts` formatted string.
*
* @example
* ```ts
* toAriaKeyShortcut(parseHotkeyPattern('Ctrl+Shift+f'));
* // "Control+Shift+f"
*
* toAriaKeyShortcut([...parseHotkeyPattern('k'), ...parseHotkeyPattern('Space')]);
* // "k Space"
* ```
*/
function toAriaKeyShortcut(bindings) {
	return bindings.map((b) => {
		const parts = [];
		for (const mod of MODIFIER_ORDER) if (b.modifiers.has(mod)) parts.push(ARIA_MODIFIER_MAP[mod]);
		parts.push(b.originalKey);
		return parts.join("+");
	}).join(" ");
}
//#endregion


//# sourceMappingURL=aria.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/hotkey/coordinator.js"
/*!***********************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/hotkey/coordinator.js ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HotkeyCoordinator: () => (/* binding */ HotkeyCoordinator)
/* harmony export */ });
/* harmony import */ var _aria_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aria.js */ "./node_modules/@videojs/core/dist/dev/dom/hotkey/aria.js");
/* harmony import */ var _hotkey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hotkey.js */ "./node_modules/@videojs/core/dist/dev/dom/hotkey/hotkey.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/interactive.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/listen.js");



//#region src/dom/hotkey/coordinator.ts
var HotkeyCoordinator = class {
	#target;
	#bindings = [];
	#nextId = 0;
	#disconnect = null;
	#docDisconnect = null;
	/** Action name → bound keys. Controls query this to set `aria-keyshortcuts`. */
	#ariaRegistry = /* @__PURE__ */ new Map();
	#subscribers = /* @__PURE__ */ new Set();
	#destroyed = false;
	constructor(target) {
		this.#target = target;
	}
	subscribe(callback) {
		this.#subscribers.add(callback);
		return () => this.#subscribers.delete(callback);
	}
	add(options) {
		const parsed = (0,_hotkey_js__WEBPACK_IMPORTED_MODULE_1__.parseHotkeyPattern)(options.keys);
		const binding = {
			parsed,
			options,
			id: this.#nextId++
		};
		this.#bindings.push(binding);
		this.#sortBindings();
		if (options.action) this.#addToAriaRegistry(options.action, parsed);
		if (options.target === "document") this.#connectDocument();
		else this.#connect();
		let removed = false;
		return () => {
			if (removed) return;
			removed = true;
			const idx = this.#bindings.indexOf(binding);
			if (idx !== -1) this.#bindings.splice(idx, 1);
			if (options.action) this.#removeFromAriaRegistry(options.action, parsed);
			this.#maybeDisconnect();
		};
	}
	getAriaKeys(action) {
		const bindings = this.#ariaRegistry.get(action);
		if (!bindings?.length) return void 0;
		return (0,_aria_js__WEBPACK_IMPORTED_MODULE_0__.toAriaKeyShortcut)(bindings);
	}
	destroy() {
		if (this.#destroyed) return;
		this.#destroyed = true;
		this.#disconnect?.abort();
		this.#disconnect = null;
		this.#docDisconnect?.abort();
		this.#docDisconnect = null;
		this.#bindings = [];
		this.#ariaRegistry.clear();
	}
	#sortBindings() {
		this.#bindings.sort((a, b) => {
			const specDiff = b.parsed[0].modifiers.size - a.parsed[0].modifiers.size;
			if (specDiff !== 0) return specDiff;
			return a.id - b.id;
		});
	}
	#connect() {
		if (this.#disconnect) return;
		this.#disconnect = new AbortController();
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.listen)(this.#target, "keydown", this.#handleEvent, { signal: this.#disconnect.signal });
	}
	#connectDocument() {
		if (this.#docDisconnect) return;
		this.#docDisconnect = new AbortController();
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.listen)(document, "keydown", this.#handleEvent, { signal: this.#docDisconnect.signal });
	}
	#maybeDisconnect() {
		const hasPlayer = this.#bindings.some((b) => b.options.target !== "document");
		const hasDoc = this.#bindings.some((b) => b.options.target === "document");
		if (!hasPlayer) {
			this.#disconnect?.abort();
			this.#disconnect = null;
		}
		if (!hasDoc) {
			this.#docDisconnect?.abort();
			this.#docDisconnect = null;
		}
	}
	#handleEvent = (event) => {
		if (event.key === "Unidentified") return;
		if ((0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isInteractiveActivation)(event)) return;
		if (event.defaultPrevented) return;
		const editable = (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isEditableTarget)(event);
		for (const binding of this.#bindings) {
			const { options, parsed } = binding;
			if (options.disabled) continue;
			if (event.repeat && options.repeatable === false) continue;
			if (options.target === "document" !== (event.currentTarget === document)) continue;
			for (const p of parsed) {
				if (!(0,_hotkey_js__WEBPACK_IMPORTED_MODULE_1__.matchesHotkeyEvent)(p, event)) continue;
				if (editable && p.modifiers.size === 0) continue;
				if (this.#subscribers.size > 0) {
					const activateEvent = {
						source: "hotkey",
						action: options.action,
						value: options.value,
						event
					};
					for (const cb of this.#subscribers) try {
						cb(activateEvent);
					} catch (error) {
						console.warn("[vjs-hotkey] subscribe callback threw:", error);
					}
				}
				event.preventDefault();
				options.onActivate(event, p.originalKey);
				return;
			}
		}
	};
	#addToAriaRegistry(action, bindings) {
		let existing = this.#ariaRegistry.get(action);
		if (!existing) {
			existing = [];
			this.#ariaRegistry.set(action, existing);
		}
		existing.push(...bindings);
	}
	#removeFromAriaRegistry(action, bindings) {
		const existing = this.#ariaRegistry.get(action);
		if (!existing) return;
		const filtered = existing.filter((b) => !bindings.includes(b));
		if (filtered.length === 0) this.#ariaRegistry.delete(action);
		else this.#ariaRegistry.set(action, filtered);
	}
};
//#endregion


//# sourceMappingURL=coordinator.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/hotkey/hotkey.js"
/*!******************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/hotkey/hotkey.js ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHotkey: () => (/* binding */ createHotkey),
/* harmony export */   findHotkeyCoordinator: () => (/* binding */ findHotkeyCoordinator),
/* harmony export */   getHotkeyCoordinator: () => (/* binding */ getHotkeyCoordinator),
/* harmony export */   matchesHotkeyEvent: () => (/* binding */ matchesHotkeyEvent),
/* harmony export */   parseHotkeyPattern: () => (/* binding */ parseHotkeyPattern)
/* harmony export */ });
/* harmony import */ var _coordinator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinator.js */ "./node_modules/@videojs/core/dist/dev/dom/hotkey/coordinator.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/platform.js");


//#region src/dom/hotkey/hotkey.ts
const MODIFIER_KEYS = new Set([
	"shift",
	"ctrl",
	"alt",
	"meta"
]);
/**
* Parse a key pattern string into one or more bindings.
*
* @example
* ```ts
* parseHotkeyPattern('>');
* // [{ modifiers: Set(), key: '>', originalKey: '>' }]
*
* parseHotkeyPattern('0-9');
* // 10 bindings, one per digit
* ```
*/
function parseHotkeyPattern(pattern) {
	if (pattern === "0-9") return Array.from({ length: 10 }, (_, i) => ({
		modifiers: /* @__PURE__ */ new Set(),
		key: String(i),
		originalKey: String(i)
	}));
	const segments = pattern.split("+");
	const rawKey = segments.pop();
	const modifiers = /* @__PURE__ */ new Set();
	for (const seg of segments) {
		const lower = seg.toLowerCase();
		if (lower === "mod") modifiers.add((0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isMacOS)() ? "meta" : "ctrl");
		else if (MODIFIER_KEYS.has(lower)) modifiers.add(lower);
		else console.warn(`[vjs-hotkey] Unknown modifier: "${seg}" in pattern "${pattern}"`);
	}
	return [{
		modifiers,
		key: rawKey === "Space" ? " " : rawKey.toLowerCase(),
		originalKey: rawKey
	}];
}
/**
* Single non-letter character — layout-dependent modifiers (Shift, Alt/Option)
* were used to produce the character itself, not as deliberate modifiers
* (e.g. Shift+. → ">", Option+Shift → ">" on some Mac layouts).
* Letters excluded because Shift changes case intentionally (k vs K).
* Named keys excluded because event.key.length > 1 (ArrowLeft, Tab, etc.).
*/
function isImplicitModifierKey(key) {
	return key.length === 1 && !/[a-z]/i.test(key);
}
/** Whether a parsed binding matches a keyboard event. */
function matchesHotkeyEvent(binding, event) {
	if (event.key === "Unidentified") return false;
	if (event.key.toLowerCase() !== binding.key) return false;
	const implicit = isImplicitModifierKey(event.key);
	const shiftKey = implicit ? event.shiftKey && binding.modifiers.has("shift") : event.shiftKey;
	const altKey = implicit ? event.altKey && binding.modifiers.has("alt") : event.altKey;
	if (shiftKey !== binding.modifiers.has("shift")) return false;
	if (event.ctrlKey !== binding.modifiers.has("ctrl")) return false;
	if (altKey !== binding.modifiers.has("alt")) return false;
	if (event.metaKey !== binding.modifiers.has("meta")) return false;
	return true;
}
const coordinators = /* @__PURE__ */ new WeakMap();
/** Look up the coordinator for a target element, if one exists. */
function findHotkeyCoordinator(target) {
	return coordinators.get(target);
}
/** Look up or create the hotkey coordinator for a target element. */
function getHotkeyCoordinator(target) {
	let coordinator = coordinators.get(target);
	if (!coordinator) {
		coordinator = new _coordinator_js__WEBPACK_IMPORTED_MODULE_0__.HotkeyCoordinator(target);
		coordinators.set(target, coordinator);
	}
	return coordinator;
}
/**
* Register a hotkey binding on a target element.
*
* @example
* ```ts
* const cleanup = createHotkey(container, {
*   keys: 'k',
*   onActivate: () => store.paused ? store.play() : store.pause(),
* });
*
* // Later: remove the binding
* cleanup();
* ```
*
* @returns A cleanup function that removes the binding.
*/
function createHotkey(target, options) {
	return getHotkeyCoordinator(target).add(options);
}
//#endregion


//# sourceMappingURL=hotkey.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/media/predicate.js"
/*!********************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/media/predicate.js ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasMetadata: () => (/* binding */ hasMetadata),
/* harmony export */   isMediaBufferCapable: () => (/* binding */ isMediaBufferCapable),
/* harmony export */   isMediaErrorCapable: () => (/* binding */ isMediaErrorCapable),
/* harmony export */   isMediaLiveCapable: () => (/* binding */ isMediaLiveCapable),
/* harmony export */   isMediaPauseCapable: () => (/* binding */ isMediaPauseCapable),
/* harmony export */   isMediaPlaybackRateCapable: () => (/* binding */ isMediaPlaybackRateCapable),
/* harmony export */   isMediaRemotePlaybackCapable: () => (/* binding */ isMediaRemotePlaybackCapable),
/* harmony export */   isMediaSeekCapable: () => (/* binding */ isMediaSeekCapable),
/* harmony export */   isMediaSourceCapable: () => (/* binding */ isMediaSourceCapable),
/* harmony export */   isMediaStreamTypeCapable: () => (/* binding */ isMediaStreamTypeCapable),
/* harmony export */   isMediaTextTrackCapable: () => (/* binding */ isMediaTextTrackCapable),
/* harmony export */   isMediaVolumeCapable: () => (/* binding */ isMediaVolumeCapable),
/* harmony export */   isQuerySelectorAllCapable: () => (/* binding */ isQuerySelectorAllCapable)
/* harmony export */ });
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");

//#region src/dom/media/predicate.ts
function hasMetadata(media) {
	return media.readyState >= 1;
}
function isMediaPauseCapable(value) {
	return (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && "paused" in value && "ended" in value && (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.pause);
}
function isMediaSeekCapable(value) {
	return (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && "currentTime" in value && "duration" in value && "seeking" in value;
}
function isMediaSourceCapable(value) {
	return (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && "src" in value && "currentSrc" in value && "readyState" in value && (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.load);
}
function isMediaVolumeCapable(value) {
	return (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && "volume" in value && "muted" in value;
}
function isMediaPlaybackRateCapable(value) {
	return (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && "playbackRate" in value;
}
function isMediaBufferCapable(value) {
	return (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && "buffered" in value && "seekable" in value;
}
function isMediaErrorCapable(value) {
	return (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && "error" in value;
}
function isMediaTextTrackCapable(value) {
	return (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && "textTracks" in value;
}
function isMediaRemotePlaybackCapable(value) {
	return (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && "remote" in value && (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isObject)(value.remote);
}
function isMediaStreamTypeCapable(value) {
	return (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && "streamType" in value;
}
function isMediaLiveCapable(value) {
	return (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && "liveEdgeStart" in value && "targetLiveWindow" in value;
}
function isQuerySelectorAllCapable(value) {
	return (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && "querySelectorAll" in value && (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.querySelectorAll);
}
//#endregion


//# sourceMappingURL=predicate.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/presentation/fullscreen.js"
/*!****************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/presentation/fullscreen.js ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exitFullscreen: () => (/* binding */ exitFullscreen),
/* harmony export */   isFullscreen: () => (/* binding */ isFullscreen),
/* harmony export */   isFullscreenEnabled: () => (/* binding */ isFullscreenEnabled),
/* harmony export */   requestFullscreen: () => (/* binding */ requestFullscreen)
/* harmony export */ });
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");

//#region src/dom/presentation/fullscreen.ts
function isFullscreenEnabled() {
	const doc = document;
	if (doc.fullscreenEnabled || doc.webkitFullscreenEnabled) return true;
	return (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isFunction)(document.createElement("video").webkitSetPresentationMode);
}
function getFullscreenElement() {
	const doc = document;
	return doc.fullscreenElement ?? doc.webkitFullscreenElement ?? null;
}
function matchesFullscreen(element) {
	if (!(element instanceof Element)) return false;
	try {
		return element.matches(":fullscreen");
	} catch {
		return false;
	}
}
function isFullscreen(container, media) {
	if (media.webkitPresentationMode === "fullscreen") return true;
	const fullscreenElement = getFullscreenElement();
	if (fullscreenElement && (fullscreenElement === container || fullscreenElement === media)) return true;
	if (matchesFullscreen(container) || matchesFullscreen(media)) return true;
	return media.isFullscreen ?? false;
}
async function requestFullscreen(container, media) {
	const doc = document;
	if (container && (doc.fullscreenEnabled || doc.webkitFullscreenEnabled)) {
		const el = container;
		if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isFunction)(el.requestFullscreen)) return el.requestFullscreen();
		if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isFunction)(el.webkitRequestFullscreen)) return el.webkitRequestFullscreen();
	}
	const webkitVideo = media;
	if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isFunction)(webkitVideo.webkitSetPresentationMode)) {
		webkitVideo.webkitSetPresentationMode("fullscreen");
		return;
	}
	const video = media;
	if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isFunction)(video.requestFullscreen)) return video.requestFullscreen();
}
async function exitFullscreen(media) {
	const doc = document;
	const webkitVideo = media;
	if (webkitVideo.webkitPresentationMode === "fullscreen" && (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isFunction)(webkitVideo.webkitSetPresentationMode)) {
		webkitVideo.webkitSetPresentationMode("inline");
		return;
	}
	if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isFunction)(doc.exitFullscreen)) return doc.exitFullscreen();
	if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isFunction)(doc.webkitExitFullscreen)) return doc.webkitExitFullscreen();
	const video = media;
	if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isFunction)(video.exitFullscreen)) return video.exitFullscreen();
}
//#endregion


//# sourceMappingURL=fullscreen.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/presentation/pip.js"
/*!*********************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/presentation/pip.js ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exitPictureInPicture: () => (/* binding */ exitPictureInPicture),
/* harmony export */   isPictureInPicture: () => (/* binding */ isPictureInPicture),
/* harmony export */   isPictureInPictureEnabled: () => (/* binding */ isPictureInPictureEnabled),
/* harmony export */   requestPictureInPicture: () => (/* binding */ requestPictureInPicture)
/* harmony export */ });
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");

//#region src/dom/presentation/pip.ts
function isPictureInPictureEnabled() {
	if (document.pictureInPictureEnabled) {
		const isSafari = /.*Version\/.*Safari\/.*/.test(navigator.userAgent);
		const isPWA = typeof matchMedia === "function" && matchMedia("(display-mode: standalone)").matches;
		return !isSafari || !isPWA;
	}
	return (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isFunction)(document.createElement("video").webkitSetPresentationMode);
}
function isPictureInPicture(media) {
	if (media.webkitPresentationMode === "picture-in-picture") return true;
	if (document.pictureInPictureElement === media) return true;
	return media.isPictureInPicture ?? false;
}
async function requestPictureInPicture(media) {
	const webkitVideo = media;
	if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isFunction)(webkitVideo.webkitSetPresentationMode)) {
		webkitVideo.webkitSetPresentationMode("picture-in-picture");
		return;
	}
	const video = media;
	if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isFunction)(video.requestPictureInPicture)) return video.requestPictureInPicture();
}
async function exitPictureInPicture(media) {
	const webkitVideo = media;
	if (webkitVideo.webkitPresentationMode === "picture-in-picture" && (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isFunction)(webkitVideo.webkitSetPresentationMode)) {
		webkitVideo.webkitSetPresentationMode("inline");
		return;
	}
	if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isFunction)(document.exitPictureInPicture)) return document.exitPictureInPicture();
	const video = media;
	if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isFunction)(video.exitPictureInPicture)) return video.exitPictureInPicture();
}
//#endregion


//# sourceMappingURL=pip.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/presentation/remote-playback.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/presentation/remote-playback.js ***!
  \*********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isRemotePlaybackConnected: () => (/* binding */ isRemotePlaybackConnected),
/* harmony export */   isRemotePlaybackConnecting: () => (/* binding */ isRemotePlaybackConnecting),
/* harmony export */   requestRemotePlayback: () => (/* binding */ requestRemotePlayback)
/* harmony export */ });
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");

//#region src/dom/presentation/remote-playback.ts
function resolveRemote(media) {
	const target = media;
	if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isObject)(target.remote) && "state" in target.remote && "prompt" in target.remote) return target.remote;
}
function isRemotePlaybackConnected(media) {
	return resolveRemote(media)?.state === "connected";
}
function isRemotePlaybackConnecting(media) {
	return resolveRemote(media)?.state === "connecting";
}
async function requestRemotePlayback(media) {
	const remote = resolveRemote(media);
	if (!remote) throw new DOMException("Remote playback not supported", "NotSupportedError");
	return remote.prompt();
}
//#endregion


//# sourceMappingURL=remote-playback.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/store/features/buffer.js"
/*!**************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/store/features/buffer.js ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bufferFeature: () => (/* binding */ bufferFeature)
/* harmony export */ });
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../feature.js */ "./node_modules/@videojs/core/dist/dev/dom/feature.js");
/* harmony import */ var _media_predicate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../media/predicate.js */ "./node_modules/@videojs/core/dist/dev/dom/media/predicate.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/listen.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/time-ranges.js");



//#region src/dom/store/features/buffer.ts
const bufferFeature = (0,_feature_js__WEBPACK_IMPORTED_MODULE_0__.definePlayerFeature)({
	name: "buffer",
	state: () => ({
		buffered: [],
		seekable: []
	}),
	attach({ target, signal, set }) {
		const { media } = target;
		if (!(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaBufferCapable)(media)) return;
		const sync = () => set({
			buffered: (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.serializeTimeRanges)(media.buffered),
			seekable: (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.serializeTimeRanges)(media.seekable)
		});
		sync();
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "progress", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "emptied", sync, { signal });
	}
});
//#endregion


//# sourceMappingURL=buffer.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/store/features/controls.js"
/*!****************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/store/features/controls.js ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   controlsFeature: () => (/* binding */ controlsFeature)
/* harmony export */ });
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../feature.js */ "./node_modules/@videojs/core/dist/dev/dom/feature.js");
/* harmony import */ var _media_predicate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../media/predicate.js */ "./node_modules/@videojs/core/dist/dev/dom/media/predicate.js");
/* harmony import */ var _gesture_coordinator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gesture/coordinator.js */ "./node_modules/@videojs/core/dist/dev/dom/gesture/coordinator.js");
/* harmony import */ var _presentation_remote_playback_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../presentation/remote-playback.js */ "./node_modules/@videojs/core/dist/dev/dom/presentation/remote-playback.js");
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/listen.js");






//#region src/dom/store/features/controls.ts
const IDLE_DELAY = 2e3;
const TAP_THRESHOLD = 250;
const controlsFeature = (0,_feature_js__WEBPACK_IMPORTED_MODULE_0__.definePlayerFeature)({
	name: "controls",
	state: ({ get, set }) => ({
		userActive: true,
		controlsVisible: true,
		toggleControls() {
			const next = !get().userActive;
			set({
				userActive: next,
				controlsVisible: next
			});
			return next;
		}
	}),
	attach({ target, signal, get, set }) {
		const { media, container } = target;
		if (!(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaPauseCapable)(media) || (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_4__.isNull)(container)) {
			if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_4__.isNull)(container)) console.warn("[vjs] controlsFeature requires a container element for activity tracking.");
			return;
		}
		const computeVisible = (userActive) => {
			return userActive || media.paused || (0,_presentation_remote_playback_js__WEBPACK_IMPORTED_MODULE_3__.isRemotePlaybackConnected)(media) || (0,_presentation_remote_playback_js__WEBPACK_IMPORTED_MODULE_3__.isRemotePlaybackConnecting)(media);
		};
		let idleTimer;
		function clearIdle() {
			clearTimeout(idleTimer);
			idleTimer = void 0;
		}
		function scheduleIdle() {
			clearIdle();
			idleTimer = setTimeout(setInactive, IDLE_DELAY);
		}
		function setActive() {
			if (!get().userActive) set({
				userActive: true,
				controlsVisible: true
			});
			scheduleIdle();
		}
		function setInactive() {
			clearIdle();
			set({
				userActive: false,
				controlsVisible: computeVisible(false)
			});
		}
		set({ toggleControls() {
			if (get().controlsVisible) setInactive();
			else setActive();
			return get().controlsVisible;
		} });
		let pointerDownTime = 0;
		function onPointerDown() {
			pointerDownTime = Date.now();
		}
		function onPointerUp(event) {
			if (event.pointerType === "touch" && Date.now() - pointerDownTime < TAP_THRESHOLD) {
				if ((0,_gesture_coordinator_js__WEBPACK_IMPORTED_MODULE_2__.findGestureCoordinator)(container)?.bindings.some((b) => b.type === "tap" && b.action === "toggleControls" && (!b.pointer || b.pointer === "touch"))) return;
				const isMediaOrContainer = [media, container].includes(event.target);
				if (get().controlsVisible && isMediaOrContainer) setInactive();
				else setActive();
			} else setActive();
		}
		const onPlaybackChange = () => {
			const { userActive } = get();
			set({ controlsVisible: computeVisible(userActive) });
			if (!media.paused && userActive) scheduleIdle();
		};
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_5__.listen)(container, "pointermove", setActive, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_5__.listen)(container, "pointerdown", onPointerDown, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_5__.listen)(container, "pointerup", onPointerUp, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_5__.listen)(container, "keyup", setActive, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_5__.listen)(container, "focusin", setActive, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_5__.listen)(container, "mouseleave", setInactive, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_5__.listen)(media, "play", onPlaybackChange, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_5__.listen)(media, "pause", onPlaybackChange, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_5__.listen)(media, "ended", onPlaybackChange, { signal });
		if ((0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaRemotePlaybackCapable)(media)) {
			const onCastChange = () => {
				const { userActive } = get();
				set({ controlsVisible: computeVisible(userActive) });
			};
			(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_5__.listen)(media.remote, "connect", onCastChange, { signal });
			(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_5__.listen)(media.remote, "connecting", onCastChange, { signal });
			(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_5__.listen)(media.remote, "disconnect", onCastChange, { signal });
		}
		signal.addEventListener("abort", clearIdle, { once: true });
		scheduleIdle();
	}
});
//#endregion


//# sourceMappingURL=controls.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/store/features/error.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/store/features/error.js ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   errorFeature: () => (/* binding */ errorFeature)
/* harmony export */ });
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../feature.js */ "./node_modules/@videojs/core/dist/dev/dom/feature.js");
/* harmony import */ var _media_predicate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../media/predicate.js */ "./node_modules/@videojs/core/dist/dev/dom/media/predicate.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/listen.js");



//#region src/dom/store/features/error.ts
const errorFeature = (0,_feature_js__WEBPACK_IMPORTED_MODULE_0__.definePlayerFeature)({
	name: "error",
	state: ({ set }) => ({
		error: null,
		dismissError() {
			set({ error: null });
		}
	}),
	attach({ target, signal, set }) {
		const { media } = target;
		if (!(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaErrorCapable)(media)) return;
		const syncError = () => set({ error: media.error });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "error", syncError, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "emptied", () => set({ error: null }), { signal });
	}
});
//#endregion


//# sourceMappingURL=error.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/store/features/fullscreen.js"
/*!******************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/store/features/fullscreen.js ***!
  \******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fullscreenFeature: () => (/* binding */ fullscreenFeature)
/* harmony export */ });
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../feature.js */ "./node_modules/@videojs/core/dist/dev/dom/feature.js");
/* harmony import */ var _presentation_fullscreen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../presentation/fullscreen.js */ "./node_modules/@videojs/core/dist/dev/dom/presentation/fullscreen.js");
/* harmony import */ var _presentation_pip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../presentation/pip.js */ "./node_modules/@videojs/core/dist/dev/dom/presentation/pip.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/listen.js");




//#region src/dom/store/features/fullscreen.ts
const fullscreenFeature = (0,_feature_js__WEBPACK_IMPORTED_MODULE_0__.definePlayerFeature)({
	name: "fullscreen",
	state: ({ target }) => ({
		fullscreen: false,
		fullscreenAvailability: "unavailable",
		async requestFullscreen() {
			const { media, container } = target();
			if ((0,_presentation_pip_js__WEBPACK_IMPORTED_MODULE_2__.isPictureInPicture)(media)) await (0,_presentation_pip_js__WEBPACK_IMPORTED_MODULE_2__.exitPictureInPicture)(media);
			return (0,_presentation_fullscreen_js__WEBPACK_IMPORTED_MODULE_1__.requestFullscreen)(container, media);
		},
		async exitFullscreen() {
			const { media } = target();
			return (0,_presentation_fullscreen_js__WEBPACK_IMPORTED_MODULE_1__.exitFullscreen)(media);
		},
		async toggleFullscreen() {
			const { media, container } = target();
			if ((0,_presentation_fullscreen_js__WEBPACK_IMPORTED_MODULE_1__.isFullscreen)(container, media)) return (0,_presentation_fullscreen_js__WEBPACK_IMPORTED_MODULE_1__.exitFullscreen)(media);
			if ((0,_presentation_pip_js__WEBPACK_IMPORTED_MODULE_2__.isPictureInPicture)(media)) await (0,_presentation_pip_js__WEBPACK_IMPORTED_MODULE_2__.exitPictureInPicture)(media);
			return (0,_presentation_fullscreen_js__WEBPACK_IMPORTED_MODULE_1__.requestFullscreen)(container, media);
		}
	}),
	attach({ target, signal, set }) {
		const { media, container } = target;
		set({ fullscreenAvailability: (0,_presentation_fullscreen_js__WEBPACK_IMPORTED_MODULE_1__.isFullscreenEnabled)() ? "available" : "unsupported" });
		const sync = () => set({ fullscreen: (0,_presentation_fullscreen_js__WEBPACK_IMPORTED_MODULE_1__.isFullscreen)(container, media) });
		sync();
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.listen)(document, "fullscreenchange", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.listen)(document, "webkitfullscreenchange", sync, { signal });
		if ("webkitPresentationMode" in media) (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.listen)(media, "webkitpresentationmodechanged", sync, { signal });
	}
});
//#endregion


//# sourceMappingURL=fullscreen.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/store/features/live.js"
/*!************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/store/features/live.js ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   liveFeature: () => (/* binding */ liveFeature)
/* harmony export */ });
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../feature.js */ "./node_modules/@videojs/core/dist/dev/dom/feature.js");
/* harmony import */ var _media_predicate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../media/predicate.js */ "./node_modules/@videojs/core/dist/dev/dom/media/predicate.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/listen.js");



//#region src/dom/store/features/live.ts
/**
* Player feature exposing `liveEdgeStart` and `targetLiveWindow` in store
* state for media that implements `MediaLiveCapability` (currently
* `HlsMedia` and its delegates).
*
* - `liveEdgeStart` — presentation time marking the start of the Live Edge
*   Window. Playing at the live edge when `currentTime >= liveEdgeStart`.
*   `NaN` when the stream isn't live or the value is unknown.
* - `targetLiveWindow` — `0` for standard latency live, `Infinity` for DVR,
*   `NaN` for on-demand or unknown.
*
* Included by the {@link liveVideoFeatures} and {@link liveAudioFeatures}
* presets; apps can also compose it into a custom preset.
*
* @see https://github.com/video-dev/media-ui-extensions/blob/main/proposals/0007-live-edge.md
*/
const liveFeature = (0,_feature_js__WEBPACK_IMPORTED_MODULE_0__.definePlayerFeature)({
	name: "live",
	state: () => ({
		liveEdgeStart: NaN,
		targetLiveWindow: NaN
	}),
	attach({ target, signal, set }) {
		const { media } = target;
		if (!(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaLiveCapable)(media)) return;
		const sync = () => set({
			liveEdgeStart: media.liveEdgeStart,
			targetLiveWindow: media.targetLiveWindow
		});
		sync();
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "targetlivewindowchange", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "streamtypechange", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "loadedmetadata", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "canplay", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "progress", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "durationchange", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "timeupdate", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "emptied", sync, { signal });
	}
});
//#endregion


//# sourceMappingURL=live.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/store/features/pip.js"
/*!***********************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/store/features/pip.js ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pipFeature: () => (/* binding */ pipFeature)
/* harmony export */ });
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../feature.js */ "./node_modules/@videojs/core/dist/dev/dom/feature.js");
/* harmony import */ var _presentation_fullscreen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../presentation/fullscreen.js */ "./node_modules/@videojs/core/dist/dev/dom/presentation/fullscreen.js");
/* harmony import */ var _presentation_pip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../presentation/pip.js */ "./node_modules/@videojs/core/dist/dev/dom/presentation/pip.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/listen.js");




//#region src/dom/store/features/pip.ts
const pipFeature = (0,_feature_js__WEBPACK_IMPORTED_MODULE_0__.definePlayerFeature)({
	name: "pip",
	state: ({ target }) => ({
		pip: false,
		pipAvailability: "unavailable",
		async requestPictureInPicture() {
			const { media, container } = target();
			if ((0,_presentation_fullscreen_js__WEBPACK_IMPORTED_MODULE_1__.isFullscreen)(container, media)) await (0,_presentation_fullscreen_js__WEBPACK_IMPORTED_MODULE_1__.exitFullscreen)(media);
			return (0,_presentation_pip_js__WEBPACK_IMPORTED_MODULE_2__.requestPictureInPicture)(media);
		},
		async exitPictureInPicture() {
			const { media } = target();
			return (0,_presentation_pip_js__WEBPACK_IMPORTED_MODULE_2__.exitPictureInPicture)(media);
		},
		async togglePictureInPicture() {
			const { media, container } = target();
			if ((0,_presentation_pip_js__WEBPACK_IMPORTED_MODULE_2__.isPictureInPicture)(media)) return (0,_presentation_pip_js__WEBPACK_IMPORTED_MODULE_2__.exitPictureInPicture)(media);
			if ((0,_presentation_fullscreen_js__WEBPACK_IMPORTED_MODULE_1__.isFullscreen)(container, media)) await (0,_presentation_fullscreen_js__WEBPACK_IMPORTED_MODULE_1__.exitFullscreen)(media);
			return (0,_presentation_pip_js__WEBPACK_IMPORTED_MODULE_2__.requestPictureInPicture)(media);
		}
	}),
	attach({ target, signal, set }) {
		const { media } = target;
		set({ pipAvailability: (0,_presentation_pip_js__WEBPACK_IMPORTED_MODULE_2__.isPictureInPictureEnabled)() ? "available" : "unsupported" });
		const sync = () => set({ pip: (0,_presentation_pip_js__WEBPACK_IMPORTED_MODULE_2__.isPictureInPicture)(media) });
		sync();
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.listen)(media, "enterpictureinpicture", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.listen)(media, "leavepictureinpicture", sync, { signal });
		if ("webkitPresentationMode" in media) (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.listen)(media, "webkitpresentationmodechanged", sync, { signal });
	}
});
//#endregion


//# sourceMappingURL=pip.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/store/features/playback-rate.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/store/features/playback-rate.js ***!
  \*********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playbackRateFeature: () => (/* binding */ playbackRateFeature)
/* harmony export */ });
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../feature.js */ "./node_modules/@videojs/core/dist/dev/dom/feature.js");
/* harmony import */ var _media_predicate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../media/predicate.js */ "./node_modules/@videojs/core/dist/dev/dom/media/predicate.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/listen.js");



//#region src/dom/store/features/playback-rate.ts
const DEFAULT_RATES = [
	.2,
	.5,
	.7,
	1,
	1.2,
	1.5,
	1.7,
	2
];
const playbackRateFeature = (0,_feature_js__WEBPACK_IMPORTED_MODULE_0__.definePlayerFeature)({
	name: "playbackRate",
	state: ({ target }) => ({
		playbackRates: DEFAULT_RATES,
		playbackRate: 1,
		setPlaybackRate(rate) {
			const { media } = target();
			if ((0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaPlaybackRateCapable)(media)) media.playbackRate = rate;
		}
	}),
	attach({ target, signal, set }) {
		const { media } = target;
		if (!(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaPlaybackRateCapable)(media)) return;
		const sync = () => set({ playbackRate: media.playbackRate });
		sync();
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "ratechange", sync, { signal });
	}
});
//#endregion


//# sourceMappingURL=playback-rate.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/store/features/playback.js"
/*!****************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/store/features/playback.js ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playbackFeature: () => (/* binding */ playbackFeature)
/* harmony export */ });
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../feature.js */ "./node_modules/@videojs/core/dist/dev/dom/feature.js");
/* harmony import */ var _media_predicate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../media/predicate.js */ "./node_modules/@videojs/core/dist/dev/dom/media/predicate.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/listen.js");



//#region src/dom/store/features/playback.ts
const playbackFeature = (0,_feature_js__WEBPACK_IMPORTED_MODULE_0__.definePlayerFeature)({
	name: "playback",
	state: ({ target }) => ({
		paused: true,
		ended: false,
		started: false,
		waiting: false,
		play() {
			return target().media.play();
		},
		pause() {
			const { media } = target();
			if ((0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaPauseCapable)(media)) media.pause();
		},
		togglePaused() {
			const media = target().media;
			if (!(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaPauseCapable)(media)) return false;
			if (media.paused) {
				media.play();
				return true;
			}
			media.pause();
			return false;
		}
	}),
	attach({ target, signal, set }) {
		const { media } = target;
		if (!(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaPauseCapable)(media) || !(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaSeekCapable)(media) || !(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaSourceCapable)(media)) return;
		const sync = () => set({
			paused: media.paused,
			ended: media.ended,
			started: !media.paused || media.currentTime > 0,
			waiting: media.readyState < HTMLMediaElement.HAVE_FUTURE_DATA && !media.paused
		});
		sync();
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "emptied", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "play", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "pause", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "ended", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "playing", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "waiting", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "seeked", sync, { signal });
	}
});
//#endregion


//# sourceMappingURL=playback.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/store/features/presets.js"
/*!***************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/store/features/presets.js ***!
  \***************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   audioFeatures: () => (/* binding */ audioFeatures),
/* harmony export */   backgroundFeatures: () => (/* binding */ backgroundFeatures),
/* harmony export */   liveAudioFeatures: () => (/* binding */ liveAudioFeatures),
/* harmony export */   liveVideoFeatures: () => (/* binding */ liveVideoFeatures),
/* harmony export */   videoFeatures: () => (/* binding */ videoFeatures)
/* harmony export */ });
/* harmony import */ var _buffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffer.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/buffer.js");
/* harmony import */ var _controls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/controls.js");
/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/error.js");
/* harmony import */ var _fullscreen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fullscreen.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/fullscreen.js");
/* harmony import */ var _live_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./live.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/live.js");
/* harmony import */ var _pip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pip.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/pip.js");
/* harmony import */ var _playback_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playback.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/playback.js");
/* harmony import */ var _playback_rate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./playback-rate.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/playback-rate.js");
/* harmony import */ var _remote_playback_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./remote-playback.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/remote-playback.js");
/* harmony import */ var _source_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./source.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/source.js");
/* harmony import */ var _text_track_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./text-track.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/text-track.js");
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./time.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/time.js");
/* harmony import */ var _volume_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./volume.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/volume.js");













//#region src/dom/store/features/presets.ts
const videoFeatures = [
	_playback_js__WEBPACK_IMPORTED_MODULE_6__.playbackFeature,
	_playback_rate_js__WEBPACK_IMPORTED_MODULE_7__.playbackRateFeature,
	_volume_js__WEBPACK_IMPORTED_MODULE_12__.volumeFeature,
	_time_js__WEBPACK_IMPORTED_MODULE_11__.timeFeature,
	_source_js__WEBPACK_IMPORTED_MODULE_9__.sourceFeature,
	_buffer_js__WEBPACK_IMPORTED_MODULE_0__.bufferFeature,
	_fullscreen_js__WEBPACK_IMPORTED_MODULE_3__.fullscreenFeature,
	_pip_js__WEBPACK_IMPORTED_MODULE_5__.pipFeature,
	_remote_playback_js__WEBPACK_IMPORTED_MODULE_8__.remotePlaybackFeature,
	_controls_js__WEBPACK_IMPORTED_MODULE_1__.controlsFeature,
	_text_track_js__WEBPACK_IMPORTED_MODULE_10__.textTrackFeature,
	_error_js__WEBPACK_IMPORTED_MODULE_2__.errorFeature
];
const audioFeatures = [
	_playback_js__WEBPACK_IMPORTED_MODULE_6__.playbackFeature,
	_playback_rate_js__WEBPACK_IMPORTED_MODULE_7__.playbackRateFeature,
	_volume_js__WEBPACK_IMPORTED_MODULE_12__.volumeFeature,
	_time_js__WEBPACK_IMPORTED_MODULE_11__.timeFeature,
	_source_js__WEBPACK_IMPORTED_MODULE_9__.sourceFeature,
	_buffer_js__WEBPACK_IMPORTED_MODULE_0__.bufferFeature,
	_error_js__WEBPACK_IMPORTED_MODULE_2__.errorFeature
];
const backgroundFeatures = [];
/**
* Features for a live video player. Mirrors {@link videoFeatures} but drops
* {@link playbackRateFeature} (not meaningful for live) and adds
* {@link liveFeature} so store consumers can read `liveEdgeStart` and
* `targetLiveWindow`.
*/
const liveVideoFeatures = [
	_playback_js__WEBPACK_IMPORTED_MODULE_6__.playbackFeature,
	_volume_js__WEBPACK_IMPORTED_MODULE_12__.volumeFeature,
	_time_js__WEBPACK_IMPORTED_MODULE_11__.timeFeature,
	_source_js__WEBPACK_IMPORTED_MODULE_9__.sourceFeature,
	_buffer_js__WEBPACK_IMPORTED_MODULE_0__.bufferFeature,
	_fullscreen_js__WEBPACK_IMPORTED_MODULE_3__.fullscreenFeature,
	_pip_js__WEBPACK_IMPORTED_MODULE_5__.pipFeature,
	_remote_playback_js__WEBPACK_IMPORTED_MODULE_8__.remotePlaybackFeature,
	_controls_js__WEBPACK_IMPORTED_MODULE_1__.controlsFeature,
	_text_track_js__WEBPACK_IMPORTED_MODULE_10__.textTrackFeature,
	_error_js__WEBPACK_IMPORTED_MODULE_2__.errorFeature,
	_live_js__WEBPACK_IMPORTED_MODULE_4__.liveFeature
];
/**
* Features for a live audio player. Mirrors {@link audioFeatures} but drops
* {@link playbackRateFeature} (not meaningful for live) and adds
* {@link liveFeature} so store consumers can read `liveEdgeStart` and
* `targetLiveWindow`.
*/
const liveAudioFeatures = [
	_playback_js__WEBPACK_IMPORTED_MODULE_6__.playbackFeature,
	_volume_js__WEBPACK_IMPORTED_MODULE_12__.volumeFeature,
	_time_js__WEBPACK_IMPORTED_MODULE_11__.timeFeature,
	_source_js__WEBPACK_IMPORTED_MODULE_9__.sourceFeature,
	_buffer_js__WEBPACK_IMPORTED_MODULE_0__.bufferFeature,
	_error_js__WEBPACK_IMPORTED_MODULE_2__.errorFeature,
	_live_js__WEBPACK_IMPORTED_MODULE_4__.liveFeature
];
//#endregion


//# sourceMappingURL=presets.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/store/features/remote-playback.js"
/*!***********************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/store/features/remote-playback.js ***!
  \***********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   remotePlaybackFeature: () => (/* binding */ remotePlaybackFeature)
/* harmony export */ });
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../feature.js */ "./node_modules/@videojs/core/dist/dev/dom/feature.js");
/* harmony import */ var _media_predicate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../media/predicate.js */ "./node_modules/@videojs/core/dist/dev/dom/media/predicate.js");
/* harmony import */ var _presentation_remote_playback_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../presentation/remote-playback.js */ "./node_modules/@videojs/core/dist/dev/dom/presentation/remote-playback.js");
/* harmony import */ var _presentation_fullscreen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../presentation/fullscreen.js */ "./node_modules/@videojs/core/dist/dev/dom/presentation/fullscreen.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/listen.js");





//#region src/dom/store/features/remote-playback.ts
const remotePlaybackFeature = (0,_feature_js__WEBPACK_IMPORTED_MODULE_0__.definePlayerFeature)({
	name: "remotePlayback",
	state: ({ target }) => ({
		remotePlaybackState: "disconnected",
		remotePlaybackAvailability: "unsupported",
		async toggleRemotePlayback() {
			const { media, container } = target();
			if ((0,_presentation_remote_playback_js__WEBPACK_IMPORTED_MODULE_2__.isRemotePlaybackConnected)(media)) return (0,_presentation_remote_playback_js__WEBPACK_IMPORTED_MODULE_2__.requestRemotePlayback)(media);
			if ((0,_presentation_fullscreen_js__WEBPACK_IMPORTED_MODULE_3__.isFullscreen)(container, media)) await (0,_presentation_fullscreen_js__WEBPACK_IMPORTED_MODULE_3__.exitFullscreen)(media);
			return (0,_presentation_remote_playback_js__WEBPACK_IMPORTED_MODULE_2__.requestRemotePlayback)(media);
		}
	}),
	attach({ target, signal, set }) {
		const { media } = target;
		if (!(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaRemotePlaybackCapable)(media)) return;
		const syncState = () => set({ remotePlaybackState: media.remote.state });
		syncState();
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_4__.listen)(media.remote, "connect", syncState, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_4__.listen)(media.remote, "connecting", syncState, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_4__.listen)(media.remote, "disconnect", syncState, { signal });
		media.remote.watchAvailability((available) => {
			set({ remotePlaybackAvailability: available ? "available" : "unavailable" });
		}).catch(() => {
			set({ remotePlaybackAvailability: "unsupported" });
		});
		signal.addEventListener("abort", () => {
			media.remote?.cancelWatchAvailability().catch(() => {});
		});
	}
});
//#endregion


//# sourceMappingURL=remote-playback.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/store/features/source.js"
/*!**************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/store/features/source.js ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sourceFeature: () => (/* binding */ sourceFeature)
/* harmony export */ });
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../feature.js */ "./node_modules/@videojs/core/dist/dev/dom/feature.js");
/* harmony import */ var _media_predicate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../media/predicate.js */ "./node_modules/@videojs/core/dist/dev/dom/media/predicate.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/listen.js");



//#region src/dom/store/features/source.ts
const sourceFeature = (0,_feature_js__WEBPACK_IMPORTED_MODULE_0__.definePlayerFeature)({
	name: "source",
	state: ({ target, signals }) => ({
		source: null,
		canPlay: false,
		loadSource(src) {
			signals.clear();
			const { media } = target();
			if (!(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaSourceCapable)(media)) return src;
			media.src = src;
			media.load();
			return src;
		}
	}),
	attach({ target, signal, set }) {
		const { media } = target;
		if (!(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaSourceCapable)(media)) return;
		const sync = () => set({
			source: media.currentSrc || media.src || null,
			canPlay: media.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA
		});
		sync();
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "canplay", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "canplaythrough", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "loadstart", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "emptied", sync, { signal });
	}
});
//#endregion


//# sourceMappingURL=source.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/store/features/stream-type.js"
/*!*******************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/store/features/stream-type.js ***!
  \*******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   streamTypeFeature: () => (/* binding */ streamTypeFeature)
/* harmony export */ });
/* harmony import */ var _core_media_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/media/types.js */ "./node_modules/@videojs/core/dist/dev/core/media/types.js");
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../feature.js */ "./node_modules/@videojs/core/dist/dev/dom/feature.js");
/* harmony import */ var _media_predicate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../media/predicate.js */ "./node_modules/@videojs/core/dist/dev/dom/media/predicate.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/listen.js");




//#region src/dom/store/features/stream-type.ts
const streamTypeFeature = (0,_feature_js__WEBPACK_IMPORTED_MODULE_1__.definePlayerFeature)({
	name: "streamType",
	state: () => ({ streamType: _core_media_types_js__WEBPACK_IMPORTED_MODULE_0__.MediaStreamTypes.UNKNOWN }),
	attach({ target, signal, set }) {
		const { media } = target;
		if ((0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_2__.isMediaStreamTypeCapable)(media)) {
			const sync = () => set({ streamType: media.streamType });
			sync();
			(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.listen)(media, "streamtypechange", sync, { signal });
			return;
		}
		if (!(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_2__.isMediaSeekCapable)(media)) return;
		const detect = () => {
			const { duration } = media;
			if (duration === Number.POSITIVE_INFINITY) return _core_media_types_js__WEBPACK_IMPORTED_MODULE_0__.MediaStreamTypes.LIVE;
			if (Number.isFinite(duration) && duration > 0) return _core_media_types_js__WEBPACK_IMPORTED_MODULE_0__.MediaStreamTypes.ON_DEMAND;
			return _core_media_types_js__WEBPACK_IMPORTED_MODULE_0__.MediaStreamTypes.UNKNOWN;
		};
		const sync = () => set({ streamType: detect() });
		sync();
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.listen)(media, "durationchange", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.listen)(media, "loadedmetadata", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.listen)(media, "emptied", sync, { signal });
		if ((0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_2__.isMediaBufferCapable)(media)) (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.listen)(media, "progress", sync, { signal });
	}
});
//#endregion


//# sourceMappingURL=stream-type.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/store/features/text-track.js"
/*!******************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/store/features/text-track.js ***!
  \******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   textTrackFeature: () => (/* binding */ textTrackFeature)
/* harmony export */ });
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../feature.js */ "./node_modules/@videojs/core/dist/dev/dom/feature.js");
/* harmony import */ var _media_predicate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../media/predicate.js */ "./node_modules/@videojs/core/dist/dev/dom/media/predicate.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/listen.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/text-track.js");



//#region src/dom/store/features/text-track.ts
const textTrackFeature = (0,_feature_js__WEBPACK_IMPORTED_MODULE_0__.definePlayerFeature)({
	name: "textTrack",
	state: ({ target }) => ({
		chaptersCues: [],
		thumbnailCues: [],
		thumbnailTrackSrc: null,
		textTrackList: [],
		subtitlesShowing: false,
		toggleSubtitles(forceShow) {
			const { media } = target();
			if (!(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaTextTrackCapable)(media)) return false;
			const subtitlesTracks = (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getTextTrackList)(media, (track) => track.kind === "subtitles" || track.kind === "captions");
			if (!subtitlesTracks.length) return false;
			const showing = subtitlesTracks.some((track) => track.mode === "showing");
			const nextShowing = forceShow ?? !showing;
			for (const track of subtitlesTracks) track.mode = nextShowing ? "showing" : "disabled";
			return nextShowing;
		}
	}),
	attach({ target, signal, set }) {
		const { media } = target;
		if (!(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaTextTrackCapable)(media)) return;
		let trackCleanup = null;
		const sync = () => {
			trackCleanup?.abort();
			trackCleanup = new AbortController();
			let chaptersTrack = null;
			let thumbnailTrack = null;
			const textTrackList = [];
			let subtitlesShowing = false;
			for (let i = 0; i < media.textTracks.length; i++) {
				const track = media.textTracks[i];
				if (!chaptersTrack && track.kind === "chapters") chaptersTrack = track;
				if (!thumbnailTrack && track.kind === "metadata" && track.label === "thumbnails") thumbnailTrack = track;
				textTrackList.push({
					kind: track.kind,
					label: track.label,
					language: track.language,
					mode: track.mode
				});
				if ((track.kind === "captions" || track.kind === "subtitles") && track.mode === "showing") subtitlesShowing = true;
			}
			const chaptersCues = chaptersTrack?.cues ? Array.from(chaptersTrack.cues) : [];
			const thumbnailCues = thumbnailTrack?.cues ? Array.from(thumbnailTrack.cues) : [];
			let thumbnailTrackSrc = null;
			if (thumbnailTrack) thumbnailTrackSrc = (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.findTrackElement)(media, thumbnailTrack)?.src ?? null;
			const tracks = (0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isQuerySelectorAllCapable)(media) && media.querySelectorAll("track") || [];
			const shadowTracks = media instanceof HTMLElement && media.shadowRoot?.querySelectorAll("track") || [];
			for (const trackEl of [...tracks, ...shadowTracks]) if (!trackEl.track?.cues?.length) (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(trackEl, "load", sync, { signal: trackCleanup.signal });
			set({
				chaptersCues,
				thumbnailCues,
				thumbnailTrackSrc,
				textTrackList,
				subtitlesShowing
			});
		};
		sync();
		const textTracks = media.textTracks;
		if (textTracks instanceof EventTarget) {
			(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(textTracks, "addtrack", sync, { signal });
			(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(textTracks, "removetrack", sync, { signal });
			(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(textTracks, "change", sync, { signal });
		}
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "loadstart", sync, { signal });
		signal.addEventListener("abort", () => trackCleanup?.abort(), { once: true });
	}
});
//#endregion


//# sourceMappingURL=text-track.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/store/features/time.js"
/*!************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/store/features/time.js ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeFeature: () => (/* binding */ timeFeature)
/* harmony export */ });
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../feature.js */ "./node_modules/@videojs/core/dist/dev/dom/feature.js");
/* harmony import */ var _media_predicate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../media/predicate.js */ "./node_modules/@videojs/core/dist/dev/dom/media/predicate.js");
/* harmony import */ var _signal_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signal-keys.js */ "./node_modules/@videojs/core/dist/dev/dom/store/signal-keys.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/event.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/listen.js");
/* harmony import */ var _videojs_utils_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @videojs/utils/function */ "./node_modules/@videojs/utils/dist/function/noop.js");





//#region src/dom/store/features/time.ts
const timeFeature = (0,_feature_js__WEBPACK_IMPORTED_MODULE_0__.definePlayerFeature)({
	name: "time",
	state: ({ target, signals, set }) => ({
		currentTime: 0,
		duration: 0,
		seeking: false,
		async seek(time) {
			const { media } = target(), signal = signals.supersede(_signal_keys_js__WEBPACK_IMPORTED_MODULE_2__.signalKeys.seek);
			if (!(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaSeekCapable)(media) || !(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaSourceCapable)(media)) return 0;
			if (!(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.hasMetadata)(media)) {
				if (!await (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.onEvent)(media, "loadedmetadata", { signal }).catch(() => false)) return media.currentTime;
			}
			const clampedTime = Math.max(0, Math.min(time, media.duration || Infinity));
			set({
				currentTime: clampedTime,
				seeking: true
			});
			media.currentTime = clampedTime;
			await (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.onEvent)(media, "seeked", { signal }).catch(_videojs_utils_function__WEBPACK_IMPORTED_MODULE_5__.noop);
			return media.currentTime;
		}
	}),
	attach({ target, signal, set, get }) {
		const { media } = target;
		if (!(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaSeekCapable)(media)) return;
		const resolveDuration = () => {
			const { duration } = media;
			if (duration === Number.POSITIVE_INFINITY && (0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaBufferCapable)(media)) {
				const { seekable } = media;
				return seekable.length > 0 ? seekable.end(seekable.length - 1) : 0;
			}
			return Number.isFinite(duration) ? duration : 0;
		};
		const sync = () => set({
			currentTime: media.currentTime,
			duration: resolveDuration(),
			seeking: media.seeking
		});
		const syncUnlessSeeking = () => {
			if (get().seeking) return;
			sync();
		};
		sync();
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_4__.listen)(media, "timeupdate", syncUnlessSeeking, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_4__.listen)(media, "durationchange", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_4__.listen)(media, "seeking", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_4__.listen)(media, "seeked", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_4__.listen)(media, "loadedmetadata", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_4__.listen)(media, "emptied", sync, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_4__.listen)(media, "progress", syncUnlessSeeking, { signal });
	}
});
//#endregion


//# sourceMappingURL=time.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/store/features/volume.js"
/*!**************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/store/features/volume.js ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   volumeFeature: () => (/* binding */ volumeFeature)
/* harmony export */ });
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../feature.js */ "./node_modules/@videojs/core/dist/dev/dom/feature.js");
/* harmony import */ var _media_predicate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../media/predicate.js */ "./node_modules/@videojs/core/dist/dev/dom/media/predicate.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/listen.js");



//#region src/dom/store/features/volume.ts
/** Volume to restore when unmuting at zero. */
const UNMUTE_VOLUME = .25;
const volumeFeature = (0,_feature_js__WEBPACK_IMPORTED_MODULE_0__.definePlayerFeature)({
	name: "volume",
	state: ({ target }) => ({
		volume: 1,
		muted: false,
		volumeAvailability: "unavailable",
		setVolume(volume) {
			const { media } = target();
			if (!(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaVolumeCapable)(media)) return 0;
			const clamped = Math.max(0, Math.min(1, volume));
			if (clamped > 0 && media.muted) media.muted = false;
			media.volume = clamped;
			return media.volume;
		},
		toggleMuted() {
			const { media } = target();
			if (!(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaVolumeCapable)(media)) return false;
			if (media.muted || media.volume === 0) {
				media.muted = false;
				if (media.volume === 0) media.volume = UNMUTE_VOLUME;
			} else media.muted = true;
			return media.muted;
		}
	}),
	attach({ target, signal, set }) {
		const { media } = target;
		if (!(0,_media_predicate_js__WEBPACK_IMPORTED_MODULE_1__.isMediaVolumeCapable)(media)) return;
		set({ volumeAvailability: canSetVolume() });
		const sync = () => set({
			volume: media.volume,
			muted: media.muted
		});
		sync();
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.listen)(media, "volumechange", sync, { signal });
	}
});
/** Check if volume can be programmatically set (fails on iOS Safari). */
function canSetVolume() {
	const video = document.createElement("video");
	try {
		video.volume = .5;
		return video.volume === .5 ? "available" : "unsupported";
	} catch {
		return "unsupported";
	}
}
//#endregion


//# sourceMappingURL=volume.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/store/selectors.js"
/*!********************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/store/selectors.js ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectBuffer: () => (/* binding */ selectBuffer),
/* harmony export */   selectControls: () => (/* binding */ selectControls),
/* harmony export */   selectError: () => (/* binding */ selectError),
/* harmony export */   selectFullscreen: () => (/* binding */ selectFullscreen),
/* harmony export */   selectLive: () => (/* binding */ selectLive),
/* harmony export */   selectPiP: () => (/* binding */ selectPiP),
/* harmony export */   selectPlayback: () => (/* binding */ selectPlayback),
/* harmony export */   selectPlaybackRate: () => (/* binding */ selectPlaybackRate),
/* harmony export */   selectRemotePlayback: () => (/* binding */ selectRemotePlayback),
/* harmony export */   selectSource: () => (/* binding */ selectSource),
/* harmony export */   selectStreamType: () => (/* binding */ selectStreamType),
/* harmony export */   selectTextTrack: () => (/* binding */ selectTextTrack),
/* harmony export */   selectTime: () => (/* binding */ selectTime),
/* harmony export */   selectVolume: () => (/* binding */ selectVolume)
/* harmony export */ });
/* harmony import */ var _features_buffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/buffer.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/buffer.js");
/* harmony import */ var _features_controls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/controls.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/controls.js");
/* harmony import */ var _features_error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/error.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/error.js");
/* harmony import */ var _features_fullscreen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/fullscreen.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/fullscreen.js");
/* harmony import */ var _features_live_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/live.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/live.js");
/* harmony import */ var _features_pip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/pip.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/pip.js");
/* harmony import */ var _features_playback_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/playback.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/playback.js");
/* harmony import */ var _features_playback_rate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/playback-rate.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/playback-rate.js");
/* harmony import */ var _features_remote_playback_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/remote-playback.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/remote-playback.js");
/* harmony import */ var _features_source_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/source.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/source.js");
/* harmony import */ var _features_stream_type_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/stream-type.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/stream-type.js");
/* harmony import */ var _features_text_track_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/text-track.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/text-track.js");
/* harmony import */ var _features_time_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/time.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/time.js");
/* harmony import */ var _features_volume_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./features/volume.js */ "./node_modules/@videojs/core/dist/dev/dom/store/features/volume.js");
/* harmony import */ var _videojs_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @videojs/store */ "./node_modules/@videojs/store/dist/dev/core/selector.js");















//#region src/dom/store/selectors.ts
/** Select the buffer state (buffered ranges, percent buffered). */
const selectBuffer = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_14__.createSelector)(_features_buffer_js__WEBPACK_IMPORTED_MODULE_0__.bufferFeature);
/** Select the controls state (controls visible, user-active). */
const selectControls = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_14__.createSelector)(_features_controls_js__WEBPACK_IMPORTED_MODULE_1__.controlsFeature);
/** Select the error state (error, dismissed, dismissError). */
const selectError = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_14__.createSelector)(_features_error_js__WEBPACK_IMPORTED_MODULE_2__.errorFeature);
/** Select the fullscreen state (fullscreen active, availability). */
const selectFullscreen = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_14__.createSelector)(_features_fullscreen_js__WEBPACK_IMPORTED_MODULE_3__.fullscreenFeature);
/** Select the live state (`liveEdgeStart`, `targetLiveWindow`). */
const selectLive = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_14__.createSelector)(_features_live_js__WEBPACK_IMPORTED_MODULE_4__.liveFeature);
/** Select the PiP state (picture-in-picture active, availability). */
const selectPiP = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_14__.createSelector)(_features_pip_js__WEBPACK_IMPORTED_MODULE_5__.pipFeature);
/** Select the playback state (paused, ended, play, pause, toggle). */
const selectPlayback = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_14__.createSelector)(_features_playback_js__WEBPACK_IMPORTED_MODULE_6__.playbackFeature);
/** Select the playback rate state (playbackRate, playbackRates, setPlaybackRate). */
const selectPlaybackRate = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_14__.createSelector)(_features_playback_rate_js__WEBPACK_IMPORTED_MODULE_7__.playbackRateFeature);
/** Select the remote playback state (remote playback connection state, availability). */
const selectRemotePlayback = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_14__.createSelector)(_features_remote_playback_js__WEBPACK_IMPORTED_MODULE_8__.remotePlaybackFeature);
/** Select the source state (src, type). */
const selectSource = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_14__.createSelector)(_features_source_js__WEBPACK_IMPORTED_MODULE_9__.sourceFeature);
/** Select the stream type state (`'on-demand' | 'live' | 'unknown'`). */
const selectStreamType = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_14__.createSelector)(_features_stream_type_js__WEBPACK_IMPORTED_MODULE_10__.streamTypeFeature);
/** Select the text track state (chapters cues, thumbnail cues). */
const selectTextTrack = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_14__.createSelector)(_features_text_track_js__WEBPACK_IMPORTED_MODULE_11__.textTrackFeature);
/** Select the time state (currentTime, duration, seek). */
const selectTime = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_14__.createSelector)(_features_time_js__WEBPACK_IMPORTED_MODULE_12__.timeFeature);
/** Select the volume state (volume, muted, setVolume, setMuted). */
const selectVolume = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_14__.createSelector)(_features_volume_js__WEBPACK_IMPORTED_MODULE_13__.volumeFeature);
//#endregion


//# sourceMappingURL=selectors.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/store/signal-keys.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/store/signal-keys.js ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   signalKeys: () => (/* binding */ signalKeys)
/* harmony export */ });
//#region src/dom/store/signal-keys.ts
const signalKeys = { seek: Symbol.for("@videojs/seek") };
//#endregion


//# sourceMappingURL=signal-keys.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/ui/alert-dialog.js"
/*!********************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/ui/alert-dialog.js ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAlertDialog: () => (/* binding */ createAlertDialog)
/* harmony export */ });
/* harmony import */ var _dismiss_layer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dismiss-layer.js */ "./node_modules/@videojs/core/dist/dev/dom/ui/dismiss-layer.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/listen.js");


//#region src/dom/ui/alert-dialog.ts
function createAlertDialog(options) {
	const { onOpenChange } = options;
	let element = null;
	let previousFocus = null;
	let elementAbort = null;
	const layer = (0,_dismiss_layer_js__WEBPACK_IMPORTED_MODULE_0__.createDismissLayer)({
		transition: options.transition,
		closeOnEscape: options.closeOnEscape,
		onEscapeDismiss(event) {
			event.stopPropagation();
			applyClose();
		}
	});
	const state = layer.input;
	function applyOpen() {
		previousFocus = document.activeElement;
		const opening = layer.open();
		if (!opening) return;
		onOpenChange(true);
		requestAnimationFrame(() => {
			if (layer.signal.aborted || !state.current.active) return;
			element?.focus();
		});
		opening.then(() => {
			if (layer.signal.aborted || !state.current.active) return;
			options.onOpenChangeComplete?.(true);
		});
	}
	function applyClose() {
		const closing = layer.close(element);
		if (!closing) return;
		onOpenChange(false);
		closing.then(() => {
			if (layer.signal.aborted) return;
			if (previousFocus) {
				previousFocus.focus();
				previousFocus = null;
			}
			options.onOpenChangeComplete?.(false);
		});
	}
	function setupElementListeners() {
		cleanupElementListeners();
		if (!element) return;
		elementAbort = new AbortController();
		const { signal } = elementAbort;
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_1__.listen)(element, "click", handleElementClick, { signal });
	}
	function cleanupElementListeners() {
		elementAbort?.abort();
		elementAbort = null;
	}
	function handleElementClick(event) {
		if (event.target instanceof HTMLButtonElement) applyClose();
	}
	function setElement(el) {
		element = el;
		setupElementListeners();
	}
	layer.signal.addEventListener("abort", () => {
		cleanupElementListeners();
		element = null;
		previousFocus = null;
	});
	return {
		input: state,
		open: applyOpen,
		close: applyClose,
		setElement,
		destroy: layer.destroy
	};
}
//#endregion


//# sourceMappingURL=alert-dialog.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/ui/button.js"
/*!**************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/ui/button.js ***!
  \**************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createButton: () => (/* binding */ createButton)
/* harmony export */ });
//#region src/dom/ui/button.ts
function createButton(options) {
	const { onActivate, isDisabled } = options;
	return {
		role: "button",
		tabIndex: 0,
		onClick(event) {
			if (isDisabled()) {
				event.preventDefault();
				return;
			}
			onActivate();
		},
		onPointerDown(event) {
			if (isDisabled()) event.preventDefault();
		},
		onMouseDown(event) {
			if (isDisabled()) event.preventDefault();
		},
		onKeyDown(event) {
			if (event.target !== event.currentTarget) return;
			if (isDisabled()) {
				if (event.key !== "Tab") event.preventDefault();
				return;
			}
			if (event.key === "Enter") {
				event.preventDefault();
				onActivate();
			} else if (event.key === " ") event.preventDefault();
		},
		onKeyUp(event) {
			if (event.target !== event.currentTarget) return;
			if (isDisabled()) return;
			if (event.key === " ") onActivate();
		}
	};
}
//#endregion


//# sourceMappingURL=button.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/ui/dismiss-layer.js"
/*!*********************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/ui/dismiss-layer.js ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDismissLayer: () => (/* binding */ createDismissLayer)
/* harmony export */ });
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/listen.js");

//#region src/dom/ui/dismiss-layer.ts
function createDismissLayer(options) {
	const { transition } = options;
	const state = transition.state;
	const abort = new AbortController();
	let docAbort = null;
	function open() {
		if (abort.signal.aborted) return null;
		const { active, status } = state.current;
		if (active && status !== "ending") return null;
		if (status === "ending") transition.cancel();
		return transition.open();
	}
	function close(element) {
		const { active, status } = state.current;
		if (abort.signal.aborted || !active || status === "ending") return null;
		return transition.close(element);
	}
	function setupDocumentListeners() {
		cleanupDocumentListeners();
		if (typeof document === "undefined") return;
		docAbort = new AbortController();
		const { signal } = docAbort;
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_0__.listen)(document, "keydown", handleKeydown, { signal });
		options.onDocumentActive?.(signal);
	}
	function cleanupDocumentListeners() {
		docAbort?.abort();
		docAbort = null;
	}
	function handleKeydown(event) {
		if (event.key !== "Escape") return;
		if (event.defaultPrevented) return;
		if (!state.current.active) return;
		if (!(options.closeOnEscape?.() ?? true)) return;
		options.onEscapeDismiss(event);
	}
	const unsubscribe = state.subscribe(() => {
		if (state.current.active) setupDocumentListeners();
		else cleanupDocumentListeners();
	});
	abort.signal.addEventListener("abort", () => {
		unsubscribe();
		transition.destroy();
		cleanupDocumentListeners();
	});
	function destroy() {
		if (abort.signal.aborted) return;
		abort.abort();
	}
	return {
		input: state,
		open,
		close,
		signal: abort.signal,
		destroy
	};
}
//#endregion


//# sourceMappingURL=dismiss-layer.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/ui/popover/popover-positioning.js"
/*!***********************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/ui/popover/popover-positioning.js ***!
  \***********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAnchorNameStyle: () => (/* binding */ getAnchorNameStyle),
/* harmony export */   getAnchorPositionStyle: () => (/* binding */ getAnchorPositionStyle),
/* harmony export */   getManualPositionStyle: () => (/* binding */ getManualPositionStyle),
/* harmony export */   getPopoverCSSVars: () => (/* binding */ getPopoverCSSVars),
/* harmony export */   getPopupPositionRect: () => (/* binding */ getPopupPositionRect),
/* harmony export */   getPositioningCSSVars: () => (/* binding */ getPositioningCSSVars),
/* harmony export */   resolveOffsets: () => (/* binding */ resolveOffsets)
/* harmony export */ });
/* harmony import */ var _core_ui_popover_popover_css_vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/ui/popover/popover-css-vars.js */ "./node_modules/@videojs/core/dist/dev/core/ui/popover/popover-css-vars.js");
/* harmony import */ var _utils_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/layout.js */ "./node_modules/@videojs/core/dist/dev/dom/utils/layout.js");
/* harmony import */ var _videojs_utils_number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/number */ "./node_modules/@videojs/utils/dist/number/number.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/supports.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/style.js");




//#region src/dom/ui/popover/popover-positioning.ts
const ZERO_OFFSETS = {
	sideOffset: 0,
	alignOffset: 0,
	boundaryOffset: 0
};
const OPPOSITE_SIDE = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
};
function formatPixels(value) {
	return `${(0,_videojs_utils_number__WEBPACK_IMPORTED_MODULE_2__.clamp)(value, 0, Infinity)}px`;
}
function getCrossAxisAvailable(start, end, size, boundaryStart, boundaryEnd, align, alignOffset) {
	if (align === "start") return boundaryEnd - (start + alignOffset);
	if (align === "end") return end + alignOffset - boundaryStart;
	const center = start + size / 2 + alignOffset;
	return Math.min(center - boundaryStart, boundaryEnd - center) * 2;
}
/**
* Get positioning styles for the popup element.
*
* When the browser supports CSS Anchor Positioning, returns native CSS properties
* that reference the provided CSS var names for side/align offsets — no JS offset
* values needed.
*
* When rects are provided and anchor positioning is unsupported, falls back to
* manual JS-computed positioning. The caller must resolve offset CSS vars via
* `getComputedStyle` and pass them as `offsets`.
*
* Returns camelCase keys for standard CSS properties and `--*` keys for
* custom properties — compatible with both React's `style` prop and
* `applyStyles()` from `@videojs/utils/dom`.
*/
function getAnchorPositionStyle(anchorName, opts, triggerRect, popupRect, boundaryRect, offsets, cssVars = _core_ui_popover_popover_css_vars_js__WEBPACK_IMPORTED_MODULE_0__.PopoverCSSVars) {
	if ((0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.supportsAnchorPositioning)()) return {
		...getAnchorPositionCSS(anchorName, opts, cssVars),
		...triggerRect && boundaryRect ? getPositioningCSSVars(triggerRect, boundaryRect, opts, offsets, cssVars) : {}
	};
	if (triggerRect && popupRect) {
		const resolved = offsets ?? ZERO_OFFSETS;
		return {
			...getManualPositionStyle(triggerRect, popupRect, opts, resolved),
			...boundaryRect ? getPositioningCSSVars(triggerRect, boundaryRect, opts, resolved, cssVars) : {},
			position: "fixed",
			inset: "auto",
			margin: "0"
		};
	}
	return {};
}
/** Generate style to set on the trigger for CSS Anchor Positioning. */
function getAnchorNameStyle(anchorName) {
	if (!(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.supportsAnchorPositioning)()) return {};
	return { anchorName: `--${anchorName}` };
}
function getAnchorPositionCSS(anchorName, opts, cssVars = _core_ui_popover_popover_css_vars_js__WEBPACK_IMPORTED_MODULE_0__.PopoverCSSVars) {
	const SIDE_OFFSET_VAR = `var(${cssVars.sideOffset}, 0px)`;
	const ALIGN_OFFSET_VAR = `var(${cssVars.alignOffset}, 0px)`;
	const { side, align } = opts;
	const style = {
		positionAnchor: `--${anchorName}`,
		position: "fixed",
		inset: "auto",
		margin: "0",
		justifySelf: "normal",
		alignSelf: "normal",
		marginInlineStart: "0",
		marginBlockStart: "0"
	};
	const insetProp = OPPOSITE_SIDE[side];
	if (side === "top" || side === "bottom") {
		style[insetProp] = `calc(anchor(${side}) + ${SIDE_OFFSET_VAR})`;
		if (align === "start") style.left = `calc(anchor(left) + ${ALIGN_OFFSET_VAR})`;
		else if (align === "end") style.right = `calc(anchor(right) + ${ALIGN_OFFSET_VAR})`;
		else {
			style.justifySelf = "anchor-center";
			style.marginInlineStart = ALIGN_OFFSET_VAR;
		}
	} else {
		style[insetProp] = `calc(anchor(${side}) + ${SIDE_OFFSET_VAR})`;
		if (align === "start") style.top = `calc(anchor(top) + ${ALIGN_OFFSET_VAR})`;
		else if (align === "end") style.bottom = `calc(anchor(bottom) + ${ALIGN_OFFSET_VAR})`;
		else {
			style.alignSelf = "anchor-center";
			style.marginBlockStart = ALIGN_OFFSET_VAR;
		}
	}
	return style;
}
/**
* Compute CSS variables for sizing constraints relative to the anchor/boundary.
*
* Accepts a `cssVars` map so the same logic works for both popover
* (`--media-popover-*`) and tooltip (`--media-tooltip-*`) namespaces.
*/
function getPositioningCSSVars(triggerRect, boundaryRect, opts, offsets = ZERO_OFFSETS, cssVars = _core_ui_popover_popover_css_vars_js__WEBPACK_IMPORTED_MODULE_0__.PopoverCSSVars) {
	const vars = {};
	const { side, align } = opts;
	const boundaryOffset = offsets.boundaryOffset ?? 0;
	const boundaryStartX = boundaryRect.left + boundaryOffset;
	const boundaryEndX = boundaryRect.right - boundaryOffset;
	const boundaryStartY = boundaryRect.top + boundaryOffset;
	const boundaryEndY = boundaryRect.bottom - boundaryOffset;
	vars[cssVars.anchorWidth] = `${triggerRect.width}px`;
	vars[cssVars.anchorHeight] = `${triggerRect.height}px`;
	if (side === "top" || side === "bottom") {
		const sideSpace = side === "top" ? triggerRect.top - boundaryStartY : boundaryEndY - triggerRect.bottom;
		vars[cssVars.availableHeight] = formatPixels(sideSpace - offsets.sideOffset);
		vars[cssVars.availableWidth] = formatPixels(getCrossAxisAvailable(triggerRect.left, triggerRect.right, triggerRect.width, boundaryStartX, boundaryEndX, align, offsets.alignOffset));
	} else {
		const sideSpace = side === "left" ? triggerRect.left - boundaryStartX : boundaryEndX - triggerRect.right;
		vars[cssVars.availableWidth] = formatPixels(sideSpace - offsets.sideOffset);
		vars[cssVars.availableHeight] = formatPixels(getCrossAxisAvailable(triggerRect.top, triggerRect.bottom, triggerRect.height, boundaryStartY, boundaryEndY, align, offsets.alignOffset));
	}
	return vars;
}
/** @deprecated Use `getPositioningCSSVars` instead. */
function getPopoverCSSVars(triggerRect, boundaryRect, side) {
	const vars = {
		[_core_ui_popover_popover_css_vars_js__WEBPACK_IMPORTED_MODULE_0__.PopoverCSSVars.anchorWidth]: `${triggerRect.width}px`,
		[_core_ui_popover_popover_css_vars_js__WEBPACK_IMPORTED_MODULE_0__.PopoverCSSVars.anchorHeight]: `${triggerRect.height}px`
	};
	if (side === "top" || side === "bottom") {
		vars[_core_ui_popover_popover_css_vars_js__WEBPACK_IMPORTED_MODULE_0__.PopoverCSSVars.availableHeight] = side === "top" ? `${triggerRect.top - boundaryRect.top}px` : `${boundaryRect.bottom - triggerRect.bottom}px`;
		vars[_core_ui_popover_popover_css_vars_js__WEBPACK_IMPORTED_MODULE_0__.PopoverCSSVars.availableWidth] = `${boundaryRect.width}px`;
	} else {
		vars[_core_ui_popover_popover_css_vars_js__WEBPACK_IMPORTED_MODULE_0__.PopoverCSSVars.availableWidth] = side === "left" ? `${triggerRect.left - boundaryRect.left}px` : `${boundaryRect.right - triggerRect.right}px`;
		vars[_core_ui_popover_popover_css_vars_js__WEBPACK_IMPORTED_MODULE_0__.PopoverCSSVars.availableHeight] = `${boundaryRect.height}px`;
	}
	return vars;
}
/**
* Compute manual positioning when CSS Anchor Positioning is not supported.
*
* Returns inline `top`/`left` styles in **viewport coordinates** for use
* with `position: fixed` (the popup is in the top layer). All rects from
* `getBoundingClientRect()` are already viewport-relative.
*
* Offsets are resolved by the caller from CSS custom properties via
* `getComputedStyle()` and passed as `offsets`.
*/
function getManualPositionStyle(triggerRect, popupRect, opts, offsets = {
	sideOffset: 0,
	alignOffset: 0
}) {
	const { side, align } = opts;
	const { sideOffset, alignOffset } = offsets;
	let top = 0;
	let left = 0;
	if (side === "top") top = triggerRect.top - popupRect.height - sideOffset;
	else if (side === "bottom") top = triggerRect.bottom + sideOffset;
	else if (side === "left") left = triggerRect.left - popupRect.width - sideOffset;
	else left = triggerRect.right + sideOffset;
	if (side === "top" || side === "bottom") if (align === "start") left = triggerRect.left + alignOffset;
	else if (align === "end") left = triggerRect.right - popupRect.width + alignOffset;
	else left = triggerRect.left + (triggerRect.width - popupRect.width) / 2 + alignOffset;
	else if (align === "start") top = triggerRect.top + alignOffset;
	else if (align === "end") top = triggerRect.bottom - popupRect.height + alignOffset;
	else top = triggerRect.top + (triggerRect.height - popupRect.height) / 2 + alignOffset;
	return {
		top: `${top}px`,
		left: `${left}px`
	};
}
/**
* Read positioning offset CSS custom properties from the
* popup element's computed style, returning numeric pixel values.
*/
function resolveOffsets(el, cssVars = _core_ui_popover_popover_css_vars_js__WEBPACK_IMPORTED_MODULE_0__.PopoverCSSVars) {
	const computed = getComputedStyle(el);
	return {
		sideOffset: (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_4__.resolveCSSLength)(el, computed.getPropertyValue(cssVars.sideOffset)),
		alignOffset: (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_4__.resolveCSSLength)(el, computed.getPropertyValue(cssVars.alignOffset)),
		boundaryOffset: (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_4__.resolveCSSLength)(el, computed.getPropertyValue(cssVars.boundaryOffset))
	};
}
/**
* Measure the popup's layout box for positioning.
*
* `getBoundingClientRect()` includes active transforms, which causes the
* fallback position to drift while opening/closing animations scale the popup.
* Using `offsetWidth`/`offsetHeight` preserves the untransformed size.
*/
function getPopupPositionRect(el) {
	const rect = el.getBoundingClientRect();
	const width = el.offsetWidth || rect.width;
	const height = el.offsetHeight || rect.height;
	return (0,_utils_layout_js__WEBPACK_IMPORTED_MODULE_1__.createDOMRect)(rect.left, rect.top, width, height);
}
//#endregion


//# sourceMappingURL=popover-positioning.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/ui/popover/popover.js"
/*!***********************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/ui/popover/popover.js ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPopover: () => (/* binding */ createPopover)
/* harmony export */ });
/* harmony import */ var _dismiss_layer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dismiss-layer.js */ "./node_modules/@videojs/core/dist/dev/dom/ui/dismiss-layer.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/listen.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/popover.js");


//#region src/dom/ui/popover/popover.ts
function createPopover(options) {
	const { onOpenChange, closeOnOutsideClick } = options;
	let triggerEl = null;
	let popupEl = null;
	let hoverTimeout = null;
	const capturedPointers = /* @__PURE__ */ new Set();
	const layer = (0,_dismiss_layer_js__WEBPACK_IMPORTED_MODULE_0__.createDismissLayer)({
		transition: options.transition,
		closeOnEscape: options.closeOnEscape,
		onEscapeDismiss(event) {
			event.preventDefault();
			applyClose("escape", event);
		},
		onDocumentActive(signal) {
			(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_1__.listen)(document, "pointerdown", handleDocumentPointerdown, {
				capture: true,
				signal
			});
		}
	});
	const state = layer.input;
	const groupMember = { close(reason) {
		applyClose(reason);
	} };
	function clearHoverTimeout() {
		if (hoverTimeout !== null) {
			clearTimeout(hoverTimeout);
			hoverTimeout = null;
		}
	}
	function canHover() {
		return globalThis.matchMedia?.("(hover: hover)")?.matches ?? false;
	}
	function canOpenOnFocus() {
		if (!canHover()) return false;
		return globalThis.matchMedia?.("(pointer: fine)")?.matches ?? false;
	}
	function canToggleOnClick() {
		if (!options.openOnHover?.()) return true;
		return canHover();
	}
	/**
	* The transition handler manages animation lifecycle via `createState`:
	*
	* **Open:** `transition.open()` patches `{ active: true, status: 'starting' }`.
	* After one RAF it patches `{ status: 'idle' }` and the promise resolves.
	* Frameworks render `data-starting-style` / `data-ending-style` via
	* `getPopupAttrs(state)` — no imperative DOM mutation needed.
	*
	* **Close:** `transition.close(el)` patches `{ status: 'ending' }` (keeping
	* `active: true` so the element stays mounted). After a double-RAF it waits
	* for `getAnimations()` to settle, then patches `{ active: false, status: 'idle' }`.
	*
	* `onOpenChange` fires immediately (before animations).
	* `onOpenChangeComplete` fires after animations finish.
	*/
	function applyOpen(reason, event) {
		const opening = layer.open();
		if (!opening) return;
		options.group?.()?.open(groupMember);
		onOpenChange(true, event ? {
			reason,
			event
		} : { reason });
		opening.then(() => {
			if (layer.signal.aborted || !state.current.active) return;
			options.onOpenChangeComplete?.(true);
		});
	}
	function applyClose(reason, event) {
		const closing = layer.close(popupEl);
		if (!closing) return;
		options.group?.()?.close(groupMember);
		onOpenChange(false, event ? {
			reason,
			event
		} : { reason });
		closing.then(() => {
			if (layer.signal.aborted) return;
			(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.tryHidePopover)(popupEl);
			options.onOpenChangeComplete?.(false);
		});
	}
	function open(reason = "click") {
		applyOpen(reason);
	}
	function close(reason = "click") {
		applyClose(reason);
	}
	function handleDocumentPointerdown(event) {
		if (!closeOnOutsideClick() || !state.current.active) return;
		const path = event.composedPath();
		if (triggerEl && path.includes(triggerEl) || popupEl && path.includes(popupEl)) return;
		applyClose("outside-click", event);
	}
	layer.signal.addEventListener("abort", () => {
		options.group?.()?.close(groupMember);
		clearHoverTimeout();
		capturedPointers.clear();
		triggerEl = null;
		popupEl = null;
	});
	const triggerProps = {
		onClick(event) {
			if (!canToggleOnClick()) return;
			if (state.current.active && state.current.status !== "ending") applyClose("click", event);
			else applyOpen("click", event);
		},
		onPointerEnter(_event) {
			if (!options.openOnHover?.()) return;
			if (!canHover()) return;
			clearHoverTimeout();
			if (state.current.active) return;
			const delay = options.delay?.() ?? 300;
			hoverTimeout = setTimeout(() => applyOpen("hover"), delay);
		},
		onPointerLeave(_event) {
			if (!options.openOnHover?.()) return;
			if (!canHover()) return;
			clearHoverTimeout();
			if (!state.current.active) return;
			const closeDelay = options.closeDelay?.() ?? 0;
			hoverTimeout = setTimeout(() => applyClose("hover"), closeDelay);
		},
		onFocusIn(_event) {
			if (options.openOnHover?.()) {
				if (!canOpenOnFocus()) return;
				applyOpen("focus");
			}
		},
		onFocusOut(event) {
			const relatedTarget = event.relatedTarget;
			if (relatedTarget && (triggerEl?.contains(relatedTarget) || popupEl?.contains(relatedTarget))) return;
			if (options.openOnHover?.()) applyClose("blur");
		}
	};
	const popupProps = {
		onPointerEnter(_event) {
			if (!options.openOnHover?.()) return;
			clearHoverTimeout();
		},
		onPointerLeave(_event) {
			if (!options.openOnHover?.()) return;
			if (capturedPointers.size > 0) return;
			clearHoverTimeout();
			if (!state.current.active) return;
			const closeDelay = options.closeDelay?.() ?? 0;
			hoverTimeout = setTimeout(() => applyClose("hover"), closeDelay);
		},
		onGotPointerCapture(event) {
			capturedPointers.add(event.pointerId);
		},
		onLostPointerCapture(event) {
			capturedPointers.delete(event.pointerId);
		},
		onFocusOut(event) {
			const relatedTarget = event.relatedTarget;
			if (relatedTarget && (triggerEl?.contains(relatedTarget) || popupEl?.contains(relatedTarget))) return;
			applyClose("blur");
		}
	};
	function setTriggerElement(el) {
		triggerEl = el;
	}
	function setPopupElement(el) {
		if (!el && popupEl && state.current.active) (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.tryHidePopover)(popupEl);
		popupEl = el;
		if (el) {
			if (state.current.active) (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_2__.tryShowPopover)(el);
		}
	}
	return {
		input: state,
		triggerProps,
		popupProps,
		get triggerElement() {
			return triggerEl;
		},
		setTriggerElement,
		setPopupElement,
		open,
		close,
		destroy: layer.destroy
	};
}
//#endregion


//# sourceMappingURL=popover.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/ui/popover/popup-group.js"
/*!***************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/ui/popover/popup-group.js ***!
  \***************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPopupGroup: () => (/* binding */ createPopupGroup)
/* harmony export */ });
//#region src/dom/ui/popover/popup-group.ts
function createPopupGroup() {
	let current = null;
	return {
		open(member) {
			if (current === member) return;
			current?.close("group-open");
			current = member;
		},
		close(member) {
			if (current === member) current = null;
		}
	};
}
//#endregion


//# sourceMappingURL=popup-group.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/ui/slider-css-vars.js"
/*!***********************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/ui/slider-css-vars.js ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSliderCSSVars: () => (/* binding */ getSliderCSSVars),
/* harmony export */   getSliderPreviewStyle: () => (/* binding */ getSliderPreviewStyle),
/* harmony export */   getTimeSliderCSSVars: () => (/* binding */ getTimeSliderCSSVars)
/* harmony export */ });
/* harmony import */ var _core_ui_slider_slider_css_vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ui/slider/slider-css-vars.js */ "./node_modules/@videojs/core/dist/dev/core/ui/slider/slider-css-vars.js");

//#region src/dom/ui/slider-css-vars.ts
function getSliderCSSVars(state) {
	return {
		[_core_ui_slider_slider_css_vars_js__WEBPACK_IMPORTED_MODULE_0__.SliderCSSVars.fill]: `${state.fillPercent.toFixed(3)}%`,
		[_core_ui_slider_slider_css_vars_js__WEBPACK_IMPORTED_MODULE_0__.SliderCSSVars.pointer]: `${state.pointerPercent.toFixed(3)}%`
	};
}
function getTimeSliderCSSVars(state) {
	return {
		...getSliderCSSVars(state),
		[_core_ui_slider_slider_css_vars_js__WEBPACK_IMPORTED_MODULE_0__.SliderCSSVars.buffer]: `${state.bufferPercent.toFixed(3)}%`
	};
}
/** Compute structural positioning styles for a slider preview element. */
function getSliderPreviewStyle(width, overflow) {
	const halfWidth = width / 2;
	return {
		position: "absolute",
		left: overflow === "visible" ? `calc(var(${_core_ui_slider_slider_css_vars_js__WEBPACK_IMPORTED_MODULE_0__.SliderCSSVars.pointer}) - ${halfWidth}px)` : `min(max(0px, calc(var(${_core_ui_slider_slider_css_vars_js__WEBPACK_IMPORTED_MODULE_0__.SliderCSSVars.pointer}) - ${halfWidth}px)), calc(100% - ${width}px))`,
		width: "max-content",
		pointerEvents: "none"
	};
}
//#endregion


//# sourceMappingURL=slider-css-vars.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/ui/slider.js"
/*!**************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/ui/slider.js ***!
  \**************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSlider: () => (/* binding */ createSlider)
/* harmony export */ });
/* harmony import */ var _utils_pointer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/pointer.js */ "./node_modules/@videojs/core/dist/dev/dom/utils/pointer.js");
/* harmony import */ var _videojs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/store */ "./node_modules/@videojs/store/dist/dev/core/state.js");
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");
/* harmony import */ var _videojs_utils_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/utils/number */ "./node_modules/@videojs/utils/dist/number/number.js");
/* harmony import */ var _videojs_utils_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @videojs/utils/function */ "./node_modules/@videojs/utils/dist/function/throttle.js");





//#region src/dom/ui/slider.ts
function createSlider(options) {
	const input = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_1__.createState)({
		pointerPercent: 0,
		dragPercent: 0,
		dragging: false,
		pointing: false,
		focused: false
	});
	const abort = new AbortController();
	const changeThrottleMs = options.changeThrottle ?? 0;
	let isDragging = false, cachedRTL = false, cachedRect = null, capturedPointerId = null, lastDragPercent = 0, committedOnRelease = false;
	const throttledChange = changeThrottleMs > 0 ? (0,_videojs_utils_function__WEBPACK_IMPORTED_MODULE_4__.throttle)((percent) => options.onValueChange?.(percent), changeThrottleMs, { leading: true }) : null;
	/** Fire `onValueChange` — throttled during drag when `changeThrottle > 0`. */
	function fireChange(percent, duringDrag) {
		if (duringDrag && throttledChange) throttledChange(percent);
		else options.onValueChange?.(percent);
	}
	function releaseCapture() {
		if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_2__.isNull)(capturedPointerId)) return;
		const id = capturedPointerId;
		capturedPointerId = null;
		try {
			options.getElement().releasePointerCapture(id);
		} catch {}
	}
	function endDrag() {
		if (!isDragging) input.patch({ pointing: false });
		else {
			if (!committedOnRelease) options.onValueCommit?.(lastDragPercent);
			isDragging = false;
			input.patch({
				dragging: false,
				pointing: false
			});
			options.onDragEnd?.();
		}
		committedOnRelease = false;
		cleanup();
	}
	function cleanup() {
		throttledChange?.cancel();
		capturedPointerId = null;
		cachedRect = null;
	}
	const rootProps = {
		onPointerDown(event) {
			if (options.isDisabled()) return;
			event.stopPropagation();
			event.preventDefault();
			const el = options.getElement();
			cachedRect = el.getBoundingClientRect();
			cachedRTL = options.isRTL();
			committedOnRelease = false;
			releaseCapture();
			capturedPointerId = event.pointerId;
			el.setPointerCapture(event.pointerId);
			const percent = (0,_utils_pointer_js__WEBPACK_IMPORTED_MODULE_0__.getPercentFromPointerEvent)(event, cachedRect, options.getOrientation(), cachedRTL);
			isDragging = true;
			lastDragPercent = percent;
			input.patch({
				pointing: true,
				dragging: true,
				pointerPercent: percent,
				dragPercent: percent
			});
			options.onDragStart?.();
			options.onValueChange?.(percent);
			options.getThumbElement?.()?.focus({
				preventScroll: true,
				focusVisible: false
			});
		},
		onPointerMove(event) {
			if (options.isDisabled()) return;
			if (!(0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_2__.isNull)(capturedPointerId)) {
				if (event.pointerType !== "touch" && event.buttons === 0) {
					endDrag();
					return;
				}
				const percent = (0,_utils_pointer_js__WEBPACK_IMPORTED_MODULE_0__.getPercentFromPointerEvent)(event, cachedRect, options.getOrientation(), cachedRTL);
				lastDragPercent = percent;
				input.patch({
					dragPercent: percent,
					pointerPercent: percent
				});
				fireChange(percent, true);
				return;
			}
			const percent = (0,_utils_pointer_js__WEBPACK_IMPORTED_MODULE_0__.getPercentFromPointerEvent)(event, options.getElement().getBoundingClientRect(), options.getOrientation(), options.isRTL());
			input.patch({
				pointing: true,
				pointerPercent: percent
			});
		},
		onPointerUp(event) {
			if (options.isDisabled()) return;
			event.stopPropagation();
			if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_2__.isNull)(capturedPointerId)) return;
			const percent = (0,_utils_pointer_js__WEBPACK_IMPORTED_MODULE_0__.getPercentFromPointerEvent)(event, cachedRect, options.getOrientation(), cachedRTL);
			throttledChange?.cancel();
			options.onValueChange?.(percent);
			options.onValueCommit?.(percent);
			committedOnRelease = true;
		},
		onPointerLeave() {
			if (!(0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_2__.isNull)(capturedPointerId)) return;
			input.patch({ pointing: false });
		},
		onLostPointerCapture() {
			endDrag();
		}
	};
	const thumbProps = {
		onKeyDown(event) {
			if (options.isDisabled()) {
				if (event.key !== "Tab") event.preventDefault();
				return;
			}
			const stepPercent = options.getStepPercent();
			const largeStepPercent = options.getLargeStepPercent();
			const rounded = (0,_videojs_utils_number__WEBPACK_IMPORTED_MODULE_3__.roundToStep)(options.getPercent(), stepPercent, 0);
			const horizontalSign = options.isRTL() ? -1 : 1;
			const step = event.shiftKey ? largeStepPercent : stepPercent;
			let newPercent = null;
			switch (event.key) {
				case "ArrowRight":
					newPercent = rounded + step * horizontalSign;
					break;
				case "ArrowLeft":
					newPercent = rounded - step * horizontalSign;
					break;
				case "ArrowUp":
					newPercent = rounded + step;
					break;
				case "ArrowDown":
					newPercent = rounded - step;
					break;
				case "PageUp":
					newPercent = rounded + largeStepPercent;
					break;
				case "PageDown":
					newPercent = rounded - largeStepPercent;
					break;
				case "Home":
					newPercent = 0;
					break;
				case "End":
					newPercent = 100;
					break;
				default:
					if (!event.metaKey && !event.ctrlKey && !event.altKey && event.key >= "0" && event.key <= "9") newPercent = Number(event.key) * 10;
					break;
			}
			if (newPercent !== null) {
				event.preventDefault();
				newPercent = (0,_videojs_utils_number__WEBPACK_IMPORTED_MODULE_3__.clamp)(newPercent, 0, 100);
				input.patch({
					pointerPercent: newPercent,
					dragPercent: newPercent
				});
				options.onValueChange?.(newPercent);
				options.onValueCommit?.(newPercent);
			}
		},
		onFocus() {
			input.patch({ focused: true });
		},
		onBlur() {
			input.patch({ focused: false });
		}
	};
	function adjustForAlignment(state) {
		if (!options.adjustPercent || state.thumbAlignment !== "edge") return state;
		const rootEl = options.getElement();
		const thumbEl = options.getThumbElement?.();
		if (!thumbEl) return state;
		const isHorizontal = state.orientation === "horizontal";
		const thumbSize = isHorizontal ? thumbEl.offsetWidth : thumbEl.offsetHeight;
		const trackSize = isHorizontal ? rootEl.offsetWidth : rootEl.offsetHeight;
		return {
			...state,
			fillPercent: options.adjustPercent(state.fillPercent, thumbSize, trackSize),
			pointerPercent: options.adjustPercent(state.pointerPercent, thumbSize, trackSize)
		};
	}
	let resizeObserver = null;
	if (options.onResize) {
		resizeObserver = new ResizeObserver(() => options.onResize());
		resizeObserver.observe(options.getElement());
	}
	return {
		input,
		rootProps,
		rootStyle: {
			touchAction: "none",
			userSelect: "none"
		},
		thumbProps,
		adjustForAlignment,
		destroy() {
			if (abort.signal.aborted) return;
			abort.abort();
			resizeObserver?.disconnect();
			releaseCapture();
			cleanup();
		}
	};
}
//#endregion


//# sourceMappingURL=slider.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/ui/thumbnail.js"
/*!*****************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/ui/thumbnail.js ***!
  \*****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createThumbnail: () => (/* binding */ createThumbnail)
/* harmony export */ });
/* harmony import */ var _core_ui_thumbnail_thumbnail_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ui/thumbnail/thumbnail-core.js */ "./node_modules/@videojs/core/dist/dev/core/ui/thumbnail/thumbnail-core.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/listen.js");


//#region src/dom/ui/thumbnail.ts
function createThumbnail(options) {
	const { getContainer, getImg, onStateChange } = options;
	const core = new _core_ui_thumbnail_thumbnail_core_js__WEBPACK_IMPORTED_MODULE_0__.ThumbnailCore();
	const abort = new AbortController();
	const signal = abort.signal;
	let loading = false;
	let error = false;
	let naturalWidth = 0;
	let naturalHeight = 0;
	let lastSrc = "";
	let imgBound = false;
	let resizeObserver = null;
	function onImgLoad() {
		const img = getImg();
		if (img) {
			naturalWidth = img.naturalWidth;
			naturalHeight = img.naturalHeight;
		}
		loading = false;
		error = false;
		onStateChange();
	}
	function onImgError() {
		loading = false;
		error = true;
		onStateChange();
	}
	function bindImg(img) {
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_1__.listen)(img, "load", onImgLoad, { signal });
		(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_1__.listen)(img, "error", onImgError, { signal });
	}
	function ensureBindings() {
		if (!imgBound) {
			const img = getImg();
			if (img) {
				bindImg(img);
				imgBound = true;
			}
		}
		if (!resizeObserver) {
			const container = getContainer();
			if (container) {
				resizeObserver = new ResizeObserver(onStateChange);
				resizeObserver.observe(container);
			}
		}
	}
	function updateSrc(url) {
		ensureBindings();
		const src = url ?? "";
		if (src === lastSrc) return;
		lastSrc = src;
		if (src) {
			loading = true;
			error = false;
		} else {
			loading = false;
			error = false;
			naturalWidth = 0;
			naturalHeight = 0;
		}
	}
	function connect() {
		ensureBindings();
		const img = getImg();
		if (img?.complete && lastSrc) {
			if (img.naturalWidth > 0) {
				naturalWidth = img.naturalWidth;
				naturalHeight = img.naturalHeight;
				loading = false;
				error = false;
			} else {
				loading = false;
				error = true;
			}
			onStateChange();
		}
	}
	function destroy() {
		abort.abort();
		resizeObserver?.disconnect();
		resizeObserver = null;
	}
	return {
		get loading() {
			return loading;
		},
		get error() {
			return error;
		},
		get naturalWidth() {
			return naturalWidth;
		},
		get naturalHeight() {
			return naturalHeight;
		},
		readConstraints() {
			const el = getContainer();
			if (!el) return {
				minWidth: 0,
				maxWidth: Infinity,
				minHeight: 0,
				maxHeight: Infinity
			};
			return core.parseConstraints(getComputedStyle(el));
		},
		updateSrc,
		connect,
		destroy
	};
}
//#endregion


//# sourceMappingURL=thumbnail.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/ui/tooltip/tooltip.js"
/*!***********************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/ui/tooltip/tooltip.js ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTooltip: () => (/* binding */ createTooltip)
/* harmony export */ });
/* harmony import */ var _popover_popover_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../popover/popover.js */ "./node_modules/@videojs/core/dist/dev/dom/ui/popover/popover.js");

//#region src/dom/ui/tooltip/tooltip.ts
/** Map popover reasons to tooltip reasons, filtering out click/outside-click. */
const REASON_MAP = {
	hover: "hover",
	focus: "focus",
	escape: "escape",
	blur: "blur",
	"imperative-action": "imperative-action"
};
function createTooltip(options) {
	const popoverOpts = {
		transition: options.transition,
		onOpenChange(open, details) {
			const reason = REASON_MAP[details.reason];
			if (!reason) return;
			const group = options.group?.();
			if (open) group?.notifyOpen();
			else group?.notifyClose();
			const tooltipDetails = details.event ? {
				reason,
				event: details.event
			} : { reason };
			options.onOpenChange(open, tooltipDetails);
		},
		closeOnEscape: () => true,
		closeOnOutsideClick: () => false,
		openOnHover: () => true,
		delay: () => {
			const group = options.group?.();
			if (group?.shouldSkipDelay()) return 0;
			return options.delay?.() ?? group?.delay ?? 600;
		},
		closeDelay: () => {
			const group = options.group?.();
			return options.closeDelay?.() ?? group?.closeDelay ?? 0;
		}
	};
	if (options.onOpenChangeComplete) popoverOpts.onOpenChangeComplete = options.onOpenChangeComplete;
	const popover = (0,_popover_popover_js__WEBPACK_IMPORTED_MODULE_0__.createPopover)(popoverOpts);
	let isPointerDown = false;
	const { onClick: _, ...baseTriggerProps } = popover.triggerProps;
	const triggerProps = {
		...baseTriggerProps,
		onPointerDown() {
			isPointerDown = true;
		},
		onPointerEnter(event) {
			if (options.disabled?.()) return;
			if (event.pointerType === "touch") return;
			baseTriggerProps.onPointerEnter(event);
		},
		onFocusIn(event) {
			if (options.disabled?.()) return;
			if (isPointerDown) {
				isPointerDown = false;
				return;
			}
			baseTriggerProps.onFocusIn(event);
		}
	};
	const popupProps = {
		...popover.popupProps,
		onPointerEnter(event) {
			if (options.disableHoverablePopup?.()) return;
			popover.popupProps.onPointerEnter(event);
		}
	};
	return {
		...popover,
		triggerProps,
		popupProps,
		get triggerElement() {
			return popover.triggerElement;
		},
		open: () => popover.open("hover"),
		close: (reason = "hover") => popover.close(reason)
	};
}
//#endregion


//# sourceMappingURL=tooltip.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/ui/transition.js"
/*!******************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/ui/transition.js ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTransition: () => (/* binding */ createTransition)
/* harmony export */ });
/* harmony import */ var _videojs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/store */ "./node_modules/@videojs/store/dist/dev/core/state.js");
/* harmony import */ var _videojs_utils_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/function */ "./node_modules/@videojs/utils/dist/function/noop.js");


//#region src/dom/ui/transition.ts
/**
* Manages open/close transition lifecycle via `createState`.
*
* **Open:** patches `{ active: true, status: 'starting' }`, then after a
* double-RAF patches `{ status: 'idle' }` so the browser paints the
* initial ("from") state before transitioning.
*
* **Close:** patches `{ status: 'ending' }` (keeping `active: true` so the
* element stays mounted), then after a double-RAF waits for
* `getAnimations()` to settle before patching `{ active: false, status: 'idle' }`.
*/
function createTransition() {
	const state = (0,_videojs_store__WEBPACK_IMPORTED_MODULE_0__.createState)({
		active: false,
		status: "idle"
	});
	let destroyed = false;
	let rafId1 = 0;
	let rafId2 = 0;
	function open() {
		cancelAnimationFrame(rafId1);
		cancelAnimationFrame(rafId2);
		rafId1 = 0;
		rafId2 = 0;
		state.patch({
			active: true,
			status: "starting"
		});
		return new Promise((resolve) => {
			rafId1 = requestAnimationFrame(() => {
				rafId1 = 0;
				rafId2 = requestAnimationFrame(() => {
					rafId2 = 0;
					if (destroyed || !state.current.active) return resolve();
					state.patch({ status: "idle" });
					resolve();
				});
			});
		});
	}
	function close(el) {
		cancelAnimationFrame(rafId1);
		cancelAnimationFrame(rafId2);
		rafId1 = 0;
		rafId2 = 0;
		state.patch({ status: "ending" });
		return new Promise((resolve) => {
			rafId1 = requestAnimationFrame(() => {
				rafId1 = 0;
				rafId2 = requestAnimationFrame(() => {
					rafId2 = 0;
					if (destroyed) return resolve();
					waitForAnimations(el).finally(() => {
						if (destroyed || state.current.status !== "ending") return resolve();
						state.patch({
							active: false,
							status: "idle"
						});
						resolve();
					});
				});
			});
		});
	}
	function cancel() {
		cancelAnimationFrame(rafId1);
		cancelAnimationFrame(rafId2);
		rafId1 = 0;
		rafId2 = 0;
		if (state.current.status !== "idle") state.patch({ status: "idle" });
	}
	return {
		state,
		open,
		close,
		cancel,
		destroy() {
			if (destroyed) return;
			destroyed = true;
			cancel();
		}
	};
}
function waitForAnimations(el) {
	if (!el) return Promise.resolve();
	const animations = el.getAnimations?.() ?? [];
	if (animations.length === 0) return Promise.resolve();
	return Promise.all(animations.map((a) => a.finished)).then(_videojs_utils_function__WEBPACK_IMPORTED_MODULE_1__.noop, _videojs_utils_function__WEBPACK_IMPORTED_MODULE_1__.noop);
}
//#endregion


//# sourceMappingURL=transition.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/ui/wheel-step.js"
/*!******************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/ui/wheel-step.js ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWheelStep: () => (/* binding */ createWheelStep)
/* harmony export */ });
/* harmony import */ var _videojs_utils_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/utils/number */ "./node_modules/@videojs/utils/dist/number/number.js");

//#region src/dom/ui/wheel-step.ts
function createWheelStep(options) {
	return { onWheel(event) {
		if (options.isDisabled()) return;
		const direction = Math.sign(event.deltaY);
		if (direction === 0) return;
		event.preventDefault();
		const stepPercent = options.getStepPercent();
		const newPercent = (0,_videojs_utils_number__WEBPACK_IMPORTED_MODULE_0__.clamp)(options.getPercent() - direction * stepPercent, 0, 100);
		options.onValueChange?.(newPercent);
	} };
}
//#endregion


//# sourceMappingURL=wheel-step.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/utils/event.js"
/*!****************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/utils/event.js ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isEventWithinElement: () => (/* binding */ isEventWithinElement)
/* harmony export */ });
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");

//#region src/dom/utils/event.ts
function isEventWithinElement(event, element) {
	if (!element) return false;
	if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isFunction)(event.composedPath)) return event.composedPath().includes(element);
	const target = event.target;
	return target instanceof Node && element.contains(target);
}
//#endregion


//# sourceMappingURL=event.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/utils/layout.js"
/*!*****************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/utils/layout.js ***!
  \*****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDOMRect: () => (/* binding */ createDOMRect),
/* harmony export */   forceLayout: () => (/* binding */ forceLayout),
/* harmony export */   getPositioningBoundaryRect: () => (/* binding */ getPositioningBoundaryRect),
/* harmony export */   intersectDOMRects: () => (/* binding */ intersectDOMRects),
/* harmony export */   resolvePositioningBoundary: () => (/* binding */ resolvePositioningBoundary)
/* harmony export */ });
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");

//#region src/dom/utils/layout.ts
function forceLayout(element) {
	element?.getBoundingClientRect();
}
function createDOMRect(left, top, width, height) {
	const right = left + width;
	const bottom = top + height;
	return {
		x: left,
		y: top,
		width,
		height,
		top,
		right,
		bottom,
		left,
		toJSON() {
			return {
				x: left,
				y: top,
				width,
				height,
				top,
				right,
				bottom,
				left
			};
		}
	};
}
function intersectDOMRects(firstRect, secondRect) {
	const left = Math.max(firstRect.left, secondRect.left);
	const top = Math.max(firstRect.top, secondRect.top);
	const right = Math.min(firstRect.right, secondRect.right);
	const bottom = Math.min(firstRect.bottom, secondRect.bottom);
	return createDOMRect(left, top, Math.max(0, right - left), Math.max(0, bottom - top));
}
function getPositioningBoundaryRect(boundaryElement) {
	const viewportRect = document.documentElement.getBoundingClientRect();
	return boundaryElement ? intersectDOMRects(viewportRect, boundaryElement.getBoundingClientRect()) : viewportRect;
}
function resolvePositioningBoundary(boundary, options = {}) {
	if (!boundary) return null;
	if (!(0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_0__.isString)(boundary)) return boundary;
	if (boundary === "viewport") return null;
	if (boundary === "container") return options.container ?? null;
	try {
		return (options.root ?? document).querySelector(boundary);
	} catch {
		return null;
	}
}
//#endregion


//# sourceMappingURL=layout.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/utils/log.js"
/*!**************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/utils/log.js ***!
  \**************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logMissingFeature: () => (/* binding */ logMissingFeature)
/* harmony export */ });
//#region src/dom/utils/log.ts
const warned = /* @__PURE__ */ new Set();
function logMissingFeature(displayName, featureName) {
	const key = `${displayName}:${featureName}`;
	if (warned.has(key)) return;
	warned.add(key);
	console.warn(`${displayName} requires ${featureName} feature`);
}
//#endregion


//# sourceMappingURL=log.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/utils/pointer.js"
/*!******************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/utils/pointer.js ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPercentFromPointerEvent: () => (/* binding */ getPercentFromPointerEvent)
/* harmony export */ });
/* harmony import */ var _videojs_utils_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/utils/number */ "./node_modules/@videojs/utils/dist/number/number.js");

//#region src/dom/utils/pointer.ts
/** Convert a pointer event position to a 0–100 percent along an element's rect. */
function getPercentFromPointerEvent(event, rect, orientation, isRTL) {
	let ratio;
	if (orientation === "vertical") ratio = 1 - (event.clientY - rect.top) / rect.height;
	else if (isRTL) ratio = (rect.right - event.clientX) / rect.width;
	else ratio = (event.clientX - rect.left) / rect.width;
	if (!Number.isFinite(ratio)) return 0;
	return (0,_videojs_utils_number__WEBPACK_IMPORTED_MODULE_0__.clamp)(ratio * 100, 0, 100);
}
//#endregion


//# sourceMappingURL=pointer.js.map

/***/ },

/***/ "./node_modules/@videojs/core/dist/dev/dom/utils/state-data-attrs.js"
/*!***************************************************************************!*\
  !*** ./node_modules/@videojs/core/dist/dev/dom/utils/state-data-attrs.js ***!
  \***************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyStateDataAttrs: () => (/* binding */ applyStateDataAttrs),
/* harmony export */   getStateDataAttrs: () => (/* binding */ getStateDataAttrs)
/* harmony export */ });
//#region src/dom/utils/state-data-attrs.ts
/**
* Convert state object to data attributes.
*
* - `true` → `data-keyname=""`
* - truthy string/number → `data-keyname="value"`
* - falsy → no attribute
*
* @example
* ```ts
* const state = { paused: true, ended: false, volume: 0.5 };
* getStateDataAttrs(state);
* // { 'data-paused': '', 'data-volume': '0.5' }
* ```
*
* When a mapping is provided, only mapped keys are converted.
*/
function getStateDataAttrs(state, map) {
	const attrs = {};
	for (const key in state) {
		if (map && !(key in map)) continue;
		const name = map?.[key] ?? toDataAttrName(key), value = state[key];
		if (value === true) attrs[name] = "";
		else if (value) attrs[name] = String(value);
	}
	return attrs;
}
/**
* Apply state as data attributes to an element.
*
* - `true` → sets `data-keyname=""`
* - truthy string/number → sets `data-keyname="value"`
* - falsy → removes the attribute
*
* @example
* ```ts
* const state = { paused: true, ended: false };
* applyStateDataAttrs(element, state);
* // element has data-paused="", data-ended is removed
* ```
*/
function applyStateDataAttrs(element, state, map) {
	for (const key in state) {
		if (map && !(key in map)) continue;
		const name = map?.[key] ?? toDataAttrName(key), value = state[key];
		if (value === true) element.setAttribute(name, "");
		else if (value) element.setAttribute(name, String(value));
		else element.removeAttribute(name);
	}
}
function toDataAttrName(key) {
	return `data-${key.toLowerCase()}`;
}
//#endregion


//# sourceMappingURL=state-data-attrs.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/_virtual/_rolldown/runtime.js"
/*!****************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/_virtual/_rolldown/runtime.js ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __exportAll: () => (/* binding */ __exportAll)
/* harmony export */ });
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion



/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/media/video.js"
/*!*************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/media/video.js ***!
  \*************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Video: () => (/* binding */ Video)
/* harmony export */ });
/* harmony import */ var _utils_use_composed_refs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/use-composed-refs.js */ "./node_modules/@videojs/react/dist/dev/utils/use-composed-refs.js");
/* harmony import */ var _player_context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player/context.js */ "./node_modules/@videojs/react/dist/dev/player/context.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
"use client";




//#region src/media/video.tsx
const Video = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function Video({ children, ...props }, ref) {
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("video", {
		ref: (0,_utils_use_composed_refs_js__WEBPACK_IMPORTED_MODULE_0__.useComposedRefs)(ref, (0,_player_context_js__WEBPACK_IMPORTED_MODULE_1__.useMediaAttach)()),
		...props,
		children
	});
});
//#endregion


//# sourceMappingURL=video.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/player/context.js"
/*!****************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/player/context.js ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Container: () => (/* binding */ Container),
/* harmony export */   PlayerContextProvider: () => (/* binding */ PlayerContextProvider),
/* harmony export */   useContainer: () => (/* binding */ useContainer),
/* harmony export */   useContainerAttach: () => (/* binding */ useContainerAttach),
/* harmony export */   useMedia: () => (/* binding */ useMedia),
/* harmony export */   useMediaAttach: () => (/* binding */ useMediaAttach),
/* harmony export */   useOptionalContainer: () => (/* binding */ useOptionalContainer),
/* harmony export */   useOptionalPlayer: () => (/* binding */ useOptionalPlayer),
/* harmony export */   useOptionalPopupGroup: () => (/* binding */ useOptionalPopupGroup),
/* harmony export */   usePlayer: () => (/* binding */ usePlayer),
/* harmony export */   usePlayerContext: () => (/* binding */ usePlayerContext)
/* harmony export */ });
/* harmony import */ var _utils_use_composed_refs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/use-composed-refs.js */ "./node_modules/@videojs/react/dist/dev/utils/use-composed-refs.js");
/* harmony import */ var _videojs_store_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/store/react */ "./node_modules/@videojs/store/dist/dev/react/hooks/use-store.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
"use client";




//#region src/player/context.tsx
const PlayerContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);
const EMPTY_UNSUBSCRIBE = () => {};
const EMPTY_STORE = {
	state: {},
	subscribe: () => EMPTY_UNSUBSCRIBE
};
function PlayerContextProvider({ value, children }) {
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(PlayerContext.Provider, {
		value,
		children
	});
}
/** Access the full player context value. Throws if used outside a Player Provider. */
function usePlayerContext() {
	const ctx = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(PlayerContext);
	if (!ctx) throw new Error("usePlayerContext must be used within a Player Provider");
	return ctx;
}
function usePlayer(selector) {
	const { store } = usePlayerContext();
	return (0,_videojs_store_react__WEBPACK_IMPORTED_MODULE_1__.useStore)(store, selector);
}
function useOptionalPlayer(selector) {
	const ctx = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(PlayerContext);
	const value = (0,_videojs_store_react__WEBPACK_IMPORTED_MODULE_1__.useStore)(ctx?.store ?? EMPTY_STORE, ctx ? selector : void 0);
	return ctx ? value : void 0;
}
/** Access the media element from within a Player Provider. */
function useMedia() {
	const { media } = usePlayerContext();
	return media;
}
/** Access the container element from within a Player Provider. */
function useContainer() {
	const { container } = usePlayerContext();
	return container;
}
/** Access the container element when a Player Provider is available. */
function useOptionalContainer() {
	return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(PlayerContext)?.container ?? null;
}
/** Access the interactive popup group when a Player Provider is available. */
function useOptionalPopupGroup() {
	return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(PlayerContext)?.popupGroup;
}
/** Access the media attach setter for connecting a media element to the player. */
function useMediaAttach() {
	return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(PlayerContext)?.setMedia;
}
/** Access the container attach setter for connecting a container element to the player. */
function useContainerAttach() {
	return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(PlayerContext)?.setContainer;
}
const Container = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function Container({ children, tabIndex = 0, ...props }, ref) {
	const setContainer = useContainerAttach();
	const internalRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
	const composedRef = (0,_utils_use_composed_refs_js__WEBPACK_IMPORTED_MODULE_0__.useComposedRefs)(ref, internalRef);
	(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
		setContainer?.(internalRef.current);
		return () => setContainer?.(null);
	}, [setContainer]);
	const handlePointerUp = (event) => {
		props.onPointerUp?.(event);
		const el = internalRef.current;
		if (!el) return;
		if (!el.contains(document.activeElement) || document.activeElement === document.body) el.focus({ preventScroll: true });
	};
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
		ref: composedRef,
		tabIndex,
		...props,
		onPointerUp: handlePointerUp,
		children
	});
});
//#endregion


//# sourceMappingURL=context.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/player/create-player.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/player/create-player.js ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPlayer: () => (/* binding */ createPlayer)
/* harmony export */ });
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/player/context.js");
/* harmony import */ var _utils_use_destroy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/use-destroy.js */ "./node_modules/@videojs/react/dist/dev/utils/use-destroy.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/ui/popover/popup-group.js");
/* harmony import */ var _videojs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/store */ "./node_modules/@videojs/store/dist/dev/core/combine.js");
/* harmony import */ var _videojs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @videojs/store */ "./node_modules/@videojs/store/dist/dev/core/store.js");
/* harmony import */ var _videojs_store_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @videojs/store/react */ "./node_modules/@videojs/store/dist/dev/react/hooks/use-store.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
"use client";







//#region src/player/create-player.tsx
function createPlayer(config) {
	function Provider({ children }) {
		const [store] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(() => (0,_videojs_store__WEBPACK_IMPORTED_MODULE_4__.createStore)()((0,_videojs_store__WEBPACK_IMPORTED_MODULE_3__.combine)(...config.features)));
		const [popupGroup] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(() => (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_2__.createPopupGroup)());
		const [media, setMedia] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
		const [container, setContainer] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
		(0,_utils_use_destroy_js__WEBPACK_IMPORTED_MODULE_1__.useDestroy)(store);
		(0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
			if (!media) return;
			return store.attach({
				media,
				container
			});
		}, [
			media,
			container,
			store
		]);
		return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_context_js__WEBPACK_IMPORTED_MODULE_0__.PlayerContextProvider, {
			value: {
				store,
				media,
				setMedia,
				container,
				setContainer,
				popupGroup
			},
			children
		});
	}
	if (config.displayName) Provider.displayName = `${config.displayName}.Provider`;
	function usePlayer(selector) {
		const { store } = (0,_context_js__WEBPACK_IMPORTED_MODULE_0__.usePlayerContext)();
		return (0,_videojs_store_react__WEBPACK_IMPORTED_MODULE_5__.useStore)(store, selector);
	}
	return {
		Provider,
		Container: _context_js__WEBPACK_IMPORTED_MODULE_0__.Container,
		usePlayer,
		useMedia: _context_js__WEBPACK_IMPORTED_MODULE_0__.useMedia
	};
}
//#endregion


//# sourceMappingURL=create-player.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/alert-dialog/alert-dialog-close.js"
/*!************************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/alert-dialog/alert-dialog-close.js ***!
  \************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertDialogClose: () => (/* binding */ AlertDialogClose)
/* harmony export */ });
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/alert-dialog/context.js");
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
"use client";



//#region src/ui/alert-dialog/alert-dialog-close.tsx
const AlertDialogClose = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function AlertDialogClose({ render, className, style, disabled, ...elementProps }, forwardedRef) {
	const { dialog, state } = (0,_context_js__WEBPACK_IMPORTED_MODULE_0__.useAlertDialogContext)();
	const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
		if (disabled) return;
		dialog.close();
	}, [dialog, disabled]);
	return (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_1__.renderElement)("button", {
		render,
		className,
		style
	}, {
		state,
		ref: [forwardedRef],
		props: [{
			type: "button",
			disabled,
			onClick: handleClick
		}, elementProps]
	});
});
//#endregion


//# sourceMappingURL=alert-dialog-close.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/alert-dialog/alert-dialog-description.js"
/*!******************************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/alert-dialog/alert-dialog-description.js ***!
  \******************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertDialogDescription: () => (/* binding */ AlertDialogDescription)
/* harmony export */ });
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/alert-dialog/context.js");
/* harmony import */ var _create_context_part_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create-context-part.js */ "./node_modules/@videojs/react/dist/dev/ui/create-context-part.js");
"use client";


//#region src/ui/alert-dialog/alert-dialog-description.tsx
const AlertDialogDescription = (0,_create_context_part_js__WEBPACK_IMPORTED_MODULE_1__.createContextPart)({
	displayName: "AlertDialogDescription",
	tag: "p",
	useContext: _context_js__WEBPACK_IMPORTED_MODULE_0__.useAlertDialogContext,
	getProps: (state) => ({ id: state.descriptionId })
});
//#endregion


//# sourceMappingURL=alert-dialog-description.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/alert-dialog/alert-dialog-popup.js"
/*!************************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/alert-dialog/alert-dialog-popup.js ***!
  \************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertDialogPopup: () => (/* binding */ AlertDialogPopup)
/* harmony export */ });
/* harmony import */ var _utils_use_composed_refs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/use-composed-refs.js */ "./node_modules/@videojs/react/dist/dev/utils/use-composed-refs.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/alert-dialog/context.js");
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
"use client";




//#region src/ui/alert-dialog/alert-dialog-popup.tsx
const AlertDialogPopup = (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function AlertDialogPopup({ render, className, style, ...elementProps }, forwardedRef) {
	const { core, dialog, state, stateAttrMap } = (0,_context_js__WEBPACK_IMPORTED_MODULE_1__.useAlertDialogContext)();
	const composedRef = (0,_utils_use_composed_refs_js__WEBPACK_IMPORTED_MODULE_0__.useComposedRefs)(forwardedRef, (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((el) => {
		dialog.setElement(el);
	}, [dialog]));
	if (!state.open) return null;
	return (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_2__.renderElement)("div", {
		render,
		className,
		style
	}, {
		state,
		stateAttrMap,
		ref: composedRef,
		props: [{
			tabIndex: -1,
			...core.getAttrs(state)
		}, elementProps]
	});
});
//#endregion


//# sourceMappingURL=alert-dialog-popup.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/alert-dialog/alert-dialog-root.js"
/*!***********************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/alert-dialog/alert-dialog-root.js ***!
  \***********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertDialogRoot: () => (/* binding */ AlertDialogRoot)
/* harmony export */ });
/* harmony import */ var _utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/use-latest-ref.js */ "./node_modules/@videojs/react/dist/dev/utils/use-latest-ref.js");
/* harmony import */ var _utils_use_destroy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/use-destroy.js */ "./node_modules/@videojs/react/dist/dev/utils/use-destroy.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/alert-dialog/context.js");
/* harmony import */ var _utils_use_safe_id_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/use-safe-id.js */ "./node_modules/@videojs/react/dist/dev/utils/use-safe-id.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/ui/alert-dialog.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/ui/transition.js");
/* harmony import */ var _videojs_store_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @videojs/store/react */ "./node_modules/@videojs/store/dist/dev/react/hooks/use-snapshot.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/alert-dialog/alert-dialog-core.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/alert-dialog/alert-dialog-data-attrs.js");
"use client";









//#region src/ui/alert-dialog/alert-dialog-root.tsx
function AlertDialogRoot({ open: controlledOpen, defaultOpen = _videojs_core__WEBPACK_IMPORTED_MODULE_9__.AlertDialogCore.defaultProps.defaultOpen, onOpenChange: onOpenChangeProp, onOpenChangeComplete: onOpenChangeCompleteProp, children }) {
	const [core] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(() => new _videojs_core__WEBPACK_IMPORTED_MODULE_9__.AlertDialogCore());
	const isControlled = controlledOpen !== void 0;
	const onOpenChangeRef = (0,_utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_0__.useLatestRef)(onOpenChangeProp);
	const onOpenChangeCompleteRef = (0,_utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_0__.useLatestRef)(onOpenChangeCompleteProp);
	const [dialog] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(() => {
		const instance = (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_4__.createAlertDialog)({
			transition: (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_5__.createTransition)(),
			onOpenChange: (nextOpen) => {
				onOpenChangeRef.current?.(nextOpen);
			},
			onOpenChangeComplete: (nextOpen) => {
				onOpenChangeCompleteRef.current?.(nextOpen);
			}
		});
		if (!isControlled && defaultOpen) instance.open();
		return instance;
	});
	const titleId = (0,_utils_use_safe_id_js__WEBPACK_IMPORTED_MODULE_3__.useSafeId)("alert-dialog-title");
	const descriptionId = (0,_utils_use_safe_id_js__WEBPACK_IMPORTED_MODULE_3__.useSafeId)("alert-dialog-desc");
	core.setTitleId(titleId);
	core.setDescriptionId(descriptionId);
	(0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
		if (controlledOpen === void 0) return;
		const { active: inputOpen } = dialog.input.current;
		if (controlledOpen === inputOpen) return;
		if (controlledOpen) dialog.open();
		else dialog.close();
	}, [controlledOpen, dialog]);
	(0,_utils_use_destroy_js__WEBPACK_IMPORTED_MODULE_1__.useDestroy)(dialog);
	const input = (0,_videojs_store_react__WEBPACK_IMPORTED_MODULE_6__.useSnapshot)(dialog.input);
	core.setInput(input);
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_context_js__WEBPACK_IMPORTED_MODULE_2__.AlertDialogContextProvider, {
		value: {
			core,
			dialog,
			state: core.getState(),
			stateAttrMap: _videojs_core__WEBPACK_IMPORTED_MODULE_10__.AlertDialogDataAttrs
		},
		children
	});
}
//#endregion


//# sourceMappingURL=alert-dialog-root.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/alert-dialog/alert-dialog-title.js"
/*!************************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/alert-dialog/alert-dialog-title.js ***!
  \************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertDialogTitle: () => (/* binding */ AlertDialogTitle)
/* harmony export */ });
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/alert-dialog/context.js");
/* harmony import */ var _create_context_part_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create-context-part.js */ "./node_modules/@videojs/react/dist/dev/ui/create-context-part.js");
"use client";


//#region src/ui/alert-dialog/alert-dialog-title.tsx
const AlertDialogTitle = (0,_create_context_part_js__WEBPACK_IMPORTED_MODULE_1__.createContextPart)({
	displayName: "AlertDialogTitle",
	tag: "h2",
	useContext: _context_js__WEBPACK_IMPORTED_MODULE_0__.useAlertDialogContext,
	getProps: (state) => ({ id: state.titleId })
});
//#endregion


//# sourceMappingURL=alert-dialog-title.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/alert-dialog/context.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/alert-dialog/context.js ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertDialogContextProvider: () => (/* binding */ AlertDialogContextProvider),
/* harmony export */   useAlertDialogContext: () => (/* binding */ useAlertDialogContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";

//#region src/ui/alert-dialog/context.tsx
const AlertDialogContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const AlertDialogContextProvider = AlertDialogContext.Provider;
function useAlertDialogContext() {
	const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AlertDialogContext);
	if (!ctx) throw new Error("AlertDialog compound components must be used within an AlertDialog.Root");
	return ctx;
}
//#endregion


//# sourceMappingURL=context.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/alert-dialog/index.parts.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/alert-dialog/index.parts.js ***!
  \*****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   index_parts_exports: () => (/* binding */ index_parts_exports)
/* harmony export */ });
/* harmony import */ var _virtual_rolldown_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_virtual/_rolldown/runtime.js */ "./node_modules/@videojs/react/dist/dev/_virtual/_rolldown/runtime.js");
/* harmony import */ var _alert_dialog_close_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-dialog-close.js */ "./node_modules/@videojs/react/dist/dev/ui/alert-dialog/alert-dialog-close.js");
/* harmony import */ var _alert_dialog_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert-dialog-description.js */ "./node_modules/@videojs/react/dist/dev/ui/alert-dialog/alert-dialog-description.js");
/* harmony import */ var _alert_dialog_popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-dialog-popup.js */ "./node_modules/@videojs/react/dist/dev/ui/alert-dialog/alert-dialog-popup.js");
/* harmony import */ var _alert_dialog_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert-dialog-root.js */ "./node_modules/@videojs/react/dist/dev/ui/alert-dialog/alert-dialog-root.js");
/* harmony import */ var _alert_dialog_title_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert-dialog-title.js */ "./node_modules/@videojs/react/dist/dev/ui/alert-dialog/alert-dialog-title.js");






//#region src/ui/alert-dialog/index.parts.ts
var index_parts_exports = /* @__PURE__ */ (0,_virtual_rolldown_runtime_js__WEBPACK_IMPORTED_MODULE_0__.__exportAll)({
	Close: () => _alert_dialog_close_js__WEBPACK_IMPORTED_MODULE_1__.AlertDialogClose,
	Description: () => _alert_dialog_description_js__WEBPACK_IMPORTED_MODULE_2__.AlertDialogDescription,
	Popup: () => _alert_dialog_popup_js__WEBPACK_IMPORTED_MODULE_3__.AlertDialogPopup,
	Root: () => _alert_dialog_root_js__WEBPACK_IMPORTED_MODULE_4__.AlertDialogRoot,
	Title: () => _alert_dialog_title_js__WEBPACK_IMPORTED_MODULE_5__.AlertDialogTitle
});
//#endregion


//# sourceMappingURL=index.parts.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/buffering-indicator/buffering-indicator.js"
/*!********************************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/buffering-indicator/buffering-indicator.js ***!
  \********************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BufferingIndicator: () => (/* binding */ BufferingIndicator)
/* harmony export */ });
/* harmony import */ var _player_context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../player/context.js */ "./node_modules/@videojs/react/dist/dev/player/context.js");
/* harmony import */ var _utils_use_destroy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/use-destroy.js */ "./node_modules/@videojs/react/dist/dev/utils/use-destroy.js");
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/store/selectors.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/utils/log.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/buffering-indicator/buffering-indicator-core.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/buffering-indicator/buffering-indicator-data-attrs.js");
"use client";






//#region src/ui/buffering-indicator/buffering-indicator.tsx
/**
* Displays a buffering indicator when media is waiting for data.
*
* Visibility is delayed (default 500ms) to avoid flashing on quick buffers.
*
* @example
* ```tsx
* <BufferingIndicator />
*
* <BufferingIndicator delay={1000} />
*
* <BufferingIndicator
*   render={(props, state) => (
*     <div {...props}>{state.visible && <Spinner />}</div>
*   )}
* />
* ```
*/
const BufferingIndicator = (0,react__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(function BufferingIndicator(componentProps, forwardedRef) {
	const { render, className, style, delay, ...elementProps } = componentProps;
	const playback = (0,_player_context_js__WEBPACK_IMPORTED_MODULE_0__.usePlayer)(_videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__.selectPlayback);
	const [core] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(() => new _videojs_core__WEBPACK_IMPORTED_MODULE_6__.BufferingIndicatorCore());
	(0,_utils_use_destroy_js__WEBPACK_IMPORTED_MODULE_1__.useDestroy)(core);
	core.setProps({ delay });
	if (playback) core.update(playback);
	const state = (0,react__WEBPACK_IMPORTED_MODULE_5__.useSyncExternalStore)((cb) => core.state.subscribe(cb), () => core.state.current, () => core.state.current);
	if (!playback) {
		(0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_4__.logMissingFeature)("BufferingIndicator", "playback");
		return null;
	}
	return (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_2__.renderElement)("div", {
		render,
		className,
		style
	}, {
		state,
		stateAttrMap: _videojs_core__WEBPACK_IMPORTED_MODULE_7__.BufferingIndicatorDataAttrs,
		ref: [forwardedRef],
		props: [elementProps]
	});
});
//#endregion


//# sourceMappingURL=buffering-indicator.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/controls/context.js"
/*!*********************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/controls/context.js ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlsContextProvider: () => (/* binding */ ControlsContextProvider),
/* harmony export */   useControlsContext: () => (/* binding */ useControlsContext),
/* harmony export */   useOptionalControlsContext: () => (/* binding */ useOptionalControlsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";

//#region src/ui/controls/context.tsx
const ControlsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const ControlsContextProvider = ControlsContext.Provider;
function useControlsContext() {
	const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ControlsContext);
	if (!ctx) throw new Error("Controls compound components must be used within a Controls.Root");
	return ctx;
}
function useOptionalControlsContext() {
	return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ControlsContext);
}
//#endregion


//# sourceMappingURL=context.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/controls/controls-group.js"
/*!****************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/controls/controls-group.js ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlsGroup: () => (/* binding */ ControlsGroup)
/* harmony export */ });
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/controls/context.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
"use client";



//#region src/ui/controls/controls-group.tsx
/** Layout group for related controls; sets `role="group"` when labeled. */
const ControlsGroup = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function ControlsGroup(componentProps, forwardedRef) {
	const { render, className, style, children, ...elementProps } = componentProps;
	const { state, stateAttrMap } = (0,_context_js__WEBPACK_IMPORTED_MODULE_1__.useControlsContext)();
	const role = elementProps["aria-label"] || elementProps["aria-labelledby"] ? "group" : void 0;
	return (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_0__.renderElement)("div", {
		render,
		className,
		style
	}, {
		state,
		stateAttrMap,
		ref: [forwardedRef],
		props: [{
			role,
			children
		}, elementProps]
	});
});
//#endregion


//# sourceMappingURL=controls-group.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/controls/controls-root.js"
/*!***************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/controls/controls-root.js ***!
  \***************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlsRoot: () => (/* binding */ ControlsRoot)
/* harmony export */ });
/* harmony import */ var _player_context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../player/context.js */ "./node_modules/@videojs/react/dist/dev/player/context.js");
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/controls/context.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/store/selectors.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/utils/log.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/controls/controls-core.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/controls/controls-data-attrs.js");
"use client";







//#region src/ui/controls/controls-root.tsx
/** Root container for player controls state and rendered control content. */
const ControlsRoot = (0,react__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(function ControlsRoot(componentProps, forwardedRef) {
	const { render, className, style, children, ...elementProps } = componentProps;
	const controls = (0,_player_context_js__WEBPACK_IMPORTED_MODULE_0__.usePlayer)(_videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__.selectControls);
	const [core] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(() => new _videojs_core__WEBPACK_IMPORTED_MODULE_7__.ControlsCore());
	if (!controls) {
		(0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_4__.logMissingFeature)("Controls.Root", "controls");
		return null;
	}
	core.setMedia(controls);
	const state = core.getState();
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_context_js__WEBPACK_IMPORTED_MODULE_2__.ControlsContextProvider, {
		value: {
			state,
			stateAttrMap: _videojs_core__WEBPACK_IMPORTED_MODULE_8__.ControlsDataAttrs
		},
		children: (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_1__.renderElement)("div", {
			render,
			className,
			style
		}, {
			state,
			stateAttrMap: _videojs_core__WEBPACK_IMPORTED_MODULE_8__.ControlsDataAttrs,
			ref: [forwardedRef],
			props: [{ children }, elementProps]
		})
	});
});
//#endregion


//# sourceMappingURL=controls-root.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/controls/index.parts.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/controls/index.parts.js ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   index_parts_exports: () => (/* binding */ index_parts_exports)
/* harmony export */ });
/* harmony import */ var _virtual_rolldown_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_virtual/_rolldown/runtime.js */ "./node_modules/@videojs/react/dist/dev/_virtual/_rolldown/runtime.js");
/* harmony import */ var _controls_group_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls-group.js */ "./node_modules/@videojs/react/dist/dev/ui/controls/controls-group.js");
/* harmony import */ var _controls_root_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls-root.js */ "./node_modules/@videojs/react/dist/dev/ui/controls/controls-root.js");



//#region src/ui/controls/index.parts.ts
var index_parts_exports = /* @__PURE__ */ (0,_virtual_rolldown_runtime_js__WEBPACK_IMPORTED_MODULE_0__.__exportAll)({
	Group: () => _controls_group_js__WEBPACK_IMPORTED_MODULE_1__.ControlsGroup,
	Root: () => _controls_root_js__WEBPACK_IMPORTED_MODULE_2__.ControlsRoot
});
//#endregion


//# sourceMappingURL=index.parts.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/create-context-part.js"
/*!************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/create-context-part.js ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContextPart: () => (/* binding */ createContextPart)
/* harmony export */ });
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
"use client";


//#region src/ui/create-context-part.tsx
function createContextPart(config) {
	const { displayName, tag, useContext, staticProps, getProps } = config;
	const Component = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function ContextPart(componentProps, forwardedRef) {
		const { render, className, style, ...elementProps } = componentProps;
		const context = useContext();
		const dynamicProps = getProps?.(context.state);
		return (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_0__.renderElement)(tag, {
			render,
			className,
			style
		}, {
			state: context.state,
			stateAttrMap: context.stateAttrMap,
			ref: forwardedRef,
			props: [
				staticProps,
				dynamicProps,
				elementProps
			].filter(Boolean)
		});
	});
	Component.displayName = displayName;
	return Component;
}
//#endregion


//# sourceMappingURL=create-context-part.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/create-media-button.js"
/*!************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/create-media-button.js ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMediaButton: () => (/* binding */ createMediaButton)
/* harmony export */ });
/* harmony import */ var _player_context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../player/context.js */ "./node_modules/@videojs/react/dist/dev/player/context.js");
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var _hooks_use_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/use-button.js */ "./node_modules/@videojs/react/dist/dev/ui/hooks/use-button.js");
/* harmony import */ var _hotkey_use_aria_key_shortcuts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hotkey/use-aria-key-shortcuts.js */ "./node_modules/@videojs/react/dist/dev/ui/hotkey/use-aria-key-shortcuts.js");
/* harmony import */ var _tooltip_context_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip/context.js */ "./node_modules/@videojs/react/dist/dev/ui/tooltip/context.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/utils/log.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
"use client";







//#region src/ui/create-media-button.tsx
/** Creates a media button React component from a core class and config. */
function createMediaButton(config) {
	const { displayName, core: CoreClass, stateAttrMap, selector, action, hotkeyAction } = config;
	const corePropKeys = new Set(Object.keys(CoreClass.defaultProps));
	const Component = (0,react__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function MediaButton(componentProps, forwardedRef) {
		const { render, className, style, ...rest } = componentProps;
		const coreProps = {};
		const elementProps = {};
		for (const key of Object.keys(rest)) if (corePropKeys.has(key)) coreProps[key] = rest[key];
		else elementProps[key] = rest[key];
		const tooltipCtx = (0,_tooltip_context_js__WEBPACK_IMPORTED_MODULE_4__.useOptionalTooltipContext)();
		const feature = (0,_player_context_js__WEBPACK_IMPORTED_MODULE_0__.usePlayer)(selector);
		const shortcuts = (0,_hotkey_use_aria_key_shortcuts_js__WEBPACK_IMPORTED_MODULE_3__.useAriaKeyShortcuts)(hotkeyAction);
		const [core] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(() => new CoreClass());
		core.setProps(coreProps);
		const { getButtonProps, buttonRef } = (0,_hooks_use_button_js__WEBPACK_IMPORTED_MODULE_2__.useButton)({
			displayName,
			onActivate: () => action(core, feature),
			isDisabled: () => !!coreProps.disabled || !feature
		});
		if (feature) core.setMedia(feature);
		const state = feature ? core.getState() : null;
		const label = state ? core.getLabel(state) : void 0;
		(0,react__WEBPACK_IMPORTED_MODULE_6__.useLayoutEffect)(() => {
			if (!tooltipCtx) return;
			tooltipCtx.setContent(label);
			return () => tooltipCtx.setContent(void 0);
		}, [tooltipCtx, label]);
		if (!feature || !state) {
			(0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_5__.logMissingFeature)(displayName, selector.displayName ?? displayName);
			return null;
		}
		const attrs = {
			...core.getAttrs(state),
			"aria-keyshortcuts": shortcuts
		};
		return (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_1__.renderElement)("button", {
			render,
			className,
			style
		}, {
			state,
			stateAttrMap,
			ref: [forwardedRef, buttonRef],
			props: [
				attrs,
				elementProps,
				getButtonProps()
			]
		});
	});
	Component.displayName = displayName;
	return Component;
}
//#endregion


//# sourceMappingURL=create-media-button.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/fullscreen-button/fullscreen-button.js"
/*!****************************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/fullscreen-button/fullscreen-button.js ***!
  \****************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullscreenButton: () => (/* binding */ FullscreenButton)
/* harmony export */ });
/* harmony import */ var _create_media_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-media-button.js */ "./node_modules/@videojs/react/dist/dev/ui/create-media-button.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/store/selectors.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/fullscreen-button/fullscreen-button-core.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/fullscreen-button/fullscreen-button-data-attrs.js");
"use client";



//#region src/ui/fullscreen-button/fullscreen-button.tsx
/** A button that toggles fullscreen. */
const FullscreenButton = (0,_create_media_button_js__WEBPACK_IMPORTED_MODULE_0__.createMediaButton)({
	displayName: "FullscreenButton",
	core: _videojs_core__WEBPACK_IMPORTED_MODULE_2__.FullscreenButtonCore,
	stateAttrMap: _videojs_core__WEBPACK_IMPORTED_MODULE_3__.FullscreenButtonDataAttrs,
	selector: _videojs_core_dom__WEBPACK_IMPORTED_MODULE_1__.selectFullscreen,
	action: (core, state) => core.toggle(state),
	hotkeyAction: "toggleFullscreen"
});
//#endregion


//# sourceMappingURL=fullscreen-button.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/hooks/use-button.js"
/*!*********************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/hooks/use-button.js ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useButton: () => (/* binding */ useButton)
/* harmony export */ });
/* harmony import */ var _utils_merge_props_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/merge-props.js */ "./node_modules/@videojs/react/dist/dev/utils/merge-props.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/ui/button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
"use client";



//#region src/ui/hooks/use-button.ts
/**
* Hook for button behavior with keyboard and pointer interaction.
*
* @example
* ```tsx
* const { getButtonProps, buttonRef } = useButton({
*   displayName: 'PlayButton',
*   onActivate: () => togglePlayback(),
*   isDisabled: () => disabled,
* });
*
* return useRender('button', componentProps, {
*   state,
*   ref: [forwardedRef, buttonRef],
*   props: [elementProps, getButtonProps],
* });
* ```
*
* @param params - Button configuration with activation handler and disabled check.
*/
function useButton(params) {
	const { displayName, onActivate, isDisabled } = params;
	const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((element) => {
		if (element && element.tagName !== "BUTTON") console.warn(`${displayName} should render a <button> element for accessibility`);
	}, [displayName]);
	return {
		getButtonProps: (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((externalProps) => {
			return (0,_utils_merge_props_js__WEBPACK_IMPORTED_MODULE_0__.mergeProps)((0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_1__.createButton)({
				onActivate,
				isDisabled
			}), externalProps);
		}, [onActivate, isDisabled]),
		buttonRef
	};
}
//#endregion


//# sourceMappingURL=use-button.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/hooks/use-slider.js"
/*!*********************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/hooks/use-slider.js ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSlider: () => (/* binding */ useSlider)
/* harmony export */ });
/* harmony import */ var _utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/use-latest-ref.js */ "./node_modules/@videojs/react/dist/dev/utils/use-latest-ref.js");
/* harmony import */ var _utils_use_destroy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/use-destroy.js */ "./node_modules/@videojs/react/dist/dev/utils/use-destroy.js");
/* harmony import */ var _utils_use_force_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-force-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-force-render.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/ui/slider.js");
/* harmony import */ var _videojs_store_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @videojs/store/react */ "./node_modules/@videojs/store/dist/dev/react/hooks/use-snapshot.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/direction.js");
"use client";







//#region src/ui/hooks/use-slider.ts
/**
* Manages slider input lifecycle for React.
*
* Wraps `createSlider()` from `@videojs/core/dom` and subscribes to its
* input state via `useSnapshot`. Returns split props for the root
* (pointer events) and thumb (keyboard/focus) elements.
*/
function useSlider(options) {
	const optionsRef = (0,_utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_0__.useLatestRef)(options);
	const rootElementRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
	const thumbElementRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
	const forceRender = (0,_utils_use_force_render_js__WEBPACK_IMPORTED_MODULE_2__.useForceRender)();
	const [slider] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(() => {
		return (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__.createSlider)({
			getElement: () => rootElementRef.current,
			getThumbElement: () => thumbElementRef.current,
			getOrientation: () => optionsRef.current.orientation ?? "horizontal",
			isRTL: () => rootElementRef.current ? (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_6__.isRTL)(rootElementRef.current) : false,
			isDisabled: () => optionsRef.current.disabled ?? false,
			getPercent: () => optionsRef.current.getPercent(),
			getStepPercent: () => optionsRef.current.getStepPercent(),
			getLargeStepPercent: () => optionsRef.current.getLargeStepPercent(),
			changeThrottle: optionsRef.current.changeThrottle,
			adjustPercent: optionsRef.current.adjustPercent,
			onValueChange: (percent) => optionsRef.current.onValueChange?.(percent),
			onValueCommit: (percent) => optionsRef.current.onValueCommit?.(percent),
			onDragStart: () => optionsRef.current.onDragStart?.(),
			onDragEnd: () => optionsRef.current.onDragEnd?.()
		});
	});
	(0,_utils_use_destroy_js__WEBPACK_IMPORTED_MODULE_1__.useDestroy)(slider);
	const input = (0,_videojs_store_react__WEBPACK_IMPORTED_MODULE_4__.useSnapshot)(slider.input);
	const state = options.computeState(input);
	(0,react__WEBPACK_IMPORTED_MODULE_5__.useLayoutEffect)(() => {
		if (state.thumbAlignment === "edge" && rootElementRef.current && thumbElementRef.current) forceRender();
	}, [state.thumbAlignment]);
	return {
		state,
		cssVars: options.getCSSVars(slider.adjustForAlignment(state)),
		rootRef: (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((element) => {
			rootElementRef.current = element;
		}, []),
		thumbRef: (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((element) => {
			thumbElementRef.current = element;
		}, []),
		rootProps: slider.rootProps,
		rootStyle: slider.rootStyle,
		thumbProps: slider.thumbProps
	};
}
//#endregion


//# sourceMappingURL=use-slider.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/hotkey/use-aria-key-shortcuts.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/hotkey/use-aria-key-shortcuts.js ***!
  \**********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAriaKeyShortcuts: () => (/* binding */ useAriaKeyShortcuts)
/* harmony export */ });
/* harmony import */ var _player_context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../player/context.js */ "./node_modules/@videojs/react/dist/dev/player/context.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/hotkey/hotkey.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
"use client";



//#region src/ui/hotkey/use-aria-key-shortcuts.ts
function useAriaKeyShortcuts(action) {
	const container = (0,_player_context_js__WEBPACK_IMPORTED_MODULE_0__.useContainer)();
	return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
		if (!container || !action) return void 0;
		return (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_1__.findHotkeyCoordinator)(container)?.getAriaKeys(action);
	}, [container, action]);
}
//#endregion


//# sourceMappingURL=use-aria-key-shortcuts.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/mute-button/mute-button.js"
/*!****************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/mute-button/mute-button.js ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MuteButton: () => (/* binding */ MuteButton)
/* harmony export */ });
/* harmony import */ var _create_media_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-media-button.js */ "./node_modules/@videojs/react/dist/dev/ui/create-media-button.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/store/selectors.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/mute-button/mute-button-core.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/mute-button/mute-button-data-attrs.js");
"use client";



//#region src/ui/mute-button/mute-button.tsx
/** A button that toggles mute state. */
const MuteButton = (0,_create_media_button_js__WEBPACK_IMPORTED_MODULE_0__.createMediaButton)({
	displayName: "MuteButton",
	core: _videojs_core__WEBPACK_IMPORTED_MODULE_2__.MuteButtonCore,
	stateAttrMap: _videojs_core__WEBPACK_IMPORTED_MODULE_3__.MuteButtonDataAttrs,
	selector: _videojs_core_dom__WEBPACK_IMPORTED_MODULE_1__.selectVolume,
	action: (core, state) => core.toggle(state),
	hotkeyAction: "toggleMuted"
});
//#endregion


//# sourceMappingURL=mute-button.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/pip-button/pip-button.js"
/*!**************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/pip-button/pip-button.js ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PiPButton: () => (/* binding */ PiPButton)
/* harmony export */ });
/* harmony import */ var _create_media_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-media-button.js */ "./node_modules/@videojs/react/dist/dev/ui/create-media-button.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/store/selectors.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/pip-button/pip-button-core.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/pip-button/pip-button-data-attrs.js");
"use client";



//#region src/ui/pip-button/pip-button.tsx
/** A button that toggles picture-in-picture. */
const PiPButton = (0,_create_media_button_js__WEBPACK_IMPORTED_MODULE_0__.createMediaButton)({
	displayName: "PiPButton",
	core: _videojs_core__WEBPACK_IMPORTED_MODULE_2__.PiPButtonCore,
	stateAttrMap: _videojs_core__WEBPACK_IMPORTED_MODULE_3__.PiPButtonDataAttrs,
	selector: _videojs_core_dom__WEBPACK_IMPORTED_MODULE_1__.selectPiP,
	action: (core, state) => core.toggle(state),
	hotkeyAction: "togglePictureInPicture"
});
//#endregion


//# sourceMappingURL=pip-button.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/play-button/play-button.js"
/*!****************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/play-button/play-button.js ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayButton: () => (/* binding */ PlayButton)
/* harmony export */ });
/* harmony import */ var _create_media_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-media-button.js */ "./node_modules/@videojs/react/dist/dev/ui/create-media-button.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/store/selectors.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/play-button/play-button-core.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/play-button/play-button-data-attrs.js");
"use client";



//#region src/ui/play-button/play-button.tsx
/**
* A button that toggles playback.
*
* @example
* ```tsx
* <PlayButton />
*
* <PlayButton
*   render={(props, state) => (
*     <button {...props}>
*       {state.paused ? <PlayIcon /> : <PauseIcon />}
*     </button>
*   )}
* />
* ```
*/
const PlayButton = (0,_create_media_button_js__WEBPACK_IMPORTED_MODULE_0__.createMediaButton)({
	displayName: "PlayButton",
	core: _videojs_core__WEBPACK_IMPORTED_MODULE_2__.PlayButtonCore,
	stateAttrMap: _videojs_core__WEBPACK_IMPORTED_MODULE_3__.PlayButtonDataAttrs,
	selector: _videojs_core_dom__WEBPACK_IMPORTED_MODULE_1__.selectPlayback,
	action: (core, state) => core.toggle(state),
	hotkeyAction: "togglePaused"
});
//#endregion


//# sourceMappingURL=play-button.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/playback-rate-button/playback-rate-button.js"
/*!**********************************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/playback-rate-button/playback-rate-button.js ***!
  \**********************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaybackRateButton: () => (/* binding */ PlaybackRateButton)
/* harmony export */ });
/* harmony import */ var _create_media_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-media-button.js */ "./node_modules/@videojs/react/dist/dev/ui/create-media-button.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/store/selectors.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/playback-rate-button/playback-rate-button-core.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/playback-rate-button/playback-rate-button-data-attrs.js");
"use client";



//#region src/ui/playback-rate-button/playback-rate-button.tsx
/**
* A button that cycles through playback rates.
*
* @example
* ```tsx
* <PlaybackRateButton />
*
* <PlaybackRateButton
*   render={(props, state) => (
*     <button {...props}>
*       {state.rate}&times;
*     </button>
*   )}
* />
* ```
*/
const PlaybackRateButton = (0,_create_media_button_js__WEBPACK_IMPORTED_MODULE_0__.createMediaButton)({
	displayName: "PlaybackRateButton",
	core: _videojs_core__WEBPACK_IMPORTED_MODULE_2__.PlaybackRateButtonCore,
	stateAttrMap: _videojs_core__WEBPACK_IMPORTED_MODULE_3__.PlaybackRateButtonDataAttrs,
	selector: _videojs_core_dom__WEBPACK_IMPORTED_MODULE_1__.selectPlaybackRate,
	action: (core, state) => core.cycle(state)
});
//#endregion


//# sourceMappingURL=playback-rate-button.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/popover/context.js"
/*!********************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/popover/context.js ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopoverContextProvider: () => (/* binding */ PopoverContextProvider),
/* harmony export */   usePopoverContext: () => (/* binding */ usePopoverContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";

//#region src/ui/popover/context.tsx
const PopoverContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const PopoverContextProvider = PopoverContext.Provider;
function usePopoverContext() {
	const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PopoverContext);
	if (!ctx) throw new Error("Popover compound components must be used within a Popover.Root");
	return ctx;
}
//#endregion


//# sourceMappingURL=context.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/popover/index.parts.js"
/*!************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/popover/index.parts.js ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   index_parts_exports: () => (/* binding */ index_parts_exports)
/* harmony export */ });
/* harmony import */ var _virtual_rolldown_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_virtual/_rolldown/runtime.js */ "./node_modules/@videojs/react/dist/dev/_virtual/_rolldown/runtime.js");
/* harmony import */ var _popover_arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-arrow.js */ "./node_modules/@videojs/react/dist/dev/ui/popover/popover-arrow.js");
/* harmony import */ var _popover_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover-popup.js */ "./node_modules/@videojs/react/dist/dev/ui/popover/popover-popup.js");
/* harmony import */ var _popover_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover-root.js */ "./node_modules/@videojs/react/dist/dev/ui/popover/popover-root.js");
/* harmony import */ var _popover_trigger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover-trigger.js */ "./node_modules/@videojs/react/dist/dev/ui/popover/popover-trigger.js");





//#region src/ui/popover/index.parts.ts
var index_parts_exports = /* @__PURE__ */ (0,_virtual_rolldown_runtime_js__WEBPACK_IMPORTED_MODULE_0__.__exportAll)({
	Arrow: () => _popover_arrow_js__WEBPACK_IMPORTED_MODULE_1__.PopoverArrow,
	Popup: () => _popover_popup_js__WEBPACK_IMPORTED_MODULE_2__.PopoverPopup,
	Root: () => _popover_root_js__WEBPACK_IMPORTED_MODULE_3__.PopoverRoot,
	Trigger: () => _popover_trigger_js__WEBPACK_IMPORTED_MODULE_4__.PopoverTrigger
});
//#endregion


//# sourceMappingURL=index.parts.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/popover/popover-arrow.js"
/*!**************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/popover/popover-arrow.js ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopoverArrow: () => (/* binding */ PopoverArrow)
/* harmony export */ });
/* harmony import */ var _create_context_part_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-context-part.js */ "./node_modules/@videojs/react/dist/dev/ui/create-context-part.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/popover/context.js");
"use client";


//#region src/ui/popover/popover-arrow.tsx
/** Decorative arrow pointing from the popup toward the trigger. Hidden from assistive technology. */
const PopoverArrow = (0,_create_context_part_js__WEBPACK_IMPORTED_MODULE_0__.createContextPart)({
	displayName: "PopoverArrow",
	tag: "div",
	useContext: _context_js__WEBPACK_IMPORTED_MODULE_1__.usePopoverContext,
	staticProps: { "aria-hidden": "true" }
});
//#endregion


//# sourceMappingURL=popover-arrow.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/popover/popover-popup.js"
/*!**************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/popover/popover-popup.js ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopoverPopup: () => (/* binding */ PopoverPopup)
/* harmony export */ });
/* harmony import */ var _utils_use_composed_refs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/use-composed-refs.js */ "./node_modules/@videojs/react/dist/dev/utils/use-composed-refs.js");
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/popover/context.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/utils/layout.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/ui/popover/popover-positioning.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/utils/event.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/supports.js");
"use client";






//#region src/ui/popover/popover-popup.tsx
const POPOVER_RESET = {
	position: "fixed",
	inset: "auto",
	margin: 0
};
/** Container for the popover content. Positioned relative to the trigger using CSS anchor positioning with a JavaScript fallback. */
const PopoverPopup = (0,react__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function PopoverPopup({ render, className, style, ...elementProps }, forwardedRef) {
	const { core, popover, state, stateAttrMap, anchorName, popupId, boundary, container } = (0,_context_js__WEBPACK_IMPORTED_MODULE_2__.usePopoverContext)();
	const internalRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);
	const composedRef = (0,_utils_use_composed_refs_js__WEBPACK_IMPORTED_MODULE_0__.useComposedRefs)(forwardedRef, (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((el) => {
		popover.setPopupElement(el);
		if (el && (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_7__.supportsAnchorPositioning)()) el.style.setProperty("position-anchor", `--${anchorName}`);
	}, [popover, anchorName]), internalRef);
	const posOpts = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => ({
		side: state.side,
		align: state.align
	}), [state.side, state.align]);
	const anchorStyle = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => {
		if (!(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_7__.supportsAnchorPositioning)()) return null;
		const { positionAnchor: _, ...rest } = (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_4__.getAnchorPositionStyle)(anchorName, posOpts);
		return rest;
	}, [anchorName, posOpts]);
	const [manualStyle, setManualStyle] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
	(0,react__WEBPACK_IMPORTED_MODULE_6__.useLayoutEffect)(() => {
		if (!state.open) {
			setManualStyle(null);
			return;
		}
		function measure() {
			const triggerEl = popover.triggerElement;
			const popupEl = internalRef.current;
			if (!triggerEl || !popupEl) return;
			const triggerRect = triggerEl.getBoundingClientRect();
			const boundaryElement = (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__.resolvePositioningBoundary)(boundary, {
				container,
				root: popupEl.getRootNode()
			});
			const { positionAnchor: _, ...nextStyle } = (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_4__.getAnchorPositionStyle)(anchorName, posOpts, triggerRect, (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_7__.supportsAnchorPositioning)() ? void 0 : (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_4__.getPopupPositionRect)(popupEl), (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__.getPositioningBoundaryRect)(boundaryElement), (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_4__.resolveOffsets)(popupEl));
			setManualStyle(nextStyle);
		}
		measure();
		const triggerEl = popover.triggerElement;
		const popupEl = internalRef.current;
		const boundaryElement = popupEl ? (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__.resolvePositioningBoundary)(boundary, {
			container,
			root: popupEl.getRootNode()
		}) : null;
		let rafId = 0;
		function reposition(event) {
			if (event && (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_5__.isEventWithinElement)(event, internalRef.current)) return;
			cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(measure);
		}
		reposition();
		const resizeObserver = typeof ResizeObserver === "function" ? new ResizeObserver(() => {
			reposition();
		}) : null;
		if (triggerEl && resizeObserver) resizeObserver.observe(triggerEl);
		if (popupEl && resizeObserver) resizeObserver.observe(popupEl);
		if (boundaryElement && resizeObserver) resizeObserver.observe(boundaryElement);
		window.addEventListener("scroll", reposition, {
			capture: true,
			passive: true
		});
		window.addEventListener("resize", reposition);
		return () => {
			cancelAnimationFrame(rafId);
			resizeObserver?.disconnect();
			window.removeEventListener("scroll", reposition, true);
			window.removeEventListener("resize", reposition);
		};
	}, [
		state.open,
		anchorName,
		posOpts,
		popover,
		boundary,
		container
	]);
	const positioningStyle = manualStyle ?? anchorStyle ?? POPOVER_RESET;
	if (!state.open) return null;
	const { onFocusOut, ...restPopupProps } = popover.popupProps;
	return (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_1__.renderElement)("div", {
		render,
		className,
		style
	}, {
		state,
		stateAttrMap,
		ref: composedRef,
		props: [
			{
				id: popupId,
				style: positioningStyle,
				...core.getPopupAttrs(state)
			},
			{
				...restPopupProps,
				onBlur: onFocusOut
			},
			elementProps
		]
	});
});
//#endregion


//# sourceMappingURL=popover-popup.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/popover/popover-root.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/popover/popover-root.js ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopoverRoot: () => (/* binding */ PopoverRoot)
/* harmony export */ });
/* harmony import */ var _player_context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../player/context.js */ "./node_modules/@videojs/react/dist/dev/player/context.js");
/* harmony import */ var _utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/use-latest-ref.js */ "./node_modules/@videojs/react/dist/dev/utils/use-latest-ref.js");
/* harmony import */ var _utils_use_destroy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-destroy.js */ "./node_modules/@videojs/react/dist/dev/utils/use-destroy.js");
/* harmony import */ var _utils_use_safe_id_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/use-safe-id.js */ "./node_modules/@videojs/react/dist/dev/utils/use-safe-id.js");
/* harmony import */ var _controls_context_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controls/context.js */ "./node_modules/@videojs/react/dist/dev/ui/controls/context.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/popover/context.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/ui/popover/popover.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/ui/transition.js");
/* harmony import */ var _videojs_store_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @videojs/store/react */ "./node_modules/@videojs/store/dist/dev/react/hooks/use-snapshot.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/popover/popover-core.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/popover/popover-data-attrs.js");
"use client";












//#region src/ui/popover/popover-root.tsx
function PopoverRoot({ open: controlledOpen, defaultOpen = _videojs_core__WEBPACK_IMPORTED_MODULE_12__.PopoverCore.defaultProps.defaultOpen, onOpenChange: onOpenChangeProp, onOpenChangeComplete: onOpenChangeCompleteProp, openOnHover = _videojs_core__WEBPACK_IMPORTED_MODULE_12__.PopoverCore.defaultProps.openOnHover, delay = _videojs_core__WEBPACK_IMPORTED_MODULE_12__.PopoverCore.defaultProps.delay, closeDelay = _videojs_core__WEBPACK_IMPORTED_MODULE_12__.PopoverCore.defaultProps.closeDelay, boundary = "container", children, ...coreProps }) {
	const container = (0,_player_context_js__WEBPACK_IMPORTED_MODULE_0__.useOptionalContainer)();
	const popupGroup = (0,_player_context_js__WEBPACK_IMPORTED_MODULE_0__.useOptionalPopupGroup)();
	const controls = (0,_controls_context_js__WEBPACK_IMPORTED_MODULE_4__.useOptionalControlsContext)();
	const [core] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(() => new _videojs_core__WEBPACK_IMPORTED_MODULE_12__.PopoverCore(coreProps));
	core.setProps(coreProps);
	const isControlled = !(0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_10__.isUndefined)(controlledOpen);
	const onOpenChangeRef = (0,_utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__.useLatestRef)(onOpenChangeProp);
	const onOpenChangeCompleteRef = (0,_utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__.useLatestRef)(onOpenChangeCompleteProp);
	const closeOnEscapeRef = (0,_utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__.useLatestRef)(coreProps.closeOnEscape);
	const closeOnOutsideClickRef = (0,_utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__.useLatestRef)(coreProps.closeOnOutsideClick);
	const openOnHoverRef = (0,_utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__.useLatestRef)(openOnHover);
	const delayRef = (0,_utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__.useLatestRef)(delay);
	const closeDelayRef = (0,_utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__.useLatestRef)(closeDelay);
	const popupGroupRef = (0,_utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__.useLatestRef)(popupGroup);
	const [popover] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(() => {
		const instance = (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_6__.createPopover)({
			transition: (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_7__.createTransition)(),
			onOpenChange: (nextOpen, details) => {
				onOpenChangeRef.current?.(nextOpen, details);
			},
			onOpenChangeComplete: (nextOpen) => {
				onOpenChangeCompleteRef.current?.(nextOpen);
			},
			closeOnEscape: () => closeOnEscapeRef.current ?? _videojs_core__WEBPACK_IMPORTED_MODULE_12__.PopoverCore.defaultProps.closeOnEscape,
			closeOnOutsideClick: () => closeOnOutsideClickRef.current ?? _videojs_core__WEBPACK_IMPORTED_MODULE_12__.PopoverCore.defaultProps.closeOnOutsideClick,
			openOnHover: () => openOnHoverRef.current,
			delay: () => delayRef.current,
			closeDelay: () => closeDelayRef.current,
			group: () => popupGroupRef.current
		});
		if (!isControlled && defaultOpen) instance.open("click");
		return instance;
	});
	const anchorName = (0,_utils_use_safe_id_js__WEBPACK_IMPORTED_MODULE_3__.useSafeId)();
	const popupId = (0,_utils_use_safe_id_js__WEBPACK_IMPORTED_MODULE_3__.useSafeId)("popup");
	(0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(() => {
		if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_10__.isUndefined)(controlledOpen)) return;
		const { active: inputOpen } = popover.input.current;
		if (controlledOpen === inputOpen) return;
		if (controlledOpen) popover.open("click");
		else popover.close("click");
	}, [controlledOpen, popover]);
	(0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(() => {
		if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_10__.isUndefined)(controls?.state.visible)) return;
		if (controls.state.visible) return;
		popover.close("imperative-action");
	}, [controls?.state.visible, popover]);
	(0,_utils_use_destroy_js__WEBPACK_IMPORTED_MODULE_2__.useDestroy)(popover);
	const input = (0,_videojs_store_react__WEBPACK_IMPORTED_MODULE_8__.useSnapshot)(popover.input);
	core.setInput(input);
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_context_js__WEBPACK_IMPORTED_MODULE_5__.PopoverContextProvider, {
		value: {
			core,
			popover,
			state: core.getState(),
			stateAttrMap: _videojs_core__WEBPACK_IMPORTED_MODULE_13__.PopoverDataAttrs,
			anchorName,
			popupId,
			boundary,
			container
		},
		children
	});
}
//#endregion


//# sourceMappingURL=popover-root.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/popover/popover-trigger.js"
/*!****************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/popover/popover-trigger.js ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopoverTrigger: () => (/* binding */ PopoverTrigger)
/* harmony export */ });
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/popover/context.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/supports.js");
"use client";




//#region src/ui/popover/popover-trigger.tsx
/** Button that toggles the popover visibility. Renders a `<button>` element. */
const PopoverTrigger = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function PopoverTrigger({ render, className, style, ...elementProps }, forwardedRef) {
	const { core, popover, state, stateAttrMap, anchorName, popupId } = (0,_context_js__WEBPACK_IMPORTED_MODULE_1__.usePopoverContext)();
	const triggerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((el) => {
		popover.setTriggerElement(el);
		if (el && (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.supportsAnchorPositioning)()) el.style.setProperty("anchor-name", `--${anchorName}`);
	}, [popover, anchorName]);
	const { onFocusIn, onFocusOut, ...restTriggerProps } = popover.triggerProps;
	return (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_0__.renderElement)("button", {
		render,
		className,
		style
	}, {
		state,
		stateAttrMap,
		ref: [forwardedRef, triggerRef],
		props: [
			{
				type: "button",
				...core.getTriggerAttrs(state, popupId)
			},
			{
				...restTriggerProps,
				onFocus: onFocusIn,
				onBlur: onFocusOut
			},
			elementProps
		]
	});
});
//#endregion


//# sourceMappingURL=popover-trigger.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/poster/poster.js"
/*!******************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/poster/poster.js ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Poster: () => (/* binding */ Poster)
/* harmony export */ });
/* harmony import */ var _player_context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../player/context.js */ "./node_modules/@videojs/react/dist/dev/player/context.js");
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/store/selectors.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/utils/log.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/poster/poster-core.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/poster/poster-data-attrs.js");
"use client";





//#region src/ui/poster/poster.tsx
/**
* Displays the video poster image. Shows before playback starts, hides after.
*
* @example
* ```tsx
* <Poster src="poster.jpg" alt="Video description" />
*
* <Poster
*   src="poster.jpg"
*   alt="Video description"
*   className={(state) => state.visible ? 'visible' : 'hidden'}
* />
* ```
*/
const Poster = (0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(function Poster(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const playback = (0,_player_context_js__WEBPACK_IMPORTED_MODULE_0__.usePlayer)(_videojs_core_dom__WEBPACK_IMPORTED_MODULE_2__.selectPlayback);
	const [core] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(() => new _videojs_core__WEBPACK_IMPORTED_MODULE_5__.PosterCore());
	if (!playback) {
		(0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__.logMissingFeature)("Poster", "playback");
		return null;
	}
	core.setMedia(playback);
	return (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_1__.renderElement)("img", {
		render,
		className,
		style
	}, {
		state: core.getState(),
		stateAttrMap: _videojs_core__WEBPACK_IMPORTED_MODULE_6__.PosterDataAttrs,
		ref: [forwardedRef],
		props: [elementProps]
	});
});
//#endregion


//# sourceMappingURL=poster.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/seek-button/seek-button.js"
/*!****************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/seek-button/seek-button.js ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeekButton: () => (/* binding */ SeekButton)
/* harmony export */ });
/* harmony import */ var _create_media_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-media-button.js */ "./node_modules/@videojs/react/dist/dev/ui/create-media-button.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/store/selectors.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/seek-button/seek-button-core.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/seek-button/seek-button-data-attrs.js");
"use client";



//#region src/ui/seek-button/seek-button.tsx
/**
* A button that seeks forward or backward by a configurable number of seconds.
*
* @example
* ```tsx
* <SeekButton seconds={-10} />
*
* <SeekButton
*   seconds={30}
*   render={(props, state) => (
*     <button {...props}>
*       {state.direction === 'backward' ? <RewindIcon /> : <FastForwardIcon />}
*     </button>
*   )}
* />
* ```
*/
const SeekButton = (0,_create_media_button_js__WEBPACK_IMPORTED_MODULE_0__.createMediaButton)({
	displayName: "SeekButton",
	core: _videojs_core__WEBPACK_IMPORTED_MODULE_2__.SeekButtonCore,
	stateAttrMap: _videojs_core__WEBPACK_IMPORTED_MODULE_3__.SeekButtonDataAttrs,
	selector: _videojs_core_dom__WEBPACK_IMPORTED_MODULE_1__.selectTime,
	action: (core, state) => core.seek(state)
});
//#endregion


//# sourceMappingURL=seek-button.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/slider/context.js"
/*!*******************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/slider/context.js ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderProvider: () => (/* binding */ SliderProvider),
/* harmony export */   useSliderContext: () => (/* binding */ useSliderContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
"use client";


//#region src/ui/slider/context.tsx
const SliderContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
function SliderProvider({ value, children }) {
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SliderContext.Provider, {
		value,
		children
	});
}
function useSliderContext() {
	const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SliderContext);
	if (!ctx) throw new Error("Slider compound components must be used within a Slider.Root");
	return ctx;
}
//#endregion


//# sourceMappingURL=context.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/slider/index.parts.js"
/*!***********************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/slider/index.parts.js ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   index_parts_exports: () => (/* binding */ index_parts_exports)
/* harmony export */ });
/* harmony import */ var _virtual_rolldown_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_virtual/_rolldown/runtime.js */ "./node_modules/@videojs/react/dist/dev/_virtual/_rolldown/runtime.js");
/* harmony import */ var _slider_buffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider-buffer.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-buffer.js");
/* harmony import */ var _slider_fill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider-fill.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-fill.js");
/* harmony import */ var _slider_preview_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider-preview.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-preview.js");
/* harmony import */ var _slider_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider-root.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-root.js");
/* harmony import */ var _slider_thumb_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider-thumb.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-thumb.js");
/* harmony import */ var _slider_thumbnail_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider-thumbnail.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-thumbnail.js");
/* harmony import */ var _slider_track_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slider-track.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-track.js");
/* harmony import */ var _slider_value_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slider-value.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-value.js");









//#region src/ui/slider/index.parts.ts
var index_parts_exports = /* @__PURE__ */ (0,_virtual_rolldown_runtime_js__WEBPACK_IMPORTED_MODULE_0__.__exportAll)({
	Buffer: () => _slider_buffer_js__WEBPACK_IMPORTED_MODULE_1__.SliderBuffer,
	Fill: () => _slider_fill_js__WEBPACK_IMPORTED_MODULE_2__.SliderFill,
	Preview: () => _slider_preview_js__WEBPACK_IMPORTED_MODULE_3__.SliderPreview,
	Root: () => _slider_root_js__WEBPACK_IMPORTED_MODULE_4__.SliderRoot,
	Thumb: () => _slider_thumb_js__WEBPACK_IMPORTED_MODULE_5__.SliderThumb,
	Thumbnail: () => _slider_thumbnail_js__WEBPACK_IMPORTED_MODULE_6__.SliderThumbnail,
	Track: () => _slider_track_js__WEBPACK_IMPORTED_MODULE_7__.SliderTrack,
	Value: () => _slider_value_js__WEBPACK_IMPORTED_MODULE_8__.SliderValue
});
//#endregion


//# sourceMappingURL=index.parts.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-buffer.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/slider/slider-buffer.js ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderBuffer: () => (/* binding */ SliderBuffer)
/* harmony export */ });
/* harmony import */ var _create_context_part_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-context-part.js */ "./node_modules/@videojs/react/dist/dev/ui/create-context-part.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/context.js");
"use client";


//#region src/ui/slider/slider-buffer.tsx
/** Displays the buffered range on the slider track. */
const SliderBuffer = (0,_create_context_part_js__WEBPACK_IMPORTED_MODULE_0__.createContextPart)({
	displayName: "SliderBuffer",
	tag: "div",
	useContext: _context_js__WEBPACK_IMPORTED_MODULE_1__.useSliderContext
});
//#endregion


//# sourceMappingURL=slider-buffer.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-fill.js"
/*!***********************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/slider/slider-fill.js ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderFill: () => (/* binding */ SliderFill)
/* harmony export */ });
/* harmony import */ var _create_context_part_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-context-part.js */ "./node_modules/@videojs/react/dist/dev/ui/create-context-part.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/context.js");
"use client";


//#region src/ui/slider/slider-fill.tsx
/** Displays the filled portion from start to the current value. */
const SliderFill = (0,_create_context_part_js__WEBPACK_IMPORTED_MODULE_0__.createContextPart)({
	displayName: "SliderFill",
	tag: "div",
	useContext: _context_js__WEBPACK_IMPORTED_MODULE_1__.useSliderContext
});
//#endregion


//# sourceMappingURL=slider-fill.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-preview.js"
/*!**************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/slider/slider-preview.js ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderPreview: () => (/* binding */ SliderPreview)
/* harmony export */ });
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/context.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/ui/slider-css-vars.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
"use client";




//#region src/ui/slider/slider-preview.tsx
/** Positioning container for preview content that tracks the pointer along the slider. */
const SliderPreview = (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function SliderPreview(componentProps, forwardedRef) {
	const { render, className, style, overflow = "clamp", ...elementProps } = componentProps;
	const context = (0,_context_js__WEBPACK_IMPORTED_MODULE_1__.useSliderContext)();
	const { state } = context;
	const measureRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
	const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
	(0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
		const el = measureRef.current;
		if (!el) return;
		const observer = new ResizeObserver(([entry]) => {
			setWidth(entry.contentRect.width);
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	const positionStyle = (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_2__.getSliderPreviewStyle)(width, overflow);
	return (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_0__.renderElement)("div", {
		render,
		className,
		style
	}, {
		state,
		stateAttrMap: context.stateAttrMap,
		ref: [forwardedRef, measureRef],
		props: [{ style: positionStyle }, elementProps]
	});
});
//#endregion


//# sourceMappingURL=slider-preview.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-root.js"
/*!***********************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/slider/slider-root.js ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderRoot: () => (/* binding */ SliderRoot)
/* harmony export */ });
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var _hooks_use_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-slider.js */ "./node_modules/@videojs/react/dist/dev/ui/hooks/use-slider.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/context.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/ui/slider-css-vars.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/slider/slider-core.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/slider/slider-data-attrs.js");
"use client";







//#region src/ui/slider/slider-root.tsx
const SliderRoot = (0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(function SliderRoot(componentProps, forwardedRef) {
	const { render, className, style, label, min, max, step, largeStep, orientation, disabled, thumbAlignment, value = 0, onValueChange, onValueCommit, onDragStart, onDragEnd, ...elementProps } = componentProps;
	const [core] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(() => new _videojs_core__WEBPACK_IMPORTED_MODULE_6__.SliderCore());
	core.setProps({
		label,
		min,
		max,
		step,
		largeStep,
		orientation,
		disabled,
		thumbAlignment
	});
	const { state, cssVars, rootRef, thumbRef: sliderThumbRef, rootProps, rootStyle, thumbProps } = (0,_hooks_use_slider_js__WEBPACK_IMPORTED_MODULE_1__.useSlider)({
		computeState: (input) => {
			core.setInput(input);
			return core.getSliderState(value);
		},
		getPercent: () => core.percentFromValue(value),
		getStepPercent: () => core.getStepPercent(),
		getLargeStepPercent: () => core.getLargeStepPercent(),
		orientation,
		disabled,
		adjustPercent: (rawPercent, thumbSize, trackSize) => core.adjustPercentForAlignment(rawPercent, thumbSize, trackSize),
		getCSSVars: _videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__.getSliderCSSVars,
		onValueChange: (percent) => onValueChange?.(core.valueFromPercent(percent)),
		onValueCommit: (percent) => onValueCommit?.(core.valueFromPercent(percent)),
		onDragStart,
		onDragEnd
	});
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_context_js__WEBPACK_IMPORTED_MODULE_2__.SliderProvider, {
		value: {
			state,
			pointerValue: core.valueFromPercent(state.pointerPercent),
			thumbRef: sliderThumbRef,
			thumbProps,
			stateAttrMap: _videojs_core__WEBPACK_IMPORTED_MODULE_7__.SliderDataAttrs,
			getAttrs: (sliderState) => core.getAttrs(sliderState),
			formatValue: void 0
		},
		children: (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_0__.renderElement)("div", {
			render,
			className,
			style
		}, {
			state,
			stateAttrMap: _videojs_core__WEBPACK_IMPORTED_MODULE_7__.SliderDataAttrs,
			ref: [forwardedRef, rootRef],
			props: [
				{ style: {
					...cssVars,
					...rootStyle
				} },
				rootProps,
				elementProps
			]
		})
	});
});
//#endregion


//# sourceMappingURL=slider-root.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-thumb.js"
/*!************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/slider/slider-thumb.js ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderThumb: () => (/* binding */ SliderThumb)
/* harmony export */ });
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/context.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
"use client";



//#region src/ui/slider/slider-thumb.tsx
/** Draggable handle for setting the slider value. Receives focus and handles keyboard interaction. */
const SliderThumb = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function SliderThumb(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const context = (0,_context_js__WEBPACK_IMPORTED_MODULE_1__.useSliderContext)();
	const { state, thumbRef, thumbProps, getAttrs } = context;
	const attrs = getAttrs(state);
	return (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_0__.renderElement)("div", {
		render,
		className,
		style
	}, {
		state,
		stateAttrMap: context.stateAttrMap,
		ref: [forwardedRef, thumbRef],
		props: [
			attrs,
			thumbProps,
			elementProps
		]
	});
});
//#endregion


//# sourceMappingURL=slider-thumb.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-thumbnail.js"
/*!****************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/slider/slider-thumbnail.js ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderThumbnail: () => (/* binding */ SliderThumbnail)
/* harmony export */ });
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/context.js");
/* harmony import */ var _thumbnail_thumbnail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../thumbnail/thumbnail.js */ "./node_modules/@videojs/react/dist/dev/ui/thumbnail/thumbnail.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
"use client";




//#region src/ui/slider/slider-thumbnail.tsx
const SliderThumbnail = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function SliderThumbnail(componentProps, forwardedRef) {
	const { pointerValue } = (0,_context_js__WEBPACK_IMPORTED_MODULE_0__.useSliderContext)();
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_thumbnail_thumbnail_js__WEBPACK_IMPORTED_MODULE_1__.Thumbnail, {
		ref: forwardedRef,
		...componentProps,
		time: pointerValue
	});
});
//#endregion


//# sourceMappingURL=slider-thumbnail.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-track.js"
/*!************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/slider/slider-track.js ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderTrack: () => (/* binding */ SliderTrack)
/* harmony export */ });
/* harmony import */ var _create_context_part_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-context-part.js */ "./node_modules/@videojs/react/dist/dev/ui/create-context-part.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/context.js");
"use client";


//#region src/ui/slider/slider-track.tsx
/** Contains the slider's visual track and interactive hit zone. */
const SliderTrack = (0,_create_context_part_js__WEBPACK_IMPORTED_MODULE_0__.createContextPart)({
	displayName: "SliderTrack",
	tag: "div",
	useContext: _context_js__WEBPACK_IMPORTED_MODULE_1__.useSliderContext
});
//#endregion


//# sourceMappingURL=slider-track.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-value.js"
/*!************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/slider/slider-value.js ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderValue: () => (/* binding */ SliderValue)
/* harmony export */ });
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/context.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
"use client";



//#region src/ui/slider/slider-value.tsx
/** Displays a formatted text representation of the slider value. Renders an `<output>` element. */
const SliderValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function SliderValue(componentProps, forwardedRef) {
	const { render, className, style, type = "current", format, ...elementProps } = componentProps;
	const context = (0,_context_js__WEBPACK_IMPORTED_MODULE_1__.useSliderContext)();
	const { state, pointerValue, formatValue } = context;
	const rawValue = type === "pointer" ? pointerValue : state.value;
	const text = format ? format(rawValue) : formatValue ? formatValue(rawValue, type) : String(Math.round(rawValue));
	return (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_0__.renderElement)("output", {
		render,
		className,
		style
	}, {
		state,
		stateAttrMap: context.stateAttrMap,
		ref: forwardedRef,
		props: [{
			"aria-live": "off",
			children: text
		}, elementProps]
	});
});
//#endregion


//# sourceMappingURL=slider-value.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/thumbnail/thumbnail.js"
/*!************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/thumbnail/thumbnail.js ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Thumbnail: () => (/* binding */ Thumbnail)
/* harmony export */ });
/* harmony import */ var _player_context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../player/context.js */ "./node_modules/@videojs/react/dist/dev/player/context.js");
/* harmony import */ var _utils_use_destroy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/use-destroy.js */ "./node_modules/@videojs/react/dist/dev/utils/use-destroy.js");
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/store/selectors.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/ui/thumbnail.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/thumbnail/thumbnail-core.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/thumbnail/thumbnail-data-attrs.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/thumbnail/thumbnail-media-fragment.js");
"use client";







//#region src/ui/thumbnail/thumbnail.tsx
const Thumbnail = (0,react__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(function Thumbnail(componentProps, forwardedRef) {
	const { render, className, style, time = 0, thumbnails: externalThumbnails, crossOrigin, loading, fetchPriority, ...elementProps } = componentProps;
	const [core] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(() => new _videojs_core__WEBPACK_IMPORTED_MODULE_7__.ThumbnailCore());
	const divRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
	const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
	const textTrack = (0,_player_context_js__WEBPACK_IMPORTED_MODULE_0__.useOptionalPlayer)(_videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__.selectTextTrack);
	const [, setRenderToken] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
	const [handle] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(() => (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_4__.createThumbnail)({
		getContainer: () => divRef.current,
		getImg: () => imgRef.current,
		onStateChange: () => setRenderToken((n) => n + 1)
	}));
	(0,_utils_use_destroy_js__WEBPACK_IMPORTED_MODULE_1__.useDestroy)(handle, () => handle.connect());
	const thumbnails = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
		if (externalThumbnails && externalThumbnails.length > 0) return externalThumbnails;
		return textTrack && textTrack.thumbnailCues.length > 0 ? (0,_videojs_core__WEBPACK_IMPORTED_MODULE_9__.mapCuesToThumbnails)(textTrack.thumbnailCues, textTrack.thumbnailTrackSrc ?? void 0) : [];
	}, [externalThumbnails, textTrack]);
	const thumbnail = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => core.findActiveThumbnail(thumbnails, time), [
		core,
		thumbnails,
		time
	]);
	handle.updateSrc(thumbnail?.url);
	const state = core.getState(handle.loading, handle.error, thumbnail);
	let containerStyle = { overflow: "hidden" };
	let imgStyle;
	if (thumbnail && handle.naturalWidth && handle.naturalHeight) {
		const constraints = handle.readConstraints();
		const result = core.resize(thumbnail, handle.naturalWidth, handle.naturalHeight, constraints);
		if (result) {
			containerStyle = {
				overflow: "hidden",
				width: result.containerWidth,
				height: result.containerHeight
			};
			imgStyle = {
				width: result.imageWidth,
				height: result.imageHeight,
				maxWidth: "none",
				transform: result.offsetX || result.offsetY ? `translate(-${result.offsetX}px, -${result.offsetY}px)` : void 0
			};
		}
	}
	return (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_2__.renderElement)("div", {
		render,
		className,
		style
	}, {
		state,
		stateAttrMap: _videojs_core__WEBPACK_IMPORTED_MODULE_8__.ThumbnailDataAttrs,
		ref: [forwardedRef, divRef],
		props: [
			core.getAttrs(state),
			{ style: containerStyle },
			elementProps,
			{ children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
				ref: imgRef,
				alt: "",
				"aria-hidden": "true",
				decoding: "async",
				src: thumbnail?.url,
				crossOrigin: crossOrigin === "" || crossOrigin === null ? void 0 : crossOrigin,
				loading,
				style: imgStyle,
				fetchPriority
			}) }
		]
	});
});
//#endregion


//# sourceMappingURL=thumbnail.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/time-slider/index.parts.js"
/*!****************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/time-slider/index.parts.js ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   index_parts_exports: () => (/* binding */ index_parts_exports)
/* harmony export */ });
/* harmony import */ var _virtual_rolldown_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_virtual/_rolldown/runtime.js */ "./node_modules/@videojs/react/dist/dev/_virtual/_rolldown/runtime.js");
/* harmony import */ var _slider_slider_buffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slider/slider-buffer.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-buffer.js");
/* harmony import */ var _slider_slider_fill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slider/slider-fill.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-fill.js");
/* harmony import */ var _slider_slider_preview_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../slider/slider-preview.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-preview.js");
/* harmony import */ var _slider_slider_thumb_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../slider/slider-thumb.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-thumb.js");
/* harmony import */ var _slider_slider_track_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slider/slider-track.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-track.js");
/* harmony import */ var _slider_slider_value_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../slider/slider-value.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-value.js");
/* harmony import */ var _time_slider_root_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./time-slider-root.js */ "./node_modules/@videojs/react/dist/dev/ui/time-slider/time-slider-root.js");








//#region src/ui/time-slider/index.parts.ts
var index_parts_exports = /* @__PURE__ */ (0,_virtual_rolldown_runtime_js__WEBPACK_IMPORTED_MODULE_0__.__exportAll)({
	Buffer: () => _slider_slider_buffer_js__WEBPACK_IMPORTED_MODULE_1__.SliderBuffer,
	Fill: () => _slider_slider_fill_js__WEBPACK_IMPORTED_MODULE_2__.SliderFill,
	Preview: () => _slider_slider_preview_js__WEBPACK_IMPORTED_MODULE_3__.SliderPreview,
	Root: () => _time_slider_root_js__WEBPACK_IMPORTED_MODULE_7__.TimeSliderRoot,
	Thumb: () => _slider_slider_thumb_js__WEBPACK_IMPORTED_MODULE_4__.SliderThumb,
	Track: () => _slider_slider_track_js__WEBPACK_IMPORTED_MODULE_5__.SliderTrack,
	Value: () => _slider_slider_value_js__WEBPACK_IMPORTED_MODULE_6__.SliderValue
});
//#endregion


//# sourceMappingURL=index.parts.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/time-slider/time-slider-root.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/time-slider/time-slider-root.js ***!
  \*********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeSliderRoot: () => (/* binding */ TimeSliderRoot)
/* harmony export */ });
/* harmony import */ var _player_context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../player/context.js */ "./node_modules/@videojs/react/dist/dev/player/context.js");
/* harmony import */ var _utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/use-latest-ref.js */ "./node_modules/@videojs/react/dist/dev/utils/use-latest-ref.js");
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var _hooks_use_slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-slider.js */ "./node_modules/@videojs/react/dist/dev/ui/hooks/use-slider.js");
/* harmony import */ var _slider_context_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../slider/context.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/context.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/store/selectors.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/ui/slider-css-vars.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/utils/log.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/time-slider/time-slider-core.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/time-slider/time-slider-data-attrs.js");
/* harmony import */ var _videojs_utils_time__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @videojs/utils/time */ "./node_modules/@videojs/utils/dist/time/format.js");
"use client";










//#region src/ui/time-slider/time-slider-root.tsx
const noopSeek = () => Promise.resolve(0);
const TimeSliderRoot = (0,react__WEBPACK_IMPORTED_MODULE_8__.forwardRef)(function TimeSliderRoot(componentProps, forwardedRef) {
	const { render, className, style, label, changeThrottle = _videojs_core__WEBPACK_IMPORTED_MODULE_10__.TimeSliderCore.defaultProps.changeThrottle, step = _videojs_core__WEBPACK_IMPORTED_MODULE_10__.TimeSliderCore.defaultProps.step, largeStep = _videojs_core__WEBPACK_IMPORTED_MODULE_10__.TimeSliderCore.defaultProps.largeStep, orientation, disabled, thumbAlignment, onDragStart, onDragEnd, ...elementProps } = componentProps;
	const time = (0,_player_context_js__WEBPACK_IMPORTED_MODULE_0__.usePlayer)(_videojs_core_dom__WEBPACK_IMPORTED_MODULE_5__.selectTime);
	const buffer = (0,_player_context_js__WEBPACK_IMPORTED_MODULE_0__.usePlayer)(_videojs_core_dom__WEBPACK_IMPORTED_MODULE_5__.selectBuffer);
	const [core] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(() => new _videojs_core__WEBPACK_IMPORTED_MODULE_10__.TimeSliderCore());
	core.setProps({
		label,
		step,
		largeStep,
		orientation,
		disabled,
		thumbAlignment
	});
	const mediaRef = (0,_utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__.useLatestRef)(time && buffer ? {
		...time,
		...buffer
	} : null);
	const duration = time?.duration ?? 0;
	const { state, cssVars, rootRef, thumbRef, rootProps, rootStyle, thumbProps } = (0,_hooks_use_slider_js__WEBPACK_IMPORTED_MODULE_3__.useSlider)({
		computeState: (input) => {
			core.setInput(input);
			if (!time || !buffer) core.setMedia({
				currentTime: 0,
				duration: 0,
				seeking: false,
				seek: noopSeek,
				buffered: [],
				seekable: []
			});
			else core.setMedia({
				...time,
				...buffer
			});
			return core.getState();
		},
		getPercent: () => duration > 0 ? (time?.currentTime ?? 0) / duration * 100 : 0,
		getStepPercent: () => core.getStepPercent(),
		getLargeStepPercent: () => core.getLargeStepPercent(),
		orientation,
		disabled,
		changeThrottle,
		adjustPercent: (rawPercent, thumbSize, trackSize) => core.adjustPercentForAlignment(rawPercent, thumbSize, trackSize),
		getCSSVars: _videojs_core_dom__WEBPACK_IMPORTED_MODULE_6__.getTimeSliderCSSVars,
		onValueCommit: (percent) => {
			const media = mediaRef.current;
			if (media) media.seek(core.rawValueFromPercent(percent));
		},
		onDragStart,
		onDragEnd
	});
	if (!time) {
		(0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_7__.logMissingFeature)("TimeSlider", "time");
		return null;
	}
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_slider_context_js__WEBPACK_IMPORTED_MODULE_4__.SliderProvider, {
		value: {
			state,
			pointerValue: core.valueFromPercent(state.pointerPercent),
			thumbRef,
			thumbProps,
			stateAttrMap: _videojs_core__WEBPACK_IMPORTED_MODULE_11__.TimeSliderDataAttrs,
			getAttrs: (sliderState) => core.getAttrs(sliderState),
			formatValue: (value) => (0,_videojs_utils_time__WEBPACK_IMPORTED_MODULE_12__.formatTime)(value, duration)
		},
		children: (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_2__.renderElement)("div", {
			render,
			className,
			style
		}, {
			state,
			stateAttrMap: _videojs_core__WEBPACK_IMPORTED_MODULE_11__.TimeSliderDataAttrs,
			ref: [forwardedRef, rootRef],
			props: [
				{ style: {
					...cssVars,
					...rootStyle
				} },
				rootProps,
				elementProps
			]
		})
	});
});
//#endregion


//# sourceMappingURL=time-slider-root.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/time/index.parts.js"
/*!*********************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/time/index.parts.js ***!
  \*********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   index_parts_exports: () => (/* binding */ index_parts_exports)
/* harmony export */ });
/* harmony import */ var _virtual_rolldown_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_virtual/_rolldown/runtime.js */ "./node_modules/@videojs/react/dist/dev/_virtual/_rolldown/runtime.js");
/* harmony import */ var _time_group_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time-group.js */ "./node_modules/@videojs/react/dist/dev/ui/time/time-group.js");
/* harmony import */ var _time_separator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time-separator.js */ "./node_modules/@videojs/react/dist/dev/ui/time/time-separator.js");
/* harmony import */ var _time_value_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time-value.js */ "./node_modules/@videojs/react/dist/dev/ui/time/time-value.js");




//#region src/ui/time/index.parts.ts
var index_parts_exports = /* @__PURE__ */ (0,_virtual_rolldown_runtime_js__WEBPACK_IMPORTED_MODULE_0__.__exportAll)({
	Group: () => _time_group_js__WEBPACK_IMPORTED_MODULE_1__.Group,
	Separator: () => _time_separator_js__WEBPACK_IMPORTED_MODULE_2__.Separator,
	Value: () => _time_value_js__WEBPACK_IMPORTED_MODULE_3__.Value
});
//#endregion


//# sourceMappingURL=index.parts.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/time/time-group.js"
/*!********************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/time/time-group.js ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Group: () => (/* binding */ Group)
/* harmony export */ });
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
"use client";


//#region src/ui/time/time-group.tsx
/**
* Container for composed time displays. Renders a `<span>` element.
*
* @example
* ```tsx
* <Time.Group>
*   <Time.Value type="current" />
*   <Time.Separator />
*   <Time.Value type="duration" />
* </Time.Group>
* ```
*/
const Group = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Group(componentProps, forwardedRef) {
	const { render, className, style, children, ...elementProps } = componentProps;
	return (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_0__.renderElement)("span", {
		render,
		className,
		style
	}, {
		state: {},
		ref: [forwardedRef],
		props: [{ children }, elementProps]
	});
});
//#endregion


//# sourceMappingURL=time-group.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/time/time-separator.js"
/*!************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/time/time-separator.js ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Separator: () => (/* binding */ Separator)
/* harmony export */ });
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
"use client";


//#region src/ui/time/time-separator.tsx
/**
* Divider between time values. Hidden from screen readers.
*
* @example
* ```tsx
* <Time.Separator />
* <Time.Separator> of </Time.Separator>
* ```
*/
const Separator = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Separator(componentProps, forwardedRef) {
	const { render, className, style, children = "/", ...elementProps } = componentProps;
	return (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_0__.renderElement)("span", {
		render,
		className,
		style
	}, {
		state: {},
		ref: [forwardedRef],
		props: [{
			"aria-hidden": "true",
			children
		}, elementProps]
	});
});
//#endregion


//# sourceMappingURL=time-separator.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/time/time-value.js"
/*!********************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/time/time-value.js ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Value: () => (/* binding */ Value)
/* harmony export */ });
/* harmony import */ var _player_context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../player/context.js */ "./node_modules/@videojs/react/dist/dev/player/context.js");
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/store/selectors.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/utils/log.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/time/time-core.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/time/time-data-attrs.js");
"use client";






//#region src/ui/time/time-value.tsx
/**
* Displays a formatted time value (current, duration, or remaining).
*
* @example
* ```tsx
* <Time.Value />
* <Time.Value type="duration" />
* <Time.Value type="remaining" negativeSign="−" />
* ```
*/
const Value = (0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(function Value(componentProps, forwardedRef) {
	const { render, className, style, type, negativeSign, label, ...elementProps } = componentProps;
	const time = (0,_player_context_js__WEBPACK_IMPORTED_MODULE_0__.usePlayer)(_videojs_core_dom__WEBPACK_IMPORTED_MODULE_2__.selectTime);
	const [core] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(() => new _videojs_core__WEBPACK_IMPORTED_MODULE_6__.TimeCore());
	core.setProps({
		type,
		negativeSign,
		label
	});
	if (!time) {
		(0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__.logMissingFeature)("Time.Value", "time");
		return null;
	}
	core.setMedia(time);
	const state = core.getState();
	const content = state.negative ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, { children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
		"aria-hidden": "true",
		children: negativeSign ?? _videojs_core__WEBPACK_IMPORTED_MODULE_6__.TimeCore.defaultProps.negativeSign
	}), state.text] }) : state.text;
	return (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_1__.renderElement)("time", {
		render,
		className,
		style
	}, {
		state,
		stateAttrMap: _videojs_core__WEBPACK_IMPORTED_MODULE_7__.TimeDataAttrs,
		ref: [forwardedRef],
		props: [{
			dateTime: state.datetime,
			children: content,
			...core.getAttrs(state)
		}, elementProps]
	});
});
//#endregion


//# sourceMappingURL=time-value.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/tooltip/context.js"
/*!********************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/tooltip/context.js ***!
  \********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TooltipContextProvider: () => (/* binding */ TooltipContextProvider),
/* harmony export */   useOptionalTooltipContext: () => (/* binding */ useOptionalTooltipContext),
/* harmony export */   useTooltipContext: () => (/* binding */ useTooltipContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";

//#region src/ui/tooltip/context.tsx
const TooltipContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const TooltipContextProvider = TooltipContext.Provider;
function useTooltipContext() {
	const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TooltipContext);
	if (!ctx) throw new Error("Tooltip compound components must be used within a Tooltip.Root");
	return ctx;
}
function useOptionalTooltipContext() {
	return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TooltipContext);
}
//#endregion


//# sourceMappingURL=context.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/tooltip/group-context.js"
/*!**************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/tooltip/group-context.js ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TooltipGroupContextProvider: () => (/* binding */ TooltipGroupContextProvider),
/* harmony export */   useTooltipGroup: () => (/* binding */ useTooltipGroup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";

//#region src/ui/tooltip/group-context.tsx
const TooltipGroupContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const TooltipGroupContextProvider = TooltipGroupContext.Provider;
/** Returns the nearest `TooltipGroupCore`, or `undefined` when used outside a `Tooltip.Provider`. */
function useTooltipGroup() {
	return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TooltipGroupContext)?.group;
}
//#endregion


//# sourceMappingURL=group-context.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/tooltip/index.parts.js"
/*!************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/tooltip/index.parts.js ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   index_parts_exports: () => (/* binding */ index_parts_exports)
/* harmony export */ });
/* harmony import */ var _virtual_rolldown_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_virtual/_rolldown/runtime.js */ "./node_modules/@videojs/react/dist/dev/_virtual/_rolldown/runtime.js");
/* harmony import */ var _tooltip_arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip-arrow.js */ "./node_modules/@videojs/react/dist/dev/ui/tooltip/tooltip-arrow.js");
/* harmony import */ var _tooltip_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip-popup.js */ "./node_modules/@videojs/react/dist/dev/ui/tooltip/tooltip-popup.js");
/* harmony import */ var _tooltip_provider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip-provider.js */ "./node_modules/@videojs/react/dist/dev/ui/tooltip/tooltip-provider.js");
/* harmony import */ var _tooltip_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip-root.js */ "./node_modules/@videojs/react/dist/dev/ui/tooltip/tooltip-root.js");
/* harmony import */ var _tooltip_trigger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tooltip-trigger.js */ "./node_modules/@videojs/react/dist/dev/ui/tooltip/tooltip-trigger.js");






//#region src/ui/tooltip/index.parts.ts
var index_parts_exports = /* @__PURE__ */ (0,_virtual_rolldown_runtime_js__WEBPACK_IMPORTED_MODULE_0__.__exportAll)({
	Arrow: () => _tooltip_arrow_js__WEBPACK_IMPORTED_MODULE_1__.TooltipArrow,
	Popup: () => _tooltip_popup_js__WEBPACK_IMPORTED_MODULE_2__.TooltipPopup,
	Provider: () => _tooltip_provider_js__WEBPACK_IMPORTED_MODULE_3__.TooltipProvider,
	Root: () => _tooltip_root_js__WEBPACK_IMPORTED_MODULE_4__.TooltipRoot,
	Trigger: () => _tooltip_trigger_js__WEBPACK_IMPORTED_MODULE_5__.TooltipTrigger
});
//#endregion


//# sourceMappingURL=index.parts.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/tooltip/tooltip-arrow.js"
/*!**************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/tooltip/tooltip-arrow.js ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TooltipArrow: () => (/* binding */ TooltipArrow)
/* harmony export */ });
/* harmony import */ var _create_context_part_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-context-part.js */ "./node_modules/@videojs/react/dist/dev/ui/create-context-part.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/tooltip/context.js");
"use client";


//#region src/ui/tooltip/tooltip-arrow.tsx
/** Decorative arrow pointing from the tooltip toward the trigger. Hidden from assistive technology. */
const TooltipArrow = (0,_create_context_part_js__WEBPACK_IMPORTED_MODULE_0__.createContextPart)({
	displayName: "TooltipArrow",
	tag: "div",
	useContext: _context_js__WEBPACK_IMPORTED_MODULE_1__.useTooltipContext,
	staticProps: { "aria-hidden": "true" }
});
//#endregion


//# sourceMappingURL=tooltip-arrow.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/tooltip/tooltip-popup.js"
/*!**************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/tooltip/tooltip-popup.js ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TooltipPopup: () => (/* binding */ TooltipPopup)
/* harmony export */ });
/* harmony import */ var _utils_use_composed_refs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/use-composed-refs.js */ "./node_modules/@videojs/react/dist/dev/utils/use-composed-refs.js");
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/tooltip/context.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/utils/layout.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/ui/popover/popover-positioning.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/utils/event.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/tooltip/tooltip-css-vars.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/supports.js");
"use client";







//#region src/ui/tooltip/tooltip-popup.tsx
const POPUP_RESET = {
	position: "fixed",
	inset: "auto",
	margin: 0
};
/** Container for the tooltip content. Positioned relative to the trigger using CSS anchor positioning with a JavaScript fallback. */
const TooltipPopup = (0,react__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function TooltipPopup({ render, className, style, ...elementProps }, forwardedRef) {
	const { core, tooltip, state, stateAttrMap, anchorName, popupId, content, boundary, container } = (0,_context_js__WEBPACK_IMPORTED_MODULE_2__.useTooltipContext)();
	const internalRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);
	const composedRef = (0,_utils_use_composed_refs_js__WEBPACK_IMPORTED_MODULE_0__.useComposedRefs)(forwardedRef, (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)((el) => {
		tooltip.setPopupElement(el);
		if (el && (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_8__.supportsAnchorPositioning)()) el.style.setProperty("position-anchor", `--${anchorName}`);
	}, [tooltip, anchorName]), internalRef);
	const posOpts = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => ({
		side: state.side,
		align: state.align
	}), [state.side, state.align]);
	const anchorStyle = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => {
		if (!(0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_8__.supportsAnchorPositioning)()) return null;
		const { positionAnchor: _, ...rest } = (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_4__.getAnchorPositionStyle)(anchorName, posOpts, void 0, void 0, void 0, void 0, _videojs_core__WEBPACK_IMPORTED_MODULE_7__.TooltipCSSVars);
		return rest;
	}, [anchorName, posOpts]);
	const [manualStyle, setManualStyle] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
	(0,react__WEBPACK_IMPORTED_MODULE_6__.useLayoutEffect)(() => {
		if (!state.open) {
			setManualStyle(null);
			return;
		}
		function measure() {
			const triggerEl = tooltip.triggerElement;
			const popupEl = internalRef.current;
			if (!triggerEl || !popupEl) return;
			const triggerRect = triggerEl.getBoundingClientRect();
			const boundaryElement = (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__.resolvePositioningBoundary)(boundary, {
				container,
				root: popupEl.getRootNode()
			});
			const { positionAnchor: _, ...nextStyle } = (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_4__.getAnchorPositionStyle)(anchorName, posOpts, triggerRect, (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_8__.supportsAnchorPositioning)() ? void 0 : (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_4__.getPopupPositionRect)(popupEl), (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__.getPositioningBoundaryRect)(boundaryElement), (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_4__.resolveOffsets)(popupEl, _videojs_core__WEBPACK_IMPORTED_MODULE_7__.TooltipCSSVars), _videojs_core__WEBPACK_IMPORTED_MODULE_7__.TooltipCSSVars);
			setManualStyle(nextStyle);
		}
		measure();
		const triggerEl = tooltip.triggerElement;
		const popupEl = internalRef.current;
		const boundaryElement = popupEl ? (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_3__.resolvePositioningBoundary)(boundary, {
			container,
			root: popupEl.getRootNode()
		}) : null;
		let rafId = 0;
		function reposition(event) {
			if (event && (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_5__.isEventWithinElement)(event, internalRef.current)) return;
			cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(measure);
		}
		reposition();
		const resizeObserver = typeof ResizeObserver === "function" ? new ResizeObserver(() => {
			reposition();
		}) : null;
		if (triggerEl && resizeObserver) resizeObserver.observe(triggerEl);
		if (popupEl && resizeObserver) resizeObserver.observe(popupEl);
		if (boundaryElement && resizeObserver) resizeObserver.observe(boundaryElement);
		window.addEventListener("scroll", reposition, {
			capture: true,
			passive: true
		});
		window.addEventListener("resize", reposition);
		return () => {
			cancelAnimationFrame(rafId);
			resizeObserver?.disconnect();
			window.removeEventListener("scroll", reposition, true);
			window.removeEventListener("resize", reposition);
		};
	}, [
		state.open,
		anchorName,
		posOpts,
		tooltip,
		boundary,
		container
	]);
	const positioningStyle = manualStyle ?? anchorStyle ?? POPUP_RESET;
	if (!state.open) return null;
	const { onFocusOut, ...restPopupProps } = tooltip.popupProps;
	return (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_1__.renderElement)("div", {
		render,
		className,
		style
	}, {
		state,
		stateAttrMap,
		ref: composedRef,
		props: [
			{
				id: popupId,
				style: positioningStyle,
				...core.getPopupAttrs(state)
			},
			{ children: content },
			{
				...restPopupProps,
				onBlur: onFocusOut
			},
			elementProps
		]
	});
});
//#endregion


//# sourceMappingURL=tooltip-popup.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/tooltip/tooltip-provider.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/tooltip/tooltip-provider.js ***!
  \*****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TooltipProvider: () => (/* binding */ TooltipProvider)
/* harmony export */ });
/* harmony import */ var _group_context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-context.js */ "./node_modules/@videojs/react/dist/dev/ui/tooltip/group-context.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/tooltip/tooltip-group-core.js");
"use client";




//#region src/ui/tooltip/tooltip-provider.tsx
function TooltipProvider({ delay, closeDelay, timeout, children }) {
	const [group] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => new _videojs_core__WEBPACK_IMPORTED_MODULE_3__.TooltipGroupCore({
		delay,
		closeDelay,
		timeout
	}));
	group.setProps({
		delay,
		closeDelay,
		timeout
	});
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_group_context_js__WEBPACK_IMPORTED_MODULE_0__.TooltipGroupContextProvider, {
		value: { group },
		children
	});
}
//#endregion


//# sourceMappingURL=tooltip-provider.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/tooltip/tooltip-root.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/tooltip/tooltip-root.js ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TooltipRoot: () => (/* binding */ TooltipRoot)
/* harmony export */ });
/* harmony import */ var _player_context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../player/context.js */ "./node_modules/@videojs/react/dist/dev/player/context.js");
/* harmony import */ var _utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/use-latest-ref.js */ "./node_modules/@videojs/react/dist/dev/utils/use-latest-ref.js");
/* harmony import */ var _utils_use_destroy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-destroy.js */ "./node_modules/@videojs/react/dist/dev/utils/use-destroy.js");
/* harmony import */ var _utils_use_safe_id_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/use-safe-id.js */ "./node_modules/@videojs/react/dist/dev/utils/use-safe-id.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/tooltip/context.js");
/* harmony import */ var _controls_context_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controls/context.js */ "./node_modules/@videojs/react/dist/dev/ui/controls/context.js");
/* harmony import */ var _group_context_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-context.js */ "./node_modules/@videojs/react/dist/dev/ui/tooltip/group-context.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/ui/tooltip/tooltip.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/ui/transition.js");
/* harmony import */ var _videojs_store_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @videojs/store/react */ "./node_modules/@videojs/store/dist/dev/react/hooks/use-snapshot.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/tooltip/tooltip-core.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/tooltip/tooltip-data-attrs.js");
"use client";













//#region src/ui/tooltip/tooltip-root.tsx
function TooltipRoot({ open: controlledOpen, defaultOpen = _videojs_core__WEBPACK_IMPORTED_MODULE_13__.TooltipCore.defaultProps.defaultOpen, onOpenChange: onOpenChangeProp, onOpenChangeComplete: onOpenChangeCompleteProp, delay = _videojs_core__WEBPACK_IMPORTED_MODULE_13__.TooltipCore.defaultProps.delay, closeDelay = _videojs_core__WEBPACK_IMPORTED_MODULE_13__.TooltipCore.defaultProps.closeDelay, disableHoverablePopup = _videojs_core__WEBPACK_IMPORTED_MODULE_13__.TooltipCore.defaultProps.disableHoverablePopup, disabled = _videojs_core__WEBPACK_IMPORTED_MODULE_13__.TooltipCore.defaultProps.disabled, boundary = "container", children, ...coreProps }) {
	const container = (0,_player_context_js__WEBPACK_IMPORTED_MODULE_0__.useOptionalContainer)();
	const controls = (0,_controls_context_js__WEBPACK_IMPORTED_MODULE_5__.useOptionalControlsContext)();
	const [core] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(() => new _videojs_core__WEBPACK_IMPORTED_MODULE_13__.TooltipCore(coreProps));
	core.setProps(coreProps);
	const isControlled = !(0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_11__.isUndefined)(controlledOpen);
	const groupFromContext = (0,_group_context_js__WEBPACK_IMPORTED_MODULE_6__.useTooltipGroup)();
	const onOpenChangeRef = (0,_utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__.useLatestRef)(onOpenChangeProp);
	const onOpenChangeCompleteRef = (0,_utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__.useLatestRef)(onOpenChangeCompleteProp);
	const delayRef = (0,_utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__.useLatestRef)(delay);
	const closeDelayRef = (0,_utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__.useLatestRef)(closeDelay);
	const disableHoverablePopupRef = (0,_utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__.useLatestRef)(disableHoverablePopup);
	const disabledRef = (0,_utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__.useLatestRef)(disabled);
	const groupRef = (0,_utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__.useLatestRef)(groupFromContext);
	const [tooltip] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(() => {
		const instance = (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_7__.createTooltip)({
			transition: (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_8__.createTransition)(),
			onOpenChange: (nextOpen, details) => {
				onOpenChangeRef.current?.(nextOpen, details);
			},
			onOpenChangeComplete: (nextOpen) => {
				onOpenChangeCompleteRef.current?.(nextOpen);
			},
			delay: () => delayRef.current,
			closeDelay: () => closeDelayRef.current,
			disableHoverablePopup: () => disableHoverablePopupRef.current,
			disabled: () => disabledRef.current,
			group: () => groupRef.current
		});
		if (!isControlled && defaultOpen) instance.open();
		return instance;
	});
	const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)();
	const anchorName = (0,_utils_use_safe_id_js__WEBPACK_IMPORTED_MODULE_3__.useSafeId)();
	const popupId = (0,_utils_use_safe_id_js__WEBPACK_IMPORTED_MODULE_3__.useSafeId)("tooltip");
	(0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(() => {
		if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_11__.isUndefined)(controlledOpen)) return;
		const { active: inputOpen } = tooltip.input.current;
		if (controlledOpen === inputOpen) return;
		if (controlledOpen) tooltip.open();
		else tooltip.close();
	}, [controlledOpen, tooltip]);
	(0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(() => {
		if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_11__.isUndefined)(controls?.state.visible)) return;
		if (controls.state.visible) return;
		tooltip.close("imperative-action");
	}, [controls?.state.visible, tooltip]);
	(0,_utils_use_destroy_js__WEBPACK_IMPORTED_MODULE_2__.useDestroy)(tooltip);
	const input = (0,_videojs_store_react__WEBPACK_IMPORTED_MODULE_9__.useSnapshot)(tooltip.input);
	core.setInput(input);
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_context_js__WEBPACK_IMPORTED_MODULE_4__.TooltipContextProvider, {
		value: {
			core,
			tooltip,
			state: core.getState(),
			stateAttrMap: _videojs_core__WEBPACK_IMPORTED_MODULE_14__.TooltipDataAttrs,
			anchorName,
			popupId,
			content,
			setContent,
			boundary,
			container
		},
		children
	});
}
//#endregion


//# sourceMappingURL=tooltip-root.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/tooltip/tooltip-trigger.js"
/*!****************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/tooltip/tooltip-trigger.js ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TooltipTrigger: () => (/* binding */ TooltipTrigger)
/* harmony export */ });
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.js */ "./node_modules/@videojs/react/dist/dev/ui/tooltip/context.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/supports.js");
"use client";




//#region src/ui/tooltip/tooltip-trigger.tsx
/** Element that triggers the tooltip on hover and focus. Renders a `<button>` element. */
const TooltipTrigger = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function TooltipTrigger({ render, className, style, ...elementProps }, forwardedRef) {
	const { tooltip, state, stateAttrMap, anchorName } = (0,_context_js__WEBPACK_IMPORTED_MODULE_1__.useTooltipContext)();
	const triggerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((el) => {
		tooltip.setTriggerElement(el);
		if (el && (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_3__.supportsAnchorPositioning)()) el.style.setProperty("anchor-name", `--${anchorName}`);
	}, [tooltip, anchorName]);
	const { onFocusIn, onFocusOut, ...restTriggerProps } = tooltip.triggerProps;
	return (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_0__.renderElement)("button", {
		render,
		className,
		style
	}, {
		state,
		stateAttrMap,
		ref: [forwardedRef, triggerRef],
		props: [
			{ type: "button" },
			{
				...restTriggerProps,
				onFocus: onFocusIn,
				onBlur: onFocusOut
			},
			elementProps
		]
	});
});
//#endregion


//# sourceMappingURL=tooltip-trigger.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/volume-slider/index.parts.js"
/*!******************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/volume-slider/index.parts.js ***!
  \******************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   index_parts_exports: () => (/* binding */ index_parts_exports)
/* harmony export */ });
/* harmony import */ var _virtual_rolldown_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_virtual/_rolldown/runtime.js */ "./node_modules/@videojs/react/dist/dev/_virtual/_rolldown/runtime.js");
/* harmony import */ var _slider_slider_fill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slider/slider-fill.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-fill.js");
/* harmony import */ var _slider_slider_preview_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slider/slider-preview.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-preview.js");
/* harmony import */ var _slider_slider_thumb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../slider/slider-thumb.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-thumb.js");
/* harmony import */ var _slider_slider_track_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../slider/slider-track.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-track.js");
/* harmony import */ var _slider_slider_value_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slider/slider-value.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/slider-value.js");
/* harmony import */ var _volume_slider_root_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./volume-slider-root.js */ "./node_modules/@videojs/react/dist/dev/ui/volume-slider/volume-slider-root.js");







//#region src/ui/volume-slider/index.parts.ts
var index_parts_exports = /* @__PURE__ */ (0,_virtual_rolldown_runtime_js__WEBPACK_IMPORTED_MODULE_0__.__exportAll)({
	Fill: () => _slider_slider_fill_js__WEBPACK_IMPORTED_MODULE_1__.SliderFill,
	Preview: () => _slider_slider_preview_js__WEBPACK_IMPORTED_MODULE_2__.SliderPreview,
	Root: () => _volume_slider_root_js__WEBPACK_IMPORTED_MODULE_6__.VolumeSliderRoot,
	Thumb: () => _slider_slider_thumb_js__WEBPACK_IMPORTED_MODULE_3__.SliderThumb,
	Track: () => _slider_slider_track_js__WEBPACK_IMPORTED_MODULE_4__.SliderTrack,
	Value: () => _slider_slider_value_js__WEBPACK_IMPORTED_MODULE_5__.SliderValue
});
//#endregion


//# sourceMappingURL=index.parts.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/ui/volume-slider/volume-slider-root.js"
/*!*************************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/ui/volume-slider/volume-slider-root.js ***!
  \*************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VolumeSliderRoot: () => (/* binding */ VolumeSliderRoot)
/* harmony export */ });
/* harmony import */ var _player_context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../player/context.js */ "./node_modules/@videojs/react/dist/dev/player/context.js");
/* harmony import */ var _utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/use-latest-ref.js */ "./node_modules/@videojs/react/dist/dev/utils/use-latest-ref.js");
/* harmony import */ var _utils_use_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-render.js */ "./node_modules/@videojs/react/dist/dev/utils/use-render.js");
/* harmony import */ var _hooks_use_slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-slider.js */ "./node_modules/@videojs/react/dist/dev/ui/hooks/use-slider.js");
/* harmony import */ var _slider_context_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../slider/context.js */ "./node_modules/@videojs/react/dist/dev/ui/slider/context.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/store/selectors.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/ui/slider-css-vars.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/ui/wheel-step.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/utils/log.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/volume-slider/volume-slider-core.js");
/* harmony import */ var _videojs_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @videojs/core */ "./node_modules/@videojs/core/dist/dev/core/ui/volume-slider/volume-slider-data-attrs.js");
/* harmony import */ var _videojs_utils_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @videojs/utils/dom */ "./node_modules/@videojs/utils/dist/dom/listen.js");
"use client";










//#region src/ui/volume-slider/volume-slider-root.tsx
const noopVolume = {
	volume: 0,
	muted: false,
	volumeAvailability: "unsupported",
	setVolume: () => 0,
	toggleMuted: () => false
};
const VolumeSliderRoot = (0,react__WEBPACK_IMPORTED_MODULE_9__.forwardRef)(function VolumeSliderRoot(componentProps, forwardedRef) {
	const { render, className, style, label, orientation, step = _videojs_core__WEBPACK_IMPORTED_MODULE_11__.VolumeSliderCore.defaultProps.step, largeStep = _videojs_core__WEBPACK_IMPORTED_MODULE_11__.VolumeSliderCore.defaultProps.largeStep, wheelStep = _videojs_core__WEBPACK_IMPORTED_MODULE_11__.VolumeSliderCore.defaultProps.wheelStep, disabled, thumbAlignment, onDragStart, onDragEnd, ...elementProps } = componentProps;
	const volume = (0,_player_context_js__WEBPACK_IMPORTED_MODULE_0__.usePlayer)(_videojs_core_dom__WEBPACK_IMPORTED_MODULE_5__.selectVolume);
	const [core] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(() => new _videojs_core__WEBPACK_IMPORTED_MODULE_11__.VolumeSliderCore());
	core.setProps({
		label,
		orientation,
		step,
		largeStep,
		wheelStep,
		disabled,
		thumbAlignment
	});
	const volumeRef = (0,_utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__.useLatestRef)(volume);
	const disabledRef = (0,_utils_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_1__.useLatestRef)(disabled);
	const getPercent = () => (volumeRef.current?.volume ?? 0) * 100;
	const getStepPercent = () => core.getStepPercent();
	const setVolume = (percent) => volumeRef.current?.setVolume(percent / 100);
	const { state, cssVars, rootRef, thumbRef, rootProps, rootStyle, thumbProps } = (0,_hooks_use_slider_js__WEBPACK_IMPORTED_MODULE_3__.useSlider)({
		computeState: (input) => {
			core.setInput(input);
			core.setMedia(volume ?? noopVolume);
			return core.getState();
		},
		getPercent,
		getStepPercent,
		getLargeStepPercent: () => core.getLargeStepPercent(),
		orientation,
		disabled,
		adjustPercent: (rawPercent, thumbSize, trackSize) => core.adjustPercentForAlignment(rawPercent, thumbSize, trackSize),
		getCSSVars: _videojs_core_dom__WEBPACK_IMPORTED_MODULE_6__.getSliderCSSVars,
		onValueChange: setVolume,
		onValueCommit: setVolume,
		onDragStart,
		onDragEnd
	});
	const [wheelHandler] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(() => (0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_7__.createWheelStep)({
		isDisabled: () => !!disabledRef.current || !volumeRef.current,
		getPercent: () => (volumeRef.current?.volume ?? 0) * 100,
		getStepPercent: () => core.getWheelStepPercent(),
		onValueChange: (percent) => volumeRef.current?.setVolume(percent / 100)
	}));
	const wheelCleanupRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)(null);
	const wheelRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useCallback)((element) => {
		wheelCleanupRef.current?.();
		wheelCleanupRef.current = null;
		if (element) wheelCleanupRef.current = (0,_videojs_utils_dom__WEBPACK_IMPORTED_MODULE_13__.listen)(element, "wheel", wheelHandler.onWheel, { passive: false });
	}, [wheelHandler]);
	if (!volume) {
		(0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_8__.logMissingFeature)("VolumeSlider", "volume");
		return null;
	}
	return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_slider_context_js__WEBPACK_IMPORTED_MODULE_4__.SliderProvider, {
		value: {
			state,
			pointerValue: core.valueFromPercent(state.pointerPercent),
			thumbRef,
			thumbProps,
			stateAttrMap: _videojs_core__WEBPACK_IMPORTED_MODULE_12__.VolumeSliderDataAttrs,
			getAttrs: (sliderState) => core.getAttrs(sliderState),
			formatValue: (value) => `${Math.round(value)}%`
		},
		children: (0,_utils_use_render_js__WEBPACK_IMPORTED_MODULE_2__.renderElement)("div", {
			render,
			className,
			style
		}, {
			state,
			stateAttrMap: _videojs_core__WEBPACK_IMPORTED_MODULE_12__.VolumeSliderDataAttrs,
			ref: [
				forwardedRef,
				rootRef,
				wheelRef
			],
			props: [
				{ style: {
					...cssVars,
					...rootStyle
				} },
				rootProps,
				elementProps
			]
		})
	});
});
//#endregion


//# sourceMappingURL=volume-slider-root.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/utils/merge-props.js"
/*!*******************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/utils/merge-props.js ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeProps: () => (/* binding */ mergeProps)
/* harmony export */ });
"use client";
//#region src/utils/merge-props.ts
/**
* Check if a key is an event handler key (on* with capital letter).
*/
function isEventHandlerKey(key) {
	return key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && key.charCodeAt(2) >= 65 && key.charCodeAt(2) <= 90;
}
/**
* Check if a key/value pair is an event handler (includes undefined values).
*/
function isEventHandler(key, value) {
	return isEventHandlerKey(key) && (typeof value === "function" || typeof value === "undefined");
}
/**
* Merge two event handlers - external runs first, ours runs second.
*/
function mergeEventHandlers(ours, theirs) {
	if (!theirs) return ours;
	if (!ours) return theirs;
	return (event) => {
		theirs(event);
		ours(event);
	};
}
/**
* Merge two className values - concatenate strings.
*/
function mergeClassNames(ours, theirs) {
	if (theirs && ours) return `${theirs} ${ours}`;
	return theirs || ours;
}
/**
* Merge two style objects - theirs overwrites conflicts.
*/
function mergeStyles(ours, theirs) {
	if (!theirs) return ours;
	if (!ours) return theirs;
	return {
		...ours,
		...theirs
	};
}
/**
* Merge a single props object into accumulated result.
*/
function mergeOne(merged, props) {
	if (!props) return merged;
	for (const key in props) {
		const value = props[key];
		if (key === "className") merged.className = mergeClassNames(merged.className, value);
		else if (key === "style") merged.style = mergeStyles(merged.style, value);
		else if (isEventHandler(key, value)) merged[key] = mergeEventHandlers(merged[key], value);
		else merged[key] = value;
	}
	return merged;
}
/**
* Merge multiple props objects.
*
* - Event handlers (on*): chained - external first, ours second
* - className: concatenated
* - style: merged objects (external wins conflicts)
* - other: last one wins
*
* @public
* @example
* ```ts
* const merged = mergeProps(
*   { onClick: ourHandler, className: 'base' },
*   { onClick: theirHandler, className: 'custom' }
* );
* // { onClick: chainedHandler, className: 'custom base' }
* ```
*/
function mergeProps(...propSets) {
	let merged = {};
	for (const props of propSets) merged = mergeOne(merged, props);
	return merged;
}
//#endregion


//# sourceMappingURL=merge-props.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/utils/use-composed-refs.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/utils/use-composed-refs.js ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   composeRefs: () => (/* binding */ composeRefs),
/* harmony export */   useComposedRefs: () => (/* binding */ useComposedRefs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");
"use client";


//#region src/utils/use-composed-refs.ts
/**
* Set a given ref to a given value.
*
* Handles both callback refs and RefObject(s).
*
* @returns Cleanup function if the ref callback returned one (React 19+)
*/
function setRef(ref, value) {
	if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_1__.isFunction)(ref)) return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
/**
* Compose multiple refs into a single callback ref.
*
* @example
* ```tsx
* const composedRef = composeRefs(ref1, ref2, ref3);
* return <div ref={composedRef} />;
* ```
*/
function composeRefs(...refs) {
	const flatRefs = refs.flat();
	return (node) => {
		const cleanups = flatRefs.map((ref) => setRef(ref, node));
		if (cleanups.some(_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_1__.isFunction)) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_1__.isFunction)(cleanup)) cleanup();
				else setRef(flatRefs[i], null);
			}
		};
	};
}
/**
* Hook that composes multiple refs into a single callback ref.
*
* Memoized for stable reference.
*
* @example
* ```tsx
* const composedRef = useComposedRefs(forwardedRef, localRef);
* return <div ref={composedRef} />;
* ```
*/
function useComposedRefs(...refs) {
	return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(composeRefs(...refs), [...refs]);
}
//#endregion


//# sourceMappingURL=use-composed-refs.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/utils/use-destroy.js"
/*!*******************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/utils/use-destroy.js ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDestroy: () => (/* binding */ useDestroy)
/* harmony export */ });
/* harmony import */ var _use_latest_ref_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-latest-ref.js */ "./node_modules/@videojs/react/dist/dev/utils/use-latest-ref.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
"use client";


//#region src/utils/use-destroy.ts
/**
* Destroy an instance on unmount, deferring destruction to survive React
* StrictMode's simulated unmount/re-mount cycle.
*
* StrictMode runs effects, then immediately runs cleanup, then re-runs
* effects — all synchronously. By deferring `destroy()` to a macrotask,
* the re-mount effect can cancel it before it fires.
*
* @param instance - Object with a `destroy()` method.
* @param setup - Optional setup called on first mount. Skipped on StrictMode
*   re-mount since the previous setup was never torn down.
* @param teardown - Optional teardown called right before `destroy()` on real
*   unmount. Skipped on StrictMode simulated unmount.
*/
function useDestroy(instance, setup, teardown) {
	const pendingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
	const setupRef = (0,_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_0__.useLatestRef)(setup);
	const teardownRef = (0,_use_latest_ref_js__WEBPACK_IMPORTED_MODULE_0__.useLatestRef)(teardown);
	(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
		if (pendingRef.current !== null) {
			clearTimeout(pendingRef.current);
			pendingRef.current = null;
		} else setupRef.current?.();
		return () => {
			pendingRef.current = setTimeout(() => {
				teardownRef.current?.();
				instance.destroy();
			}, 0);
		};
	}, [instance]);
}
//#endregion


//# sourceMappingURL=use-destroy.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/utils/use-force-render.js"
/*!************************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/utils/use-force-render.js ***!
  \************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useForceRender: () => (/* binding */ useForceRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";

//#region src/utils/use-force-render.ts
function useForceRender() {
	const [, forceRender] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)((c) => c + 1, 0);
	return forceRender;
}
//#endregion


//# sourceMappingURL=use-force-render.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/utils/use-latest-ref.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/utils/use-latest-ref.js ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLatestRef: () => (/* binding */ useLatestRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";

//#region src/utils/use-latest-ref.ts
/**
* Keep a ref that always points to the latest value.
*
* Useful for capturing callbacks or derived values inside closures
* that are created once (e.g. factory callbacks) without stale reads.
*/
function useLatestRef(value) {
	const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
	ref.current = value;
	return ref;
}
//#endregion


//# sourceMappingURL=use-latest-ref.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/utils/use-render.js"
/*!******************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/utils/use-render.js ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isRenderProp: () => (/* binding */ isRenderProp),
/* harmony export */   renderElement: () => (/* binding */ renderElement)
/* harmony export */ });
/* harmony import */ var _use_composed_refs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-composed-refs.js */ "./node_modules/@videojs/react/dist/dev/utils/use-composed-refs.js");
/* harmony import */ var _merge_props_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merge-props.js */ "./node_modules/@videojs/react/dist/dev/utils/merge-props.js");
/* harmony import */ var _videojs_core_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/core/dom */ "./node_modules/@videojs/core/dist/dev/dom/utils/state-data-attrs.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");
"use client";





//#region src/utils/use-render.tsx
/** Check if a value is a render prop (function or React element). */
function isRenderProp(value) {
	return (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_4__.isFunction)(value) || (0,react__WEBPACK_IMPORTED_MODULE_3__.isValidElement)(value);
}
function resolveClassName(className, state) {
	return (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_4__.isFunction)(className) ? className(state) : className;
}
function resolveStyle(style, state) {
	return (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_4__.isFunction)(style) ? style(state) : style;
}
function getElementRef(element) {
	const elementAny = element;
	return elementAny.ref ?? elementAny.props?.ref;
}
/**
* Render a UI component element.
*
* Handles:
* - Default tag rendering
* - Render prop (element or function)
* - Props merging (event handlers chained, className concatenated, style merged)
* - Ref composition
* - className/style as functions of state
*
* @public
* @example
* ```tsx
* return renderElement('button', componentProps, {
*   state,
*   ref: [forwardedRef, buttonRef],
*   props: [{ type: 'button' }, elementProps, getButtonProps],
* });
* ```
*/
function renderElement(element, componentProps, params) {
	const { className: classNameProp, style: styleProp, render } = componentProps;
	const { state, ref, props, stateAttrMap } = params;
	const className = resolveClassName(classNameProp, state);
	const style = resolveStyle(styleProp, state);
	const mergedProps = (0,_merge_props_js__WEBPACK_IMPORTED_MODULE_1__.mergeProps)((0,_videojs_core_dom__WEBPACK_IMPORTED_MODULE_2__.getStateDataAttrs)(state, stateAttrMap), ...Array.isArray(props) ? props : props ? [props] : []);
	if (className !== void 0) mergedProps.className = mergedProps.className ? `${mergedProps.className} ${className}` : className;
	if (style !== void 0) mergedProps.style = mergedProps.style ? {
		...mergedProps.style,
		...style
	} : style;
	if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_4__.isFunction)(render)) {
		const mergedRef = (0,_use_composed_refs_js__WEBPACK_IMPORTED_MODULE_0__.composeRefs)(ref, mergedProps.ref);
		return render({
			...mergedProps,
			ref: mergedRef
		}, state);
	}
	if ((0,react__WEBPACK_IMPORTED_MODULE_3__.isValidElement)(render)) {
		const elementRef = getElementRef(render);
		const mergedRef = (0,_use_composed_refs_js__WEBPACK_IMPORTED_MODULE_0__.composeRefs)(ref, mergedProps.ref, elementRef);
		const elementProps = (0,_merge_props_js__WEBPACK_IMPORTED_MODULE_1__.mergeProps)(mergedProps, render.props);
		elementProps.ref = mergedRef;
		return (0,react__WEBPACK_IMPORTED_MODULE_3__.cloneElement)(render, elementProps);
	}
	mergedProps.ref = (0,_use_composed_refs_js__WEBPACK_IMPORTED_MODULE_0__.composeRefs)(ref, mergedProps.ref);
	return (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(element, mergedProps);
}
//#endregion


//# sourceMappingURL=use-render.js.map

/***/ },

/***/ "./node_modules/@videojs/react/dist/dev/utils/use-safe-id.js"
/*!*******************************************************************!*\
  !*** ./node_modules/@videojs/react/dist/dev/utils/use-safe-id.js ***!
  \*******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSafeId: () => (/* binding */ useSafeId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";

//#region src/utils/use-safe-id.ts
const UNSAFE_CHARS = /[^a-zA-Z0-9_-]/g;
/**
* Generate a CSS-safe identifier from React's `useId()`.
*
* `useId()` returns values like `:r0:` which contain colons — invalid
* in CSS `<dashed-ident>` tokens (used by `anchor-name` / `position-anchor`).
* This hook strips non-alphanumeric/underscore/hyphen characters and
* optionally prepends a prefix.
*/
function useSafeId(prefix) {
	const raw = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)().replace(UNSAFE_CHARS, "");
	return prefix ? `${prefix}-${raw}` : raw;
}
//#endregion


//# sourceMappingURL=use-safe-id.js.map

/***/ },

/***/ "./node_modules/@videojs/store/dist/dev/core/abort-controller-registry.js"
/*!********************************************************************************!*\
  !*** ./node_modules/@videojs/store/dist/dev/core/abort-controller-registry.js ***!
  \********************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbortControllerRegistry: () => (/* binding */ AbortControllerRegistry)
/* harmony export */ });
/* harmony import */ var _videojs_utils_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/utils/events */ "./node_modules/@videojs/utils/dist/events/abort.js");

//#region src/core/abort-controller-registry.ts
var AbortControllerRegistry = class {
	#base = new AbortController();
	#keys = /* @__PURE__ */ new Map();
	/** The attach-scoped signal. Aborts on detach or reattach. */
	get base() {
		return this.#base.signal;
	}
	/** Clears all keyed signals, leaving base intact. */
	clear() {
		for (const controller of this.#keys.values()) controller.abort();
		this.#keys.clear();
	}
	/** Resets base and clears all keyed signals. */
	reset() {
		this.clear();
		this.#base.abort();
		this.#base = new AbortController();
	}
	/** Creates a new signal for the key, superseding any previous signal. */
	supersede(key) {
		this.#keys.get(key)?.abort();
		const controller = new AbortController();
		this.#keys.set(key, controller);
		return (0,_videojs_utils_events__WEBPACK_IMPORTED_MODULE_0__.anyAbortSignal)([this.#base.signal, controller.signal]);
	}
};
//#endregion


//# sourceMappingURL=abort-controller-registry.js.map

/***/ },

/***/ "./node_modules/@videojs/store/dist/dev/core/combine.js"
/*!**************************************************************!*\
  !*** ./node_modules/@videojs/store/dist/dev/core/combine.js ***!
  \**************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   combine: () => (/* binding */ combine)
/* harmony export */ });
//#region src/core/combine.ts
/**
* Combines multiple slices into a single slice.
*
* @param slices - The slices to combine.
* @returns A new slice that represents the combination of the input slices.
*/
function combine(...slices) {
	return {
		state: (ctx) => {
			const states = slices.map((slice) => slice.state(ctx));
			{
				const seen = /* @__PURE__ */ new Set();
				for (const state of states) for (const key of Object.keys(state)) {
					if (seen.has(key)) console.warn(`[vjs-store] combine(): duplicate state key "${key}" — later slice overwrites earlier one`);
					seen.add(key);
				}
			}
			return Object.assign({}, ...states);
		},
		attach: (ctx) => {
			for (const slice of slices) try {
				slice.attach?.(ctx);
			} catch (err) {
				ctx.reportError(err);
			}
		}
	};
}
//#endregion


//# sourceMappingURL=combine.js.map

/***/ },

/***/ "./node_modules/@videojs/store/dist/dev/core/errors.js"
/*!*************************************************************!*\
  !*** ./node_modules/@videojs/store/dist/dev/core/errors.js ***!
  \*************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoreError: () => (/* binding */ StoreError),
/* harmony export */   isStoreError: () => (/* binding */ isStoreError),
/* harmony export */   throwDestroyedError: () => (/* binding */ throwDestroyedError),
/* harmony export */   throwNoTargetError: () => (/* binding */ throwNoTargetError)
/* harmony export */ });
//#region src/core/errors.ts
var StoreError = class extends Error {
	code;
	cause;
	constructor(code, options) {
		super(options?.message ?? code);
		this.name = "StoreError";
		this.code = code;
		this.cause = options?.cause;
	}
};
function isStoreError(error) {
	return error instanceof StoreError;
}
function throwNoTargetError() {
	throw new StoreError("NO_TARGET");
}
function throwDestroyedError() {
	throw new StoreError("DESTROYED");
}
//#endregion


//# sourceMappingURL=errors.js.map

/***/ },

/***/ "./node_modules/@videojs/store/dist/dev/core/selector.js"
/*!***************************************************************!*\
  !*** ./node_modules/@videojs/store/dist/dev/core/selector.js ***!
  \***************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSelector: () => (/* binding */ createSelector)
/* harmony export */ });
/* harmony import */ var _abort_controller_registry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abort-controller-registry.js */ "./node_modules/@videojs/store/dist/dev/core/abort-controller-registry.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors.js */ "./node_modules/@videojs/store/dist/dev/core/errors.js");
/* harmony import */ var _videojs_utils_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/object */ "./node_modules/@videojs/utils/dist/object/pick.js");



//#region src/core/selector.ts
const stateContext = {
	target: _errors_js__WEBPACK_IMPORTED_MODULE_1__.throwNoTargetError,
	signals: new _abort_controller_registry_js__WEBPACK_IMPORTED_MODULE_0__.AbortControllerRegistry(),
	get: _errors_js__WEBPACK_IMPORTED_MODULE_1__.throwNoTargetError,
	set: _errors_js__WEBPACK_IMPORTED_MODULE_1__.throwNoTargetError
};
/**
* Create a type-safe selector for a slice's state.
*
* The selector returns the slice's state, or `undefined` if the slice
* is not configured in the store.
*
* @example
* ```ts
* const selectPlayback = createSelector(playbackSlice);
* selectPlayback(store.state); // { paused, play, pause, ... } | undefined
* selectPlayback.displayName;  // 'playback' (from slice name)
* ```
*
* @param slice - The slice to create a selector for.
*/
function createSelector(slice) {
	const initialState = slice.state(stateContext);
	const keys = Object.keys(initialState);
	const firstKey = keys[0];
	if (!firstKey) return Object.assign(() => void 0, { displayName: slice.name });
	return Object.assign((state) => {
		if (!(firstKey in state)) return void 0;
		return (0,_videojs_utils_object__WEBPACK_IMPORTED_MODULE_2__.pick)(state, keys);
	}, { displayName: slice.name });
}
//#endregion


//# sourceMappingURL=selector.js.map

/***/ },

/***/ "./node_modules/@videojs/store/dist/dev/core/slice.js"
/*!************************************************************!*\
  !*** ./node_modules/@videojs/store/dist/dev/core/slice.js ***!
  \************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defineSlice: () => (/* binding */ defineSlice)
/* harmony export */ });
//#region src/core/slice.ts
function defineSlice() {
	return (config) => config;
}
//#endregion


//# sourceMappingURL=slice.js.map

/***/ },

/***/ "./node_modules/@videojs/store/dist/dev/core/state.js"
/*!************************************************************!*\
  !*** ./node_modules/@videojs/store/dist/dev/core/state.js ***!
  \************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createState: () => (/* binding */ createState),
/* harmony export */   flush: () => (/* binding */ flush),
/* harmony export */   isState: () => (/* binding */ isState)
/* harmony export */ });
/* harmony import */ var _videojs_utils_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/utils/function */ "./node_modules/@videojs/utils/dist/function/noop.js");

//#region src/core/state.ts
let isFlushScheduled = false;
function scheduleFlush() {
	if (isFlushScheduled) return;
	isFlushScheduled = true;
	queueMicrotask(flush);
}
const pendingContainers = /* @__PURE__ */ new Set();
function flush() {
	isFlushScheduled = false;
	for (const container of pendingContainers) container.flush();
	pendingContainers.clear();
}
const hasOwnProp = Object.prototype.hasOwnProperty;
var StateContainer = class {
	#current;
	#listeners = /* @__PURE__ */ new Set();
	#pending = false;
	constructor(initial) {
		this.#current = Object.freeze({ ...initial });
	}
	get current() {
		return this.#current;
	}
	patch(partial) {
		const next = { ...this.#current };
		let changed = false;
		for (const key in partial) {
			if (!hasOwnProp.call(partial, key)) continue;
			const value = partial[key];
			if (!Object.is(this.#current[key], value)) {
				next[key] = value;
				changed = true;
			}
		}
		if (changed) {
			this.#current = Object.freeze(next);
			this.#markPending();
		}
	}
	subscribe(callback, options) {
		const signal = options?.signal;
		if (signal?.aborted) return _videojs_utils_function__WEBPACK_IMPORTED_MODULE_0__.noop;
		this.#listeners.add(callback);
		if (!signal) return () => this.#listeners.delete(callback);
		const onAbort = () => this.#listeners.delete(callback);
		signal.addEventListener("abort", onAbort, { once: true });
		return () => {
			signal.removeEventListener("abort", onAbort);
			this.#listeners.delete(callback);
		};
	}
	flush() {
		if (!this.#pending) return;
		this.#pending = false;
		for (const fn of this.#listeners) fn();
	}
	#markPending() {
		this.#pending = true;
		pendingContainers.add(this);
		scheduleFlush();
	}
};
function createState(initial) {
	return new StateContainer(initial);
}
function isState(value) {
	return value instanceof StateContainer;
}
//#endregion


//# sourceMappingURL=state.js.map

/***/ },

/***/ "./node_modules/@videojs/store/dist/dev/core/store.js"
/*!************************************************************!*\
  !*** ./node_modules/@videojs/store/dist/dev/core/store.js ***!
  \************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStore: () => (/* binding */ createStore),
/* harmony export */   isStore: () => (/* binding */ isStore)
/* harmony export */ });
/* harmony import */ var _abort_controller_registry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abort-controller-registry.js */ "./node_modules/@videojs/store/dist/dev/core/abort-controller-registry.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors.js */ "./node_modules/@videojs/store/dist/dev/core/errors.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state.js */ "./node_modules/@videojs/store/dist/dev/core/state.js");
/* harmony import */ var _videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/utils/predicate */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");




//#region src/core/store.ts
const STORE_SYMBOL = Symbol.for("@videojs/store");
function createStore() {
	return (slice, options = {}) => {
		let target = null;
		let destroyed = false;
		const setupAbort = new AbortController();
		const signals = new _abort_controller_registry_js__WEBPACK_IMPORTED_MODULE_0__.AbortControllerRegistry();
		let state;
		function validate() {
			if (destroyed) (0,_errors_js__WEBPACK_IMPORTED_MODULE_1__.throwDestroyedError)();
			if (!target) (0,_errors_js__WEBPACK_IMPORTED_MODULE_1__.throwNoTargetError)();
		}
		const initialState = slice.state({
			target: () => {
				validate();
				return target;
			},
			signals,
			get: () => state.current,
			set: (partial) => state.patch(partial)
		});
		state = (0,_state_js__WEBPACK_IMPORTED_MODULE_2__.createState)(initialState);
		const store = {
			[STORE_SYMBOL]: true,
			get $state() {
				return state;
			},
			get target() {
				return target;
			},
			get destroyed() {
				return destroyed;
			},
			get state() {
				return state.current;
			},
			attach,
			destroy,
			subscribe
		};
		for (const key of Object.keys(initialState)) Object.defineProperty(store, key, {
			get: () => state.current[key],
			enumerable: true
		});
		try {
			options.onSetup?.({
				store,
				signal: setupAbort.signal
			});
		} catch (error) {
			reportError(error);
		}
		return store;
		function attach(newTarget) {
			if (destroyed) (0,_errors_js__WEBPACK_IMPORTED_MODULE_1__.throwDestroyedError)();
			signals.reset();
			target = newTarget;
			const attachContext = {
				target: newTarget,
				signal: signals.base,
				get: () => state.current,
				set: (partial) => state.patch(partial),
				reportError,
				store: {
					get state() {
						return state.current;
					},
					subscribe
				}
			};
			try {
				slice.attach?.(attachContext);
			} catch (error) {
				reportError(error);
			}
			try {
				options.onAttach?.({
					store,
					target: newTarget,
					signal: signals.base
				});
			} catch (error) {
				reportError(error);
			}
			return detach;
		}
		function detach() {
			if ((0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_3__.isNull)(target)) return;
			signals.reset();
			target = null;
			state.patch(initialState);
		}
		function destroy() {
			if (destroyed) return;
			destroyed = true;
			detach();
			setupAbort.abort();
		}
		function subscribe(callback, options) {
			return state.subscribe(callback, options);
		}
		function reportError(error) {
			if (options.onError) options.onError({
				store,
				error
			});
			else console.error("[vjs-store]", error);
		}
	};
}
function isStore(value) {
	return (0,_videojs_utils_predicate__WEBPACK_IMPORTED_MODULE_3__.isObject)(value) && STORE_SYMBOL in value;
}
//#endregion


//# sourceMappingURL=store.js.map

/***/ },

/***/ "./node_modules/@videojs/store/dist/dev/react/hooks/use-selector.js"
/*!**************************************************************************!*\
  !*** ./node_modules/@videojs/store/dist/dev/react/hooks/use-selector.js ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSelector: () => (/* binding */ useSelector)
/* harmony export */ });
/* harmony import */ var _core_shallow_equal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/shallow-equal.js */ "./node_modules/@videojs/utils/dist/object/shallow-equal.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");


//#region src/react/hooks/use-selector.ts
/**
* Subscribe to derived state with customizable equality check.
*
* Low-level hook used internally by `useStore` and `useSnapshot`.
*
* @param subscribe - Subscribe function that returns an unsubscribe callback.
* @param getSnapshot - Returns the current snapshot value.
* @param selector - Derives a value from the snapshot.
* @param isEqual - Custom equality function. Defaults to `shallowEqual`.
*/
function useSelector(subscribe, getSnapshot, selector, isEqual = _core_shallow_equal_js__WEBPACK_IMPORTED_MODULE_0__.shallowEqual) {
	const cache = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(void 0);
	const getSelectedSnapshot = () => {
		const next = selector(getSnapshot());
		if (cache.current !== void 0 && isEqual(cache.current, next)) return cache.current;
		cache.current = next;
		return next;
	};
	return (0,react__WEBPACK_IMPORTED_MODULE_1__.useSyncExternalStore)(subscribe, getSelectedSnapshot, getSelectedSnapshot);
}
//#endregion


//# sourceMappingURL=use-selector.js.map

/***/ },

/***/ "./node_modules/@videojs/store/dist/dev/react/hooks/use-snapshot.js"
/*!**************************************************************************!*\
  !*** ./node_modules/@videojs/store/dist/dev/react/hooks/use-snapshot.js ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSnapshot: () => (/* binding */ useSnapshot)
/* harmony export */ });
/* harmony import */ var _use_selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-selector.js */ "./node_modules/@videojs/store/dist/dev/react/hooks/use-selector.js");
/* harmony import */ var _videojs_utils_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/function */ "./node_modules/@videojs/utils/dist/function/identity.js");


//#region src/react/hooks/use-snapshot.ts
function useSnapshot(state, selector, isEqual) {
	return (0,_use_selector_js__WEBPACK_IMPORTED_MODULE_0__.useSelector)((cb) => state.subscribe(cb), () => state.current, selector ?? _videojs_utils_function__WEBPACK_IMPORTED_MODULE_1__.identity, isEqual);
}
//#endregion


//# sourceMappingURL=use-snapshot.js.map

/***/ },

/***/ "./node_modules/@videojs/store/dist/dev/react/hooks/use-store.js"
/*!***********************************************************************!*\
  !*** ./node_modules/@videojs/store/dist/dev/react/hooks/use-store.js ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStore: () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var _use_selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-selector.js */ "./node_modules/@videojs/store/dist/dev/react/hooks/use-selector.js");
/* harmony import */ var _videojs_utils_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @videojs/utils/function */ "./node_modules/@videojs/utils/dist/function/identity.js");
/* harmony import */ var _videojs_utils_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/utils/function */ "./node_modules/@videojs/utils/dist/function/noop.js");


//#region src/react/hooks/use-store.ts
const noopSubscribe = () => _videojs_utils_function__WEBPACK_IMPORTED_MODULE_2__.noop;
function useStore(store, selector, isEqual) {
	return (0,_use_selector_js__WEBPACK_IMPORTED_MODULE_0__.useSelector)(selector ? (cb) => store.subscribe(cb) : noopSubscribe, selector ? () => store.state : () => store, selector ?? _videojs_utils_function__WEBPACK_IMPORTED_MODULE_1__.identity, isEqual);
}
//#endregion


//# sourceMappingURL=use-store.js.map

/***/ },

/***/ "./node_modules/@videojs/utils/dist/dom/direction.js"
/*!***********************************************************!*\
  !*** ./node_modules/@videojs/utils/dist/dom/direction.js ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isRTL: () => (/* binding */ isRTL)
/* harmony export */ });
//#region src/dom/direction.ts
/** Check whether an element's text direction is right-to-left. */
function isRTL(element) {
	const dir = element.closest("[dir]")?.getAttribute("dir");
	if (dir) return dir.toLowerCase() === "rtl";
	return getComputedStyle(element).direction === "rtl";
}
//#endregion


//# sourceMappingURL=direction.js.map

/***/ },

/***/ "./node_modules/@videojs/utils/dist/dom/event.js"
/*!*******************************************************!*\
  !*** ./node_modules/@videojs/utils/dist/dom/event.js ***!
  \*******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onEvent: () => (/* binding */ onEvent),
/* harmony export */   resolveEventTarget: () => (/* binding */ resolveEventTarget)
/* harmony export */ });
//#region src/dom/event.ts
/** Resolve the deepest event target, preferring composedPath for shadow DOM. */
function resolveEventTarget(event) {
	const path = event.composedPath();
	return path.length > 0 ? path[0] : event.target;
}
function onEvent(target, type, options) {
	return new Promise((resolve, reject) => {
		const handleAbort = () => {
			reject(options?.signal?.reason ?? "Aborted");
		};
		if (options?.signal?.aborted) {
			handleAbort();
			return;
		}
		options?.signal?.addEventListener("abort", handleAbort, { once: true });
		target.addEventListener(type, (event) => {
			options?.signal?.removeEventListener("abort", handleAbort);
			resolve(event);
		}, {
			...options,
			once: true
		});
	});
}
//#endregion


//# sourceMappingURL=event.js.map

/***/ },

/***/ "./node_modules/@videojs/utils/dist/dom/interactive.js"
/*!*************************************************************!*\
  !*** ./node_modules/@videojs/utils/dist/dom/interactive.js ***!
  \*************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EDITABLE_SELECTOR: () => (/* binding */ EDITABLE_SELECTOR),
/* harmony export */   INTERACTIVE_SELECTOR: () => (/* binding */ INTERACTIVE_SELECTOR),
/* harmony export */   isEditableElement: () => (/* binding */ isEditableElement),
/* harmony export */   isEditableTarget: () => (/* binding */ isEditableTarget),
/* harmony export */   isInteractiveActivation: () => (/* binding */ isInteractiveActivation),
/* harmony export */   isInteractiveTarget: () => (/* binding */ isInteractiveTarget)
/* harmony export */ });
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.js */ "./node_modules/@videojs/utils/dist/dom/event.js");

//#region src/dom/interactive.ts
const INTERACTIVE_SELECTOR = [
	"button",
	"input",
	"select",
	"textarea",
	"a[href]",
	"[role=\"button\"]",
	"[role=\"menu\"]",
	"[role=\"menuitem\"]",
	"[role=\"menuitemcheckbox\"]",
	"[role=\"menuitemradio\"]",
	"[role=\"slider\"]",
	"[data-interactive]"
].join(",");
const EDITABLE_SELECTOR = [
	"textarea",
	"select",
	"input:not([type])",
	...[
		"text",
		"search",
		"url",
		"tel",
		"email",
		"password",
		"number"
	].map((type) => `input[type="${type}"]`),
	"[contenteditable]:not([contenteditable=\"false\"])"
].join(",");
function isEditableElement(el) {
	return el.matches(EDITABLE_SELECTOR);
}
/** Whether the keyboard event target is an editable element (input, textarea, etc). */
function isEditableTarget(event) {
	const target = (0,_event_js__WEBPACK_IMPORTED_MODULE_0__.resolveEventTarget)(event);
	return target instanceof Element && isEditableElement(target);
}
/** Whether the event originated from an interactive control (button, slider, etc). */
function isInteractiveTarget(event) {
	const target = (0,_event_js__WEBPACK_IMPORTED_MODULE_0__.resolveEventTarget)(event);
	if (!(target instanceof Element)) return false;
	return target.closest(INTERACTIVE_SELECTOR) !== null;
}
const ACTIVATION_KEYS = new Set([" ", "Enter"]);
/**
* Selector for elements that use Space/Enter as a native activation key.
* Narrower than `INTERACTIVE_SELECTOR` — excludes editable elements like
* `input`, `textarea`, `select` where Space/Enter is text input, not activation.
*/
const ACTIVATABLE_SELECTOR = "button,a[href],[role=\"slider\"],[role=\"button\"]";
/** Whether the event is an activation key on an activatable element (button, link, slider). */
function isInteractiveActivation(event) {
	if (!ACTIVATION_KEYS.has(event.key)) return false;
	const target = (0,_event_js__WEBPACK_IMPORTED_MODULE_0__.resolveEventTarget)(event);
	return target instanceof Element && target.matches(ACTIVATABLE_SELECTOR);
}
//#endregion


//# sourceMappingURL=interactive.js.map

/***/ },

/***/ "./node_modules/@videojs/utils/dist/dom/listen.js"
/*!********************************************************!*\
  !*** ./node_modules/@videojs/utils/dist/dom/listen.js ***!
  \********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listen: () => (/* binding */ listen)
/* harmony export */ });
//#region src/dom/listen.ts
function listen(target, type, listener, options) {
	target.addEventListener(type, listener, options);
	return () => target.removeEventListener(type, listener, options);
}
//#endregion


//# sourceMappingURL=listen.js.map

/***/ },

/***/ "./node_modules/@videojs/utils/dist/dom/platform.js"
/*!**********************************************************!*\
  !*** ./node_modules/@videojs/utils/dist/dom/platform.js ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMacOS: () => (/* binding */ isMacOS)
/* harmony export */ });
//#region src/dom/platform.ts
function isMacOS() {
	return typeof navigator !== "undefined" && /mac/i.test(navigator.userAgent);
}
//#endregion


//# sourceMappingURL=platform.js.map

/***/ },

/***/ "./node_modules/@videojs/utils/dist/dom/popover.js"
/*!*********************************************************!*\
  !*** ./node_modules/@videojs/utils/dist/dom/popover.js ***!
  \*********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tryHidePopover: () => (/* binding */ tryHidePopover),
/* harmony export */   tryShowPopover: () => (/* binding */ tryShowPopover)
/* harmony export */ });
//#region src/dom/popover.ts
function tryShowPopover(el) {
	try {
		el?.showPopover?.();
	} catch {}
}
function tryHidePopover(el) {
	try {
		el?.hidePopover?.();
	} catch {}
}
//#endregion


//# sourceMappingURL=popover.js.map

/***/ },

/***/ "./node_modules/@videojs/utils/dist/dom/style.js"
/*!*******************************************************!*\
  !*** ./node_modules/@videojs/utils/dist/dom/style.js ***!
  \*******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyStyles: () => (/* binding */ applyStyles),
/* harmony export */   resolveCSSLength: () => (/* binding */ resolveCSSLength)
/* harmony export */ });
/* harmony import */ var _string_casing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../string/casing.js */ "./node_modules/@videojs/utils/dist/string/casing.js");

//#region src/dom/style.ts
function applyStyles(element, styles) {
	for (const [prop, value] of Object.entries(styles)) if (typeof value === "string") {
		const key = prop.startsWith("--") ? prop : (0,_string_casing_js__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(prop);
		element.style.setProperty(key, value);
	}
}
function resolveCSSLength(el, value) {
	const trimmed = value.trim();
	if (!trimmed) return 0;
	const parsed = Number.parseFloat(trimmed);
	if (Number.isNaN(parsed)) return 0;
	if (/^-?\d*\.?\d+$/.test(trimmed) || trimmed.endsWith("px")) return parsed;
	const doc = el.ownerDocument;
	const root = doc?.documentElement;
	if (trimmed.endsWith("rem")) return parsed * (root ? Number.parseFloat(getComputedStyle(root).fontSize) || 16 : 16);
	if (trimmed.endsWith("em")) return parsed * (el instanceof HTMLElement ? Number.parseFloat(getComputedStyle(el).fontSize) || 16 : 16);
	if (!doc) return parsed;
	const measurementEl = doc.createElement("div");
	measurementEl.style.position = "absolute";
	measurementEl.style.visibility = "hidden";
	measurementEl.style.pointerEvents = "none";
	measurementEl.style.inlineSize = trimmed;
	measurementEl.style.blockSize = "0";
	measurementEl.style.padding = "0";
	measurementEl.style.border = "0";
	measurementEl.style.inset = "0";
	const parent = doc.body ?? doc.documentElement;
	if (!parent) return parsed;
	parent.appendChild(measurementEl);
	const pixels = measurementEl.getBoundingClientRect().width;
	measurementEl.remove();
	return Number.isFinite(pixels) ? pixels : parsed;
}
//#endregion


//# sourceMappingURL=style.js.map

/***/ },

/***/ "./node_modules/@videojs/utils/dist/dom/supports.js"
/*!**********************************************************!*\
  !*** ./node_modules/@videojs/utils/dist/dom/supports.js ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   supportsAnchorPositioning: () => (/* binding */ supportsAnchorPositioning),
/* harmony export */   supportsAnimationFrame: () => (/* binding */ supportsAnimationFrame),
/* harmony export */   supportsIdleCallback: () => (/* binding */ supportsIdleCallback)
/* harmony export */ });
//#region src/dom/supports.ts
function supportsIdleCallback() {
	return typeof requestIdleCallback === "function";
}
function supportsAnimationFrame() {
	return typeof requestAnimationFrame === "function";
}
function supportsAnchorPositioning() {
	return typeof CSS !== "undefined" && CSS.supports("anchor-name: --a");
}
//#endregion


//# sourceMappingURL=supports.js.map

/***/ },

/***/ "./node_modules/@videojs/utils/dist/dom/text-track.js"
/*!************************************************************!*\
  !*** ./node_modules/@videojs/utils/dist/dom/text-track.js ***!
  \************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findTrackElement: () => (/* binding */ findTrackElement),
/* harmony export */   getTextTrackList: () => (/* binding */ getTextTrackList)
/* harmony export */ });
//#region src/dom/text-track.ts
/** Find the `<track>` element that owns the given `TextTrack`. */
function findTrackElement(media, track) {
	if (!(media instanceof HTMLElement)) return null;
	for (const el of media.querySelectorAll("track")) if (el.track === track) return el;
	return null;
}
function getTextTrackList(media, filterPred) {
	if (!media.textTracks) return [];
	return Array.from(media.textTracks).filter(filterPred).sort(sortByKind);
}
function sortByKind(a, b) {
	return a.kind > b.kind ? 1 : a.kind < b.kind ? -1 : 0;
}
//#endregion


//# sourceMappingURL=text-track.js.map

/***/ },

/***/ "./node_modules/@videojs/utils/dist/dom/time-ranges.js"
/*!*************************************************************!*\
  !*** ./node_modules/@videojs/utils/dist/dom/time-ranges.js ***!
  \*************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serializeTimeRanges: () => (/* binding */ serializeTimeRanges)
/* harmony export */ });
//#region src/dom/time-ranges.ts
/** Converts a TimeRanges object to an array of [start, end] tuples. */
function serializeTimeRanges(ranges) {
	const result = [];
	for (let i = 0; i < ranges.length; i++) result.push([ranges.start(i), ranges.end(i)]);
	return result;
}
//#endregion


//# sourceMappingURL=time-ranges.js.map

/***/ },

/***/ "./node_modules/@videojs/utils/dist/events/abort.js"
/*!**********************************************************!*\
  !*** ./node_modules/@videojs/utils/dist/events/abort.js ***!
  \**********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   abortable: () => (/* binding */ abortable),
/* harmony export */   anyAbortSignal: () => (/* binding */ anyAbortSignal)
/* harmony export */ });
//#region src/events/abort.ts
/**
* Compose multiple abort signals into one that aborts when **any** input fires.
* Uses native `AbortSignal.any` when available, otherwise falls back to a
* manual `AbortController` composition for Chromium ≤115 and similar runtimes.
*/
function anyAbortSignal(signals) {
	if ("any" in AbortSignal) return AbortSignal.any(signals);
	const controller = new AbortController();
	for (const signal of signals) {
		if (signal.aborted) {
			controller.abort(signal.reason);
			return controller.signal;
		}
		signal.addEventListener("abort", () => controller.abort(signal.reason), { signal: controller.signal });
	}
	return controller.signal;
}
/**
* Race a promise against an abort signal. Rejects immediately if the signal
* is already aborted or becomes aborted before the promise settles.
*/
function abortable(promise, signal) {
	if (signal.aborted) return Promise.reject(signal.reason);
	let onAbort;
	return Promise.race([promise, new Promise((_, reject) => {
		onAbort = () => reject(signal.reason);
		signal.addEventListener("abort", onAbort, { once: true });
	})]).finally(() => {
		signal.removeEventListener("abort", onAbort);
	});
}
//#endregion


//# sourceMappingURL=abort.js.map

/***/ },

/***/ "./node_modules/@videojs/utils/dist/function/identity.js"
/*!***************************************************************!*\
  !*** ./node_modules/@videojs/utils/dist/function/identity.js ***!
  \***************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   identity: () => (/* binding */ identity)
/* harmony export */ });
//#region src/function/identity.ts
function identity(value) {
	return value;
}
//#endregion


//# sourceMappingURL=identity.js.map

/***/ },

/***/ "./node_modules/@videojs/utils/dist/function/noop.js"
/*!***********************************************************!*\
  !*** ./node_modules/@videojs/utils/dist/function/noop.js ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noop: () => (/* binding */ noop)
/* harmony export */ });
//#region src/function/noop.ts
function noop(..._args) {}
//#endregion


//# sourceMappingURL=noop.js.map

/***/ },

/***/ "./node_modules/@videojs/utils/dist/function/throttle.js"
/*!***************************************************************!*\
  !*** ./node_modules/@videojs/utils/dist/function/throttle.js ***!
  \***************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
//#region src/function/throttle.ts
/**
* Throttle: limits `fn` to at most once per `ms` window.
*
* - Default (no options): trailing-edge only — the first call schedules a
*   timer; subsequent calls within the window update the arguments. The
*   function fires once per window with the latest arguments.
* - `{ leading: true }`: leading + trailing — the first call invokes
*   immediately and opens a cooldown window. Subsequent calls within the
*   window are coalesced to a single trailing-edge invocation.
*/
function throttle(fn, ms, options) {
	const leading = options?.leading ?? false;
	let timerId = null;
	let latestArgs;
	let hasPending = false;
	function startCooldown() {
		timerId = setTimeout(() => {
			timerId = null;
			if (hasPending) {
				hasPending = false;
				fn(...latestArgs);
				startCooldown();
			}
		}, ms);
	}
	const throttled = (...args) => {
		latestArgs = args;
		if (leading) if (timerId === null) {
			fn(...latestArgs);
			startCooldown();
		} else hasPending = true;
		else {
			if (timerId !== null) return;
			timerId = setTimeout(() => {
				timerId = null;
				fn(...latestArgs);
			}, ms);
		}
	};
	throttled.cancel = () => {
		if (timerId !== null) {
			clearTimeout(timerId);
			timerId = null;
		}
		hasPending = false;
	};
	return throttled;
}
//#endregion


//# sourceMappingURL=throttle.js.map

/***/ },

/***/ "./node_modules/@videojs/utils/dist/number/number.js"
/*!***********************************************************!*\
  !*** ./node_modules/@videojs/utils/dist/number/number.js ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   roundToStep: () => (/* binding */ roundToStep)
/* harmony export */ });
//#region src/number/number.ts
/** Clamp a value between min and max (inclusive). */
function clamp(value, min, max) {
	return Math.max(min, Math.min(max, value));
}
/** Snap a value to the nearest step, offset from min. */
function roundToStep(value, step, min) {
	const nearest = Math.round((value - min) / step) * step + min;
	const dot = `${step}`.indexOf(".");
	return dot === -1 ? nearest : Number(nearest.toFixed(`${step}`.length - dot - 1));
}
//#endregion


//# sourceMappingURL=number.js.map

/***/ },

/***/ "./node_modules/@videojs/utils/dist/object/defaults.js"
/*!*************************************************************!*\
  !*** ./node_modules/@videojs/utils/dist/object/defaults.js ***!
  \*************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaults: () => (/* binding */ defaults)
/* harmony export */ });
/* harmony import */ var _predicate_predicate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../predicate/predicate.js */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");

//#region src/object/defaults.ts
/**
* Creates a new object with default values filled in for undefined properties.
*
* @example
* ```ts
* const props = { label: undefined, disabled: true };
* const defaultProps = { label: '', disabled: false };
* defaults(props, defaultProps); // { label: '', disabled: true }
* ```
*/
function defaults(object, defaultValues) {
	const result = { ...defaultValues };
	for (const key in object) if (!(0,_predicate_predicate_js__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(object[key])) result[key] = object[key];
	return result;
}
//#endregion


//# sourceMappingURL=defaults.js.map

/***/ },

/***/ "./node_modules/@videojs/utils/dist/object/pick.js"
/*!*********************************************************!*\
  !*** ./node_modules/@videojs/utils/dist/object/pick.js ***!
  \*********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pick: () => (/* binding */ pick)
/* harmony export */ });
//#region src/object/pick.ts
/**
* Creates a new object with only the specified keys.
*
* @example
* const obj = { a: 1, b: 2, c: 3 };
* pick(obj, ['a', 'c']); // { a: 1, c: 3 }
*/
function pick(obj, keys) {
	const result = {};
	for (const key of keys) if (Object.hasOwn(obj, key)) result[key] = obj[key];
	return result;
}
//#endregion


//# sourceMappingURL=pick.js.map

/***/ },

/***/ "./node_modules/@videojs/utils/dist/object/shallow-equal.js"
/*!******************************************************************!*\
  !*** ./node_modules/@videojs/utils/dist/object/shallow-equal.js ***!
  \******************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shallowEqual: () => (/* binding */ shallowEqual)
/* harmony export */ });
//#region src/object/shallow-equal.ts
const hasOwn = Object.prototype.hasOwnProperty;
function shallowEqual(a, b) {
	if (Object.is(a, b)) return true;
	if (typeof a !== "object" || a === null || typeof b !== "object" || b === null) return false;
	const keysA = Object.keys(a);
	const keysB = Object.keys(b);
	if (keysA.length !== keysB.length) return false;
	for (const key of keysA) if (!hasOwn.call(b, key) || !Object.is(a[key], b[key])) return false;
	return true;
}
//#endregion


//# sourceMappingURL=shallow-equal.js.map

/***/ },

/***/ "./node_modules/@videojs/utils/dist/predicate/predicate.js"
/*!*****************************************************************!*\
  !*** ./node_modules/@videojs/utils/dist/predicate/predicate.js ***!
  \*****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAbortError: () => (/* binding */ isAbortError),
/* harmony export */   isBoolean: () => (/* binding */ isBoolean),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isNil: () => (/* binding */ isNil),
/* harmony export */   isNull: () => (/* binding */ isNull),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),
/* harmony export */   isPromise: () => (/* binding */ isPromise),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined)
/* harmony export */ });
//#region src/predicate/predicate.ts
function isString(value) {
	return typeof value === "string";
}
function isNumber(value) {
	return typeof value === "number";
}
function isBoolean(value) {
	return typeof value === "boolean";
}
function isFunction(value) {
	return typeof value === "function";
}
function isNull(value) {
	return value === null;
}
function isUndefined(value) {
	return typeof value === "undefined";
}
function isNil(value) {
	return value == null;
}
function isPromise(value) {
	return value instanceof Promise;
}
/**
* Check if a value is an object, excluding null.
*/
function isObject(value) {
	return value !== null && typeof value === "object";
}
/**
* Check if a value is a plain object (not a class instance like Date, Map, etc).
*/
function isPlainObject(value) {
	if (!isObject(value)) return false;
	const proto = Object.getPrototypeOf(value);
	return proto === null || proto === Object.prototype;
}
/**
* Check if a value is an AbortError.
*/
function isAbortError(value) {
	return value instanceof Error && value.name === "AbortError";
}
//#endregion


//# sourceMappingURL=predicate.js.map

/***/ },

/***/ "./node_modules/@videojs/utils/dist/string/casing.js"
/*!***********************************************************!*\
  !*** ./node_modules/@videojs/utils/dist/string/casing.js ***!
  \***********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelCase: () => (/* binding */ camelCase),
/* harmony export */   kebabCase: () => (/* binding */ kebabCase),
/* harmony export */   pascalCase: () => (/* binding */ pascalCase)
/* harmony export */ });
//#region src/string/casing.ts
function pascalCase(str) {
	return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase()).replace(/^(.)/, (_, c) => c.toUpperCase());
}
function camelCase(str) {
	return pascalCase(str).replace(/^(.)/, (_, c) => c.toLowerCase());
}
function kebabCase(str) {
	return str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}
//#endregion


//# sourceMappingURL=casing.js.map

/***/ },

/***/ "./node_modules/@videojs/utils/dist/time/format.js"
/*!*********************************************************!*\
  !*** ./node_modules/@videojs/utils/dist/time/format.js ***!
  \*********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatTime: () => (/* binding */ formatTime),
/* harmony export */   formatTimeAsPhrase: () => (/* binding */ formatTimeAsPhrase),
/* harmony export */   secondsToIsoDuration: () => (/* binding */ secondsToIsoDuration)
/* harmony export */ });
/* harmony import */ var _predicate_predicate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../predicate/predicate.js */ "./node_modules/@videojs/utils/dist/predicate/predicate.js");

//#region src/time/format.ts
const UNIT_LABELS = [
	{
		singular: "hour",
		plural: "hours"
	},
	{
		singular: "minute",
		plural: "minutes"
	},
	{
		singular: "second",
		plural: "seconds"
	}
];
function isValidTime(value) {
	return (0,_predicate_predicate_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value) && Number.isFinite(value);
}
function toTimeUnitPhrase(value, unitIndex) {
	return `${value} ${value === 1 ? UNIT_LABELS[unitIndex]?.singular : UNIT_LABELS[unitIndex]?.plural}`;
}
/**
* Format seconds to digital display string.
*
* @param seconds - Time in seconds (can be negative)
* @param guide - Guide time (typically duration) to determine display format
* @returns Formatted string like "1:30" or "1:05:30"
*
* @example
* formatTime(90) // "1:30"
* formatTime(3661) // "1:01:01"
* formatTime(35, 3600) // "0:00:35" (guided by 1-hour duration)
* formatTime(35, 600) // "00:35" (guided by 10-minute duration)
*/
function formatTime(seconds, guide) {
	if (!isValidTime(seconds)) return "0:00";
	const negative = seconds < 0;
	const positiveSeconds = Math.abs(seconds);
	const h = Math.floor(positiveSeconds / 3600);
	const m = Math.floor(positiveSeconds / 60 % 60);
	const s = Math.floor(positiveSeconds % 60);
	const guideAbs = guide ? Math.abs(guide) : 0;
	const gh = Math.floor(guideAbs / 3600);
	const gm = Math.floor(guideAbs / 60 % 60);
	const showHours = h > 0 || gh > 0;
	const padMinutes = showHours || gm >= 10;
	const hoursStr = showHours ? `${h}:` : "";
	const minutesStr = `${padMinutes && m < 10 ? "0" : ""}${m}:`;
	const secondsStr = s < 10 ? `0${s}` : `${s}`;
	return `${negative ? "-" : ""}${hoursStr}${minutesStr}${secondsStr}`;
}
/**
* Format seconds to human-readable phrase for screen readers.
*
* @param seconds - Time in seconds (negative indicates remaining)
* @returns Human-readable phrase like "1 minute, 30 seconds"
*
* @example
* formatTimeAsPhrase(90) // "1 minute, 30 seconds"
* formatTimeAsPhrase(3661) // "1 hour, 1 minute, 1 second"
* formatTimeAsPhrase(-270) // "4 minutes, 30 seconds remaining"
*/
function formatTimeAsPhrase(seconds) {
	if (!isValidTime(seconds)) return "";
	const negative = seconds < 0;
	const positiveSeconds = Math.abs(seconds);
	const h = Math.floor(positiveSeconds / 3600);
	const m = Math.floor(positiveSeconds / 60 % 60);
	const s = Math.floor(positiveSeconds % 60);
	if (positiveSeconds === 0) return `${toTimeUnitPhrase(0, 2)}${negative ? " remaining" : ""}`;
	return `${[
		h,
		m,
		s
	].map((value, index) => value > 0 ? toTimeUnitPhrase(value, index) : null).filter(Boolean).join(", ")}${negative ? " remaining" : ""}`;
}
/**
* Convert seconds to ISO 8601 duration for datetime attribute.
*
* @param seconds - Time in seconds
* @returns ISO 8601 duration string like "PT1M30S"
*
* @example
* secondsToIsoDuration(90) // "PT1M30S"
* secondsToIsoDuration(3661) // "PT1H1M1S"
*/
function secondsToIsoDuration(seconds) {
	if (!isValidTime(seconds)) return "PT0S";
	const positiveSeconds = Math.abs(seconds);
	const h = Math.floor(positiveSeconds / 3600);
	const m = Math.floor(positiveSeconds / 60 % 60);
	const s = Math.floor(positiveSeconds % 60);
	let duration = "PT";
	if (h > 0) duration += `${h}H`;
	if (m > 0) duration += `${m}M`;
	if (s > 0 || duration === "PT") duration += `${s}S`;
	return duration;
}
//#endregion


//# sourceMappingURL=format.js.map

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./src/blocks/videojs-player/view.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/videojs-player/style.scss");
/* harmony import */ var _Components_Common_Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Common/Style */ "./src/blocks/videojs-player/Components/Common/Style.js");
/* harmony import */ var _Components_Common_VideoJS_VideoJS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/VideoJS/VideoJS */ "./src/blocks/videojs-player/Components/Common/VideoJS/VideoJS.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(".wp-block-vpb-videojs-player");
  blockNameEls.forEach(blockNameEl => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(blockNameEl).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_Common_Style__WEBPACK_IMPORTED_MODULE_2__["default"], {
        attributes: attributes,
        id: blockNameEl.id
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_Common_VideoJS_VideoJS__WEBPACK_IMPORTED_MODULE_3__["default"], {
        attributes: attributes
      })]
    }));
    blockNameEl?.removeAttribute("data-attributes");
  });
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map