<template>
  <div id="topbar" class="">
    <div class="topbar-left">
      <div class="logo">CONET.ID</div>
      <div class="top-menu">
        <ul>
          <li>
            <a href="#">File</a>
            <div class="top-submenu">
              <span>New File</span>
            </div>
          </li>
          <li><a href="#">Edit</a></li>
          <li><a href="#">View</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
    </div>
    <div class="topbar-center draggable">Home</div>
    <div class="topbar-right">
      <span class="btn">
        <i class="mdi mdi-chevron-down-circle"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style lang="scss">
#topbar {
  /* position: absolute; */
  border-bottom: 1px solid rgb(48, 54, 76);
  background: var(--background-color-primary);
  height: var(--top-hight);
  width: 100%;
  display: flex;
  justify-self: center;
  color: #aaa;
  .topbar-left {
    align-self: center;
    flex: 2;
    // background: #000;
    display: flex;
    .logo {
      font-size: 1em;
      font-weight: bold;
      color: #fff;
      padding-left: 8px;
      padding-right: 10px;
    }

    .top-menu {
      ul {
        display: inline;
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          display: inline-block;
          position: relative;
          font-size: 15px;

          a {
            padding: 5px 10px;
            color: #aaa;
            text-decoration: none;
            &:hover {
              background: var(--button-primary-hover-color);
              cursor: pointer;
              color: #fff;
            }
          }

          &:active,
          &:focus-within {
            a {
              background: var(--button-primary-hover-color);
              cursor: pointer;
              color: #fff;
            }
          }

          &:active > .top-submenu,
          &:focus-within > .top-submenu {
            display: block;
          }

          .top-submenu {
            display: none;
            position: absolute;
            top: 25px;
            width: 200px;
            background: #141318;
            padding: 10px;
            font-size: inherit;
            color: #fff;
          }
        }
      }
    }
  }
  .topbar-center {
    align-self: center;
    text-align: center;
    flex: 2;
  }
  .topbar-right {
    align-self: center;
    flex: 1;
    text-align: right;
    overflow: hidden;
  }
}
</style>
