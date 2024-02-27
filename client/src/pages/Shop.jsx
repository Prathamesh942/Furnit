import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Shop/Hero";
import Filter from "../components/Shop/Filter";
import Products from "../components/Shop/Products";
import Newsletter from "../components/Home/Newsletter";
import Footer from "../components/Footer";

const Shop = () => {
  return (
    <div className=" px-[6vw]">
      <Navbar />
      <Hero />
      <div className=" w-[100%] flex gap-16 relative">
        <div className=" flex-[2]">
          <Filter />
        </div>
        <div className=" flex-[8]">
          <Products />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Shop;
