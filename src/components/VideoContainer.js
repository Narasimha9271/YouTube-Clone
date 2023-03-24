import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
    //We need a state variable to loop on this videos
    const [videos, setvideos] = useState([]);
    useEffect(() => {
        getVideos();
    }, []);
    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        setvideos(json.items);
    };

    return videos?.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="flex flex-wrap ">
            {videos.map((video) => (
                <Link to={"/watch?v=" + video.id}>
                    <VideoCard key={video.id} info={video} />{" "}
                </Link>
            ))}
        </div>
    );
};

export default VideoContainer;
