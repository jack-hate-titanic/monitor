/*
 * @Author: your name
 * @Date: 2021-03-09 23:35:30
 * @LastEditTime: 2022-03-12 22:11:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /Promise/promise1.js
 */

let PENDING = "PENDING";
let  SUCCESS = "SUCCESS";
let FAIL = "FAIL";


class MyPromise{
  constructor(execute) {
    this.status = PENDING;
    this.value = '';
    this.reason = '';
    this.onSuccessCa = [];
    this.onFailCa = [];
    let resolve =  (value) => {
      if (this.status === PENDING) {
        this.status = SUCCESS;
        this.value = value;
        this.onSuccessCa.forEach((fn)=>fn())
      }
    }
    
    execute(resolve);
  }

  then(onSuccess, onFail) {
    onSuccess = typeof onSuccess === 'function' ? onSuccess : value => value;
    return new MyPromise((resolve, reject) => {
      if (this.status === PENDING) {
        this.onSuccessCa.push(() => {
          let x = onSuccess(this.value);
          return x instanceof MyPromise ? x.then(resolve):resolve(x);
        });
      }
    });
  }

  catch(reason) {
    
  }

  static resolve(value) {
    if (value instanceof MyPromise) {
      return value;
    }
    return new MyPromise((resolve) => {
      resolve(value);
    })
  }

  static all(promiseArr) {
    const length = promiseArr.length;
    const values = new Array(length);
    let count = 0;
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < length; i++){
        MyPromise.resolve(promiseArr[i]).then((value) => {
          values[i] = value;
          count++;
          if(count===length){resolve(values)}
        }).catch((error) => {
          reject(error);
        })
      }
    })
  }

  finally(cb) {
    return this.then((value) => {
      cb();
      return value; 
    }, (err) => {
      cb();
      throw err;
    })
  }

  static allSettled(promises) {
    let length = promises.length;
    let count = 0;
    let result = new Array(length);
    return new Promise((resolve) => {
      for (let i = 0; i < length; i++){
        promises[i].then((value) => {
          result[i] = {
            status: SUCCESS,
            value,
          }
          count++;
          if (count === length) {
            resolve(result);
          }
        }, (error) => {
          result[i] = {
            status: FAIL,
            reason: error
          }
          count++;
          if (count === length) {
            resolve(result);
          }
        })
      }
    })
  }
}


let p1 = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
   
})
let p2 = new Promise((resolve,reject) => {
  setTimeout(() => {
    reject(3);
  }, 1000);
   
})
let p3 = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve(4);
  }, 1000);
   
})
// 每次.then都会返回一个新的promise
// let p2 = p1.then((res) => {
//   return new MyPromise((resolve) => {
//     setTimeout(() => {
//       resolve(res+1);
//     }, 1000);
//   })
  
// })

// p2.then((value) => {
//   console.log(value);
// }).catch((error) => {
//   console.log(error);
// })

// let p1 = new MyPromise((resolve,reject) => {
//   setTimeout(() => {
//     reject(5555);
//   }, 500)
// });

// p1.finally(() => {
//   console.log('finally');
// }).then((value) => {
//   console.log(value);
// },(error) => {
//   console.log(error);
// })

MyPromise.allSettled([p1, p2]).then((value) => {
  console.log(value);
})