import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
  status: "idle",
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(action);
    },
    setCart: (state, action) => {
      state.items = action.payload;
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

export const { addItem, setCart, setStatus, setError } = cartSlice.actions;

export const addProductToCart = (product, quantity) => async (dispatch) => {
  try {
    dispatch(setStatus("loading"));
    const res = await axios.post(
      "http://localhost:8000/api/user/add",
      {
        productId: product._id,
        quantity,
      },
      {
        withCredentials: true,
      }
    );
    dispatch(fetchCartProducts());
    dispatch(addItem(product));
    dispatch(setStatus("succeeded"));
  } catch (error) {
    dispatch(setError(error.toString()));
    dispatch(setStatus("failed"));
    console.error("Failed to add product to cart:", error);
  }
};

export const fetchCartProducts = (userId) => async (dispatch) => {
  try {
    dispatch(setStatus("loading"));
    const response = await axios.get(`http://localhost:8000/api/user/cart`);
    console.log(response.data);
    dispatch(setCart(response.data));
    dispatch(setStatus("succeeded"));
  } catch (error) {
    dispatch(setError(error.toString()));
    dispatch(setStatus("failed"));
    console.error("Failed to fetch cart products:", error);
  }
};

export const removeProductFromCart = (productId) => async (dispatch) => {
  try {
    dispatch(setStatus("loading"));
    await axios.delete(`http://localhost:8000/api/user/remove`, {
      data: { productId },
      withCredentials: true,
    });
    dispatch(fetchCartProducts());
    dispatch(setStatus("succeeded"));
  } catch (error) {
    dispatch(setError(error.toString()));
    dispatch(setStatus("failed"));
    console.error("Failed to remove product from cart:", error);
  }
};

export const selectCartItems = (state) => state.cart.items;
export const selectCartStatus = (state) => state.cart.status;
export const selectCartError = (state) => state.cart.error;

export default cartSlice.reducer;
