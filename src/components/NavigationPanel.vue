<template>
  <div
    class="d-flex justify-content-between align-items-center"
    id="navigation-panel"
  >
    <div>
      <button class="navigation-btn" @click="onBack">
        <i class="mdi mdi-chevron-left"></i> Back
      </button>
    </div>
    <div style="font-size: 12px; padding: 0px 10px">
      <span>Muhamad Yusup Hamdani</span>
    </div>
  </div>
  <div style="margin-bottom: 30px"></div>
</template>
<script>
export default {
  name: "NavigationPanel",
  methods: {
    onBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss">
#navigation-panel {
  height: 30px;
  box-shadow: 1px 11px 15px -2px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 1px 11px 15px -2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 1px 11px 15px -2px rgba(0, 0, 0, 0.2);
  position: fixed;

  width: calc(100% - var(--side-hight));
  z-index: 1;
  background: var(--background-color-primary);

  .navigation-btn {
    color: white;
    height: 30px;
    background: #334;
    border: none;
    font-size: 14px;
    padding: 0px 10px;
    &:hover {
      background: #223;
    }
  }
}
</style>
