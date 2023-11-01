import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  userLogin,
  userForgotPassword,
  userResetPassword,
} from "../actions/authAction";

const userToken = localStorage.getItem("access_token")
  ? localStorage.getItem("access_token")
  : null;

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        (state.loading = false), (state.success = true);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        (state.loading = false), (state.error = payload);
      })
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userToken = payload.access_token;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(userForgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userForgotPassword.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(userForgotPassword.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(userResetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userResetPassword.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(userResetPassword.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
