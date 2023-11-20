import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIES_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../ducks/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default useNowPlayingMovies;
