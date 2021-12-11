/*
 * @Author: your name
 * @Date: 2021-12-08 22:31:14
 * @LastEditTime: 2021-12-11 11:14:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ast/3.parse.js
 */
const babel = require("@babel/core");
const t = require("@babel/types");
const code = `var fn = (a, b) => a + b`; // const fn = function(a, b) { return a + b }
const arrowFnPlugin = {
  // 访问者模式
  visitor: {
    // 当访问到某个路径的时候进行匹配
    ArrowFunctionExpression(path) {
      // 拿到节点然后替换节点
      const node = path.node;
      // console.log("ArrowFunctionExpression -> node", node);
      // 拿到函数的参数
      const params = node.params;
      let body = node.body;
      if (!t.isBlockStatement(body)) {
        let returnStatement = t.returnStatement(body);
        body = t.blockStatement([returnStatement]);
      }
      let r = t.functionExpression(null, params, body, false, false);
      // 替换原来的函数
      path.replaceWith(r);
    },
  },
};
const r = babel.transform(code, {
  plugins: [arrowFnPlugin],
});
console.log(r.code); // const fn = function (a, b) { return a + b; };
