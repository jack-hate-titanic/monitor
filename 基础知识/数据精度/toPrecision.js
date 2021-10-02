/*
 * @Author: your name
 * @Date: 2021-05-13 17:57:14
 * @LastEditTime: 2021-10-02 09:56:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /frontDemo/基础知识/数据精度/toPrecision.js
 */
function strip(num, precision = 12) {
  return parseFloat(num.toPrecision(precision));
}
console.log(strip(19.9 * 100));
console.log(19.9 * 100);
