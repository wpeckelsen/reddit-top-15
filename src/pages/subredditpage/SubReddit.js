import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import "./SubReddit.css"

function SubReddit() {
    const [posts, setPosts] = useState({});

    const { id } = useParams();

    useEffect(() => {
        async function FetchRedditPosts() {
            try {
                const result = await axios.get(
                    `https://www.reddit.com/r/${id}/about.json`
                );
                setPosts(result.data.data);
                console.log(result.data.data);
            } catch (e) {
                console.error(e);
            }
        }

        FetchRedditPosts();
    }, []);

    return (
        <>
            <div className="subredditpage">
                <div className="banner">
                <img src={posts.header_img} alt="Subreddit banner" />
                </div>

                <h2>{posts.display_name_prefixed}</h2>
                <div className="subreddititempage">
                    <h3>{posts.title}</h3>
                    <p>
                        <b>{posts.subscribers}</b> Subscribers
                    </p>
                    <p>{posts.public_description}</p>
                    <p>
                        click <a href={`https://reddit.com${posts.url}`}>here</a> to go to
                        the real Reddit page of {posts.title}
                    </p>

                    <Button
                        content="Back to home"
                        adress="/"

                    />
                </div>
            </div>
        </>
    );
}

export default SubReddit;
