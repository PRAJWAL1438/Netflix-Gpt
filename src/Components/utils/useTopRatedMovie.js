import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, Top_Rated_API } from "./Constants";
import { addTopRatedMovies } from "./moviesSlice";

const useTopRatedMovie = () => {
  const dispatch = useDispatch();

  const nowTopRatedMovies = useSelector(
    (store) => store.movies.nowTopRatedMovies
  );

  useEffect(() => {
    !nowTopRatedMovies && TopRatedMovies();
  }, []);

  const TopRatedMovies = async () => {
    const data = await fetch(Top_Rated_API, API_OPTIONS);
    const json = await data.json();

    // console.log(json.results)

    dispatch(addTopRatedMovies(json.results));
  };
};

export default useTopRatedMovie;
