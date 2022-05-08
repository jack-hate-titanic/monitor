/*
 * @Author: your name
 * @Date: 2022-05-08 12:08:14
 * @LastEditTime: 2022-05-08 12:09:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/instanceof
 */
function instanceOf(left:any, right:any):boolean {
  while (Object.getPrototypeOf(left)) {
    if (Object.getPrototypeOf(left) === right.prototype) {
      return true;
    }
    left = Object.getPrototypeOf(left);
  }
  return false;
}

console.log(instanceOf([],Array));
