const isFunction = (virtualDom) => {
  return virtualDom && typeof virtualDom.type === "function";
};

export default isFunction;
