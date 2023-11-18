import { axiosPublicInstance } from "../utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk("categories", async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let { data } = await axiosPublicInstance.get(`api/book/tags`, config);
    return data;
  } catch (error) {
    return error;
  }
});

export const getProducts = createAsyncThunk("products", async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let { data } = await axiosPublicInstance.get(`api/book/list`, config);
    return data;
  } catch (error) {
    return error;
  }
});
