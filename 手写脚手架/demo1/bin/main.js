#!/usr/bin/env node
const { program } = require("commander");
const inquirer = require("inquirer");
const chalk = require("chalk");
const ora = require("ora");

program
  .version(require("../package.json").version, "-v, --version")
  .command("init <name>")
  .description("初始化项目文件")
  .action((name) => {
    console.log(name);

    inquirer
      .prompt([
        {
          type: "input",
          name: "author",
          message: "请输入作者姓名？",
        },
        {
          type: "confirm",
          name: "continune",
          message: "确定么?",
        },
      ])
      .then((result) => {
        console.log(result);
        console.log(chalk.red("some error"));

        const p = ora("创建中...");
        p.start();
        setTimeout(() => {
          p.stop();
        }, 3000);
      });
  });

program.parse(process.argv);
