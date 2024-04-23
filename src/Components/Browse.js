import Header from "./Header";
import MainContainer from "./MainContainer";
import useMovieData from "./utils/useMovieData";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "./utils/usePopularMovie";
import useTopRatedMovie from "./utils/useTopRatedMovie";
import useUpComingMovie from "./utils/useUpComingMovie";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useMovieData();
  usePopularMovie();
  useTopRatedMovie();
  useUpComingMovie();

  const showGptSearch = useSelector((store) => store.Gpt.showGptSearch);

  return (
    <div className="w-screen">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
