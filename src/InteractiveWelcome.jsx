import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
    const [name, setName] = useState("");
    function handleName(event) {
        const value = event.target.value;
        setName(value);
    }
    return (
        <div>
            <input value={name} onChange={handleName} type="text" />
            <Welcome name={name}/>
        </div>
    )
}