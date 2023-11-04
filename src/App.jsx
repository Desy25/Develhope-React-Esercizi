
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
import { Link, Route, Routes } from "react-router-dom";
import { ShowGithubUser } from "./ ShowGithubUser";

export function App() {
    // function handleLogin(data) {
    //     const { username, password, remember } = data;

    //     if (username && password) {
    //         if (remember) {
    //             localStorage.setItem("loggedInUser", username);
    //         }
    //         console.log("Login successful!");
    //         console.log(`username: ${username} password: ${password}`)
    //     }
    // }
    return (
      <div>
       <Routes>
        <Route path="/" element={<Welcome name="Nora"/>} />
        <Route path="counter" element={<Counter/>} />
        <Route path="users/:username" element={<ShowGithubUser/>} />
        <Route path="*" element={<h3>Not Found</h3>} />
       </Routes>
       <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="users/Desy25">Desy's Github</Link>
      </div>
    )
}