
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { MultiButton } from "./MultiButton";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

export function App() {
    // function handleLogin(data) {
    //     const { username, password, remember } = data;

    //     if (username && password) {
    //         if (remember) {
    //             localStorage.setItem("loggedInUser", username);
    //         }
    //         console.log("Login successful!");
    //     }
    // }
    return (
        <div>
            <UncontrolledLogin />
        </div>
    )
}