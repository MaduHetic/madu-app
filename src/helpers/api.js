import axios from "axios";
import { getCredsFromStorage } from "../middlewares/saveCredentials";
import apiRoute from "../helpers/apiRoutes";

const client = axios.create({
  baseURL: "http://18.130.166.247:3000",
  responseType: "json",
  xsrfCookieName: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

client.interceptors.request.use(
  async (config) => {
    if (config.url === apiRoute.signIn()) {
      return config;
    }

    const credentials = await getCredsFromStorage();
    console.debug(`[authentified request] url: ${config.url}`);
    console.log(credentials);
    config.headers.Authorization = `Bearer ${credentials}`;
    return config;
  },
  (error) => Promise.reject(error),
);

export default client;
