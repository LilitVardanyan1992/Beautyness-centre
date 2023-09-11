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



(0,_js_header_burgerMenu__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lMGRkNjY0MDAxZGYyODMxMzcyYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFVBQVVBLENBQUEsRUFBRztFQUNsQixNQUFNQSxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLDRCQUE0QixDQUFDO0VBRXZFLE1BQU1DLFlBQVksR0FBRyxDQUNqQkYsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQ25DRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FDekM7RUFFREYsVUFBVSxDQUFDSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLEtBQUssSUFBSztJQUM1QyxJQUFJTCxVQUFVLENBQUNNLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO01BQ3pDUCxVQUFVLENBQUNNLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUNyQ1IsVUFBVSxDQUFDUyxTQUFTLEdBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7TUFFR04sWUFBWSxDQUFDTyxPQUFPLENBQUNDLElBQUksSUFBSTtRQUN6QkEsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO01BQy9CLENBQUMsQ0FBQztNQUNGO0lBQ0o7SUFDQWIsVUFBVSxDQUFDTSxTQUFTLENBQUNRLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDbENkLFVBQVUsQ0FBQ1MsU0FBUyxHQUFJO0FBQ2hDO0FBQ0EsU0FBUztJQUNETixZQUFZLENBQUNPLE9BQU8sQ0FBQ0MsSUFBSSxJQUFJO01BQ3pCQSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07SUFDL0IsQ0FBQyxDQUFDO0VBRU4sQ0FBQyxDQUFDO0FBQ047QUFFQSxpRUFBZWIsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUNuQ3pCLE1BQU1lLE1BQU0sR0FBRyxJQUFJQyxNQUFNLENBQUMsU0FBUyxFQUFFO0VBQ2pDO0VBQ0FDLFNBQVMsRUFBRSxZQUFZO0VBQ3ZCQyxJQUFJLEVBQUUsSUFBSTtFQUVWO0VBQ0FDLFVBQVUsRUFBRTtJQUNWQyxNQUFNLEVBQUUscUJBQXFCO0lBQzdCQyxNQUFNLEVBQUU7RUFDVjtBQUNGLENBQUMsQ0FBQztBQUVGLGlFQUFlTixNQUFNOzs7Ozs7Ozs7OztBQ1p2Qjs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ040QjtBQUNzQjtBQUNGO0FBRWhEZixpRUFBVSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RyaXAvLi9zcmMvanMvaGVhZGVyL2J1cmdlck1lbnUuanMiLCJ3ZWJwYWNrOi8vdHJpcC8uL3NyYy9qcy9oZWFkZXIvbWluaUhlYWRlclNsaWRlci5qcyIsIndlYnBhY2s6Ly90cmlwLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3M/MDE2OSIsIndlYnBhY2s6Ly90cmlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RyaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RyaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cmlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHJpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBidXJnZXJNZW51KCkge1xyXG4gICAgY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2X19tb2JpbGVfX2J1cmdlcl9fbWVudVwiKTtcclxuXHJcbiAgICBjb25zdCBkYXRhc0NsYXNzZXMgPSBbXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZfX3RvcFwiKSxcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdl9fYm90dG9tXCIpXHJcbiAgICBdO1xyXG5cclxuICAgIGJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChidXJnZXJNZW51LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICBidXJnZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGJ1cmdlck1lbnUuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMjAgMTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgPGxpbmUgeTE9XCIxLjI1XCIgeDI9XCIyMFwiIHkyPVwiMS4yNVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIvPlxyXG4gICAgICAgICAgICA8bGluZSB5MT1cIjcuMjVcIiB4Mj1cIjIwXCIgeTI9XCI3LjI1XCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2Utd2lkdGg9XCIxLjVcIi8+XHJcbiAgICAgICAgICAgIDxsaW5lIHkxPVwiMTMuMjVcIiB4Mj1cIjEyXCIgeTI9XCIxMy4yNVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICAgICAgZGF0YXNDbGFzc2VzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXJnZXJNZW51LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgYnVyZ2VyTWVudS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiICB2aWV3Qm94PVwiMCAwIDUwIDUwXCIgd2lkdGg9XCIyNXB4XCIgaGVpZ2h0PVwiMjVweFwiPjxwYXRoIGQ9XCJNIDkuMTU2MjUgNi4zMTI1IEwgNi4zMTI1IDkuMTU2MjUgTCAyMi4xNTYyNSAyNSBMIDYuMjE4NzUgNDAuOTY4NzUgTCA5LjAzMTI1IDQzLjc4MTI1IEwgMjUgMjcuODQzNzUgTCA0MC45Mzc1IDQzLjc4MTI1IEwgNDMuNzgxMjUgNDAuOTM3NSBMIDI3Ljg0Mzc1IDI1IEwgNDMuNjg3NSA5LjE1NjI1IEwgNDAuODQzNzUgNi4zMTI1IEwgMjUgMjIuMTU2MjUgWlwiLz48L3N2Zz5cclxuICAgICAgICBgO1xyXG4gICAgICAgIGRhdGFzQ2xhc3Nlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1cmdlck1lbnU7XHJcbiIsImNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XHJcbiAgICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcbiAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcclxuICAgIGxvb3A6IHRydWUsXHJcblxyXG4gICAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgc3dpcGVyOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zY3NzL3N0eWxlcy5zY3NzXCI7XHJcbmltcG9ydCBzd2lwZXIgZnJvbSBcIi4vanMvaGVhZGVyL21pbmlIZWFkZXJTbGlkZXJcIjtcclxuaW1wb3J0IGJ1cmdlck1lbnUgZnJvbSBcIi4vanMvaGVhZGVyL2J1cmdlck1lbnVcIjtcclxuXHJcbmJ1cmdlck1lbnUoKSJdLCJuYW1lcyI6WyJidXJnZXJNZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGF0YXNDbGFzc2VzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwiaXRlbSIsInN0eWxlIiwiZGlzcGxheSIsImFkZCIsInN3aXBlciIsIlN3aXBlciIsImRpcmVjdGlvbiIsImxvb3AiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIl0sInNvdXJjZVJvb3QiOiIifQ==