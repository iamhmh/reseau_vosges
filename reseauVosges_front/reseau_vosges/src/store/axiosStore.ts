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
  axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
    const token: string | null = localStorage.getItem("token");
    if (token) {
      config.headers!.authorization = "Bearer " + token;
    }
    return config;
  });
  axiosInstance.interceptors.response.use(
    (reponse: AxiosResponse) => reponse.data,
    (error) => {
      console.log(error);
      if (error) {
        const { status, data } = error.response;

        if (status === 403 && data && data.data && data.data.jwtExpired) {
          store.commit("LOGOUT");
        }
        throw { status, data };
      }
    }
  );
};

setUpAxios();

