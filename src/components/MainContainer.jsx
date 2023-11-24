import React from "react";
import { useSelector } from "react-redux";

import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { randomNumber } from "../utils/common";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  
  if (!movies) return;

  const randomMovieSuggestion = randomNumber(0, movies.length);
  
  const { original_title, overview, id } = movies[randomMovieSuggestion];

  return (
    <div className="pt-[30%] bg-gray-900 md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
