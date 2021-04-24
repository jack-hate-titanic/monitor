import mountNativeElement from "./mountNativeElement";
import isFunctionalComponent from "./isFunctionalComponent";
import isFunction from "./isFunction";

const mountComponent = (virtualDom, container) => {
  let nextVirtualDom = null;
  // 区分类组件和函数组件
  if (isFunctionalComponent(virtualDom)) {
    // 函数组件 调用buildFunctionalComponent方法处理函数组件
    nextVirtualDom = buildFunctionComponent(virtualDom);
  } else {
    // 类组件
    nextVirtualDom = buildStatefulComponent(virtualDom);
  }

  // 判断得到的virtual dom是否是组件
  if (isFunction(nextVirtualDom)) {
    mountComponent(nextVirtualDom, container);
  } else {
    mountNativeElement(nextVirtualDom, container);
  }
};

// 函数组件处理
const buildFunctionComponent = (virtualDom) => {
  // 通过virtual dom中的type属性获取到组件函数并调用
  return virtualDom && virtualDom.type(virtualDom.props || {});
};

// 处理类组件
const buildStatefulComponent = (virtualDom) => {
  // 实例化类组件 得到类组件实例对象 并将props属性传递进类组件
  const component = new virtualDom.type(virtualDom.props);
  // 调用类组件中的render方法得到要渲染的virtual dom
  const nextVirtualDom = component.render();
  return nextVirtualDom;
};

export default mountComponent;
