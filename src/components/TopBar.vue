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
      <span class="btn">
        <i class="mdi mdi-minus"></i>
      </span>
      <span class="btn">
        <i class="mdi mdi-square-outline"></i>
      </span>
      <span class="btn">
        <i class="mdi mdi-close"></i>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: "TopBar",
};
</script>
