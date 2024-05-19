import React from "react";

const Footer = () => {
  return (
    <div className=" bg-zinc-900 flex flex-col text-white gap-10 p-8 max-md:hidden">
      <div className=" flex justify-between gap-10">
        <div className=" flex-1 flex flex-col gap-4">
          <h2 className=" text-xl font-semibold">Furnit.</h2>
          <span>
            Lorem ipsum dolor sit amet litam consectetur adipiscing elit,
            facilisi vivamus proin lit laoreet phasel alilus porttitor inter,
            facilisis condiment tarime egestas rhoncus dapibus iaculis alemir.
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h2 className=" text-xl font-semibold">Customer</h2>
          <ul className=" flex flex-col gap-3">
            <li>Order Status</li>
            <li>Collections</li>
            <li>Our Story</li>
            <li>Affiliates</li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h2 className=" text-xl font-semibold">Information</h2>
          <ul className=" flex flex-col gap-3">
            <li>Customer Service</li>
            <li>Careers</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h2 className=" text-xl font-semibold">Follow us</h2>
          <ul className=" flex gap-3">
            <img
              src="assets\img_camera.svg"
              alt=""
              className=" bg-white p-2 rounded-full"
            />
            <img
              className=" bg-white p-2 rounded-full"
              src="assets\img_facebook.svg"
              alt=""
            />
            <img
              className=" bg-white p-2 rounded-full"
              src="assets\img_twitter.svg"
              alt=""
            />
            <img
              className=" bg-white p-2 rounded-full"
              src="assets\img_music.svg"
              alt=""
            />
          </ul>
        </div>
      </div>
      <div className=" flex justify-between">
        <span>© Copyright 2022. All Rights Reserved.</span>
        <div>
          <span>Terms and conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
