import React from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Home/Newsletter";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className=" flex flex-col gap-5 py-5">
      <h3 className=" text-xl font-semibold">Contact information</h3>
      <div className=" flex gap-10">
        <div className=" flex flex-col">
          <span>First Name</span>
          <input
            type="text"
            placeholder="Your first name here"
            className=" border border-black p-2"
          />
        </div>
        <div className=" flex flex-col">
          <span>Last Name</span>
          <input
            type="text"
            placeholder="Your last name here"
            className=" border border-black p-2"
          />
        </div>
      </div>
      <div className=" flex gap-10">
        <div className=" flex flex-col">
          <span>Phone</span>
          <input
            type="text"
            placeholder="Your phone here"
            className=" border border-black p-2"
          />
        </div>
        <div className=" flex flex-col">
          <span>Email</span>
          <input
            type="text"
            placeholder="Your email here"
            className=" border border-black p-2"
          />
        </div>
      </div>
    </div>
  );
};

const Shipping = () => {
  return (
    <div className=" flex flex-col gap-5 py-5">
      <h3 className=" text-xl font-semibold">Shipping Method</h3>
      <div className=" flex gap-5">
        <div className=" p-2 border border-zinc-800 flex gap-3">
          <img src="assets\img_computer.svg" alt="" />
          <span>Store</span>
        </div>
        <div className=" p-2 border border-zinc-800 flex gap-3">
          <img src="assets\img_airplane.svg" alt="" />
          <span>Delivery</span>
        </div>
      </div>
      <div className=" flex flex-col">
        <span>Country/Region</span>
        <select name="" id="" className=" border border-black p-2"></select>
      </div>
      <div className=" flex flex-col">
        <span>Street address</span>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className=" border border-black p-2 h-[100px]"
        ></textarea>
      </div>
    </div>
  );
};

const Checkout = () => {
  return (
    <div className=" px-[6vw]">
      <Navbar />
      <div className=" py-10 flex flex-col items-center">
        <h2 className=" text-3xl font-semibold">Checkout</h2>
        <div className=" flex justify-between w-[60%]">
          <div className=" flex flex-col">
            <Contact />
            <Shipping />
            <div className=" flex flex-col gap-5 py-5">
              <h3 className=" text-xl font-semibold">Payment Method</h3>
              <div className=" flex gap-5 ">
                <div className=" w-20 h-10  border border-zinc-500 flex justify-center items-center">
                  <img
                    className=" p-2  w-[100%] object-cover"
                    src="assets\img_visa.png"
                    alt=""
                  />
                </div>
                <div className=" w-20 h-10 border border-zinc-500 flex justify-center items-center">
                  <img
                    className=" p-2 w-[100%] object-cover"
                    src="assets\img_refresh.svg"
                    alt=""
                  />
                </div>
                <div className=" w-20 h-10 border border-zinc-500 flex justify-center items-center">
                  <img
                    className=" p-2 w-[100%] object-cover"
                    src="assets\img_signal.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-5 py-5">
            <h3 className=" text-xl font-semibold">Your Order</h3>
            <div className=" flex justify-between gap-10">
              <span>Complete set of sofa... 1x</span>
              <span>$ 75.00</span>
            </div>
            <div className=" flex justify-between gap-10">
              <span>Teak wood chair 1x</span>
              <span>$ 24.00</span>
            </div>
            <hr />
            <div className=" flex justify-between gap-10">
              <span>Subtotal</span>
              <span>$ 99.00</span>
            </div>
            <hr />
            <div className=" flex justify-between gap-10">
              <span>Total</span>
              <span>$ 99.00</span>
            </div>
            <button className=" bg-zinc-800 text-white p-2">Place Order</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Checkout;
