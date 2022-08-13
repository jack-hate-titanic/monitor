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

/***/ "./node_modules/user-agent/index.js":
/*!******************************************!*\
  !*** ./node_modules/user-agent/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nmodule.exports = __webpack_require__(/*! ./lib/user-agent */ \"./node_modules/user-agent/lib/user-agent.js\");\n\n//# sourceURL=webpack://monitor/./node_modules/user-agent/index.js?");

/***/ }),

/***/ "./node_modules/user-agent/lib/user-agent.js":
/*!***************************************************!*\
  !*** ./node_modules/user-agent/lib/user-agent.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n/*!\n * user-agent\n * Copyright(c) 2010-2011 TJ Holowaychuk.\n * Authored by TJ Holowaychuk\n * MIT Licensed\n */\n\n/**\n * Library version.\n */\n\nexports.version = '1.0.4'\n\n/**\n * Parse the given user-agent string into an object of usable data.\n *\n * Example:\n *\n *      var userAgent = require('user-agent')\n *      userAgent.parse('Mozilla/5.0 (Windows; U; Windows NT 5.1; en) AppleWebKit/526.9 (KHTML, like Gecko) Version/4.0dp1 Safari/526.8')\n *      // => { name: 'safari', version: '4.0dp1', os: 'Windows XP', full: '... same string as above ...' }\n *\n * @param  {String} str\n * @return {Object}\n * @api public\n */\n\nexports.parse = function(str) {\n  var agent = { full: str, name: name(str) };\n  agent.version = version(str, agent.name);\n  agent.fullName = agent.name + ' ' + agent.version;\n  agent.os = os(str);\n  return agent;\n};\n\n/**\n * Get the browser version based on the given browser name.\n *\n * @param  {String} str\n * @param  {String} name\n * @return {String}\n * @api private\n */\n\nfunction version(str, name) {\n  if (name === 'safari') name = 'version';\n  if (name){\n\t  return new RegExp(name + '[\\\\/ ]([\\\\d\\\\w\\\\.-]+)', 'i').exec(str) && RegExp.$1 || '';\n  }else{\n\t  var m=str.match(/version[\\/ ]([\\d\\w\\.]+)/i);\n\t  return m && m.length>1 ? m[1] : '';\n  }  \n}\n\n/**\n * Supported operating systems.\n */\n\nvar operatingSystems = {\n    'iPad': /ipad/i\n  , 'iPhone': /iphone/i\n  , 'Windows Vista': /windows nt 6\\.0/i\n  , 'Windows 7': /windows nt 6\\.\\d+/i\n  , 'Windows 2003': /windows nt 5\\.2+/i\n  , 'Windows XP': /windows nt 5\\.1+/i\n  , 'Windows 2000': /windows nt 5\\.0+/i\n  , 'OS X $1.$2': /os x (\\d+)[._](\\d+)/i\n  , 'Linux': /linux/i\n  , 'Googlebot': /googlebot/i\n};\n\nvar osNames = Object.keys(operatingSystems);\n\n/**\n * Get operating system from the given user-agent string.\n *\n * @param  {String} str\n * @return {String}\n * @api private\n */\n\nfunction os(str) {\n  var captures;\n  for (var i = 0, len = osNames.length; i < len; ++i) {\n    if (captures = operatingSystems[osNames[i]].exec(str)) {\n      return ~osNames[i].indexOf('$1')\n        ? osNames[i].replace(/\\$(\\d+)/g, function(_, n){\n          return captures[n]\n        }) : osNames[i];\n    }\n  }\n  return '';\n}\n\n/**\n * Supported browser names.\n */\n\nvar names = [\n   'opera'\n , 'konqueror'\n , 'firefox'\n , 'chrome'\n , 'epiphany'\n , 'safari'\n , 'msie'\n , 'curl'\n];\n\n/**\n * Get browser name for the given user-agent string.\n *\n * @param  {String} str\n * @return {String}\n * @api private\n */\n\nfunction name(str) {\n  str = str.toLowerCase();\n  for (var i = 0, len = names.length; i < len; ++i) {\n    if (str.indexOf(names[i]) !== -1) return names[i];\n  }\n  return '';\n}\n\n\n//# sourceURL=webpack://monitor/./node_modules/user-agent/lib/user-agent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _monitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitor */ \"./src/monitor/index.js\");\n/*\n * @Author: 悦者生存 1002783067@qq.com\n * @Date: 2022-08-07 19:32:57\n * @LastEditors: 悦者生存 1002783067@qq.com\n * @LastEditTime: 2022-08-08 21:47:49\n * @FilePath: /monitor/src/index.js\n * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE\n */\n\n\n//# sourceURL=webpack://monitor/./src/index.js?");

/***/ }),

/***/ "./src/monitor/index.js":
/*!******************************!*\
  !*** ./src/monitor/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_jsError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/jsError */ \"./src/monitor/lib/jsError.js\");\n/*\n * @Author: 悦者生存 1002783067@qq.com\n * @Date: 2022-08-07 19:37:24\n * @LastEditors: 悦者生存 1002783067@qq.com\n * @LastEditTime: 2022-08-07 19:38:05\n * @FilePath: /monitor/src/monitor/index.js\n * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE\n */\n\n(0,_lib_jsError__WEBPACK_IMPORTED_MODULE_0__.injectJsError)();\n\n//# sourceURL=webpack://monitor/./src/monitor/index.js?");

/***/ }),

/***/ "./src/monitor/lib/jsError.js":
/*!************************************!*\
  !*** ./src/monitor/lib/jsError.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"injectJsError\": () => (/* binding */ injectJsError)\n/* harmony export */ });\n/* harmony import */ var _util_getLastEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/getLastEvent */ \"./src/monitor/util/getLastEvent.js\");\n/* harmony import */ var _util_getSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/getSelector */ \"./src/monitor/util/getSelector.js\");\n/* harmony import */ var _util_formatTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/formatTime */ \"./src/monitor/util/formatTime.js\");\n/* harmony import */ var _util_tracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/tracker */ \"./src/monitor/util/tracker.js\");\n/*\n * @Author: 悦者生存 1002783067@qq.com\n * @Date: 2022-08-07 19:37:15\n * @LastEditors: 悦者生存 1002783067@qq.com\n * @LastEditTime: 2022-08-10 21:54:44\n * @FilePath: /monitor/src/monitor/lib/jsError.js\n * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE\n */\n\n\n\n\n\nfunction injectJsError() {\n  // 一般js运行时错误使用window.onerror捕获处理\n  window.addEventListener('error', (event) => { \n    let lastEvent = (0,_util_getLastEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (event.target && (event.target.src || event.target.href)) {\n      _util_tracker__WEBPACK_IMPORTED_MODULE_3__[\"default\"].send({//资源加载错误\n          kind: 'stability',//稳定性指标\n          type: 'error',//resource\n          errorType: 'resourceError',\n          filename: event.target.src || event.target.href,//加载失败的资源\n          tagName: event.target.tagName,//标签名\n          timeStamp: (0,_util_formatTime__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(event.timeStamp),//时间\n          selector: (0,_util_getSelector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(event.path || event.target),//选择器\n      })\n  } else {\n      _util_tracker__WEBPACK_IMPORTED_MODULE_3__[\"default\"].send({\n          kind: 'stability',//稳定性指标\n          type: 'error',//error\n          errorType: 'jsError',//jsError\n          message: event.message,//报错信息\n          filename: event.filename,//报错链接\n          position: (event.lineNo || 0) + \":\" + (event.columnNo || 0),//行列号\n          stack: getLines(event.error.stack),//错误堆栈\n          selector: lastEvent ? (0,_util_getSelector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lastEvent.path || lastEvent.target) : ''//CSS选择器\n      })\n  }\n  }, true);\n}\n\nfunction getLines(stack) {\n  if (!stack) {\n      return '';\n  }\n  return stack.split('\\n').slice(1).map(item => item.replace(/^\\s+at\\s+/g, '')).join('^');\n}\n\n//# sourceURL=webpack://monitor/./src/monitor/lib/jsError.js?");

/***/ }),

/***/ "./src/monitor/util/formatTime.js":
/*!****************************************!*\
  !*** ./src/monitor/util/formatTime.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\n * @Author: 悦者生存 1002783067@qq.com\n * @Date: 2022-08-08 08:00:32\n * @LastEditors: 悦者生存 1002783067@qq.com\n * @LastEditTime: 2022-08-08 08:00:37\n * @FilePath: /monitor/src/monitor/util/formatTime.js\n * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE\n */\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((time) => {\n  return `${time}`.split(\".\")[0]\n});\n\n//# sourceURL=webpack://monitor/./src/monitor/util/formatTime.js?");

/***/ }),

/***/ "./src/monitor/util/getLastEvent.js":
/*!******************************************!*\
  !*** ./src/monitor/util/getLastEvent.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\n * @Author: 悦者生存 1002783067@qq.com\n * @Date: 2022-08-08 07:25:53\n * @LastEditors: 悦者生存 1002783067@qq.com\n * @LastEditTime: 2022-08-10 22:00:50\n * @FilePath: /monitor/src/monitor/util/getLastEvent.js\n * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE\n */\nlet lastEvent;\n['click','pointerdown', 'touchstart', 'mousedown', 'keydown', 'mouseover'].forEach(event => {\n  document.addEventListener(event, (event1) => {\n        lastEvent = event1;\n    }, {\n        capture: true,//capture 控制监听器是在捕获阶段执行还是在冒泡阶段执行 \n        passive: true //passive 的意思是顺从的，表示它不会对事件的默认行为说 no\n    });\n});\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    return lastEvent;\n};\n\n//# sourceURL=webpack://monitor/./src/monitor/util/getLastEvent.js?");

/***/ }),

/***/ "./src/monitor/util/getSelector.js":
/*!*****************************************!*\
  !*** ./src/monitor/util/getSelector.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\n * @Author: 悦者生存 1002783067@qq.com\n * @Date: 2022-08-08 07:54:40\n * @LastEditors: 悦者生存 1002783067@qq.com\n * @LastEditTime: 2022-08-08 22:12:17\n * @FilePath: /monitor/src/monitor/util/getSelector.js\n * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE\n */\nconst getSelector = function (path) {\n  return path.reverse().filter((element) => {\n    return element !== window && element != document;\n  }).map((element) => {\n    var selector;\n    if (element.id) {\n      selector = `#${element.id}`;\n    } else if (element.className && typeof element.className === 'string') {\n      selector = '.' + element.className.split(' ').filter(function (item) { return !!item }).join('.');\n    } else {\n      selector = element.nodeName;\n    }\n    return selector;\n  }).join(\" \");\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(pathsOrTarget) {\n  if (Array.isArray(pathsOrTarget)) {\n      return getSelector(pathsOrTarget);\n  } else {\n      var paths = [];\n      var element = pathsOrTarget;\n      while (element) {\n          paths.push(element);\n          element = element.parentNode;\n      }\n      return getSelector(paths);\n  }\n}\n\n//# sourceURL=webpack://monitor/./src/monitor/util/getSelector.js?");

/***/ }),

/***/ "./src/monitor/util/tracker.js":
/*!*************************************!*\
  !*** ./src/monitor/util/tracker.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\n * @Author: 悦者生存 1002783067@qq.com\n * @Date: 2022-08-08 08:01:13\n * @LastEditors: 悦者生存 1002783067@qq.com\n * @LastEditTime: 2022-08-10 22:01:24\n * @FilePath: /monitor/src/monitor/util/tracker.js\n * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE\n */\nlet userAgent = __webpack_require__(/*! user-agent */ \"./node_modules/user-agent/index.js\");\nfunction getExtraData() {\n  return {\n    title: document.title,\n    url: location.href,\n    timestamp: Date.now(),\n    userAgent: userAgent.parse(navigator.userAgent).name\n  }\n}\n\nclass SendTracker{\n  constructor() {\n  }\n  send(data = {}, callback) {\n    let extraData = getExtraData();\n    let logs = { ...extraData, ...data };\n    for (let key in logs) {\n      if (typeof logs[key] === 'number') {\n        logs[key] = \"\" + logs[key];\n      }\n    }\n    console.log(JSON.stringify(logs, null, 2));\n    \n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new SendTracker());\n\n//# sourceURL=webpack://monitor/./src/monitor/util/tracker.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;