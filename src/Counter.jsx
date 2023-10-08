import { useState } from "react";

export function Counter({ initialValue = 0, incrementAmount = 1}) {
    const [counter, setCounter] = useState(initialValue);
    function incrementCounter() {
        setCounter((c) => c + incrementAmount)
    }
    return <div>
        <h2>{counter}</h2>
        <button onClick={incrementCounter}>Increment by {incrementAmount}</button>
    </div>
}