import { createSlice } from "@reduxjs/toolkit";
import { getOrders } from "../actions/orderAction";

const initialState = {
  loading: false,
  orders: [],
  error: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrders.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getOrders.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.orders = payload;
    });
    builder.addCase(getOrders.rejected, (state) => {
      state.loading = false;
      state.products = [];
    });
  },
});

export default orderSlice.reducer;
