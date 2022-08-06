/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-08-06 16:23:11
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-08-06 16:37:09
 * @FilePath: /frontDemo/myReduce.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
Array.prototype.myReduce = function (cb, init) {
  const array = this;
  let pre = init ?? array[0];
  const start = init ? 0 : 1;
  for (let i = start; i < array.length; i++){
    pre = cb(pre, array[i], i, array);
  }
  return pre;
}


const a = [1, 2, 3, 3, 4];
const value = a.myReduce((pre, cur) => pre + cur);
console.log(value);