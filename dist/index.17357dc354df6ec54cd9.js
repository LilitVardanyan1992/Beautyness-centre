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

/***/ "./src/js/main/readyItems/readyItems.js":
/*!**********************************************!*\
  !*** ./src/js/main/readyItems/readyItems.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderReadyItems)
/* harmony export */ });
/* harmony import */ var _img_item1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../img/item1.jpg */ "./src/img/item1.jpg");
/* harmony import */ var _img_item2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/item2.jpg */ "./src/img/item2.jpg");
/* harmony import */ var _img_item3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../img/item3.jpg */ "./src/img/item3.jpg");
/* harmony import */ var _img_item4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../img/item4.jpg */ "./src/img/item4.jpg");
/* harmony import */ var _img_item5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../img/item5.jpg */ "./src/img/item5.jpg");
/* harmony import */ var _img_item6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../img/item6.jpg */ "./src/img/item6.jpg");
/* harmony import */ var _products_categories_categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../products-categories/categories */ "./src/js/products-categories/categories.js");
/* harmony import */ var _readyItemsComponents_renderReadyItemsByURL__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./readyItemsComponents/renderReadyItemsByURL */ "./src/js/main/readyItems/readyItemsComponents/renderReadyItemsByURL.js");
/* harmony import */ var _readyItemsComponents_appendChildToTargetElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./readyItemsComponents/appendChildToTargetElement */ "./src/js/main/readyItems/readyItemsComponents/appendChildToTargetElement.js");









function renderReadyItems(url) {
  // Created navigation for READY ITEMS

  const navMenuReadyItems = document.createElement("div");
  navMenuReadyItems.classList.add("ready__items__navigation");
  navMenuReadyItems.innerHTML = `
        <span>Главная</span> > Каталог > Готовые наборы
    `;
  (0,_readyItemsComponents_appendChildToTargetElement__WEBPACK_IMPORTED_MODULE_8__["default"])(navMenuReadyItems, ".ready__items__wrapper");

  // Created title for READY ITEMS

  const titleReadyItems = document.createElement("h3");
  titleReadyItems.classList.add("ready__items__title");
  titleReadyItems.innerHTML = `
        Готовые наборы
    `;
  (0,_readyItemsComponents_appendChildToTargetElement__WEBPACK_IMPORTED_MODULE_8__["default"])(titleReadyItems, ".ready__items__wrapper");

  // Created categories, which we can click and filter by category 

  const categoryItems = document.createElement("div");
  categoryItems.classList.add("category__items");
  categoryItems.innerHTML = _products_categories_categories__WEBPACK_IMPORTED_MODULE_6__["default"].map(item => {
    return `<a class="category__item">${item}</a>`;
  }).join("");
  (0,_readyItemsComponents_appendChildToTargetElement__WEBPACK_IMPORTED_MODULE_8__["default"])(categoryItems, ".ready__items__wrapper");

  // READY ITEMS render function

  (0,_readyItemsComponents_renderReadyItemsByURL__WEBPACK_IMPORTED_MODULE_7__["default"])(url);
}

/***/ }),

/***/ "./src/js/main/readyItems/readyItemsComponents/appendChildToTargetElement.js":
/*!***********************************************************************************!*\
  !*** ./src/js/main/readyItems/readyItemsComponents/appendChildToTargetElement.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function appendChildToTargetElement(element, className) {
  // Find the element in your HTML where you want to append the container
  const targetElement = document.querySelector(className);
  // Append the container to the target element

  if (targetElement) {
    targetElement.appendChild(element);
  } else {
    // console.error('Target element not found.');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendChildToTargetElement);

/***/ }),

/***/ "./src/js/main/readyItems/readyItemsComponents/renderReadyItem.js":
/*!************************************************************************!*\
  !*** ./src/js/main/readyItems/readyItemsComponents/renderReadyItem.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function renderReadyItem(item) {
  const {
    id,
    img,
    price,
    description,
    title,
    categories
  } = item;
  const readyItem = document.createElement("div");
  readyItem.classList.add("ready__item");
  readyItem.id = id;
  readyItem.innerHTML = `
        <div class="ready__item-img">
            <img src=${img} alt=${title}>
        </div>
      
        <div class="ready__item-about">
            <h3 class="ready__item-title">${title}</h3>
            <p class="ready__item-descr">${description}</p>
            <div class="ready__item__price__and__basket">
                <div class="ready__item-price">${price} руб</div>
                <div class="ready__item-basket">
                    <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2911 5.37109H1V20.0002H14.2911V5.37109Z" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.12207 7.15493V3.40845C4.12207 2.07042 5.10329 1 6.26292 1H9.02818C10.1878 1 11.169 2.07042 11.169 3.40845V7.15493" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>В корзину</span>
                </div>
            </div>
        </div>
    `;
  return readyItem;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderReadyItem);

/***/ }),

/***/ "./src/js/main/readyItems/readyItemsComponents/renderReadyItemsByURL.js":
/*!******************************************************************************!*\
  !*** ./src/js/main/readyItems/readyItemsComponents/renderReadyItemsByURL.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderReadyItemsByURL)
/* harmony export */ });
/* harmony import */ var _renderReadyItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderReadyItem */ "./src/js/main/readyItems/readyItemsComponents/renderReadyItem.js");
/* harmony import */ var _appendChildToTargetElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendChildToTargetElement */ "./src/js/main/readyItems/readyItemsComponents/appendChildToTargetElement.js");


async function renderReadyItemsByURL(url) {
  // ... (previous code)

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const container = document.createElement("div");
    container.classList.add("ready__items", "container");

    // Create and append individual item elements to the container

    let countItems = 6;
    let itemsRendered = 0;
    for (let i = 0; i < countItems; i++) {
      if (i < data.length) {
        const itemElement = (0,_renderReadyItem__WEBPACK_IMPORTED_MODULE_0__["default"])(data[i]);
        container.appendChild(itemElement);
        itemsRendered++;
      }
    }

    // Append the container to the target element
    (0,_appendChildToTargetElement__WEBPACK_IMPORTED_MODULE_1__["default"])(container, ".ready__items__wrapper");

    // Created title for READY ITEMS

    const showMore = document.createElement("a");
    showMore.classList.add("ready__items__show__more");
    showMore.innerHTML = `
        Показать ещё
        `;
    (0,_appendChildToTargetElement__WEBPACK_IMPORTED_MODULE_1__["default"])(showMore, ".ready__items__wrapper");
    showMore.addEventListener("click", () => {
      const newCountItems = itemsRendered + 3;
      for (let i = itemsRendered; i < newCountItems; i++) {
        if (i < data.length) {
          const itemElement = (0,_renderReadyItem__WEBPACK_IMPORTED_MODULE_0__["default"])(data[i]);
          container.appendChild(itemElement);
          itemsRendered++;
        }
      }
      countItems = newCountItems;
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

/***/ }),

/***/ "./src/js/products-categories/categories.js":
/*!**************************************************!*\
  !*** ./src/js/products-categories/categories.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const categories = ["Свадьба", "Девичник", "День рождения ", "8 марта", "23 февраля", "Новый год", "День учителя", "День тренера", "1 сентября", "Пасха", "Без печати"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categories);

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

/***/ "./src/img/item1.jpg":
/*!***************************!*\
  !*** ./src/img/item1.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/item1.jpg";

/***/ }),

/***/ "./src/img/item2.jpg":
/*!***************************!*\
  !*** ./src/img/item2.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/item2.jpg";

/***/ }),

/***/ "./src/img/item3.jpg":
/*!***************************!*\
  !*** ./src/img/item3.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/item3.jpg";

/***/ }),

/***/ "./src/img/item4.jpg":
/*!***************************!*\
  !*** ./src/img/item4.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/item4.jpg";

/***/ }),

/***/ "./src/img/item5.jpg":
/*!***************************!*\
  !*** ./src/img/item5.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/item5.jpg";

/***/ }),

/***/ "./src/img/item6.jpg":
/*!***************************!*\
  !*** ./src/img/item6.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/item6.jpg";

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
/* harmony import */ var _js_main_readyItems_readyItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/main/readyItems/readyItems */ "./src/js/main/readyItems/readyItems.js");
/* harmony import */ var _img_main_info_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/main-info.png */ "./src/img/main-info.png");
/* harmony import */ var _img_gotovie_nobori_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/gotovie-nobori.jpg */ "./src/img/gotovie-nobori.jpg");
/* harmony import */ var _img_corporative_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/corporative.jpg */ "./src/img/corporative.jpg");
/* harmony import */ var _img_nabor_individual_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/nabor-individual.jpg */ "./src/img/nabor-individual.jpg");
/* harmony import */ var _img_optovie_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/optovie.jpg */ "./src/img/optovie.jpg");
/* harmony import */ var _img_svadebni_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/svadebni.jpg */ "./src/img/svadebni.jpg");
/* harmony import */ var _img_sobrat_svoy_nabor_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/sobrat-svoy-nabor.jpg */ "./src/img/sobrat-svoy-nabor.jpg");











(0,_js_main_readyItems_readyItems__WEBPACK_IMPORTED_MODULE_3__["default"])("http://localhost:8888/readyItems");

// Start-Logic for appearing header section with nav section in all html pages

function addHeaderAndNav(page) {
  fetch('navMenu.html').then(response => response.text()).then(html => {
    document.getElementById('header').innerHTML = html;
    (0,_js_header_swiper__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_js_header_burgerMenu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }).catch(error => {
    console.error('Error loading header:', error);
  });
}
const pages = ["index", "readyItems"];
pages.forEach(page => {
  addHeaderAndNav(page);
});
try {
  document.querySelector(".ready__items").addEventListener("click", () => {
    window.open("readyItems.html", "_blank");
  });
} catch {}

// End-Logic for appearing header section with nav section in all pages
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQztFQUM1QyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsTUFBTSxDQUFFOztBQUVWLHVFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJpcC8uL3NyYy9qcy9oZWFkZXIvYnVyZ2VyTWVudS5qcyIsIndlYnBhY2s6Ly90cmlwLy4vc3JjL2pzL2hlYWRlci9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vdHJpcC8uL3NyYy9qcy9tYWluL3JlYWR5SXRlbXMvcmVhZHlJdGVtcy5qcyIsIndlYnBhY2s6Ly90cmlwLy4vc3JjL2pzL21haW4vcmVhZHlJdGVtcy9yZWFkeUl0ZW1zQ29tcG9uZW50cy9hcHBlbmRDaGlsZFRvVGFyZ2V0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly90cmlwLy4vc3JjL2pzL21haW4vcmVhZHlJdGVtcy9yZWFkeUl0ZW1zQ29tcG9uZW50cy9yZW5kZXJSZWFkeUl0ZW0uanMiLCJ3ZWJwYWNrOi8vdHJpcC8uL3NyYy9qcy9tYWluL3JlYWR5SXRlbXMvcmVhZHlJdGVtc0NvbXBvbmVudHMvcmVuZGVyUmVhZHlJdGVtc0J5VVJMLmpzIiwid2VicGFjazovL3RyaXAvLi9zcmMvanMvcHJvZHVjdHMtY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmpzIiwid2VicGFjazovL3RyaXAvLi9zcmMvc2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly90cmlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RyaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RyaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cmlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHJpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90cmlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGJ1cmdlck1lbnUoKSB7XHJcbiAgICBjb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZfX21vYmlsZV9fYnVyZ2VyX19tZW51XCIpO1xyXG4gICAgY29uc3QgZGF0YXNDbGFzc2VzID0gW1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2X190b3BcIiksXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZfX2JvdHRvbVwiKVxyXG4gICAgXTtcclxuXHJcbiAgICBidXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoYnVyZ2VyTWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgYnVyZ2VyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBidXJnZXJNZW51LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDIwIDE0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgIDxsaW5lIHkxPVwiMS4yNVwiIHgyPVwiMjBcIiB5Mj1cIjEuMjVcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZS13aWR0aD1cIjEuNVwiLz5cclxuICAgICAgICAgICAgPGxpbmUgeTE9XCI3LjI1XCIgeDI9XCIyMFwiIHkyPVwiNy4yNVwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIvPlxyXG4gICAgICAgICAgICA8bGluZSB5MT1cIjEzLjI1XCIgeDI9XCIxMlwiIHkyPVwiMTMuMjVcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZS13aWR0aD1cIjEuNVwiLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgIGRhdGFzQ2xhc3Nlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZWA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVyZ2VyTWVudS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGJ1cmdlck1lbnUuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiAgdmlld0JveD1cIjAgMCA1MCA1MFwiIHdpZHRoPVwiMjVweFwiIGhlaWdodD1cIjI1cHhcIj48cGF0aCBkPVwiTSA5LjE1NjI1IDYuMzEyNSBMIDYuMzEyNSA5LjE1NjI1IEwgMjIuMTU2MjUgMjUgTCA2LjIxODc1IDQwLjk2ODc1IEwgOS4wMzEyNSA0My43ODEyNSBMIDI1IDI3Ljg0Mzc1IEwgNDAuOTM3NSA0My43ODEyNSBMIDQzLjc4MTI1IDQwLjkzNzUgTCAyNy44NDM3NSAyNSBMIDQzLjY4NzUgOS4xNTYyNSBMIDQwLjg0Mzc1IDYuMzEyNSBMIDI1IDIyLjE1NjI1IFpcIi8+PC9zdmc+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBkYXRhc0NsYXNzZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1cmdlck1lbnU7XHJcbiIsImZ1bmN0aW9uIHN3aXBlcmZ1bmMoKSB7XHJcbiAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlcicsIHtcclxuICAgIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcclxuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuXHJcbiAgICAvLyBOYXZpZ2F0aW9uIGFycm93c1xyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IHN3aXBlcmZ1bmM7XHJcblxyXG4iLCJpbXBvcnQgXCIuLi8uLi8uLi9pbWcvaXRlbTEuanBnXCI7XHJcbmltcG9ydCBcIi4uLy4uLy4uL2ltZy9pdGVtMi5qcGdcIjtcclxuaW1wb3J0IFwiLi4vLi4vLi4vaW1nL2l0ZW0zLmpwZ1wiO1xyXG5pbXBvcnQgXCIuLi8uLi8uLi9pbWcvaXRlbTQuanBnXCI7XHJcbmltcG9ydCBcIi4uLy4uLy4uL2ltZy9pdGVtNS5qcGdcIjtcclxuaW1wb3J0IFwiLi4vLi4vLi4vaW1nL2l0ZW02LmpwZ1wiO1xyXG5pbXBvcnQgY2F0ZWdvcmllcyBmcm9tIFwiLi4vLi4vcHJvZHVjdHMtY2F0ZWdvcmllcy9jYXRlZ29yaWVzXCI7XHJcbmltcG9ydCByZW5kZXJSZWFkeUl0ZW1zQnlVUkwgZnJvbSBcIi4vcmVhZHlJdGVtc0NvbXBvbmVudHMvcmVuZGVyUmVhZHlJdGVtc0J5VVJMXCI7XHJcbmltcG9ydCBhcHBlbmRDaGlsZFRvVGFyZ2V0RWxlbWVudCBmcm9tIFwiLi9yZWFkeUl0ZW1zQ29tcG9uZW50cy9hcHBlbmRDaGlsZFRvVGFyZ2V0RWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyUmVhZHlJdGVtcyh1cmwpIHtcclxuXHJcbiAgICAvLyBDcmVhdGVkIG5hdmlnYXRpb24gZm9yIFJFQURZIElURU1TXHJcblxyXG4gICAgY29uc3QgbmF2TWVudVJlYWR5SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2TWVudVJlYWR5SXRlbXMuY2xhc3NMaXN0LmFkZChcInJlYWR5X19pdGVtc19fbmF2aWdhdGlvblwiKTtcclxuICAgIG5hdk1lbnVSZWFkeUl0ZW1zLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8c3Bhbj7Qk9C70LDQstC90LDRjzwvc3Bhbj4gPiDQmtCw0YLQsNC70L7QsyA+INCT0L7RgtC+0LLRi9C1INC90LDQsdC+0YDRi1xyXG4gICAgYDtcclxuXHJcbiAgICBhcHBlbmRDaGlsZFRvVGFyZ2V0RWxlbWVudChuYXZNZW51UmVhZHlJdGVtcywgXCIucmVhZHlfX2l0ZW1zX193cmFwcGVyXCIpO1xyXG4gICAgXHJcbiAgICAvLyBDcmVhdGVkIHRpdGxlIGZvciBSRUFEWSBJVEVNU1xyXG5cclxuICAgIGNvbnN0IHRpdGxlUmVhZHlJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIHRpdGxlUmVhZHlJdGVtcy5jbGFzc0xpc3QuYWRkKFwicmVhZHlfX2l0ZW1zX190aXRsZVwiKTtcclxuICAgIHRpdGxlUmVhZHlJdGVtcy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAg0JPQvtGC0L7QstGL0LUg0L3QsNCx0L7RgNGLXHJcbiAgICBgO1xyXG5cclxuICAgIGFwcGVuZENoaWxkVG9UYXJnZXRFbGVtZW50KHRpdGxlUmVhZHlJdGVtcywgXCIucmVhZHlfX2l0ZW1zX193cmFwcGVyXCIpO1xyXG5cclxuICAgIC8vIENyZWF0ZWQgY2F0ZWdvcmllcywgd2hpY2ggd2UgY2FuIGNsaWNrIGFuZCBmaWx0ZXIgYnkgY2F0ZWdvcnkgXHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcnlJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYXRlZ29yeUl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeV9faXRlbXNcIik7XHJcblxyXG4gICAgY2F0ZWdvcnlJdGVtcy5pbm5lckhUTUwgPSBjYXRlZ29yaWVzLm1hcChpdGVtID0+IHtcclxuICAgICAgICByZXR1cm4gYDxhIGNsYXNzPVwiY2F0ZWdvcnlfX2l0ZW1cIj4ke2l0ZW19PC9hPmBcclxuICAgIH0pLmpvaW4oXCJcIik7XHJcbiAgXHJcbiAgICBhcHBlbmRDaGlsZFRvVGFyZ2V0RWxlbWVudChjYXRlZ29yeUl0ZW1zLCBcIi5yZWFkeV9faXRlbXNfX3dyYXBwZXJcIik7XHJcblxyXG4gICAgLy8gUkVBRFkgSVRFTVMgcmVuZGVyIGZ1bmN0aW9uXHJcblxyXG4gICAgcmVuZGVyUmVhZHlJdGVtc0J5VVJMKHVybCk7XHJcblxyXG59XHJcbiIsImZ1bmN0aW9uIGFwcGVuZENoaWxkVG9UYXJnZXRFbGVtZW50KGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gICAgLy8gRmluZCB0aGUgZWxlbWVudCBpbiB5b3VyIEhUTUwgd2hlcmUgeW91IHdhbnQgdG8gYXBwZW5kIHRoZSBjb250YWluZXJcclxuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzTmFtZSk7XHJcbiAgICAgLy8gQXBwZW5kIHRoZSBjb250YWluZXIgdG8gdGhlIHRhcmdldCBlbGVtZW50XHJcbiAgICBcclxuICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcignVGFyZ2V0IGVsZW1lbnQgbm90IGZvdW5kLicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBlbmRDaGlsZFRvVGFyZ2V0RWxlbWVudDsiLCJmdW5jdGlvbiByZW5kZXJSZWFkeUl0ZW0oaXRlbSkge1xyXG4gICAgY29uc3QgeyBpZCwgaW1nLCBwcmljZSwgZGVzY3JpcHRpb24sIHRpdGxlLCBjYXRlZ29yaWVzIH0gPSBpdGVtO1xyXG4gICAgY29uc3QgcmVhZHlJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJlYWR5SXRlbS5jbGFzc0xpc3QuYWRkKFwicmVhZHlfX2l0ZW1cIilcclxuICAgIHJlYWR5SXRlbS5pZCA9IGlkO1xyXG4gICAgcmVhZHlJdGVtLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVhZHlfX2l0ZW0taW1nXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPSR7aW1nfSBhbHQ9JHt0aXRsZX0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZWFkeV9faXRlbS1hYm91dFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJyZWFkeV9faXRlbS10aXRsZVwiPiR7dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJyZWFkeV9faXRlbS1kZXNjclwiPiR7ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVhZHlfX2l0ZW1fX3ByaWNlX19hbmRfX2Jhc2tldFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlYWR5X19pdGVtLXByaWNlXCI+JHtwcmljZX0g0YDRg9CxPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVhZHlfX2l0ZW0tYmFza2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMjFcIiB2aWV3Qm94PVwiMCAwIDE1IDIxXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQuMjkxMSA1LjM3MTA5SDFWMjAuMDAwMkgxNC4yOTExVjUuMzcxMDlaXCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2Utd2lkdGg9XCIxLjRcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQuMTIyMDcgNy4xNTQ5M1YzLjQwODQ1QzQuMTIyMDcgMi4wNzA0MiA1LjEwMzI5IDEgNi4yNjI5MiAxSDkuMDI4MThDMTAuMTg3OCAxIDExLjE2OSAyLjA3MDQyIDExLjE2OSAzLjQwODQ1VjcuMTU0OTNcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZS13aWR0aD1cIjEuNFwiIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+0JIg0LrQvtGA0LfQuNC90YM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgcmV0dXJuIHJlYWR5SXRlbTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUmVhZHlJdGVtOyIsImltcG9ydCByZW5kZXJSZWFkeUl0ZW0gZnJvbSBcIi4vcmVuZGVyUmVhZHlJdGVtXCI7XHJcbmltcG9ydCBhcHBlbmRDaGlsZFRvVGFyZ2V0RWxlbWVudCBmcm9tIFwiLi9hcHBlbmRDaGlsZFRvVGFyZ2V0RWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyUmVhZHlJdGVtc0J5VVJMKHVybCkge1xyXG4gICAgLy8gLi4uIChwcmV2aW91cyBjb2RlKVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicmVhZHlfX2l0ZW1zXCIsIFwiY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgYW5kIGFwcGVuZCBpbmRpdmlkdWFsIGl0ZW0gZWxlbWVudHMgdG8gdGhlIGNvbnRhaW5lclxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjb3VudEl0ZW1zID0gNjtcclxuICAgICAgICBsZXQgaXRlbXNSZW5kZXJlZCA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRJdGVtczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpIDwgZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1FbGVtZW50ID0gcmVuZGVyUmVhZHlJdGVtKGRhdGFbaV0pO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1FbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGl0ZW1zUmVuZGVyZWQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQXBwZW5kIHRoZSBjb250YWluZXIgdG8gdGhlIHRhcmdldCBlbGVtZW50XHJcbiAgICAgICAgYXBwZW5kQ2hpbGRUb1RhcmdldEVsZW1lbnQoY29udGFpbmVyLCBcIi5yZWFkeV9faXRlbXNfX3dyYXBwZXJcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIENyZWF0ZWQgdGl0bGUgZm9yIFJFQURZIElURU1TXHJcblxyXG4gICAgICAgIGNvbnN0IHNob3dNb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgc2hvd01vcmUuY2xhc3NMaXN0LmFkZChcInJlYWR5X19pdGVtc19fc2hvd19fbW9yZVwiKTtcclxuICAgICAgICBzaG93TW9yZS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAg0J/QvtC60LDQt9Cw0YLRjCDQtdGJ0ZFcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBhcHBlbmRDaGlsZFRvVGFyZ2V0RWxlbWVudChzaG93TW9yZSwgXCIucmVhZHlfX2l0ZW1zX193cmFwcGVyXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNob3dNb3JlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvdW50SXRlbXMgPSBpdGVtc1JlbmRlcmVkICsgMztcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGl0ZW1zUmVuZGVyZWQ7IGkgPCBuZXdDb3VudEl0ZW1zOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtRWxlbWVudCA9IHJlbmRlclJlYWR5SXRlbShkYXRhW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zUmVuZGVyZWQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb3VudEl0ZW1zID0gbmV3Q291bnRJdGVtcztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCBjYXRlZ29yaWVzID0gW1xyXG4gICAgXCLQodCy0LDQtNGM0LHQsFwiLFxyXG4gICAgXCLQlNC10LLQuNGH0L3QuNC6XCIsXHJcbiAgICBcItCU0LXQvdGMINGA0L7QttC00LXQvdC40Y8gXCIsXHJcbiAgICBcIjgg0LzQsNGA0YLQsFwiLFxyXG4gICAgXCIyMyDRhNC10LLRgNCw0LvRj1wiLFxyXG4gICAgXCLQndC+0LLRi9C5INCz0L7QtFwiLFxyXG4gICAgXCLQlNC10L3RjCDRg9GH0LjRgtC10LvRj1wiLFxyXG4gICAgXCLQlNC10L3RjCDRgtGA0LXQvdC10YDQsFwiLCBcclxuICAgIFwiMSDRgdC10L3RgtGP0LHRgNGPXCIsXHJcbiAgICBcItCf0LDRgdGF0LBcIixcclxuICAgIFwi0JHQtdC3INC/0LXRh9Cw0YLQuFwiXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXRlZ29yaWVzOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiaW1wb3J0IFwiLi9zY3NzL3N0eWxlcy5zY3NzXCI7XHJcbmltcG9ydCBidXJnZXJNZW51IGZyb20gXCIuL2pzL2hlYWRlci9idXJnZXJNZW51XCI7XHJcbmltcG9ydCBzd2lwZXJmdW5jIGZyb20gXCIuL2pzL2hlYWRlci9zd2lwZXJcIjtcclxuaW1wb3J0IHJlbmRlclJlYWR5SXRlbXMgZnJvbSBcIi4vanMvbWFpbi9yZWFkeUl0ZW1zL3JlYWR5SXRlbXNcIjtcclxuaW1wb3J0IFwiLi9pbWcvbWFpbi1pbmZvLnBuZ1wiO1xyXG5pbXBvcnQgXCIuL2ltZy9nb3RvdmllLW5vYm9yaS5qcGdcIjtcclxuaW1wb3J0IFwiLi9pbWcvY29ycG9yYXRpdmUuanBnXCI7XHJcbmltcG9ydCBcIi4vaW1nL25hYm9yLWluZGl2aWR1YWwuanBnXCI7XHJcbmltcG9ydCBcIi4vaW1nL29wdG92aWUuanBnXCI7XHJcbmltcG9ydCBcIi4vaW1nL3N2YWRlYm5pLmpwZ1wiO1xyXG5pbXBvcnQgXCIuL2ltZy9zb2JyYXQtc3ZveS1uYWJvci5qcGdcIjtcclxuXHJcblxyXG5yZW5kZXJSZWFkeUl0ZW1zKFwiaHR0cDovL2xvY2FsaG9zdDo4ODg4L3JlYWR5SXRlbXNcIik7XHJcblxyXG5cclxuLy8gU3RhcnQtTG9naWMgZm9yIGFwcGVhcmluZyBoZWFkZXIgc2VjdGlvbiB3aXRoIG5hdiBzZWN0aW9uIGluIGFsbCBodG1sIHBhZ2VzXHJcblxyXG5mdW5jdGlvbiBhZGRIZWFkZXJBbmROYXYocGFnZSkge1xyXG4gICAgZmV0Y2goJ25hdk1lbnUuaHRtbCcpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG4gICAgICAgIC50aGVuKGh0bWwgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJykuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICAgICAgc3dpcGVyZnVuYygpO1xyXG4gICAgICAgICAgICBidXJnZXJNZW51KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIGhlYWRlcjonLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHBhZ2VzID0gW1wiaW5kZXhcIiwgXCJyZWFkeUl0ZW1zXCIsXTtcclxuXHJcbnBhZ2VzLmZvckVhY2gocGFnZSA9PiB7XHJcbiAgICBhZGRIZWFkZXJBbmROYXYocGFnZSk7XHJcbn0pXHJcblxyXG50cnkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWFkeV9faXRlbXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICB3aW5kb3cub3BlbihcInJlYWR5SXRlbXMuaHRtbFwiLCBcIl9ibGFua1wiKTtcclxuICAgIH0pXHJcbn0gY2F0Y2ggeyB9XHJcblxyXG4vLyBFbmQtTG9naWMgZm9yIGFwcGVhcmluZyBoZWFkZXIgc2VjdGlvbiB3aXRoIG5hdiBzZWN0aW9uIGluIGFsbCBwYWdlcyJdLCJuYW1lcyI6WyJidXJnZXJNZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGF0YXNDbGFzc2VzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwiaXRlbSIsInN0eWxlIiwiY3NzVGV4dCIsImFkZCIsImRpc3BsYXkiLCJzd2lwZXJmdW5jIiwic3dpcGVyIiwiU3dpcGVyIiwiZGlyZWN0aW9uIiwibG9vcCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJjYXRlZ29yaWVzIiwicmVuZGVyUmVhZHlJdGVtc0J5VVJMIiwiYXBwZW5kQ2hpbGRUb1RhcmdldEVsZW1lbnQiLCJyZW5kZXJSZWFkeUl0ZW1zIiwidXJsIiwibmF2TWVudVJlYWR5SXRlbXMiLCJjcmVhdGVFbGVtZW50IiwidGl0bGVSZWFkeUl0ZW1zIiwiY2F0ZWdvcnlJdGVtcyIsIm1hcCIsImpvaW4iLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwidGFyZ2V0RWxlbWVudCIsImFwcGVuZENoaWxkIiwicmVuZGVyUmVhZHlJdGVtIiwiaWQiLCJpbWciLCJwcmljZSIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJyZWFkeUl0ZW0iLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiY29udGFpbmVyIiwiY291bnRJdGVtcyIsIml0ZW1zUmVuZGVyZWQiLCJpIiwibGVuZ3RoIiwiaXRlbUVsZW1lbnQiLCJzaG93TW9yZSIsIm5ld0NvdW50SXRlbXMiLCJlcnJvciIsImNvbnNvbGUiLCJhZGRIZWFkZXJBbmROYXYiLCJwYWdlIiwidGhlbiIsInRleHQiLCJodG1sIiwiZ2V0RWxlbWVudEJ5SWQiLCJjYXRjaCIsInBhZ2VzIiwid2luZG93Iiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=