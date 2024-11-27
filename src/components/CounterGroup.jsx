import Counter from "./Counter";

const CounterGroup = (props) => {
  const { size } = props;

  const counters = Array.from({ length: size }).map(() => (
    <Counter id={`${Math.random()}`} key={`${Math.random()}`} />
  ));

  return <div>{counters}</div>;
};

export default CounterGroup;
