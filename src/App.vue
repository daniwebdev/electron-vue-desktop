<template>
  <div id="app">
    <TopBar />

    <SideMenu />

    <BottomBar />

    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideMenu from "./components/SideMenu.vue";
import TopBar from "./components/TopBar.vue";
import BottomBar from "./components/BottomBar.vue";

export default {
  components: {
    SideMenu,
    BottomBar,
    TopBar,
  },
  mounted: () => {
    console.log("App mounted.");
  },
};
</script>
