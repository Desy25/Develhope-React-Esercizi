import { useState } from "react";

export function Counter() {
    const [counter, setCounter] = useState(0);
    function incrementCounter() {
        setCounter((c) => c + 1)
    }
    return <div>
        <h2>{counter}</h2>
        <button onClick={incrementCounter}>Increment by 1</button>
    </div>
}