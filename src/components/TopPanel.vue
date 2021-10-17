<template lang="">
  <div
    class="
      top-panel
      d-flex
      align-items-center
      justify-content-between
      align-items-center
    "
  >
    <!-- <h3 class="title">{{ title }}</h3> -->
    <div class="form-group m-0 pl-2">
      <input
        type="text"
        class="form-control"
        name=""
        id=""
        aria-describedby="helpId"
        placeholder="Search..."
      />
    </div>
    <div class="actions" style="padding-right: 0px">
      <button
        v-for="act in actions"
        v-bind:key="act.title"
        class="btn-action"
        @click="act.action()"
        v-tooltip.left="act.title"
      >
        <i :class="act.icon"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopPanel",
  props: {
    title: {
      type: String,
      default: "",
    },
    actions: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    // console.log("TopPanel mounted");
    // console.log(this.actions);
  },
};
</script>
<style lang="scss">
.top-panel {
  background: var(--background-color-primary);
  box-shadow: 0 -1px 0 0 #44f inset;
  height: 50px;
  .title {
    margin: 0px;
    font-size: 20px;
    padding-left: 10px;
  }
  .actions {
    .btn-action {
      background: #44f;
      color: white;
      border: 1px solid #44f;
      height: 50px;
      width: 50px;
      font-size: 20px;
      cursor: pointer;
    }
  }
}
</style>
