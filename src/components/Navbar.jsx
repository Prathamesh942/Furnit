import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <div className=" flex justify-between py-6">
      <div>Furnit.</div>
      <ul className=" w-[60%] max-w-[500px] flex justify-between ">
        <li>Home</li>
        <li>Shop</li>
        <li>Blog</li>
        <li>About</li>
        <li>Contact</li>
        <li>Team</li>
      </ul>
      <ul>
        <SearchIcon />
        <PersonIcon />
        <ShoppingCartIcon />
      </ul>
    </div>
  );
};

export default Navbar;
