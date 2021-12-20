/*
 * @Author: your name
 * @Date: 2021-12-13 21:37:34
 * @LastEditTime: 2021-12-13 21:43:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/手写题/debounce.js
 */
const debounce = (fn, time) => {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, time);
  };
};

const debounceFn = debounce((number) => console.log(number), 1000);
debounceFn();
debounceFn();
debounceFn(5);
