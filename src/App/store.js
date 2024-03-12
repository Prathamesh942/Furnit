import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Features/cartSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
  },
});
