<template>
    <NavBar :id="id"/>
    <Attendance :id="id"/>
</template>

<script>
    import Attendance from '@/components/attendance/Attendance.vue';
    import NavBar from '@/components/utility/NavBar.vue';
    export default{
        props: ['id'],
        components: {Attendance , NavBar},
        setup(){
            
        }

    }
</script>

<style>

</style>