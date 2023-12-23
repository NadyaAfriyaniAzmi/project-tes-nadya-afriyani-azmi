import React from "react";
import ImgIdeas from "../assets/ideasImg.jpg";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img
          src={ImgIdeas}
          alt=""
          className="w-full h-96 bg-cover  filter brightness-75 transform -skew-y-3"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <div className="flex flex-col items-center">
          <p className="text-4xl font-bold">Ideas</p>
          <p className="text-xl font-semibold">Where all our great things begin </p></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
