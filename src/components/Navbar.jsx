import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, isLoggedIn, logout } from "../pages/auth/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const user = useSelector(getUser);
  const isloggedin = useSelector(isLoggedIn);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      localStorage.removeItem("user");
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex justify-between py-6 items-center w-[100%]">
      <div className=" text-3xl font-semibold">
        <Link to="/">Furnit.</Link>
      </div>
      <ul className=" w-[60%] max-w-[500px] flex justify-between  max-md:hidden">
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
      <ul className=" flex gap-5 items-center">
        {!isloggedin ? (
          <Link to={"/login"}>
            <button className=" bg-white border-2 rounded-lg border-black px-2">
              Login
            </button>
          </Link>
        ) : (
          <div className="flex gap-4">
            <span className=" bg-zinc-800 rounded-full flex items-center justify-center text-white font-bold w-8 h-8">
              {user?.name ? user?.name[0]?.toUpperCase() : ""}
            </span>
            <button
              className=" border border-zinc-800 px-2 py-1 rounded-lg"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}

        {/* <PersonIcon /> */}
        <Link to="/cart">
          <ShoppingCartIcon />
        </Link>
        <button className="sm:hidden" onClick={() => setOpen(!open)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 8h16M4 12h16M4 16h16"
            ></path>
          </svg>
        </button>
        <nav
          className={` flex gap-5 font-medium ${
            open
              ? "flex-col absolute right-0 top-16 p-3 bg-white"
              : "max-sm:hidden"
          }`}
        >
          <ul className=" flex flex-col gap-4 md:hidden">
            <Link to="/shop">
              <li>Shop</li>
            </Link>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
            <li>Team</li>
          </ul>
        </nav>
      </ul>
    </div>
  );
};

export default Navbar;
