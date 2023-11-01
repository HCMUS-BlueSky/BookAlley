import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addNewReview = createAsyncThunk(
  "review/:product_id",
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
      // formData.append("images", images);
      formData.append("content", content);
      formData.append("rating", rating);
      for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }
      const { data } = await axios.post(
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
