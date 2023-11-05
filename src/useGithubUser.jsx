import useSWR from "swr";

export function useGithubUser(username) {

    const { data, error } = useSWR(`https://api.github.com/users/${username}`);

    if (!username) {
        return { data: null, error: null, loading: false };
    }

    return { data: data, error: error, loading: !data && !error };
}
