
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
            <Colors items={["Green","Yellow","Blue","Purple","Pink"]} />
        </div>
    )
}