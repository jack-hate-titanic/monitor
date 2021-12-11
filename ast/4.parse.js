/*
 * @Author: your name
 * @Date: 2021-12-11 11:03:13
 * @LastEditTime: 2021-12-11 13:56:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ast/4.parse.js
 */
// 自己实现箭头函数转换const c=(a,b)=>a+b =>const c=function(a,b){return a+b};
const babel = require("@babel/core");
const t = require("@babel/types");
const code = `const c=(a,b)=>a+b;`;
const arrowTransform = {
  visitor: {
    ArrowFunctionExpression(path) {
      const node = path.node;
      const params = node.params;
      const body = node.body;
      const r = t.returnStatement(body);
      const block = t.blockStatement([r]);
      const f = t.functionExpression(null, params, block, false, false);
      path.replaceWith(f);
    },
  },
};

const result = babel.transform(code, {
  plugins: [arrowTransform],
});
console.log(result.code);
