/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Person = function Person() {
  _classCallCheck(this, Person);

  _defineProperty(this, "state", {
    aa: '1'
  });

  _defineProperty(this, "outPut", function () {
    console.log([1, 2, 3].includes(2));
  });
};

var p = new Person();
p.outPut();
/******/ })()
;
//# sourceMappingURL=bundle.js.map