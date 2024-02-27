import React from "react";

const data = [
  {
    img: "publicassetsimg_image_1.png",
    tag: "Living Room",
    name: "Teak wood chair",
  },
  {
    img: "publicassetsimg_image_1.png",
    tag: "Living Room",
    name: "Teak wood chair",
  },
  {
    img: "publicassetsimg_image_1.png",
    tag: "Living Room",
    name: "Teak wood chair",
  },
  {
    img: "publicassetsimg_image_1.png",
    tag: "Living Room",
    name: "Teak wood chair",
  },
  {
    img: "publicassetsimg_image_1.png",
    tag: "Living Room",
    name: "Teak wood chair",
  },
  {
    img: "publicassetsimg_image_1.png",
    tag: "Living Room",
    name: "Teak wood chair",
  },
  {
    img: "publicassetsimg_image_1.png",
    tag: "Living Room",
    name: "Teak wood chair",
  },
  {
    img: "publicassetsimg_image_1.png",
    tag: "Living Room",
    name: "Teak wood chair",
  },
];

const Newest = () => {
  return (
    <div className=" py-10">
      <div className=" flex flex-col justify-center items-center gap-2 ">
        <span className=" text-4xl font-semibold">Our Newest Product</span>
        <p className="">
          Made of the best materials and with a design that follows the times
        </p>
      </div>
      <div className=" flex flex-wrap gap-[2%] ">
        {data.map((item) => {
          return (
            <div className=" w-[23%] my-5 relative">
              <img
                src="assets\img_image_1.png"
                alt=""
                className=" w-[100%] aspect-[3/4] object-cover"
              />
              <span className=" absolute bottom-8 text-white bg-zinc-800 p-2">
                {item.tag}
              </span>
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Newest;
