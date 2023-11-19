import { axiosInstance } from "../utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateAddress = createAsyncThunk(
  "user/addAddress",
  async (
    { fullname, phone, city, district, ward, address, alias, type },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axiosInstance.post(
        `api/user/address`,
        { fullname, phone, city, district, ward, address, alias, type },
        config
      );
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAddress = createAsyncThunk(
  "user/getAddress",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/api/user/address`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
