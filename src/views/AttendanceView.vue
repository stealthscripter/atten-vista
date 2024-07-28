<template>
    <NavBar :id="id" @current="currentHandler"/>
    <Attendance v-if="currentComponnent" :id="id"/>
    <AttendanceDisplay :id="id" v-if="!currentComponnent"/>
</template>

<script>
    import AttendanceDisplay from '@/components/attendance/AttendanceDisplay.vue';
    import Attendance from '@/components/attendance/Attendance.vue';
    import NavBar from '@/components/utility/NavBar.vue';
    import { ref } from 'vue';
    export default{
        props: ['id'],
        components: {Attendance , NavBar , AttendanceDisplay},
        setup(){

            const currentComponnent = ref(true)
            const currentHandler = (data) =>{
                console.log(data)
                currentComponnent.value = data
            }

            return {currentHandler , currentHandler , currentComponnent}
        }

    }
</script>

<style scoped>

</style>