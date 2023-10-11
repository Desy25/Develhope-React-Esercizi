
import { Clock } from "./Clock";
import { Colors } from "./Colors";
import { Counter } from "./Counter";
import { FocusableInput } from "./FocusableInput";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { MultiButton } from "./MultiButton";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

export function App() {
 
    return (
        <div>
            {/* <UncontrolledLogin /> */}
            <Colors items={[
                {
                    id : 1 , 
                    name : "Green"
                },
                {
                    id : 2 , 
                    name : "Yellow"
                },
                {
                    id : 3 , 
                    name : "Blue"
                },
                {
                    id : 4 , 
                    name : "Purple"
                },
                {
                    id : 5 , 
                    name : "Pink"
                }
                ]} />
        </div>
    )
}