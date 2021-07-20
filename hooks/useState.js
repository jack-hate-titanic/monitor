const useState = (initValue) => {
  let _val = initValue;

  state = () => {
    return _val;
  };

  setState = (newVal) => {
    _val = newVal;
  };
  return [state, setState];
};

const [foo, setFoo] = useState(0);
console.log(foo());
setFoo(1);
console.log(foo());
