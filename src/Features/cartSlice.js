import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      product.quantity = 1;
      state.products.push(product);
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter((item) => {
        console.log(item.id, action.payload);
        return item.id != action.payload;
      });
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
