import { Password } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: user ? true : false,
    user: user ? user : null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.isLoggedIn = false;
      state.user = null;
      console.log(user);
    },
  },
});

export const login = (userCredentials) => async (dispatch) => {
  console.log(userCredentials);
  const { email, password } = userCredentials;
  try {
    const response = await axios.post("http://localhost:8000/api/user/login", {
      email,
      password,
    });
    console.log(response);
    const user = response.data.data.user;
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(loginSuccess(user));
  } catch (error) {
    console.log(error);
    console.error("Failed to login:", error);
  }
};

export const { loginSuccess, logout } = authSlice.actions;
export const getUser = (state) => state.auth.user;
export const isLoggedIn = (state) => state.auth.isLoggedIn;
export default authSlice.reducer;
