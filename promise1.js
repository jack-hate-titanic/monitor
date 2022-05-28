/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-05-21 10:59:27
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-05-22 19:22:08
 * @FilePath: /frontDemo/promise1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

let PENDING = 'PENDING';
let SUCCESS = 'SUCCESS';
let FAIL = "FAIL";

class MyPromise{
  constructor(run) {
    this.value = '';
    this.status = PENDING;
    this.successCb = [];
    this.failCb = [];
    let resolve = (value) => {
      // 此时肯定为PENDING
      if (this.status === PENDING) {
        this.status = SUCCESS;
        this.value = value;
        this.successCb.forEach((fn)=>fn())
      }
    }
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = FAIL;
        this.reason = reason;
        this.failCb.forEach(fn=>fn())
      }
    }
    run(resolve, reject)
  }

  then(onSuccess, onFail) {
    typeof onSuccess === 'function' ? onSuccess : value => value;
    typeof onFail === 'function' ? onFail : reason => reason;
    let p = new MyPromise((resolve,reject) => {
      if (this.status === PENDING) {
        this.successCb.push(() => {
          let x = onSuccess(this.value);
          x instanceof MyPromise ? x.then((value) => resolve(value)) : resolve(x);
        })
        this.failCb.push(() => {
          let x = onFail(this.reason);
          x instanceof MyPromise ? x.then((value) => resolve(value), (reason) => reject(reason)) : reject(x);
        })
      }
      if (this.status === SUCCESS) {
        let x = onSuccess(this.value);
        resolve(x);
      }
      if (this.status === FAIL) {
        let x = onFail(this.reason);
        reject(x);
      }
    });
    return p;
  }

  static resolve(value) {
    if (value instanceof MyPromise) {
      return value;
    } else {
      return MyPromise((resolve) => {
        resolve(value)
      })
    }
  }

  static catch(errorFn) {
    return this.then(null, errorFn);
  }

  static all(fns) {
    let count = 0;
    let length = fns.length;
    let array = new Array(length);
    return new MyPromise((resolve,reject) => {
      fns.forEach((fn) => {
        fn.then((value) => {
          array.push(value);
          count++;
         }, (reason) => {
          reject(reason);
        })
      }) 
      if (count === length) {
        resolve(array);
      }

    })
    
  }

  static any(fns) {
    let length = fns.length;
    let arr = [];
    let count = 0;
    return new MyPromise((resolve, reject) => {
      fns.forEach((fn)=>{
        Promise.resolve(fn).then((value) => {
          resolve(value);
        }, (error) => {
          count++;
          arr.push(error);
          if (count === length) {
            reject(arr);
          }
        })
      })
    })
    
  }

  static allSettled(fns) {
    let length = fns.length;
    let arr = new Array(length);
    let count = 0;
    return new MyPromise((resolve, reject) => {
      fns.forEach((fn, index) => {
        Promise.resolve(fn).then((value) => {
          let item = {
            status: SUCCESS,
            value,
          }
          arr[index] = item;
          count++;
          if (count === length) {
            resolve(arr);
           }
        }, (error) => {
          let item = {
            status: FAIL,
            value:error,
          }
          arr[index] = item;
          count++;
          if (count === length) {
            resolve(arr);
           }
        })
         
      })
     
        
    })
  }
}




let p1 = Promise.reject(1);
let p2 = Promise.reject(3);
let p3 = Promise.reject(1);
MyPromise.any([p1, p2, p3]).then((arr) => {
  console.log(arr);
}, (err) => {
  console.log(err);
})
