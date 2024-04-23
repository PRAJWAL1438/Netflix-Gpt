import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, Now_Popular_API } from "./Constants";
import { addPopularMovies } from "./moviesSlice";

const usePopularMovie = () => {
  const dispatch = useDispatch();
  const nowPopularMovies = useSelector(
    (store) => store.movies.nowPopularMovies
  );

  useEffect(() => {
    !nowPopularMovies && NowPopularMovie();
  }, []);

  const NowPopularMovie = async () => {
    const data = await fetch(Now_Popular_API, API_OPTIONS);
    const json = await data.json();

    // console.log(json.results)

    dispatch(addPopularMovies(json.results));
  };
};

export default usePopularMovie;
