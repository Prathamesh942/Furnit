import React from "react";

const Experience = () => {
  return (
    <div className=" py-10 flex">
      <div className=" flex-1 flex flex-col justify-center items-center gap-10">
        <p className=" text-2xl font-medium">
          We guarantee the safety of your shopping
        </p>
        <div className=" flex flex-wrap">
          <div className=" w-[50%]">
            <img src="public\assets\img_volume.svg" alt="" />
            <h3 className=" font-bold">Fast Shipping</h3>
            <p className=" text-sm w-[70%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has
            </p>
          </div>
          <div className=" w-[50%]">
            <img src="public\assets\img_lock.svg" alt="" />
            <h3 className=" font-bold">Safe Delivery</h3>
            <p className=" text-sm w-[70%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has
            </p>
          </div>
          <div className=" w-[50%]">
            <img src="public\assets\img_clock.svg" alt="" />
            <h3 className=" font-bold">365 Days Return</h3>
            <p className=" text-sm w-[70%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has
            </p>
          </div>
          <div className=" w-[50%]">
            <img src="public\assets\img_call.svg" alt="" />
            <h3 className=" font-bold">24 hours CS</h3>
            <p className=" text-sm w-[70%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum has
            </p>
          </div>
        </div>
      </div>
      <div className=" flex-1">
        <img
          src="public\assets\img_rectangle16.png"
          alt=""
          className=" aspect-[5/4] object-cover"
        />
      </div>
    </div>
  );
};

export default Experience;
