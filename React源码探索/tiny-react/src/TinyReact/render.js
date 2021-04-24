import diff from "./diff";
const render = (virtualDom, container, oldDom) => {
  diff(virtualDom, container, oldDom);
};

export default render;
