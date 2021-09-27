<template>
  <div>
    <div id="bottombar">
      <div class="bottom-left"></div>
      <div class="bottom-right">
        <span class="item date"> {{ date }} </span>
        <span class="item" style="text-align: center"
          ><i class="mdi mdi-bell"></i
        ></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BottomBar",
  data() {
    return {
      date: this.moment().format("DD MMM YYYY HH:mm:ss"),
    };
  },
  mounted() {
    setInterval(() => {
      this.date = this.moment().format("DD MMM YYYY HH:mm:ss");
    }, 1000);
  },
};
</script>

<style lang="scss">
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

#bottombar .item:hover {
  background: var(--button-primary-hover-color);
  cursor: pointer;
}
</style>
