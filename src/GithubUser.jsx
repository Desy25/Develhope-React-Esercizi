import React from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
    const {data, error, loading, fetchData} = useGithubUser(username);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return null;
    }

    return (
        <div>
            <h1>GitHub Data:</h1>
            <button onClick={fetchData}>Refresh Data</button>
            {!loading && <p>Name: {data.name}</p>}
            {!loading && <p>Login: {data.login}</p>}
            {!loading && <img src={data.avatar_url} alt="" />}
            {error && <p>Error fetching data</p>}
        </div>
    );
}