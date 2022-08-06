/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-05-28 19:27:46
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-05-28 19:27:47
 * @FilePath: /frontDemo/curry.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function curry(fn,...args) {
  let length = fn.length;
  return function () {
    args = args.concat(Array.prototype.slice.call(arguments));
    if (args.length < length) {
      return curry.call(this,fn,...args)
    }
  }
}