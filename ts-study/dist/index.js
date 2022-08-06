"use strict";
function compose() {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    return funcs.reduce(function (pre, cur) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return cur(pre.apply(void 0, args));
    }; });
}
var getName = function (str) {
    return "hello," + str.join("and");
};
var toUpper = function (str) {
    console.log(str);
    return str.toUpperCase();
};
var combin = compose(getName, toUpper);
console.log(combin(['xm', 'ws']));
//# sourceMappingURL=index.js.map