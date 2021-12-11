/*
 * @Author: your name
 * @Date: 2021-12-06 21:42:03
 * @LastEditTime: 2021-12-07 22:16:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/ast/1.parse.js
 */
let esprima = require("esprima");
let estraverse = require("estraverse");
let sourceCode = `var AST = "is Tree";`;
let ast = esprima.parse(sourceCode);
estraverse.traverse(ast, {
  enter: (node) => {
    if (node.type === "VariableDeclaration") {
      node.name = "nihao";
    }
  },
});
console.log(ast);
