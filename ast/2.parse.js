/*
 * @Author: your name
 * @Date: 2021-12-07 21:10:12
 * @LastEditTime: 2021-12-07 21:40:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ast/2.parse.js
 */

const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
let sourceCode = `10+1`;
let ast = parser.parse(sourceCode, { sourceType: "module" });
traverse(ast, {
  ExpressionStatement(path) {
    console.log(path);
  },
});
