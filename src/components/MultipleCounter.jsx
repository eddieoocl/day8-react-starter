import { useState } from "react";
import Counter from "./Counter";
import CounterGroup from "./CounterGroup";
import CounterGroupGenerator from "./CounterGroupGenerator";

const MultipleCounter = () => {
  const [size, setSize] = useState(0);

  return (
    <div>
      <CounterGroupGenerator setSize={setSize} size={size} />
      <CounterGroup size={size} />
    </div>
  );
};

export default MultipleCounter;
