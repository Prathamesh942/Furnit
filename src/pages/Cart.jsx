import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart, selectCartItems } from "./cart/cartSlice";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Home/Newsletter";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const Single = ({ data }) => {
  const dispatch = useDispatch();
  console.log(data);
  return (
    <div className=" flex gap-8 h-[100px] items-center border p-2 border-zinc-400">
      <img
        src={data.product.productImg}
        alt=""
        className=" aspect-square h-[100%] object-cover"
      />
      <div className=" flex flex-col justify-between">
        <h3 className=" w-[60%]">{data.name}</h3>
        <span>${data.product.price}</span>
      </div>
      <span>Quantity: {data.quantity}</span>
      <button
        className=" bg-red-500 p-2 rounded-lg text-white"
        onClick={() => {
          dispatch(removeProductFromCart(data._id));
        }}
      >
        Remove from cart
      </button>
    </div>
  );
};

const Cart = () => {
  const [loading, setLoading] = useState(true);

  const cart = useSelector(selectCartItems);
  console.log(cart);
  return (
    <div className=" px-[6vw]">
      <Navbar />
      {cart.length ? (
        <>
          {cart.map((data) => {
            return (
              <>
                <Single data={data} />
              </>
            );
          })}{" "}
        </>
      ) : (
        <img
          className=" w-[40%] "
          src="https://i.pinimg.com/736x/f9/31/46/f931468e3e964288f44f74bf060aadde.jpg"
        />
      )}
      {cart.length ? (
        <button className=" m-10 border border-zinc-800 px-2 py-1 rounded-lg">
          <Link to={"/checkout"}>Checkout</Link>
        </button>
      ) : (
        <></>
      )}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Cart;
