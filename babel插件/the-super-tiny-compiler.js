// 词法分析部分
function tokenizer(input) {
  // 当前正在处理的字符索引
  let current = 0;
  // 输入结果集合，存放词法单元
  let tokens = [];
  // 遍历字符串，调出词法单元
  while (current < input.length) {
    let char = input[current];
    // 匹配左括号，右括号
    if (char === "(") {
      tokens.push({ type: "paren", value: "(" });
      current++;
      continue;
    }
    if (char === ")") {
      tokens.push({
        type: "paren",
        value: ")",
      });
      current++;

      continue;
    }

    // 跳过空白字符
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    // 匹配数值
    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {
      let value = "";

      // 匹配连续数字，作为数值
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({ type: "number", value });

      continue;
    }

    // 匹配形如"abc"的字符串
    if (char === '"') {
      let value = "";

      // 吃掉左双引号
      char = input[++current];
      // 收集两个双引号之间的所有内容，作为字符串值
      while (char !== '"') {
        value += char;
        char = input[++current];
      }
      // 吃掉右边双引号
      char = input[++current];
      tokens.push({ type: "string", value });

      continue;
    }

    // 匹配函数名，要求只含大小写字母
    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = "";

      // 收集连续字母
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({ type: "name", value });

      continue;
    }

    // 无法识别的字符，报错
    throw new TypeError("I dont know what this character is: " + char);
  }

  return tokens;
}

// 语法分析部分
function parser(tokens) {
  // 当前正在处理的token索引
  let current = 0;

  // 递归遍历（因为函数调用允许嵌套），把token转成AST节点
  function walk() {
    let token = tokens[current];

    // 数值
    if (token.type === "number") {
      current++;

      // 生成一个AST节点，表示数值字面量
      return {
        type: "NumberLiteral",
        value: token.value,
      };
    }

    // 字符串
    if (token.type === "string") {
      current++;

      return {
        type: "StringLiteral",
        value: token.value,
      };
    }

    // 函数调用
    if (token.type === "paren" && token.value === "(") {
      // 丢掉左括号，取下一个token作为函数名
      token = tokens[++current];

      let node = {
        type: "CallExpression",
        name: token.value,
        params: [],
      };

      // 看下一个token
      token = tokens[++current];

      // 右括号之前的所有token解析完都是参数
      while (
        token.type !== "paren" ||
        (token.type === "paren" && token.value !== ")")
      ) {
        node.params.push(walk());
        token = tokens[current];
      }
      // 吃掉右括号
      current++;

      return node;
    }

    // 无法识别的token，报错
    throw new TypeError(token.type);
  }

  // AST的根节点
  let ast = {
    type: "Program",
    body: [],
  };
  // 填充ast.body，允许多条语句，所以放循环里
  while (current < tokens.length) {
    ast.body.push(walk());
  }

  return ast;
}

function traverser(ast, visitor) {
  // 遍历AST节点数组
  function traverseArray(array, parent) {
    array.forEach((child) => {
      traverseNode(child, parent);
    });
  }

  function traverseNode(node, parent) {
    // 从visitor取出对应的一组方法
    let methods = visitor[node.type];
    // 通知visitor我们正在访问node
    if (methods && methods.enter) {
      methods.enter(node, parent);
    }

    switch (node.type) {
      // 根节点
      case "Program":
        traverseArray(node.body, node);
        break;
      // 函数调用
      case "CallExpression":
        traverseArray(node.params, node);
        break;
      // 数值和字符串，没孩子，不用处理
      case "NumberLiteral":
      case "StringLiteral":
        break;

      // 无法识别的AST节点，报错
      default:
        throw new TypeError(node.type);
    }

    // 通知visitor我们要离开node了
    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }

  // 开始遍历
  traverseNode(ast, null);
}

// 输入Lisp AST，输出C AST
function transformer(ast) {
  // 新AST的根节点
  let newAst = {
    type: "Program",
    body: [],
  };

  // 偷懒以简单粗暴的方式维持新旧AST的联系，方便在遍历过程中操作新AST
  ast._context = newAst.body;

  // 创建vistor，开始遍历
  traverser(ast, {
    // 数值和字符串，直接原样插入新AST
    NumberLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: "NumberLiteral",
          value: node.value,
        });
      },
    },
    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: "StringLiteral",
          value: node.value,
        });
      },
    },

    // 函数调用
    CallExpression: {
      enter(node, parent) {
        // 创建不同的AST节点
        let expression = {
          type: "CallExpression",
          callee: {
            type: "Identifier",
            name: node.name,
          },
          arguments: [],
        };

        // 函数调用可以有孩子，建立节点对应关系，供子节点使用
        node._context = expression.arguments;

        // 顶层函数调用算是语句，包装成特殊的AST节点
        if (parent.type !== "CallExpression") {
          expression = {
            type: "ExpressionStatement",
            expression: expression,
          };
        }

        parent._context.push(expression);
      },
    },
  });

  return newAst;
}

// 递归遍历新AST，输出代码字符串
function codeGenerator(node) {
  switch (node.type) {
    // 根节点，把body里的所有内容都生成一遍，按行输出
    case "Program":
      return node.body.map(codeGenerator).join("\n");

    // 表达式语句，处理其表达式内容，并添上分号
    case "ExpressionStatement":
      return codeGenerator(node.expression) + ";";

    // 函数调用，添上括号，参数用逗号分隔
    case "CallExpression":
      return (
        codeGenerator(node.callee) +
        "(" +
        node.arguments.map(codeGenerator).join(", ") +
        ")"
      );

    // 标识符，数值，原样输出
    case "Identifier":
      return node.name;
    case "NumberLiteral":
      return node.value;

    // 字符串，用双引号包起来再输出
    case "StringLiteral":
      return '"' + node.value + '"';

    // 无法识别的新AST节点，报错
    default:
      throw new TypeError(node.type);
  }
}

function compiler(input) {
  let tokens = tokenizer(input);
  let ast = parser(tokens);
  let newAst = transformer(ast);
  let output = codeGenerator(newAst);

  return output;
}

const input = "(add 2 (subtract 4 2))";
let output = compiler(input);
// add(2, subtract(4, 2));
console.log(output);
