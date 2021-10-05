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

import moment from "moment";

const app = createApp(App);
app.config.globalProperties.moment = moment;

app.use(VTooltip);
app.use(VGrid);
app.use(router);

app.mount("#app");

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");

// export default new Vue({
//   router,
//   render: (h) => h(App),
//   mounted: () => {
//     // Prevent white screen when the app is launched (in production build)
//   },
// }).$mount("#app");
