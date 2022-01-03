/*
 * @Author: your name
 * @Date: 2021-12-27 22:41:13
 * @LastEditTime: 2021-12-27 23:12:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/Promise/使用promise实现每隔一秒输出123.js
 */
const arr = [1, 2, 3];
arr.reduce((p, x) => {
  return p.then((result) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(result);
        resolve(x);
      }, 1000);
    });
  });
}, Promise.resolve());
