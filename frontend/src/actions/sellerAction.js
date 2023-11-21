import { axiosInstance } from "../utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProductsForSeller = createAsyncThunk(
  "shop/products",
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
