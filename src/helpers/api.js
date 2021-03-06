import axios from "axios";
import { getCredsFromStorage } from "../middlewares/saveCredentials";
import { API_KEY } from "react-native-dotenv";
import apiRoute from "./apiRoutes";

export const client = axios.create({
  baseURL: `http://${API_KEY}:3000`,
  responseType: "json",
  xsrfCookieName: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
  Authorization: `Bearer `,
});

client.interceptors.request.use(
  async (config) => {
    if (config.url === apiRoute.signIn() || config.url === apiRoute.signUp()) {
      return config;
    }

    const credentials = await getCredsFromStorage();
    console.debug(`[authentified request] url: ${config.url}`);
    // console.log(API_KEY);

    config.headers.Authorization = `Bearer ${credentials}`;
    return config;
  },
  (error) => Promise.reject(error),
);

export default client;
