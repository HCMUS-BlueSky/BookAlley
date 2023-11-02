import { axiosInstance } from '../utils/axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk("categories", async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let { data } = await axiosInstance.get(`api/book/tags`, config);
    return data;
  } catch (error) {
    return error;
  }
});

export const getProducts = createAsyncThunk("products", async () => {
  try {
    let amount = 10;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let { data } = await axiosInstance.get(
      `api/book/list-brief?amount=${amount}`,
      config
    );
    return data;
  } catch (error) {
    return error;
  }
});
