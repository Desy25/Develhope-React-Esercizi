import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0, incrementAmount = 1}) {
    const [counter, setCounter] = useState(initialValue);
    function incrementCounter() {
        setCounter((c) => c + incrementAmount)
    }
    return <div>
        <CounterDisplay displayCounter={counter} />
        <button onClick={incrementCounter}>Increment by {incrementAmount}</button>
    </div>
}