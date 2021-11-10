/*
 * @Author: your name
 * @Date: 2021-11-05 10:37:05
 * @LastEditTime: 2021-11-05 16:31:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/基础知识/generator.js
 */
// function* foo() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// console.log(gen.next());

var context = {
  prev: 0,
  next: 0,
  done: false,
  stop: function stop() {
    this.done = true;
  },
};

function gen(context) {
  while (1) {
    switch ((context.prev = context.next)) {
      case 0:
        context.next = 1;
        return 1;
      case 1:
        context.next = 2;
        return 2;
      case 2:
        context.next = 3;
        context.stop();
        return undefined;
    }
  }
}

let foo = function () {
  return {
    next: function () {
      var value = gen(context);
      done = context.done;
      return {
        value,
        done,
      };
    },
  };
};

const a = foo();
console.log(a.next());
console.log(a.next());
console.log(a.next());
