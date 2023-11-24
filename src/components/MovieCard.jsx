import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster, movieTitle, releaseDate }) => {
  if (!poster) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img
        src={`${IMG_CDN_URL}${poster}`}
        alt="Movie Name"
        className="rounded-md"
      />
      <p className="text-white text-sm mt-4">{movieTitle}</p>
      <p className="text-gray-400 text-xs mt-2 mb-4">{releaseDate}</p>
    </div>
  );
};

export default MovieCard;
