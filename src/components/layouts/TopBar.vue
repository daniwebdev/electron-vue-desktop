<template>
  <div id="topbar" class="">
    <div class="topbar-left">
      <div class="logo">CONET</div>
      <div class="top-menu">
        <ul>
          <li>
            <a href="javascript:">File</a>
            <div class="top-submenu">
              <ul>
                <li><span class="top-submenu-link">Invoice</span></li>
                <li><span class="top-submenu-link">Payroll</span></li>
              </ul>
            </div>
          </li>
          <li><a href="javascript:">Company</a></li>
          <li><a href="javascript:">Payroll</a></li>
          <li><a href="javascript:">Help</a></li>
        </ul>
      </div>
    </div>
    <div class="topbar-center draggable">Home</div>
    <div class="topbar-right">
      <span class="btn btn-spaction">
        <i class="mdi mdi-chevron-down-circle-outline"></i>
      </span>
      <span class="btn btn-spaction" @click="minimize()">
        <i class="mdi mdi-minus"></i>
      </span>
      <span class="btn btn-spaction" @click="maximize()">
        <i class="mdi mdi-fullscreen"></i>
      </span>
      <span class="btn btn-spaction btn-close" v-on:click="close()">
        <i class="mdi mdi-close"></i>
      </span>
    </div>
  </div>

  <transition name="modal">
    <Modal @close="boxConfirmClose == false" v-if="boxConfirmClose == true">
      <template v-slot:header>
        <h3>Exit From App</h3>
      </template>
      <template v-slot:footer>
        <div class="act-group">
          <button class="btn cancel" @click="cancel()">Cancel</button>
          <button class="btn confirm" @click="confirm()">Confirm</button>
        </div>
      </template>
    </Modal>
  </transition>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  name: "TopBar",
  components: {
    Modal,
  },
  props: {
    title: {
      type: String,
      default: "Home",
    },
  },
  data() {
    return {
      boxConfirmClose: false,
    };
  },
  methods: {
    close() {
      this.boxConfirmClose = true;
    },
    confirm() {
      this.boxConfirmClose = false;
      ipcRenderer.send("close-window");
    },
    cancel() {
      this.boxConfirmClose = false;
    },
    minimize() {
      ipcRenderer.send("minimize-window");
    },
    maximize() {
      ipcRenderer.send("maximize-window");
    },
  },
};
</script>

<style lang="scss">
.btn-close {
  width: 25px;
  text-align: center;
  display: inline-block;
  padding: 10px;
  &:hover {
    background: var(--danger) !important;
    color: #fff;
  }
}
</style>
