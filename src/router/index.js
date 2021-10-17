import { createRouter, createWebHistory } from "vue-router";
import UserInfo from "../views/Account/UserInfo.vue";
import UserInfoDetail from "../views/Account/PersonalDetail.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/userinfo",
    name: "UserInfo",
    component: UserInfo,
    children: [
      {
        path: "",
        component: UserInfoDetail,
      },
      {
        path: "detail",
        component: UserInfoDetail,
      },
      {
        path: "activity-log",
        component: () => import("../views/Account/ActivityLog.vue"),
      },
      {
        path: "attendance",
        component: () => import("../views/Account/Attendance.vue"),
      },
    ],
  },
  {
    path: "/invoice",
    name: "Invoice",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/employee",
    name: "Employee",
    component: () => import("../views/HRM/Employee.vue"),
  },
  {
    path: "/employee/form",
    name: "EmployeeForm",
    component: () => import("../views/HRM/EmployeeForm.vue"),
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
