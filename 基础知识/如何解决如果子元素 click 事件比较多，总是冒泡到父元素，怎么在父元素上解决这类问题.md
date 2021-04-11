#### 解决这个问题先知道两个概念

##### event.currentTarget：获取到的是 click 事件绑定的 DOM 对象

##### event.target：获取到的为当前所点击的 DOM 对象

> 可以在父元素中判断 event.currentTarget == event.target 是否为 true,来判断点击的元素是否为父元素，否则不执行函数链的内容

```

```
