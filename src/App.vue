<template>
  <div id="app">
    <div id="topbar"></div>
    <div id="sidebar">
      <div class="menu-item">
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </div>
    </div>

    <div id="bottombar">
      <div class="bottom-left"></div>
      <div class="bottom-right">
        <span class="item date"> 00:00:00 </span>
      </div>
    </div>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  mounted: () => {
    this.$router.push("/");

    console.log("test");

    setInterval(() => {
      document.querySelector(".date").innerHTML = moment().format("HH:mm:ss");
    }, 1000);
  },
};
</script>
<style lang="scss">
@import url("./assets/default.scss");
</style>
