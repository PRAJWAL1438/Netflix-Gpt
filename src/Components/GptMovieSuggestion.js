import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  // const  { movieResult ,movieNames} = useSelector((store)=>store?.Gpt)
  const gptResult = useSelector((store) => store.Gpt.movieResult);
  const gptName = useSelector((store) => store.Gpt.movieNames);

  if (!gptName) return null;

  // console.log(gptResult)
  // console.log(gptName)

  return (
    <div className="p-4 m-4 bg-black text-white opacity-80">
      {gptName.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={gptResult[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
