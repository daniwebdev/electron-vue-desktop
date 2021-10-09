import { createApp } from "vue";
import Vuex from "vuex";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import VTooltip from "v-tooltip";
import VGrid from "@revolist/vue3-datagrid";

import "bootstrap/scss/bootstrap-grid.scss";
import "bootstrap/scss/bootstrap-utilities.scss";

import "@mdi/font/scss/materialdesignicons.scss";


import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

/* Internal Styles */
import "@/assets/layout/style.scss";
import "@/assets/tooltip.scss";

import moment from "moment";
import "moment/dist/locale/id";
import axios from "@/plugins/network.js";
import { store } from "./stores";

const app = createApp(App);
moment.locale("id");
app.config.globalProperties.moment = moment;
app.config.globalProperties.axios = axios;

// app.use(BootstrapVue3);
app.use(VTooltip);
app.use(VGrid);
app.use(router);

app.use(store);

app.mount("#app");
