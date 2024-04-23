import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" pt-[12%] px-6 absolute w-screen bg-gradient-to-r from-black text-white  md:px-12  ">
      <h1 className=" text-xl md:text-3xl font-bold">{title}</h1>
      <p className=" hidden md:inline-block w-1/4 py-6 ">{overview}</p>
      <div className="my-3 md:my-0">
        <button className="bg-white text-black p-1 px-5 md:p-3 px-10 text-xl  rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white p-3  mx-2 text-xl px-10 bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
