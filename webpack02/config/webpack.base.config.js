/*
 * @Author: your name
 * @Date: 2021-10-19 22:49:43
 * @LastEditTime: 2021-10-20 08:35:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack02/config/webpack.base.config.js
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const { HotModuleReplacementPlugin } = require("webpack");

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  entry: path.join(__dirname, "../src/index.js"),
  output: {
    filename: `js/[name]${isDev ? "" : ".[hash:8]"}.js`,
    path: path.join(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: "/.js$/",
        include: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1024,
              name: "[name].[contenthash:8].[ext]",
              outputPath: "assets/images",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"),
    }),
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
  ],
  devServer: {
    open: true,
    hot: true,
  },
};
