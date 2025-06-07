import axios from "axios";
import { env } from "../env";

// Axios instance configured for skip-related API requests
export const skipsInstance = axios.create({
  baseURL: `${env.VITE_API_URL}/skips/`,
});
