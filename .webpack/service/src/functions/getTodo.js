/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/getTodo.ts":
/*!**********************************!*\
  !*** ./src/functions/getTodo.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dynamodbClient */ \"./src/utils/dynamodbClient.ts\");\n\nconst handle = async (event) => {\n    const { user_id } = event.pathParameters;\n    const response = await _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_0__.document.query({\n        TableName: \"todos\",\n        KeyConditionExpression: \"user_id = :user_id\",\n        ExpressionAttributeValues: {\n            \":user_id\": \"f61b24c1-0cd6-4bbd-94cb-61471f5a05fb\",\n        },\n    })\n        .promise();\n    return {\n        statusCode: 200,\n        body: JSON.stringify({\n            data: response.Items[0],\n        }),\n        headers: {\n            \"Content-type\": \"application/json\",\n        },\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dldFRvZG8udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25jZWl0b3Mtbm9kZS1zZXJ2ZXJsZXNzLy4vc3JjL2Z1bmN0aW9ucy9nZXRUb2RvLnRzPzg3M2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJR2F0ZXdheVByb3h5SGFuZGxlciB9IGZyb20gXCJhd3MtbGFtYmRhXCI7XG5pbXBvcnQgeyBkb2N1bWVudCB9IGZyb20gXCIuLi91dGlscy9keW5hbW9kYkNsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlOiBBUElHYXRld2F5UHJveHlIYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHsgdXNlcl9pZCB9ID0gZXZlbnQucGF0aFBhcmFtZXRlcnM7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkb2N1bWVudFxuICAgIC5xdWVyeSh7XG4gICAgICBUYWJsZU5hbWU6IFwidG9kb3NcIixcbiAgICAgIEtleUNvbmRpdGlvbkV4cHJlc3Npb246IFwidXNlcl9pZCA9IDp1c2VyX2lkXCIsXG4gICAgICBFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzOiB7XG4gICAgICAgIFwiOnVzZXJfaWRcIjogXCJmNjFiMjRjMS0wY2Q2LTRiYmQtOTRjYi02MTQ3MWY1YTA1ZmJcIixcbiAgICAgIH0sXG4gICAgfSlcbiAgICAucHJvbWlzZSgpO1xuXG4gIHJldHVybiB7XG4gICAgc3RhdHVzQ29kZTogMjAwLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGRhdGE6IHJlc3BvbnNlLkl0ZW1zWzBdLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/getTodo.ts\n");

/***/ }),

/***/ "./src/utils/dynamodbClient.ts":
/*!*************************************!*\
  !*** ./src/utils/dynamodbClient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"document\": () => (/* binding */ document)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nconst options = {\n    region: \"localhost\",\n    endpoint: \"http://localhost:8000\",\n};\nconst isOffline = () => {\n    return process.env.IS_OFFLINE;\n};\nconst document = isOffline()\n    ? new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient(options)\n    : new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbmNlaXRvcy1ub2RlLXNlcnZlcmxlc3MvLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnQudHM/NDUxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEeW5hbW9EQiB9IGZyb20gXCJhd3Mtc2RrXCI7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHJlZ2lvbjogXCJsb2NhbGhvc3RcIixcbiAgZW5kcG9pbnQ6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCIsXG59O1xuXG5jb25zdCBpc09mZmxpbmUgPSAoKSA9PiB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5JU19PRkZMSU5FO1xufTtcblxuZXhwb3J0IGNvbnN0IGRvY3VtZW50ID0gaXNPZmZsaW5lKClcbiAgPyBuZXcgRHluYW1vREIuRG9jdW1lbnRDbGllbnQob3B0aW9ucylcbiAgOiBuZXcgRHluYW1vREIuRG9jdW1lbnRDbGllbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/dynamodbClient.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/getTodo.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;