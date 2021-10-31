/*
 * @Author: your name
 * @Date: 2021-10-20 22:51:32
 * @LastEditTime: 2021-10-30 21:36:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现/webpack/Compiler.js
 */
const {
  Tapable,
  SyncHook,
  SyncBailHook,
  AsyncSeriesHook,
  AsyncParallelHook,
} = require("tapable");
const Compilation = require("./Compilation");

const NormalModuleFactory = require("./NormalModuleFactory");
const Stats = require("./Stats");
class Compiler extends Tapable {
  constructor(context) {
    super();
    this.hooks = {
      // context项目根目录的的绝对路径
      entryOption: new SyncBailHook(["context", "entry"]),
      beforeRun: new AsyncSeriesHook(["compiler"]), //运行前
      run: new AsyncSeriesHook(["compiler"]), //运行
      beforeCompiler: new AsyncSeriesHook(["params"]),
      compiler: new SyncHook(["params"]), //编译
      done: new AsyncSeriesHook(["stats"]), // 当编译完之后会触发这个钩子
      make: new AsyncParallelHook(["compilation"]),
      thisCompilation: new SyncHook(["compilation", "params"]), //开始一次新的编译
      compilation: new SyncHook(["compilation", "params"]), //创建完成一个新的compilation
      afterCompiler: new AsyncSeriesHook(["compilation"]), // 异步串行钩子
    };
    this.options = {};
    this.context = context; //设置上下文路径
  }
  // run方法是开始编译的入口
  run(callback) {
    console.log("开始编译");
    //这是编译完成后最终的回调函数
    const finalCallback = (err, stats) => {
      callback(err, stats);
    };

    const onCompiled = (err, compilation) => {
      console.log("onCompiled");
      finalCallback(err, new Stats(compilation)); //TODO
    };

    this.hooks.beforeRun.callAsync(this, (err) => {
      this.hooks.run.callAsync(this, (err) => {
        this.compile(onCompiled);
      });
    });
  }

  compile(onCompiled) {
    const params = this.newCompilationParams();
    this.hooks.beforeCompiler.callAsync(params, (err) => {
      this.hooks.compiler.call(params);
      // 创建一个新compilation对象
      const compilation = this.newCompilation(params);
      // 触发make钩子的回调函数执行
      this.hooks.make.callAsync(compilation, (err) => {
        console.log("make完成");
        onCompiled(err, compilation);
      });
    });
  }

  createCompilation() {
    return new Compilation(this);
  }

  newCompilation(params) {
    const compilation = this.createCompilation();
    this.hooks.thisCompilation.call(compilation, params);
    this.hooks.compilation.call(compilation, params);
    return compilation;
  }

  newCompilationParams() {
    const params = {
      // 在创建compilation之前已经创建了一个普通模块工厂
      normalModuleFactory: new NormalModuleFactory(),
    };
    return params;
  }
}
module.exports = Compiler;
