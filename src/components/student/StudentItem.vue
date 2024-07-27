<template>
    <main>
        <p class="name">{{ students.firstname }} {{ students.lastname }}</p>
        <p class="id">{{ students.id }}</p>
    </main>
  </template>
  
  <script>
  export default{
    props: ['students'],
    setup(props) {

    }
  }
  </script>

<style scoped>
main {
  width: 60%;
  cursor: pointer;
  border-radius: 5px;
  margin: 0.8rem auto;
  border: 1px solid black;
  padding: 5px 10px;
}

.name {
  margin: 0;
  margin-top: 0.2rem;
}

.id {
  font-size: 0.8rem;
  margin: 0;
}

</style>
  