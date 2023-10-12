import { useState } from "react"

export function TodoList() {
    const [items, setItems] = useState([]);
    const [value, setValue] = useState("");

    function addItem() {
        setItems([...items, value]);
        setValue('');
    }

    function handleInputChange(event) {
        setValue(event.target.value);
    }

    function resetButton() {
        setItems([]);
    }

    return (
        <div>
            <h2>ToDo List :</h2>
            <ul>{items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}</ul>
            <input type="text" value={value} onChange={handleInputChange} />
            <button onClick={addItem} type="reset">Add item</button>
            <button onClick={resetButton}>Reset</button>
        </div>
    )
}