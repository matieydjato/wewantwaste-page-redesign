import axios from "axios";
import { env } from "../env";

export const skipsInstance = axios.create({
  baseURL: `${env.VITE_API_URL}/skips/`,
});
