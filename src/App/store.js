import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../pages/auth/authSlice";
import cartReducer from "../pages/cart/cartSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});
