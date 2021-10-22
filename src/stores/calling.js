const callingState = {
  state: () => {
    return {
      status: null, //caller, receiver
      caller: {},
      receiver: {},
      startAt: null,
    };
  },
  mutations: {
    callInAction(state, data) {
      state.status = data.status;
      state.caller = data.caller;
      state.receiver = data.receiver;
    },
  },
};

export default callingState;
