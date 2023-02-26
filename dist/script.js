/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("window.onload = function () {\n  setInterval(function () {\n    getClock();\n    getCalendar();\n    showGreeting();\n  }, 1000);\n  addEnterNameClickHandler();\n  addFocusClickHandler();\n};\nvar getClock = function getClock() {\n  var clock = document.querySelector(\".clock\");\n  var date = new Date();\n  var hours = String(date.getHours()).padStart(2, \"0\");\n  var minutes = String(date.getMinutes()).padStart(2, \"0\");\n  var seconds = String(date.getSeconds()).padStart(2, \"0\");\n  clock.innerText = \"\".concat(hours, \":\").concat(minutes, \":\").concat(seconds);\n};\nvar getCalendar = function getCalendar() {\n  var months = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"],\n    week = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\n  var calendar = document.querySelector(\".calendar\");\n  var today = new Date();\n  var year = String(today.getFullYear());\n  var month = today.getMonth();\n  var date = String(today.getDate());\n  var day = today.getDay();\n  calendar.innerText = \"\".concat(week[day], \", \").concat(months[month], \" \").concat(date, \", \").concat(year);\n};\nvar showGreeting = function showGreeting() {\n  var greeting = document.querySelector(\".greeting-content\");\n  var hour = Math.floor(new Date().getHours() / 6);\n  var part = '';\n  switch (hour) {\n    case 0:\n      part = \"night\";\n      break;\n    case 1:\n      part = \"morning\";\n      break;\n    case 2:\n      part = \"afternoon\";\n      break;\n    case 3:\n      part = \"evening\";\n      break;\n    default:\n      break;\n  }\n  greeting.innerText = \"Good \".concat(part, \", \");\n};\nvar addEnterNameClickHandler = function addEnterNameClickHandler() {\n  var form = document.forms.name;\n  var input = form.elements.user;\n  var defaultValue = \"[enter name]\";\n  input.addEventListener(\"blur\", function () {\n    resizeInput(input, defaultValue);\n    setLocalStorage('name', input.value);\n  });\n};\nvar addFocusClickHandler = function addFocusClickHandler() {\n  var form = document.forms.focus;\n  var input = form.elements.focusTodo;\n  var defaultValue = \"[write your focus here]\";\n  input.addEventListener('blur', function () {\n    resizeInput(input, defaultValue);\n    setLocalStorage('focus', input.value);\n  });\n};\nvar resizeInput = function resizeInput(input, defaultValue) {\n  if (input.value.length > 0) {\n    input.style.width = input.value.length + .7 + \"ch\";\n  } else {\n    input.style.width = defaultValue.length - 2.5 + \"ch\";\n  }\n};\n\n//# sourceURL=webpack://momentum/./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://momentum/./src/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/style.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;