<template>
  <div class="row m-0">
    <div class="" style="width: 220px">
      <div
        class="m-auto mt-3"
        id="avatar-image"
        style="
          width: 200px;
          height: 200px;
          background: url('https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png');
          background-size: cover;
          position: relative;
        "
      >
        <div
          id="btn-upload-photo"
          @click="choseUpload"
          style="
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 10px;
          "
        >
          <i class="mdi mdi-camera"></i> Choose
        </div>
      </div>
    </div>

    <div style="width: calc(100% - 220px)">
      <form action="" method="post" class="row m-0 mt-3">
        <div class="d-flex">
          <h3>Personal Data</h3>
        </div>
        <div class="form-group col-md-4">
          <label for="">Fullname</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder=""
            aria-describedby="helpId"
          />
          <small id="helpId" class="text-muted">Help text</small>
        </div>
        <div class="form-group col-md-4">
          <label for="">Nickname</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder=""
            aria-describedby="helpId"
          />
          <small id="helpId" class="text-muted">Help text</small>
        </div>
        <div class="form-group col-md-4">
          <label for="">Gender</label>
          <select name="" id="" class="form-control">
            <option value="">- Select -</option>
            <option value="">Male</option>
            <option value="">Famela</option>
          </select>
          <small id="helpId" class="text-muted">Help text</small>
        </div>
        <div class="form-group col-md-4">
          <label for="">Date of Birth</label>
          <input
            type="date"
            name=""
            id=""
            class="form-control"
            placeholder=""
            aria-describedby="helpId"
          />
          <small id="helpId" class="text-muted">Help text</small>
        </div>
        <div class="form-group col-md-4">
          <label for="">Marital Status</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder=""
            aria-describedby="helpId"
          />
          <small id="helpId" class="text-muted">Help text</small>
        </div>
        <div class="form-group col-md-4">
          <label for="">Religion</label>
          <select name="" id="" class="form-control">
            <option value="">- Select -</option>
          </select>
          <small id="helpId" class="text-muted">Help text</small>
        </div>
        <div class="col-md-12">
          <div class="d-flex justify-content-between">
            <h3>Education Qualification</h3>
            <div>
              <button
                type="button"
                class="btn btn-primary btn-sm"
                @click="this.addRowEducation()"
              >
                <i class="mdi mdi-plus"></i> Add Row
              </button>
            </div>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Institute</th>
                <th>Degree</th>
                <th>Board/University</th>
                <th>Result</th>
                <th>GPA / CGPA</th>
                <th>Passing Year</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="edForm in vFormEdu" :key="edForm.index">
                <td>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.education[edForm.index].institute"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.education[edForm.index].degree"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.education[edForm.index].university"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.education[edForm.index].result"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.education[edForm.index].gpa"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.education[edForm.index].passing_year"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Data Experiance -->
        <div class="col-12 mt-3">
          <div class="d-flex justify-content-between">
            <h3>Professional Experience</h3>
            <div>
              <button
                type="button"
                class="btn btn-primary btn-sm"
                @click="this.addRowExperiance()"
              >
                <i class="mdi mdi-plus"></i> Add Row
              </button>
            </div>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Organization</th>
                <th>Designation</th>
                <th>Duration</th>
                <th>Skill</th>
                <th>Responsibility</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="expForm in vFormExp" :key="expForm.index">
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="col-12 mb-3 mt-4">
          <div class="d-flex justify-content-between">
            <div class="btn-group">
              <button class="btn btn-success">
                <i class="mdi mdi-content-save"></i> Save Data
              </button>
              <button
                type="button"
                class="btn btn-danger"
                @click="$router.go(-1)"
              >
                <i class="mdi mdi-window-close"></i> Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "EmployeeForm",
  data() {
    return {
      vFormEdu: [{ index: 0 }],
      vFormExp: [{ index: 0 }],
      form: {
        education: [
          {
            institute: "",
            degree: "",
            university: "",
            result: "",
            gpa: "",
            passing_year: "",
          },
        ],
      },
    };
  },
  methods: {
    addRowEducation(event) {
      let _index = this.$data.vFormEdu.length;
      this.$data.vFormEdu.push({ index: _index });
      console.log(_index);
      let ed = this.$data.form.education;
      if (ed[_index] == undefined) {
        ed.push({
          institute: "",
          degree: "",
          university: "",
          result: "",
          gpa: "",
          passing_year: "",
        });
      }
    },
    addRowExperiance(event) {
      console.log(this.$data.vFormExp);
      this.$data.vFormExp.push({ index: this.$data.vFormExp.length - 1 });
    },
    choseUpload() {
      ipcRenderer.send("openDialog", ["png", "jpg", "jpeg"]);
      let _http = this.axios;
      ipcRenderer.receive("openDialog-reply", (base64) => {
        var dataURLToBlob = function (dataURL) {
          var BASE64_MARKER = ";base64,";
          if (dataURL.indexOf(BASE64_MARKER) == -1) {
            var parts = dataURL.split(",");
            var contentType = parts[0].split(":")[1];
            var raw = parts[1];

            return new Blob([raw], { type: contentType });
          }

          var parts = dataURL.split(BASE64_MARKER);
          var contentType = parts[0].split(":")[1];
          var raw = window.atob(parts[1]);
          var rawLength = raw.length;

          var uInt8Array = new Uint8Array(rawLength);

          for (var i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
          }

          return new Blob([uInt8Array], { type: contentType });
        };

        document.querySelector("#avatar-image").style = `
          width: 200px;
          height: 200px;
          background: url('${base64}');
          background-size: cover;
          position: relative;
        `;

        let formData = new FormData();
        formData.append("file", dataURLToBlob(base64), "file.png");
        _http.post("employee/upload", formData).then((res) => {
          console.log(res);
        });
      });
    },
  },
  computed: {},
  components: {},
  mounted() {
    ipcRenderer.send("setTitle", "Add Employee");
  },
  unmounted() {},
};
</script>

<style lang="scss">
div.form-group {
  margin-bottom: 10px;
  label {
    color: #eeeeee !important;
    margin-bottom: 5px;
  }
}

.table {
  // background: #272b34;

  thead {
    background: #3f4c6b;
    color: #eeeeee;
    tr > th {
      padding: 10px;
    }
  }
  tbody {
    background: #eeeeee;
    tr > td {
      padding: 10px;
    }
  }
}
#btn-upload-photo {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
}
</style>
