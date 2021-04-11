### day5.介绍一下防抖节流原理，区别以及应用，并用 js 实现

#### 1) 防抖

##### 原理：在事件被触发 n 秒后再执行回调，如果在这 n 秒内被触发，则重新计时

##### 使用场景：按钮提交场景

```
const debounce = (func, wait) => {
  let timeout = null;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
};
/// 返回一个函数，这种使用了函数柯里化,也使用了闭包
// const clickEvent = debounce(function (result) {
//   console.log(result);
// }, 1000);
// clickEvent("111");
// clickEvent("222");
//输出222
```

#### 2) 节流

##### 原理：规定在一个单位时间内，只能触发一次函数。如果在这个单位时间内触发多次函数，只有一次生效

##### 使用场景：浏览器窗口变大缩小，拖拽场景

```
const throttle = (func, wait) => {
  let context, args;
  let previous = 0;
  return function () {
    let now = new Date();
    context = this;
    args = arguments;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  };
};

const changeEvent = throttle(function (result) {
  console.log(result);
}, 1000);

changeEvent("111");
changeEvent("2222");
// 输出111
```

#### 区别：防抖动是将多次执行变为最后一次执行，节流是将多次执行变成每隔一段时间执行

// 可以观察上面两个函数的输出
