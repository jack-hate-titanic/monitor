import mountElement from "./mountElement";
import updateNodeElement from "./updateNodeElement";

const createDomElement = (virtualDom) => {
  let newElement = null;
  if (virtualDom.type === "text") {
    newElement = document.createTextNode(virtualDom.props.textContent);
  } else {
    newElement = document.createElement(virtualDom.type);
    updateNodeElement(newElement, virtualDom);
  }
  if (virtualDom.children) {
    virtualDom.children.forEach((child) => {
      // 之所以这样调用是不确定是组件还是节点
      mountElement(child, newElement);
    });
  }

  return newElement;
};

export default createDomElement;
