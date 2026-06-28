import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
console.log("Axios baseURL:", apiClient.defaults.baseURL);
console.log("Axios timeout:", apiClient.defaults.timeout);
console.log("Axios headers:", apiClient.defaults.headers);