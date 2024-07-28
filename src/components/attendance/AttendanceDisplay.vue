<template>
    <input type="date" v-model="date"/>
    <h1 class="text-2xl text-red-300">Attendance Display</h1>
    <button @click="viewAttendance">View</button>
    <AttendanceList :attendanceData="filteredAttendance"/>
</template>
<script>
    import { computed, onMounted, ref } from 'vue';
import AttendanceList from './AttendanceList.vue';
    export default{
        props: ['id'],
        components: {AttendanceList},
        setup(props){
            const attendanceList = ref([])
            const date = ref([])
            const fetchAttendanceData = async () => {
                const res = await fetch("http://localhost:4000/attendance")
                const data = await res.json()
                attendanceList.value = data
            }
            const filteredAttendance = computed(() => {
                return attendanceList.value.filter(attendance => attendance.date == date.value && attendance.classid == props.id)
            })
            onMounted(() => {
                fetchAttendanceData()
            })
            const viewAttendance = () => {
                console.log(filteredAttendance.value)
            }
            return {date , attendanceList , filteredAttendance , viewAttendance}
        }
    }
</script>

<style>

</style>