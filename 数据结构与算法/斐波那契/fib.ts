export {};
// 暴力解法
function fib(num: number): number {
  // 递归首先写上结束条件
  if (num <= 1) {
    return num;
  }
  return fib(num - 2) + fib(num - 1);
}

fib(1);
