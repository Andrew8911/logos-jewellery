import { useState, useEffect } from "react";

const UseFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new window.AbortController();

        setTimeout(() => {
                fetch(url, {signal: abortCont.signal})
                .then(res => {
                    if(!res.ok){
                        throw Error('Could not fetch the data for that resource');
                    }
                    console.log(res)
                    return res.json()
                })
                .then((data) => {
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError()
                })
                .catch((err) => {
                    if (err.name === "AbortError") {
                        console.log('fetch aborted');
                    }
                    console.log(err.message);
                    setError(err.message);
                    setIsPending(false);
                })
        }, 1000);

       return () => abortCont.abort();

    }, [url]);

    return {data, isPending, error}
}


export default UseFetch;