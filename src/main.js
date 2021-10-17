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

/* Load Plugins */
// import "./plugins/daterangepicker/vanilla-datetimerange-picker-dark.css";
// import "./plugins/daterangepicker/vanilla-datetimerange-picker";

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

app.use(VTooltip);
app.use(VGrid);

app.use(store);

app.use(router);

app.mount("#app");
