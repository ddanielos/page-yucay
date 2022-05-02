import { useState, useEffect } from 'react'

const useInitialState = (API) => {
    const [beers, setBeers] = useState({beers:[]});

    useEffect(()=>{
        fetch(API)
            .then(response => response.json())
            .then(data => setBeers(data))
    },[]);
    return beers;
};

export default useInitialState;
