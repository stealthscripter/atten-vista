<template>
    <NavBar :id="id" @current=""/>
    <!-- <Attendance :id="id"/> -->
     <SubNavBar/>

</template>

<script>
    import SubNavBar from '@/components/utility/SubNavBar.vue';
    import Attendance from '@/components/attendance/Attendance.vue';
    import NavBar from '@/components/utility/NavBar.vue';
    export default{
        props: ['id'],
        components: {Attendance , NavBar , SubNavBar},
        setup(){
            const currentHandler = (data) =>{
                console.log(data)
            }

            return {currentHandler}
        }

    }
</script>

<style scoped>

</style>