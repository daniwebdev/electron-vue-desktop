import { createApp } from "vue";
import Vue from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import VTooltip from "v-tooltip";

import "bootstrap/scss/bootstrap-grid.scss";
import "@mdi/font/scss/materialdesignicons.scss";
import "./assets/default.scss";

createApp(App).use(VTooltip).use(router).mount("#app");

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
