/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/header/burgerMenu.js":
/*!*************************************!*\
  !*** ./src/js/header/burgerMenu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function burgerMenu() {
  const burgerMenu = document.querySelector(".nav__mobile__burger__menu");
  console.log(burgerMenu);
  const datasClasses = [document.querySelector(".nav__top"), document.querySelector(".nav__bottom")];
  burgerMenu.addEventListener("click", event => {
    if (burgerMenu.classList.contains("active")) {
      burgerMenu.classList.remove("active");
      burgerMenu.innerHTML = `
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1.25" x2="20" y2="1.25" stroke="black" stroke-width="1.5"/>
            <line y1="7.25" x2="20" y2="7.25" stroke="black" stroke-width="1.5"/>
            <line y1="13.25" x2="12" y2="13.25" stroke="black" stroke-width="1.5"/>
            </svg>
        `;
      datasClasses.forEach(item => {
        item.style.cssText = `
                display: none`;
      });
      return;
    }
    burgerMenu.classList.add("active");
    burgerMenu.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>
        `;
    datasClasses.forEach(item => {
      item.style.display = "flex";
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMenu);

/***/ }),

/***/ "./src/js/header/swiper.js":
/*!*********************************!*\
  !*** ./src/js/header/swiper.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function swiperfunc() {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swiperfunc);

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/img/corporative.jpg":
/*!*********************************!*\
  !*** ./src/img/corporative.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/corporative.jpg";

/***/ }),

/***/ "./src/img/gotovie-nobori.jpg":
/*!************************************!*\
  !*** ./src/img/gotovie-nobori.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/gotovie-nobori.jpg";

/***/ }),

/***/ "./src/img/main-info.png":
/*!*******************************!*\
  !*** ./src/img/main-info.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/main-info.png";

/***/ }),

/***/ "./src/img/nabor-individual.jpg":
/*!**************************************!*\
  !*** ./src/img/nabor-individual.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/nabor-individual.jpg";

/***/ }),

/***/ "./src/img/optovie.jpg":
/*!*****************************!*\
  !*** ./src/img/optovie.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/optovie.jpg";

/***/ }),

/***/ "./src/img/sobrat-svoy-nabor.jpg":
/*!***************************************!*\
  !*** ./src/img/sobrat-svoy-nabor.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/sobrat-svoy-nabor.jpg";

/***/ }),

/***/ "./src/img/svadebni.jpg":
/*!******************************!*\
  !*** ./src/img/svadebni.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/svadebni.jpg";

/***/ })

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");
/* harmony import */ var _js_header_burgerMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/header/burgerMenu */ "./src/js/header/burgerMenu.js");
/* harmony import */ var _js_header_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/header/swiper */ "./src/js/header/swiper.js");
/* harmony import */ var _img_main_info_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/main-info.png */ "./src/img/main-info.png");
/* harmony import */ var _img_gotovie_nobori_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/gotovie-nobori.jpg */ "./src/img/gotovie-nobori.jpg");
/* harmony import */ var _img_corporative_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/corporative.jpg */ "./src/img/corporative.jpg");
/* harmony import */ var _img_nabor_individual_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/nabor-individual.jpg */ "./src/img/nabor-individual.jpg");
/* harmony import */ var _img_optovie_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/optovie.jpg */ "./src/img/optovie.jpg");
/* harmony import */ var _img_svadebni_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/svadebni.jpg */ "./src/img/svadebni.jpg");
/* harmony import */ var _img_sobrat_svoy_nabor_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/sobrat-svoy-nabor.jpg */ "./src/img/sobrat-svoy-nabor.jpg");











// Start-Logic for appearing header section with nav section in all pages

function addHeaderAndNav(page) {
  fetch('navMenu.html').then(response => response.text()).then(html => {
    document.getElementById('header').innerHTML = html;
    (0,_js_header_swiper__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_js_header_burgerMenu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }).catch(error => {
    console.error('Error loading header:', error);
  });
}
const pages = ["index", "gotovie"];
pages.forEach(page => {
  addHeaderAndNav(page);
});
try {
  document.querySelector(".gotovie1").addEventListener("click", () => {
    window.location.href = "gotovie.html";
  });
} catch {}

// End-Logic for appearing header section with nav section in all pages
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDLENBQ0RrQyxLQUFLLENBQUNDLEtBQUssSUFBSTtJQUNaaEMsT0FBTyxDQUFDZ0MsS0FBSyxDQUFDLHVCQUF1QixFQUFFQSxLQUFLLENBQUM7RUFDakQsQ0FBQyxDQUFDO0FBQ1Y7QUFFQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFFO0FBQ25DQSxLQUFLLENBQUN4QixPQUFPLENBQUNlLElBQUksSUFBSTtFQUNsQkQsZUFBZSxDQUFDQyxJQUFJLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBRUYsSUFBSTtFQUNBMUIsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUNJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0lBQ2hFK0IsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksR0FBRyxjQUFjO0VBQ3pDLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxNQUFNLENBQUM7O0FBRVQsdUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmlwLy4vc3JjL2pzL2hlYWRlci9idXJnZXJNZW51LmpzIiwid2VicGFjazovL3RyaXAvLi9zcmMvanMvaGVhZGVyL3N3aXBlci5qcyIsIndlYnBhY2s6Ly90cmlwLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vdHJpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cmlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cmlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHJpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RyaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdHJpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBidXJnZXJNZW51KCkge1xyXG4gICAgY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2X19tb2JpbGVfX2J1cmdlcl9fbWVudVwiKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhidXJnZXJNZW51KVxyXG4gICAgY29uc3QgZGF0YXNDbGFzc2VzID0gW1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2X190b3BcIiksXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZfX2JvdHRvbVwiKVxyXG4gICAgXTtcclxuXHJcbiAgICBidXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoYnVyZ2VyTWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgYnVyZ2VyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBidXJnZXJNZW51LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDIwIDE0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgIDxsaW5lIHkxPVwiMS4yNVwiIHgyPVwiMjBcIiB5Mj1cIjEuMjVcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZS13aWR0aD1cIjEuNVwiLz5cclxuICAgICAgICAgICAgPGxpbmUgeTE9XCI3LjI1XCIgeDI9XCIyMFwiIHkyPVwiNy4yNVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIvPlxyXG4gICAgICAgICAgICA8bGluZSB5MT1cIjEzLjI1XCIgeDI9XCIxMlwiIHkyPVwiMTMuMjVcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZS13aWR0aD1cIjEuNVwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgIGRhdGFzQ2xhc3Nlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZWA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVyZ2VyTWVudS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGJ1cmdlck1lbnUuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiAgdmlld0JveD1cIjAgMCA1MCA1MFwiIHdpZHRoPVwiMjVweFwiIGhlaWdodD1cIjI1cHhcIj48cGF0aCBkPVwiTSA5LjE1NjI1IDYuMzEyNSBMIDYuMzEyNSA5LjE1NjI1IEwgMjIuMTU2MjUgMjUgTCA2LjIxODc1IDQwLjk2ODc1IEwgOS4wMzEyNSA0My43ODEyNSBMIDI1IDI3Ljg0Mzc1IEwgNDAuOTM3NSA0My43ODEyNSBMIDQzLjc4MTI1IDQwLjkzNzUgTCAyNy44NDM3NSAyNSBMIDQzLjY4NzUgOS4xNTYyNSBMIDQwLjg0Mzc1IDYuMzEyNSBMIDI1IDIyLjE1NjI1IFpcIi8+PC9zdmc+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBkYXRhc0NsYXNzZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1cmdlck1lbnU7XHJcbiIsImZ1bmN0aW9uIHN3aXBlcmZ1bmMoKSB7XHJcbiAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlcicsIHtcclxuICAgIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcclxuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuXHJcbiAgICAvLyBOYXZpZ2F0aW9uIGFycm93c1xyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IHN3aXBlcmZ1bmM7XHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsImltcG9ydCBcIi4vc2Nzcy9zdHlsZXMuc2Nzc1wiO1xyXG5pbXBvcnQgYnVyZ2VyTWVudSBmcm9tIFwiLi9qcy9oZWFkZXIvYnVyZ2VyTWVudVwiO1xyXG5pbXBvcnQgc3dpcGVyZnVuYyBmcm9tIFwiLi9qcy9oZWFkZXIvc3dpcGVyXCI7XHJcbmltcG9ydCBcIi4vaW1nL21haW4taW5mby5wbmdcIjtcclxuaW1wb3J0IFwiLi9pbWcvZ290b3ZpZS1ub2JvcmkuanBnXCI7XHJcbmltcG9ydCBcIi4vaW1nL2NvcnBvcmF0aXZlLmpwZ1wiO1xyXG5pbXBvcnQgXCIuL2ltZy9uYWJvci1pbmRpdmlkdWFsLmpwZ1wiO1xyXG5pbXBvcnQgXCIuL2ltZy9vcHRvdmllLmpwZ1wiO1xyXG5pbXBvcnQgXCIuL2ltZy9zdmFkZWJuaS5qcGdcIjtcclxuaW1wb3J0IFwiLi9pbWcvc29icmF0LXN2b3ktbmFib3IuanBnXCI7XHJcblxyXG4vLyBTdGFydC1Mb2dpYyBmb3IgYXBwZWFyaW5nIGhlYWRlciBzZWN0aW9uIHdpdGggbmF2IHNlY3Rpb24gaW4gYWxsIHBhZ2VzXHJcblxyXG5mdW5jdGlvbiBhZGRIZWFkZXJBbmROYXYocGFnZSkge1xyXG4gICAgZmV0Y2goJ25hdk1lbnUuaHRtbCcpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG4gICAgICAgIC50aGVuKGh0bWwgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJykuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICAgICAgc3dpcGVyZnVuYygpO1xyXG4gICAgICAgICAgICBidXJnZXJNZW51KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIGhlYWRlcjonLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHBhZ2VzID0gW1wiaW5kZXhcIiwgXCJnb3RvdmllXCIsXTtcclxucGFnZXMuZm9yRWFjaChwYWdlID0+IHtcclxuICAgIGFkZEhlYWRlckFuZE5hdihwYWdlKTtcclxufSlcclxuXHJcbnRyeSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvdG92aWUxXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImdvdG92aWUuaHRtbFwiO1xyXG4gICAgfSlcclxufSBjYXRjaCB7fVxyXG5cclxuLy8gRW5kLUxvZ2ljIGZvciBhcHBlYXJpbmcgaGVhZGVyIHNlY3Rpb24gd2l0aCBuYXYgc2VjdGlvbiBpbiBhbGwgcGFnZXMiXSwibmFtZXMiOlsiYnVyZ2VyTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJsb2ciLCJkYXRhc0NsYXNzZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImlubmVySFRNTCIsImZvckVhY2giLCJpdGVtIiwic3R5bGUiLCJjc3NUZXh0IiwiYWRkIiwiZGlzcGxheSIsInN3aXBlcmZ1bmMiLCJzd2lwZXIiLCJTd2lwZXIiLCJkaXJlY3Rpb24iLCJsb29wIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImFkZEhlYWRlckFuZE5hdiIsInBhZ2UiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInRleHQiLCJodG1sIiwiZ2V0RWxlbWVudEJ5SWQiLCJjYXRjaCIsImVycm9yIiwicGFnZXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9