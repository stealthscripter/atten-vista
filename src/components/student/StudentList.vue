<template>
    <main v-for="students in studentData">
      <StudentItem :students="students" />
    </main>
  </template>
  
  <script>
  import StudentItem from './StudentItem.vue'
  export default{
    components: { StudentItem },
    props: ['studentData'],
    setup(props) {
    }
  }
  </script>
  
  <style scoped>
  .main {
  }
  </style>
  