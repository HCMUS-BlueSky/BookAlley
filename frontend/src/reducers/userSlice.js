import { createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../actions/userActions";

const initialState = {
  loading: false,
  error: false,
  id: "",
  name: "",
  email: "",
  phone: "",
  address: "",
  addressId: "",
  avatar: "",
  isAdmin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAddress.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAddress.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.name = payload[0].fullname;
      state.phone = payload[0].phone;
      state.address =
        payload[0].address +
        ", Phường " +
        payload[0].ward +
        ", Quận " +
        payload[0].district +
        ", " +
        payload[0].city;
      state.addressId = payload[0]._id;
    });
    builder.addCase(getAddress.rejected, (state) => {
      state.loading = false;
      state.infos = {};
    });
  },
});

export default userSlice.reducer;
