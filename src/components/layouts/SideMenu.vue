<template>
  <div id="sidebar">
    <div id="side-top">
      <router-link
        :to="menu.link"
        v-for="menu in menus"
        :key="menu.name"
        class="menu-item"
        v-tooltip.right="menu.name"
      >
        <span v-html="menu.icon"></span>
      </router-link>
    </div>
    <div id="side-bottom">
      <a
        href="javascript:void"
        v-for="bMenu in bottomMenus"
        class="menu-item"
        :key="bMenu.icon"
      >
        <span v-html="bMenu.icon"></span>

        <div class="sidemenu-sub">
          <a href="">Link 1</a>
          <a href="">Link 3</a>
        </div>
      </a>
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
          link: "/",
          icon: '<i class="mdi mdi-home icon"></i>',
        },
        {
          name: "Account",
          link: "/userinfo",
          icon: '<i class="mdi mdi-account icon"></i>',
        },
        {
          name: "Pegawai",
          link: "/employee",
          icon: '<i class="mdi mdi-account-group-outline icon"></i>',
        },
        {
          name: "Invoice",
          link: "/invoice",
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
          icon: '<i class="mdi mdi-cog icon"></i>',
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
  background: var(--background-color-secondary);
  width: var(--side-hight);
  position: fixed;
  display: flex;
  flex-direction: column;
  height: calc(100% - var(--top-hight) - var(--bottom-hight));
  justify-content: space-between;

  a {
    color: inherit;
  }

  .icon {
    font-size: 24px;
  }
}

#sidebar .menu-item {
  display: block;
  width: 100%;
  text-align: center;
  padding: 10px 0px;
  color: #999;
  position: relative;
  .sidemenu-sub {
    display: none;
    left: var(--side-hight);
    position: absolute;
    padding-top: 10px;
    padding-bottom: 10px;
    background: var(--background-color-secondary) !important;
    font-size: 11px;
    z-index: 99999 !important;
    a {
      z-index: 99999 !important;
      display: block;
      padding: 10px;
      text-align: left;
      cursor: pointer;
      &:hover {
        z-index: 99999 !important;
        background: #212535 !important;
      }
    }
  }
}

#sidebar {
  .menu-item:active,
  .menu-item:focus {
    z-index: 99999 !important;
    background: #1f2230;
    cursor: pointer;
    .sidemenu-sub {
      display: block;
      bottom: 0;
      width: 200px;
    }
  }
}
</style>
