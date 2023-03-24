import { ActionContext } from "vuex";
import { axiosInstance, IState } from "@/store/axiosStore";
import { errorToast } from "@/shared/toast";

export interface IUser {
  id: string;
  firstname: string;
  name: string;
  email: string;
  role?: any;
  password?: string;
  confirmPassword?: string;
}

interface IUserState {
  token: string;
  user: IUser;
}

export const usersStore = {
  state: {
    token: localStorage.getItem("token"),
    user: null,
  },
  getters: {
    loggedIn: (state: IUserState) => state.token !== null,
    user: (state: IUserState) => state.user,
  },
  mutations: {
    SET_TOKEN(state: IUserState, token: string) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    SET_USER(state: IUserState, user: IUser) {
      state.user = user;
    },
    LOGOUT(state: IState) {
      localStorage.removeItem("token");
      state.user = null;
      state.token = null;
      window.location.reload();
    },
  },
  actions: {
    async login(context: ActionContext<IUserState, IState>, payload: any) {
      try {
        const result: any = await axiosInstance.post("/login", payload);
        context.commit("SET_TOKEN", result.token);
        context.commit("SET_USER", result.user);
      } catch (e: any) {
        console.log(e);
        switch (e.status) {
          case 404:
            errorToast("Ce compte n'existe pas");
            break;
          case 422:
            errorToast("Paramètres invalide");
            break;
          case 403:
            errorToast("Mot de passe invalide");
        }
        throw e;
      }
    },
    async getUser({ commit }: any) {
      const token = localStorage.getItem("token");
      if (token) {
        const user = await axiosInstance.get(`/token`);
        commit("SET_USER", user);
      }
    },
  },
};


