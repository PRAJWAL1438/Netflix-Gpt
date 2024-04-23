import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, Now_Playing_API } from "./Constants";
import { addNowPlayingMovies } from "./moviesSlice";

const useMovieData = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    !nowPlayingMovies && NowPlayingMovies();
  }, []);

  const NowPlayingMovies = async () => {
    const data = await fetch(Now_Playing_API, API_OPTIONS);
    const json = await data.json();

    // console.log(json.results)

    dispatch(addNowPlayingMovies(json.results));
  };
};

export default useMovieData;
