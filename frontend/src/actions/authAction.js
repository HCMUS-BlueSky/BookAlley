import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `/api/auth/login`,
        { email, password },
        config
      );
      console.log(data);
      localStorage.setItem("userToken", data.userToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
