import { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0, amount = 1 }) {
    const [counter, setCounter] = useState(initialValue);

    const upDownRef = useRef(null);

    const previousRef = useRef(null);


    useEffect(() => {
        if (upDownRef.current !== previousRef.current) {
            console.log(upDownRef.current);
            previousRef.current = upDownRef.current;
        }
        console.log(`The current value is ${counter}`);
    }, [counter])

    function incrementCounter() {
        setCounter((c) => c + amount)
        upDownRef.current = "up";
    }
    function decrementCounter() {
        setCounter((c) => c - amount)
        upDownRef.current = "down";
    }
    function resetCounter() {
        setCounter(initialValue)
        upDownRef.current = null;
    }


    return <div>
        <CounterDisplay displayCounter={counter} />
        <button onClick={incrementCounter}>Increment by {amount}</button>
        <button onClick={decrementCounter}>Decrement by {amount}</button>
        <button onClick={resetCounter}>Reset</button>
    </div>
}