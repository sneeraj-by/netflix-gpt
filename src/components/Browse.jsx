import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import { randomNumber } from "../utils/common";

const Browse = () => {
  useNowPlayingMovies();
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  if (!movies) return;
  const randomMovieSuggestion = randomNumber(0, movies.length);
  const { original_title, overview, id } = movies[randomMovieSuggestion];

  return (
    <div>
      <Header />
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default Browse;
