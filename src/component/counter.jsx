import { useState } from "react";

const Counter = ({
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  start = 0,
  steps = 1,
}) => {
  const [counter, setCounter] = useState(start);
  const add = () => {
    if (counter + steps <= max) {
      setCounter((counter) => counter + steps);
    }
  };

  const sub = () => {
    if (counter - steps >= min) {
      setCounter((counter) => counter - steps);
    }
  };

  return (
    <div>
      {counter}
      <button disabled={counter >= max} onClick={add}>
        add
      </button>
      <button disabled={counter <= min} onClick={sub}>
        subtract
      </button>
    </div>
  );
};
export default Counter;
