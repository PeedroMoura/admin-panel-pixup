"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/p-min-delay";
exports.ids = ["vendor-chunks/p-min-delay"];
exports.modules = {

/***/ "(ssr)/./node_modules/p-min-delay/index.js":
/*!*******************************************!*\
  !*** ./node_modules/p-min-delay/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pMinDelay)\n/* harmony export */ });\n/* harmony import */ var yoctodelay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yoctodelay */ \"(ssr)/./node_modules/yoctodelay/index.js\");\n\n\nasync function pMinDelay(promise, minimumDelay, {delayRejection = true} = {}) {\n\tconst delayPromise = yoctodelay__WEBPACK_IMPORTED_MODULE_0__(minimumDelay);\n\tawait (delayRejection ? delayPromise : Promise.all([promise, delayPromise]));\n\treturn promise;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcC1taW4tZGVsYXkvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0I7O0FBRWhCLGlEQUFpRCx1QkFBdUIsSUFBSTtBQUMzRixzQkFBc0IsdUNBQUs7QUFDM0I7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdzNjcm0vLi9ub2RlX21vZHVsZXMvcC1taW4tZGVsYXkvaW5kZXguanM/ODYwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGVsYXkgZnJvbSAneW9jdG9kZWxheSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHBNaW5EZWxheShwcm9taXNlLCBtaW5pbXVtRGVsYXksIHtkZWxheVJlamVjdGlvbiA9IHRydWV9ID0ge30pIHtcblx0Y29uc3QgZGVsYXlQcm9taXNlID0gZGVsYXkobWluaW11bURlbGF5KTtcblx0YXdhaXQgKGRlbGF5UmVqZWN0aW9uID8gZGVsYXlQcm9taXNlIDogUHJvbWlzZS5hbGwoW3Byb21pc2UsIGRlbGF5UHJvbWlzZV0pKTtcblx0cmV0dXJuIHByb21pc2U7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/p-min-delay/index.js\n");

/***/ })

};
;