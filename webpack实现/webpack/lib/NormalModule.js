/*
 * @Author: your name
 * @Date: 2021-10-24 17:29:36
 * @LastEditTime: 2021-10-24 18:41:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现/webpack/lib/NormalModule.js
 */
class NormalModule {
  constructor({ name, context, rawRequest, parser, resource }) {
    this.name = name;
    this.context = context;
    this.rawRequest = rawRequest;
    // 这是ast解析器，可以把源代码转化成AST抽象语法树
    this.parser = parser;
    this._source; //此模块对应的源代码
    // 此模块对应的抽象语法书
    this._ast;
    this.resource = resource;
  }

  /**
   * 编译模块
   * @param {*} compilation
   * @param {*} callback
   */
  build(compilation, callback) {
    this.doBuild(compilation, (err) => {
      this._ast = this.parser.parse(this._source);
      callback();
    });
  }
  /**
   * 读取模块的源代码
   * @param {} compilation
   * @param {*} callback
   */
  doBuild(compilation, callback) {
    this.getSource(compilation, (err, source) => {
      // 把最原始的代码存放到当前面模块的-source属性上
      this._source = source;
      callback();
    });
  }
  // 读取真正的源代码
  getSource(compilation, callback) {
    compilation.inputFileSystem.readFile(this.resource, "utf-8", callback);
  }
}

module.exports = NormalModule;
/**
 * 1.从硬盘上把模块内容读取出来，读成一个文本
 * 2.可能它不是一个js模块，所以会可能要走loader的转换，最终肯定要得到一个js模块代码，得不到就报错了
 * 3.把这个js模块代码经过parser处理转成抽象的ast
 * 4.分析ast里面的依赖，也就是找require import节点，分析依赖的模块
 * 5.递归的依赖的模块
 * 6.不停的一次递归执行上面5步，知道所有的模块都编译完成
 */
