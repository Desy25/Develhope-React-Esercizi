import { useState, useEffect } from "react";

export function GithubUser({ username }) {
    const [data, setData] = useState(null);

    async function fetchGitHubData(username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const dataJson = await response.json();
            setData(dataJson);
            console.log(dataJson);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchGitHubData(username);
    }, [username]);

    if (!data) {
        return <div>Loading...</div>;
    }
    

    return (
        <div>
            <h1>GitHub Data:</h1>
            <p>Name:{data.name}</p>
            <p>Login:{data.login}</p>
            <img src={data.avatar_url} alt="" />
        </div>
    )
}