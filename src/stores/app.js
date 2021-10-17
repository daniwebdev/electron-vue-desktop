const mainApp = {
  state: {
    //
    title: "",
  },
  mutations: {
    //
    setTitle(state, title) {
      state.title = title;
    },
  },
  actions: {
    //
    setTitle(context, title) {
      context.commit("setTitle", title);
    },
  },
  getters: {
    //
    getTitle(state) {
      return state.title;
    },
  },
};

export default mainApp;
