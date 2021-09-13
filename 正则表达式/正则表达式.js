/*
 * @Author: your name
 * @Date: 2020-12-31 22:33:49
 * @LastEditTime: 2021-09-06 22:08:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /frontDemo/正则表达式/正则表达式.js
 */
//[]
const str = "the.re";
const patter = /\.re$/;
console.log(patter.test(str));

// 代码	说明
// *	重复零次或更多次   如何记忆0*1 0
// +	重复一次或更多次（至少有一次）0+1 1
// ?	重复零次或一次（可有可无）? 三目运算符返回0或者1
// {n}	重复 n 次
// {n,m}	至少 n 次最多 m 次
// {n,}	至少 n 次

// 参考：https://juejin.cn/post/6844904153131515912#heading-8
// 每天解决一个表达式
// 手机号
// 正整数
// 两位小数
