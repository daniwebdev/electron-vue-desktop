import { createStore } from "vuex";
import mainApp from "./app";
import callingState from "./mod/calling";
import { UserState } from "./mod/user";

export const store = createStore({
  modules: {
    app: mainApp,
    calling: callingState,
    user: UserState,
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
