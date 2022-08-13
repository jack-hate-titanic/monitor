/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/user-agent/index.js":
/*!******************************************!*\
  !*** ./node_modules/user-agent/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nmodule.exports = __webpack_require__(/*! ./lib/user-agent */ \"./node_modules/user-agent/lib/user-agent.js\");\n\n//# sourceURL=webpack:///./node_modules/user-agent/index.js?");

/***/ }),

/***/ "./node_modules/user-agent/lib/user-agent.js":
/*!***************************************************!*\
  !*** ./node_modules/user-agent/lib/user-agent.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/*!\n * user-agent\n * Copyright(c) 2010-2011 TJ Holowaychuk.\n * Authored by TJ Holowaychuk\n * MIT Licensed\n */\n\n/**\n * Library version.\n */\n\nexports.version = '1.0.4'\n\n/**\n * Parse the given user-agent string into an object of usable data.\n *\n * Example:\n *\n *      var userAgent = require('user-agent')\n *      userAgent.parse('Mozilla/5.0 (Windows; U; Windows NT 5.1; en) AppleWebKit/526.9 (KHTML, like Gecko) Version/4.0dp1 Safari/526.8')\n *      // => { name: 'safari', version: '4.0dp1', os: 'Windows XP', full: '... same string as above ...' }\n *\n * @param  {String} str\n * @return {Object}\n * @api public\n */\n\nexports.parse = function(str) {\n  var agent = { full: str, name: name(str) };\n  agent.version = version(str, agent.name);\n  agent.fullName = agent.name + ' ' + agent.version;\n  agent.os = os(str);\n  return agent;\n};\n\n/**\n * Get the browser version based on the given browser name.\n *\n * @param  {String} str\n * @param  {String} name\n * @return {String}\n * @api private\n */\n\nfunction version(str, name) {\n  if (name === 'safari') name = 'version';\n  if (name){\n\t  return new RegExp(name + '[\\\\/ ]([\\\\d\\\\w\\\\.-]+)', 'i').exec(str) && RegExp.$1 || '';\n  }else{\n\t  var m=str.match(/version[\\/ ]([\\d\\w\\.]+)/i);\n\t  return m && m.length>1 ? m[1] : '';\n  }  \n}\n\n/**\n * Supported operating systems.\n */\n\nvar operatingSystems = {\n    'iPad': /ipad/i\n  , 'iPhone': /iphone/i\n  , 'Windows Vista': /windows nt 6\\.0/i\n  , 'Windows 7': /windows nt 6\\.\\d+/i\n  , 'Windows 2003': /windows nt 5\\.2+/i\n  , 'Windows XP': /windows nt 5\\.1+/i\n  , 'Windows 2000': /windows nt 5\\.0+/i\n  , 'OS X $1.$2': /os x (\\d+)[._](\\d+)/i\n  , 'Linux': /linux/i\n  , 'Googlebot': /googlebot/i\n};\n\nvar osNames = Object.keys(operatingSystems);\n\n/**\n * Get operating system from the given user-agent string.\n *\n * @param  {String} str\n * @return {String}\n * @api private\n */\n\nfunction os(str) {\n  var captures;\n  for (var i = 0, len = osNames.length; i < len; ++i) {\n    if (captures = operatingSystems[osNames[i]].exec(str)) {\n      return ~osNames[i].indexOf('$1')\n        ? osNames[i].replace(/\\$(\\d+)/g, function(_, n){\n          return captures[n]\n        }) : osNames[i];\n    }\n  }\n  return '';\n}\n\n/**\n * Supported browser names.\n */\n\nvar names = [\n   'opera'\n , 'konqueror'\n , 'firefox'\n , 'chrome'\n , 'epiphany'\n , 'safari'\n , 'msie'\n , 'curl'\n];\n\n/**\n * Get browser name for the given user-agent string.\n *\n * @param  {String} str\n * @return {String}\n * @api private\n */\n\nfunction name(str) {\n  str = str.toLowerCase();\n  for (var i = 0, len = names.length; i < len; ++i) {\n    if (str.indexOf(names[i]) !== -1) return names[i];\n  }\n  return '';\n}\n\n\n//# sourceURL=webpack:///./node_modules/user-agent/lib/user-agent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _monitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitor */ \"./src/monitor/index.js\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/monitor/index.js":
/*!******************************!*\
  !*** ./src/monitor/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_jsError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/jsError */ \"./src/monitor/lib/jsError.js\");\n/* harmony import */ var _lib_xhr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/xhr */ \"./src/monitor/lib/xhr.js\");\n/* harmony import */ var _lib_blankScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/blankScreen */ \"./src/monitor/lib/blankScreen.js\");\n/* harmony import */ var _lib_timing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/timing */ \"./src/monitor/lib/timing.js\");\n\n\n\n\nObject(_lib_jsError__WEBPACK_IMPORTED_MODULE_0__[\"injectJsError\"])();\nObject(_lib_xhr__WEBPACK_IMPORTED_MODULE_1__[\"injectXHR\"])();\nObject(_lib_blankScreen__WEBPACK_IMPORTED_MODULE_2__[\"blankScreen\"])();\nObject(_lib_timing__WEBPACK_IMPORTED_MODULE_3__[\"timing\"])();\n\n//# sourceURL=webpack:///./src/monitor/index.js?");

/***/ }),

/***/ "./src/monitor/lib/blankScreen.js":
/*!****************************************!*\
  !*** ./src/monitor/lib/blankScreen.js ***!
  \****************************************/
/*! exports provided: blankScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blankScreen\", function() { return blankScreen; });\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n/* harmony import */ var _utils_onload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/onload */ \"./src/monitor/utils/onload.js\");\n\n\nfunction blankScreen() {\n    let wrapperElements = ['html', 'body', '#container', '.content'];\n    let emptyPoints = 0;\n    function getSelector(element) {\n        if (element.id) {\n            return \"#\" + element.id;\n        } else if (element.className) {// a b c => .a.b.c\n            return \".\" + element.className.split(' ').filter(item => !!item).join('.');\n        } else {\n            return element.nodeName.toLowerCase();\n        }\n    }\n    function isWrapper(element) {\n        let selector = getSelector(element);\n        if (wrapperElements.indexOf(selector) != -1) {\n            emptyPoints++;\n        }\n    }\n    Object(_utils_onload__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\n        for (let i = 1; i <= 9; i++) {\n            let xElements = document.elementsFromPoint(\n                window.innerWidth * i / 10, window.innerHeight / 2);\n            let yElements = document.elementsFromPoint(\n                window.innerWidth / 2, window.innerHeight * i / 10);\n            isWrapper(xElements[0]);\n            isWrapper(yElements[0]);\n        }\n\n        if (emptyPoints >= 18) {\n            let centerElements = document.elementsFromPoint(\n                window.innerWidth / 2, window.innerHeight / 2\n            );\n            _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send({\n                kind: 'stability',\n                type: 'blank',\n                emptyPoints,\n                screen: window.screen.width + \"X\" + window.screen.height,\n                viewPoint: window.innerWidth + \"X\" + window.innerHeight,\n                selector: getSelector(centerElements[0])\n            });\n        }\n    });\n\n}\n\n//# sourceURL=webpack:///./src/monitor/lib/blankScreen.js?");

/***/ }),

/***/ "./src/monitor/lib/jsError.js":
/*!************************************!*\
  !*** ./src/monitor/lib/jsError.js ***!
  \************************************/
/*! exports provided: injectJsError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"injectJsError\", function() { return injectJsError; });\n/* harmony import */ var _utils_getLastEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getLastEvent */ \"./src/monitor/utils/getLastEvent.js\");\n/* harmony import */ var _utils_getSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getSelector */ \"./src/monitor/utils/getSelector.js\");\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n\n\n\n\nfunction injectJsError() {\n    //监听全局未捕获的错误\n    window.addEventListener('error', function (event) {//错误事件对象\n        let lastEvent = Object(_utils_getLastEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();//最后一个交互事件\n        //这是一个脚本加载错误\n        if (event.target && (event.target.src || event.target.href)) {\n            _utils_tracker__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send({\n                kind: 'stability',//监控指标的大类\n                type: 'error',//小类型 这是一个错误\n                errorType: 'resourceError',//js或css资源加载错误\n                filename: event.target.src || event.target.href,//哪个文件报错了\n                tagName: event.target.tagName,//SCRIPT\n                //body div#container div.content input\n                selector: Object(_utils_getSelector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(event.target) //代表最后一个操作的元素\n            });\n        } else {\n            _utils_tracker__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send({\n                kind: 'stability',//监控指标的大类\n                type: 'error',//小类型 这是一个错误\n                errorType: 'jsError',//JS执行错误\n                message: event.message,//报错信息\n                filename: event.filename,//哪个文件报错了\n                position: `${event.lineno}:${event.colno}`,\n                stack: getLines(event.error.stack),\n                //body div#container div.content input\n                selector: lastEvent ? Object(_utils_getSelector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lastEvent.path) : '' //代表最后一个操作的元素\n            });\n        }\n    }, true);\n    window.addEventListener('unhandledrejection', (event) => {\n        console.log(event);\n        let lastEvent = Object(_utils_getLastEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();//最后一个交互事件\n        let message;\n        let filename;\n        let line = 0;\n        let column = 0;\n        let stack = '';\n        let reason = event.reason;\n        if (typeof reason === 'string') {\n            message = reason;\n        } else if (typeof reason === 'object') {//说明是一个错误对象\n            message = reason.message;\n            //at http://localhost:8080/:23:38\n            if (reason.stack) {\n                let matchResult = reason.stack.match(/at\\s+(.+):(\\d+):(\\d+)/);\n                filename = matchResult[1];\n                line = matchResult[2];\n                column = matchResult[3];\n            }\n\n            stack = getLines(reason.stack);\n        }\n        _utils_tracker__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send({\n            kind: 'stability',//监控指标的大类\n            type: 'error',//小类型 这是一个错误\n            errorType: 'promiseError',//JS执行错误\n            message,//报错信息\n            filename,//哪个文件报错了\n            position: `${line}:${column}`,\n            stack,\n            //body div#container div.content input\n            selector: lastEvent ? Object(_utils_getSelector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lastEvent.path) : '' //代表最后一个操作的元素\n        });\n    }, true);\n\n    function getLines(stack) {\n        return stack.split('\\n').slice(1).map(item => item.replace(/^\\s+at\\s+/g, \"\")).join('^');\n    }\n}\n\n//# sourceURL=webpack:///./src/monitor/lib/jsError.js?");

/***/ }),

/***/ "./src/monitor/lib/timing.js":
/*!***********************************!*\
  !*** ./src/monitor/lib/timing.js ***!
  \***********************************/
/*! exports provided: timing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timing\", function() { return timing; });\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n/* harmony import */ var _utils_onload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/onload */ \"./src/monitor/utils/onload.js\");\n/* harmony import */ var _utils_getLastEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getLastEvent */ \"./src/monitor/utils/getLastEvent.js\");\n/* harmony import */ var _utils_getSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getSelector */ \"./src/monitor/utils/getSelector.js\");\n\n\n\n\nfunction timing() {\n    let FMP, LCP;\n    // 增加一个性能条目的观察者\n    if (PerformanceObserver) {\n        new PerformanceObserver((entryList, observer) => {\n            let perfEntries = entryList.getEntries();\n            FMP = perfEntries[0];//startTime 2000以后\n            observer.disconnect();//不再观察了\n        }).observe({ entryTypes: ['element'] });//观察页面中的意义的元素\n\n        new PerformanceObserver((entryList, observer) => {\n            let perfEntries = entryList.getEntries();\n            LCP = perfEntries[0];\n            observer.disconnect();//不再观察了\n        }).observe({ entryTypes: ['largest-contentful-paint'] });//观察页面中的意义的元素\n\n        new PerformanceObserver((entryList, observer) => {\n            let lastEvent = Object(_utils_getLastEvent__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n            let firstInput = entryList.getEntries()[0];\n            console.log('FID', firstInput);\n            if (firstInput) {\n                //processingStart开始处理的时间 startTime开点击的时间 差值就是处理的延迟\n                let inputDelay = firstInput.processingStart - firstInput.startTime;\n                let duration = firstInput.duration;//处理的耗时\n                if (inputDelay > 0 || duration > 0) {\n                    _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send({\n                        kind: 'experience',//用户体验指标\n                        type: 'firstInputDelay',//首次输入延迟\n                        inputDelay,//延时的时间\n                        duration,//处理的时间\n                        startTime: firstInput.startTime,\n                        selector: lastEvent ? Object(_utils_getSelector__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(lastEvent.path || lastEvent.target) : ''\n                    });\n                }\n\n            }\n            observer.disconnect();//不再观察了\n        }).observe({ type: 'first-input', buffered: true });//观察页面中的意义的元素\n    }\n\n    //用户的第一次交互 点击页面 \n    Object(_utils_onload__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\n        setTimeout(() => {\n            const {\n                fetchStart,\n                connectStart,\n                connectEnd,\n                requestStart,\n                responseStart,\n                responseEnd,\n                domLoading,\n                domInteractive,\n                domContentLoadedEventStart,\n                domContentLoadedEventEnd,\n                loadEventStart\n            } = performance.timing;\n            _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send({\n                kind: 'experience',//用户体验指标\n                type: 'timing',//统计每个阶段的时间\n                connectTime: connectEnd - connectStart,//连接时间\n                ttfbTime: responseStart - requestStart,//首字节到达时间\n                responseTime: responseEnd - responseStart,//响应的读取时间\n                parseDOMTime: loadEventStart - domLoading,//DOM解析的时间\n                domContentLoadedTime: domContentLoadedEventEnd - domContentLoadedEventStart,\n                timeToInteractive: domInteractive - fetchStart,//首次可交互时间\n                loadTIme: loadEventStart - fetchStart //完整的加载时间\n            });\n\n\n            let FP = performance.getEntriesByName('first-paint')[0];\n            let FCP = performance.getEntriesByName('first-contentful-paint')[0];\n            //开始发送性能指标\n            console.log('FP', FP);\n            console.log('FCP', FCP);\n            console.log('FMP', FMP);\n            console.log('LCP', LCP);\n            _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send({\n                kind: 'experience',//用户体验指标\n                type: 'paint',//统计每个阶段的时间\n                firstPaint: FP.startTime,\n                firstContentfulPaint: FCP.startTime,\n                firstMeaningfulPaint: FMP.startTime,\n                largestContentfulPaint: LCP.startTime\n            });\n        }, 3000);\n    });\n\n}\n\n//# sourceURL=webpack:///./src/monitor/lib/timing.js?");

/***/ }),

/***/ "./src/monitor/lib/xhr.js":
/*!********************************!*\
  !*** ./src/monitor/lib/xhr.js ***!
  \********************************/
/*! exports provided: injectXHR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"injectXHR\", function() { return injectXHR; });\n/* harmony import */ var _utils_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tracker */ \"./src/monitor/utils/tracker.js\");\n\nfunction injectXHR() {\n    let XMLHttpRequest = window.XMLHttpRequest;\n    let oldOpen = XMLHttpRequest.prototype.open;\n    XMLHttpRequest.prototype.open = function (method, url, async) {\n        if (!url.match(/logstores/) && !url.match(/sockjs/)) {\n            this.logData = { method, url, async };\n        }\n        return oldOpen.apply(this, arguments);\n    }\n    //axios 背后有两种 如果 browser XMLHttpRequest  node http\n    let oldSend = XMLHttpRequest.prototype.send;\n    //fetch怎么监听\n    XMLHttpRequest.prototype.send = function (body) {\n        if (this.logData) {\n            let startTime = Date.now();//在发送之前记录一下开始的时间\n            //XMLHttpRequest  readyState 0 1 2 3 4\n            //status 2xx 304 成功 其它 就是失败\n            let handler = (type) => (event) => {\n                let duration = Date.now() - startTime;\n                let status = this.status;//200 500\n                let statusText = this.statusText;// OK Server Error\n                _utils_tracker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].send({\n                    kind: 'stability',\n                    type: 'xhr',\n                    eventType: type,//load error abort\n                    pathname: this.logData.url,//请求路径\n                    status: status + '-' + statusText,//状态码\n                    duration,//持续时间\n                    response: this.response ? JSON.stringify(this.response) : '',//响应体\n                    params: body || ''\n                });\n            }\n            this.addEventListener('load', handler('load'), false);\n            this.addEventListener('error', handler('error'), false);\n            this.addEventListener('abort', handler('abort'), false);\n        }\n        return oldSend.apply(this, arguments);\n    }\n}\n\n//# sourceURL=webpack:///./src/monitor/lib/xhr.js?");

/***/ }),

/***/ "./src/monitor/utils/getLastEvent.js":
/*!*******************************************!*\
  !*** ./src/monitor/utils/getLastEvent.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet lastEvent;\n['click', 'touchstart', 'mousedown', 'keydown', 'mouseover'].forEach(eventType => {\n    document.addEventListener(eventType, (event) => {\n        lastEvent = event;\n    }, {\n        capture: true,//捕获阶段\n        passive: true//默认不阻止默认事件\n    });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n    return lastEvent;\n});\n\n//# sourceURL=webpack:///./src/monitor/utils/getLastEvent.js?");

/***/ }),

/***/ "./src/monitor/utils/getSelector.js":
/*!******************************************!*\
  !*** ./src/monitor/utils/getSelector.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nfunction getSelectors(path) {\n    return path.reverse().filter(element => {\n        return element !== document && element !== window;\n    }).map(element => {\n        let selector = \"\";\n        if (element.id) {\n            return `${element.nodeName.toLowerCase()}#${element.id}`;\n        } else if (element.className && typeof element.className === 'string') {\n            return `${element.nodeName.toLowerCase()}.${element.className}`;\n        } else {\n            selector = element.nodeName.toLowerCase();\n        }\n        return selector;\n    }).join(' ');\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (pathsOrTarget) {\n    if (Array.isArray(pathsOrTarget)) {//可能是一个数组\n        return getSelectors(pathsOrTarget);\n    } else {//也有可有是一个对象 \n        let path = [];\n        while (pathsOrTarget) {\n            path.push(pathsOrTarget);\n            pathsOrTarget = pathsOrTarget.parentNode;\n        }\n        return getSelectors(path);\n    }\n});\n\n//# sourceURL=webpack:///./src/monitor/utils/getSelector.js?");

/***/ }),

/***/ "./src/monitor/utils/onload.js":
/*!*************************************!*\
  !*** ./src/monitor/utils/onload.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (callback) {\n    if (document.readyState === 'complete') {\n        callback();\n    } else {\n        window.addEventListener('load', callback);\n    }\n});\n\n//# sourceURL=webpack:///./src/monitor/utils/onload.js?");

/***/ }),

/***/ "./src/monitor/utils/tracker.js":
/*!**************************************!*\
  !*** ./src/monitor/utils/tracker.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nlet host = 'cn-beijing.log.aliyuncs.com';\nlet project = 'zhufengmonitor';\nlet logStore = 'zhufengmonitor-store';\nlet userAgent = __webpack_require__(/*! user-agent */ \"./node_modules/user-agent/index.js\");\nfunction getExtraData() {\n    return {\n        title: document.title,\n        url: location.href,\n        timestamp: Date.now(),\n        userAgent: userAgent.parse(navigator.userAgent).name,\n        //用户ID\n    }\n}\n//gif图片做上传 图片速度 快没有跨域 问题，\nclass SendTracker {\n    constructor() {\n        this.url = `http://${project}.${host}/logstores/${logStore}/track`;//上报的路径\n        this.xhr = new XMLHttpRequest;\n    }\n    send(data = {}) {\n        let extraData = getExtraData();\n        let log = { ...extraData, ...data };\n        //对象 的值不能是数字\n        for (let key in log) {\n            if (typeof log[key] === 'number') {\n                log[key] = `${log[key]}`;\n            }\n        }\n        console.log('log', log);\n        let body = JSON.stringify({\n            __logs__: [log]\n        });\n        this.xhr.open('POST', this.url, true);\n        this.xhr.setRequestHeader('Content-Type', 'application/json');//请求体类型\n        this.xhr.setRequestHeader('x-log-apiversion', '0.6.0');//版本号\n        this.xhr.setRequestHeader('x-log-bodyrawsize', body.length);//请求体的大小\n        this.xhr.onload = function () {\n            // console.log(this.xhr.response);\n        }\n        this.xhr.onerror = function (error) {\n            //console.log(error);\n        }\n        this.xhr.send(body);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (new SendTracker());\n\n//# sourceURL=webpack:///./src/monitor/utils/tracker.js?");

/***/ })

/******/ });