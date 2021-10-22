<template>
  <div class="text-left container-fluid">
    <h1 class="mb-0">CONET Pro+</h1>
    <p class="mt-0">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
      doloribus?
    </p>
    <div class="row" style="text-align: left">
      <div class="col-6">
        <h2>Changelog</h2>
        <ul>
          <li>
            <a href="#">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              doloribus?
            </a>
          </li>
          <li>
            <a href="#">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              doloribus?
            </a>
          </li>
        </ul>

        <button @click="testIncomingCalling()">Test Incoming Calling</button>
      </div>
      <div class="col-6"></div>
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
