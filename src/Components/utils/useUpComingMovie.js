import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, Up_Coming_API } from "./Constants";
import { addUpComingMovies } from "./moviesSlice";

const useUpComingMovie = () => {
  const nowUpComingMovies = useSelector(
    (store) => store.movies.nowUpComingMovies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    !nowUpComingMovies && NowUpComingMovies();
  }, []);

  const NowUpComingMovies = async () => {
    const data = await fetch(Up_Coming_API, API_OPTIONS);
    const json = await data.json();

    // console.log(json.results)

    dispatch(addUpComingMovies(json.results));
  };
};

export default useUpComingMovie;
