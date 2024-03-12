import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Features/cartSlice";

const products = [
  {
    id: 1,
    img: `assets\img_image_10.png`,
    name: "Teak wood chair",
    tag: "Living Room",
    price: 24,
  },
  {
    id: 2,
    img: `assets\img_image_10.png`,
    name: "Teak wood chair",
    tag: "Living Room",
    price: 24,
  },
  {
    id: 3,
    img: `assets\img_image_10.png`,
    name: "Teak wood chair",
    tag: "Living Room",
    price: 24,
  },
  {
    id: 4,
    img: `assets\img_image_10.png`,
    name: "Teak wood chair",
    tag: "Living Room",
    price: 24,
  },
  {
    id: 5,
    img: `assets\img_image_10.png`,
    name: "Teak wood chair",
    tag: "Living Room",
    price: 24,
  },
  {
    id: 6,
    img: `assets\img_image_10.png`,
    name: "Teak wood chair",
    tag: "Living Room",
    price: 24,
  },
  {
    id: 7,
    img: `assets\img_image_10.png`,
    name: "Teak wood chair",
    tag: "Living Room",
    price: 24,
  },
  {
    id: 8,
    img: `assets\img_image_10.png`,
    name: "Teak wood chair",
    tag: "Living Room",
    price: 24,
  },
  {
    id: 9,
    img: `assets\img_image_10.png`,
    name: "Teak wood chair",
    tag: "Living Room",
    price: 24,
  },
];

const Products = () => {
  const dispatch = useDispatch();
  return (
    <div className=" w-[100%] flex flex-wrap py-20 justify-between gap-10 gap-y-10">
      {products.map((item) => {
        return (
          <div className=" flex flex-col w-[25%] relative gap-2">
            <img
              src="assets\img_image_10.png"
              alt=""
              className=" w-[100%] aspect-[5/6] object-cover rounded-md"
            />
            <div className=" flex justify-between">
              <span className=" font-semibold">{item.name}</span>
              <span>{item.price}$</span>
            </div>
            <span className=" absolute ">{item.tag}</span>
            <button
              className=" bg-zinc-700 text-white rounded-lg p-1"
              onClick={() => {
                dispatch(addToCart(item));
              }}
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
