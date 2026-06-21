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

/***/ "./src/blocks/video-testimonial/Components/Common/SchemaJsonLd.js"
/*!************************************************************************!*\
  !*** ./src/blocks/video-testimonial/Components/Common/SchemaJsonLd.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Emits a schema.org/Review JSON-LD blob for the testimonial.
 * Strips HTML from the quote and gracefully omits fields that aren't
 * filled in so we never publish an invalid graph.
 */
const stripHtml = s => (s || "").replace(/<[^>]*>/g, "").trim();
const SchemaJsonLd = ({
  attributes
}) => {
  const {
    quote,
    authorName,
    authorTitle,
    rating,
    videoUrl,
    posterUrl,
    reviewItemName
  } = attributes;
  if (!quote || !authorName) return null;
  const reviewBody = stripHtml(quote);
  const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));
  const data = {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody,
    author: {
      "@type": "Person",
      name: authorName
    }
  };
  if (authorTitle) data.author.jobTitle = authorTitle;
  if (safeRating > 0) {
    data.reviewRating = {
      "@type": "Rating",
      ratingValue: safeRating,
      bestRating: 5,
      worstRating: 0
    };
  }
  if (reviewItemName) {
    data.itemReviewed = {
      "@type": "Thing",
      name: reviewItemName
    };
  }
  if (videoUrl) {
    data.video = {
      "@type": "VideoObject",
      name: reviewItemName || `${authorName} testimonial`,
      description: reviewBody.slice(0, 200),
      contentUrl: videoUrl,
      thumbnailUrl: posterUrl || undefined,
      uploadDate: new Date().toISOString().slice(0, 10)
    };
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("script", {
    type: "application/ld+json"
    // eslint-disable-next-line react/no-danger
    ,
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data)
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SchemaJsonLd);

/***/ },

/***/ "./src/blocks/video-testimonial/Components/Common/Style.js"
/*!*****************************************************************!*\
  !*** ./src/blocks/video-testimonial/Components/Common/Style.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-testimonial/utils/functions.js");
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
    layout = "media-left",
    aspectRatio = "16:9",
    borderRadius = 16,
    cardPadding = 28,
    cardShadow = true,
    mediaWidth = 48,
    maxWidth = 980,
    accentColor = "#136EF5",
    cardBackground,
    cardTextColor = "#0f172a",
    mutedTextColor = "#64748b",
    quoteStyle = "large-quote-mark"
  } = attributes;
  const sel = `#${id}`;
  const ar = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_0__.aspectToCss)(aspectRatio);
  const bg = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_0__.resolveCardBackground)(cardBackground);
  const mw = Math.max(20, Math.min(80, Number(mediaWidth) || 48));
  const contentWidth = 100 - mw;
  const isSideLayout = layout === "media-left" || layout === "media-right";
  const isTopLayout = layout === "media-top";
  const shadow = cardShadow ? "0 18px 48px rgba(15, 23, 42, 0.12), 0 2px 6px rgba(15, 23, 42, 0.06)" : "none";
  const bubbleBg = quoteStyle === "card-bubble" ? "background: rgba(15,23,42,0.05);" : "";
  const css = `
    ${sel} .vpb-vt {
      max-width: ${Math.max(280, Number(maxWidth) || 980)}px;
      border-radius: ${Math.max(0, Number(borderRadius) || 0)}px;
      background: ${bg};
      color: ${cardTextColor};
      box-shadow: ${shadow};
    }
    ${sel} .vpb-vt-media {
      width: ${isSideLayout ? mw + "%" : "100%"};
    }
    ${sel} .vpb-vt-content {
      width: ${isSideLayout ? contentWidth + "%" : "100%"};
      padding: ${Math.max(0, Number(cardPadding) || 28)}px;
    }
    ${sel} .vpb-vt-media-frame {
      aspect-ratio: ${ar};
    }
    ${sel} .vpb-vt-play {
      color: ${accentColor};
    }
    ${sel} .vpb-vt-rating-star--full {
      color: ${accentColor === "#136EF5" ? "#f59e0b" : accentColor};
    }
    ${sel} .vpb-vt-author-title {
      color: ${mutedTextColor};
    }
    ${sel} .vpb-vt-quote--large-quote-mark::before {
      color: ${accentColor};
    }
    ${sel} .vpb-vt-quote--card-bubble {
      ${bubbleBg}
    }
    ${isTopLayout ? `${sel} .vpb-vt-media-frame { border-radius: 0; }` : ""}
  `;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style", {
    dangerouslySetInnerHTML: {
      __html: css
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ },

/***/ "./src/blocks/video-testimonial/Components/Common/Testimonial.js"
/*!***********************************************************************!*\
  !*** ./src/blocks/video-testimonial/Components/Common/Testimonial.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-testimonial/utils/functions.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/icons */ "./src/blocks/video-testimonial/utils/icons.js");
/* harmony import */ var _shared_media_EditorEmbedPortal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_shared/media/EditorEmbedPortal */ "./src/blocks/_shared/media/EditorEmbedPortal.js");
/* harmony import */ var _shared_media_AdaptiveVideo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_shared/media/AdaptiveVideo */ "./src/blocks/_shared/media/AdaptiveVideo.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






/**
 * Video Testimonial Card. Renders a single testimonial with an inline-playable
 * (or lightbox / hover-preview) video clip and attributed quote + rating.
 */

const Testimonial = ({
  attributes,
  inEditor = false
}) => {
  const {
    layout = "media-left",
    videoSource = "upload",
    videoUrl,
    posterUrl,
    playMode = "inline",
    quote,
    quoteStyle = "large-quote-mark",
    authorName,
    authorTitle,
    authorAvatarUrl,
    companyLogoUrl,
    rating = 5,
    showVerifiedBadge = true,
    verifiedLabel = "Verified customer",
    playerControls = true,
    playerMuted = false,
    playerLoop = false,
    playerAutoplay = false
  } = attributes;
  const [activated, setActivated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [lightboxOpen, setLightboxOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [hoverPlay, setHoverPlay] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setActivated(false);
    setLightboxOpen(false);
    setHoverPlay(false);
  }, [playMode, videoUrl, posterUrl]);
  const handleActivate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (playMode === "lightbox") {
      setLightboxOpen(true);
      return;
    }
    setActivated(true);
    // play the underlying HTML5 element once it mounts
    requestAnimationFrame(() => {
      const v = videoRef.current;
      if (v && typeof v.play === "function") {
        const p = v.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      }
    });
  }, [playMode]);
  const onHoverStart = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (playMode !== "hover-preview") return;
    setHoverPlay(true);
    const v = videoRef.current;
    if (v && typeof v.play === "function") {
      v.muted = true;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
  }, [playMode]);
  const onHoverEnd = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (playMode !== "hover-preview") return;
    setHoverPlay(false);
    const v = videoRef.current;
    if (v && typeof v.pause === "function") {
      try {
        v.pause();
        v.currentTime = 0;
      } catch (e) {
        /* noop */
      }
    }
  }, [playMode]);
  const renderPlayer = (forceAutoplay = false, forceControls = true) => {
    if (videoSource === "youtube" || videoSource === "vimeo") {
      const src = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.buildEmbedUrl)(videoSource, videoUrl, {
        autoplay: forceAutoplay || playerAutoplay,
        muted: playerMuted,
        loop: playerLoop,
        controls: forceControls && playerControls
      });
      if (!src) return null;
      const allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      const title = authorName ? `${authorName} testimonial` : "Testimonial video";
      if (inEditor) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shared_media_EditorEmbedPortal__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "vpb-vt-video",
          src: src,
          title: title,
          allow: allow
        });
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("iframe", {
        className: "vpb-vt-video",
        src: src,
        title: title,
        frameBorder: "0",
        allow: allow,
        allowFullScreen: true
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_shared_media_AdaptiveVideo__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ref: videoRef,
      className: "vpb-vt-video",
      src: videoUrl || undefined,
      sourceType: videoSource,
      poster: posterUrl || undefined,
      controls: forceControls && playerControls,
      muted: playerMuted,
      loop: playerLoop,
      autoPlay: forceAutoplay || playerAutoplay,
      playsInline: true,
      preload: "metadata"
    });
  };
  const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));
  const stars = Array.from({
    length: 5
  }, (_, i) => {
    const v = safeRating - i;
    if (v >= 1) return "full";
    if (v >= 0.5) return "half";
    return "empty";
  });
  const shouldShowPoster = !activated && !hoverPlay && posterUrl;
  const inlineWithoutPoster = !activated && !hoverPlay && !posterUrl;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: `vpb-vt vpb-vt--${layout}`,
    role: "figure",
    "aria-label": authorName ? `Testimonial from ${authorName}` : "Testimonial",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "vpb-vt-media",
      onMouseEnter: onHoverStart,
      onMouseLeave: onHoverEnd,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "vpb-vt-media-frame",
        children: [playMode === "inline" && !inEditor && renderPlayer(activated, true), playMode === "hover-preview" && !inEditor && renderPlayer(hoverPlay, false), inEditor && (activated || !shouldShowPoster) && renderPlayer(activated, true), shouldShowPoster && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          className: "vpb-vt-poster",
          src: posterUrl,
          alt: "",
          onClick: handleActivate
        }), (shouldShowPoster || inlineWithoutPoster || playMode === "lightbox") && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          className: "vpb-vt-play",
          onClick: handleActivate,
          "aria-label": "Play video testimonial",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "vpb-vt-play-icon",
            "aria-hidden": "true",
            children: _utils_icons__WEBPACK_IMPORTED_MODULE_2__.playIcon
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "vpb-vt-content",
      children: [safeRating > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "vpb-vt-rating",
        role: "img",
        "aria-label": `Rated ${safeRating} out of 5`,
        children: stars.map((kind, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: `vpb-vt-rating-star vpb-vt-rating-star--${kind}`,
          children: [_utils_icons__WEBPACK_IMPORTED_MODULE_2__.starIcon, kind === "half" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "vpb-vt-rating-star-half-fill",
            "aria-hidden": "true",
            children: _utils_icons__WEBPACK_IMPORTED_MODULE_2__.starIcon
          })]
        }, i))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("blockquote", {
        className: `vpb-vt-quote vpb-vt-quote--${quoteStyle}`,
        dangerouslySetInnerHTML: {
          __html: quote || ""
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "vpb-vt-meta-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "vpb-vt-author",
          children: [authorAvatarUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            className: "vpb-vt-avatar",
            src: authorAvatarUrl,
            alt: authorName || "",
            loading: "lazy"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "vpb-vt-author-meta",
            children: [authorName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "vpb-vt-author-name",
              children: authorName
            }), authorTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "vpb-vt-author-title",
              children: authorTitle
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          style: {
            display: "flex",
            gap: 10,
            alignItems: "center",
            flexShrink: 0
          },
          children: [companyLogoUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
            className: "vpb-vt-company-logo",
            src: companyLogoUrl,
            alt: "",
            loading: "lazy"
          }), showVerifiedBadge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
            className: "vpb-vt-badge",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "vpb-vt-badge-icon",
              "aria-hidden": "true",
              children: _utils_icons__WEBPACK_IMPORTED_MODULE_2__.checkIcon
            }), verifiedLabel || "Verified"]
          })]
        })]
      })]
    }), lightboxOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "vpb-vt-lightbox",
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Video testimonial",
      onClick: e => {
        if (e.target === e.currentTarget) setLightboxOpen(false);
      },
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        style: {
          position: "relative",
          width: "100%",
          maxWidth: 960,
          aspectRatio: "16 / 9",
          background: "#000",
          borderRadius: 12,
          overflow: "hidden"
        },
        children: [renderPlayer(true, true), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: () => setLightboxOpen(false),
          "aria-label": "Close video",
          style: {
            position: "absolute",
            top: -42,
            right: 0,
            background: "transparent",
            border: 0,
            color: "#fff",
            fontSize: 24,
            cursor: "pointer",
            lineHeight: 1
          },
          children: "\xD7"
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial);

/***/ },

/***/ "./src/blocks/video-testimonial/utils/functions.js"
/*!*********************************************************!*\
  !*** ./src/blocks/video-testimonial/utils/functions.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aspectToCss: () => (/* binding */ aspectToCss),
/* harmony export */   buildEmbedUrl: () => (/* binding */ buildEmbedUrl),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   getVimeoId: () => (/* binding */ getVimeoId),
/* harmony export */   getYouTubeId: () => (/* binding */ getYouTubeId),
/* harmony export */   resolveCardBackground: () => (/* binding */ resolveCardBackground)
/* harmony export */ });
/**
 * Aspect ratio string ('16:9') -> CSS aspect-ratio value ('16 / 9').
 */
const aspectToCss = ar => {
  if (!ar) return "16 / 9";
  return ar.replace(":", " / ");
};

/**
 * Clamp a number to [min, max].
 */
const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

/**
 * Pull a YouTube video ID out of any common URL form.
 */
const getYouTubeId = url => {
  if (!url) return "";
  const m = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{6,})/) || [];
  return m[1] || "";
};

/**
 * Pull a Vimeo video ID out of any common URL form.
 */
const getVimeoId = url => {
  if (!url) return "";
  const m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/) || [];
  return m[1] || "";
};

/**
 * Build an iframe-embed URL from a source string + provider.
 */
const buildEmbedUrl = (source, url, opts = {}) => {
  const {
    autoplay = false,
    muted = false,
    loop = false,
    controls = true
  } = opts;
  if (source === "youtube") {
    const id = getYouTubeId(url);
    if (!id) return "";
    const params = new URLSearchParams({
      autoplay: autoplay ? "1" : "0",
      mute: muted ? "1" : "0",
      loop: loop ? "1" : "0",
      controls: controls ? "1" : "0",
      modestbranding: "1",
      rel: "0",
      playsinline: "1"
    });
    if (loop) params.set("playlist", id);
    return `https://www.youtube.com/embed/${id}?${params.toString()}`;
  }
  if (source === "vimeo") {
    const id = getVimeoId(url);
    if (!id) return "";
    const params = new URLSearchParams({
      autoplay: autoplay ? "1" : "0",
      muted: muted ? "1" : "0",
      loop: loop ? "1" : "0",
      controls: controls ? "1" : "0",
      playsinline: "1"
    });
    return `https://player.vimeo.com/video/${id}?${params.toString()}`;
  }
  return "";
};

/**
 * Resolve cardBackground attribute (color or gradient) to a CSS background value.
 */
const resolveCardBackground = bg => {
  if (!bg) return "#ffffff";
  if (typeof bg === "string") return bg;
  if (bg.type === "gradient" && bg.value) return bg.value;
  if (bg.value) return bg.value;
  return "#ffffff";
};

/***/ },

/***/ "./src/blocks/video-testimonial/utils/icons.js"
/*!*****************************************************!*\
  !*** ./src/blocks/video-testimonial/utils/icons.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockIcon: () => (/* binding */ blockIcon),
/* harmony export */   checkIcon: () => (/* binding */ checkIcon),
/* harmony export */   playIcon: () => (/* binding */ playIcon),
/* harmony export */   starIcon: () => (/* binding */ starIcon)
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
  className: "video-testimonial-icon",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "2",
    y: "3",
    width: "20",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
    points: "10,7 10,13 15,10",
    fill: iconColor,
    stroke: "none"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
    cx: "6",
    cy: "20",
    r: "1.5",
    fill: iconColor,
    stroke: "none"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "9",
    y1: "20",
    x2: "22",
    y2: "20",
    strokeWidth: "1.5"
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
const starIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: "currentColor",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
    points: "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
  })
});
const checkIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "3",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", {
    points: "5,12 10,17 19,7"
  })
});

/***/ },

/***/ "./src/blocks/video-testimonial/style.scss"
/*!*************************************************!*\
  !*** ./src/blocks/video-testimonial/style.scss ***!
  \*************************************************/
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
/******/ 			"blocks/video-testimonial/view": 0
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
/*!**********************************************!*\
  !*** ./src/blocks/video-testimonial/view.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/video-testimonial/style.scss");
/* harmony import */ var _Components_Common_Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Common/Style */ "./src/blocks/video-testimonial/Components/Common/Style.js");
/* harmony import */ var _Components_Common_Testimonial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/Testimonial */ "./src/blocks/video-testimonial/Components/Common/Testimonial.js");
/* harmony import */ var _Components_Common_SchemaJsonLd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Common/SchemaJsonLd */ "./src/blocks/video-testimonial/Components/Common/SchemaJsonLd.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".wp-block-vpb-video-testimonial");
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_Common_Testimonial__WEBPACK_IMPORTED_MODULE_3__["default"], {
        attributes: attributes,
        blockId: el.id
      }), attributes.enableSchemaMarkup && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_Common_SchemaJsonLd__WEBPACK_IMPORTED_MODULE_4__["default"], {
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