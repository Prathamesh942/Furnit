import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Home/Newsletter";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const Contact = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col gap-5 py-5">
      <h3 className="text-xl font-semibold">Contact information</h3>
      <div className="flex gap-10 max-md:flex-col">
        <div className="flex flex-col">
          <span>First Name *</span>
          <input
            type="text"
            name="firstName"
            placeholder="Your first name here"
            className="border border-black p-2"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <span>Last Name *</span>
          <input
            type="text"
            name="lastName"
            placeholder="Your last name here"
            className="border border-black p-2"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="flex gap-10 max-md:flex-col">
        <div className="flex flex-col">
          <span>Phone *</span>
          <input
            type="text"
            name="phone"
            placeholder="Your phone here"
            className="border border-black p-2"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <span>Email *</span>
          <input
            type="email"
            name="email"
            placeholder="Your email here"
            className="border border-black p-2"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  );
};

const Shipping = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col gap-5 py-5">
      <div className="flex flex-col">
        <span>Street address *</span>
        <textarea
          name="streetAddress"
          id="streetAddress"
          cols="30"
          rows="10"
          className="border border-black p-2 h-[100px]"
          value={formData.streetAddress}
          onChange={handleChange}
          required
        ></textarea>
      </div>
    </div>
  );
};

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    streetAddress: "",
  });

  const handleCheckout = async (e) => {
    e.preventDefault();

    if (
      formData.firstName.trim() === "" ||
      formData.lastName.trim() === "" ||
      formData.phone.trim() === "" ||
      formData.email.trim() === "" ||
      formData.streetAddress.trim() === ""
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      const response = await axios.post("api/user/check");
      console.log("Order placed successfully:", response.data);
      localStorage.removeItem("cartItems");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Error placing order. Please try again later.");
    }
  };

  return (
    <div className="px-[6vw]">
      <Navbar />
      <div className="py-10 flex flex-col items-center">
        <h2 className="text-3xl font-semibold">Checkout</h2>
        <form onSubmit={handleCheckout}>
          <div className="flex justify-center w-[100%] max-md:flex-col">
            <div className="flex flex-col">
              <Contact formData={formData} setFormData={setFormData} />
              <Shipping formData={formData} setFormData={setFormData} />
              <button type="submit" className="bg-zinc-800 text-white p-2">
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Checkout;
