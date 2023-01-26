'use client';

import React, { useState, useEffect } from "react";
import { Link } from "react";
import axios from "axios";
import styles from "../app/homepage/Homepage.module.css";

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
        <div className={styles.posts}>
            <h1>#Onderwerp</h1>
            {
                posts.map(
                    post =>
                        <a href="../post">
                            <div style={{
                                marginLeft: `${Math.random() * 1000}px`,
                                marginRight: `${Math.random() * 1000}px`,
                                marginTop: `${Math.random() * 1000}px`,
                                marginBottom: `${Math.random() * 1000}px`
                            }} className={styles.post}>
                                <p key={post.id}>{post.title}</p>
                            </div>
                        </a>
                )
            }
        </div>
    );
}

export default DataFetching;