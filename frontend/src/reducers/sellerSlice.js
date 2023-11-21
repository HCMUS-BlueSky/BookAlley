import { createSlice } from "@reduxjs/toolkit";
import { getProductsForSeller } from "../actions/sellerAction";

const initialState = {
  loading: false,
  infos: {},
  error: null,
};

const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsForSeller.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProductsForSeller.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.infos = payload;
    });
    builder.addCase(getProductsForSeller.rejected, (state) => {
      state.loading = false;
      state.infos = {};
    });
  },
});

export default sellerSlice.reducer;
