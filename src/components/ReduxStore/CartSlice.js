import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, title: "Book 1 : Pride and Prejudice", price: 5 },
    { id: 2, title: "Book 2 : One Hundred Years of Solitude", price: 6 },
    { id: 3, title: "Book 3 : The Lord of the Rings", price: 7 },
  ],
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id == product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => {
        item.id !== productId;
      });
    },
    incrementCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id == product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    decrementCart: (state, action) => {
      const productID = action.payload;
      const existingProduct = state.cart.find(
        (item) => item.id == productID.id
      );
      if (existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      } else {
        state.cart = state.cart.filter((item) => {
          return item.id != productID.id;
        });
      }
    },
  },
});

export const { addToCart, removeCart, incrementCart, decrementCart } =
  cartSlice.actions;
export default cartSlice.reducer;
