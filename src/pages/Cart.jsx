import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Home/Newsletter";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const Single = ({data}) => {
  return(
    <div className=" flex gap-8 h-[100px] items-center">
    <img
      src={data.productImg}
      alt=""
      className=" aspect-square h-[100%] object-cover"
    />
    <div className=" flex flex-col justify-between">
      <h3 className=" w-[60%]">{data.name}</h3>
      <span>${data.price}</span>
    </div>
    {/* s<button><Link to={"/checkout"}>Checkout</Link></button> */}
  </div>
  )
}


const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(storedUser);
  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        console.log(user);
        const userId = user._id;
        console.log(userId);
        const response = await axios.post("https://furnit-backend.onrender.com/api/user/cart", {userId});
        setCartProducts(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart products:", error);
        setLoading(false);
      }
    };

    fetchCartProducts();
  }, []);
  return (
    <div className=" px-[6vw]">
      <Navbar />
      {
        cartProducts.map((data)=>{
          return(
            <>
            <Single data={data}/>
            </>
          )
        })
        
      }
      <button className=" m-10 border border-zinc-800 px-2 py-1 rounded-lg"><Link to={"/checkout"}>Checkout</Link></button>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Cart;
