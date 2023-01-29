import { useState, useEffect } from 'react';

const useFetchBlogs = (API) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch(API)
        .then(response => response.json())
        .then(data => setBlogs(data))
        .catch(error => console.log(error));
    },[]);
    return blogs;
};

export default useFetchBlogs;
