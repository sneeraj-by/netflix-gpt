import React from "react";
import MovieCard from "./MovieCard";

const MoviesCategory = ({ title, movies }) => {
  return (
    <div className="">
      <h1 className="text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              poster={movie.poster_path}
              movieTitle={movie.title}
              releaseDate={movie.release_date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesCategory;
