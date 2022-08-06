"use strict";
exports.__esModule = true;
/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-06-10 20:26:17
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-06-12 21:55:16
 * @FilePath: /scripts/index1.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function debounce(fn, time) {
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(null, args);
        }, time);
    };
}
function getName(name) {
    return name;
}
var fn = debounce(getName, 500);
setInterval(function () {
    console.log(fn('nihao'));
}, 300);
