'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../app/homepage/Homepage.module.css";

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

    let randomLeftMargin;

    // const interval = setInterval(function() {
    //     // method to be executed;
    //     if (randomLeftMargin !== `${Math.random() * 1000}px`) {
    //         randomLeftMargin = `${Math.random() * 1000}px`;
    //     }
    //   }, 200);
    
    function newRandomMarginLeft() {
        let randomLeftMargin = `${Math.random() * 1000}px`;
        return randomLeftMargin;
        // console.log('rML', randomLeftMargin);
    }
    setInterval(newRandomMarginLeft, 2000);
    

    return (
        <div className={styles.posts}>
            {
                posts.map(
                    post =>
                        <div style={{
                            marginLeft: `${Math.random() * 1000}px`,
                            marginRight: `${Math.random() * 500}px`,
                            marginTop: `${Math.random() * 100}px`,
                            marginBottom: `${Math.random() * 100}px`
                        }} className={styles.post}>
                            <p key={post.id}>{post.title}</p>
                        </div>
                )
            }
        </div>
    );
}

export default DataFetching;