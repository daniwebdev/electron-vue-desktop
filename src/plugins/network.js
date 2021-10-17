import axios from "axios";

axios.defaults.headers.common["X-Api-Key"] = "Bearer ";

export default axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 10000,
  headers: {
    "X-Api-Key": "Bearer AAAA",
  },
});
