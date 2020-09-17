import axios from "axios";
require("dotenv").config();

const axiosInstance = axios.create({
   baseURL:
      process.env.API_URL || "https://fast-bastion-32942.herokuapp.com/api/",
});

export default axiosInstance;
