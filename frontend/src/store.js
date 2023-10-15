import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice.js";
import productSlice from "./reducers/productSlice.js";

export default configureStore({
  reducer: {
    auth: authReducer,
    products: productSlice,
  },
});
