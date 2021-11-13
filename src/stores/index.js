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
      if (state.loadingStatus === false) {
        state.loadingStatus = true;
      }
    },
    stopLoading(state) {
      if (state.loadingStatus === true) {
        state.loadingStatus = false;
      }
    },
  },
});
