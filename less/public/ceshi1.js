/*
 * @Author: your name
 * @Date: 2022-03-07 22:45:28
 * @LastEditTime: 2022-03-07 22:46:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/less/public/ceshi1.js
 */

let a = {
  valueOf: () => {
    return 3;
  },
  toString: () => {
    return 4;
  },
  [Symbol.toPrimitive]: () => {
    return 6;
  }
}

console.log(a+1);