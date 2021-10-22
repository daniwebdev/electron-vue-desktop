<template>
  <!-- Call In Progress -->
  <div id="call-in-progress" :class="{ silent: !callIsInProgress }">
    <div class="card card-with-shadow" style="width: 300px; height: 400px">
      <div class="card-header p-1">
        <button
          class="close float-end"
          @click="callIsInProgress = !callIsInProgress"
        >
          <i class="mdi mdi-chevron-down"></i>
        </button>
        <div class="clearfix"></div>
      </div>
      <div
        class="
          card-body
          text-center
          d-flex
          flex-column-reverse
          justify-content-between
        "
      >
        <div class="calling-action">
          <button class="hangup" style="">
            <i class="mdi mdi-phone-hangup"></i>
          </button>
        </div>

        <div class="calling-info">
          <div
            class="image"
            style="
              width: 100px;
              height: 100px;
              background: #000;
              border-radius: 50%;
              margin: auto;
            "
          ></div>
          <h3 style="font-size: 15px" class="mt-3">Muhamad Yusup Hamdani</h3>
          <h4>00:01</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CallInProgres",
  data() {
    return {
      callIsInProgress: false,
    };
  },
  methods: {},
};
</script>
<style lang="scss">
#call-in-progress {
  transition: all 0.5s;
  position: absolute;
  right: 10px;
  bottom: 30px;
  z-index: 1000;
  &.silent {
    bottom: -400px;
  }
  .calling-action {
    .hangup {
      font-size: 20px;
      background: #f00;
      color: white;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      border: none;
    }
  }
}
</style>
