import { useEffect } from "react";
import { API_OPTIONS } from "./Constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "./moviesSlice";

const useTrailerVideo = (movieId) => {
  const TrailerVideo = useSelector((store) => store.movies.TrailerVideo);

  const dispatch = useDispatch();
  useEffect(() => {
    !TrailerVideo && getMovieTrailer();
  }, []);

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    //  console.log(json.results)
    const filterData = json.results.filter((video) => video.type === "Trailer");
    //

    const Trailer = filterData.length ? filterData[0] : json.results[0];
    //  console.log(Trailer);

    dispatch(addTrailerVideo(Trailer));
  };
};

export default useTrailerVideo;
