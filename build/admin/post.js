/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/post.scss"
/*!*****************************!*\
  !*** ./src/admin/post.scss ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/*!***************************!*\
  !*** ./src/admin/post.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post.scss */ "./src/admin/post.scss");

const {
  __
} = wp.i18n;
window.copyBPlAdminShortcode = id => {
  const input = document.querySelector(`#bPlAdminShortcode-${id} input`);
  const tooltip = document.querySelector(`#bPlAdminShortcode-${id} .tooltip`);
  if (!input || !tooltip) return;
  const setTooltip = text => {
    tooltip.innerHTML = text;
  };
  const reset = () => {
    setTimeout(() => {
      setTooltip(__("Copy To Clipboard", "video-player-block"));
    }, 1500);
  };
  const onSuccess = () => {
    setTooltip(__("Copied Successfully!", "video-player-block"));
    reset();
  };
  const onFailure = () => {
    setTooltip(__("Copy failed — please copy manually.", "video-player-block"));
    reset();
  };
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(input.value).then(onSuccess, onFailure);
    return;
  }

  // Fallback for older browsers without the Clipboard API.
  input.select();
  input.setSelectionRange(0, input.value.length);
  try {
    const ok = document.execCommand("copy");
    ok ? onSuccess() : onFailure();
  } catch (e) {
    onFailure();
  }
};
})();

/******/ })()
;
//# sourceMappingURL=post.js.map