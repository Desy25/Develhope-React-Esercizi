export function AlertClock({ time }) {
    return <div>
        <p>Click the button to show the current time!</p>
        <button onClick={time}>Click me!</button>
    </div>
}