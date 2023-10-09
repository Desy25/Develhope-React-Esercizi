
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { MouseClicker } from "./MouseClicker";
import { Welcome } from "./Welcome";

export function App() {
    // function handleShowTime() {
    //     const date = new Date();
    //     alert(`The current time is ${date.toLocaleTimeString()}`)
    // }
    return <div>
       {/* <Welcome name="Violante" /> */}
       <Counter amount={2} />
       <Clock />
       <MouseClicker />
    </div>
} 