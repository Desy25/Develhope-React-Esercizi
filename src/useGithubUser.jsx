import { useState, useEffect } from "react";

export function useGithubUser(username) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    async function fetchGitHubData(username) {
        try {
            setLoading(true);
            const response = await fetch(`https://api.github.com/users/${username}`);
            const dataJson = await response.json();
            setData(dataJson);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGitHubData(username);
    }, [username]);

    return {data, error, loading};
}
