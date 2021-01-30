import {useEffect, useState} from 'react';

//custom hooks need to be have use in their name
const useFetch = (url) => {
    const [data, setData]=useState(null);
    const [isLoading, setIsLoading]=useState(true);
    const [error, setError]=useState(null);
    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok)
                throw Error('Could not fetch the required data!');
                return res.json();
            })
            .then(data => {
                setData(data);
                setError(null);
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.message);
            });
    }, [url]); //when url changes it wil re rerun this func to get the data from endpoint
    return {data, isLoading, error}
}

export default useFetch;