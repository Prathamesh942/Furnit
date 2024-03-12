import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex justify-between py-6 items-center w-[100%]">
      <div className=" text-3xl font-semibold">
        <Link to="/">Furnit.</Link>
      </div>
      <ul className=" w-[60%] max-w-[500px] flex justify-between">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <li>Blog</li>
        <li>About</li>
        <li>Contact</li>
        <li>Team</li>
      </ul>
      <ul className=" flex gap-5">
        <SearchIcon />
        <PersonIcon />
        <Link to="/cart">
          <ShoppingCartIcon />
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
