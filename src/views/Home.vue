<template>
  <div id="dashboard">
    <div
      class="d-flex align-items-center justify-content-between"
      style="background: var(--background-color-primary)"
    >
      <div class="d-flex align-items-center">
        <div style="font-size: 65px; padding-left: 15px">
          <i class="mdi mdi-weather-cloudy m-0 p-0"></i>
        </div>
        <div class="p-2">
          <h3 class="m-0 p-0">19:30:20</h3>
          <h6 class="m-0 p-0">Jum'at, 22 Oktober 2021</h6>
        </div>
      </div>
      <div class="p-2 text-end">
        <p class="m-0 p-0">Hi, Muhamad Yusup Hamdani</p>
        <span style="font-size: 13px">Staf IT - Departement IT</span>
      </div>
    </div>

    <div class="">
      <div class="row m-0">
        <div class="col-md-3 p-3">
          <div class="card">
            <div class="card-header">
              <i class="mdi mdi-circle" style="color: #0a0"></i> Current Login
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="">Device</label>
                <span class="d-block">Linux Ubuntu 18.04 LTS</span>
              </div>
              <div class="form-group mt-2">
                <label for="">Timestamp</label>
                <span class="d-block">{{
                  moment().format("YYYY-MM-DD HH:mm:ss Z")
                }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3 p-3">
          <div class="card">
            <div class="card-body text-center">
              <h4>Employee</h4>
              <span style="font-size: 5em">200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var incomingCallSound = new Howl({
  src: ["/sounds/incoming-call.mp3"],
  loop: true,
});

export default {
  name: "Home",
  components: {},
  data() {
    return {
      isPlaying: false,
    };
  },
  mounted() {
    ipcRenderer.send("setTitle", "Home");
  },
  methods: {
    testIncomingCalling() {
      if (!this.$data.isPlaying) {
        incomingCallSound.play();
        this.$data.isPlaying = !this.$data.isPlaying;
      } else {
        incomingCallSound.stop();
        this.$data.isPlaying = !this.$data.isPlaying;
      }
    },
  },
};
</script>
