import React from "react";
import { IMG_CDN } from "./utils/Constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <>
      <img
        className=" w-20  md:w-40 pr-2"
        alt="Movie poster"
        src={IMG_CDN + poster_path}
      />
    </>
  );
};

export default MovieCard;
