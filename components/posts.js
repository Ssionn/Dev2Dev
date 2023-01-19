'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";

// const url = 'https://63c69e48dcdc478e15c56714.mockapi.io/PostInfo';

// const dataRequest = () => {
    // const fetchData = async () => {
    //     try {
    //         const res = await axios(url);
    //         const data = res.data;
    //         console.log(res);
    //     } catch (error) {
    //         console.log(error.res);
    //     }
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);
// }

function DataFetching() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://63c69e48dcdc478e15c56714.mockapi.io/PostInfo')
        .then(res => {
            console.log(res);
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])


    return ( 
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
     );
}
 
export default DataFetching;