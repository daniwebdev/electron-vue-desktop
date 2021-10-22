import { createStore } from "vuex";
import mainApp from "./app";
import callingState from "./calling";

export const store = createStore({
  modules: {
    app: mainApp,
    calling: callingState,
  },
  state() {
    return {
      loadingStatus: false,
      incomingStatus: false,
    };
  },
  mutations: {
    startLoading(state) {
      console.log("startLoading");
      state.loadingStatus = !state.loadingStatus;
    },
  },
});
