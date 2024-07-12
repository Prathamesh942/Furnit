import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import Brands from "../components/Home/Brands";
import Newest from "../components/Home/Newest";
import Experience from "../components/Home/Experience";
import Readourblogs from "../components/Home/Readourblogs";
import Footer from "../components/Footer";
import Newsletter from "../components/Home/Newsletter";
import axios from "axios";
import { useParams } from "react-router-dom";

const Home = () => {
  const { productId: id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`api`);
        setProduct(response.data.data);
        setLoading(false);
        console.log("you are authorized");
      } catch (error) {
        console.error("Error fetching product:", error);

        console.log("you are unauthorized");
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);
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
