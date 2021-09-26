<template>
  <div id="topbar" class="draggable">
    <div class="topbar-left"></div>
    <div class="topbar-center">Predator v5.0</div>
    <div class="topbar-right">C</div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style lang="scss">
#topbar {
  /* position: absolute; */
  border-bottom: 1px solid rgb(48, 54, 76);
  background: rgb(41, 45, 62);
  height: var(--top-hight);
  width: 100%;
  display: flex;
  justify-self: center;
  color: #aaa;
}
.topbar-left {
  align-self: center;
  flex: 2;
}
.topbar-center {
  align-self: center;
  flex: 2;
}
.topbar-right {
  align-self: center;
  flex: 1;
}
</style>
