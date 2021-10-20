<template>
  <div class="card" style="width: 100%">
    <div class="card-header">
      <div>Personal Detail</div>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="form-group col-md-12 mb-4">
          <label for="">Employee ID</label>
          <div class="value">{{ employee.employeeCode }}</div>
        </div>
        <div class="form-group col-md-6 mb-4">
          <label for="">Nama Lengkap</label>
          <div class="value">{{ employee.fullname }}</div>
        </div>
        <div class="form-group col-md-3 mb-4">
          <label for="">Gender</label>
          <div class="value">{{ employee.gender ? employee.gender : "-" }}</div>
        </div>
        <div class="form-group col-md-3 mb-4">
          <label for="">Date of Brith</label>
          <div class="value">{{ employee.date_of_birth }}</div>
        </div>
        <div class="form-group col-md-12 mb-4">
          <label for="">Address Primary</label>
          <div class="value">
            {{ employee.address }}
          </div>
        </div>
        <div class="form-group col-md-6 mb-4">
          <label for="">Email</label>
          <div class="value">{{ employee.email }}</div>
        </div>
        <div class="form-group col-md-6 mb-4">
          <label for="">Phone</label>
          <div class="value">{{ employee.phone }}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Education Qualification -->
  <div class="card mt-2" style="width: 100%">
    <div class="card-header">Education Qualification</div>
    <div class="card-body">
      <div
        class="education-item"
        v-for="(edu, index) in employee.education"
        :key="index"
      >
        <div class="number">
          <span>{{ index + 1 }}</span>
        </div>
        <div>
          <h3>{{ edu.institute }}</h3>
          <span>2013 - 2012</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Professional Experience -->
  <div class="card mt-2">
    <div class="card-header">Professional Experience</div>
    <div class="card-body">
      <div
        class="professional-item"
        v-for="(pro, index) in employee.experiance"
        :key="'pro' + index"
      >
        <div class="number">
          <span>{{ index + 1 }}</span>
        </div>
        <div>
          <h3>{{ pro.organization }}</h3>
          <span>{{ pro.duration }}</span>
          <p style="font-size: 12px" class="m-0">
            {{ pro.responsibility }}
          </p>
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
      employee: {
        fullname: "",
        date_of_birth: "",
        address: "",
        email: "",
        education: [],
        experience: [],
      },
    };
  },
  methods: {
    getEmployee() {
      this.axios
        .get("/employee/0901011010110")
        .then((res) => res.data)
        .then((res) => {
          this.employee = res.data;
          console.log(this.employee);
        });
    },
  },
  mounted() {
    this.getEmployee();
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
.education-item,
.professional-item {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  .number {
    width: 70px;
    height: 70px;
    background: #120f24;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 17px;
    }
  }
  h3 {
    margin: 0px;
    padding: 0px;
    font-size: 18px;
  }
  span {
    font-size: 14px;
  }
}
</style>
