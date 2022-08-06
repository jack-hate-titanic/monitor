/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-06-19 09:48:42
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-06-19 10:47:17
 * @FilePath: /ts-study/src/myReduce.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
interface Array<T> {
  MyReduce(callbackfn: (pre: T, cur: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
}


Array.prototype.MyReduce = function (callback,init) {
  let arr = this;
  let startIndex = init ? 0 : 1;
  let result = init || arr[0]; 
  for (let i = startIndex; i < arr.length; i++){
    result = callback(result, arr[i], i, arr);
  }
  return result;
}


let arr = [1, 3, 3, 5, 6];
console.log(arr.MyReduce((pre, cur) => pre + cur, 0));
