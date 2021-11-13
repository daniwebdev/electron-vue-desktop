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
          <h3 class="m-0 p-0">{{ clock }}</h3>
          <h6 class="m-0 p-0">{{ date }}</h6>
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

        <div class="col-md-9 p-3">
          <div class="card">
            <div class="card-body">
              <DoughnutChart v-bind="doughnutChartProps" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DoughnutChart, useDoughnutChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import { computed, ref } from "vue";

Chart.register(...registerables);

var incomingCallSound = new Howl({
  src: ["/sounds/incoming-call.mp3"],
  loop: true,
});

export default {
  name: "Home",
  components: {
    DoughnutChart,
  },
  setup() {
    const dataValues = ref([30, 40, 60, 70, 5]);
    const toggleLegend = ref(true);

    const testData = computed(() => ({
      labels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
      datasets: [
        {
          data: dataValues.value,
          backgroundColor: [
            "#77CEFF",
            "#0079AF",
            "#123E6B",
            "#97B0C4",
            "#A5C8ED",
          ],
        },
      ],
    }));

    const options = computed(() => ({
      scales: {
        myScale: {
          type: "logarithmic",
          position: toggleLegend.value ? "left" : "right",
        },
      },
      plugins: {
        legend: {
          position: toggleLegend.value ? "top" : "bottom",
        },
        title: {
          display: true,
          text: "Chart.js Doughnut Chart",
        },
      },
    }));

    const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
      chartData: testData,
      options,
    });

    return {
      doughnutChartProps,
    };
  },
  data() {
    return {

      clock: this.moment().format("HH:mm:ss"),
      date: this.moment().format("dddd, DD MMMM YYYY"),
      isPlaying: false,
    };
  },
  mounted() {
    ipcRenderer.send("setTitle", "Home");

    setInterval(() => {
      this.clock = this.moment().format("HH:mm:ss");
    }, 1000);
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
