//[]
const str = "there";
const patter = /[a-h]/g;
console.log(str.match(patter));

console.log("---------------", "foo    bar".match(/(foo)\sbar/g));

// 代码	说明
// *	重复零次或更多次   如何记忆0*1 0
// +	重复一次或更多次（至少有一次）0+1 1
// ?	重复零次或一次（可有可无）返回true(1)或者false(0)
// {n}	重复 n 次
// {n,m}	至少 n 次最多 m 次
// {n,}	至少 n 次

// 参考：https://juejin.cn/post/6844904153131515912#heading-8
// 每天解决一个表达式
// 手机号
// 正整数
// 两位小数
