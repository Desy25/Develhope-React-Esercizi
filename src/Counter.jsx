import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0, amount = 1}) {
    const [counter, setCounter] = useState(initialValue);

    useEffect(() => {
        console.log(`The current value is ${counter}`);
    }, [counter])

    function incrementCounter() {
        setCounter((c) => c + amount)
    }
    function decrementCounter() {
        setCounter((c) => c - amount)
    }
    function resetCounter() {
        setCounter(initialValue)
    }
    return <div>
        <CounterDisplay displayCounter={counter} />
        <button onClick={incrementCounter}>Increment by {amount}</button>
        <button onClick={decrementCounter}>Decrement by {amount}</button>
        <button onClick={resetCounter}>Reset</button>
    </div>
}