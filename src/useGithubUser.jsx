import useSWR from "swr";

export function useGithubUser(username) {

    const { data, error, mutate } = useSWR(
        username ? `https://api.github.com/users/${username}` : null
    );

    const refetchData = () => {
        mutate();
    };


    return { data: data, error: error, loading: !data && !error, fetchData: refetchData };
}
