import React from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Home/Newsletter";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className=" flex flex-col gap-5 py-5">
      <h3 className=" text-xl font-semibold">Contact information</h3>
      <div className=" flex gap-10 max-md:flex-col">
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
      <div className=" flex gap-10 max-md:flex-col">
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
  const user = JSON.parse(localStorage.getItem("user"));
  const handleCheckout = async ()=>{
    try {
      const userId = user._id;
      // Make a POST request to your backend API endpoint for checkout
      const response = await axios.post('https://furnit-backend.onrender.com/api/user/check', {
        // Pass any required data for the checkout process, such as user ID or cart items
        userId // Replace 'user_id_here' with the actual user ID
      });
  
      // If the request is successful, log the response data and any further actions
      console.log('Checkout successful:', response.data);
      // You can also redirect the user to a confirmation page or perform other actions here
    } catch (error) {
      // If there's an error, log the error message and handle it appropriately
      console.error('Error during checkout:', error.message);
      // You can display an error message to the user or retry the checkout process
    }
  }
  return (
    <div className=" px-[6vw]">
      <Navbar />
      <div className=" py-10 flex flex-col items-center">
        <h2 className=" text-3xl font-semibold">Checkout</h2>
        <div className=" flex justify-center w-[100%] max-md:flex-col">
          <div className=" flex flex-col">
            <Contact />
            <Shipping />
            <button className=" bg-zinc-800 text-white p-2">  <Link to={"/"}> <button onClick={handleCheckout}>Place Order</button></Link></button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Checkout;
