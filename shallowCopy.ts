/*
 * @Author: your name
 * @Date: 2022-05-05 21:54:03
 * @LastEditTime: 2022-05-05 23:00:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/shallowCopy.ts
 * 
 */
// 基本类型
// 引用类型： 可遍历的：set，map，array  不可遍历的：date， regExp, object


function getType(target:any) {
  return Object.prototype.toString.call(target).replace('[object ', '').replace(']', '').toLowerCase();
}

function isIterable(target:any) {
  return !!target[Symbol.iterator];
}

function isObject(target:any) {
  return target instanceof Object;
}

function getInit(target:any) {
  const Ctor = target.constructor;
  return new Ctor();
}

function deepCopy(source: any): any {
  if (!isObject(source)) {
    return source;
  }
  if (isIterable(source)) {
    let res = getInit(source);
    // 如果是map类型
    if (getType(source) === 'map') {
      source.forEach((value: any,key: any) => {
        res.set(key,deepCopy(value));
      })
    };

    if (getType(source) === 'set') {
      source.forEach((value: any) => {
        res.add(value);
      })
    }
    for (let index of source) {
      res.push(deepCopy(source[index]));
    }
    return res;
  } else {
    return deepCloneOtherType(source);
  }
}

function deepCloneOtherType(source:any){
  switch(getType(source)){
    case 'date':
      return new Date(source);
    case 'regexp':
      return new RegExp(source)
    default:
      let target: any = {};
      for (let key in source) {
        if (source.hasOwnProperty(key)) {
          target[key] = deepCopy(source[key]);
        }
      }
      return target;
  }
}



let a = { b: 2, c: { d: 4 } };
let e = deepCopy(a);

// console.log(e.c === a.c);
let b = {
  a: 1,
  b: function () { },
  c: [],
  d: new Date(),
  e: /\.js$/,
  f: new Set([1, 2]),
  g: new Map(),
}

let x = deepCopy(b);
console.log(x.f === b.f);

