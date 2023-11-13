import { axiosInstance, axiosPublicInstance } from "../utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addCart = createAsyncThunk(
  "cart/add",
  async ({ product_id, quantity }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let { data } = await axiosInstance.post(
        `/api/cart`,
        { product_id, quantity },
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCart = createAsyncThunk(
  "cart/get",
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let { data } = await axiosInstance.get(`/api/cart`, config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeItems = createAsyncThunk(
  "cart/remove-item",
  async ({ product_id, quantity }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let { data } = await axiosInstance.delete(
        `/api/cart`,
        { data: { product_id, quantity } },
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addOrder = createAsyncThunk(
  "cart/add/order",
  async (
    { voucher, items, shipping_info, shipping_method },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let { data } = await axiosInstance.post(
        `/api/order`,
        { voucher, items, shipping_info, shipping_method },
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
