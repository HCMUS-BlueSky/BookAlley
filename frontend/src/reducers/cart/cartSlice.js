import { createSlice } from "@reduxjs/toolkit";
import { addCart } from "../../actions/cartAction";

const initialState = {
  loading: false,
  cart: [],
  error: null,
  success: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCart.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(addCart.fulfilled, (state) => {
        (state.loading = false), (state.success = true);
      })
      .addCase(addCart.rejected, (state, { payload }) => {
        (state.loading = false), (state.error = payload);
      });
  },
});

const cartReducer = cartSlice.reducer;

export default cartReducer;
