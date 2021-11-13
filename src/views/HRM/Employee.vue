<template>
  <top-panel
    title="Employee"
    tooltip="Create new employee"
    :actions="btnactions"
  />
  <div class="employee-list row m-0 d-flex">
    <div
      class="employee-item col-md-3 p-2 d-flex"
      v-for="(emp, index) in rows"
      :key="index"
    >
      <div class="card" style="width: 100%">
        <div class="card-body text-center">
          <div
            class="m-auto rounded-circle"
            :style="
              'width: 140px; height: 140px; background: url(' +
              emp.photo +
              ') no-repeat; background-size: cover'
            "
          ></div>
          <h3>{{ emp.fullname }}</h3>
          <span class="subtitle">{{ emp.email.toLowerCase() }}</span>

          <h5>{{ emp.designation }}</h5>
          <span class="subtitle">{{ emp.departement }}</span>
        </div>
        <div class="card-footer d-flex p-0">
          <button class="social-button d-block" style="width: 40%" @click="openLinkExternal('mailto:' + emp.email)">
            <i class="mdi mdi-email"></i>
          </button>
          <button class="social-button d-block position-relative" style="width: 40%">
            <i class="mdi mdi-phone"></i>
            <i class="mdi mdi-circle text-danger position-absolute" style="font-size: 8px; margin-left: -5px"></i>
          </button>
          <button class="social-button d-block" style="width: 20%" @click="goDetail(emp.employeeId)">
            <i class="mdi mdi-dots-horizontal" v-tooltip="'Detail'"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopPanel from "@/components/TopPanel.vue";
import { useStore } from "vuex";

export default {
  name: "Employee",
  setup() {
    const store = useStore();

    return { store };
  },
  data() {
    return {
      formIsOpen: false,
      btnactions: [
        {
          icon: "mdi mdi-plus",
          title: "Create new employee",
          action: () => {
            this.$router.push("/employee/form");
          },
        },
        {
          icon: "mdi mdi-import",
          title: "Import",
          action: () => {
            this.$router.push("/employee/form");
          },
        },
      ],
      rows: [],
    };
  },
  methods: {
    getData() {
      this.loading.start(this.store);
      this.axios.get("employee").then((res) => {
        let data = res.data.data;

        this.rows = data;
        this.loading.stop(this.store);
      });
    },
    openLinkExternal(link) {
      utillity.openExtenalLink(link);
    },
    goDetail(_id) {
      this.$router.push("/employee/" + _id + "?navigation=true");
    },
  },
  mounted() {
    ipcRenderer.send("setTitle", "Employee");
    this.getData();
  },
  components: {
    TopPanel,
  },
};
</script>

<style lang="scss">
revo-grid {
  height: calc(100vh - 50px - var(--top-hight) - var(--bottom-hight));
}

.employee-item {
  h3 {
    font-size: 16px;
    margin: 0px;
    margin-top: 20px;
  }
  .subtitle {
    font-size: 12px;
    color: #999;
  }
  h5 {
    margin: 0px;
    margin-top: 20px;
    font-size: 16px;
  }
  .social-button {
    background: var(--primary-color);
    border: 0px;
    color: white;
    padding: 5px;
    &:hover {
      background: var(--background-color-primary);
    }
  }
}

top-panel {
  background: var(--background-color-primary);
  box-shadow: 0 -1px 0 0 #44f inset;
  height: 50px;
  .title {
    margin: 0px;
    font-size: 20px;
    padding-left: 10px;
  }
  .actions {
    .btn-action {
      background: #44f;
      color: white;
      border: 1px solid #44f;
      height: 50px;
      width: 50px;
      font-size: 20px;
    }
  }
}
</style>
