// es7,es8,es9,es10的新特性
// 我就简单介绍一些我们可能未来会用的上的
// 1.求幂运算符**

// 以前我们的求幂运算符是这个样子的
console.log(Math.pow(2, 10)); // 输出1024
// 现在新方法变简单了
console.log(2 ** 10);

//2.Array.prototype.flat()
const numbers1 = [1, 2, [3, 4, [5, 6]]];
console.log(numbers1.flat()); // [1, 2, 3, 4, [5, 6]]
const numbers2 = [1, 2, [3, 4, [5, 6]]];
console.log(numbers2.flat(2)); // [1, 2, 3, 4, 5, 6]

// 3.try…catch
try {
  console.log("Foobar");
} catch {
  console.error("Bar");
}

// 4.for await of
function Gen(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}
async function test() {
  let arr = [Gen(2000), Gen(100), Gen(3000)];
  for await (let item of arr) {
    console.log(Date.now(), item);
  }
}
test();
// 1575536194608 2000
// 1575536194608 100
// 1575536195608 3000

//5.Promise.prototype.finally()
// 这个我觉得大家应该用的很多了吧，我就不过多介绍了
Promise.prototype.finally();

//6.可选链操作符（Optional Chaining）
//可选链 可让我们在查询具有多个层级的对象时，不再需要进行冗余的各种前置校验。
//以前我们进行验证
let nestedProp = obj && obj.first && obj.first.second;
// 现在我们只需要
let nestedProp = obj?.first?.second;

//7,空位合并操作符（Nullish coalescing Operator）
// 以前当我们查询某个属性时，经常会给没有该属性就设置一个默认的值，比如下面两种方式：
let c = a ? a : b; // 方式1
let c = a || b; // 方式2
//现在
let c = a ?? b;
// 等价于let c = a !== undefined && a !== null ? a : b;

// 8.Dynamic import
el.onclick = () => {
  import("/modules/my-module.js")
    .then((module) => {
      // Do something with the module.
    })
    .catch((err) => {
      // load error;
    });
};
//import()可以用于script脚本中,import(module) 函数可以在任何地方调用。它返回一个解析为模块对象的 promise。
//这种使用方式也支持 await 关键字。

let module = await import("/modules/my-module.js");

// 9.globalThis
// globalThis 是一个全新的标准方法用来获取全局 this 。之前开发者会通过如下的一些方法获取：

// 全局变量 window：是一个经典的获取全局对象的方法。但是它在 Node.js 和 Web Workers 中并不能使用
// 全局变量 self：通常只在 Web Workers 和浏览器中生效。但是它不支持 Node.js。一些人会通过判断 self 是否存在识别代码是否运行在 Web Workers 和浏览器中
// 全局变量 global：只在 Node.js 中生效

// 而 globalThis 目的就是提供一种标准化方式访问全局对象，有了 globalThis 后，你可以在任意上下文，任意时刻都能获取到全局对象。

// 如果您在浏览器上，globalThis将为window，如果您在Node上，globalThis则将为global。因此，不再需要考虑不同的环境问题。

// worker.js
globalThis === self;
// node.js
globalThis === global;
// browser.js
globalThis === window;

// 参考文章
// [盘点ES7、ES8、ES9、ES10新特性](https://github.com/ljianshu/Blog/issues/76)
