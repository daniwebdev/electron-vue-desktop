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
          <button
            class="social-button d-block"
            style="width: 40%"
            @click="openLinkExternal('mailto:' + emp.email)"
          >
            <i class="mdi mdi-email"></i>
          </button>
          <button class="social-button d-block" style="width: 40%">
            <i class="mdi mdi-phone"></i>
          </button>
          <button
            class="social-button d-block"
            style="width: 20%"
            @click="goDetail(emp.employeeId)"
          >
            <i class="mdi mdi-dots-horizontal"></i>
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
          title: "Crate new employee",
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
      this.store.commit("startLoading");
      this.axios.get("employee").then((res) => {
        let data = res.data.data;

        this.rows = data;
        this.store.commit("startLoading");
      });
    },
    openLinkExternal(link) {
      ipcRenderer.send("onLinkExtenal", link);
    },
    goDetail(_id) {
      this.$router.push("/employee/" + _id + "?navigation=true");
    },
  },
  mounted() {
    ipcRenderer.send("setTitle", "Employee");
    this.getData();

    // document.ondblclick = (e) => {
    //   console.log(e.target.parentNode.classList.contains("rgRow"));
    //   if (e.target.parentNode.classList.contains("rgRow")) {
    //     this.$router.push("/userinfo?navigation=true");
    //   }
    // };
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
// revo-grid[theme="compact"] {
//   .header-wrapper {
//     background-color: var(--background-color-secondary);
//   }

//   .rgRow {
//     background: var(--row-background);
//     // box-shadow: 0px 0px 0px 1px #151927;
//     border: none;
//   }

//   .rgCell {
//     color: #888;
//   }
//   revogr-header {
//     .rgHeaderCell.focused-cell {
//       background-color: #0e0e22;
//     }
//   }

//   revogr-data {
//     .rgRow {
//       box-shadow: 0 -1px 0 0 var(--row-shadow) inset;
//     }
//     .rgRow.focused-rgRow {
//       background-color: #0e0e22;
//     }
//     .rgCell {
//       color: #717585;
//     }
//   }
// }
</style>
