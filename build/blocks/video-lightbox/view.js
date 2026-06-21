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

/***/ "./src/blocks/video-lightbox/Components/Common/Lightbox.js"
/*!*****************************************************************!*\
  !*** ./src/blocks/video-lightbox/Components/Common/Lightbox.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Trigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trigger */ "./src/blocks/video-lightbox/Components/Common/Trigger.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./src/blocks/video-lightbox/Components/Common/Modal.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-lightbox/utils/functions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Top-level wrapper for the Video Lightbox.
 *
 * Owns: open/close state, all auto-open triggers (delay / exit-intent /
 * url hash), cookie gating, and the deep-link contract.
 *
 * The actual modal markup is built only when `open === true`, which keeps
 * the initial DOM (and the player iframe) cost down to whatever the
 * trigger renders.
 */

const Lightbox = ({
  attributes,
  blockId,
  inEditor = false
}) => {
  const {
    alignment = "center",
    openTrigger = "click",
    openDelaySeconds = 5,
    urlHashKey = "",
    cookieKey = ""
  } = attributes;
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const fallbackId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();
  // The frontend mount passes the rendered wrapper id (e.g. "vpbVideoLightbox-1");
  // the editor preview can fall back to the React-generated useId.
  const effectiveId = blockId || `vpb-vl-${fallbackId.replace(/[:]/g, "")}`;
  const blockIdRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(effectiveId);
  const dialogId = `${effectiveId}-dialog`;

  // Honour URL-hash deep links (#<urlHashKey> auto-opens the modal).
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (inEditor) return undefined;
    if (typeof window === "undefined") return undefined;
    const matchesHash = () => {
      if (!urlHashKey) return false;
      const h = (window.location.hash || "").replace(/^#/, "");
      // Support both `#watch=hero` and `#hero` shorthand.
      if (h === urlHashKey) return true;
      const [k, v] = h.split("=");
      return k === "watch" && v === urlHashKey;
    };
    if (openTrigger === "urlHash" || urlHashKey) {
      if (matchesHash()) setOpen(true);
      const onHash = () => {
        if (matchesHash()) setOpen(true);
      };
      window.addEventListener("hashchange", onHash);
      return () => window.removeEventListener("hashchange", onHash);
    }
    return undefined;
  }, [inEditor, urlHashKey, openTrigger]);

  // Honour the auto-open-after-delay trigger.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (inEditor) return undefined;
    if (openTrigger !== "autoDelay") return undefined;
    if (cookieKey && (0,_utils_functions__WEBPACK_IMPORTED_MODULE_3__.readCookie)(cookieKey)) return undefined;
    const ms = Math.max(0, Number(openDelaySeconds) || 0) * 1000;
    const t = setTimeout(() => {
      setOpen(true);
      if (cookieKey) (0,_utils_functions__WEBPACK_IMPORTED_MODULE_3__.writeCookie)(cookieKey, "1");
    }, ms);
    return () => clearTimeout(t);
  }, [inEditor, openTrigger, openDelaySeconds, cookieKey]);

  // Honour the exit-intent trigger (mouse leaves the viewport top).
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (inEditor) return undefined;
    if (openTrigger !== "exitIntent") return undefined;
    if (typeof document === "undefined") return undefined;
    if (cookieKey && (0,_utils_functions__WEBPACK_IMPORTED_MODULE_3__.readCookie)(cookieKey)) return undefined;
    let armed = true;
    const onLeave = e => {
      if (!armed) return;
      // Only fire when the cursor crosses the top of the viewport.
      if (e.clientY <= 0) {
        armed = false;
        setOpen(true);
        if (cookieKey) (0,_utils_functions__WEBPACK_IMPORTED_MODULE_3__.writeCookie)(cookieKey, "1");
      }
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, [inEditor, openTrigger, cookieKey]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: `vpb-vl-align-${alignment}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "vpb-vl-wrap",
      style: {
        position: "relative"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Trigger__WEBPACK_IMPORTED_MODULE_1__["default"], {
        attributes: attributes,
        onOpen: handleOpen,
        a11yId: dialogId
      })
    }), open && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      attributes: attributes,
      blockId: blockIdRef.current,
      onClose: handleClose,
      inEditor: inEditor
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lightbox);

/***/ },

/***/ "./src/blocks/video-lightbox/Components/Common/Modal.js"
/*!**************************************************************!*\
  !*** ./src/blocks/video-lightbox/Components/Common/Modal.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom/client");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-lightbox/utils/functions.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/icons */ "./src/blocks/video-lightbox/utils/icons.js");
/* harmony import */ var _shared_media_AdaptiveVideo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_shared/media/AdaptiveVideo */ "./src/blocks/_shared/media/AdaptiveVideo.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






/**
 * Inline CSS injected into the top-level admin window when the lightbox modal
 * is open inside the block editor. We portal the modal there so it isn't
 * confined to the editor iframe, and this ensures the styles travel with it.
 */

const MODAL_STYLES_ID = "vpb-vl-modal-editor-styles";
const injectTopWindowStyles = () => {
  const topDoc = window.top?.document || window.document;
  if (topDoc.getElementById(MODAL_STYLES_ID)) return;
  const style = topDoc.createElement("style");
  style.id = MODAL_STYLES_ID;
  style.textContent = `
    .vpb-vl-modal {
      position: fixed;
      inset: 0;
      z-index: 100000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    .vpb-vl-modal--anim-fade { animation: vpbVlFade 0.2s ease-out; }
    .vpb-vl-modal--anim-scale .vpb-vl-modal-body { animation: vpbVlScale 0.22s cubic-bezier(0.2,0.8,0.2,1); }
    .vpb-vl-modal--anim-slide .vpb-vl-modal-body { animation: vpbVlSlide 0.28s cubic-bezier(0.2,0.8,0.2,1); }
    @keyframes vpbVlFade { from { opacity: 0; } to { opacity: 1; } }
    @keyframes vpbVlScale { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }
    @keyframes vpbVlSlide { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .vpb-vl-modal-backdrop { position: absolute; inset: 0; }
    .vpb-vl-modal-body {
      position: relative;
      width: 100%;
      max-height: calc(100vh - 48px);
      overflow: hidden;
      box-shadow: 0 40px 80px rgba(0,0,0,0.6);
      z-index: 1;
    }
    .vpb-vl-modal--theme-dark .vpb-vl-modal-body { background: #000; color: #fff; }
    .vpb-vl-modal--theme-light .vpb-vl-modal-body { background: #fff; color: #111; }
    .vpb-vl-modal--theme-glass .vpb-vl-modal-body {
      background: rgba(20,20,20,0.55); color: #fff;
      backdrop-filter: blur(18px) saturate(180%);
      -webkit-backdrop-filter: blur(18px) saturate(180%);
      border: 1px solid rgba(255,255,255,0.08);
    }
    .vpb-vl-modal--size-fullscreen .vpb-vl-modal-body {
      width: 100vw; height: 100vh; max-height: 100vh; border-radius: 0 !important;
    }
    .vpb-vl-modal-frame {
      position: relative; width: 100%;
    }
    .vpb-vl-modal-frame > iframe,
    .vpb-vl-modal-frame > video {
      position: absolute; inset: 0; width: 100%; height: 100%; border: 0; background: #000;
    }
    .vpb-vl-modal--size-fullscreen .vpb-vl-modal-frame { aspect-ratio: auto !important; height: 100%; }
    .vpb-vl-close {
      position: absolute; top: 10px; right: 10px; z-index: 5;
      background: rgba(255,255,255,0.16); color: #fff; border: 0;
      cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
      transition: background 0.15s ease, transform 0.15s ease;
    }
    .vpb-vl-close:hover { background: rgba(255,255,255,0.28); transform: rotate(90deg); }
    .vpb-vl-close--circle { width: 38px; height: 38px; border-radius: 50%; padding: 9px; }
    .vpb-vl-close--square { width: 38px; height: 38px; border-radius: 4px; padding: 9px; }
    .vpb-vl-close--minimal { background: transparent; width: 32px; height: 32px; padding: 4px; }
    .vpb-vl-modal--theme-light .vpb-vl-close { background: rgba(0,0,0,0.08); color: #111; }
    .vpb-vl-modal--theme-light .vpb-vl-close:hover { background: rgba(0,0,0,0.16); }
    .vpb-vl-modal-empty { padding: 64px 24px; text-align: center; color: inherit; opacity: 0.85; }
  `;
  topDoc.head.appendChild(style);
};
const removeTopWindowStyles = () => {
  const topDoc = window.top?.document || window.document;
  topDoc.getElementById(MODAL_STYLES_ID)?.remove();
};

/**
 * The lightbox modal. Lazy: we build the player <iframe> / <video> only
 * once the modal mounts, so nothing heavy ships on the initial page load.
 *
 * In the editor the modal is portaled to the top-level admin window so it
 * renders above the editor iframe. On the frontend it portals to the
 * current document body as usual.
 */
const Modal = ({
  attributes,
  blockId,
  onClose,
  inEditor = false
}) => {
  const {
    videoUrl,
    videoSource = "youtube",
    modalTheme = "dark",
    modalAnimation = "fade",
    modalSize = "large",
    autoplayOnOpen = true,
    muteOnOpen = false,
    loopVideo = false,
    closeOnOverlayClick = true,
    closeOnEsc = true,
    showCloseButton = true,
    closeButtonStyle = "circle",
    a11yModalLabel = "Video player dialog"
  } = attributes;
  const dialogRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [portalTarget, setPortalTarget] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  // Determine portal target: top window body for editor, current body for frontend.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (inEditor) {
      injectTopWindowStyles();
      const topBody = window.top?.document?.body || document.body;
      setPortalTarget(topBody);
    } else {
      setPortalTarget(document.body);
    }
    return () => {
      if (inEditor) removeTopWindowStyles();
    };
  }, [inEditor]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!closeOnEsc) return undefined;

    // In the editor, listen on the top window so Escape works even when
    // focus is on the top-window-portaled modal.
    const targetDoc = inEditor ? window.top?.document || document : document;
    const onKey = e => {
      if (e.key === "Escape") onClose?.();
    };
    targetDoc.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Also lock the top window scroll in the editor.
    let prevTopOverflow;
    if (inEditor && window.top?.document?.body) {
      prevTopOverflow = window.top.document.body.style.overflow;
      window.top.document.body.style.overflow = "hidden";
    }

    // Focus the dialog so SR users hear the dialog label.
    dialogRef.current?.focus?.();
    return () => {
      targetDoc.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      if (inEditor && window.top?.document?.body && prevTopOverflow !== undefined) {
        window.top.document.body.style.overflow = prevTopOverflow;
      }
    };
  }, [closeOnEsc, onClose, inEditor]);
  if (typeof document === "undefined" || !portalTarget) return null;
  const buildIframeSrc = () => {
    const src = videoSource;
    if (src === "youtube" || (0,_utils_functions__WEBPACK_IMPORTED_MODULE_2__.isYoutube)(videoUrl)) {
      const id = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_2__.getYoutubeId)(videoUrl);
      if (!id) return null;
      const params = new URLSearchParams({
        autoplay: autoplayOnOpen ? "1" : "0",
        mute: muteOnOpen ? "1" : "0",
        loop: loopVideo ? "1" : "0",
        rel: "0",
        modestbranding: "1"
      });
      if (loopVideo) params.set("playlist", id);
      return `https://www.youtube.com/embed/${id}?${params.toString()}`;
    }
    if (src === "vimeo" || (0,_utils_functions__WEBPACK_IMPORTED_MODULE_2__.isVimeo)(videoUrl)) {
      const id = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_2__.getVimeoId)(videoUrl);
      if (!id) return null;
      const params = new URLSearchParams({
        autoplay: autoplayOnOpen ? "1" : "0",
        muted: muteOnOpen ? "1" : "0",
        loop: loopVideo ? "1" : "0",
        title: "0",
        byline: "0",
        portrait: "0"
      });
      return `https://player.vimeo.com/video/${id}?${params.toString()}`;
    }
    if (src === "wistia" || (0,_utils_functions__WEBPACK_IMPORTED_MODULE_2__.isWistia)(videoUrl)) {
      const id = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_2__.getWistiaId)(videoUrl);
      if (!id) return null;
      const params = new URLSearchParams({
        autoPlay: autoplayOnOpen ? "true" : "false",
        muted: muteOnOpen ? "true" : "false"
      });
      return `https://fast.wistia.net/embed/iframe/${id}?${params.toString()}`;
    }
    return null;
  };
  const renderPlayer = () => {
    if (!videoUrl) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "vpb-vl-modal-empty",
        children: "No video URL configured."
      });
    }
    const iframeSrc = buildIframeSrc();
    if (iframeSrc) {
      const allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen";

      // In the editor the modal is already portaled to the top window, so
      // we can render the iframe directly — no need for EditorEmbedPortal.
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "vpb-vl-modal-frame",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("iframe", {
          src: iframeSrc,
          title: a11yModalLabel,
          allow: allow,
          allowFullScreen: true,
          loading: "eager"
        })
      });
    }

    // Native / HLS / DASH / Bunny / MP4
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "vpb-vl-modal-frame",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shared_media_AdaptiveVideo__WEBPACK_IMPORTED_MODULE_4__["default"], {
        src: videoUrl,
        sourceType: videoSource,
        controls: true,
        autoPlay: !!autoplayOnOpen,
        muted: !!muteOnOpen,
        loop: !!loopVideo,
        playsInline: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("track", {
          kind: "captions"
        })
      })
    });
  };
  const node = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    "data-vpb-vl-modal": blockId,
    className: `vpb-vl-modal vpb-vl-modal--theme-${modalTheme} vpb-vl-modal--size-${modalSize} vpb-vl-modal--anim-${modalAnimation}`,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": a11yModalLabel,
    ref: dialogRef,
    tabIndex: "-1",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "vpb-vl-modal-backdrop",
      onClick: closeOnOverlayClick ? onClose : undefined,
      "aria-hidden": "true"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "vpb-vl-modal-body",
      children: [showCloseButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        type: "button",
        className: `vpb-vl-close vpb-vl-close--${closeButtonStyle}`,
        onClick: onClose,
        "aria-label": "Close video",
        children: _utils_icons__WEBPACK_IMPORTED_MODULE_3__.closeIcon
      }), renderPlayer()]
    })]
  });
  return (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(node, portalTarget);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ },

/***/ "./src/blocks/video-lightbox/Components/Common/Style.js"
/*!**************************************************************!*\
  !*** ./src/blocks/video-lightbox/Components/Common/Style.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-lightbox/utils/functions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Per-instance CSS custom properties + rules. Inlined as a scoped <style>
 * tag so the same logic works in the editor preview and on the frontend.
 *
 * When `inEditor` is true, the modal-specific rules are also injected into
 * the top-level admin window (since the modal is portaled there).
 */

const Style = ({
  attributes,
  id,
  inEditor = false
}) => {
  const {
    thumbnailAspectRatio = "16:9",
    thumbnailBorderRadius = 12,
    playIconSize = 72,
    playIconColor = "#ffffff",
    playIconBgColor = "rgba(0,0,0,0.55)",
    thumbnailOverlayColor = "rgba(0,0,0,0.15)",
    buttonBgColor = "#136EF5",
    buttonTextColor = "#ffffff",
    buttonBorderRadius = 8,
    triggerMaxWidth = "640px",
    modalSize = "large",
    modalMaxWidth = 1080,
    modalAspectRatio = "16:9",
    modalBgColor = "#000000",
    modalOverlayColor = "#000000",
    modalOverlayOpacity = 85,
    modalBorderRadius = 10,
    captionColor = "#000000"
  } = attributes;
  const sel = `#${id}`;
  const thumbAr = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.aspectToCss)(thumbnailAspectRatio);
  const modalAr = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.aspectToCss)(modalAspectRatio);
  const maxW = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.resolveModalMaxWidth)(modalSize, modalMaxWidth);

  // Convert percent opacity to 0-1 with two decimal precision.
  const overlayAlpha = Math.max(0, Math.min(100, modalOverlayOpacity)) / 100;
  const triggerCss = `
    ${sel} .vpb-vl-wrap { max-width: ${triggerMaxWidth || "100%"}; }
    ${sel} .vpb-vl-thumb-wrap {
      border-radius: ${thumbnailBorderRadius}px;
      ${thumbAr ? `aspect-ratio: ${thumbAr};` : ""}
    }
    ${sel} .vpb-vl-overlay { background: ${thumbnailOverlayColor}; }
    ${sel} .vpb-vl-play {
      width: ${playIconSize}px;
      height: ${playIconSize}px;
      color: ${playIconColor};
      background: ${playIconBgColor};
    }
    ${sel} .vpb-vl-play--minimal { color: ${playIconColor}; }
    ${sel} .vpb-vl-btn {
      background: ${buttonBgColor};
      color: ${buttonTextColor};
      border-radius: ${buttonBorderRadius}px;
    }
    ${sel} .vpb-vl-btn.vpb-vl-btn--outline,
    ${sel} .vpb-vl-btn.vpb-vl-btn--ghost,
    ${sel} .vpb-vl-btn.vpb-vl-btn--underline { color: ${buttonBgColor}; }
    ${sel} .vpb-vl-caption { color: ${captionColor}; }
  `;
  const modalCss = `
    /* Modal styles are scoped via a data attribute since the modal is
       portaled to the document root, not nested inside the block.       */
    [data-vpb-vl-modal="${id}"] .vpb-vl-modal-backdrop {
      background: ${modalOverlayColor};
      opacity: ${overlayAlpha};
    }
    [data-vpb-vl-modal="${id}"] .vpb-vl-modal-body {
      max-width: ${maxW};
      background: ${modalBgColor};
      border-radius: ${modalBorderRadius}px;
    }
    [data-vpb-vl-modal="${id}"] .vpb-vl-modal-frame {
      ${modalAr ? `aspect-ratio: ${modalAr};` : "aspect-ratio: 16 / 9;"}
    }
  `;
  const styleId = `vpb-vl-modal-instance-${id}`;
  const prevStyleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // In the editor the modal is portaled to the top window, so the
  // per-instance modal CSS must also live there.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!inEditor) return undefined;
    const topDoc = window.top?.document || window.document;

    // Remove any previous version of this style.
    topDoc.getElementById(styleId)?.remove();
    const el = topDoc.createElement("style");
    el.id = styleId;
    el.textContent = modalCss;
    topDoc.head.appendChild(el);
    prevStyleRef.current = el;
    return () => {
      el.remove();
      prevStyleRef.current = null;
    };
  }, [inEditor, modalCss, styleId]);

  // On the frontend the full CSS (trigger + modal) lives inline.
  const fullCss = `${triggerCss}\n${modalCss}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("style", {
    dangerouslySetInnerHTML: {
      __html: inEditor ? triggerCss : fullCss
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ },

/***/ "./src/blocks/video-lightbox/Components/Common/Trigger.js"
/*!****************************************************************!*\
  !*** ./src/blocks/video-lightbox/Components/Common/Trigger.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/icons */ "./src/blocks/video-lightbox/utils/icons.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Renders the visible "click to open" surface (thumbnail / button / icon).
 * The actual modal mount is owned by <Lightbox>.
 */

const Trigger = ({
  attributes,
  onOpen,
  a11yId
}) => {
  const {
    triggerType = "thumbnail",
    thumbnailImage = {},
    buttonText = "Watch video",
    buttonIcon = "play",
    buttonStyle = "filled",
    playIconStyle = "circle",
    thumbnailHoverEffect = "zoom",
    showDuration,
    durationText,
    showCaption,
    captionText,
    a11yLabel = "Play video"
  } = attributes;
  const baseAria = {
    "aria-label": a11yLabel,
    "aria-haspopup": "dialog",
    "aria-controls": a11yId
  };
  if (triggerType === "button") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
      type: "button",
      className: `vpb-vl-trigger vpb-vl-btn vpb-vl-btn--${buttonStyle}`,
      onClick: onOpen,
      ...baseAria,
      children: [buttonIcon === "play" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "vpb-vl-btn-icon",
        "aria-hidden": "true",
        children: _utils_icons__WEBPACK_IMPORTED_MODULE_0__.playIcon
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "vpb-vl-btn-label",
        children: buttonText
      })]
    });
  }
  if (triggerType === "playIcon") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      type: "button",
      className: "vpb-vl-trigger vpb-vl-icon-trigger",
      onClick: onOpen,
      ...baseAria,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: `vpb-vl-play vpb-vl-play--${playIconStyle}`,
        children: _utils_icons__WEBPACK_IMPORTED_MODULE_0__.playIcon
      })
    });
  }

  // Default: thumbnail
  const hoverClass = `vpb-vl-hover-${thumbnailHoverEffect || "none"}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      type: "button",
      className: `vpb-vl-trigger ${hoverClass}`,
      onClick: onOpen,
      ...baseAria,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
        className: "vpb-vl-thumb-wrap",
        children: [thumbnailImage?.url ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: thumbnailImage.url,
          alt: thumbnailImage.alt || "",
          className: "vpb-vl-thumb",
          loading: "lazy"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "vpb-vl-thumb",
          style: {
            background: "#0a0a0a",
            display: "block"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "vpb-vl-overlay",
          "aria-hidden": "true"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: `vpb-vl-play vpb-vl-play--${playIconStyle}`,
          "aria-hidden": "true",
          children: _utils_icons__WEBPACK_IMPORTED_MODULE_0__.playIcon
        }), showDuration && durationText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "vpb-vl-duration",
          children: durationText
        })]
      })
    }), showCaption && captionText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "vpb-vl-meta",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "vpb-vl-caption",
        children: captionText
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trigger);

/***/ },

/***/ "./src/blocks/video-lightbox/utils/functions.js"
/*!******************************************************!*\
  !*** ./src/blocks/video-lightbox/utils/functions.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aspectToCss: () => (/* binding */ aspectToCss),
/* harmony export */   detectSource: () => (/* binding */ detectSource),
/* harmony export */   getVimeoId: () => (/* binding */ getVimeoId),
/* harmony export */   getWistiaId: () => (/* binding */ getWistiaId),
/* harmony export */   getYoutubeId: () => (/* binding */ getYoutubeId),
/* harmony export */   isBunny: () => (/* binding */ isBunny),
/* harmony export */   isHls: () => (/* binding */ isHls),
/* harmony export */   isVimeo: () => (/* binding */ isVimeo),
/* harmony export */   isWistia: () => (/* binding */ isWistia),
/* harmony export */   isYoutube: () => (/* binding */ isYoutube),
/* harmony export */   readCookie: () => (/* binding */ readCookie),
/* harmony export */   resolveModalMaxWidth: () => (/* binding */ resolveModalMaxWidth),
/* harmony export */   writeCookie: () => (/* binding */ writeCookie)
/* harmony export */ });
/**
 * URL helpers + small utilities shared between the editor and frontend.
 */

const getYoutubeId = url => {
  if (!url) return "";
  const m = url.match(/(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : "";
};
const isYoutube = url => !!url && /(?:youtube\.com|youtu\.be)/i.test(url);
const getVimeoId = url => {
  if (!url) return "";
  const m = url.match(/vimeo\.com\/(?:.*#|.*\/videos?\/)?([0-9]+)/i);
  return m ? m[1] : "";
};
const isVimeo = url => !!url && /vimeo\.com/i.test(url);
const isHls = url => !!url && /\.m3u8(\?|$)/i.test(url);
const isWistia = url => !!url && /(?:wistia\.com|wi\.st)/i.test(url);
const isBunny = url => !!url && /(?:b-cdn\.net|mediadelivery\.net)/i.test(url);
const detectSource = url => {
  if (!url) return "mp4";
  if (isYoutube(url)) return "youtube";
  if (isVimeo(url)) return "vimeo";
  if (isHls(url)) return "hls";
  if (isWistia(url)) return "wistia";
  if (isBunny(url)) return "bunny";
  return "mp4";
};

/**
 * Get the Wistia media ID from a typical Wistia link.
 */
const getWistiaId = url => {
  if (!url) return "";
  const m = url.match(/wistia\.(?:com|net)\/(?:medias|embed\/iframe)\/([a-zA-Z0-9]+)/);
  if (m) return m[1];
  const m2 = url.match(/wi\.st\/medias\/([a-zA-Z0-9]+)/);
  return m2 ? m2[1] : "";
};

/**
 * Aspect ratio string ('16:9') -> CSS aspect-ratio value ('16 / 9').
 */
const aspectToCss = ar => {
  if (!ar || ar === "original") return null;
  return ar.replace(":", " / ");
};

/**
 * Resolve a modal max-width given the size preset.
 */
const resolveModalMaxWidth = (size, custom) => {
  switch (size) {
    case "small":
      return "560px";
    case "medium":
      return "800px";
    case "large":
      return "1080px";
    case "fullscreen":
      return "100vw";
    case "custom":
      return `${custom || 1080}px`;
    default:
      return "1080px";
  }
};

/**
 * Simple cookie helpers - used to honour the "only auto-open once per
 * visitor" Pro option.
 */
const readCookie = key => {
  if (typeof document === "undefined" || !key) return "";
  const parts = document.cookie.split("; ");
  for (const part of parts) {
    const [k, v] = part.split("=");
    if (k === key) return decodeURIComponent(v || "");
  }
  return "";
};
const writeCookie = (key, value, days = 30) => {
  if (typeof document === "undefined" || !key) return;
  const exp = new Date();
  exp.setTime(exp.getTime() + days * 86400000);
  document.cookie = `${key}=${encodeURIComponent(value)}; expires=${exp.toUTCString()}; path=/; SameSite=Lax`;
};

/***/ },

/***/ "./src/blocks/video-lightbox/utils/icons.js"
/*!**************************************************!*\
  !*** ./src/blocks/video-lightbox/utils/icons.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockIcon: () => (/* binding */ blockIcon),
/* harmony export */   closeIcon: () => (/* binding */ closeIcon),
/* harmony export */   playIcon: () => (/* binding */ playIcon)
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
  className: "video-lightbox-icon",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
    cx: "12",
    cy: "12",
    r: "5",
    fill: iconColor,
    stroke: "none"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
    points: "11,10 11,14 14,12",
    fill: "#ffffff",
    stroke: "none"
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
const closeIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
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

/***/ "./src/blocks/video-lightbox/style.scss"
/*!**********************************************!*\
  !*** ./src/blocks/video-lightbox/style.scss ***!
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
/******/ 			"blocks/video-lightbox/view": 0
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
  !*** ./src/blocks/video-lightbox/view.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/video-lightbox/style.scss");
/* harmony import */ var _Components_Common_Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Common/Style */ "./src/blocks/video-lightbox/Components/Common/Style.js");
/* harmony import */ var _Components_Common_Lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/Lightbox */ "./src/blocks/video-lightbox/Components/Common/Lightbox.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".wp-block-vpb-video-lightbox");
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_Common_Lightbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
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