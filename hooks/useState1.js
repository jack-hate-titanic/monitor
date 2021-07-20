const MyReact = (function () {
  let _val, _deps;
  return {
    render(Component) {
      const Comp = Component();
      Comp.render();
      return Comp;
    },
    useState: (initialValue) => {
      _val = _val || initialValue;
      const setState = (value) => {
        console.log(value);
        _val = value;
      };
      return [_val, setState];
    },
    useEffect(callback, depArray) {
      const hasNoDeps = !depArray;
      const hasChangedDeps = _deps
        ? !depArray.every((el, i) => {
            console.log(el, 2222);
          })
        : true;
      if (hasNoDeps || hasChangedDeps) {
        callback();
        _deps = depArray;
      }
    },
  };
})();

// 使用
function Counter() {
  const [count, setCount] = MyReact.useState(0);
  MyReact.useEffect(() => {
    console.log("effect", count);
  }, [count]);
  return {
    click: () => setCount(count + 1),
    noop: () => setCount(count),
    render: () => console.log("render", { count }),
  };
}

let app = MyReact;
let func = app.render(Counter);
func.click();
func = app.render(Counter);
