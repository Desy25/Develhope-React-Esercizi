export function AlertClock() {
    function handleShowTime() {
        const date = new Date();
        alert(`The current time is ${date.toLocaleTimeString()}`)
    }
    return <div>
        <p>Click the button to show the current time!</p>
        <button onClick={handleShowTime}>Click me!</button>
    </div>
}