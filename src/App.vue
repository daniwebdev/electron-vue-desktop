<template>
  <div id="app">
    <TopBar />

    <SideMenu />

    <BottomBar />

    <div id="content" style="font-family: 'Poppins'">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/layouts/SideMenu.vue";
import TopBar from "@/components/layouts/TopBar.vue";
import BottomBar from "@/components/layouts/BottomBar.vue";

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
<style lang="scss">
#app {
  overflow: hidden;
}
</style>
