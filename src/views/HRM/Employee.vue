<template>
  <top-panel title="Employee" :actions="btnactions" />

  <v-grid
    theme="darkMaterial"
    :source="rows"
    :columns="columns"
    readonly="true"
    resize="false"
  ></v-grid>
</template>
<script>
import VGrid from "@revolist/vue3-datagrid";
import TopPanel from "@/components/TopPanel.vue";

export default {
  name: "Employee",
  data() {
    return {
      btnactions: [
        {
          icon: "mdi mdi-plus",
          title: "Add",
        },
      ],
      columns: [
        {
          name: "#",
          prop: "_no",
          columnType: "number",
          size: 60,
          readonly: true,
        },
        {
          name: "Username",
          prop: "username",
          columnType: "string",
          size: 120,
        },
        {
          prop: "name",
          name: "Nama",
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
      this.axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          let data = res.data.map((x) => {
            return {
              _no: x.id,
              username: "2022-08-24",
              name: x.name,
              email: x.email,
            };
          });

          this.rows = data;
        });
    },
  },
  mounted() {
    this.getData();
  },
  components: {
    VGrid,
    TopPanel,
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
