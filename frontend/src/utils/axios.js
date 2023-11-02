import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_baseURL || 'http://localhost:5000';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_baseURL || 'http://localhost:5000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Configure your request here
    // Add access token to Authorization header
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Configure your response here
    // You can use refreshToken
    // here to get new accessToken if previous accessToken expired.
    // Also you can dispatch events to Redux from here about new accessToken.
    // Whenever Redux will update with new token, whole component will re-render
    // where ever we extracted data from Redux. In that case, Our Axios instance
    // will be configured with the new token. So, No need to configure header here.
    return Promise.reject(error);
  }
);

export { axiosInstance };
