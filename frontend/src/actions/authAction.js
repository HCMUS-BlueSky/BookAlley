import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `api/auth/register`,
        { username, email, password },
        config
      );
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

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
      localStorage.setItem("userToken", data.userToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
