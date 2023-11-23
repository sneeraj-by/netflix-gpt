import React from "react";
import { useSelector } from "react-redux";

import MoviesCategory from "./MoviesCategory";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((state) => state.gptSearch);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-gray-900 text-white bg-opacity-90">
      <>
        {movieNames.map((movieName, index) => (
          <MoviesCategory
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </>
    </div>
  );
};

export default GptMovieSuggestion;
