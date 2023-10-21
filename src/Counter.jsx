import { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";
import { useCounter } from "./useCounter";

export function Counter({ initialValue = 0, amount = 1 }) {

    const {counter, increment, decrement, reset} = useCounter(initialValue);

    return <div style={{ backgroundColor: "aquamarine", color: "purple", border:"2px solid blue", paddingLeft: "1rem"}}>
        <CounterDisplay displayCounter={counter} />
        <button onClick={increment}>Increment by {amount}</button>
        <button onClick={decrement}>Decrement by {amount}</button>
        <button onClick={reset}>Reset</button>
    </div>
}