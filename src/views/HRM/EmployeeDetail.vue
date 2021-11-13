<template>
  <navigation-panel v-if="withNavigation"></navigation-panel>

  <div id="userinfo" class="p-3">
    <!-- Header -->
    <div class="card card-with-shadow">
      <div class="card-body">
        <div class="row">
          <div class="col-md-2">
            <div class="text-center">
              <img
                class="img-fluid rounded-circle"
                src="https://i.pravatar.cc/300?u=df"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-4">
            <h3 class="m-0">Muhamad Yusup Hamdani</h3>
            <span class="badge bg-primary">Permanent</span>
            <div class="d-block pb-1 pt-3">
              <i class="mdi mdi-email"></i>
              <small> dani.webdev@gmail.com</small>
            </div>
            <div class="d-block pb-1">
              <i class="mdi mdi-facebook"></i>
              <small> we.are.emo</small>
            </div>
            <div class="d-block pb-1">
              <i class="mdi mdi-linkedin"></i>
              <small> daniwebdev</small>
            </div>
          </div>
          <div
            class="col-md-5 d-flex align-items-center"
            style="border-left: 1px solid #555"
          >
            <div class="row" style="width: 100%">
              <div class="col-md-6">
                <div class="d-flex align-items-center">
                  <div style="font-size: 50px">
                    <i class="mdi mdi-briefcase-outline"></i>
                  </div>
                  <div>
                    <small for="">Departement</small>
                    <span class="d-block" style="font-weight: bold">
                      Accounting & IT
                    </span>
                  </div>
                </div>
                <div class="d-flex align-items-center mt-4">
                  <div style="font-size: 50px">
                    <i class="mdi mdi-clock-outline"></i>
                  </div>
                  <div>
                    <small for="">Work Shift</small>
                    <span class="d-block" style="font-weight: bold">
                      Regular work shift
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="d-flex align-items-center">
                  <div style="font-size: 50px">
                    <i class="mdi mdi-currency-usd"></i>
                  </div>
                  <div>
                    <small for="">Salary</small>
                    <span class="d-block" style="font-weight: bold">
                      $1,000,000
                    </span>
                  </div>
                </div>

                <div class="d-flex align-items-center mt-4">
                  <div style="font-size: 50px">
                    <i class="mdi mdi-calendar"></i>
                  </div>
                  <div>
                    <small for="">Joining Date</small>
                    <span class="d-block" style="font-weight: bold">
                      Not added yet
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="mt-3"></div>
    <div class="row card-with-shadow">
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <ul class="user-menu">
              <li
                :class="{ active: navActive == 'personal' }"
                @click="onClickRoute('personal')"
              >
                <router-link :to="'/employee/' + employeeID + '/detail'"
                  ><span> Personal Details </span>
                </router-link>
              </li>
              <li
                :class="{ active: navActive == 'activity' }"
                @click="onClickRoute('activity')"
              >
                <router-link :to="'/employee/' + employeeID + '/activity'">
                  <span>Activity Log</span>
                </router-link>
              </li>
              <li
                :class="{ active: navActive == 'attendance' }"
                @click="onClickRoute('attendance')"
              >
                <router-link :to="'/employee/' + employeeID + '/attendance'">
                  <span> Attendance </span>
                </router-link>
              </li>
              <li
                :class="{ active: navActive == 'leave' }"
                @click="onClickRoute('leave')"
              >
                <router-link :to="'/employee/' + employeeID + '/leave'">
                  <span> Leave </span>
                </router-link>
              </li>
              <li
                :class="{ active: navActive == 'payslip' }"
                @click="onClickRoute('payslip')"
              >
                <router-link :to="'/employee/' + employeeID + '/payslip'">
                  <span> Payslip </span>
                </router-link>
              </li>
              <li
                :class="{ active: navActive == 'tasks' }"
                @click="onClickRoute('tasks')"
              >
                <router-link :to="'/employee/' + employeeID + '/tasks'">
                  <span> Tasks </span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import NavigationPanel from "@/components/NavigationPanel.vue";

export default {
  name: "EmployeeDetail",
  components: { NavigationPanel },
  data() {
    return {
      employeeID: 0,
      withNavigation: false,
      navActive: "personal",
      btnactions: [],
      employee: {
        fullname: "",
        date_of_birth: "",
        address: "",
        email: "",
      },
    };
  },
  methods: {
    onClickRoute(name) {
      this.navActive = name;
    },
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

    this.employeeID = this.$route.params.id;
    console.log(this.$route.params);

    this.withNavigation =
      this.$route.query.navigation != undefined
        ? this.$route.query.navigation
        : false;
  },
};
</script>

<style lang="scss">
ul.user-menu {
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    cursor: pointer;
    clear: both;
    &.active {
      color: #019aff;
      a {
        color: #019aff;
      }
      span:after {
        display: block;
      }
    }
    a {
      text-decoration: none;
    }
    span {
      display: block;
      padding: 10px;
    }
    span:after {
      font-family: "Material Design Icons";
      display: none;
      float: right;
      font-size: 20px;
      content: "\F0142";
      clear: both;
    }
    &:hover {
      color: #019aff;
      a {
        color: #019aff;
      }
      span:after {
        display: block;
      }
    }
  }
}
</style>
