import React from "react";
import { BG_URL } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GPTSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="2xl:h-screen object-cover" src={BG_URL} alt="background" />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GPTSearchPage;
