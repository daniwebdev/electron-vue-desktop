import { createStore } from "vuex";
import mainApp from "./app";

export const store = createStore({
  modules: {
    app: mainApp,
  },
  state() {
    return {
      loadingStatus: false,
    };
  },
  mutations: {
    startLoading(state) {
      console.log("startLoading");
      state.loadingStatus = !state.loadingStatus;
    },
  },
});
