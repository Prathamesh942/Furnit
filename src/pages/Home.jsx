import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Newest from "../components/Newest";
import Experience from "../components/Experience";
import Readourblogs from "../components/Readourblogs";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

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
