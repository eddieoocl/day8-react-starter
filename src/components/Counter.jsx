import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  const { size, setSum } = props;

  useEffect(() => {
    setCounter(0);
  }, [size]);

  const increase = () => {
    setCounter((count) => count + 1);
    setSum((sum) => sum + 1);
  };
  const decrease = () => {
    setCounter((count) => count - 1);
    setSum((sum) => sum - 1);
  };

  return (
    <div>
      <button onClick={increase}>+</button>
      {counter}
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default Counter;
