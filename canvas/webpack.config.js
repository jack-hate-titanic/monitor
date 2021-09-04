const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  plugins: [
    // 在构建之前将dist文件夹清理掉
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["./dist"],
    }),
    // 指定HTML模板, 插件会将构建好的js文件自动插入到HTML文件中
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },

  devServer: {
    static: path.join(__dirname, "dist"), //对外提供的访问内容的路径
    // 不启动压缩
    compress: false,
    host: "localhost",
    port: 8080,
  },
};
