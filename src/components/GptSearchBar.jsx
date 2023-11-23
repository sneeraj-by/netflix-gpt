import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import openAi from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../ducks/gptSearchSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchTmdbMovie = async (movie) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await data.json();
      return json.results;
    } catch (error) {
      console.error(error);
    }
  };

  const handleGptSearch = async () => {
    const gptQuery = `Act as a movie recommendation system and suggest some movies for the query : ${searchText.current.value}. Only give me name of 5 movies, comma separated like the example given ahead,Example: Gadar, Tiger, Don, Golmaal, Sholay`;
    try {
      const gptResults = await openAi.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      const gptMoviesArray =
        gptResults.choices?.[0]?.message?.content.split(",");
      const promiseArray = gptMoviesArray.map((movie) =>
        searchTmdbMovie(movie)
      );
      const results = await Promise.all(promiseArray);
      dispatch(
        addGptMovieResult({
          movieNames: gptMoviesArray,
          movieResults: results,
        })
      );
    } catch (error) {
      console.log("something went wrong: ", error);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black bg-opacity-70 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9"
          placeholder="Search movie..."
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-md"
          onClick={handleGptSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
