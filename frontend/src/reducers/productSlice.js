import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../actions/productsAction";

const initialState = {
  loading: false,
  products: [],
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.products = payload;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
      state.products = [];
      // state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
