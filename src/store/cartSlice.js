import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    reset(state) {
      return (state = initialState);
    },
  },
});

export const { add, remove, reset } = cartSlice.actions;
export default cartSlice.reducer;
