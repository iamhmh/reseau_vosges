import { useStore } from "vuex";
import { computed } from "vue";

export const vuexGetters = () => {
  const store = useStore();
  const loggedIn = computed(() => store.getters.loggedIn);
  return { loggedIn };
};