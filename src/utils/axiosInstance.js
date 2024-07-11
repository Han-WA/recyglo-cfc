import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://www.carboninterface.com/api/v1',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;