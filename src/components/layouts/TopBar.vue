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
          <li>
            <a href="javascript:">Company</a>
            <div class="top-submenu">
              <ul>
                <li>
                  <router-link
                    to="/"
                    class="top-submenu-link d-flex justify-content-between"
                  >
                    <span>Departement</span> <span>Ctr+D</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/"
                    class="top-submenu-link d-flex justify-content-between"
                  >
                    <span>Designation</span> <span>Ctr+I</span>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/"
                    class="top-submenu-link d-flex justify-content-between"
                  >
                    <span>Information</span> <span>Ctr+I</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li><a href="javascript:">Payroll</a></li>
          <li><a href="javascript:">Setting</a></li>
          <li><a href="javascript:">Help</a></li>
        </ul>
      </div>
    </div>
    <div class="topbar-center draggable">{{ title }}</div>
    <div class="topbar-right">
      <span class="btn-spaction-top">
        <i class="mdi mdi-chevron-down-circle-outline"></i>
      </span>
      <span class="btn-spaction-top" @click="minimize()">
        <i class="mdi mdi-minus"></i>
      </span>
      <span class="btn-spaction-top" @click="maximize()">
        <i class="mdi mdi-fullscreen"></i>
      </span>
      <span class="btn-spaction-top btn-close-app" v-on:click="close()">
        <i class="mdi mdi-window-close"></i>
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
          <button class="cancel" @click="cancel()">Cancel</button>
          <button class="confirm" @click="confirm()">Confirm</button>
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
  props: {},
  data() {
    return {
      boxConfirmClose: false,
      title: "CONET.ID - HOME",
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
  mounted() {
    ipcRenderer.receive("titleChanged", (event, data) => {
      this.title = event;
    });
  },
};
</script>
