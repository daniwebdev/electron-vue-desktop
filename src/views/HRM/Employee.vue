<template>
  <top-panel
    title="Employee"
    tooltip="Create new employee"
    :actions="btnactions"
  />

  <v-grid
    theme="darkMaterial"
    :source="rows"
    :columns="columns"
    readonly="true"
  ></v-grid>

  <Modal size="lg" @close="formIsOpen == false" v-if="formIsOpen == true">
    <template v-slot:header>
      <h3>Exit From App</h3>
    </template>
    <template v-slot:body>
      <div class="row" style="width: 100%">
        <div class="col-md-6">
          <div class="form-group">
            <label for="">Nama Lengkap</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="">Nama Lengkap</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="">Nama Lengkap</label>
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="act-group">
        <button class="btn cancel" @click="cancel()">Cancel</button>
        <button class="btn confirm" @click="confirm()">Confirm</button>
      </div>
    </template>
  </Modal>
</template>
<script>
import VGrid from "@revolist/vue3-datagrid";
import TopPanel from "@/components/TopPanel.vue";
import Modal from "@/components/Modal.vue";
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
      ],
      columns: [
        {
          name: "#",
          prop: "id",
          columnType: "number",
          // size: 60,
          readonly: true,
        },
        {
          name: "Nama",
          prop: "fullname",
          size: 200,
        },
        {
          name: "Departement",
          prop: "departement",
          size: 200,
        },
        {
          name: "Jabatan",
          prop: "designation",
          size: 200,
        },
        {
          prop: "email",
          name: "Email",
        },
      ],
      rows: [],
    };
  },
  methods: {
    getData() {
      this.store.commit("startLoading");
      this.axios.get("employee").then((res) => {
        let data = res.data.data.map((x) => {
          return x;
        });

        this.rows = data;
        this.store.commit("startLoading");
      });
    },
  },
  mounted() {
    ipcRenderer.send("setTitle", "Employee");
    this.getData();
  },
  components: {
    TopPanel,
    Modal,
    VGrid,
  },
};
</script>

<style lang="scss">
revo-grid {
  height: calc(100vh - 50px - var(--top-hight) - var(--bottom-hight));
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
