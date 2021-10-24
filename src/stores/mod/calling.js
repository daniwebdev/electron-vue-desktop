const callingState = {
  state: () => {
    return {
      status: null, //caller, receiver
      isInProgress: false,
      isIncomingCall: false,
      caller: {
        employeeID: "",
        name: "",
      },
      receiver: {
        employeeID: "",
        name: "",
      },
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
