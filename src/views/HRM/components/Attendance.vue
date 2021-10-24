<template>
  <div class="card" style="width: 100%">
    <div class="card-header d-flex justify-content-between">
      <div>Attendance</div>
      <div>
        <select name="" id="">
          <option value="">2021</option>
        </select>
        <select name="" id="">
          <option value="">Januari</option>
        </select>
      </div>
    </div>
    <div class="card-body">
      <div
        class="attendance-item d-flex align-items-center"
        v-for="item in this.attendance"
        :key="item.index"
      >
        <div>
          <div
            class="d-flex align-items-center"
            style="
              width: 80px;
              height: 80px;
              justify-content: center;
              border-radius: 10%;
              background: rgba(100, 100, 100, 0.2);
            "
          >
            <div class="text-center">
              <span
                class="d-block m-0 p-0"
                style="font-size: 30px; line-height: 1em"
                >{{ item.day }}</span
              >
              <span class="m-0 p-0" style="font-size: 15px">{{
                item.month
              }}</span>
            </div>
          </div>
        </div>
        <div style="margin-left: 20px">
          <div class="d-block">
            <span style="margin-right: 50px">
              <i class="mdi mdi-chevron-double-down text-success"></i>
              {{ item.in }}
            </span>
            <span>
              <i class="mdi mdi-chevron-double-up text-danger"></i>
              {{ item.out }}
            </span>
          </div>
          <span class="d-block"> Note: {{ item.note }} </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Datepicker from "vue3-datepicker";

export default {
  name: "Attendance",
  data() {
    return {
      date: new Date(),
      attendance: [],
    };
  },
  methods: {
    async getAttendance() {
      let response = await this.axios.get("employee/1/attendance");
      if (response.data) {
        //data short month name
        let shortMonth = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];

        this.attendance = response.data.data.map((item) => {
          item.day = item.date.split("-")[2];
          item.month =
            shortMonth[parseInt(item.date.split("-")[1]) - 1].toUpperCase();

          return item;
        });
      }
    },
  },
  async mounted() {
    await this.getAttendance();
  },
  components: {},
};
</script>
<style lang="scss">
.attendance-item {
  border: 1px solid rgba($color: #fff, $alpha: 0.2);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0px;
  }
}
</style>
