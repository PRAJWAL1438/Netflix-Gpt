import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "./utils/languageConstants";
import openai from "./utils/openai";
import { API_OPTIONS } from "./utils/Constants";
import { addGptMovieNames, addGptMovieResult } from "./utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleClickGptSearch = async () => {
    const GptQuerry =
      "Act as a Recommendation system and suggestion some movies for the Query : " +
      searchText.current.value +
      ". only give me name s of 5 movies , comma seperated like example result given ahed .Example :NamoVenkatesh, KGF 1, KGF 2 , BR0  , Teddy ";

    const GptSearch = await openai.chat.completions.create({
      messages: [{ role: "user", content: GptQuerry }],
      model: "gpt-3.5-turbo",
    });

    // console.log(GptSearch.choices?.[0]?.message?.content.split(","));

    const gptMovies = GptSearch.choices?.[0]?.message?.content.split(",");

    // if(!gptMovies) return null

    const tmdbMovieResult = gptMovies.map((movie) => searchMovieTmdb(movie));

    const searchMovieData = await Promise.all(tmdbMovieResult);
    // console.log(searchMovieData)
    // {movieNames :gptMovies,movieResults :searchMovieData}
    dispatch(addGptMovieResult(searchMovieData));
    dispatch(addGptMovieNames(gptMovies));
  };
  return (
    <div className=" pt-[50%]  md:pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="  md: w1/2 bg-black grid grid-cols-12"
      >
        <input
          ref={searchText}
          className=" p-1 m-1 md:P-4 md:m-4  col-span-10 "
          placeholder={lang[langKey].gptSearchPlaceHolder}
          type="text"
        />
        <button
          onClick={handleClickGptSearch}
          className="   pr-3 md:py-2 md:px-4 col-span-2 md:m-4 rounded-lg bg-red-700"
        >
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
