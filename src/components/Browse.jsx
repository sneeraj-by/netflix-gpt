import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import { randomNumber } from "../utils/common";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GPTSearchPage from "./GPTSearchPage";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  const { isGptSearch } = useSelector((state) => state.gptSearch);
  if (!movies) return;
  const randomMovieSuggestion = randomNumber(0, movies.length);
  const { original_title, overview, id } = movies[randomMovieSuggestion];

  return (
    <div>
      <Header />
      {isGptSearch ? (
        <GPTSearchPage />
      ) : (
        <>
          <VideoTitle title={original_title} overview={overview} />
          <VideoBackground movieId={id} />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
