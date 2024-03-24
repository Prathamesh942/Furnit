import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import Brands from "../components/Home/Brands";
import Newest from "../components/Home/Newest";
import Experience from "../components/Home/Experience";
import Readourblogs from "../components/Home/Readourblogs";
import Footer from "../components/Footer";
import Newsletter from "../components/Home/Newsletter";
import axios from "axios";

const Home = () => {

  return (
    <div className=" px-[6vw]">
      <Navbar />
      <Hero />
      <Brands />
      <Newest />
      <Experience />
      <Readourblogs />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
