import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" }
});

const createHeader = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

const getRanking = () => {
  return axiosInstance.get("/ranking");
};

const registerUser = (body) => {
  return axiosInstance.post("/signup", body);
};

const authUser = (body) => {
  return axiosInstance.post("/signin", body);
};

const shortenLink = (body, token) => {
  return axiosInstance.post("/urls/shorten", body, createHeader(token));
};

const getUser = (token) => {
  return axiosInstance.get("/users/me", createHeader(token));
};

const accessLink = (shortUrl) => {
  return axiosInstance.get(`/urls/open/${shortUrl}`);
};

const deleteLink = (id, token) => {
  return axiosInstance.delete(`/urls/${id}`, createHeader(token));
};

export default {
  getRanking,
  registerUser,
  authUser,
  shortenLink,
  getUser,
  accessLink,
  deleteLink
};