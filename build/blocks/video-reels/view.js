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

/***/ "./src/blocks/video-reels/Components/Common/Reels.js"
/*!***********************************************************!*\
  !*** ./src/blocks/video-reels/Components/Common/Reels.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slide */ "./src/blocks/video-reels/Components/Common/Slide.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tile */ "./src/blocks/video-reels/Components/Common/Tile.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/icons */ "./src/blocks/video-reels/utils/icons.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-reels/utils/functions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const Reels = ({
  attributes,
  isEditor = false
}) => {
  const {
    reels: rawReels = [],
    layout = "feed-fullscreen",
    startMuted = true,
    snapBehavior = "mandatory",
    swipeGestures = true,
    keyboardNavigation = true,
    autoplayThreshold = 60,
    preloadStrategy = "next-one",
    thumbnailHoverPreview = true,
    deepLinkHash = true,
    maxClipsPerPage = 0,
    loadMoreLabel = "Load more"
  } = attributes;
  const reels = rawReels;
  const total = reels.length;
  const [visibleCount, setVisibleCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    if (!maxClipsPerPage || maxClipsPerPage <= 0) return total;
    return Math.min(maxClipsPerPage, total);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!maxClipsPerPage || maxClipsPerPage <= 0) setVisibleCount(total);
  }, [maxClipsPerPage, total]);
  const visible = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => reels.slice(0, visibleCount), [reels, visibleCount]);
  const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    if (deepLinkHash) {
      const dl = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_4__.readDeepLinkReel)();
      if (dl != null && dl >= 0 && dl < total) return dl;
    }
    return 0;
  });
  const [isMuted, setIsMuted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!!startMuted);
  const [modalIndex, setModalIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const visibilityRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});

  // Track per-slide intersection ratios; pick most-visible as active.
  const onSlideVisibility = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((index, ratio) => {
    visibilityRef.current[index] = ratio;
    let best = -1;
    let bestRatio = 0;
    Object.keys(visibilityRef.current).forEach(k => {
      const r = visibilityRef.current[k];
      if (r > bestRatio) {
        bestRatio = r;
        best = parseInt(k, 10);
      }
    });
    if (best >= 0 && bestRatio * 100 >= autoplayThreshold) {
      setActiveIndex(prev => prev === best ? prev : best);
    }
  }, [autoplayThreshold]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!deepLinkHash) return;
    if (isEditor) return;
    (0,_utils_functions__WEBPACK_IMPORTED_MODULE_4__.writeDeepLinkReel)(activeIndex);
  }, [activeIndex, deepLinkHash, isEditor]);
  const goTo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(delta => {
    setActiveIndex(prev => {
      const next = Math.max(0, Math.min(visibleCount - 1, prev + delta));
      const root = containerRef.current;
      if (root) {
        const slide = root.querySelector(`.vpb-vr-slide[data-reel-index="${next}"]`);
        if (slide && slide.scrollIntoView) {
          slide.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
      return next;
    });
  }, [visibleCount]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!keyboardNavigation) return undefined;
    if (isEditor) return undefined;
    const handler = e => {
      if (modalIndex != null) {
        if (e.key === "Escape") setModalIndex(null);
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          e.preventDefault();
          setModalIndex(i => Math.min(visibleCount - 1, (i || 0) + 1));
        }
        if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault();
          setModalIndex(i => Math.max(0, (i || 0) - 1));
        }
        return;
      }
      if (!containerRef.current) return;
      const within = containerRef.current.contains(document.activeElement);
      if (!within && document.activeElement !== document.body) return;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        goTo(1);
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(-1);
      }
      if (e.key === "m" || e.key === "M") {
        setIsMuted(m => !m);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goTo, keyboardNavigation, isEditor, modalIndex, visibleCount]);

  // Touch swipe (vertical / horizontal depending on layout)
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!swipeGestures) return undefined;
    if (isEditor) return undefined;
    const el = containerRef.current;
    if (!el) return undefined;
    let startX = 0;
    let startY = 0;
    let tracking = false;
    const isHoriz = layout === "inline-strip";
    const threshold = 50;
    const onStart = e => {
      const t = e.touches ? e.touches[0] : e;
      startX = t.clientX;
      startY = t.clientY;
      tracking = true;
    };
    const onEnd = e => {
      if (!tracking) return;
      tracking = false;
      const t = e.changedTouches ? e.changedTouches[0] : e;
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;
      if (isHoriz) {
        if (Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy)) {
          goTo(dx < 0 ? 1 : -1);
        }
      } else {
        if (Math.abs(dy) > threshold && Math.abs(dy) > Math.abs(dx)) {
          goTo(dy < 0 ? 1 : -1);
        }
      }
    };
    el.addEventListener("touchstart", onStart, {
      passive: true
    });
    el.addEventListener("touchend", onEnd, {
      passive: true
    });
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchend", onEnd);
    };
  }, [goTo, layout, swipeGestures, isEditor]);
  const toggleMute = () => setIsMuted(m => !m);
  const requestFullscreen = el => {
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  };
  const shouldPreload = idx => {
    if (preloadStrategy === "none") return false;
    if (preloadStrategy === "metadata") return true;
    if (preloadStrategy === "next-one") return Math.abs(idx - activeIndex) <= 1;
    if (preloadStrategy === "next-two") return Math.abs(idx - activeIndex) <= 2;
    return false;
  };
  if (!total) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "vpb-vr-root vpb-vr-empty",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        children: "No reels yet. Use the inspector to add your first clip."
      })
    });
  }

  // ---------- Grid layout (grid-then-fullscreen) ----------
  if (layout === "grid-then-fullscreen") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "vpb-vr-root is-grid",
      ref: containerRef,
      style: {
        maxWidth: "none"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "vpb-vr-grid",
        children: visible.map((reel, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Tile__WEBPACK_IMPORTED_MODULE_2__["default"], {
          reel: reel,
          index: idx,
          hoverPreview: !!thumbnailHoverPreview && !isEditor,
          onOpen: i => setModalIndex(i)
        }, reel.id || idx))
      }), !!maxClipsPerPage && visibleCount < total && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        type: "button",
        className: "vpb-vr-load-more",
        onClick: () => setVisibleCount(c => Math.min(total, c + maxClipsPerPage)),
        children: loadMoreLabel
      }), modalIndex != null && !isEditor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "vpb-vr-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Reels viewer",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          className: "vpb-vr-modal-close",
          onClick: () => setModalIndex(null),
          "aria-label": "Close",
          children: _utils_icons__WEBPACK_IMPORTED_MODULE_3__.closeIcon
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "vpb-vr-modal-inner",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Slide__WEBPACK_IMPORTED_MODULE_1__["default"], {
            reel: visible[modalIndex],
            index: modalIndex,
            total: visible.length,
            attributes: attributes,
            isActive: true,
            isEditor: false,
            isMuted: isMuted,
            onToggleMute: toggleMute,
            onVisibilityChange: () => {},
            onFullscreenRequest: requestFullscreen,
            shouldPreload: true
          })
        })]
      })]
    });
  }

  // ---------- Inline strip (horizontal swipe) ----------
  if (layout === "inline-strip") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "vpb-vr-root is-strip",
      ref: containerRef,
      tabIndex: 0,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "vpb-vr-strip",
        children: visible.map((reel, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Slide__WEBPACK_IMPORTED_MODULE_1__["default"], {
          reel: reel,
          index: idx,
          total: visible.length,
          attributes: attributes,
          isActive: idx === activeIndex,
          isEditor: isEditor,
          isMuted: isMuted,
          onToggleMute: toggleMute,
          onVisibilityChange: onSlideVisibility,
          onFullscreenRequest: requestFullscreen,
          shouldPreload: shouldPreload(idx)
        }, reel.id || idx))
      })
    });
  }

  // ---------- Default feed-fullscreen (vertical scroll-snap) ----------
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "vpb-vr-root is-feed",
    ref: containerRef,
    tabIndex: 0,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: `vpb-vr-feed is-snap-${snapBehavior}`,
      children: visible.map((reel, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Slide__WEBPACK_IMPORTED_MODULE_1__["default"], {
        reel: reel,
        index: idx,
        total: visible.length,
        attributes: attributes,
        isActive: idx === activeIndex,
        isEditor: isEditor,
        isMuted: isMuted,
        onToggleMute: toggleMute,
        onVisibilityChange: onSlideVisibility,
        onFullscreenRequest: requestFullscreen,
        shouldPreload: shouldPreload(idx)
      }, reel.id || idx))
    }), !!maxClipsPerPage && visibleCount < total && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
      type: "button",
      className: "vpb-vr-load-more",
      onClick: () => setVisibleCount(c => Math.min(total, c + maxClipsPerPage)),
      children: loadMoreLabel
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reels);

/***/ },

/***/ "./src/blocks/video-reels/Components/Common/Schema.js"
/*!************************************************************!*\
  !*** ./src/blocks/video-reels/Components/Common/Schema.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-reels/utils/functions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const Schema = ({
  attributes
}) => {
  const {
    reels = [],
    feedName = "Video Reels"
  } = attributes;
  if (!reels.length) return null;
  const itemListEl = reels.map((reel, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": "VideoObject",
      name: reel.title || `Reel ${idx + 1}`,
      description: reel.caption || reel.title || "",
      thumbnailUrl: (0,_utils_functions__WEBPACK_IMPORTED_MODULE_0__.resolvePoster)(reel) || undefined,
      contentUrl: reel.url || undefined,
      uploadDate: reel.uploadDate || undefined
    }
  }));
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: feedName,
    numberOfItems: reels.length,
    itemListElement: itemListEl
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data)
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Schema);

/***/ },

/***/ "./src/blocks/video-reels/Components/Common/Slide.js"
/*!***********************************************************!*\
  !*** ./src/blocks/video-reels/Components/Common/Slide.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-reels/utils/functions.js");
/* harmony import */ var _shared_media_EditorEmbedPortal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_shared/media/EditorEmbedPortal */ "./src/blocks/_shared/media/EditorEmbedPortal.js");
/* harmony import */ var _shared_media_AdaptiveVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_shared/media/AdaptiveVideo */ "./src/blocks/_shared/media/AdaptiveVideo.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/icons */ "./src/blocks/video-reels/utils/icons.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const STORAGE_KEY = "vpb.reels.liked";
const loadLiked = () => {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
  } catch (e) {
    return {};
  }
};
const persistLiked = next => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch (e) {
    /* noop */
  }
};
const Slide = ({
  reel,
  index,
  total,
  attributes,
  isActive,
  isEditor,
  isMuted,
  onToggleMute,
  onVisibilityChange,
  onFullscreenRequest,
  shouldPreload
}) => {
  const {
    showProgressBar = true,
    showCaption = true,
    showAuthor = true,
    showCTA = true,
    ctaPosition = "bottom",
    showHashtags = true,
    showActionRail = true,
    showCounter = true,
    autoplayOnVisible = true,
    startMuted = true,
    loopClips = true,
    preloadStrategy = "next-one"
  } = attributes;
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [posterHidden, setPosterHidden] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [liked, setLiked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  // Editor-only: a YouTube/Vimeo embed is mounted (via portal) only after the
  // user clicks play, and torn down when the slide is scrolled out of view.
  const [editorPlaying, setEditorPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const lk = loadLiked();
    setLiked(!!lk[reel.id]);
  }, [reel?.id]);

  // Stop the editor embed (and free the scroll-blocking overlay) once this
  // slide is no longer the active one.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isActive) setEditorPlaying(false);
  }, [isActive]);

  // IntersectionObserver: report visibility to the parent so it can track the
  // active slide. Runs in the editor too, so scrolling pauses the previous clip.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const el = ref.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (onVisibilityChange) {
          onVisibilityChange(index, entry.intersectionRatio);
        }
      });
    }, {
      threshold: [0, 0.25, 0.5, 0.6, 0.75, 1]
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [index, isEditor, onVisibilityChange]);

  // Native video play/pause based on isActive. Non-active clips are paused in
  // BOTH the editor and frontend so scrolling away stops the previous audio;
  // autoplay of the active clip only happens on the frontend.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isActive) {
      if (isEditor || !autoplayOnVisible) return;
      try {
        v.muted = isMuted;
        const p = v.play();
        if (p && typeof p.catch === "function") {
          p.catch(() => {
            /* autoplay blocked */
          });
        }
        setIsPlaying(true);
      } catch (e) {
        /* noop */
      }
    } else {
      try {
        v.pause();
        setIsPlaying(false);
      } catch (e) {
        /* noop */
      }
    }
  }, [isActive, isEditor, autoplayOnVisible, isMuted]);

  // Sync mute toggle into <video>
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = isMuted;
  }, [isMuted]);
  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v) return;
    const dur = v.duration || 0;
    if (!dur) return;
    setProgress(Math.min(100, v.currentTime / dur * 100));
  };
  const handlePlay = () => {
    setIsPlaying(true);
    setPosterHidden(true);
  };
  const handlePause = () => setIsPlaying(false);
  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  };
  const toggleLike = e => {
    if (e) e.stopPropagation();
    const next = !liked;
    setLiked(next);
    const map = loadLiked();
    if (next) map[reel.id] = 1;else delete map[reel.id];
    persistLiked(map);
  };
  const share = async e => {
    if (e) e.stopPropagation();
    if (typeof window === "undefined") return;
    const url = window.location.origin + window.location.pathname + `#reel=${index}`;
    try {
      if (navigator.share) {
        await navigator.share({
          title: reel.title || "Reel",
          url
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      }
    } catch (err) {
      /* user canceled or permission denied */
    }
  };
  const source = reel.source || "mp4";
  const isIframe = source === "youtube" || source === "vimeo";
  const srcUrl = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.buildSrcUrl)(reel);
  const poster = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.resolvePoster)(reel);
  // Where the embed is actually mounted (vs. just showing the poster).
  const iframeFrontend = isIframe && !!srcUrl && isActive && !isEditor;
  const iframeEditor = isIframe && !!srcUrl && isActive && isEditor && editorPlaying;
  const preloadAttr = preloadStrategy === "none" ? "none" : preloadStrategy === "metadata" ? "metadata" : shouldPreload ? "auto" : "metadata";
  const hashtags = Array.isArray(reel.hashtags) ? reel.hashtags : [];
  const ctaClass = `vpb-vr-cta is-${reel.ctaStyle || "solid"} is-at-${ctaPosition}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "vpb-vr-slide",
    ref: ref,
    "data-reel-index": index,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "vpb-vr-media",
      children: [iframeFrontend ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("iframe", {
        src: srcUrl,
        title: reel.title || `Reel ${index + 1}`,
        allow: "autoplay; encrypted-media; picture-in-picture",
        allowFullScreen: true
      }) : null, iframeEditor ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shared_media_EditorEmbedPortal__WEBPACK_IMPORTED_MODULE_2__["default"], {
        src: srcUrl,
        title: reel.title || `Reel ${index + 1}`,
        allow: "autoplay; encrypted-media; picture-in-picture",
        clickThrough: true
      }) : null, !isIframe && srcUrl && (isActive || shouldPreload || isEditor) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shared_media_AdaptiveVideo__WEBPACK_IMPORTED_MODULE_3__["default"], {
        ref: videoRef,
        src: srcUrl,
        sourceType: source,
        poster: poster || undefined,
        preload: preloadAttr,
        muted: startMuted ? true : isMuted,
        loop: loopClips,
        playsInline: true,
        onPlay: handlePlay,
        onPause: handlePause,
        onTimeUpdate: handleTimeUpdate
      }) : null]
    }), poster ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
      className: `vpb-vr-poster ${posterHidden && isPlaying || iframeFrontend || iframeEditor ? "is-hidden" : ""}`,
      src: poster,
      alt: reel.title || "",
      loading: "lazy"
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "vpb-vr-overlay"
    }), !isIframe && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
      type: "button",
      className: "vpb-vr-tap-layer",
      onClick: togglePlay,
      "aria-label": "Toggle play"
    }), !isIframe && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
      type: "button",
      className: `vpb-vr-big-play ${!isPlaying ? "is-visible" : ""}`,
      onClick: togglePlay,
      "aria-label": isPlaying ? "Pause" : "Play",
      children: isPlaying ? _utils_icons__WEBPACK_IMPORTED_MODULE_4__.pauseIcon : _utils_icons__WEBPACK_IMPORTED_MODULE_4__.playIcon
    }), isIframe && isEditor && isActive && srcUrl && !editorPlaying && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
      type: "button",
      className: "vpb-vr-big-play is-visible",
      onClick: () => setEditorPlaying(true),
      "aria-label": "Play video",
      children: _utils_icons__WEBPACK_IMPORTED_MODULE_4__.playIcon
    }), showProgressBar && !isIframe && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "vpb-vr-progress",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "vpb-vr-progress-fill",
        style: {
          width: `${progress}%`
        }
      })
    }), showAuthor && (reel.authorName || reel.authorAvatar) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "vpb-vr-author",
      children: [reel.authorAvatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
        className: "vpb-vr-author-avatar",
        src: reel.authorAvatar,
        alt: reel.authorName || "",
        loading: "lazy"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        className: "vpb-vr-author-avatar",
        "aria-hidden": "true",
        style: {
          display: "inline-block"
        }
      }), reel.authorName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        className: "vpb-vr-author-name",
        children: reel.authorName
      })]
    }), showCounter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      className: "vpb-vr-counter",
      children: `${index + 1} / ${total}`
    }), showCaption && (reel.title || reel.caption) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "vpb-vr-caption",
      children: [reel.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "vpb-vr-title",
        children: reel.title
      }), reel.caption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "vpb-vr-text",
        children: reel.caption
      }), showHashtags && hashtags.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "vpb-vr-hashtags",
        children: hashtags.map((t, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "vpb-vr-hash",
          children: (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.formatHashtag)(t)
        }, i))
      })]
    }), showCTA && reel.ctaLabel && reel.ctaUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: ctaPosition === "center" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
        className: ctaClass,
        href: reel.ctaUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        children: reel.ctaLabel
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "vpb-vr-cta-wrap",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
          className: ctaClass,
          href: reel.ctaUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: reel.ctaLabel
        })
      })
    }), showActionRail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "vpb-vr-rail",
      "aria-label": "Reel actions",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        type: "button",
        className: `vpb-vr-rail-btn ${liked ? "is-active" : ""}`,
        onClick: toggleLike,
        "aria-pressed": liked,
        "aria-label": "Like",
        children: liked ? _utils_icons__WEBPACK_IMPORTED_MODULE_4__.heartFilledIcon : _utils_icons__WEBPACK_IMPORTED_MODULE_4__.heartIcon
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        type: "button",
        className: "vpb-vr-rail-btn",
        onClick: share,
        "aria-label": "Share",
        children: _utils_icons__WEBPACK_IMPORTED_MODULE_4__.shareIcon
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        type: "button",
        className: "vpb-vr-rail-btn",
        onClick: e => {
          e.stopPropagation();
          if (onToggleMute) onToggleMute();
        },
        "aria-label": isMuted ? "Unmute" : "Mute",
        children: isMuted ? _utils_icons__WEBPACK_IMPORTED_MODULE_4__.muteIcon : _utils_icons__WEBPACK_IMPORTED_MODULE_4__.unmuteIcon
      }), !isIframe && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        type: "button",
        className: "vpb-vr-rail-btn",
        onClick: e => {
          e.stopPropagation();
          if (onFullscreenRequest) onFullscreenRequest(videoRef.current);
        },
        "aria-label": "Fullscreen",
        children: _utils_icons__WEBPACK_IMPORTED_MODULE_4__.fullscreenIcon
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide);

/***/ },

/***/ "./src/blocks/video-reels/Components/Common/Style.js"
/*!***********************************************************!*\
  !*** ./src/blocks/video-reels/Components/Common/Style.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-reels/utils/functions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const Style = ({
  attributes,
  id
}) => {
  const {
    aspectRatio = "9:16",
    accentColor = "#136EF5",
    ctaTextColor = "#ffffff",
    overlayTextColor = "#ffffff",
    overlayMutedColor = "rgba(255,255,255,0.78)",
    containerBackground = "#000000",
    overlayGradient = "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.75) 100%)",
    borderRadius = 18,
    cardShadow = {},
    progressBarColor = "#ffffff",
    progressBarTrackColor = "rgba(255,255,255,0.25)",
    actionRailIconColor = "#ffffff",
    hashtagColor = "rgba(255,255,255,0.9)",
    feedMaxWidth = 420,
    containerHeight = 720,
    gridColumns = {
      desktop: 4,
      tablet: 3,
      mobile: 2
    }
  } = attributes;
  const aspect = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_0__.resolveAspect)(aspectRatio);
  const sel = `#${id} .vpb-vr-root`;
  const css = `
    ${sel} {
      --vpb-vr-aspect: ${aspect};
      --vpb-vr-accent: ${accentColor};
      --vpb-vr-cta-text: ${ctaTextColor};
      --vpb-vr-text: ${overlayTextColor};
      --vpb-vr-muted: ${overlayMutedColor};
      --vpb-vr-bg: ${containerBackground};
      --vpb-vr-overlay: ${overlayGradient};
      --vpb-vr-radius: ${borderRadius}px;
      --vpb-vr-shadow: ${(0,_utils_functions__WEBPACK_IMPORTED_MODULE_0__.shadowToCss)(cardShadow)};
      --vpb-vr-progress: ${progressBarColor};
      --vpb-vr-progress-track: ${progressBarTrackColor};
      --vpb-vr-rail-icon: ${actionRailIconColor};
      --vpb-vr-hash-color: ${hashtagColor};
      --vpb-vr-feed-width: ${feedMaxWidth}px;
      --vpb-vr-height: ${containerHeight}px;
      --vpb-vr-cols: ${gridColumns.desktop || 4};
      --vpb-vr-cols-tablet: ${gridColumns.tablet || 3};
      --vpb-vr-cols-mobile: ${gridColumns.mobile || 2};
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

/***/ "./src/blocks/video-reels/Components/Common/Tile.js"
/*!**********************************************************!*\
  !*** ./src/blocks/video-reels/Components/Common/Tile.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/icons */ "./src/blocks/video-reels/utils/icons.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-reels/utils/functions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const Tile = ({
  reel,
  index,
  onOpen,
  hoverPreview
}) => {
  const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [hovering, setHovering] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const poster = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_2__.resolvePoster)(reel);
  const isIframe = reel.source === "youtube" || reel.source === "vimeo";
  const srcUrl = !isIframe ? (0,_utils_functions__WEBPACK_IMPORTED_MODULE_2__.buildSrcUrl)(reel) : "";
  const onEnter = () => {
    if (!hoverPreview || isIframe) return;
    setHovering(true);
    const v = videoRef.current;
    if (v) {
      try {
        v.muted = true;
        v.play().catch(() => {});
      } catch (e) {
        /* ignore */
      }
    }
  };
  const onLeave = () => {
    setHovering(false);
    const v = videoRef.current;
    if (v) {
      try {
        v.pause();
        v.currentTime = 0;
      } catch (e) {
        /* ignore */
      }
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
    type: "button",
    className: "vpb-vr-tile",
    onClick: () => onOpen && onOpen(index),
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    "aria-label": reel.title || `Reel ${index + 1}`,
    children: [poster && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
      src: poster,
      alt: reel.title || "",
      loading: "lazy"
    }), hoverPreview && !isIframe && srcUrl && hovering && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("video", {
      ref: videoRef,
      src: srcUrl,
      muted: true,
      playsInline: true,
      loop: true,
      preload: "metadata"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: "vpb-vr-tile-play",
      children: _utils_icons__WEBPACK_IMPORTED_MODULE_1__.playIcon
    }), (reel.title || reel.authorName) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: "vpb-vr-tile-info",
      children: reel.title || reel.authorName
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tile);

/***/ },

/***/ "./src/blocks/video-reels/utils/functions.js"
/*!***************************************************!*\
  !*** ./src/blocks/video-reels/utils/functions.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildSrcUrl: () => (/* binding */ buildSrcUrl),
/* harmony export */   detectSourceType: () => (/* binding */ detectSourceType),
/* harmony export */   formatHashtag: () => (/* binding */ formatHashtag),
/* harmony export */   getVimeoId: () => (/* binding */ getVimeoId),
/* harmony export */   getYoutubeId: () => (/* binding */ getYoutubeId),
/* harmony export */   isDash: () => (/* binding */ isDash),
/* harmony export */   isHls: () => (/* binding */ isHls),
/* harmony export */   isVimeo: () => (/* binding */ isVimeo),
/* harmony export */   isYoutube: () => (/* binding */ isYoutube),
/* harmony export */   makeId: () => (/* binding */ makeId),
/* harmony export */   parseHashtags: () => (/* binding */ parseHashtags),
/* harmony export */   readDeepLinkReel: () => (/* binding */ readDeepLinkReel),
/* harmony export */   resolveAspect: () => (/* binding */ resolveAspect),
/* harmony export */   resolvePoster: () => (/* binding */ resolvePoster),
/* harmony export */   shadowToCss: () => (/* binding */ shadowToCss),
/* harmony export */   writeDeepLinkReel: () => (/* binding */ writeDeepLinkReel)
/* harmony export */ });
const getYoutubeId = url => {
  if (!url) return "";
  const match = url.match(/(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?|shorts)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : "";
};
const isYoutube = url => !!url && /(?:youtube\.com|youtu\.be)/i.test(url);
const getVimeoId = url => {
  if (!url) return "";
  const match = url.match(/vimeo\.com\/(?:.*#|.*\/videos?\/)?([0-9]+)/i);
  return match ? match[1] : "";
};
const isVimeo = url => !!url && /vimeo\.com/i.test(url);
const isHls = url => !!url && /\.m3u8(\?|$)/i.test(url);
const isDash = url => !!url && /\.mpd(\?|$)/i.test(url);
const detectSourceType = url => {
  if (!url) return "mp4";
  if (isYoutube(url)) return "youtube";
  if (isVimeo(url)) return "vimeo";
  if (isHls(url)) return "hls";
  if (isDash(url)) return "dash";
  return "mp4";
};
const resolveAspect = aspectRatio => {
  if (!aspectRatio) return "9/16";
  return aspectRatio.replace(":", "/");
};
const resolvePoster = reel => {
  if (!reel) return "";
  if (reel.poster) return reel.poster;
  const url = reel.url || "";
  if (reel.source === "youtube" || isYoutube(url)) {
    const id = getYoutubeId(url);
    if (id) return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }
  return "";
};
const makeId = () => `rl-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
const shadowToCss = s => {
  if (!s) return "none";
  return `${s.x || 0}px ${s.y || 0}px ${s.blur || 0}px ${s.spread || 0}px ${s.color || "rgba(0,0,0,0.45)"}`;
};
const formatHashtag = tag => {
  if (!tag) return "";
  const trimmed = String(tag).trim().replace(/^#+/, "");
  return trimmed ? `#${trimmed}` : "";
};
const parseHashtags = input => {
  if (Array.isArray(input)) {
    return input.map(t => String(t).replace(/^#+/, "").trim()).filter(Boolean);
  }
  if (typeof input !== "string") return [];
  return input.split(/[\s,]+/).map(t => t.replace(/^#+/, "").trim()).filter(Boolean);
};
const readDeepLinkReel = () => {
  if (typeof window === "undefined") return null;
  const hash = (window.location.hash || "").replace(/^#/, "");
  if (!hash) return null;
  const params = new URLSearchParams(hash);
  const raw = params.get("reel");
  if (raw == null || raw === "") return null;
  const n = parseInt(raw, 10);
  return Number.isFinite(n) ? n : null;
};
const writeDeepLinkReel = index => {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams((window.location.hash || "").replace(/^#/, ""));
    params.set("reel", String(index));
    const next = `#${params.toString()}`;
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", next);
    } else {
      window.location.hash = next;
    }
  } catch (e) {
    /* ignore */
  }
};
const buildSrcUrl = reel => {
  if (!reel) return "";
  const url = reel.url || "";
  const type = reel.source || detectSourceType(url);
  if (type === "youtube") {
    const id = getYoutubeId(url);
    if (!id) return "";
    const params = new URLSearchParams({
      // Muted autoplay is allowed by browsers; controls let the viewer unmute /
      // pause since the reels tap-layer only drives native <video>.
      autoplay: "1",
      mute: "1",
      controls: "1",
      modestbranding: "1",
      playsinline: "1",
      loop: "1",
      playlist: id,
      rel: "0"
    });
    return `https://www.youtube.com/embed/${id}?${params.toString()}`;
  }
  if (type === "vimeo") {
    const id = getVimeoId(url);
    if (!id) return "";
    const params = new URLSearchParams({
      autoplay: "1",
      muted: "1",
      loop: "1",
      controls: "1",
      playsinline: "1"
    });
    return `https://player.vimeo.com/video/${id}?${params.toString()}`;
  }
  return url;
};

/***/ },

/***/ "./src/blocks/video-reels/utils/icons.js"
/*!***********************************************!*\
  !*** ./src/blocks/video-reels/utils/icons.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockIcon: () => (/* binding */ blockIcon),
/* harmony export */   chevronDownIcon: () => (/* binding */ chevronDownIcon),
/* harmony export */   chevronUpIcon: () => (/* binding */ chevronUpIcon),
/* harmony export */   closeIcon: () => (/* binding */ closeIcon),
/* harmony export */   fullscreenIcon: () => (/* binding */ fullscreenIcon),
/* harmony export */   heartFilledIcon: () => (/* binding */ heartFilledIcon),
/* harmony export */   heartIcon: () => (/* binding */ heartIcon),
/* harmony export */   muteIcon: () => (/* binding */ muteIcon),
/* harmony export */   pauseIcon: () => (/* binding */ pauseIcon),
/* harmony export */   playIcon: () => (/* binding */ playIcon),
/* harmony export */   shareIcon: () => (/* binding */ shareIcon),
/* harmony export */   unmuteIcon: () => (/* binding */ unmuteIcon)
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
  className: "video-reels-icon",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "7",
    y: "2",
    width: "10",
    height: "20",
    rx: "2.5"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
    points: "10,8 10,16 16,12",
    fill: iconColor,
    stroke: "none"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "2",
    y1: "8",
    x2: "4",
    y2: "8"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "2",
    y1: "12",
    x2: "4",
    y2: "12"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "2",
    y1: "16",
    x2: "4",
    y2: "16"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "20",
    y1: "8",
    x2: "22",
    y2: "8"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "20",
    y1: "12",
    x2: "22",
    y2: "12"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "20",
    y1: "16",
    x2: "22",
    y2: "16"
  })]
});
const playIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
    points: "6,4 20,12 6,20",
    fill: "currentColor"
  })
});
const pauseIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "6",
    y: "5",
    width: "4",
    height: "14",
    fill: "currentColor"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "14",
    y: "5",
    width: "4",
    height: "14",
    fill: "currentColor"
  })]
});
const muteIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M3 9v6h4l5 4V5L7 9H3z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "15",
    y1: "9",
    x2: "21",
    y2: "15",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "21",
    y1: "9",
    x2: "15",
    y2: "15",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  })]
});
const unmuteIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M3 9v6h4l5 4V5L7 9H3z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M15 8c1.7 1 2.5 2.4 2.5 4s-.8 3-2.5 4",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  })]
});
const heartIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M12 21s-7-4.5-9.3-9C1 9 2.5 5.5 6 5c2 0 3.5 1.2 4.5 2.8C11.5 6.2 13 5 15 5c3.5.5 5 4 3.3 7C19 16.5 12 21 12 21z",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })
});
const heartFilledIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M12 21s-7-4.5-9.3-9C1 9 2.5 5.5 6 5c2 0 3.5 1.2 4.5 2.8C11.5 6.2 13 5 15 5c3.5.5 5 4 3.3 7C19 16.5 12 21 12 21z",
    fill: "currentColor"
  })
});
const shareIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
    cx: "18",
    cy: "5",
    r: "3"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
    cx: "6",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
    cx: "18",
    cy: "19",
    r: "3"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "8.6",
    y1: "13.5",
    x2: "15.4",
    y2: "17.5"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "15.4",
    y1: "6.5",
    x2: "8.6",
    y2: "10.5"
  })]
});
const fullscreenIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", {
    points: "4,9 4,4 9,4"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", {
    points: "20,9 20,4 15,4"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", {
    points: "4,15 4,20 9,20"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", {
    points: "20,15 20,20 15,20"
  })]
});
const chevronUpIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", {
    points: "6,15 12,9 18,15"
  })
});
const chevronDownIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", {
    points: "6,9 12,15 18,9"
  })
});
const closeIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "6",
    y1: "18",
    x2: "18",
    y2: "6"
  })]
});

/***/ },

/***/ "./src/blocks/video-reels/style.scss"
/*!*******************************************!*\
  !*** ./src/blocks/video-reels/style.scss ***!
  \*******************************************/
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
/******/ 			"blocks/video-reels/view": 0
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
/*!****************************************!*\
  !*** ./src/blocks/video-reels/view.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/video-reels/style.scss");
/* harmony import */ var _Components_Common_Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Common/Style */ "./src/blocks/video-reels/Components/Common/Style.js");
/* harmony import */ var _Components_Common_Reels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/Reels */ "./src/blocks/video-reels/Components/Common/Reels.js");
/* harmony import */ var _Components_Common_Schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Common/Schema */ "./src/blocks/video-reels/Components/Common/Schema.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".wp-block-vpb-video-reels");
  els.forEach(el => {
    let attributes;
    try {
      attributes = JSON.parse(el.dataset.attributes || "{}");
    } catch (err) {
      attributes = {};
    }
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(el).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_Common_Style__WEBPACK_IMPORTED_MODULE_2__["default"], {
        attributes: attributes,
        id: el.id
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_Common_Reels__WEBPACK_IMPORTED_MODULE_3__["default"], {
        attributes: attributes,
        clientId: el.id,
        isEditor: false
      }), attributes?.seoJsonLd !== false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_Common_Schema__WEBPACK_IMPORTED_MODULE_4__["default"], {
        attributes: attributes
      })]
    }));
    el?.removeAttribute("data-attributes");
  });
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map