<template>
    <p>Attendance Date at {{ attendanceData.date }}</p>
    <main v-for="student in attendanceData.students">
        <AttendanceItem @toggleStatus="toggleStatus" :students="student"/>
    </main>    
</template>

<script>
    import AttendanceItem from './AttendanceItem.vue';
    export default{
        components: {AttendanceItem},
        emits: ['toggleStatus'],
        props: ['attendanceData'],
        setup(props,{emit}){
            const toggleStatus = (id) =>{
                emit('toggleStatus',id)
                
            }

            return {toggleStatus}
        }
    }
</script>

<style scoped>

</style>