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

/***/ "./src/blocks/video-playlist/Components/Common/Chapters.js"
/*!*****************************************************************!*\
  !*** ./src/blocks/video-playlist/Components/Common/Chapters.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-playlist/utils/functions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const Chapters = ({
  item,
  currentTime,
  onSeek
}) => {
  const chapters = Array.isArray(item?.chapters) ? item.chapters : [];
  if (!chapters.length) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "vpb-vp-chapters",
    "aria-label": "Chapters",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h5", {
      className: "vpb-vp-chapters-title",
      children: "Chapters"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
      className: "vpb-vp-chapters-list",
      children: chapters.map((c, i) => {
        const next = chapters[i + 1];
        const isActive = currentTime >= (c.time || 0) && (next == null || currentTime < (next.time || 0));
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
          className: `vpb-vp-chapter ${isActive ? "is-active" : ""}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
            type: "button",
            className: "vpb-vp-chapter-btn",
            onClick: () => onSeek && onSeek(c.time || 0),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "vpb-vp-chapter-time",
              children: (0,_utils_functions__WEBPACK_IMPORTED_MODULE_0__.formatTime)(c.time || 0)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "vpb-vp-chapter-label",
              children: c.label || `Chapter ${i + 1}`
            })]
          })
        }, `${c.time}-${i}`);
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chapters);

/***/ },

/***/ "./src/blocks/video-playlist/Components/Common/Player.js"
/*!***************************************************************!*\
  !*** ./src/blocks/video-playlist/Components/Common/Player.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-playlist/utils/functions.js");
/* harmony import */ var _shared_media_EditorEmbedPortal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_shared/media/EditorEmbedPortal */ "./src/blocks/_shared/media/EditorEmbedPortal.js");
/* harmony import */ var _shared_media_AdaptiveVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_shared/media/AdaptiveVideo */ "./src/blocks/_shared/media/AdaptiveVideo.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const YT_ALLOW = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
const VIMEO_ALLOW = "autoplay; fullscreen; picture-in-picture";

/**
 * Resolves a playable URL for an item.
 * Returns { type, url, mediaId } – type one of: youtube | vimeo | native.
 */
const resolveSource = item => {
  const src = item?.source || {};
  const url = src.url || "";
  const type = (src.type || "").toLowerCase();
  if (type === "youtube" || (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.isYoutube)(url)) {
    const id = src.mediaId || (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.getYoutubeId)(url);
    return {
      type: "youtube",
      url,
      mediaId: id
    };
  }
  if (type === "vimeo" || (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.isVimeo)(url)) {
    const id = src.mediaId || (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.getVimeoId)(url);
    return {
      type: "vimeo",
      url,
      mediaId: id
    };
  }
  if (type === "mux" && src.mediaId) {
    return {
      type: "native",
      url: `https://stream.mux.com/${src.mediaId}.m3u8`,
      mediaId: src.mediaId
    };
  }
  return {
    type: "native",
    url,
    mediaId: ""
  };
};
const Player = ({
  item,
  startTime = 0,
  onEnded,
  onTimeUpdate,
  onLoaded,
  inEditor = false
}) => {
  const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const iframeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const seekedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);

  // Keep the latest callbacks in refs so the postMessage effects below don't
  // re-subscribe on every parent render (the parent passes inline callbacks).
  const onTimeUpdateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onTimeUpdate);
  const onLoadedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onLoaded);
  onTimeUpdateRef.current = onTimeUpdate;
  onLoadedRef.current = onLoaded;
  const resolved = resolveSource(item);

  // Native <video>: handle initial seek + play
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    seekedRef.current = false;
  }, [item?.id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (resolved.type !== "native") return undefined;
    const el = videoRef.current;
    if (!el) return undefined;
    const handleLoaded = () => {
      if (!seekedRef.current && startTime && startTime > 0) {
        try {
          el.currentTime = startTime;
        } catch (e) {
          /* noop */
        }
        seekedRef.current = true;
      }
      // Expose a uniform controller so chapter seeking is source-agnostic.
      if (onLoadedRef.current) {
        onLoadedRef.current({
          el,
          seek: t => {
            try {
              el.currentTime = t;
              if (el.paused) el.play().catch(() => {});
            } catch (e) {
              /* noop */
            }
          }
        });
      }
    };
    el.addEventListener("loadedmetadata", handleLoaded);
    return () => {
      el.removeEventListener("loadedmetadata", handleLoaded);
    };
  }, [resolved.type, resolved.url, startTime]);

  // YouTube: drive seek/play and read currentTime over the iframe postMessage
  // API so chapter clicks work without reloading the embed.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (resolved.type !== "youtube") return undefined;
    const iframe = iframeRef.current;
    if (!iframe) return undefined;
    const post = msg => {
      try {
        iframe.contentWindow?.postMessage(JSON.stringify(msg), "https://www.youtube.com");
      } catch (e) {
        /* noop */
      }
    };
    const startListening = () => post({
      event: "listening",
      id: "vpb-vp",
      channel: "widget"
    });
    const onMessage = e => {
      if (typeof e.data !== "string" || !/youtube\.com/.test(e.origin)) return;
      let data;
      try {
        data = JSON.parse(e.data);
      } catch (_) {
        return;
      }
      if (data?.event === "infoDelivery" && data.info && typeof data.info.currentTime === "number") {
        onTimeUpdateRef.current?.(data.info.currentTime);
      }
    };
    window.addEventListener("message", onMessage);
    iframe.addEventListener("load", startListening);
    startListening();
    onLoadedRef.current?.({
      seek: t => {
        post({
          event: "command",
          func: "seekTo",
          args: [t, true]
        });
        post({
          event: "command",
          func: "playVideo",
          args: []
        });
      }
    });
    return () => {
      window.removeEventListener("message", onMessage);
      iframe.removeEventListener("load", startListening);
    };
  }, [resolved.type, resolved.mediaId]);

  // Vimeo: same idea via the Vimeo player postMessage protocol.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (resolved.type !== "vimeo") return undefined;
    const iframe = iframeRef.current;
    if (!iframe) return undefined;
    const post = msg => {
      try {
        iframe.contentWindow?.postMessage(JSON.stringify(msg), "https://player.vimeo.com");
      } catch (e) {
        /* noop */
      }
    };
    const subscribe = () => post({
      method: "addEventListener",
      value: "timeupdate"
    });
    const onMessage = e => {
      if (!/player\.vimeo\.com/.test(e.origin)) return;
      let data = e.data;
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch (_) {
          return;
        }
      }
      if (data?.event === "timeupdate" && data.data && typeof data.data.seconds === "number") {
        onTimeUpdateRef.current?.(data.data.seconds);
      }
    };
    window.addEventListener("message", onMessage);
    iframe.addEventListener("load", subscribe);
    subscribe();
    onLoadedRef.current?.({
      seek: t => {
        post({
          method: "setCurrentTime",
          value: t
        });
        post({
          method: "play"
        });
      }
    });
    return () => {
      window.removeEventListener("message", onMessage);
      iframe.removeEventListener("load", subscribe);
    };
  }, [resolved.type, resolved.mediaId]);
  if (!resolved.url && resolved.type === "native") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "vpb-vp-stage-empty",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        children: "No source set for this item."
      })
    });
  }
  if (resolved.type === "youtube") {
    const params = new URLSearchParams({
      autoplay: "1",
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
      // enablejsapi + origin let us drive seek/play and read currentTime via
      // postMessage, so chapter clicks work for YouTube (not just MP4/HTML5).
      enablejsapi: "1",
      origin: typeof window !== "undefined" ? window.location.origin : ""
    });
    if (startTime > 0) params.set("start", String(Math.floor(startTime)));
    const src = `https://www.youtube.com/embed/${resolved.mediaId}?${params.toString()}`;
    if (inEditor) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_shared_media_EditorEmbedPortal__WEBPACK_IMPORTED_MODULE_2__["default"], {
        src: src,
        title: item?.title || "YouTube video",
        allow: YT_ALLOW
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("iframe", {
      ref: iframeRef,
      src: src,
      title: item?.title || "YouTube video",
      allow: YT_ALLOW,
      allowFullScreen: true
    });
  }
  if (resolved.type === "vimeo") {
    const params = new URLSearchParams({
      autoplay: "1",
      title: "0",
      byline: "0",
      portrait: "0"
    });
    if (startTime > 0) params.set("#t", `${Math.floor(startTime)}s`);
    const src = `https://player.vimeo.com/video/${resolved.mediaId}?${params.toString()}`;
    if (inEditor) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_shared_media_EditorEmbedPortal__WEBPACK_IMPORTED_MODULE_2__["default"], {
        src: src,
        title: item?.title || "Vimeo video",
        allow: VIMEO_ALLOW
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("iframe", {
      ref: iframeRef,
      src: src,
      title: item?.title || "Vimeo video",
      allow: VIMEO_ALLOW,
      allowFullScreen: true
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_shared_media_AdaptiveVideo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: videoRef,
    src: resolved.url,
    sourceType: item?.source?.type,
    controls: true,
    playsInline: true,
    autoPlay: true,
    poster: item?.poster || undefined,
    onEnded: onEnded,
    onTimeUpdate: e => onTimeUpdate && onTimeUpdate(e.currentTarget.currentTime || 0),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("track", {
      kind: "captions"
    })
  }, resolved.url);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ },

/***/ "./src/blocks/video-playlist/Components/Common/Playlist.js"
/*!*****************************************************************!*\
  !*** ./src/blocks/video-playlist/Components/Common/Playlist.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/blocks/video-playlist/Components/Common/Player.js");
/* harmony import */ var _QueueItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueueItem */ "./src/blocks/video-playlist/Components/Common/QueueItem.js");
/* harmony import */ var _Chapters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chapters */ "./src/blocks/video-playlist/Components/Common/Chapters.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/icons */ "./src/blocks/video-playlist/utils/icons.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-playlist/utils/functions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const STORAGE_VERSION = "vpb.vp.v1";
const loadProgress = key => {
  if (typeof window === "undefined" || !key) return null;
  try {
    const raw = window.localStorage.getItem(`${STORAGE_VERSION}.${key}`);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
};
const saveProgress = (key, data) => {
  if (typeof window === "undefined" || !key) return;
  try {
    window.localStorage.setItem(`${STORAGE_VERSION}.${key}`, JSON.stringify(data));
  } catch (e) {
    /* ignore quota errors */
  }
};
const Playlist = ({
  attributes,
  clientId,
  inEditor = false
}) => {
  const {
    items: rawItems = [],
    layout = "queue-right",
    startIndex = 0,
    loopQueue = false,
    shuffle = false,
    autoAdvance = true,
    autoAdvanceDelay = 5,
    showChapters = true,
    showSearch = true,
    rememberProgress = true,
    progressStorageKey = "",
    deepLinkEnabled = true,
    queueTitle = "Up Next"
  } = attributes;
  const storageKey = progressStorageKey || clientId || "video-playlist";

  // Build the order – optionally shuffle on first load.
  const items = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!shuffle) return rawItems;
    return (0,_utils_functions__WEBPACK_IMPORTED_MODULE_5__.shuffleArray)(rawItems);
  }, [rawItems, shuffle]);
  const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    let init = Math.max(0, Math.min(startIndex, items.length - 1));
    if (deepLinkEnabled) {
      const dl = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_5__.readDeepLink)();
      if (dl.index != null && Number.isFinite(dl.index) && dl.index >= 0 && dl.index < items.length) {
        init = dl.index;
      }
    }
    if (rememberProgress) {
      const persisted = loadProgress(storageKey);
      if (persisted && Number.isFinite(persisted.activeIndex) && persisted.activeIndex >= 0 && persisted.activeIndex < items.length) {
        init = persisted.activeIndex;
      }
    }
    return init;
  });
  const [watched, setWatched] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    if (!rememberProgress) return {};
    const persisted = loadProgress(storageKey);
    return persisted?.watched || {};
  });
  const [currentTime, setCurrentTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const playerElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // Initial seek time (deep link or stored position).
  const [initialSeek, setInitialSeek] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    if (deepLinkEnabled) {
      const dl = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_5__.readDeepLink)();
      if (dl.time != null && Number.isFinite(dl.time) && dl.time > 0) {
        return dl.time;
      }
    }
    if (rememberProgress) {
      const persisted = loadProgress(storageKey);
      const t = persisted?.positions?.[items[activeIndex]?.id];
      if (Number.isFinite(t) && t > 0) return t;
    }
    return 0;
  });
  const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [countdown, setCountdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const countdownTimer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // Filtered queue (search) – kept indices stable by reading from items[].
  const visibleItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!search.trim()) return items.map((it, idx) => ({
      it,
      idx
    }));
    const q = search.trim().toLowerCase();
    return items.map((it, idx) => ({
      it,
      idx
    })).filter(({
      it
    }) => [it.title, it.description, it.badge].filter(Boolean).some(s => String(s).toLowerCase().includes(q)));
  }, [items, search]);

  // Persist progress.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!rememberProgress) return;
    const data = loadProgress(storageKey) || {};
    data.activeIndex = activeIndex;
    data.watched = watched;
    saveProgress(storageKey, data);
  }, [activeIndex, watched, rememberProgress, storageKey]);

  // Persist position every few seconds.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!rememberProgress) return;
    const id = items[activeIndex]?.id;
    if (!id || !currentTime) return;
    const data = loadProgress(storageKey) || {};
    data.positions = data.positions || {};
    data.positions[id] = currentTime;
    saveProgress(storageKey, data);
  }, [Math.floor(currentTime / 3), activeIndex, items, rememberProgress, storageKey]);

  // Deep link writer.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!deepLinkEnabled) return;
    (0,_utils_functions__WEBPACK_IMPORTED_MODULE_5__.writeDeepLink)(activeIndex, currentTime);
  }, [activeIndex, Math.floor(currentTime / 5), deepLinkEnabled]);

  // When the active item changes, reset initialSeek to either stored
  // position or zero (no carry-over from previous item).
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (rememberProgress) {
      const persisted = loadProgress(storageKey);
      const t = persisted?.positions?.[items[activeIndex]?.id];
      setInitialSeek(Number.isFinite(t) && t > 0 ? t : 0);
    } else {
      setInitialSeek(0);
    }
    setCurrentTime(0);
    cancelCountdown();
  }, [activeIndex]);

  // Listen for hash changes (deep link navigation).
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!deepLinkEnabled || typeof window === "undefined") return undefined;
    const handler = () => {
      const dl = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_5__.readDeepLink)();
      if (dl.index != null && dl.index >= 0 && dl.index < items.length && dl.index !== activeIndex) {
        setActiveIndex(dl.index);
      }
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, [deepLinkEnabled, items.length, activeIndex]);
  const cancelCountdown = () => {
    if (countdownTimer.current) {
      clearInterval(countdownTimer.current);
      countdownTimer.current = null;
    }
    setCountdown(0);
  };
  const goTo = idx => {
    cancelCountdown();
    if (idx < 0 || idx >= items.length) return;
    setActiveIndex(idx);
  };
  const advance = () => {
    const next = activeIndex + 1;
    if (next >= items.length) {
      if (loopQueue) goTo(0);
      return;
    }
    goTo(next);
  };
  const handleEnded = () => {
    // Mark watched.
    const id = items[activeIndex]?.id;
    if (id) setWatched(prev => ({
      ...prev,
      [id]: true
    }));
    if (!autoAdvance) return;
    if (activeIndex + 1 >= items.length && !loopQueue) return;
    const delay = Math.max(0, parseInt(autoAdvanceDelay, 10) || 0);
    if (delay === 0) {
      advance();
      return;
    }
    setCountdown(delay);
    let remaining = delay;
    countdownTimer.current = setInterval(() => {
      remaining -= 1;
      if (remaining <= 0) {
        clearInterval(countdownTimer.current);
        countdownTimer.current = null;
        setCountdown(0);
        advance();
      } else {
        setCountdown(remaining);
      }
    }, 1000);
  };
  const handleTimeUpdate = t => {
    setCurrentTime(t);
  };
  const handleLoaded = controller => {
    playerElRef.current = controller;
  };
  const handleSeekChapter = t => {
    const ctrl = playerElRef.current;
    if (ctrl && typeof ctrl.seek === "function") {
      // Native <video>, YouTube and Vimeo all expose a uniform seek().
      ctrl.seek(t);
    } else {
      // Fallback (controller not ready yet): reload the embed at the timestamp.
      setInitialSeek(t);
    }
  };
  if (!items.length) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "vpb-vp-root is-empty",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        children: "No playlist items configured."
      })
    });
  }
  const activeItem = items[Math.min(activeIndex, items.length - 1)];
  const totalWatched = Object.values(watched).filter(Boolean).length;
  const headerLine = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "vpb-vp-qhead",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
        className: "vpb-vp-qhead-title",
        children: queueTitle
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
        className: "vpb-vp-qhead-count",
        children: [totalWatched, " / ", items.length, " watched"]
      })]
    }), showSearch && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "vpb-vp-qsearch",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
        className: "vpb-vp-qsearch-icon",
        "aria-hidden": "true",
        children: _utils_icons__WEBPACK_IMPORTED_MODULE_4__.searchIcon
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
        type: "search",
        value: search,
        onChange: e => setSearch(e.target.value),
        placeholder: "Search\u2026",
        "aria-label": "Filter playlist"
      })]
    })]
  });
  const queueList = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "vpb-vp-qlist",
    role: "listbox",
    "aria-label": "Playlist queue",
    children: [visibleItems.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "vpb-vp-qempty",
      children: "No matches."
    }), visibleItems.map(({
      it,
      idx
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_QueueItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      item: it,
      index: idx,
      isActive: idx === activeIndex,
      isWatched: !!watched[it.id],
      attributes: attributes,
      onSelect: goTo
    }, it.id || idx))]
  });
  const queuePanel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("aside", {
    className: "vpb-vp-queue",
    "aria-label": "Video queue",
    children: [headerLine, queueList]
  });
  const stage = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
    className: "vpb-vp-stage-wrap",
    "aria-label": "Active video",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "vpb-vp-stage",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Player__WEBPACK_IMPORTED_MODULE_1__["default"], {
        item: activeItem,
        attributes: attributes,
        startTime: initialSeek,
        onEnded: handleEnded,
        onTimeUpdate: handleTimeUpdate,
        onLoaded: handleLoaded,
        inEditor: inEditor
      }, activeItem.id || activeIndex), countdown > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "vpb-vp-countdown",
        role: "status",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "vpb-vp-countdown-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "vpb-vp-countdown-up",
            children: "Up next"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "vpb-vp-countdown-title",
            children: items[activeIndex + 1]?.title || items[0]?.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "vpb-vp-countdown-actions",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "vpb-vp-cd-btn is-cancel",
              onClick: cancelCountdown,
              children: "Cancel"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
              type: "button",
              className: "vpb-vp-cd-btn is-play",
              onClick: () => {
                cancelCountdown();
                advance();
              },
              children: ["Play now (", countdown, "s)"]
            })]
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "vpb-vp-active-meta",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
        className: "vpb-vp-active-title",
        children: activeItem.title
      }), activeItem.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "vpb-vp-active-desc",
        children: activeItem.description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "vpb-vp-active-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
          className: "vpb-vp-active-pos",
          children: [activeIndex + 1, " of ", items.length]
        }), currentTime > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "vpb-vp-active-time",
          children: (0,_utils_functions__WEBPACK_IMPORTED_MODULE_5__.formatTime)(currentTime)
        })]
      })]
    }), showChapters && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Chapters__WEBPACK_IMPORTED_MODULE_3__["default"], {
      item: activeItem,
      currentTime: currentTime,
      onSeek: handleSeekChapter
    })]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: `vpb-vp-root is-${layout}`,
    children: [stage, queuePanel]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Playlist);

/***/ },

/***/ "./src/blocks/video-playlist/Components/Common/QueueItem.js"
/*!******************************************************************!*\
  !*** ./src/blocks/video-playlist/Components/Common/QueueItem.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-playlist/utils/functions.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/icons */ "./src/blocks/video-playlist/utils/icons.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const QueueItem = ({
  item,
  index,
  isActive,
  isWatched,
  attributes,
  onSelect
}) => {
  const {
    showThumbnails = true,
    showDuration = true,
    showDescription = true,
    showWatchedCheckmarks = true,
    showCounter = true
  } = attributes;
  const poster = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_0__.resolvePoster)(item);
  const handleKey = e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(index);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: `vpb-vp-qitem ${isActive ? "is-active" : ""} ${isWatched ? "is-watched" : ""}`,
    role: "option",
    "aria-selected": isActive,
    tabIndex: 0,
    onClick: () => onSelect(index),
    onKeyDown: handleKey,
    children: [showCounter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "vpb-vp-qnum",
      children: index + 1
    }), showThumbnails && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "vpb-vp-qthumb-wrap",
      children: [poster ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        className: "vpb-vp-qthumb",
        src: poster,
        alt: item.title || "",
        loading: "lazy"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "vpb-vp-qthumb is-placeholder"
      }), isActive ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: "vpb-vp-qbadge is-playing",
        "aria-hidden": "true",
        children: _utils_icons__WEBPACK_IMPORTED_MODULE_1__.playIcon
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: "vpb-vp-qbadge is-play-hover",
        "aria-hidden": "true",
        children: _utils_icons__WEBPACK_IMPORTED_MODULE_1__.playIcon
      }), showDuration && item.duration && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: "vpb-vp-qdur",
        children: item.duration
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "vpb-vp-qmeta",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "vpb-vp-qtitle-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
          className: "vpb-vp-qtitle",
          children: item.title || "Untitled"
        }), item.badge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "vpb-vp-qpill",
          children: item.badge
        })]
      }), showDescription && item.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "vpb-vp-qdesc",
        children: item.description
      }), !showThumbnails && showDuration && item.duration && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: "vpb-vp-qdur is-inline",
        children: item.duration
      })]
    }), showWatchedCheckmarks && isWatched && !isActive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "vpb-vp-qcheck",
      "aria-label": "Watched",
      children: _utils_icons__WEBPACK_IMPORTED_MODULE_1__.checkIcon
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QueueItem);

/***/ },

/***/ "./src/blocks/video-playlist/Components/Common/Schema.js"
/*!***************************************************************!*\
  !*** ./src/blocks/video-playlist/Components/Common/Schema.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-playlist/utils/functions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const Schema = ({
  attributes
}) => {
  const {
    items = [],
    playlistName = "Featured Playlist"
  } = attributes;
  if (!items.length) return null;
  const itemListEl = items.map((item, idx) => {
    const src = item?.source || {};
    return {
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "VideoObject",
        name: item.title || `Video ${idx + 1}`,
        description: item.description || item.title || "",
        thumbnailUrl: (0,_utils_functions__WEBPACK_IMPORTED_MODULE_0__.resolvePoster)(item) || undefined,
        contentUrl: src.url || undefined
      }
    };
  });
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: playlistName,
    numberOfItems: items.length,
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

/***/ "./src/blocks/video-playlist/Components/Common/Style.js"
/*!**************************************************************!*\
  !*** ./src/blocks/video-playlist/Components/Common/Style.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-playlist/utils/functions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const shadowToCss = s => {
  if (!s) return "none";
  return `${s.x || 0}px ${s.y || 0}px ${s.blur || 0}px ${s.spread || 0}px ${s.color || "rgba(0,0,0,0.35)"}`;
};
const Style = ({
  attributes,
  id
}) => {
  const {
    accentColor = "#136EF5",
    queueBackground = "#0f1115",
    queueTextColor = "#e6e7eb",
    queueMutedColor = "rgba(230, 231, 235, 0.65)",
    activeItemBackground = "rgba(19, 110, 245, 0.18)",
    hoverItemBackground = "rgba(255, 255, 255, 0.06)",
    playerBackground = "#000000",
    containerBackground = "#0b0c10",
    borderRadius = 12,
    boxShadow = {},
    padding = 0,
    gap = 16,
    aspectRatio = "16:9",
    customAspect = "16/9",
    queueWidth = 32,
    queueMaxHeight = 560
  } = attributes;
  const aspect = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_0__.resolveAspect)(aspectRatio, customAspect);
  const sel = `#${id}`;
  const css = `
    ${sel} {
      --vpb-vp-accent: ${accentColor};
      --vpb-vp-queue-bg: ${queueBackground};
      --vpb-vp-queue-text: ${queueTextColor};
      --vpb-vp-queue-muted: ${queueMutedColor};
      --vpb-vp-active-bg: ${activeItemBackground};
      --vpb-vp-hover-bg: ${hoverItemBackground};
      --vpb-vp-player-bg: ${playerBackground};
      --vpb-vp-container-bg: ${containerBackground};
      --vpb-vp-radius: ${borderRadius}px;
      --vpb-vp-shadow: ${shadowToCss(boxShadow)};
      --vpb-vp-padding: ${padding}px;
      --vpb-vp-gap: ${gap}px;
      --vpb-vp-aspect: ${aspect};
      --vpb-vp-queue-width: ${queueWidth}%;
      --vpb-vp-queue-maxh: ${queueMaxHeight}px;
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

/***/ "./src/blocks/video-playlist/utils/functions.js"
/*!******************************************************!*\
  !*** ./src/blocks/video-playlist/utils/functions.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   detectSourceType: () => (/* binding */ detectSourceType),
/* harmony export */   formatTime: () => (/* binding */ formatTime),
/* harmony export */   getVimeoId: () => (/* binding */ getVimeoId),
/* harmony export */   getYoutubeId: () => (/* binding */ getYoutubeId),
/* harmony export */   isDash: () => (/* binding */ isDash),
/* harmony export */   isHls: () => (/* binding */ isHls),
/* harmony export */   isMux: () => (/* binding */ isMux),
/* harmony export */   isVimeo: () => (/* binding */ isVimeo),
/* harmony export */   isYoutube: () => (/* binding */ isYoutube),
/* harmony export */   makeId: () => (/* binding */ makeId),
/* harmony export */   parseTimeToSeconds: () => (/* binding */ parseTimeToSeconds),
/* harmony export */   readDeepLink: () => (/* binding */ readDeepLink),
/* harmony export */   resolveAspect: () => (/* binding */ resolveAspect),
/* harmony export */   resolvePoster: () => (/* binding */ resolvePoster),
/* harmony export */   shuffleArray: () => (/* binding */ shuffleArray),
/* harmony export */   writeDeepLink: () => (/* binding */ writeDeepLink)
/* harmony export */ });
const getYoutubeId = url => {
  if (!url) return "";
  const match = url.match(/(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
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
const isMux = url => !!url && /stream\.mux\.com/i.test(url);
const detectSourceType = url => {
  if (!url) return "mp4";
  if (isYoutube(url)) return "youtube";
  if (isVimeo(url)) return "vimeo";
  if (isHls(url)) return "hls";
  if (isDash(url)) return "dash";
  if (isMux(url)) return "mux";
  return "mp4";
};
const resolveAspect = (aspectRatio, customAspect) => {
  if (aspectRatio === "custom") return customAspect || "16/9";
  if (!aspectRatio) return "16/9";
  return aspectRatio.replace(":", "/");
};
const resolvePoster = item => {
  if (item?.poster) return item.poster;
  const src = item?.source || {};
  const url = src.url || "";
  if (src.type === "youtube" || isYoutube(url)) {
    const id = src.mediaId || getYoutubeId(url);
    if (id) return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }
  return "";
};
const makeId = () => `vp-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
const formatTime = seconds => {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const s = Math.floor(seconds % 60);
  const m = Math.floor(seconds / 60 % 60);
  const h = Math.floor(seconds / 3600);
  const ss = s.toString().padStart(2, "0");
  if (h > 0) {
    return `${h}:${m.toString().padStart(2, "0")}:${ss}`;
  }
  return `${m}:${ss}`;
};
const parseTimeToSeconds = val => {
  if (val == null) return 0;
  if (typeof val === "number") return val;
  const str = String(val).trim();
  if (!str) return 0;
  if (!str.includes(":")) {
    const n = parseFloat(str);
    return Number.isFinite(n) ? n : 0;
  }
  const parts = str.split(":").map(p => parseInt(p, 10) || 0);
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return 0;
};
const shuffleArray = arr => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const readDeepLink = () => {
  if (typeof window === "undefined") return {
    index: null,
    time: null
  };
  const hash = (window.location.hash || "").replace(/^#/, "");
  if (!hash) return {
    index: null,
    time: null
  };
  const params = new URLSearchParams(hash);
  const idx = params.get("video");
  const t = params.get("t");
  return {
    index: idx != null && idx !== "" ? parseInt(idx, 10) : null,
    time: t != null && t !== "" ? parseFloat(t) : null
  };
};
const writeDeepLink = (index, time) => {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams();
    params.set("video", String(index));
    if (Number.isFinite(time) && time > 0) {
      params.set("t", String(Math.round(time)));
    }
    const next = `#${params.toString()}`;
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", next);
    } else {
      window.location.hash = next;
    }
  } catch (e) {
    // ignore
  }
};

/***/ },

/***/ "./src/blocks/video-playlist/utils/icons.js"
/*!**************************************************!*\
  !*** ./src/blocks/video-playlist/utils/icons.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockIcon: () => (/* binding */ blockIcon),
/* harmony export */   checkIcon: () => (/* binding */ checkIcon),
/* harmony export */   pauseIcon: () => (/* binding */ pauseIcon),
/* harmony export */   playIcon: () => (/* binding */ playIcon),
/* harmony export */   searchIcon: () => (/* binding */ searchIcon)
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
  className: "video-playlist-icon",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "2",
    y: "4",
    width: "13",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
    points: "7,8 7,14 12,11",
    fill: iconColor,
    stroke: "none"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "17",
    y1: "6",
    x2: "22",
    y2: "6"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "17",
    y1: "10",
    x2: "22",
    y2: "10"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "17",
    y1: "14",
    x2: "22",
    y2: "14"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "17",
    y1: "18",
    x2: "20",
    y2: "18"
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
const checkIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", {
    points: "4,12 10,18 20,6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })
});
const searchIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
    cx: "11",
    cy: "11",
    r: "7",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "16",
    y1: "16",
    x2: "21",
    y2: "21",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  })]
});

/***/ },

/***/ "./src/blocks/video-playlist/style.scss"
/*!**********************************************!*\
  !*** ./src/blocks/video-playlist/style.scss ***!
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
/******/ 			"blocks/video-playlist/view": 0
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
/*!*******************************************!*\
  !*** ./src/blocks/video-playlist/view.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/video-playlist/style.scss");
/* harmony import */ var _Components_Common_Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Common/Style */ "./src/blocks/video-playlist/Components/Common/Style.js");
/* harmony import */ var _Components_Common_Playlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/Playlist */ "./src/blocks/video-playlist/Components/Common/Playlist.js");
/* harmony import */ var _Components_Common_Schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Common/Schema */ "./src/blocks/video-playlist/Components/Common/Schema.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".wp-block-vpb-video-playlist");
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_Common_Playlist__WEBPACK_IMPORTED_MODULE_3__["default"], {
        attributes: attributes,
        clientId: el.id
      }), attributes?.emitSchema !== false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_Common_Schema__WEBPACK_IMPORTED_MODULE_4__["default"], {
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