<template>
  <div>
    <div id="bottombar">
      <div class="bottom-left">
        <span class="item text-center" v-tooltip="ip">
          <i
            class="mdi mdi-circle"
            v-bind:class="{ offline: isOnline == false, online: isOnline }"
          ></i>
          {{ latency }}
        </span>

        <span
          class="item text-center"
          v-tooltip="'last login: 20 Okt 2021 12:23:21'"
        >
          <i class="mdi mdi-account"></i> Muhamad Yusup Hamdani
        </span>
      </div>
      <div class="bottom-right">
        <div v-if="isLoading" class="item">
          <i class="mdi mdi-loading mdi-spin"></i> Loading...
        </div>

        <div class="item date">{{ date }}</div>

        <div class="item btn-spaction-bottom" style="text-align: center">
          <i class="mdi mdi-bell"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "@/plugins/network.js";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "BottomBar",
  setup() {
    const store = useStore();

    const isLoading = computed(() => store.state.loadingStatus);

    return { isLoading };
  },
  data() {
    return {
      date: this.moment().format("DD MMM YYYY HH:mm:ss"),
      isOnline: false,
      latency: null,
      ip: null,
    };
  },
  methods: {
    async getIP() {
      let start = this.moment().valueOf();
      try {
        let response = await axios.get("/status");

        this.ip = response.data.data.ip;
        this.latency = `${this.moment().valueOf() - start} ms`;
        this.isOnline = true;
      } catch (error) {
        console.log(error);
        this.isOnline = false;
        this.latency = "offline";
      }
    },
  },
  async mounted() {
    setInterval(() => {
      this.date = this.moment().format("DD MMM YYYY HH:mm:ss");
    }, 1000);

    this.getIP();

    setInterval(() => {
      this.getIP();
    }, 10000);
  },
};
</script>

<style lang="scss">
.offline {
  color: #ff2b2b;
}
.online {
  color: #22cc22;
}

#bottombar {
  position: absolute;
  bottom: 0;
  background: var(--background-color-primary);
  border-top: 1px solid rgb(48, 54, 76);
  height: var(--bottom-hight);
  width: 100%;
  display: flex;
  color: white;
  justify-self: center;
  font-size: 11px;
  .bottom-left {
    align-self: center;
    flex: 1;
  }

  .bottom-right {
    text-align: right;
    align-self: center;
    flex: 1;
  }

  .item {
    display: inline-block;
    padding: 5px;
    min-width: 30px;
  }

  .item.btn:hover {
    background: var(--button-primary-hover-color);
    cursor: pointer;
  }
}

/* SPINER */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spin {
  animation-name: spin;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.btn-spaction-bottom {
  text-align: center;
  // padding-top: 8px !important;
  // height: var(--bottom-hight);
  // padding: 5px 10px;
  &:hover {
    background-color: var(--button-primary-hover-color);
    display: inline-block;
    cursor: pointer;
  }
}
</style>
