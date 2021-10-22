<template lang="">
  <!-- Incoming Call -->
  <div
    class="call-container"
    :class="{ active: isCalling }"
    style="position: absolute"
  >
    <div class="calling">
      <div>
        <div
          class="image"
          style="
            background: url(https://cdn.fakercloud.com/avatars/scrapdnb_128.jpg);
            background-size: cover;
          "
        ></div>
      </div>
      <div>
        <span class="incoming-name"> Muhamad Yusup Hamdani </span>
        <span class="d-block" style="font-size: 12px">Incoming calling...</span>
      </div>
    </div>
    <div class="calling-note p-2">Mau ngobrol aja..</div>
    <div class="call-action d-flex">
      <button class="accept">Accept</button>
      <button class="reject">Reject</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "IncomingCall",
  props: {
    isCalling: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
.call-container {
  transition: all 1s;
  background: var(--background-color-primary);
  bottom: 30px;
  opacity: 0;
  right: -310px;
  width: 350px;
  height: 150px;
  position: absolute;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
  &.active {
    opacity: 1;
    right: 10px;
  }
  .calling {
    display: flex;
    align-items: center;
    .image {
      border-radius: 50%;
      background: #000;
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
    padding: 10px;
    .incoming-name {
      font-size: 15px;
      font-family: "Poppins";
    }
  }
  .call-action {
    position: absolute;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    .accept {
      flex: 1;
      padding: 10px;
      background: #3a3;
      color: white;
      border: 0;
    }
    .reject {
      flex: 1;
      padding: 10px;
      background: #a33;
      color: white;
      border: 0;
    }
  }
}
</style>
