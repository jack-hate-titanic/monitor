#!/usr/bin/env node
const { program } = require("commander");
const inquirer = require("inquirer");
const colors = require("colors");
const puppeteer = require("puppeteer");

program
  .version("0.1.0")
  .command("init <name>")
  .description("初始化模板")
  .action((name) => {
    inquirer
      .prompt([
        {
          name: "description",
          message: "请输入描述",
        },
        {
          name: "author",
          message: "请输入作者",
        },
      ])
      .then((paramater) => {
        console.log(paramater);
      });
  });

program
  .command("test")
  .description("测试通道")
  .action(async () => {
    const text = `
    _          __  _____  
    | |        / / /  ___/ 
    | |  __   / /  | |___  
    | | /  | / /   \___  \ 
    | |/   |/ /     ___| | 
    |___/|___/     /_____/ 
    `;
    console.log(colors.rainbow(text));
    // 启动浏览器
    const browser = await puppeteer.launch({
      headless: false, // 打开实体浏览器
    });

    // 创建新标签页并打开
    const page = await browser.newPage();
    await page.goto("http://www.baidu.com");

    // 获取快照并存储到本地
    await page
      .screenshot({
        path: "baidu.png",
      })
      .then(() => {
        console.log(colors.green("下载成功"));
      })
      .finally(() => {
        // 关闭窗口
        browser.close();
      });
  });
program.parse(process.argv); // 解析变量
