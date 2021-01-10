// 1.promise的基本特征
// 2.有三种状态：pending(进行中), fulfilled(已成功) ，rejected(失败)
// 3.promise对象接受一个函数作为参数，该函数接受两个参数，分别是成功的回调和失败的回调
// 4.then的参数是两个函数，是个是onFulfilled函数，一个是onRejected函数
// 5.

class Promise1 {
  // executor是一个函数
  constructor(executor) {
    this.state = "pending"; //初始化状态为pending
    this.value = undefined; //初试值
    this.error = undefined; // 初试错误
    // 函数resolve
    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
      }
    };
    // 函数reject
    const reject = (value) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.error = value;
      }
    };

    try {
      // 自执行，然后把两个回调函数放进去
      executor(resolve, reject);
    } catch (error) {
      reject(err);
    }
  }

  then(onFulfilled, onReject) {
    if (this.state === "fulfilled") {
      onFulfilled(this.value);
      return this;
    }
    if (this.state === "rejected") {
      onReject(this.error);
      return this;
    }
  }
}

const p = new Promise1((resolve, reject) => {
  resolve(11111);
});

p.then(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error, "reject");
  }
).then((response) => {
  console.log(response);
});

// console.log(p);
