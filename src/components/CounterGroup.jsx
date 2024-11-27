import Counter from "./Counter";

const CounterGroup = (props) => {
  const { size } = props;

  return (
    <div>
      {Array.apply(null, { length: size }).map(() => (
        <Counter id={`${Math.random()}`} key={`${Math.random()}`} />
      ))}
    </div>
  );
};

export default CounterGroup;
