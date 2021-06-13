<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
    <h1>Edit</h1>
      <form @submit.prevent="handleUpdateForm">
        <div class="form-group mt-2">
          <label for="name">Name : </label>
          <input
            type="text"
            class="form-control"
            v-model="student.name"
            required
          />
        </div>
        <div class="form-group mt-2">
          <label for="name">Email : </label>
          <input
            type="email"
            class="form-control"
            v-model="student.email"
            required
          />
        </div>
        <div class="form-group  mt-2">
          <label for="name">Phone : </label>
          <input
            type="text"
            class="form-control"
            v-model="student.phone"
            required
          />
        </div>
        <div class="form-gruop d-grid gap-2 mt-3">
          <button class="btn btn-success btn-block">
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
      return {
          student: {}
      }
  },
  created() {
      let url = "http://localhost:3001/api/edit-student/" + this.$route.params.id 

        axios.get(url).then((res) => {
            this.student = res.data;
        })
  },
  methods: {
      handleUpdateForm() {

           let url_ = "http://localhost:3001/api/update-student/" + this.$route.params.id;

           axios.put(url_, this.student)
           .then(() => {
               console.log("update success");
               this.$router.push({ path: '/' })
                this.$router.push({ name: 'View' })
           })
           .catch((err) => console.log(err));
      }
  }
};
</script>
