import React from "react";
import useTrailerVideo from "./utils/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackRound = ({ movieId }) => {
  const TrailerVideo = useSelector((store) => store.movies.TrailerVideo);

  useTrailerVideo(movieId);

  return (
    <div className=" aspect-video">
      <iframe
        className="w-screen h-[100%] "
        src={
          "https://www.youtube.com/embed/" +
          TrailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackRound;
