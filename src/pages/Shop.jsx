import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Shop/Hero";
import Filter from "../components/Shop/Filter";
import Products from "../components/Shop/Products";
import Newsletter from "../components/Home/Newsletter";
import Footer from "../components/Footer";
import axios from "axios";

const Shop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/product/products");
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
    console.log(data);
  }, []);
  return (
    <div className=" px-[6vw]">
      <Navbar />
      <Hero />
      <div className=" w-[100%] flex gap-16 relative">
        <div className=" flex-[2]">
          <Filter />
        </div>
        <div className=" flex-[8]">
          <Products products={data} />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Shop;
