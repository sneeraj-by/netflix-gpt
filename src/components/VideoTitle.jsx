import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[12%] md:px-12 px-6 absolute bg-gradient-to-r from-black text-white">
      <h1 className="text-2xl md:text-6xl font-bold mt-[25%] md:mt-0">{title}</h1>
      <p className="py-6 text-lg w-1/4 hidden md:inline-block">{overview}</p>
      <div className="my-4">
        <button className="bg-white text-black py-1 px-3 text-xl rounded-md hover:bg-opacity-80">
          <strong>▷</strong> Play
        </button>
        <button className="bg-gray-500 text-black mx-2 py-1 px-2 text-xl rounded-md hover:bg-opacity-80 hidden md:inline-block">
          <strong>ⓘ</strong> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
