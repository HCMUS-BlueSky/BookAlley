import { axiosInstance } from "../utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getOrders = createAsyncThunk("order/get", async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let { data } = await axiosInstance.get(`api/order/self`, config);
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
});
