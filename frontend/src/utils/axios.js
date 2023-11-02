import axios from 'axios';

axios.defaults.baseURL =
  import.meta.env.baseURL || 'https://book-alley-api.onrender.com';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.baseURL || 'https://book-alley-api.onrender.com',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});
