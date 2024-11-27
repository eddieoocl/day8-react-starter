import { useState } from "react";

import "./countergroupGenerator.css";

const CounterGroupGenerator = (props) => {
  const [size, setSize] = useState();

  const { setSize: setGlobalSize } = props;

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const handleReset = (event) => {
    setGlobalSize(size);
  };

  return (
    <div className="counter-group-generator">
      <span>Size:</span>
      <input
        min={0}
        max={20}
        type="number"
        value={size}
        onChange={handleChange}
      ></input>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default CounterGroupGenerator;
