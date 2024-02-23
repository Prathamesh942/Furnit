import React from "react";

const Hero = () => {
  return (
    <div className=" flex flex-col relative p-10 w-[100%] aspect-[4/1] text-white justify-center items-start gap-4 bg-gradient-to-r from-[#805300]">
      <img
        className=" absolute top-0 left-0 -z-10 w-[100%] h-[100%] object-cover"
        src="assets\img_rectangle28.png"
        alt=""
      />
      <h3>Best Room Decor Items</h3>
      <span className=" text-2xl font-semibold w-[40%]">
        Our goods have the best quality and materials in the world
      </span>
      <button className=" p-2 bg-white text-black">Shop now</button>
    </div>
  );
};

export default Hero;
