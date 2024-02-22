import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Shop/Hero";
import Filter from "../components/Shop/Filter";

const Shop = () => {
  return (
    <div className=" px-[6vw]">
      <Navbar />
      <Hero />
      <div className=" w-[100%] flex">
        <div className=" flex-[1]">
          <Filter />
        </div>
        <div className=" flex-[6]"></div>
      </div>
    </div>
  );
};

export default Shop;
