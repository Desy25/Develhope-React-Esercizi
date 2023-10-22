import React from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
    const data = useGithubUser(username);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>GitHub Data:</h1>
            <p>Name: {data.name}</p>
            <p>Login: {data.login}</p>
            <img src={data.avatar_url} alt="" />
        </div>
    );
}