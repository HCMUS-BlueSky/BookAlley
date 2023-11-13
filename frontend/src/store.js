import { configureStore, createSlice } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice.js";
import productSlice from "./reducers/productSlice.js";
import reviewSlice from "./reducers/reviewSlice.js";
import shopSlice from "./reducers/shopSlice.js";
import cartSlice from "./reducers/cart/cartSlice.js";
import voucherReducer from "./reducers/voucherSlice.js";

export default configureStore({
  reducer: {
    auth: authReducer,
    products: productSlice,
    reviews: reviewSlice,
    shop: shopSlice,
    cart: cartSlice,
    voucher: voucherReducer,
  },
});
