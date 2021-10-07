import { createApp } from "vue";
import Vue from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import VTooltip from "v-tooltip";
import VGrid from "@revolist/vue3-datagrid";

import "bootstrap/scss/bootstrap-grid.scss";
import "bootstrap/scss/bootstrap-utilities.scss";

import "@mdi/font/scss/materialdesignicons.scss";
import "@/assets/layout/style.scss";
import "@/assets/tooltip.scss";

// import "@/plugins/currentScript.js";

import moment from "moment";
import axios from "@/plugins/network.js";

const app = createApp(App);
app.config.globalProperties.moment = moment;
app.config.globalProperties.axios = axios;

app.use(VTooltip);
app.use(VGrid);
app.use(router);

app.mount("#app");
