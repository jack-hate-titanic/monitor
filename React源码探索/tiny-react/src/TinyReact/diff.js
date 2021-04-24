import mountElement from "./mountElement";

const diff = (virtualDom, container, oldDom) => {
  const oldVirtualDom = oldDom && oldDom._virtualDom;
  // 判断oldDom是否存在
  if (!oldDOM) {
    // 安装节点
    mountElement(virtualDom, container);
  } else if (oldVirtualDom && virtualDom.type === oldVirtualDom.type) {
    if (virtualDom.type === "text") {
      // 文本节点 对比文本内容是否发生变化
      updateTextNode(virtualDom, oldVirtualDom, oldDom);
    }
  }
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
