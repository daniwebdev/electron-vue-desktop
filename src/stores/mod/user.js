const roles = {
  EMPLOYEE_READ: "EMPLOYEE_READ",
  EMPLOYEE_ADD: "EMPLOYEE_ADD",
  EMPLOYEE_DELETE: "EMPLOYEE_DELETE",
};

const userState = {
  state: () => {
    return {
      data: {
        id: 0,
        employeeID: 0,
        name: "Muhamad Yusup Hamdani",
        nickname: "Dani",
      },
      roles: [roles.EMPLOYEE_READ, "EMPLOYEE_ADD", "EMPLOYEE_DELETE"],
    };
  },
  // getter: () => {
  //   isAllowed: (state) => (permission) => {
  //     return state.roles.includes(permission);
  //   };
  // },
};

export const UserRoles = roles;
export const UserState = userState;
