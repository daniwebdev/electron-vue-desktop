<template>
  <div class="card" style="width: 100%">
    <div class="card-header">Activity Log</div>
    <div class="card-body">
      <ul class="activity-container">
        <li v-for="(log, index) in logs" :key="index">
          [{{ log.ts }}] {{ log.message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivityLog",
  data() {
    return {
      logs: [],
    };
  },
  methods: {
    getLogs() {
      this.axios
        .get("employee/1/logs")
        .then((res) => res.data)
        .then((res) => {
          this.logs = res.data;
          console.log(res);
        });
    },
  },
  mounted() {
    this.getLogs();
  },
};
</script>

<style lang="scss">
ul.activity-container {
  font-family: "Anonymous Pro";
  font-size: 12px;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding-bottom: 5px;
    &:hover {
      color: #f00;
    }
  }
}
</style>
