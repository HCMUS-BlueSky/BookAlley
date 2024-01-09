import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  voucher: [],
  error: null,
  success: false,
};

const voucherSlice = createSlice({
  name: "voucher",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNewVoucher.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addNewVoucher.fulfilled, (state) => {
      state.success = true;
      state.loading = false;
    });
    builder.addCase(addNewVoucher.rejected, (state) => {
      state.loading = true;
    });
    builder.addCase(getVoucher.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getVoucher.fulfilled, (state, payload) => {
      state.loading = false;
      state.voucher = payload.payload;
    });
    builder.addCase(getVoucher.rejected, (state) => {
      state.loading = true;
    });
  },
});

const voucherReducer = voucherSlice.reducer;

export default voucherReducer;
