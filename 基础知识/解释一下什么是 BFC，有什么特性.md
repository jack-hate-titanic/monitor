### 解释一下什么是 BFC，有什么特性

> #### 也就是拥有某些特定属性的东西就是 BFC ，能触发 BFC 的属性 比如

1. float：设置浮动
2. overflow：auto，hidden
3. position：设置 absolute 或者 fixed
4. display：inline-block. flex
5. 根元素 html 也是 bfc

> #### 特性为：

1. 具备 BFC 特性的元素，即独立的渲染区域，或者看成是一个容器，容器内的不会影响到外面的容器。(也就是父容器如果设置为 bfc，会完全包裹子元素)
2. BFC 内部的子元素（这个子元素不一定是 bfc)，在垂直方向边距会发生重叠(取最大值)
   如果想要禁止发生重叠，可以把子元素改成 bfc，因为只有 bfc 内部的才会重叠
3. 计算 BFC 的高度时，浮动元素也参与计算。(所以这就是为什么给父元素加上 overflow:hidden 后，就可以清除浮动)
