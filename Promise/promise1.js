function promise1() {
  return new Promise(() => {
    setTimeout(() => {
      console.log(1);
    }, 1000);
  });
}

promise1();
