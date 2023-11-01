import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addNewReview = createAsyncThunk(
  "review/:product_id",
  async ({ product_id, content, rating }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `/api/review/${product_id}`,
        { content, rating },
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
