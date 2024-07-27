<template>
    <NavBar :id="id"/>
    <Students :id="id"/>
</template>

<script>
    import NavBar from '@/components/utility/NavBar.vue';
    import Students from '@/components/student/Students.vue';
    export default{
        components : {Students , NavBar},
        props: ['id'],
        setup(props){
            const id = props.id

            return{id}
        }
    }
</script>

<style>


</style>