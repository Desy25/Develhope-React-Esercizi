import { useEffect, useRef, useState, useCallback } from "react";

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
    }, [counter]);

    const incrementCounter = useCallback(() => {
        setCounter((c) => c + amount);
        upDownRef.current = "up";
    }, [amount]);

    const decrementCounter = useCallback(() => {
        setCounter((c) => c - amount);
        upDownRef.current = "down";
    }, [amount]);

    const resetCounter = useCallback(() => {
        setCounter(initialValue);
        upDownRef.current = null;
    }, [initialValue]);

    return {
        counter: counter,
        increment: incrementCounter,
        decrement: decrementCounter,
        reset: resetCounter,
    };
}
