import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES_URL } from "../utils/constants";
import { addPopularMovies } from "../ducks/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
