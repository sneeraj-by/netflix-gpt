import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-12 absolute bg-gradient-to-r from-black text-white">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4">
        <button className="bg-white text-black py-1 px-3 text-xl rounded-md hover:bg-opacity-80">
          <strong>▷</strong> Play
        </button>
        <button className="bg-gray-500 text-black mx-2 py-1 px-2 text-xl rounded-md hover:bg-opacity-80">
          <strong>ⓘ</strong> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
