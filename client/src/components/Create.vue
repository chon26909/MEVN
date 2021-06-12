<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h1>Create Student</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name : </label>
          <input
            type="text"
            class="form-control"
            v-model="student.name"
            required
          />
        </div>
        <div class="form-group">
          <label for="name">Email : </label>
          <input
            type="text"
            class="form-control"
            v-model="student.email"
            required
          />
        </div>
        <div class="form-group">
          <label for="name">Phone : </label>
          <input
            type="text"
            class="form-control"
            v-model="student.phone"
            required
          />
        </div>
        <div class="form-gruop">
          <button class="btn btn-success btn-block">
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      student: {
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log("create student");

      const url = "http://localhost:3001/api/create-student";

      axios
        .post(url, this.student)
        .then((res) => {
          if (res.status == 200) {
            this.$router.push("/view");
            this.student = {
              name: "",
              email: "",
              phone: "",
            };
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
