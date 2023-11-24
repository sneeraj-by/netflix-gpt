import React from "react";
import { useSelector } from "react-redux";
import MoviesCategory from "./MoviesCategory";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-gray-900">
        <div className="mt-0 md:-mt-56 pl-0 md:pl-11 relative z-20">
          <MoviesCategory
            title={"Now Playing"}
            movies={movies?.nowPlayingMovies}
          />
          <MoviesCategory
            title={"Top Rated"}
            movies={movies?.topRatedMovies}
          />
          <MoviesCategory title={"Popular"} movies={movies?.popularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
