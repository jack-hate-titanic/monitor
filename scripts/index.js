/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-06-07 20:15:57
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-06-07 22:59:15
 * @FilePath: /scripts/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class MyPromise{

  static all(PromiseArr) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(PromiseArr)) {
        let result = [];
        let count = 0;
        for (let i = 0; i < PromiseArr.length; i++){
          PromiseArr[i].then((value) => { 
            result.push(value);
            count++;
            if (count === PromiseArr.length) {
              resolve(result);
            }
          }, (err) => {
              reject(err);
          })
        }
      } else {
        reject('不是一个数组');
      }
    })
    
    
  }
}