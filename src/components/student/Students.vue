<template>
    <StudentForm @submit="submitHandler" :id="id"/>
    <StudentList :studentData="studentData" />
</template>

<script>
import StudentForm from './StudentForm.vue';
import {computed, onMounted, ref} from 'vue'
import StudentList from './StudentList.vue'
export default {
    props: ['id'],
    components: {
        StudentForm,
        StudentList
    },
    setup(props) {

        const students = ref([])
        const fetchStudents = () => {
            fetch("http://localhost:8000/students").then(res => res.json()).then(data => students.value = data)
        }
        onMounted(() => {
            fetchStudents()
        })
        const submitHandler = (data) => {
           fetch("http://localhost:8000/students" , {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(data)
           }).then(res => res.json())
           .then(newData => students.value.push(newData))
        }

        const studentData = computed(() => {
            return students.value.filter(student => 
                student.classid === props.id)
        })

        return{submitHandler , studentData}
    }
}
</script>

<style>

</style>
