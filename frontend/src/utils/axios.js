import axios from 'axios';

axios.defaults.baseURL = import.meta.env.baseURL || 'http://localhost:5000';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.baseURL || 'http://localhost:5000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});
