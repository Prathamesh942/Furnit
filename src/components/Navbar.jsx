import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <div className=" flex justify-between py-6 items-center w-[100%]">
      <div className=" text-3xl font-semibold">Furnit.</div>
      <ul className=" w-[60%] max-w-[500px] flex justify-between">
        <li>Home</li>
        <li>Shop</li>
        <li>Blog</li>
        <li>About</li>
        <li>Contact</li>
        <li>Team</li>
      </ul>
      <ul className=" flex gap-5">
        <SearchIcon />
        <PersonIcon />
        <ShoppingCartIcon />
      </ul>
    </div>
  );
};

export default Navbar;
