import { ActionContext } from "vuex";
import { axiosInstance, IState } from "@/store/axiosStore";
import { errorToast } from "@/shared/toast";

export interface IUser {
  id: string;
  role: "super_admin" | "bureau_admin" | "membre" | "user";
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  phone_number: string;
  address: string;
  city: string;
  zip_code: number;
  compagny_name: string;
  compagny_domain: string;
  website_url: string;
  business_description: string;
  business_activity: string;
  avatar: string;
  compagny_logo: string;
}

export interface IUsersState {
  users: IUser[];
}

export const state: IUsersState = {
  users: [],
};

export const getters = {
  users: (state: IUsersState) => state.users,
};

export const mutations = {
  setUsers(state: IUsersState, users: IUser[]) {
    state.users = users;
  }
};

export const actions = {
  async fetchUsers(context: ActionContext<IUsersState, IState>) {
    try {
      const response = await axiosInstance.get("/users");
      context.commit("setUsers", response.data);
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

  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
