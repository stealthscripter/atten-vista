<template>
    <AttendanceForm :studentData="studentData" :id="id" @submitHandler="submitHandler"/>
</template>

<script>
import AttendanceForm from './AttendanceForm.vue';

import {computed, onMounted, ref} from 'vue'
export default {
  components: {AttendanceForm},
  props: ["id"],
  setup(props) {
    const students = ref([])
    const fetchStudents = () => {
      fetch("http://localhost:8000/students")
        .then((res) => res.json())
        .then((data) => (students.value = data));
    }
    onMounted(() => {
      fetchStudents()
    })

    const studentData = computed(() => {
            return students.value.filter(student => 
                student.classid === props.id)
        })
    
   const submitHandler = (data) => {
        fetch("http://localhost:4000/attendance" , {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(data)
        })
   }
        return {studentData , submitHandler}
  }
}
</script>

<style scoped>
    h4{
        text-align: center;
    }
</style>
