<template>
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

export default {
  name: "Employee",
  data() {
    return {
      columns: [
        {
          name: "#",
          prop: "_no",
          columnType: "date",
          size: 40,
          readonly: true,
        },
        {
          name: "Birth",
          prop: "birthdate",
          columnType: "date",
          size: 120,
        },
        {
          prop: "name",
          name: "Nama",
          size: 200,
        },
        {
          prop: "details",
          name: "Jabatan",
        },
      ],
      rows: [
        {
          _no: "1",
          birthdate: "2022-08-24",
          name: "Muhamad Yusup Hamdani",
          details: "Item 1",
        },
        {
          _no: "2",
          birthdate: "2022-08-24",
          name: "Dea Anggi Rahmawati",
          details: "Item 1",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
        {
          _no: "3",
          birthdate: "2022-08-24",
          name: "Azra Hafshah Hamdani",
          details: "Item 2",
        },
      ],
    };
  },
  components: {
    VGrid,
  },
};
</script>

<style lang="scss">
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
