
import { useState } from "react";
import { Clock } from "./Clock";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { FocusableInput } from "./FocusableInput";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { LanguageContext } from "./LanguageContext";
import { MultiButton } from "./MultiButton";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";
import { GithubUser } from "./GithubUser";
import { GithubUsers } from "./GithubUsers";
import { Login } from "./Login";
import { CurrentLocation } from "./CurrentLocation";
import { FilteredList } from "./FilteredList";

export function App() {
    function handleLogin(data) {
        const { username, password, remember } = data;

        if (username && password) {
            if (remember) {
                localStorage.setItem("loggedInUser", username);
            }
            console.log("Login successful!");
            console.log(`username: ${username} password: ${password}`)
        }
    }
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
        {/* <CurrentLocation /> */}
        {/* <Login onLogin={handleLogin}/> */}
        {/* <Counter /> */}
        <FilteredList list={
            [
                { id: 1, name: "Alice", age: 20 },
                { id: 2, name: "Bob", age: 25 },
                { id: 3, name: "Charlie", age: 18 },
                { id: 4, name: "Diana", age: 30 },
                { id: 5, name: "Franco", age: 17 }
              ]
        } />
      </div>
    )
}