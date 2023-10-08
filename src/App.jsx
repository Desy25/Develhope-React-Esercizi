
import { AlertClock } from "./AlertClock";
import { Welcome } from "./Welcome";

export function App() {
    function handleShowTime() {
        const date = new Date();
        alert(`The current time is ${date.toLocaleTimeString()}`)
    }
    return <div>
       <Welcome name="Violante" />
       <AlertClock time={handleShowTime}/>
    </div>
} 