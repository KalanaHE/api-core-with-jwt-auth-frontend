// import { verify, sign } from "jsonwebtoken";

const setAccessToken = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
  } else {
    localStorage.removeItem("accessToken");
  }
};

const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export { setAccessToken, getAccessToken };
