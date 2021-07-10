#### 原理

#### 为什么要有 BFC？

Block formatting context 直译为"块级格式化上下文"。它是一个独立的渲染区域，只有 Block-level box 参与， 它规定了内部的 Block-level Box 如何布局，并且与这个区域外部毫不相干。

#### 其实就是块级元素的渲染规则，特性为

    具备 BFC 特性的元素，即独立的渲染区域，或者看成是一个容器，容器内的不会影响到外面的容器。(也就是父容器如果设置为 bfc，会完全包裹子元素)内部box会在垂直方向，一个接一个地放置。
    BFC 内部的子元素（这个子元素不一定是 bfc)，在垂直方向边距会发生重叠(取最大值) 如果想要禁止发生重叠，可以把子元素改成 bfc，因为只有 bfc 内部的才会重叠
    计算 BFC 的高度时，浮动元素也会参与计算
    形成了BFC的区域不会与float box重叠(所以这就是为什么给父元素加上 overflow:hidden 后，就可以清除浮动)

#### 生成 BFC 的方法

    浮动元素（元素的 float 不是 none）
    绝对定位元素（元素的 position 为 absolute 或 fixed）
    行内块元素（元素的 display 为 inline-block）
    overflow 计算值(Computed)不为 visible 的块元素
    弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）
