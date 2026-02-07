import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let ignore = false;

        async function getData() {
            try {
                setLoading(true);

                const res = await fetch(url);

                if (!res.ok) {
                    throw new Error(`Error: ${res.status}`);
                }

                const json = await res.json();
                if (!ignore) setData(json);

            } catch (err: any) {
                if (!ignore) setError(err.message);
            } finally {
                if (!ignore) setLoading(false);
            }
        }

        getData();

        return () => {
            ignore = true;
        };
    }, [url]);

    return { data, loading, error };
}
