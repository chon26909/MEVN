<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1>Show Student</h1>
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="student in Students" :key="student._id">
                                <td>{{student.name}}</td>
                                <td>{{student.email}}</td>
                                <td>{{student.phone}}</td>
                                <td>
                                    <router-link :to="{name: 'Edit', params: {id: student._id}}" class="btn btn-success">
                                        Edit
                                    </router-link>
                                    <button @click.prevent="deleteStudent(student._id)" class="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            Students : []
        }
    },
    created() {
        const url = "http://localhost:3001/api";

        axios.get(url).then(res => {
            this.Students = res.data;
        }).catch((err) => console.log(err));
    },
    methods: {
        deleteStudent(id) {
            const url = "http://localhost:3001/api/delete-student/" + id;

            const indexOfArray = this.Students.findIndex(i => i._id === id);

            if(window.confirm("คุณต้องการลบใช่หรือไม่")) {
                axios
                .delete(url)
                .then(() => this.Students.splice(indexOfArray,1))
                .catch((err) => console.log(err));
            }
        }
    }
}
</script>