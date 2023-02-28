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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Calendar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Calendar.js */ \"./src/js/Calendar.js\");\n/* harmony import */ var _js_Clock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Clock.js */ \"./src/js/Clock.js\");\n/* harmony import */ var _js_Greeting_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Greeting.js */ \"./src/js/Greeting.js\");\n\n\n\nwindow.onload = function () {\n  var calendar = new _js_Calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  calendar.build();\n  var clock = new _js_Clock_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  clock.build();\n  var greeting = new _js_Greeting_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  greeting.build();\n  addEnterNameClickHandler();\n  addFocusClickHandler();\n};\nvar addEnterNameClickHandler = function addEnterNameClickHandler() {\n  var form = document.forms.name;\n  var input = form.elements.user;\n  var defaultValue = \"[enter name]\";\n  input.addEventListener(\"blur\", function () {\n    resizeInput(input, defaultValue);\n    setLocalStorage('name', input.value);\n  });\n};\nvar addFocusClickHandler = function addFocusClickHandler() {\n  var form = document.forms.focus;\n  var input = form.elements.focusTodo;\n  var defaultValue = \"[write your focus here]\";\n  input.addEventListener('blur', function () {\n    resizeInput(input, defaultValue);\n    setLocalStorage('focus', input.value);\n  });\n};\nvar resizeInput = function resizeInput(input, defaultValue) {\n  if (input.value.length > 0) {\n    input.style.width = input.value.length + .7 + \"ch\";\n  } else {\n    input.style.width = defaultValue.length - 2.5 + \"ch\";\n  }\n};\n\n//# sourceURL=webpack://momentum/./src/index.js?");

/***/ }),

/***/ "./src/js/Calendar.js":
/*!****************************!*\
  !*** ./src/js/Calendar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Calendar)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Calendar = /*#__PURE__*/function () {\n  function Calendar() {\n    _classCallCheck(this, Calendar);\n  }\n  _createClass(Calendar, [{\n    key: \"render\",\n    value: function render() {\n      var months = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"],\n        week = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\n      var calendar = document.querySelector(\".calendar span\");\n      var today = new Date();\n      var year = String(today.getFullYear());\n      var month = today.getMonth();\n      var date = String(today.getDate());\n      var day = today.getDay();\n      calendar.innerText = \"\".concat(week[day], \", \").concat(months[month], \" \").concat(date, \", \").concat(year);\n    }\n  }, {\n    key: \"build\",\n    value: function build() {\n      var _this = this;\n      this.render();\n      setInterval(function () {\n        return _this.render();\n      }, 1000);\n    }\n  }]);\n  return Calendar;\n}();\n\n\n//# sourceURL=webpack://momentum/./src/js/Calendar.js?");

/***/ }),

/***/ "./src/js/Clock.js":
/*!*************************!*\
  !*** ./src/js/Clock.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Clock)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Clock = /*#__PURE__*/function () {\n  function Clock() {\n    _classCallCheck(this, Clock);\n  }\n  _createClass(Clock, [{\n    key: \"render\",\n    value: function render() {\n      var clock = document.querySelector(\".clock\");\n      var date = new Date();\n      var hours = String(date.getHours()).padStart(2, \"0\");\n      var minutes = String(date.getMinutes()).padStart(2, \"0\");\n      var seconds = String(date.getSeconds()).padStart(2, \"0\");\n      clock.innerText = \"\".concat(hours, \":\").concat(minutes, \":\").concat(seconds);\n    }\n  }, {\n    key: \"build\",\n    value: function build() {\n      var _this = this;\n      this.render();\n      setInterval(function () {\n        return _this.render();\n      }, 1000);\n    }\n  }]);\n  return Clock;\n}();\n\n\n//# sourceURL=webpack://momentum/./src/js/Clock.js?");

/***/ }),

/***/ "./src/js/Greeting.js":
/*!****************************!*\
  !*** ./src/js/Greeting.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Greeting)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Greeting = /*#__PURE__*/function () {\n  function Greeting() {\n    _classCallCheck(this, Greeting);\n  }\n  _createClass(Greeting, [{\n    key: \"render\",\n    value: function render() {\n      var greeting = document.querySelector(\".greeting-content\");\n      var hour = Math.floor(new Date().getHours() / 6);\n      var part = '';\n      switch (hour) {\n        case 0:\n          part = \"night\";\n          break;\n        case 1:\n          part = \"morning\";\n          break;\n        case 2:\n          part = \"afternoon\";\n          break;\n        case 3:\n          part = \"evening\";\n          break;\n        default:\n          break;\n      }\n      greeting.innerText = \"Good \".concat(part, \", \");\n    }\n  }, {\n    key: \"build\",\n    value: function build() {\n      var _this = this;\n      this.render();\n      setInterval(function () {\n        return _this.render();\n      }, 1000);\n    }\n  }]);\n  return Greeting;\n}();\n\n\n//# sourceURL=webpack://momentum/./src/js/Greeting.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://momentum/./src/style.scss?");

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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/style.scss");
/******/ 	
/******/ })()
;