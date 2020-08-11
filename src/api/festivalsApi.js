import axios from "axios";

const instance = axios.create({
  baseURL: "http://eacodingtest.digital.energyaustralia.com.au",
});

instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
