/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validations */ \"./modules/validations.js\");\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('01 march 2022')\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_validations__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst calculator = () => {\n    const calcItems = document.querySelectorAll(\"input[type=text].calc-item\");\n  };\n  \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst menu = () => {\n    const menuBtn = document.querySelector('.menu')\n    const menu = document.querySelector('menu')\n    const closeBtn = menu.querySelector('.close-btn')\n    const menuItems = menu.querySelectorAll('ul>li>a')\n\n    const handleMenu = () => {\n        menu.classList.toggle('active-menu')\n    }\n\n    menuBtn.addEventListener('click', handleMenu)\n    closeBtn.addEventListener('click', handleMenu)\n    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst modal = () => {\n    const modal = document.querySelector('.popup')\n    const content = modal.querySelector('.popup-content')\n    const closeBtn = modal.querySelector('.popup-close')\n    const buttons = document.querySelectorAll('.popup-btn')\n    const screenWidth = window.screen.width\n\n    buttons.forEach(btn => {\n        btn.addEventListener('click', () => {\n            let count = 0;\n            let idInterval;\n\n            content.style.top = '0%'\n            const anim = () => {\n\n                if(screenWidth < 768) {\n                    modal.style.display = 'block'\n                    content.style.top = '30%'\n                } else {\n                    count++\n                    idInterval = requestAnimationFrame(anim)\n\n                    if(count <= 85) {\n                        modal.style.display = 'block'\n                        content.style.top = count*0.2 + '%'\n                    } else {\n                        cancelAnimationFrame(idInterval)\n                    }\n                }\n            }\n\n            anim()\n        })\n    })\n\n\n    closeBtn.addEventListener('click', () => {\n        modal.style.display = 'none'\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst timer = (deadline) => {\n    const timerHours = document.getElementById('timer-hours');\n    const timerMinutes = document.getElementById('timer-minutes');\n    const timerSeconds = document.getElementById('timer-seconds');\n\n    const getTimeRemaining = () => {\n        let dateStop = new Date(deadline).getTime();\n        let dateNow = new Date().getTime();\n        let timeRemaining = (dateStop - dateNow) / 1000;\n        let hours = Math.floor(timeRemaining / 60 / 60);\n        let minutes = Math.floor((timeRemaining / 60) % 60);\n        let seconds = Math.floor(timeRemaining % 60);\n\n        return { timeRemaining, hours, minutes, seconds }\n    }\n\n    const updateClock = () => {\n        let getTime = getTimeRemaining();\n\n        if(getTime.timeRemaining <= 0) {\n            timerHours.textContent = '00';\n            timerMinutes.textContent = '00';\n            timerSeconds.textContent = '00';\n        } else {\n            timerHours.textContent = addZerro(getTime.hours);\n            timerMinutes.textContent = addZerro(getTime.minutes);\n            timerSeconds.textContent = addZerro(getTime.seconds);\n        }\n\n        setInterval(function() {\n            if(getTime.timeRemaining > 0) {\n                updateClock();\n            }\n        }, 1000);\n\n    }\n\n    const addZerro = (num) => (num < 10) ? '0' + num : num;\n    updateClock();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validations.js":
/*!********************************!*\
  !*** ./modules/validations.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst validation = () => {\n  const inputUserName = document.querySelectorAll(\"input[type=text]\");\n  const inputMessage = document.querySelector(\".mess\");\n  const inputEmail = document.querySelectorAll(\"input[type=email\");\n  const inputTel = document.querySelectorAll(\"input[type=tel]\");\n\n  inputUserName.forEach((item) => {\n    if (item.classList.contains(\"calc-item\")) {\n      item.addEventListener(\"input\", (e) => {\n        e.target.value = e.target.value.replace(/\\D+/gi, \"\");\n      });\n    } else {\n      item.addEventListener(\"input\", (e) => {\n        e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\\-\\s]+/i, \"\");\n      });\n    }\n  });\n\n  inputMessage.addEventListener(\"input\", (e) => {\n    e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\\-\\s]+/i, \"\");\n  });\n\n  inputEmail.forEach((item) => {\n    item.addEventListener(\"input\", (e) => {\n      e.target.value = e.target.value.replace(/[^\\w@\\-.!~*']+/gi, \"\");\n    });\n  });\n\n  inputTel.forEach((item) => {\n    item.addEventListener(\"input\", (e) => {\n      e.target.value = e.target.value.replace(/[^\\d+()-]+/gi, \"\");\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack:///./modules/validations.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;