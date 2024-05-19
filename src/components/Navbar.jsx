import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import {useUser} from "../App/UserContext"
import {useNavigate} from "react-router-dom"

const Navbar = () => {

  const navigate= useNavigate();
  const { user } = useUser();
  const handleLogout = async ()=>{
    try {
      //  const res = await axios.post("http://localhost:3000/api/auth/logout")
       localStorage.removeItem("user")
      //  console.log(res);
       navigate("/login")
    } catch (error) {
       console.log(error);
    }
   }
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
      <ul className=" flex gap-5 items-center">
        <SearchIcon />{
          !user ? 
        <Link to={"/login"}><button className=" bg-white border-2 rounded-lg border-black px-2">Login</button></Link> :<div className="flex gap-4"><span className=" bg-zinc-800 rounded-full flex items-center justify-center text-white font-bold w-8 h-8">{user.name[0].toUpperCase()}</span><button className=" border border-zinc-800 px-2 py-1 rounded-lg" onClick={handleLogout}>Logout</button></div>
}
        
        {/* <PersonIcon /> */}
        <Link to="/cart">
          <ShoppingCartIcon />
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
