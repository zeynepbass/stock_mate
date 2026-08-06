
import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";

import { authStorage } from "./authStorage";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = authStorage.getAccessToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);


apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      authStorage.clear();

      localStorage.removeItem("user");
      localStorage.removeItem("expiresAt");

      if (window.location.pathname !== "/giris-yap") {
        window.location.href = "/giris-yap";
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;

