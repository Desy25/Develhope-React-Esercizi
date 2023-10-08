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

// E' più corretto aggiornare il valore tramite funzione invece che con un valore immediato per questioni di prestazioni,anche in caso di aggiornamenti multipli.
// Invece se passato un valore immediato come setCounter(c + 1), potremmo riscontrare problemi in caso di aggiornamenti multipli simultanei.