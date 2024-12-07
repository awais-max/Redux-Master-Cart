import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import toggle from "./ToggleSlice";

const store = configureStore({
  reducer: { cart: cartReducer, toggleCart: toggle },
});

export default store;
