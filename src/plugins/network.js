import axios from "axios";

axios.defaults.headers.common["X-Api-Key"] = "Bearer ";

export default axios;
