import { createSlice } from "@reduxjs/toolkit";
import { addNewReview } from "../actions/reviewsAction";

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
    builder.addCase(addNewReview.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.reviews = payload;
    });
    builder.addCase(addNewReview.rejected, (state) => {
      state.loading = true;
    });
  },
});

export default reviewSlice.reducer;
