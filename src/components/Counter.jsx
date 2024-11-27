import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((prev) => prev + 1);
  };
  const decrease = () => {
    setCounter((prev) => prev - 1);
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
