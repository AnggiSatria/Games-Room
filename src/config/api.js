import axios from "axios";

export const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL || "https://localhost:5000/api/v1/",
});

export const API2 = axios.create({
  baseURL:
    process.env.REACT_APP_SERVER_URL ||
    "https://rawg-video-games-database.p.rapidapi.com/",
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
