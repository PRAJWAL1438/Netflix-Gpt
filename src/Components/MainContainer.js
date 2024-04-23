import React from "react";
import VideoBackRound from "./VideoBackRound";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const mainMovie = movies[0];
  //  console.log(mainMovie)

  const { original_title, overview, id } = mainMovie;
  return (
    <div className=" bg-black   pt-[30%] md:pt-0 ">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackRound movieId={id} />
    </div>
  );
};

export default MainContainer;
