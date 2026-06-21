/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/_shared/media/AdaptiveVideo.js"
/*!***************************************************!*\
  !*** ./src/blocks/_shared/media/AdaptiveVideo.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


/**
 * A native <video> that transparently plays adaptive streams:
 *   - DASH (.mpd)  -> dash.js
 *   - HLS  (.m3u8) -> native on Safari, otherwise hls.js
 *   - mp4/webm     -> plain native playback
 *
 * Both libraries are loaded with dynamic import() so they are code-split and
 * only fetched when a DASH/HLS source actually plays. Any standard <video>
 * prop (controls, autoPlay, muted, loop, poster, className, style, event
 * handlers, children such as <track>) is passed straight through, and the
 * underlying element ref is forwarded so callers can drive play state.
 *
 * NOTE: `src` is handled imperatively (not rendered as an attribute) so the
 * adaptive libraries can attach cleanly.
 */

const isHlsUrl = u => /\.m3u8(\?|$)/i.test(u || "");
const isDashUrl = u => /\.mpd(\?|$)/i.test(u || "");
const AdaptiveVideo = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  src,
  sourceType,
  muted,
  children,
  ...rest
}, ref) => {
  const innerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => innerRef.current, []);

  // React only sets the `muted` HTML attribute, not the DOM property, but
  // browsers consult the property when enforcing autoplay policy. Setting it
  // imperatively keeps muted autoplay (and mute toggles) working reliably.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const el = innerRef.current;
    if (el) el.muted = !!muted;
  }, [muted]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const el = innerRef.current;
    if (!el || !src) return undefined;
    let destroyed = false;
    let hls = null;
    let dash = null;
    const type = (sourceType || "").toLowerCase();
    const wantDash = type === "dash" || isDashUrl(src);
    const wantHls = type === "hls" || isHlsUrl(src);
    if (wantDash) {
      __webpack_require__.e(/*! import() */ "vendors-node_modules_dashjs_dist_modern_esm_dash_all_min_js").then(__webpack_require__.bind(__webpack_require__, /*! dashjs */ "./node_modules/dashjs/dist/modern/esm/dash.all.min.js")).then(mod => {
        if (destroyed || !innerRef.current) return;
        const dashjs = mod.default || mod;
        dash = dashjs.MediaPlayer().create();
        dash.initialize(el, src, !!el.autoplay);
      }).catch(() => {
        el.src = src;
      });
    } else if (wantHls && !el.canPlayType("application/vnd.apple.mpegurl")) {
      __webpack_require__.e(/*! import() */ "vendors-node_modules_hls_js_dist_hls_mjs").then(__webpack_require__.bind(__webpack_require__, /*! hls.js */ "./node_modules/hls.js/dist/hls.mjs")).then(mod => {
        if (destroyed || !innerRef.current) return;
        const Hls = mod.default || mod;
        if (Hls.isSupported()) {
          hls = new Hls();
          hls.loadSource(src);
          hls.attachMedia(el);
          if (el.autoplay) {
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
              el.play().catch(() => {});
            });
          }
        } else {
          el.src = src;
        }
      }).catch(() => {
        el.src = src;
      });
    } else {
      el.src = src;
    }
    return () => {
      destroyed = true;
      if (hls) {
        try {
          hls.destroy();
        } catch (_) {
          /* ignore */
        }
      }
      if (dash) {
        try {
          dash.reset();
        } catch (_) {
          /* ignore */
        }
      }
    };
  }, [src, sourceType]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("video", {
    ref: innerRef,
    ...rest,
    children: children
  });
});
AdaptiveVideo.displayName = "AdaptiveVideo";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdaptiveVideo);

/***/ },

/***/ "./src/blocks/_shared/media/EditorEmbedPortal.js"
/*!*******************************************************!*\
  !*** ./src/blocks/_shared/media/EditorEmbedPortal.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Editor-only YouTube/Vimeo (or any third-party) embed for the apiVersion-3
 * canvas.
 *
 * Under WordPress Studio the editor canvas is a sandboxed iframe that lacks
 * `allow-same-origin`, so any third-party embed nested inside it crashes and
 * shows a black box. We render the embed iframe into the TOP-LEVEL admin window
 * (a real, unsandboxed origin) and keep it positioned over a placeholder that
 * lives in the canvas. On the frontend this component is never used — callers
 * render a normal inline iframe there.
 *
 * `className` / `style` are applied to the in-canvas placeholder so it can fill
 * whatever container the block uses (modal frame, tile, stage, etc.).
 *
 * `zIndex` allows positioning the portaled embed. For overlay widgets/modals,
 * a high z-index (e.g. 100000) keeps it on top. For background videos, a low
 * z-index (e.g. 0) coupled with transparent editor canvas styles lets the embed
 * sit behind the block's text/controls.
 */

const EditorEmbedPortal = ({
  src,
  title,
  allow,
  className,
  style,
  zIndex = 100000,
  clickThrough = false
}) => {
  const placeholderRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const portalRoot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [rect, setRect] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  // Build the container + embed iframe in the top-level admin document.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const topDoc = window.top?.document || window.document;
    const div = topDoc.createElement("div");
    // If zIndex is low (e.g. background video), or the caller opts into
    // click-through (e.g. a scrollable reels feed), disable pointer-events so
    // the overlay doesn't hijack clicks/wheel.
    const isBg = zIndex <= 0;
    const pointerEvents = isBg || clickThrough ? "none" : "auto";
    div.style.cssText = `position:fixed;z-index:${zIndex};overflow:hidden;background:#000;pointer-events:${pointerEvents};`;
    const iframe = topDoc.createElement("iframe");
    iframe.src = src;
    iframe.title = title || "Video";
    if (allow) iframe.setAttribute("allow", allow);
    iframe.setAttribute("allowfullscreen", "");

    // For background videos, scale up and center the iframe to achieve cover/crop behavior
    // and hide YouTube/Vimeo control bars, matching the frontend CSS.
    if (isBg) {
      iframe.style.cssText = "position:absolute;width:300%;height:300%;top:-100%;left:-100%;border:0;display:block;";
    } else {
      iframe.style.cssText = "width:100%;height:100%;border:0;display:block;";
    }
    div.appendChild(iframe);
    topDoc.body.appendChild(div);
    portalRoot.current = div;
    return () => {
      div.remove();
      portalRoot.current = null;
    };
  }, [src, title, allow, zIndex, clickThrough]);

  // Track the placeholder position (walking iframe boundaries to top-window
  // coordinates) so the overlay stays aligned as the canvas scrolls.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const update = () => {
      const el = placeholderRef.current;
      if (!el) return;
      let box = el.getBoundingClientRect();
      let win = el.ownerDocument.defaultView;
      while (win && win !== window.top) {
        const frameEl = win.frameElement;
        if (!frameEl) break;
        const frameBox = frameEl.getBoundingClientRect();
        box = {
          top: box.top + frameBox.top,
          left: box.left + frameBox.left,
          width: box.width,
          height: box.height
        };
        win = frameEl.ownerDocument.defaultView;
      }
      setRect(prev => prev && prev.top === box.top && prev.left === box.left && prev.width === box.width && prev.height === box.height ? prev : {
        top: box.top,
        left: box.left,
        width: box.width,
        height: box.height
      });
    };
    update();
    const id = setInterval(update, 200);
    return () => clearInterval(id);
  }, []);

  // Keep the top-window container positioned over the placeholder.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!portalRoot.current || !rect) return;
    const s = portalRoot.current.style;
    s.top = `${rect.top}px`;
    s.left = `${rect.left}px`;
    s.width = `${rect.width}px`;
    s.height = `${rect.height}px`;
  }, [rect]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ref: placeholderRef,
    className: className,
    style: {
      width: "100%",
      height: "100%",
      minHeight: "180px",
      background: "transparent",
      ...style
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorEmbedPortal);

/***/ },

/***/ "./src/blocks/video-transcript/Components/Common/Style.js"
/*!****************************************************************!*\
  !*** ./src/blocks/video-transcript/Components/Common/Style.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-transcript/utils/functions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const Style = ({
  attributes,
  id
}) => {
  const {
    highlightColor = '#EEF3FF',
    highlightTextColor = '#136EF5',
    transcriptFontSize = 15,
    transcriptLineHeight = 1.6,
    timestampColor = '#888888',
    panelBg = '#ffffff',
    panelBorderRadius = 8,
    panelBorderColor = '#e5e7eb',
    searchBg = '#f9fafb',
    searchBorderColor = '#e5e7eb',
    cueHoverBg = '#f3f4f6',
    panelHeaderBg = '#f9fafb',
    panelHeaderTextColor = '#374151',
    cueTextColor = '#374151',
    cuePadding = 12,
    aspectRatio = '16:9',
    containerMaxWidth = '960px',
    layout = 'side-by-side',
    videoSplitRatio = '60-40'
  } = attributes;
  const sel = `#${id}`;
  const arCss = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_0__.getAspectRatioCss)(aspectRatio);
  const splits = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_0__.getSplitWidths)(videoSplitRatio, layout);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style", {
    children: `
${sel} {
  max-width: ${containerMaxWidth};
  margin-left: auto;
  margin-right: auto;
}

${sel} .vpbt-layout-wrapper {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

${sel} .vpbt-layout-wrapper.vpbt-layout-stacked {
  flex-direction: column;
}

${sel} .vpbt-layout-wrapper.vpbt-layout-side-by-side,
${sel} .vpbt-layout-wrapper.vpbt-layout-transcript-left {
  flex-direction: row;
}

${sel} .vpbt-layout-wrapper.vpbt-layout-transcript-left .vpbt-video-col {
  order: 2;
}

${sel} .vpbt-layout-wrapper.vpbt-layout-transcript-left .vpbt-transcript-col {
  order: 1;
}

${sel} .vpbt-layout-wrapper.vpbt-layout-side-by-side .vpbt-video-col,
${sel} .vpbt-layout-wrapper.vpbt-layout-transcript-left .vpbt-video-col {
  width: ${splits.video};
  flex-shrink: 0;
}

${sel} .vpbt-layout-wrapper.vpbt-layout-side-by-side .vpbt-transcript-col,
${sel} .vpbt-layout-wrapper.vpbt-layout-transcript-left .vpbt-transcript-col {
  width: ${splits.transcript};
  flex-shrink: 0;
}

${sel} .vpbt-layout-wrapper.vpbt-layout-stacked .vpbt-video-col,
${sel} .vpbt-layout-wrapper.vpbt-layout-stacked .vpbt-transcript-col {
  width: 100%;
}

${sel} .vpbt-video-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: ${arCss};
  background: #000;
  border-radius: ${panelBorderRadius}px;
  overflow: hidden;
}

${sel} .vpbt-video-wrapper video,
${sel} .vpbt-video-wrapper iframe {
  width: 100%;
  height: 100%;
  display: block;
  border: none;
}

${sel} .vpbt-transcript-panel {
  background: ${panelBg};
  border: 1px solid ${panelBorderColor};
  border-radius: ${panelBorderRadius}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

${sel} .vpbt-transcript-header {
  background: ${panelHeaderBg};
  color: ${panelHeaderTextColor};
  padding: 10px 14px;
  font-size: 13px;
  font-weight: 600;
  border-bottom: 1px solid ${panelBorderColor};
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

${sel} .vpbt-search-wrap {
  padding: 8px 10px;
  border-bottom: 1px solid ${panelBorderColor};
  background: ${searchBg};
}

${sel} .vpbt-search-input {
  width: 100%;
  padding: 7px 10px;
  border: 1px solid ${searchBorderColor};
  border-radius: 4px;
  font-size: 13px;
  background: #fff;
  box-sizing: border-box;
  outline: none;
}

${sel} .vpbt-search-input:focus {
  border-color: ${highlightTextColor};
  box-shadow: 0 0 0 2px ${highlightColor};
}

${sel} .vpbt-cues-list {
  overflow-y: auto;
  flex: 1;
  padding: 0;
  margin: 0;
  list-style: none;
}

${sel} .vpbt-cue {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: ${cuePadding}px 14px;
  cursor: pointer;
  font-size: ${transcriptFontSize}px;
  line-height: ${transcriptLineHeight};
  color: ${cueTextColor};
  border-bottom: 1px solid ${panelBorderColor}40;
  transition: background 0.15s ease;
}

${sel} .vpbt-cue:last-child {
  border-bottom: none;
}

${sel} .vpbt-cue:hover {
  background: ${cueHoverBg};
}

${sel} .vpbt-cue.vpbt-cue--active {
  background: ${highlightColor};
  color: ${highlightTextColor};
}

${sel} .vpbt-cue.vpbt-cue--active .vpbt-cue-timestamp {
  color: ${highlightTextColor};
  opacity: 0.75;
}

${sel} .vpbt-cue.vpbt-cue--hidden {
  display: none;
}

${sel} .vpbt-cue-timestamp {
  flex-shrink: 0;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  color: ${timestampColor};
  padding-top: 2px;
  min-width: 38px;
}

${sel} .vpbt-cue-text {
  flex: 1;
}

${sel} .vpbt-no-results {
  padding: 16px 14px;
  color: #9ca3af;
  font-size: 13px;
  text-align: center;
}

@media (max-width: 640px) {
  ${sel} .vpbt-layout-wrapper.vpbt-layout-side-by-side,
  ${sel} .vpbt-layout-wrapper.vpbt-layout-transcript-left {
    flex-direction: column;
  }

  ${sel} .vpbt-layout-wrapper .vpbt-video-col,
  ${sel} .vpbt-layout-wrapper .vpbt-transcript-col {
    width: 100% !important;
    order: unset !important;
  }
}
		`
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ },

/***/ "./src/blocks/video-transcript/Components/Common/TranscriptPlayer.js"
/*!***************************************************************************!*\
  !*** ./src/blocks/video-transcript/Components/Common/TranscriptPlayer.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-transcript/utils/functions.js");
/* harmony import */ var _shared_media_EditorEmbedPortal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_shared/media/EditorEmbedPortal */ "./src/blocks/_shared/media/EditorEmbedPortal.js");
/* harmony import */ var _shared_media_AdaptiveVideo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_shared/media/AdaptiveVideo */ "./src/blocks/_shared/media/AdaptiveVideo.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






/**
 * Build the embeddable video element (native or iframe).
 */

const VideoElement = ({
  videoSource,
  videoUrl,
  posterUrl,
  onRef,
  isEditor = false
}) => {
  if (videoSource === "youtube") {
    const ytId = extractYouTubeId(videoUrl);
    const src = ytId ? `https://www.youtube-nocookie.com/embed/${ytId}?enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}` : "";
    const allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    if (isEditor && src) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shared_media_EditorEmbedPortal__WEBPACK_IMPORTED_MODULE_3__["default"], {
        src: src,
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Video", "video-player-block"),
        allow: allow
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("iframe", {
      ref: onRef,
      src: src,
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Video", "video-player-block"),
      allow: allow,
      allowFullScreen: true,
      style: {
        width: "100%",
        height: "100%",
        border: "none"
      }
    });
  }
  if (videoSource === "vimeo") {
    const vimeoId = extractVimeoId(videoUrl);
    const src = vimeoId ? `https://player.vimeo.com/video/${vimeoId}?api=1` : "";
    const allow = "autoplay; fullscreen; picture-in-picture";
    if (isEditor && src) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shared_media_EditorEmbedPortal__WEBPACK_IMPORTED_MODULE_3__["default"], {
        src: src,
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Video", "video-player-block"),
        allow: allow
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("iframe", {
      ref: onRef,
      src: src,
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Video", "video-player-block"),
      allow: allow,
      allowFullScreen: true,
      style: {
        width: "100%",
        height: "100%",
        border: "none"
      }
    });
  }

  // self-hosted or direct URL (mp4 / webm / hls / dash)
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shared_media_AdaptiveVideo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ref: onRef,
    src: videoUrl,
    sourceType: videoSource,
    poster: posterUrl || undefined,
    controls: true,
    playsInline: true,
    style: {
      width: "100%",
      height: "100%",
      display: "block",
      backgroundColor: "#000"
    }
  });
};
const extractYouTubeId = url => {
  if (!url) return "";
  const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : "";
};
const extractVimeoId = url => {
  if (!url) return "";
  const m = url.match(/vimeo\.com\/(\d+)/);
  return m ? m[1] : "";
};
const TranscriptPlayer = ({
  attributes,
  isEditor = false
}) => {
  const {
    videoSource = "url",
    videoUrl = "",
    posterUrl = "",
    aspectRatio = "16:9",
    transcriptEntries = [],
    layout = "side-by-side",
    transcriptHeight = 420,
    showSearch = true,
    searchPlaceholder = "Search transcript...",
    autoScroll = true,
    showTimestamps = true
  } = attributes;
  const [currentTime, setCurrentTime] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [searchQuery, setSearchQuery] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const videoRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const cueRefs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const isNativeVideo = videoSource !== "youtube" && videoSource !== "vimeo";

  // Listen to timeupdate on native video elements
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isNativeVideo) return;
    const el = videoRef.current;
    if (!el) return;
    const onTimeUpdate = () => setCurrentTime(el.currentTime);
    el.addEventListener("timeupdate", onTimeUpdate);
    return () => el.removeEventListener("timeupdate", onTimeUpdate);
  }, [isNativeVideo, videoUrl]);
  const activeCueIndex = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_2__.findActiveCueIndex)(transcriptEntries, currentTime);

  // Auto-scroll the active cue into view
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!autoScroll || activeCueIndex < 0) return;
    const entry = transcriptEntries[activeCueIndex];
    if (!entry) return;
    const el = cueRefs.current[entry.id];
    if (el && el.scrollIntoView) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  }, [activeCueIndex, autoScroll, transcriptEntries]);
  const handleCueClick = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(entry => {
    if (isNativeVideo && videoRef.current) {
      videoRef.current.currentTime = entry.startTime;
      videoRef.current.play().catch(() => {});
    }
    // For YouTube/Vimeo, postMessage API would be needed; skip in editor
  }, [isNativeVideo]);
  const filteredEntries = searchQuery.trim() ? transcriptEntries.filter(e => e.text.toLowerCase().includes(searchQuery.toLowerCase())) : transcriptEntries;
  const layoutClass = `vpbt-layout-${layout}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: `vpbt-layout-wrapper ${layoutClass}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "vpbt-video-col",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "vpbt-video-wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(VideoElement, {
          videoSource: videoSource,
          videoUrl: videoUrl,
          posterUrl: posterUrl,
          aspectRatio: aspectRatio,
          onRef: videoRef,
          isEditor: isEditor
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "vpbt-transcript-col",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "vpbt-transcript-panel",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "vpbt-transcript-header",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Transcript", "video-player-block")
        }), showSearch && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "vpbt-search-wrap",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
            type: "search",
            className: "vpbt-search-input",
            placeholder: searchPlaceholder,
            value: searchQuery,
            onChange: e => setSearchQuery(e.target.value),
            "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Search transcript", "video-player-block")
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
          className: "vpbt-cues-list",
          style: {
            maxHeight: layout === "stacked" ? `${transcriptHeight}px` : `${transcriptHeight}px`
          },
          role: "list",
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Video transcript", "video-player-block"),
          children: [filteredEntries.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
            className: "vpbt-no-results",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No results found.", "video-player-block")
          }), filteredEntries.map((entry, idx) => {
            const isActive = activeCueIndex >= 0 && transcriptEntries[activeCueIndex]?.id === entry.id;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
              ref: el => {
                cueRefs.current[entry.id] = el;
              },
              className: `vpbt-cue${isActive ? " vpbt-cue--active" : ""}`,
              onClick: () => handleCueClick(entry),
              role: "button",
              tabIndex: 0,
              "aria-label": `${(0,_utils_functions__WEBPACK_IMPORTED_MODULE_2__.formatTime)(entry.startTime)}: ${entry.text}`,
              onKeyDown: e => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCueClick(entry);
                }
              },
              children: [showTimestamps && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "vpbt-cue-timestamp",
                "aria-hidden": "true",
                children: (0,_utils_functions__WEBPACK_IMPORTED_MODULE_2__.formatTime)(entry.startTime)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "vpbt-cue-text",
                children: entry.text
              })]
            }, entry.id || idx);
          })]
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TranscriptPlayer);

/***/ },

/***/ "./src/blocks/video-transcript/utils/functions.js"
/*!********************************************************!*\
  !*** ./src/blocks/video-transcript/utils/functions.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   detectSource: () => (/* binding */ detectSource),
/* harmony export */   findActiveCueIndex: () => (/* binding */ findActiveCueIndex),
/* harmony export */   formatTime: () => (/* binding */ formatTime),
/* harmony export */   getAspectRatioCss: () => (/* binding */ getAspectRatioCss),
/* harmony export */   getSplitWidths: () => (/* binding */ getSplitWidths)
/* harmony export */ });
/**
 * Format seconds to MM:SS string.
 * @param {number} seconds
 * @returns {string}
 */
const formatTime = seconds => {
  if (typeof seconds !== 'number' || isNaN(seconds)) return '00:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

/**
 * Find the active cue index for a given playback time.
 * @param {Array} entries
 * @param {number} currentTime
 * @returns {number} index or -1
 */
const findActiveCueIndex = (entries, currentTime) => {
  if (!Array.isArray(entries)) return -1;
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    if (currentTime >= entry.startTime && currentTime < entry.endTime) {
      return i;
    }
  }
  return -1;
};

/**
 * Get aspect ratio CSS value from the "W:H" string.
 * @param {string} ratio
 * @returns {string}
 */
const getAspectRatioCss = ratio => {
  if (!ratio) return '16 / 9';
  return ratio.replace(':', ' / ');
};

/**
 * Build the column widths from the split ratio string.
 * @param {string} splitRatio e.g. "60-40"
 * @returns {{ video: string, transcript: string }}
 */
const getSplitWidths = (splitRatio, layout) => {
  const parts = (splitRatio || '60-40').split('-');
  const a = parseInt(parts[0], 10) || 60;
  const b = parseInt(parts[1], 10) || 40;
  if (layout === 'transcript-left') {
    return {
      video: `${b}%`,
      transcript: `${a}%`
    };
  }
  return {
    video: `${a}%`,
    transcript: `${b}%`
  };
};

/**
 * Detect the video source type from a URL. YouTube and Vimeo links are
 * recognised by their host patterns; everything else is treated as a direct /
 * self-hosted URL. Used to drop the manual "Source Type" control — the source
 * is inferred from the pasted Video URL instead.
 */
const detectSource = (url = '') => {
  if (/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)/i.test(url)) return 'youtube';
  if (/vimeo\.com\/\d+/i.test(url)) return 'vimeo';
  return 'url';
};

/***/ },

/***/ "./src/blocks/video-transcript/style.scss"
/*!************************************************!*\
  !*** ./src/blocks/video-transcript/style.scss ***!
  \************************************************/
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

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js?ver=" + {"vendors-node_modules_dashjs_dist_modern_esm_dash_all_min_js":"b5c34e9251a7fa72ce76","vendors-node_modules_hls_js_dist_hls_mjs":"52b585a62dbdeb6ed62d"}[chunkId] + "";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "video-player-block:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (globalThis.importScripts) scriptUrl = globalThis.location + "";
/******/ 		var document = globalThis.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/video-transcript/view": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkvideo_player_block"] = globalThis["webpackChunkvideo_player_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************************************!*\
  !*** ./src/blocks/video-transcript/view.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/video-transcript/style.scss");
/* harmony import */ var _Components_Common_Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Common/Style */ "./src/blocks/video-transcript/Components/Common/Style.js");
/* harmony import */ var _Components_Common_TranscriptPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/TranscriptPlayer */ "./src/blocks/video-transcript/Components/Common/TranscriptPlayer.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





document.addEventListener('DOMContentLoaded', () => {
  const blockElements = document.querySelectorAll('.wp-block-vpb-video-transcript');
  blockElements.forEach(blockEl => {
    const attributes = JSON.parse(blockEl.dataset.attributes);
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(blockEl).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_Common_Style__WEBPACK_IMPORTED_MODULE_2__["default"], {
        attributes: attributes,
        id: blockEl.id
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_Common_TranscriptPlayer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        attributes: attributes,
        isEditor: false
      })]
    }));
    blockEl.removeAttribute('data-attributes');
  });
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map