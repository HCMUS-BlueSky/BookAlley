import { axiosInstance } from '../utils/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProductsForSeller = createAsyncThunk(
  'products/seller',
  async ({ shop_id }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      let { data } = await axiosInstance.get(`/api/shop/${shop_id}`, config);
      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  }
);
