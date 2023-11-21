import { axiosInstance } from "../utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProductsForSeller = createAsyncThunk(
  "seller/products",
  async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let { data } = await axiosInstance.get(`/api/shop/get-detail`, config);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const getOrdersForSeller = createAsyncThunk(
  "seller/orders",
  async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let { data } = await axiosInstance.get(`/api/order/shop`, config);
      return data;
    } catch (error) {
      return error;
    }
  }
);
