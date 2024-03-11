import React from "react";

const Brands = () => {
  return (
    <div className=" flex flex-col gap-5 py-10">
      <div className=" w-[100%] bg-zinc-900 flex justify-center gap-5 flex-col items-center p-4">
        <span className="text-white">
          Various brands have used our products
        </span>
        <div className=" flex justify-between gap-10">
          <img
            src="assets\img_companylogocompany109_gray_53_48x132.svg"
            alt=""
            className=" w-24"
          />
          <img
            src="assets\img_companylogocompany109_gray_53_48x134.svg"
            alt=""
            className=" w-24"
          />
          <img
            src="assets\img_companylogocompany109_gray_53_48x141.svg"
            alt=""
            className=" w-24"
          />
          <img
            className=" w-24"
            src="assets\img_companylogocompany109_gray_53.svg"
            alt=""
          />
          <img
            className=" w-24"
            src="assets\img_companylogocompany109.svg"
            alt=""
          />
        </div>
      </div>
      <div className=" flex gap-10">
        <div className=" flex  bg-[#111b2a] text-white p-4 w-[100%]">
          <div className=" flex-1 flex flex-col gap-4 justify-center items-start">
            <span>Living Room</span>
            <p className=" text-2xl font-semibold">
              The best foam padded chair
            </p>
            <button className=" p-3 px-6 text-white border-2 border-white">
              Shop Now
            </button>
          </div>
          <div className=" flex-1 w-[20%] flex  justify-center items-center">
            <img
              src="assets\img_sammoghadamkh.png"
              alt=""
              className=" w-[40%]"
            />
          </div>
        </div>
        <div className=" flex  bg-[#11212a] text-white p-4 w-[100%]">
          <div className=" flex-1 flex flex-col gap-4 justify-center items-start">
            <span>Living Room </span>
            <p className=" text-2xl font-semibold">Latest model chandelier</p>
            <button className=" p-3 px-6 text-white border-2 border-white">
              Shop Now
            </button>
          </div>
          <div className=" flex-1 flex justify-center items-center">
            <img
              src="assets\img_phildesforges.png"
              alt=""
              className=" w-[40%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
