import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Home/Newsletter";
import Footer from "../components/Footer";

const cartdata = [
  {
    cover: "assetsimg_rectangle1475.png",
    name: "Complete set of sofa, pillows and bed sheets",
    price: 75,
    quantity: 1,
  },
  {
    cover: "assetsimg_rectangle1475.png",
    name: "Complete set of sofa, pillows and bed sheets",
    price: 75,
    quantity: 1,
  },
];

export const ProductInCart = ({ data, onadd }) => {
  const [count, setCount] = useState(data.quantity);
  console.log(data);
  return (
    <div className=" flex gap-8 h-[100px] items-center">
      <img
        src="assets\img_rectangle1475.png"
        alt=""
        className=" aspect-square h-[100%] object-cover"
      />
      <div className=" flex flex-col justify-between">
        <h3 className=" w-[60%]">{data.name}</h3>
        <span>${data.price}</span>
      </div>
      <div className=" p-2 border border-black flex gap-2 w-20 justify-evenly">
        <button
          onClick={() => {
            setCount(count - 1);
            onadd((prev) => prev - data.price);
          }}
        >
          -
        </button>
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
            onadd((prev) => prev + data.price);
          }}
        >
          +
        </button>
      </div>
      <span className=" w-20">{"$" + count * data.price}</span>
      <img src="assets\img_trash.svg" alt="" />
    </div>
  );
};

function calculatebill() {
  return cartdata.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
}

const Cart = () => {
  const [total, setTotal] = useState(calculatebill());
  return (
    <div className=" px-[6vw]">
      <Navbar />
      <div className=" flex py-10">
        <div className=" flex flex-col gap-10 flex-[2]">
          {cartdata.map((item) => {
            console.log(item);
            return <ProductInCart data={item} onadd={setTotal} />;
          })}
        </div>
        <div className=" flex flex-col w-[100%] flex-1 justify-center items-center gap-10 ">
          <h2>
            Cart Total:{" "}
            <span className=" font-bold text-xl">{"$ " + total}</span>{" "}
          </h2>
          <button className="p-2 px-4 bg-zinc-800 text-white">
            Checkout Now
          </button>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Cart;
