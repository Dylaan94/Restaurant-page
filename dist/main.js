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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initialLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initialLoad */ \"./src/modules/initialLoad.js\");\n/* harmony import */ var _modules_aboutPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/aboutPage */ \"./src/modules/aboutPage.js\");\n/* harmony import */ var _modules_menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menuPage */ \"./src/modules/menuPage.js\");\n/* harmony import */ var _modules_contactPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contactPage */ \"./src/modules/contactPage.js\");\n\n\n\n\n\n(0,_modules_initialLoad__WEBPACK_IMPORTED_MODULE_0__.pageLoadTest)();\n(0,_modules_initialLoad__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n(0,_modules_initialLoad__WEBPACK_IMPORTED_MODULE_0__.tabLoad)();\n\nlet clearNodes = () => {\n    let otherContent = document.getElementById('otherContent')\n    // removes nodes from last to first\n    // while otherContent has nodes, this will run\n    while (otherContent.lastElementChild) {\n        otherContent.removeChild(otherContent.lastElementChild);\n    }\n}\n\nlet aboutBtn = document.getElementById('about')\nlet menuBtn = document.getElementById('menu')\nlet contactBtn = document.getElementById('contact')\n\n\naboutBtn.addEventListener(\"click\", () => {\n    clearNodes();\n    (0,_modules_aboutPage__WEBPACK_IMPORTED_MODULE_1__.aboutPageTest)();\n    (0,_modules_aboutPage__WEBPACK_IMPORTED_MODULE_1__.loadAboutPage)();\n})\n\nmenuBtn.addEventListener(\"click\", () => {\n    clearNodes();\n    (0,_modules_menuPage__WEBPACK_IMPORTED_MODULE_2__.menuPageTest)();\n    (0,_modules_menuPage__WEBPACK_IMPORTED_MODULE_2__.loadMenuPage)();\n})\n\ncontactBtn.addEventListener(\"click\", () => {\n    clearNodes();\n    (0,_modules_contactPage__WEBPACK_IMPORTED_MODULE_3__.contactPageTest)();\n    (0,_modules_contactPage__WEBPACK_IMPORTED_MODULE_3__.loadContactPage)();\n})\n\n// accessing the first module and then the console logs that it is not defined.\n// managed to get it to work by accessing them as functions directly??\n\n// need to workout why webpack keeps freezing terminal\n\n// Why are my variables in initialLoad working without declaring them\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/aboutPage.js":
/*!**********************************!*\
  !*** ./src/modules/aboutPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutPageTest\": () => (/* binding */ aboutPageTest),\n/* harmony export */   \"loadAboutPage\": () => (/* binding */ loadAboutPage)\n/* harmony export */ });\nlet aboutPageTest = () => {\n    console.log(\"About Page running\")\n}\n\nlet loadAboutPage = () => {\n    let divArray = ['aboutTitle', 'aboutText', 'onomichiyakiTitle', 'onomichiyakiAbout'];\n    let otherContent = document.getElementById('otherContent');\n\n    for (let i = 0; i < divArray.length; i++) {\n        let div = document.createElement('div');\n        div.className = divArray[i];\n        div.id = divArray[i];\n        otherContent.appendChild(div)\n    }\n    console.log(otherContent)\n    renderText();\n}\n\nlet renderText = () => {\n    let aboutTitle = document.getElementById('aboutTitle')\n    let aboutText = document.getElementById('aboutText');\n    let onomichiyakiTitle = document.getElementById('onomichiyakiTitle')\n    let onomichiyakiAbout = document.getElementById('onomichiyakiAbout')\n    \n\n    aboutTitle.innerHTML = \"About Aso's Okonomiyaki\"\n    aboutText.innerHTML = \"Established in 1998, Aso has been serving the people of Onomichi proudly for over 20 years!\"\n                        + \" come in any time to try our delicious Onomichi Style Okonomiyaki\"\n\n    onomichiyakiTitle.innerHTML = \"What is Onomichiyaki?\"\n    onomichiyakiAbout.innerHTML = \"Influenced by both Hiroshima and Fuchu style Okonomiyaki \"\n                                + \"Onomichiyaki merges the Hiroshima style of layered noodles, cabbage and meat\"\n                                + \"whilst using Onomichi's local seafood to create a unique flavour\"\n                                + \"the Okonomiyaki is finally fried until the noodles are beautifully crispy; a technique borrowed from Fuchu.\"\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/aboutPage.js?");

/***/ }),

/***/ "./src/modules/contactPage.js":
/*!************************************!*\
  !*** ./src/modules/contactPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPageTest\": () => (/* binding */ contactPageTest),\n/* harmony export */   \"loadContactPage\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nlet contactPageTest = () => {\n    console.log(\"Contact page running\")\n}\n\nlet loadContactPage = () => {\n    let otherContent = document.getElementById('otherContent');\n    let divArray = ['contactInfo', 'googleDiv']\n\n    for (let i = 0; i < divArray.length; i++) {\n        let div = document.createElement('div');\n        div.id = divArray[i];\n        div.className = divArray[i];\n        otherContent.appendChild(div);\n    }\n    console.log(otherContent)\n    renderOtherContent();\n}\n\nlet renderOtherContent = () => {\n    let contactInfo = document.getElementById('contactInfo')\n    let googleDiv = document.getElementById('googleDiv')\n\n    contactInfo.innerHTML = 'Contact Info'\n    googleDiv.innerHTML = 'Google Div'\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contactPage.js?");

/***/ }),

/***/ "./src/modules/initialLoad.js":
/*!************************************!*\
  !*** ./src/modules/initialLoad.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoadTest\": () => (/* binding */ pageLoadTest),\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad),\n/* harmony export */   \"tabLoad\": () => (/* binding */ tabLoad)\n/* harmony export */ });\n// webpack tests\nlet pageLoadTest = () => {\n    console.log(\"pageLoad runs look\");\n}\n\n// variables\nlet contentDiv = document.getElementById('content');\nlet divArray = [\"header\", \"title\", \"otherContent\", \"footer\"]\nlet tabArray = [\"about\", \"menu\", \"contact\"]\n\nlet pageLoad = () => {\n    // for loop to dynamically create divs\n    for (let i = 0; i < divArray.length; i++) {\n        let div = document.createElement('div');\n        div.className = divArray[i];\n        div.id = divArray[i];\n        contentDiv.appendChild(div);\n    }\n\n    console.log(contentDiv);\n\n    // variables for styling\n\n    let header = document.getElementById('header')\n    let title = document.getElementById('title')\n    let otherContent = document.getElementById('otherContent')\n    let footer = document.getElementById('footer')\n\n    //header\n    header.innerHTML = 'header';\n\n    //title\n    title.innerHTML = \"Aso's Okonomiyaki\";\n\n    //other content\n    // otherContent.innerHTML = 'Other stuff here' commented out to prevent memory leak\n    \n    //footer\n    footer.innerHTML = 'Technologies used: HTML CSS Javascript Webkit'\n}\n\n\n\nlet tabLoad = () => {\n    for (let i = 0; i < tabArray.length; i++) {\n       let list = document.createElement('li')\n       list.className = tabArray[i];\n       list.id = tabArray[i];\n       list.innerHTML = tabArray[i];\n       header.appendChild(list);\n    }\n}\n\n\n\n\n\n        // read about dom creating global variables and work out how to NOT use them\n        // look at creating just one single function to export from each module\n\n//# sourceURL=webpack://restaurant-page/./src/modules/initialLoad.js?");

/***/ }),

/***/ "./src/modules/menuPage.js":
/*!*********************************!*\
  !*** ./src/modules/menuPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPageTest\": () => (/* binding */ menuPageTest),\n/* harmony export */   \"loadMenuPage\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nlet menuPageTest = () => {\n    console.log(\"Menu Page Running\")\n}\n\nlet loadMenuPage = () => {\n    let divArray = ['menuTitle', 'menuContainer']\n    let otherContent = document.getElementById('otherContent')\n    for (let i = 0; i < divArray.length; i++) {\n        let div = document.createElement('div');\n        div.id = divArray[i];\n        div.className = divArray[i];\n        otherContent.appendChild(div);\n    }\n    console.log(otherContent);\n\n    renderMenuPage()\n}\n\nlet renderMenuPage = () => {\n    let menuTitle = document.getElementById('menuTitle')\n    let menuContainer = document.getElementById('menuContainer')\n\n    menuTitle.innerHTML = 'Menu'\n    menuContainer.innerHTML = 'Menu Container'\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menuPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;