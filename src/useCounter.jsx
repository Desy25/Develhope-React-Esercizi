import { useState, useEffect, useRef } from "react";


export function useCounter(initialValue = 0, amount = 1) {
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

    return {
        counter : counter,
        increment : incrementCounter,
        decrement : decrementCounter,
        reset : resetCounter
    }

}
