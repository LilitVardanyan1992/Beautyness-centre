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
        item.style.display = "none";
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

/***/ "./src/js/header/miniHeaderSlider.js":
/*!*******************************************!*\
  !*** ./src/js/header/miniHeaderSlider.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swiper);

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/img/main-info.png":
/*!*******************************!*\
  !*** ./src/img/main-info.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/main-info.png";

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
/* harmony import */ var _js_header_miniHeaderSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/header/miniHeaderSlider */ "./src/js/header/miniHeaderSlider.js");
/* harmony import */ var _js_header_burgerMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/header/burgerMenu */ "./src/js/header/burgerMenu.js");
/* harmony import */ var _img_main_info_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/main-info.png */ "./src/img/main-info.png");




(0,_js_header_burgerMenu__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40MWE1NWFhMDM1OGU2MmE4NWVmZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFVBQVVBLENBQUEsRUFBRztFQUNsQixNQUFNQSxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLDRCQUE0QixDQUFDO0VBRXZFLE1BQU1DLFlBQVksR0FBRyxDQUNqQkYsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQ25DRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FDekM7RUFFREYsVUFBVSxDQUFDSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLEtBQUssSUFBSztJQUM1QyxJQUFJTCxVQUFVLENBQUNNLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO01BQ3pDUCxVQUFVLENBQUNNLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUNyQ1IsVUFBVSxDQUFDUyxTQUFTLEdBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7TUFFR04sWUFBWSxDQUFDTyxPQUFPLENBQUNDLElBQUksSUFBSTtRQUN6QkEsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO01BQy9CLENBQUMsQ0FBQztNQUNGO0lBQ0o7SUFDQWIsVUFBVSxDQUFDTSxTQUFTLENBQUNRLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDbENkLFVBQVUsQ0FBQ1MsU0FBUyxHQUFJO0FBQ2hDO0FBQ0EsU0FBUztJQUNETixZQUFZLENBQUNPLE9BQU8sQ0FBQ0MsSUFBSSxJQUFJO01BQ3pCQSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07SUFDL0IsQ0FBQyxDQUFDO0VBRU4sQ0FBQyxDQUFDO0FBQ047QUFFQSxpRUFBZWIsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUNuQ3pCLE1BQU1lLE1BQU0sR0FBRyxJQUFJQyxNQUFNLENBQUMsU0FBUyxFQUFFO0VBQ2pDO0VBQ0FDLFNBQVMsRUFBRSxZQUFZO0VBQ3ZCQyxJQUFJLEVBQUUsSUFBSTtFQUVWO0VBQ0FDLFVBQVUsRUFBRTtJQUNWQyxNQUFNLEVBQUUscUJBQXFCO0lBQzdCQyxNQUFNLEVBQUU7RUFDVjtBQUNGLENBQUMsQ0FBQztBQUVGLGlFQUFlTixNQUFNOzs7Ozs7Ozs7OztBQ1p2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ3NCO0FBQ0Y7QUFDbkI7QUFFN0JmLGlFQUFVLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJpcC8uL3NyYy9qcy9oZWFkZXIvYnVyZ2VyTWVudS5qcyIsIndlYnBhY2s6Ly90cmlwLy4vc3JjL2pzL2hlYWRlci9taW5pSGVhZGVyU2xpZGVyLmpzIiwid2VicGFjazovL3RyaXAvLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcz8wMTY5Iiwid2VicGFjazovL3RyaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHJpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHJpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RyaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cmlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RyaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYnVyZ2VyTWVudSgpIHtcclxuICAgIGNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdl9fbW9iaWxlX19idXJnZXJfX21lbnVcIik7XHJcblxyXG4gICAgY29uc3QgZGF0YXNDbGFzc2VzID0gW1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2X190b3BcIiksXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZfX2JvdHRvbVwiKVxyXG4gICAgXTtcclxuXHJcbiAgICBidXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoYnVyZ2VyTWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgYnVyZ2VyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBidXJnZXJNZW51LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDIwIDE0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgIDxsaW5lIHkxPVwiMS4yNVwiIHgyPVwiMjBcIiB5Mj1cIjEuMjVcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZS13aWR0aD1cIjEuNVwiLz5cclxuICAgICAgICAgICAgPGxpbmUgeTE9XCI3LjI1XCIgeDI9XCIyMFwiIHkyPVwiNy4yNVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIvPlxyXG4gICAgICAgICAgICA8bGluZSB5MT1cIjEzLjI1XCIgeDI9XCIxMlwiIHkyPVwiMTMuMjVcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZS13aWR0aD1cIjEuNVwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgIGRhdGFzQ2xhc3Nlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVyZ2VyTWVudS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGJ1cmdlck1lbnUuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiAgdmlld0JveD1cIjAgMCA1MCA1MFwiIHdpZHRoPVwiMjVweFwiIGhlaWdodD1cIjI1cHhcIj48cGF0aCBkPVwiTSA5LjE1NjI1IDYuMzEyNSBMIDYuMzEyNSA5LjE1NjI1IEwgMjIuMTU2MjUgMjUgTCA2LjIxODc1IDQwLjk2ODc1IEwgOS4wMzEyNSA0My43ODEyNSBMIDI1IDI3Ljg0Mzc1IEwgNDAuOTM3NSA0My43ODEyNSBMIDQzLjc4MTI1IDQwLjkzNzUgTCAyNy44NDM3NSAyNSBMIDQzLjY4NzUgOS4xNTYyNSBMIDQwLjg0Mzc1IDYuMzEyNSBMIDI1IDIyLjE1NjI1IFpcIi8+PC9zdmc+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBkYXRhc0NsYXNzZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidXJnZXJNZW51O1xyXG4iLCJjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyJywge1xyXG4gICAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xyXG4gICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXHJcbiAgICBsb29wOiB0cnVlLFxyXG5cclxuICAgIC8vIE5hdmlnYXRpb24gYXJyb3dzXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHN3aXBlcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsImltcG9ydCBcIi4vc2Nzcy9zdHlsZXMuc2Nzc1wiO1xyXG5pbXBvcnQgc3dpcGVyIGZyb20gXCIuL2pzL2hlYWRlci9taW5pSGVhZGVyU2xpZGVyXCI7XHJcbmltcG9ydCBidXJnZXJNZW51IGZyb20gXCIuL2pzL2hlYWRlci9idXJnZXJNZW51XCI7XHJcbmltcG9ydCBcIi4vaW1nL21haW4taW5mby5wbmdcIjtcclxuXHJcbmJ1cmdlck1lbnUoKSJdLCJuYW1lcyI6WyJidXJnZXJNZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGF0YXNDbGFzc2VzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwiaXRlbSIsInN0eWxlIiwiZGlzcGxheSIsImFkZCIsInN3aXBlciIsIlN3aXBlciIsImRpcmVjdGlvbiIsImxvb3AiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIl0sInNvdXJjZVJvb3QiOiIifQ==