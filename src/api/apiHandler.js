import axios from "axios";
import { getAccessToken } from "../utils/jwt";

const accessToken = getAccessToken();

const myApiInstance = axios.create({
  // baseURL: process.env.REACT_APP_API_URI,
  timeout: 30000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json",
    Accept: "application/json",
    cache: "no-cache",
    mode: "cors",
    redirect: "follow",
    withCredentials: true,
    referrer: "no-referrer",
  },
});

myApiInstance.interceptors.request.use(
  (config) => {
    config.headers["x-access-token"] = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default myApiInstance;
