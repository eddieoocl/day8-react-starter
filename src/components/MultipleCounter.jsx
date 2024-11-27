import { useEffect, useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterGroupGenerator from "./CounterGroupGenerator";
import CounterGroupSum from "./CounterGroupSum";

const MultipleCounter = () => {
    const [size, setSize] = useState(0);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        setSum(0);
    }, [size]);

    return (
        <div>
            <CounterGroupGenerator setSize={setSize} size={size} />
            <CounterGroupSum sum={sum} setSum={setSum} />
            <CounterGroup size={size} setSum={setSum} />
        </div>
    );
};

export default MultipleCounter;
