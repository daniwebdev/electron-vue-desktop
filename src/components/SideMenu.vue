<template>
  <div id="sidebar">
    <div id="side-top">
      <div
        v-for="menu in menus"
        :key="menu.name"
        class="menu-item"
        v-tooltip.right="menu.name"
      >
        <span v-html="menu.icon"></span>
      </div>
    </div>
    <div id="side-bottom">
      <div v-for="bMenu in bottomMenus" class="menu-item" :key="bMenu.icon">
        <span v-html="bMenu.icon"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SideMenu",
  data() {
    return {
      menus: [
        {
          name: "Home",
          icon: '<i class="mdi mdi-home icon"></i>',
          // icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
        },
        {
          name: "Pegawai",
          icon: '<i class="mdi mdi-account-group-outline icon"></i>',
          // icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
        },
        {
          name: "Invoice",
          icon: '<i class="mdi mdi-file-document-outline icon"></i>',
        },
      ],
      bottomMenus: [
        {
          name: "Logout",
          options: [
            {
              title: "Logout",
            },
            {
              title: "Akun",
            },
          ],
          icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
        },
      ],
    };
  },
  //   props: {
  //     items: {
  //       type: Array,
  //       required: true,
  //     },
  //   },
};
</script>

<style lang="scss">
#sidebar {
  background: rgb(40, 44, 61);
  width: var(--side-hight);
  position: fixed;
  display: flex;
  flex-direction: column;
  height: calc(100% - var(--top-hight) - var(--bottom-hight));
  justify-content: space-between;

  .icon {
    font-size: 24px;
  }
}

#sidebar .menu-item {
  width: 100%;
  text-align: center;
  padding: 10px 0px;
  color: #999;
}

#sidebar .menu-item:hover {
  background: rgb(31, 34, 48);
  cursor: pointer;
}
</style>
