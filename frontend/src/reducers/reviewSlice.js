import { createSlice } from "@reduxjs/toolkit";
import { addNewReview, getProductReview } from "../actions/reviewsAction";

const initialState = {
  loading: false,
  reviews: [],
  error: null,
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNewReview.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addNewReview.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(addNewReview.rejected, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductReview.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductReview.fulfilled, (state, payload) => {
      state.loading = false;
      state.reviews = payload.payload;
    });
    builder.addCase(getProductReview.rejected, (state) => {
      state.loading = true;
    });
  },
});

export default reviewSlice.reducer;
