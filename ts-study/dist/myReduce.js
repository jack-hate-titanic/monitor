"use strict";
Array.prototype.MyReduce = function (callback, init) {
    var arr = this;
    var startIndex = init ? 0 : 1;
    var result = init || arr[0];
    for (var i = startIndex; i < arr.length; i++) {
        result = callback(result, arr[i], i, arr);
    }
    return result;
};
var arr = [1, 3, 3, 5, 6];
console.log(arr.MyReduce(function (pre, cur) { return pre + cur; }, 0));
//# sourceMappingURL=myReduce.js.map