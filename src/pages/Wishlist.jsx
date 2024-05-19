// import React from "react";
// import Navbar from "../components/Navbar";
// import Newsletter from "../components/Home/Newsletter";
// import Footer from "../components/Footer";
// import { ProductInCart } from "./Cart";

// const cartdata = [
//   {
//     cover: "assetsimg_rectangle1475.png",
//     name: "Complete set of sofa, pillows and bed sheets",
//     price: 75,
//     quantity: 1,
//   },
//   {
//     cover: "assetsimg_rectangle1475.png",
//     name: "Complete set of sofa, pillows and bed sheets",
//     price: 75,
//     quantity: 1,
//   },
// ];

// const Wishlist = () => {
//   return (
//     <div className=" px-[6vw]">
//       <Navbar />
//       <div className="  w-[100%] flex flex-col gap-10 items-center py-10">
//         {cartdata.map((data) => {
//           return (
//             <div className=" flex gap-10 h-[100px] justify-between items-center">
//               <img src="assets\img_trash.svg" alt="" className=" w-14" />
//               <img
//                 src="assets\img_rectangle1475.png"
//                 alt=""
//                 className=" aspect-square h-[100%] object-cover"
//               />
//               <div className=" flex flex-col justify-between h-[100%]">
//                 <h3 className=" w-[60%]">{data.name}</h3>
//                 <span>${data.price}</span>
//               </div>
//               <button className=" p-2 bg-zinc-800 text-white">
//                 Add to cart
//               </button>
//             </div>
//           );
//         })}
//       </div>
//       <Newsletter />
//       <Footer />
//     </div>
//   );
// };

// export default Wishlist;
