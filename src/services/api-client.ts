import dotenv from "dotenv";
import axios from "axios";
dotenv.config();
import * as process from "process";
const key = process.env.VITE_API_KEY;
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key,
  },
});
