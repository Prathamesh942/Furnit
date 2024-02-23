import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const product = {
  heading: "Complete set of sofa, pillows and bed sheets",
  price: 75,
  stock: 18,
  category: "chair",
  description:
    "In order to sit comfortably for long periods, people need freedom of movement. The Form rocking chair has a molded plastic shell with a wide, curved seat, which gives plenty of opportunity for changing one’s sitting position.",
};

const reviews = [
  {
    name: "John smith",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
  },
  {
    name: "John smith",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
  },
  {
    name: "John smith",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
  },
  {
    name: "John smith",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.",
  },
];

const Reviews = () => {
  return (
    <div className=" flex-1 flex flex-col w-[100%] items-center gap-10 py-10">
      <h2 className=" text-2xl font-semibold">Reviews</h2>
      <div className=" flex flex-wrap justify-between gap-y-10">
        {reviews.map((review) => {
          return (
            <div className=" flex flex-col ">
              <div className=" flex justify-between">
                <span>{review.name}</span>
                <span>{review.rating}</span>
              </div>
              <span>{review.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const WriteReviws = () => {
  return (
    <div className=" flex-1 w-[100%] flex flex-col gap-8 py-10">
      <h2 className=" text-center  text-2xl font-semibold">
        Write your review
      </h2>
      <span>Stars</span>
      <div className=" flex flex-col gap-8 items-start">
        <div className=" flex gap-5 w-[100%]">
          <div className=" flex flex-col">
            <span>Your Name</span>
            <input
              type="text"
              placeholder="Your name"
              className=" border border-black p-2"
            />
          </div>
          <div className=" flex flex-col">
            <span>Your Email</span>
            <input
              type="text"
              placeholder="Your Email"
              className=" border border-black p-2"
            />
          </div>
        </div>

        <div className=" flex flex-col w-[100%]">
          <span>Your Review</span>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Write your review here"
            className=" border border-black p-2"
          ></textarea>
        </div>
        <button className=" bg-zinc-800 p-2 text-white px-4 ">Submit</button>
      </div>
    </div>
  );
};

const Product = () => {
  const [count, setCount] = useState(0);
  return (
    <div className=" px-[6vw]">
      <Navbar />
      <div className=" flex gap-10 py-10">
        <div className=" flex-[4]">
          <img
            src="assets\img_rectangle1475.png"
            alt=""
            className=" aspect-square object-cover"
          />
        </div>
        <div className=" flex-[6] w-[100%] flex flex-col gap-5 items-start">
          <h2 className=" text-xl font-semibold">{product.heading}</h2>
          <span>stars</span>
          <span>{product.price}$</span>
          <span>Stock : {product.stock}</span>
          <span>Category : {product.category}</span>
          <p className=" w-[70%]">{product.description}</p>
          <div className=" flex gap-5">
            <div className=" p-2 border border-black flex gap-2 w-20 justify-evenly">
              <button
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                -
              </button>
              {count}
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </button>
            </div>
            <button className=" text-white bg-zinc-900 p-2 px-4">
              Add to cart
            </button>
            <button className=" p-2 border border-black">
              <img src="assets\img_favorite.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className=" flex gap-20">
        <Reviews />
        <WriteReviws />
      </div>
      <Footer />
    </div>
  );
};

export default Product;
