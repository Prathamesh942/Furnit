import React from "react";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div
      className=" flex 
    bg-[#feefe0]"
    >
      <div className=" flex-1 flex flex-col justify-center items-start  gap-10 p-10">
        <span className=" font-semibold">Interior Needs</span>
        <p className=" text-[2vw] font-semibold w-[80%]">
          Various new collections of furniture to decorate the corner of your
          house.
        </p>
        <Link to="/shop">
          <button className=" p-3 px-6 bg-zinc-800 text-white">Shop Now</button>
        </Link>
      </div>
      <div className=" flex-1">
        <img
          className=" w-[100%] aspect-square object-cover"
          src="https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
