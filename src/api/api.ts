import axios, { AxiosRequestConfig, AxiosError } from "axios";
import type { AppStore } from "../store/store";

export const api = axios.create({
  baseURL: import.meta.env.VITE_GRAPHQL_API,
});

export function setupAxiosInterseptor(store: AppStore) {
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      console.log(config.headers);
      if (config.headers && store.getState().auth.user?.accessToken) {
        config.headers["Authorization"] =
          "Bearer " + store.getState().auth.user?.accessToken;
      }
      return config;
    },
    async (error: AxiosError) => {
      return Promise.reject(error);
    }
  );
}
