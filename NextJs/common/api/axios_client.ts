import axios from "axios";

let token = "";

if (typeof window !== "undefined") {
  if (localStorage.getItem("token"))
    token = JSON.parse(localStorage.getItem("token") ?? "");
}

const BASE_URL = "http://localhost:5000";

const AxiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default AxiosClient;
