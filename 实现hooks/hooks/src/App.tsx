import ReactDOM from 'react-dom';

let target: any[]=[];
let index = 0;

// preArray是一个二维数组，因为有多个effects，所以要存储多个useEffects的第二个参数
let preArray:any[] = [];
let effectIndex:number = 0;

function setState(currentIndex:number) {
  return function (state: any) {
     // update阶段
    target[currentIndex] = state;
    render();
  }
}

function useState(initialState) {
  let value = target[index] ? target[index] : initialState;
  target[index] = value;
  let set = setState(index);
  index++;
  return [value, set]
}

function render() {
  // 更新组件
  index = 0;
  effectIndex =0;
  ReactDOM.render(<App />, document.getElementById('root'));
}


function useEffect(callback:()=>void, arr?:any[]):void{
  if(typeof callback !== 'function'){
    throw new Error('the first parameter must be a function');
  }
 
  if(typeof arr==='undefined'){
    callback();
  } else {
    if(arr && !Array.isArray(arr)){
      throw new Error('the second parameter must be a array');
    } 
    // 如果当前index没有值，那么是第一次执行
    if(!preArray[effectIndex]){
      callback();
    } else {
      // 判断是否改变
      let changed = arr.some((item,index)=>item !== preArray[effectIndex][index]);
      if(changed){
        callback();
      }
    }
    // 更新preArray中的值
    preArray[effectIndex] = arr;
    // effectIndex进行++
    effectIndex++;
  }
 
}

function App() {
 
  const [count, setCount] = useState(0);
  const [name, setName] = useState('张三');

  useEffect(()=>{
    console.log('good');
  },[]);

  return (
    <div>
      <div>
        count:{count}
        <button onClick={() => setCount(count + 1)}>点击</button>
      </div>
      <div>
        name:{name}
        <button onClick={() => setName('李四')}>点击</button>
      </div>
    </div>
  );
}

export default App;