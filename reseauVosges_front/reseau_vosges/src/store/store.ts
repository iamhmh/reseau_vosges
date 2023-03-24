import { createStore } from "vuex";
import { usersStore } from "@/store/usersStore";

export const store = createStore({
  modules: {
    usersStore,
  },
});