import mountElement from "./mountElement";
import updateNodeElement from "./updateNodeElement";

const diff = (virtualDom, container, oldDom) => {
  const oldVirtualDom = oldDom && oldDom._virtualDom;
  console.log(oldVirtualDom, "_virtualDom");
  // 判断oldDom是否存在
  if (!oldDom) {
    // 安装节点
    mountElement(virtualDom, container);
  } else if (oldVirtualDom && virtualDom.type === oldVirtualDom.type) {
    debugger;
    if (virtualDom.type === "text") {
      // 文本节点 对比文本内容是否发生变化
      updateTextNode(virtualDom, oldVirtualDom, oldDom);
    } else {
      // 更新元素节点属性
      updateNodeElement(oldDom, virtualDom, oldVirtualDom);
    }
    // 递归对比 Virtual DOM 的子元素
    virtualDom.children.forEach((child, i) => {
      diff(child, oldDom, oldDom.childNodes[i]);
    });
  } else if (
    // 如果 Virtual DOM 类型不一样
    virtualDom.type !== oldVirtualDom.type &&
    // 并且 Virtual DOM 不是组件 因为组件要单独进行处理
    typeof virtualDom.type !== "function"
  ) {
    // 根据 Virtual DOM 创建真实 DOM 元素
    const newDOMElement = createDOMElement(virtualDom);
    // 用创建出来的真实 DOM 元素 替换旧的 DOM 元素
    oldDom.parentNode.replaceChild(newDOMElement, oldDom);
  }

  // // 获取就节点的数量
  // let oldChildNodes = oldDom.childNodes;
  // // 如果旧节点的数量多于要渲染的新节点的长度
  // if (oldChildNodes.length > virtualDom.children.length) {
  //   for (
  //     let i = oldChildNodes.length - 1;
  //     i > virtualDom.children.length - 1;
  //     i--
  //   ) {
  //     oldDom.removeChild(oldChildNodes[i]);
  //   }
  // }
};

const updateTextNode = (virtualDom, oldVirtualDom, oldDom) => {
  // 如果文本节点内容不同
  if (virtualDom.props.textContent !== oldVirtualDom.props.textContent) {
    oldDom.textContent = virtualDom.props.textContent;
  }
  // 同步真实dom对应的virtual dom
  oldDom._virtualDom = virtualDom;
};

export default diff;
