
import { useState } from "react";
import { Clock } from "./Clock";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { FocusableInput } from "./FocusableInput";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { LanguageContext } from "./LanguageContext";
import { Login } from "./Login";
import { MultiButton } from "./MultiButton";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";
import { GithubUser } from "./GithubUser";
import { GithubUsers } from "./GithubUsers";

export function App() {
    // const [language, setLanguage] = useState('en');

    // function handleLanguage(event) {
    //     setLanguage(event.target.value);
    // }

    return (
      <div>
        {/* <select onChange={handleLanguage} value={language}>
            <option value="en">EN</option>
            <option value="it">IT</option>
        </select>
          <Container title="Title">
            <LanguageContext.Provider value={language}>
                <Clock />
            </LanguageContext.Provider>
        </Container> */}
        {/* <GithubUser username="Desy25"/> */}
        <GithubUsers/>
      </div>
    )
}