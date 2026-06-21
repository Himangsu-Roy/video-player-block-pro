/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/video-gallery/Components/Common/Carousel.js"
/*!****************************************************************!*\
  !*** ./src/blocks/video-gallery/Components/Common/Carousel.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tile */ "./src/blocks/video-gallery/Components/Common/Tile.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const Carousel = ({
  items,
  attributes,
  onSelect
}) => {
  const {
    carouselSettings = {}
  } = attributes;
  const {
    slidesToShow = 3,
    slidesToScroll = 1,
    autoplay = false,
    autoplaySpeed = 5000,
    showArrows = true,
    showDots = true,
    infinite = true
  } = carouselSettings;
  const trackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const maxIndex = Math.max(0, items.length - slidesToShow);
  const dotsCount = Math.max(1, Math.ceil(items.length / slidesToScroll));
  const goTo = i => {
    let next = i;
    if (infinite) {
      if (next < 0) next = maxIndex;
      if (next > maxIndex) next = 0;
    } else {
      next = Math.max(0, Math.min(maxIndex, next));
    }
    setIndex(next);
  };
  const onPrev = () => goTo(index - slidesToScroll);
  const onNext = () => goTo(index + slidesToScroll);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!autoplay) return undefined;
    const id = setInterval(onNext, Math.max(1000, autoplaySpeed));
    return () => clearInterval(id);
  }, [autoplay, autoplaySpeed, index, items.length]);

  // Translate based on % of a single slide (which is 100% / slidesToShow of the
  // visible area). We use translateX with calc to honor the configured gap.
  const trackStyle = {
    transform: `translateX(calc(${index} * (-100% / ${slidesToShow} - var(--vpb-vg-gap, 16px) / ${slidesToShow})))`
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "vpb-vg-carousel",
    children: [showArrows && items.length > slidesToShow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      type: "button",
      className: "vpb-vg-arrow prev",
      "aria-label": "Previous",
      onClick: onPrev,
      children: "\u2039"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "vpb-vg-carousel-track",
      ref: trackRef,
      style: trackStyle,
      children: items.map(v => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tile__WEBPACK_IMPORTED_MODULE_1__["default"], {
        video: v,
        attributes: attributes,
        onSelect: onSelect
      }, v.id))
    }), showArrows && items.length > slidesToShow && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      type: "button",
      className: "vpb-vg-arrow next",
      "aria-label": "Next",
      onClick: onNext,
      children: "\u203A"
    }), showDots && dotsCount > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "vpb-vg-dots",
      children: Array.from({
        length: dotsCount
      }).map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        type: "button",
        className: `vpb-vg-dot ${i === Math.floor(index / slidesToScroll) ? "is-active" : ""}`,
        "aria-label": `Go to slide ${i + 1}`,
        onClick: () => goTo(i * slidesToScroll)
      }, i))
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);

/***/ },

/***/ "./src/blocks/video-gallery/Components/Common/EditorEmbedPortal.js"
/*!*************************************************************************!*\
  !*** ./src/blocks/video-gallery/Components/Common/EditorEmbedPortal.js ***!
  \*************************************************************************/
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
 * Editor-only YouTube/Vimeo player for the apiVersion-3 canvas.
 *
 * Under WordPress Studio the editor canvas is a sandboxed iframe that lacks
 * `allow-same-origin`, so any third-party embed nested inside it crashes and
 * shows a black box. To work around that we render the embed iframe into the
 * TOP-LEVEL admin window (a real, unsandboxed origin) and keep it positioned
 * over a placeholder that lives in the canvas — the same technique the main
 * video-player block uses for its YouTube/Vimeo preview.
 *
 * On the frontend this component is never used (PlayerEmbed renders a normal
 * inline iframe there); it is only mounted when `isEditor` is true.
 */

const EditorEmbedPortal = ({
  src,
  title,
  allow
}) => {
  const placeholderRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const portalRoot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [rect, setRect] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  // Build the container + embed iframe in the top-level admin document.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const topDoc = window.top?.document || window.document;
    const div = topDoc.createElement("div");
    div.style.cssText = "position:fixed;z-index:100000;overflow:hidden;background:#000;pointer-events:auto;";
    const iframe = topDoc.createElement("iframe");
    iframe.src = src;
    iframe.title = title || "Video";
    if (allow) iframe.setAttribute("allow", allow);
    iframe.setAttribute("allowfullscreen", "");
    iframe.style.cssText = "width:100%;height:100%;border:0;display:block;";
    div.appendChild(iframe);
    topDoc.body.appendChild(div);
    portalRoot.current = div;
    return () => {
      div.remove();
      portalRoot.current = null;
    };
  }, [src, title, allow]);

  // Track the placeholder's position (walking iframe boundaries to top-window
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
    style: {
      width: "100%",
      height: "100%",
      minHeight: "200px",
      background: "#000"
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorEmbedPortal);

/***/ },

/***/ "./src/blocks/video-gallery/Components/Common/Gallery.js"
/*!***************************************************************!*\
  !*** ./src/blocks/video-gallery/Components/Common/Gallery.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tile */ "./src/blocks/video-gallery/Components/Common/Tile.js");
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Carousel */ "./src/blocks/video-gallery/Components/Common/Carousel.js");
/* harmony import */ var _Lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Lightbox */ "./src/blocks/video-gallery/Components/Common/Lightbox.js");
/* harmony import */ var _PlayerEmbed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlayerEmbed */ "./src/blocks/video-gallery/Components/Common/PlayerEmbed.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-gallery/utils/functions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const ALL = "__all__";
const Filters = ({
  categories,
  active,
  onChange,
  filterStyle
}) => {
  if (!categories.length) return null;
  if (filterStyle === "dropdown") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "vpb-vg-filters is-dropdown",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("select", {
        className: "vpb-vg-filter-select",
        value: active,
        onChange: e => onChange(e.target.value),
        "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Filter videos by category", "video-player-block"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option", {
          value: ALL,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("All", "video-player-block")
        }), categories.map(c => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("option", {
          value: c,
          children: c
        }, c))]
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: `vpb-vg-filters is-${filterStyle || "pills"}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
      type: "button",
      className: `vpb-vg-filter-btn ${active === ALL ? "is-active" : ""}`,
      onClick: () => onChange(ALL),
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("All", "video-player-block")
    }), categories.map(c => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
      type: "button",
      className: `vpb-vg-filter-btn ${active === c ? "is-active" : ""}`,
      onClick: () => onChange(c),
      children: c
    }, c))]
  });
};
const Gallery = ({
  attributes,
  isEditor = false
}) => {
  const {
    videos = [],
    layout = "grid",
    playbackMode = "lightbox",
    showFilters,
    filterStyle,
    autoplayNext,
    loop,
    emptyStateText
  } = attributes;
  const [activeFilter, setActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(ALL);
  const [openIndex, setOpenIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1);
  const [inlineId, setInlineId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [featuredIndex, setFeaturedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const categories = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utils_functions__WEBPACK_IMPORTED_MODULE_6__.collectCategories)(videos), [videos]);
  const filtered = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (activeFilter === ALL) return videos;
    return videos.filter(v => v?.category === activeFilter);
  }, [videos, activeFilter]);

  // When the filter changes (or the underlying videos change), reset
  // openIndex/featuredIndex/inlineId so we never point at a stale or
  // out-of-range item. This is required when filters produce an empty
  // set or when the currently-playing video is filtered out.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setOpenIndex(-1);
    setInlineId(null);
    setFeaturedIndex(0);
  }, [activeFilter, videos]);
  const openVideo = video => {
    const i = filtered.findIndex(v => v.id === video.id);
    if (playbackMode === "inline") {
      setInlineId(video.id);
      return;
    }
    if (playbackMode === "featured") {
      setFeaturedIndex(Math.max(0, i));
      return;
    }
    setOpenIndex(i);
  };
  const closeLightbox = () => setOpenIndex(-1);
  const advance = delta => {
    setOpenIndex(curr => {
      if (curr < 0) return curr;
      const next = curr + delta;
      if (next < 0) return loop ? filtered.length - 1 : 0;
      if (next >= filtered.length) return loop ? 0 : filtered.length - 1;
      return next;
    });
  };

  // Featured (playlist) mode handlers
  const onFeaturedEnded = () => {
    if (!autoplayNext) return;
    const next = featuredIndex + 1;
    if (next >= filtered.length) {
      if (loop) setFeaturedIndex(0);
      return;
    }
    setFeaturedIndex(next);
  };
  const renderTiles = items => items.map(v => {
    if (playbackMode === "inline" && inlineId === v.id) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "vpb-vg-tile",
        style: {
          cursor: "default"
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PlayerEmbed__WEBPACK_IMPORTED_MODULE_5__["default"], {
          video: v,
          attributes: attributes,
          isEditor: isEditor
        })
      }, v.id);
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Tile__WEBPACK_IMPORTED_MODULE_2__["default"], {
      video: v,
      attributes: attributes,
      onSelect: openVideo
    }, v.id);
  });
  const renderLayoutContainer = () => {
    if (!filtered.length) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "vpb-vg-empty",
        children: emptyStateText || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No videos to display.", "video-player-block")
      });
    }
    if (layout === "carousel") {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
        items: filtered,
        attributes: attributes,
        onSelect: openVideo
      });
    }
    if (layout === "masonry") {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "vpb-vg-masonry",
        children: renderTiles(filtered)
      });
    }
    if (layout === "bento") {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "vpb-vg-bento",
        children: renderTiles(filtered)
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "vpb-vg-grid",
      children: renderTiles(filtered)
    });
  };
  const renderFeatured = () => {
    if (!filtered.length) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "vpb-vg-empty",
        children: emptyStateText || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No videos to display.", "video-player-block")
      });
    }
    const current = filtered[Math.min(featuredIndex, filtered.length - 1)];
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "vpb-vg-featured",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "vpb-vg-stage",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PlayerEmbed__WEBPACK_IMPORTED_MODULE_5__["default"], {
          video: current,
          attributes: attributes,
          onEnded: onFeaturedEnded,
          isEditor: isEditor
        }, current.id)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "vpb-vg-playlist",
        role: "listbox",
        children: filtered.map((v, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: `vpb-vg-pitem ${i === featuredIndex ? "is-active" : ""}`,
          role: "option",
          "aria-selected": i === featuredIndex,
          tabIndex: 0,
          onClick: () => setFeaturedIndex(i),
          onKeyDown: e => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setFeaturedIndex(i);
            }
          },
          children: [(0,_utils_functions__WEBPACK_IMPORTED_MODULE_6__.resolvePoster)(v) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
            className: "vpb-vg-pthumb",
            src: (0,_utils_functions__WEBPACK_IMPORTED_MODULE_6__.resolvePoster)(v),
            alt: v.title || "",
            loading: "lazy"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "vpb-vg-pthumb",
            style: {
              background: "#1f2937"
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "vpb-vg-pmeta",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h4", {
              className: "vpb-vg-ptitle",
              children: v.title
            }), v.duration && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: "vpb-vg-pdur",
              children: v.duration
            })]
          })]
        }, v.id))
      })]
    });
  };
  const showFiltersUI = showFilters && categories.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "vpb-vg-root",
    children: [showFiltersUI && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Filters, {
      categories: categories,
      active: activeFilter,
      onChange: setActiveFilter,
      filterStyle: filterStyle
    }), playbackMode === "featured" ? renderFeatured() : renderLayoutContainer(), playbackMode === "lightbox" && openIndex >= 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Lightbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
      video: filtered[openIndex],
      attributes: attributes,
      onClose: closeLightbox,
      onPrev: () => advance(-1),
      onNext: () => advance(1),
      showNav: filtered.length > 1,
      isEditor: isEditor
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);

/***/ },

/***/ "./src/blocks/video-gallery/Components/Common/Lightbox.js"
/*!****************************************************************!*\
  !*** ./src/blocks/video-gallery/Components/Common/Lightbox.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PlayerEmbed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerEmbed */ "./src/blocks/video-gallery/Components/Common/PlayerEmbed.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const Lightbox = ({
  video,
  attributes,
  onClose,
  onPrev,
  onNext,
  showNav,
  isEditor = false
}) => {
  const dialogRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onKey = e => {
      if (e.key === "Escape") onClose && onClose();
      if (e.key === "ArrowLeft") onPrev && onPrev();
      if (e.key === "ArrowRight") onNext && onNext();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);
  if (!video) return null;
  const theme = attributes?.lightboxTheme || "dark";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: `vpb-vg-lightbox is-${theme}`,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": video.title || "Video",
    onClick: e => {
      if (e.target === e.currentTarget) onClose && onClose();
    },
    ref: dialogRef,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "vpb-vg-lb-inner",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        type: "button",
        className: "vpb-vg-lb-close",
        "aria-label": "Close",
        onClick: onClose,
        children: "\xD7"
      }), showNav && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "button",
          className: "vpb-vg-lb-nav prev",
          "aria-label": "Previous video",
          onClick: onPrev,
          children: "\u2039"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "button",
          className: "vpb-vg-lb-nav next",
          "aria-label": "Next video",
          onClick: onNext,
          children: "\u203A"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "vpb-vg-lb-stage",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PlayerEmbed__WEBPACK_IMPORTED_MODULE_1__["default"], {
          video: video,
          attributes: attributes,
          isEditor: isEditor
        })
      }), video.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
        className: "vpb-vg-lb-title",
        children: video.title
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lightbox);

/***/ },

/***/ "./src/blocks/video-gallery/Components/Common/PlayerEmbed.js"
/*!*******************************************************************!*\
  !*** ./src/blocks/video-gallery/Components/Common/PlayerEmbed.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-gallery/utils/functions.js");
/* harmony import */ var _EditorEmbedPortal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditorEmbedPortal */ "./src/blocks/video-gallery/Components/Common/EditorEmbedPortal.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Native <video> for self-hosted / adaptive sources. MP4 and WebM play
 * natively. HLS (.m3u8) and DASH (.mpd) are NOT natively supported outside
 * Safari, so we lazily load hls.js / dash.js (already bundled by the plugin)
 * and attach them to the element. The libraries are code-split via dynamic
 * import(), so they only download when an HLS/DASH video actually plays.
 */

const NativeVideo = ({
  video,
  autoplay,
  onEnded
}) => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const url = video.url;
  const wantHls = video.source === "hls" || (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.isHls)(url);
  const wantDash = video.source === "dash" || (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.isDash)(url);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const el = ref.current;
    if (!el) return undefined;
    let destroyed = false;
    let hls = null;
    let dashPlayer = null;
    if (wantDash) {
      // dash.js drives the element for .mpd streams.
      __webpack_require__.e(/*! import() */ "vendors-node_modules_dashjs_dist_modern_esm_dash_all_min_js").then(__webpack_require__.bind(__webpack_require__, /*! dashjs */ "./node_modules/dashjs/dist/modern/esm/dash.all.min.js")).then(mod => {
        if (destroyed || !ref.current) return;
        const dashjs = mod.default || mod;
        dashPlayer = dashjs.MediaPlayer().create();
        dashPlayer.initialize(el, url, autoplay);
      }).catch(() => {
        el.src = url; // last-ditch: let the browser try
      });
    } else if (wantHls && !el.canPlayType("application/vnd.apple.mpegurl")) {
      // hls.js for browsers without native HLS (i.e. everything but Safari).
      __webpack_require__.e(/*! import() */ "vendors-node_modules_hls_js_dist_hls_mjs").then(__webpack_require__.bind(__webpack_require__, /*! hls.js */ "./node_modules/hls.js/dist/hls.mjs")).then(mod => {
        if (destroyed || !ref.current) return;
        const Hls = mod.default || mod;
        if (Hls.isSupported()) {
          hls = new Hls();
          hls.loadSource(url);
          hls.attachMedia(el);
        } else {
          el.src = url;
        }
      }).catch(() => {
        el.src = url;
      });
    } else {
      // MP4/WebM, or Safari with native HLS.
      el.src = url;
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
      if (dashPlayer) {
        try {
          dashPlayer.reset();
        } catch (_) {
          /* ignore */
        }
      }
    };
  }, [url, wantHls, wantDash, autoplay]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("video", {
    ref: ref,
    controls: true,
    playsInline: true,
    autoPlay: autoplay,
    poster: video.poster || undefined,
    onEnded: onEnded,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("track", {
      kind: "captions"
    })
  });
};

/**
 * Renders an in-page video player using a lightweight strategy:
 *
 *  - youtube  -> iframe with the youtube embed URL
 *  - vimeo    -> iframe with the vimeo embed URL
 *  - mp4/hls/dash/anything else -> native <video> tag
 */
const PlayerEmbed = ({
  video,
  onEnded,
  isEditor = false
}) => {
  if (!video?.url) return null;
  const url = video.url;
  const autoplay = true;
  if (video.source === "youtube" || (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.isYoutube)(url)) {
    const id = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.getYoutubeId)(url);
    const src = `https://www.youtube.com/embed/${id}?autoplay=${autoplay ? 1 : 0}&rel=0&modestbranding=1`;
    const allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    // In the Studio editor canvas the embed must live in the parent window.
    if (isEditor) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_EditorEmbedPortal__WEBPACK_IMPORTED_MODULE_2__["default"], {
        src: src,
        title: video.title || "YouTube video",
        allow: allow
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("iframe", {
      src: src,
      title: video.title || "YouTube video",
      allow: allow,
      allowFullScreen: true
    });
  }
  if (video.source === "vimeo" || (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.isVimeo)(url)) {
    const id = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.getVimeoId)(url);
    const src = `https://player.vimeo.com/video/${id}?autoplay=${autoplay ? 1 : 0}&title=0&byline=0&portrait=0`;
    const allow = "autoplay; fullscreen; picture-in-picture";
    if (isEditor) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_EditorEmbedPortal__WEBPACK_IMPORTED_MODULE_2__["default"], {
        src: src,
        title: video.title || "Vimeo video",
        allow: allow
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("iframe", {
      src: src,
      title: video.title || "Vimeo video",
      allow: allow,
      allowFullScreen: true
    });
  }

  // Native video for mp4/webm, plus hls.js/dash.js-driven HLS/DASH.
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(NativeVideo, {
    video: video,
    autoplay: autoplay,
    onEnded: onEnded
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerEmbed);

/***/ },

/***/ "./src/blocks/video-gallery/Components/Common/Style.js"
/*!*************************************************************!*\
  !*** ./src/blocks/video-gallery/Components/Common/Style.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-gallery/utils/functions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const shadowToCss = s => {
  if (!s) return "none";
  return `${s.x || 0}px ${s.y || 0}px ${s.blur || 0}px ${s.spread || 0}px ${s.color || "rgba(0,0,0,0.18)"}`;
};
const Style = ({
  attributes,
  id
}) => {
  const {
    columns = {},
    gap = 16,
    aspectRatio = "16:9",
    customAspect = "16/9",
    tileBorderRadius = 10,
    tileShadow = {},
    tileOverlayColor,
    tileBgColor,
    titleColor,
    descriptionColor,
    filterActiveColor,
    filterTextColor,
    playIconColor,
    playIconBgColor,
    carouselSettings = {}
  } = attributes;
  const cols = {
    desktop: 3,
    tablet: 2,
    mobile: 1,
    ...columns
  };
  const aspect = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_0__.resolveAspect)(aspectRatio, customAspect);
  const sel = `#${id}`;
  const css = `
    ${sel} {
      --vpb-vg-gap: ${gap}px;
      --vpb-vg-cols-d: ${cols.desktop};
      --vpb-vg-cols-t: ${cols.tablet};
      --vpb-vg-cols-m: ${cols.mobile};
      --vpb-vg-aspect: ${aspect};
      --vpb-vg-tile-radius: ${tileBorderRadius}px;
      --vpb-vg-tile-shadow: ${shadowToCss(tileShadow)};
      --vpb-vg-tile-bg: ${tileBgColor || "#0f1115"};
      --vpb-vg-overlay: ${tileOverlayColor || "rgba(0,0,0,0.45)"};
      --vpb-vg-title: ${titleColor || "#fff"};
      --vpb-vg-desc: ${descriptionColor || "rgba(255,255,255,0.78)"};
      --vpb-vg-filter-active: ${filterActiveColor || "#136EF5"};
      --vpb-vg-filter-text: ${filterTextColor || "#1d1d1f"};
      --vpb-vg-play-color: ${playIconColor || "#fff"};
      --vpb-vg-play-bg: ${playIconBgColor || "rgba(19,110,245,0.92)"};
      --vpb-vg-cslides: ${carouselSettings.slidesToShow || 3};
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

/***/ "./src/blocks/video-gallery/Components/Common/Tile.js"
/*!************************************************************!*\
  !*** ./src/blocks/video-gallery/Components/Common/Tile.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/functions */ "./src/blocks/video-gallery/utils/functions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const PlayIcon = ({
  style
}) => {
  if (style === "triangle") {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M8 5v14l11-7z"
    })
  });
};
const Tile = ({
  video,
  attributes,
  onSelect
}) => {
  const {
    showTitle,
    showDuration,
    showDescription,
    showPlayIcon,
    playIconStyle,
    hoverEffect,
    lazyLoad
  } = attributes;
  const poster = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_0__.resolvePoster)(video);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: `vpb-vg-tile is-hover-${hoverEffect}`,
    role: "button",
    tabIndex: 0,
    "aria-label": video?.title || "Play video",
    onClick: () => onSelect && onSelect(video),
    onKeyDown: e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onSelect && onSelect(video);
      }
    },
    children: [poster ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      className: "vpb-vg-thumb",
      src: poster,
      alt: video?.title || "",
      loading: lazyLoad ? "lazy" : "eager",
      decoding: "async"
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "vpb-vg-thumb-placeholder",
      "aria-hidden": "true"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "vpb-vg-overlay",
      "aria-hidden": "true"
    }), showPlayIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: `vpb-vg-play is-${playIconStyle || "circle"}`,
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PlayIcon, {
        style: playIconStyle
      })
    }), showDuration && video?.duration && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "vpb-vg-duration",
      children: video.duration
    }), (showTitle || showDescription) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "vpb-vg-meta",
      children: [showTitle && video?.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
        className: "vpb-vg-title-text",
        children: video.title
      }), showDescription && video?.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "vpb-vg-desc",
        children: video.description
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tile);

/***/ },

/***/ "./src/blocks/video-gallery/utils/functions.js"
/*!*****************************************************!*\
  !*** ./src/blocks/video-gallery/utils/functions.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collectCategories: () => (/* binding */ collectCategories),
/* harmony export */   detectSource: () => (/* binding */ detectSource),
/* harmony export */   getVimeoId: () => (/* binding */ getVimeoId),
/* harmony export */   getYoutubeId: () => (/* binding */ getYoutubeId),
/* harmony export */   isDash: () => (/* binding */ isDash),
/* harmony export */   isHls: () => (/* binding */ isHls),
/* harmony export */   isVimeo: () => (/* binding */ isVimeo),
/* harmony export */   isYoutube: () => (/* binding */ isYoutube),
/* harmony export */   makeId: () => (/* binding */ makeId),
/* harmony export */   resolveAspect: () => (/* binding */ resolveAspect),
/* harmony export */   resolvePoster: () => (/* binding */ resolvePoster)
/* harmony export */ });
/**
 * Detect a YouTube URL and extract its video ID.
 */
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

/**
 * Detect the most likely source type from a raw URL.
 */
const detectSource = url => {
  if (!url) return "mp4";
  if (isYoutube(url)) return "youtube";
  if (isVimeo(url)) return "vimeo";
  if (isHls(url)) return "hls";
  if (isDash(url)) return "dash";
  return "mp4";
};

/**
 * Resolve an effective aspect ratio (e.g. "16:9" -> "16/9").
 */
const resolveAspect = (aspectRatio, customAspect) => {
  if (aspectRatio === "custom") return customAspect || "16/9";
  if (!aspectRatio) return "16/9";
  return aspectRatio.replace(":", "/");
};

/**
 * Build a thumbnail URL for a video item; falls back to a YouTube/Vimeo
 * derived thumbnail when no poster is set.
 */
const resolvePoster = item => {
  if (item?.poster) return item.poster;
  if (item?.source === "youtube" || isYoutube(item?.url)) {
    const id = getYoutubeId(item?.url || "");
    if (id) return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }
  return "";
};

/**
 * Build a unique list of categories from the videos array.
 */
const collectCategories = videos => {
  const set = new Set();
  (videos || []).forEach(v => {
    if (v?.category) set.add(v.category);
  });
  return Array.from(set);
};

/**
 * Build a stable, unique id for a new gallery item.
 */
const makeId = () => `v-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

/***/ },

/***/ "./src/blocks/video-gallery/style.scss"
/*!*********************************************!*\
  !*** ./src/blocks/video-gallery/style.scss ***!
  \*********************************************/
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
/******/ 			"blocks/video-gallery/view": 0
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
/*!******************************************!*\
  !*** ./src/blocks/video-gallery/view.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/video-gallery/style.scss");
/* harmony import */ var _Components_Common_Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Common/Style */ "./src/blocks/video-gallery/Components/Common/Style.js");
/* harmony import */ var _Components_Common_Gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/Gallery */ "./src/blocks/video-gallery/Components/Common/Gallery.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".wp-block-vpb-video-gallery");
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_Common_Gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
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