import { useState } from "react";

const Counter = (props) => {
  const [counter , setCounter] = useState(0)
  const add = () => setCounter((counter) => counter + 1);
  const sub = () => setCounter((counter) => counter - 1);

  let newCounter = {
    min :0 ,
    max :0,
    initial :0,
    steps :0
  }
  return(
    <div>
      {counter}
      <button  disabled={counter >= props.max} onClick={add}>add</button>
      <button disabled={counter <= props.min} onClick={sub}>subtract</button> <br />
      min
      <input onInput={(e) => {newCounter.min = Number(e.target.value);console.log(newCounter) } } type="number" /> <br /> <br />
      max
      <input type="text" /> <br /> <br />
      initial
      <input type="text" /> <br /> <br />
      steps
      <input type="text" /> <br /> <br />
      
    </div>
  )

 

    
};
export default Counter;
