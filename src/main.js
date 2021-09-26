import { createApp } from "vue";
import Vue from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";

createApp(App).use(router).mount("#app");

// export default new Vue({
//   router,
//   render: (h) => h(App),
//   mounted: () => {
//     // Prevent white screen when the app is launched (in production build)
//   },
// }).$mount("#app");
