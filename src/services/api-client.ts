import dotenv from "dotenv";
import axios from "axios";
dotenv.config();
const key = import.meta.env.VITE_API_URL;
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key,
  },
});
