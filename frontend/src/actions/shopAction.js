import { axiosPublicInstance } from "../utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProductsForSeller = createAsyncThunk(
  "shop/products",
  async ({ shop_id }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let { data } = await axiosPublicInstance.get(
        `/api/shop/get-detail/${shop_id}`,
        config
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);
