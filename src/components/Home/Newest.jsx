import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Newest = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const fetchData = async (filter) => {
    try {
      const response = await axios.get(`api/product/products`, {
        params: filter,
      });
      setData(response.data.data);
      setError(false);
    } catch (error) {
      setError(true);
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchData({
      category: "none",
      color: "none",
      priceRange: { min: 0, max: 1000 },
    });
  }, []);
  console.log(data);
  return (
    <div className=" py-10">
      <div className=" flex flex-col justify-center items-center gap-2 ">
        <span className=" text-4xl font-semibold">Our Newest Product</span>
        <p className="">
          Made of the best materials and with a design that follows the times
        </p>
      </div>
      <div className=" flex flex-wrap gap-[2%] ">
        {data.slice(0, 8).map((item) => {
          return (
            <div className=" w-[23%] my-5 relative max-md:w-[32%] max-sm:w-[48%]">
              <img
                src={item.productImg}
                alt=""
                className=" w-[100%] aspect-[3/4] object-cover"
                onClick={() => {
                  navigate(`/product/${item.sku}`);
                }}
              />
              <span className=" absolute bottom-8 text-white bg-zinc-800 p-2">
                {item.category}
              </span>
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Newest;
