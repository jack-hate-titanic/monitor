<!--
 * @Author: your name
 * @Date: 2021-10-10 19:12:09
 * @LastEditTime: 2021-10-10 19:59:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /frontDemo/koa实现/koa/README.md
-->

1.如何把 req,res 编程 ctx（ctx 是 koa 自己封装对象，包含了 node 中 http 模块的原生 req,res）
ctx.req.url 是 http 原生的 ctx.request.path 是 koa 新封装的

ctx.request.req.url 并且通过自己封装的可以拿到原生的
ctx.path 会被代理到 ctx.request

2.每次请求的上下文应该是一个独立的上下文
每个应用创建的时候，使用的上下文应该是不同的
