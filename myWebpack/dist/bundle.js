(function (modules) {
  var installedModules = {};

  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }

    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {},
    });

    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    module.l = true;
    return module.exports;
  }

  return __webpack_require__("./src/index.js");
})({
  "./src/index.js": function (module, exports, __webpack_require__) {
    eval(
      '"use strict";\n\nvar _app = __webpack_require__("./src/app.js");\n\nconsole.log(_app.a);'
    );
  },

  "./src/app.js": function (module, exports, __webpack_require__) {
    eval(
      '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.a = void 0;\nvar a = "app";\nexports.a = a;'
    );
  },
});
