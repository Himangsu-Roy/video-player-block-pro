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

/***/ "./src/blocks/video-comparison/Components/Common/Comparison.js"
/*!*********************************************************************!*\
  !*** ./src/blocks/video-comparison/Components/Common/Comparison.js ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-comparison/utils/functions.js");
/* harmony import */ var _shared_media_AdaptiveVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_shared/media/AdaptiveVideo */ "./src/blocks/_shared/media/AdaptiveVideo.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/icons */ "./src/blocks/video-comparison/utils/icons.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Video Comparison block. Renders two HTML5 video elements layered on top
 * of each other and reveals one over the other via a draggable divider.
 *
 * Playback strategy:
 *   - `synced`      : the "before" video is the leader; the "after" video
 *                     follows its currentTime + play / pause / mute state.
 *                     Resync runs both on the timeupdate loop and whenever
 *                     drift exceeds 0.18s.
 *   - `independent` : both videos play / pause together but their
 *                     timelines drift freely.
 */

const Comparison = ({
  attributes,
  blockId,
  inEditor = false
}) => {
  const {
    beforeVideoUrl,
    afterVideoUrl,
    beforePosterUrl,
    afterPosterUrl,
    orientation = "horizontal",
    initialPosition = 50,
    beforeLabel,
    afterLabel,
    showLabels = true,
    handleStyle = "circle",
    autoplay = true,
    autoplayOnScroll = true,
    loop = true,
    muted = true,
    playsInline = true,
    preload = "metadata",
    hideControls = false,
    playMode = "synced",
    a11yLabel
  } = attributes;
  const [pos, setPos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.clamp)(Number(initialPosition) || 50, 0, 100));
  const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isMuted, setIsMuted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!!muted);
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const beforeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const afterRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const draggingRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const positionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(pos);
  const reactId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  const sliderId = `${blockId || `vpb-vc-${reactId}`}-slider`;
  positionRef.current = pos;

  // Keep state in sync when the editor changes attributes live.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setPos((0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.clamp)(Number(initialPosition) || 50, 0, 100));
  }, [initialPosition]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsMuted(!!muted);
  }, [muted]);

  /* ------------------------------------------------------------------ *
   * Sync helpers
   * ------------------------------------------------------------------ */

  const syncFollower = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (playMode !== "synced") return;
    const a = beforeRef.current;
    const b = afterRef.current;
    if (!a || !b) return;
    if (!isFinite(a.currentTime)) return;
    const drift = Math.abs(a.currentTime - b.currentTime);
    if (drift > 0.18) {
      try {
        b.currentTime = a.currentTime;
      } catch (err) {
        /* noop */
      }
    }
  }, [playMode]);

  /* ------------------------------------------------------------------ *
   * Play / pause / mute control
   * ------------------------------------------------------------------ */

  const playBoth = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const a = beforeRef.current;
    const b = afterRef.current;
    if (!a || !b) return;
    const pa = a.play();
    const pb = b.play();
    [pa, pb].forEach(p => {
      if (p && typeof p.catch === "function") p.catch(() => {});
    });
    setIsPlaying(true);
  }, []);
  const pauseBoth = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const a = beforeRef.current;
    const b = afterRef.current;
    if (a) a.pause();
    if (b) b.pause();
    setIsPlaying(false);
  }, []);
  const togglePlay = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (isPlaying) pauseBoth();else playBoth();
  }, [isPlaying, pauseBoth, playBoth]);
  const toggleMute = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const next = !isMuted;
    setIsMuted(next);
    if (beforeRef.current) beforeRef.current.muted = next;
    if (afterRef.current) afterRef.current.muted = next;
  }, [isMuted]);

  /* ------------------------------------------------------------------ *
   * Source / attribute resets
   * ------------------------------------------------------------------ */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // When the editor swaps a URL, reload so the new source is honoured.
    if (beforeRef.current) beforeRef.current.load();
  }, [beforeVideoUrl]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (afterRef.current) afterRef.current.load();
  }, [afterVideoUrl]);

  /* ------------------------------------------------------------------ *
   * Autoplay (immediate or on-scroll)
   * ------------------------------------------------------------------ */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (inEditor) return undefined;
    if (!autoplay) return undefined;
    if (!autoplayOnScroll || typeof IntersectionObserver === "undefined") {
      playBoth();
      return undefined;
    }
    const target = containerRef.current;
    if (!target) return undefined;
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) playBoth();else pauseBoth();
      });
    }, {
      threshold: 0.35
    });
    io.observe(target);
    return () => io.disconnect();
  }, [inEditor, autoplay, autoplayOnScroll, playBoth, pauseBoth]);

  /* ------------------------------------------------------------------ *
   * Pointer drag handling for the divider
   * ------------------------------------------------------------------ */

  const updatePositionFromEvent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((clientX, clientY) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    let next;
    if (orientation === "vertical") {
      next = (clientY - rect.top) / rect.height * 100;
    } else {
      next = (clientX - rect.left) / rect.width * 100;
    }
    setPos((0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.clamp)(next, 0, 100));
  }, [orientation]);
  const onPointerDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    draggingRef.current = true;
    try {
      e.currentTarget.setPointerCapture?.(e.pointerId);
    } catch (err) {
      /* noop */
    }
    updatePositionFromEvent(e.clientX, e.clientY);
  }, [updatePositionFromEvent]);
  const onPointerMove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    if (!draggingRef.current) return;
    updatePositionFromEvent(e.clientX, e.clientY);
  }, [updatePositionFromEvent]);
  const onPointerUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    draggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    } catch (err) {
      /* noop */
    }
  }, []);

  // Allow click-to-jump anywhere on the container surface.
  const onContainerClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    if (e.target.closest(".vpb-vc-controls")) return;
    if (e.target.closest(".vpb-vc-handle")) return;
    updatePositionFromEvent(e.clientX, e.clientY);
  }, [updatePositionFromEvent]);

  // Keyboard accessibility on the slider handle.
  const onHandleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    const step = e.shiftKey ? 10 : 2;
    let next = positionRef.current;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") next -= step;else if (e.key === "ArrowRight" || e.key === "ArrowUp") next += step;else if (e.key === "Home") next = 0;else if (e.key === "End") next = 100;else return;
    e.preventDefault();
    setPos((0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.clamp)(next, 0, 100));
  }, []);

  /* ------------------------------------------------------------------ *
   * Style for the reveal mask
   * ------------------------------------------------------------------ */

  const beforeClip = orientation === "vertical" ? `inset(0 0 ${100 - pos}% 0)` : `inset(0 ${100 - pos}% 0 0)`;
  const dividerStyle = orientation === "vertical" ? {
    top: `${pos}%`,
    left: 0,
    right: 0,
    height: "var(--vpb-vc-divider-w, 3px)",
    transform: "translateY(-50%)"
  } : {
    left: `${pos}%`,
    top: 0,
    bottom: 0,
    width: "var(--vpb-vc-divider-w, 3px)",
    transform: "translateX(-50%)"
  };
  const handlePosStyle = orientation === "vertical" ? {
    top: `${pos}%`,
    left: "50%",
    transform: "translate(-50%, -50%)"
  } : {
    left: `${pos}%`,
    top: "50%",
    transform: "translate(-50%, -50%)"
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    ref: containerRef,
    className: `vpb-vc vpb-vc--${orientation} vpb-vc--handle-${handleStyle}`,
    role: "group",
    "aria-label": a11yLabel || "Before and after video comparison",
    onClick: onContainerClick,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "vpb-vc-frame",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_shared_media_AdaptiveVideo__WEBPACK_IMPORTED_MODULE_2__["default"], {
        ref: afterRef,
        className: "vpb-vc-video vpb-vc-video--after",
        src: afterVideoUrl || undefined,
        poster: afterPosterUrl || undefined,
        muted: isMuted,
        loop: loop,
        playsInline: playsInline,
        preload: preload
        // The "after" video sits on the bottom of the visual stack so the
        // clipped "before" video reveals it. It is the audio-bearing track
        // when unmuted because it represents the post-state.
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_shared_media_AdaptiveVideo__WEBPACK_IMPORTED_MODULE_2__["default"], {
        ref: beforeRef,
        className: "vpb-vc-video vpb-vc-video--before",
        src: beforeVideoUrl || undefined,
        poster: beforePosterUrl || undefined,
        muted: true,
        loop: loop,
        playsInline: playsInline,
        preload: preload,
        style: {
          clipPath: beforeClip,
          WebkitClipPath: beforeClip
        },
        onTimeUpdate: syncFollower,
        onSeeking: syncFollower,
        onPlay: () => {
          setIsPlaying(true);
          if (playMode === "synced") syncFollower();
          const b = afterRef.current;
          if (b && b.paused) {
            const p = b.play();
            if (p && typeof p.catch === "function") p.catch(() => {});
          }
        },
        onPause: () => {
          setIsPlaying(false);
          const b = afterRef.current;
          if (b && !b.paused) b.pause();
        }
      }), showLabels && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [beforeLabel ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "vpb-vc-label vpb-vc-label--before",
          children: beforeLabel
        }) : null, afterLabel ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "vpb-vc-label vpb-vc-label--after",
          children: afterLabel
        }) : null]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "vpb-vc-divider",
        style: dividerStyle,
        "aria-hidden": "true"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: `vpb-vc-handle vpb-vc-handle--${handleStyle}`,
        style: handlePosStyle,
        role: "slider",
        id: sliderId,
        "aria-label": "Comparison divider",
        "aria-orientation": orientation === "vertical" ? "vertical" : "horizontal",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(pos),
        tabIndex: 0,
        onPointerDown: onPointerDown,
        onPointerMove: onPointerMove,
        onPointerUp: onPointerUp,
        onPointerCancel: onPointerUp,
        onKeyDown: onHandleKeyDown,
        children: handleStyle === "arrows" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "vpb-vc-handle-icon",
          "aria-hidden": "true",
          children: _utils_icons__WEBPACK_IMPORTED_MODULE_3__.handleArrowsIcon
        })
      })]
    }), !hideControls && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "vpb-vc-controls",
      role: "toolbar",
      "aria-label": "Playback",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        type: "button",
        className: "vpb-vc-ctrl vpb-vc-ctrl--play",
        onClick: togglePlay,
        "aria-label": isPlaying ? "Pause" : "Play",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "vpb-vc-ctrl-icon",
          "aria-hidden": "true",
          children: isPlaying ? _utils_icons__WEBPACK_IMPORTED_MODULE_3__.pauseIcon : _utils_icons__WEBPACK_IMPORTED_MODULE_3__.playIcon
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        type: "button",
        className: "vpb-vc-ctrl vpb-vc-ctrl--mute",
        onClick: toggleMute,
        "aria-label": isMuted ? "Unmute" : "Mute",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "vpb-vc-ctrl-icon",
          "aria-hidden": "true",
          children: isMuted ? _utils_icons__WEBPACK_IMPORTED_MODULE_3__.muteIcon : _utils_icons__WEBPACK_IMPORTED_MODULE_3__.volumeIcon
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comparison);

/***/ },

/***/ "./src/blocks/video-comparison/Components/Common/Style.js"
/*!****************************************************************!*\
  !*** ./src/blocks/video-comparison/Components/Common/Style.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-comparison/utils/functions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Scoped per-instance styles. Inlined so the editor preview and the
 * frontend render share the same exact CSS.
 */

const Style = ({
  attributes,
  id
}) => {
  const {
    aspectRatio = "16:9",
    customAspectRatio = "21:9",
    borderRadius = 12,
    maxWidth = 1200,
    dividerColor = "#ffffff",
    dividerWidth = 3,
    handleColor = "#ffffff",
    handleBgColor = "#136EF5",
    handleSize = 44,
    labelBgColor = "rgba(0,0,0,0.65)",
    labelTextColor = "#ffffff"
  } = attributes;
  const sel = `#${id}`;
  const ar = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_0__.aspectToCss)(aspectRatio, customAspectRatio);
  const css = `
    ${sel} .vpb-vc {
      max-width: ${Math.max(120, Number(maxWidth) || 1200)}px;
      --vpb-vc-divider-w: ${Math.max(0, Number(dividerWidth) || 0)}px;
      margin-left: auto;
      margin-right: auto;
    }
    ${sel} .vpb-vc-frame {
      aspect-ratio: ${ar};
      border-radius: ${Math.max(0, Number(borderRadius) || 0)}px;
    }
    ${sel} .vpb-vc-divider {
      background: ${dividerColor};
    }
    ${sel} .vpb-vc-handle {
      width: ${Math.max(16, Number(handleSize) || 44)}px;
      height: ${Math.max(16, Number(handleSize) || 44)}px;
      background: ${handleBgColor};
      color: ${handleColor};
    }
    ${sel} .vpb-vc-handle--bar {
      width: ${Math.max(16, Number(handleSize) || 44) * 0.6}px;
      height: ${Math.max(16, Number(handleSize) || 44) * 1.4}px;
      border-radius: 6px;
    }
    ${sel} .vpb-vc-label {
      background: ${labelBgColor};
      color: ${labelTextColor};
    }
  `;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style", {
    dangerouslySetInnerHTML: {
      __html: css
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ },

/***/ "./src/blocks/video-comparison/utils/functions.js"
/*!********************************************************!*\
  !*** ./src/blocks/video-comparison/utils/functions.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aspectToCss: () => (/* binding */ aspectToCss),
/* harmony export */   clamp: () => (/* binding */ clamp)
/* harmony export */ });
/**
 * Aspect ratio string ('16:9') -> CSS aspect-ratio value ('16 / 9').
 */
const aspectToCss = (ar, custom) => {
  if (!ar) return "16 / 9";
  if (ar === "custom") {
    const c = (custom || "21:9").replace(":", " / ");
    return c;
  }
  return ar.replace(":", " / ");
};

/**
 * Clamp a number to [min, max].
 */
const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

/***/ },

/***/ "./src/blocks/video-comparison/utils/icons.js"
/*!****************************************************!*\
  !*** ./src/blocks/video-comparison/utils/icons.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockIcon: () => (/* binding */ blockIcon),
/* harmony export */   handleArrowsIcon: () => (/* binding */ handleArrowsIcon),
/* harmony export */   muteIcon: () => (/* binding */ muteIcon),
/* harmony export */   pauseIcon: () => (/* binding */ pauseIcon),
/* harmony export */   playIcon: () => (/* binding */ playIcon),
/* harmony export */   volumeIcon: () => (/* binding */ volumeIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const iconColor = "#136EF5";
const blockIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: iconColor,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "video-comparison-icon",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "20"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", {
    points: "9,9 6,12 9,15"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", {
    points: "15,9 18,12 15,15"
  })]
});
const playIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: "currentColor",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
    points: "7,5 19,12 7,19"
  })
});
const pauseIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: "currentColor",
  "aria-hidden": "true",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "6",
    y: "5",
    width: "4",
    height: "14"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "14",
    y: "5",
    width: "4",
    height: "14"
  })]
});
const muteIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: "currentColor",
  "aria-hidden": "true",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
    points: "3,9 7,9 12,5 12,19 7,15 3,15"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "16",
    y1: "9",
    x2: "22",
    y2: "15",
    stroke: "currentColor",
    strokeWidth: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "22",
    y1: "9",
    x2: "16",
    y2: "15",
    stroke: "currentColor",
    strokeWidth: "2"
  })]
});
const volumeIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: "currentColor",
  "aria-hidden": "true",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
    points: "3,9 7,9 12,5 12,19 7,15 3,15"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M16 8c1.5 1.2 2.5 2.6 2.5 4s-1 2.8-2.5 4",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  })]
});
const handleArrowsIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", {
    points: "9,7 5,12 9,17"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", {
    points: "15,7 19,12 15,17"
  })]
});

/***/ },

/***/ "./src/blocks/video-comparison/style.scss"
/*!************************************************!*\
  !*** ./src/blocks/video-comparison/style.scss ***!
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
/******/ 			"blocks/video-comparison/view": 0
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
  !*** ./src/blocks/video-comparison/view.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/video-comparison/style.scss");
/* harmony import */ var _Components_Common_Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Common/Style */ "./src/blocks/video-comparison/Components/Common/Style.js");
/* harmony import */ var _Components_Common_Comparison__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/Comparison */ "./src/blocks/video-comparison/Components/Common/Comparison.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".wp-block-vpb-video-comparison");
  els.forEach(el => {
    let attributes;
    try {
      attributes = JSON.parse(el.dataset.attributes || "{}");
    } catch (err) {
      attributes = {};
    }
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(el).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_Common_Style__WEBPACK_IMPORTED_MODULE_2__["default"], {
        attributes: attributes,
        id: el.id
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_Common_Comparison__WEBPACK_IMPORTED_MODULE_3__["default"], {
        attributes: attributes,
        blockId: el.id
      })]
    }));
    el?.removeAttribute("data-attributes");
  });
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map