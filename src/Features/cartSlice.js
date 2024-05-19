import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    addToCartSuccess: (state, action) => {
      const product = action.payload;
      product.quantity = 1;
      state.products.push(product);
    },
    removeFromCartSuccess: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
    },
    fetchCartRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCartSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchCartFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addToCartSuccess,
  removeFromCartSuccess,
  fetchCartRequest,
  fetchCartSuccess,
  fetchCartFailure,
} = cartSlice.actions;


export const addToCart = (product) => async (dispatch, getState) => {
  try {
    // Call backend API to update the cart
    await axios.post("https://furnit-backend.onrender.com/api/cart/add", product);

    // Dispatch the success action
    dispatch(addToCartSuccess(product));
  } catch (error) {
    // Handle error
    console.error("Error adding to cart:", error);
  }
};

export const removeFromCart = (productId) => async (dispatch, getState) => {
  try {
    // Call backend API to update the cart
    await axios.post("https://furnit-backend.onrender.com/api/cart/remove", { productId });

    // Dispatch the success action
    dispatch(removeFromCartSuccess(productId));
  } catch (error) {
    // Handle error
    console.error("Error removing from cart:", error);
  }
};

// Async action creator to fetch cart data
export const fetchCart = () => async (dispatch, getState) => {
  dispatch(fetchCartRequest());
  try {
    // Call backend API to fetch cart data
    const response = await axios.get("https://furnit-backend.onrender.com/api/cart");

    // Dispatch the success action with cart data
    dispatch(fetchCartSuccess(response.data.products));
  } catch (error) {
    // Dispatch the failure action with error message
    dispatch(fetchCartFailure("Failed to fetch cart data"));
  }
};



export default cartSlice.reducer;
