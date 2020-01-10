import originAxios from "axios";
import { ERROR_OK } from "../constants";

const axios = originAxios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000/api/"
      : "http://gist.codemanage.cn/api/",
  timeout: 5000
});

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.common["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  error => Promise.reject(error)
);

axios.interceptors.response.use(
  response => {
    const data = response.data;
    if (data.error === ERROR_OK) {
      return data.data;
    }
  },
  error => {
    const errorMessage =
      error.response.data.message.message || "系统错误，请联系管理员";

    if (error.response.data.statusCode === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
    }

    return Promise.reject(errorMessage);
  }
);

export default axios;
