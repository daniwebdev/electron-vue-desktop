<template>
  <div class="card" style="width: 100%">
    <div class="card-header">
      <div>Personal Detail</div>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="form-group col-md-6 mb-4">
          <label for="">Nama Lengkap</label>
          <div class="value">Muhamad Yusup Hamdani</div>
        </div>
        <div class="form-group col-md-6 mb-4">
          <label for="">Date of Brith</label>
          <div class="value">20 Januari 2020</div>
        </div>
        <div class="form-group col-md-6 mb-4">
          <label for="">Address Primary</label>
          <div class="value">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
            asperiores?
          </div>
        </div>
        <div class="form-group col-md-6 mb-4">
          <label for="">Address Primary</label>
          <div class="value">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
            asperiores?
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PersonalDetail",
  data() {
    return {
      navActive: "personal",
    };
  },
};
</script>
<style lang="scss">
.form-group {
  label {
    color: #aaa;
  }
  .value {
    font-weight: 600;
    font-size: 15px;
  }
}
</style>
