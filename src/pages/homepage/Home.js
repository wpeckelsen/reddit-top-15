import "./Home.css"
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Navigation from "../../components/navigation bar/Navigation";

function Home() {
    const [redditData, setRedditData] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function FetchRedditData() {
            try {
                const result = await axios.get(
                    "https://www.reddit.com/hot.json?limit=15"
                );
                console.log(result.data.data.children);
                setRedditData(result.data.data.children);
            } catch (e) {
                console.error(e);
            }
        }

        FetchRedditData();
    }, []);

    return (
        <>
            <h1>15 hottest Reddit Posts right now</h1>
            <h2>Hot🥴 Reddit Posts In Your Area Want to Chat With 🥴You🥴</h2>

            {redditData.map((reddit) => {
                return (
                    <>
                        <div className="reddit-item">
                            <h3>{reddit.data.title}</h3>

                            <p>
                                <Link to={`/subreddit/${reddit.data.subreddit}`}>
                                    {" "}
                                    r/{reddit.data.subreddit}
                                </Link>
                            </p>
                            <p>
                                {reddit.data.ups} upvotes | {reddit.data.upvote_ratio} upvote
                                ratio | {reddit.data.num_comments} comments
                            </p>
                            <Button
                                content={reddit.data.subreddit}
                                adress={`/subreddit/${reddit.data.subreddit}`}
                            />
                        </div>
                    </>
                );
            })}
        </>
    );
}

export default Home;
