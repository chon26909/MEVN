<template>
  <div class="row justify-content-center">
      <div class="col-md-6">
          <h1>Create Student</h1>
          <form action="">
              <div class="form-group">
                  <label for="name">Name : </label>
                  <input type="text" class="form-control" v-model="student.name" required>
              </div>
              <div class="form-group">
                  <label for="name">Email : </label>
                  <input type="text" class="form-control" v-model="student.email" required>
              </div>
              <div class="form-group">
                  <label for="name">Phone : </label>
                  <input type="text" class="form-control" v-model="student.phone" required>
              </div>
              <div class="form-gruop">
                  <button type="button" class="btn btn-success btn-block" >Create</button>
              </div>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            student : {
                name: '',
                email: '',
                phone: ''
            }
        }
    },
    methods: {
        handleSubmit() {

        }
    }
}
</script>

<style>

</style>