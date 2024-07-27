<template>
    <p>Attendance Date at {{ studentData.date }}</p>
    <main v-for="student in studentData.students">
        <AttendanceItem @toggleStatus="toggleStatus" :students="student"/>
    </main>
</template>

<script>
    import AttendanceItem from './AttendanceItem.vue';
    export default{
        components: {AttendanceItem},
        emits: ['toggleStatus'],
        props: ['studentData'],
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