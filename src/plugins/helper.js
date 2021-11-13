import axios from "axios";

axios.defaults.headers.common["X-Api-Key"] = "Bearer ";

var HttpAxios = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 10000,
  headers: {
    "X-Api-Key": "Bearer AAAA",
  },
});

let loading = {
  start(store) {
    store.commit("startLoading");
  },
  stop(store) {
    store.commit("stopLoading");
  },
};

const helper = {
  axios: HttpAxios,
  loading: loading,
};

export default helper;
