import axios from "axios";
import API_CONFIG from "./api";

const axiosInstance = axios.create(API_CONFIG);

export default axiosInstance;
