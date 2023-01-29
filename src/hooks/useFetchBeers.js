import { useState, useEffect } from 'react';

const useFetchBeers = (API) => {
    const [beers, setBeers] = useState([]);

    useEffect(()=>{
        fetch(API)
        .then(response => response.json())
        .then(data => setBeers(data))
        .catch(error => console.log(error));
    },[]);

    return beers;
};

export default useFetchBeers;
