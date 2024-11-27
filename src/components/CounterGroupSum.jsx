import { useEffect } from "react";

const CounterGroupSum = (props) => {
  const { sum, setSum, size } = props;

  return <div>sum: {sum}</div>;
};

export default CounterGroupSum;
