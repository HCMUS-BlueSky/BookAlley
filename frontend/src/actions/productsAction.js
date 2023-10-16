import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk("categoris", async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let { data } = await axios.get(`api/book/tags`, config);
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
    let { data } = await axios.get(`api/book/list-brief`, config);
    return data;
  } catch (error) {
    return error;
  }
});
