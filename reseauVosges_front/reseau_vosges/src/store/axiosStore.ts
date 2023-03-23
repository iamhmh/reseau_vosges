import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { IUser } from "@/shared/interfaces";
import { store } from "@/store/store";

export interface IState {
  token: string | null;
  user: IUser | null;
}

export interface ILogin {
  email: string;
  password: string;
}

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/test1",
});


const setUpAxios = (): void => {
  axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = store.state.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );
};

setUpAxios();

