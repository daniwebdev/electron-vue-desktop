import { createStore } from "vuex";

export const store = createStore({
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
