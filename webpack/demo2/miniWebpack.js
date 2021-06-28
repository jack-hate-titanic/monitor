const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generate = require("@babel/generator").default;
const config = require("./webpack.config");

const fileContent = fs.readFileSync(config.entry, "utf-8");
const ast = parser.parse(fileContent, { sourceType: "module" });

traverse(ast, {
  ImportDeclaration(p) {
    // 获取被import的文件
    const importFile = p.node.source.value;

    // 获取文件路径
    let importFilePath = path.join(path.dirname(config.entry), importFile);
    importFilePath = `./${importFilePath}.js`;

    // 构建一个变量定义的AST节点
    const variableDeclaration = t.variableDeclaration("var", [
      t.variableDeclarator(
        t.identifier(
          `__${path.basename(importFile)}__WEBPACK_IMPORTED_MODULE_0__`
        ),
        t.callExpression(t.identifier("__webpack_require__"), [
          t.stringLiteral(importFilePath),
        ])
      ),
    ]);

    // 将当前节点替换为变量定义节点
    p.replaceWith(variableDeclaration);
  },
});

const newCode = generate(ast).code;
console.log(newCode);
