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
  const [error, setError] = useState(false);
  console.log(error);

  const fetchData = async (filter) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/product/products`, {params:filter});
      setData(response.data.data);
      setError(false)
    } catch (error) {
      setError(true)
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchData({category:"none",color:"none",priceRange:{min:0, max:1000}});
    console.log(data);
  }, []);

  const handleFilterChange = (filters) => {
    console.log("Filters changed:", filters);
    fetchData(filters);
  };

  return (
    <div className=" px-[6vw]">
      <Navbar />
      <Hero />
      <div className=" w-[100%] flex gap-16 relative">
        <div className=" flex-[2]">
          <Filter onFilterChange={handleFilterChange} />
        </div>
        <div className=" flex-[8]">
          {error==true ? <img src="https://i.pinimg.com/736x/65/2b/1d/652b1d4c0af96bca477945270a12c169.jpg"></img> : <Products products={data} />}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Shop;
