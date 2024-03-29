import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Home/Newsletter";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Features/cartSlice";

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
  const dispatch = useDispatch();

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
      <img
        src="assets\img_trash.svg"
        alt=""
        onClick={() => {
          console.log(data.id);
          dispatch(removeFromCart(data.id));
        }}
      />
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
  const items = useSelector((state) => state.cart.products);

  useEffect(()=>{
    const handleCart = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:8000/api/user/cart",{},{headers:{'Authorization':`Bearer ${getCookie('accessToken')}`}});
        const { user, accessToken } = response.data.data;
        document.cookie = "accessToken" + "=" + (accessToken || "")
        console.log(document.cookie);
      console.log('User logged in successfully:', user);
        navigate("/");
      } catch (error) {
        console.error("Login failed:", error);
      }
    };
  },[])
  return (
    <div className=" px-[6vw]">
      <Navbar />
      <div className=" flex py-10 justify-between">
        {items.length == 0 ? (
          <div>Your cart is empty ☹️</div>
        ) : (
          <>
            {" "}
            <div className=" flex flex-col gap-10 flex-[2]">
              {items.map((item) => {
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
          </>
        )}
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Cart;
