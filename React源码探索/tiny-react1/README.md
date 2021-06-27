首先要构建环境

必须使用 babel,用于 jsx 语法转换为虚拟 dom

- 1.创建.babelrc 文件
- 2.安装@babel/preset-env 和 @babel/preset-react 文件

babel-preset-env 的由来

```
首先，介绍下历史背景，对了解和学习 babel-preset-env 有帮助。

最初，为了让开发者能够尽早用上新的JS特性，babel团队开发了babel-preset-latest。这个preset比较特殊，它是多个preset的集合(es2015+)，并且随着ECMA规范的更新更增加它的内容。

比如，当前(2018.06.02)，它包含的preset包括：es2017、es1016、es2015。

到了明年，可能它包含的preset就包括：es2018、es2017、es2016、es2015。

随着时间的推移，babel-preset-latest 包含的插件越来越多，这带来了如下问题：

加载的插件越来越多，编译速度会越来越慢；
随着用户浏览器的升级，ECMA规范的支持逐步完善，编译至低版本规范的必要性在减少（比如ES6 -> ES5），多余的转换不单降低执行效率，还浪费带宽。
因为上述问题的存在，babel官方推出了babel-preset-env插件。它可以根据开发者的配置，按需加载插件。配置项大致包括：

需要支持的平台：比如node、浏览器等。
需要支持的平台的版本：比如支持node@6.1等。
默认配置的情况下，它跟 babel-preset-latest 是等同的，会加载从es2015开始的所有preset。


```

```
babel-loader 是一个npm 包，它使得webpack 可以通过babel 转译JavaScript 代码
```

```
babel-core 是babel核心文件，是必须要写的
```

因为要支持 webpack 等语法，所以要配置 webpack

- 1.创建 webpack.config.js
- 2.安装 webpack webpack-cli webpack-dev-server

纪念一下连续加班的日子
