import React from "react";

const products = [
  {
    img: `public\assets\img_image_10.png`,
    name: "Teak wood chair",
    tag: "Living Room",
    price: 24,
  },
  {
    img: `public\assets\img_image_10.png`,
    name: "Teak wood chair",
    tag: "Living Room",
    price: 24,
  },
  {
    img: `public\assets\img_image_10.png`,
    name: "Teak wood chair",
    tag: "Living Room",
    price: 24,
  },
  {
    img: `public\assets\img_image_10.png`,
    name: "Teak wood chair",
    tag: "Living Room",
    price: 24,
  },
  {
    img: `public\assets\img_image_10.png`,
    name: "Teak wood chair",
    tag: "Living Room",
    price: 24,
  },
  {
    img: `public\assets\img_image_10.png`,
    name: "Teak wood chair",
    tag: "Living Room",
    price: 24,
  },
  {
    img: `public\assets\img_image_10.png`,
    name: "Teak wood chair",
    tag: "Living Room",
    price: 24,
  },
  {
    img: `public\assets\img_image_10.png`,
    name: "Teak wood chair",
    tag: "Living Room",
    price: 24,
  },
  {
    img: `public\assets\img_image_10.png`,
    name: "Teak wood chair",
    tag: "Living Room",
    price: 24,
  },
];

const Products = () => {
  return (
    <div className=" w-[100%] flex flex-wrap py-20 justify-between gap-10 gap-y-10">
      {products.map((item) => {
        return (
          <div className=" flex flex-col w-[25%] relative gap-2">
            <img
              src="public\assets\img_image_10.png"
              alt=""
              className=" w-[100%] aspect-[5/6] object-cover"
            />
            <div className=" flex justify-between">
              <span className=" font-semibold">{item.name}</span>
              <span>{item.price}$</span>
            </div>
            <span className=" absolute ">{item.tag}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
