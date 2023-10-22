import { useState, useEffect } from "react";

export function useGithubUser(username) {
    const [data, setData] = useState(null);

    async function fetchGitHubData(username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const dataJson = await response.json();
            setData(dataJson);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchGitHubData(username);
    }, [username]);

    return data;
}
