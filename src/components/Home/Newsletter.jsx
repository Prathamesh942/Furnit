import React from "react";

const Newsletter = () => {
  return (
    <div className=" py-10">
      <div className=" px-10 py-4 flex bg-[#0d2f37] text-white justify-center items-center">
        <div className=" flex-1  flex flex-col gap-8">
          <h2 className=" text-3xl font-semibold max-md:text-xl">
            Subscribe now and get 10% off all items
          </h2>
          <span className=" w-[70%] max-md:hidden">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </span>
          <div className=" max-md:flex max-md:flex-col">
            <input
              type="text"
              className=" w-[70%] h-[50px]"
              placeholder="Your email here."
            />
            <button className=" bg-zinc-800 text-white w-[30%] min-w-[100px] h-[50px] border border-white">
              Subscribe
            </button>
          </div>
        </div>
        <img
          className="flex-1 w-[30%] object-cover max-md:hidden"
          src="assets\img_pexelsphotoby.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Newsletter;
