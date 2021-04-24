import mountNativeElement from "./mountNativeElement";
import mountComponent from "./mountComponent";
import isFunction from "./isFunction";

const mountElement = (virtualDom, container) => {
  if (isFunction(virtualDom)) {
    mountComponent(virtualDom, container);
  } else {
    // 区分组件和原生节点的地方
    mountNativeElement(virtualDom, container);
  }
};

export default mountElement;
