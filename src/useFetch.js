import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            const aborter = new AbortController()
            fetch(url, { signal: aborter.signal })
                .then(res => {
                    if (!res.ok) throw Error('could not fetch resource')
                    return res.json()
                })
                .then(data => {
                    setError(null)
                    setPending(false)
                    setData(data)
                })
                .catch(err => {
                    if (err.name === 'AbortError') return;
                    else {
                        setError(err.message)
                        setPending(false)
                    }
                });
            return () => aborter.abort()
        }, 500);
    }, [url])
    return [data, pending, error]
}

export default useFetch