import { axiosInstance } from '../utils/axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addNewReview = createAsyncThunk(
  "add-review",
  async (
    { access_token, product_id, content, rating, images },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${access_token}`,
        },
      };
      const formData = new FormData();
      for (var i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
      formData.append("content", content);
      formData.append("rating", rating);
      const { data } = await axiosInstance.post(
        `/api/review/${product_id}`,
        formData,
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProductReview = createAsyncThunk(
  "get-review",
  async ({ product_id }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let { data } = await axiosInstance.get(`/api/review/${product_id}`, config);
      // data.created_at = await Date.parse(date.created_at);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
