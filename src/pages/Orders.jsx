import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Home/Newsletter";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

const Single = ({ data }) => {
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
    </div>
  );
};

const Orders = () => {
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const res = await axios.get("http://localhost:8000/api/user/orders", {
        withCredentials: true,
      });
      console.log(res);
      setOrder(res.data.order);
      console.log(res);
    };
    getOrders();
  }, []);

  console.log(order);
  return (
    <div className=" px-[6vw]">
      <Navbar />
      {order.length ? (
        <>
          {order.map((data) => {
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
      {order.length ? (
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

export default Orders;
