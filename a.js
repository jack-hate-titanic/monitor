/*
 * @Author: your name
 * @Date: 2022-05-15 10:31:45
 * @LastEditTime: 2022-05-15 10:39:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/a.js
 */
let b = 0;
Object.defineProperty(globalThis, 'a', {
  get(){
    b++;
    return b;
  }
})
if (a == 1 && a == 2 && a == 3) {
  console.log(111);
}