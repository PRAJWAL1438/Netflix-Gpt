import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div>
        <div className=" -mt-0 pl-1 md:-mt-20 bg-black md:pl-3 pb-10">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rateed"} movies={movies.nowTopRatedMovies} />
          <MovieList title={"Popular"} movies={movies.nowPopularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.nowUpComingMovies}
          />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
