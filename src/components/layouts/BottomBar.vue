<template>
  <div>
    <div id="bottombar">
      <div class="bottom-left">
        <span class="item text-center">
          <i
            v-bind:class="{ online: isOnline, offline: !isOnline }"
            class="mdi mdi-circle"
          ></i>
          {{ ip }}
        </span>
        <span class="item text-center">
          <i class="mdi mdi-account"></i> Muhamad Yusup Hamdani
        </span>
      </div>
      <div class="bottom-right">
        <span class="item date"> {{ date }} </span>
        <span class="item btn" style="text-align: center"
          ><i class="mdi mdi-bell"></i
        ></span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "@/plugins/network";

export default {
  name: "BottomBar",
  data() {
    return {
      date: this.moment().format("DD MMM YYYY HH:mm:ss"),
      isOnline: null,
      ip: null,
    };
  },
  methods: {
    async getIP() {
      let response = await axios.get("http://ip-api.com/json");

      this.ip = response.data.query;
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
.online {
  color: #ff2b2b;
}
.offline {
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
  font-size: 12px;
}

#bottombar .bottom-left {
  align-self: center;
  flex: 1;
}

#bottombar .bottom-right {
  text-align: right;
  align-self: center;
  flex: 1;
}

#bottombar .item {
  display: inline-block;
  padding: 5px;
  min-width: 20px;
}

#bottombar .item.btn:hover {
  background: var(--button-primary-hover-color);
  cursor: pointer;
}
</style>
