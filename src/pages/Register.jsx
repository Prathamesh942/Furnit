import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("api/user/register", {
        name,
        email,
        password,
      });
      console.log("registered successfully:", response);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" px-[6vw] flex justify-center items-center w-screen h-screen bg-[#feefe0] max-md:flex-col">
      <div className=" w-[70%] max-md:w-[80%] aspect-video rounded-xl flex shadow-2xl max-md:flex-col">
        <div className=" flex flex-1">
          <img
            className=" w-[100%] object-cover rounded-tl-xl rounded-bl-xl"
            src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className=" flex flex-1 bg-white rounded-xl">
          <div className=" flex flex-col justify-center  items-center w-full h-full">
            <h1 className=" text-2xl font-bold mb-4">Register</h1>
            <form className=" flex flex-col w-[50%] space-y-4 min-w-[200px]">
              <input
                className=" px-4 py-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                className=" px-4 py-2 border border-gray-300 rounded-md"
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className=" px-4 py-2 border border-gray-300 rounded-md"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                className=" px-4 py-2 bg-black text-white rounded-md"
                onClick={handleRegister}
              >
                Register
              </button>
              <span>
                Already have an account?{" "}
                <Link to="/login">
                  <span className=" text-orange-600">Login</span>
                </Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
