import { createSlice } from "@reduxjs/toolkit";

const ToggleSlice = createSlice({
  name: "toggle",
  initialState: { cartIsVisible: true, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = ToggleSlice.actions;
export default ToggleSlice.reducer;
