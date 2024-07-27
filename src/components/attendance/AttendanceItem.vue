<template>
    <main @click="toggleStatus(students.id)">
        <p class="name">{{ students.firstname }}</p>
        <p class="id">{{ students.id }}</p>
        <p>{{ students.status }}</p>
    </main>
</template>

<script>
    export default{
        emits: ['toggleStatus'],
        props: ['students'],
        setup(props ,{emit}){
            const toggleStatus = (id) => {
                emit('toggleStatus' , id)
            }

            return {toggleStatus}
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
.present{
    border: 1px solid green;
}
.absent{
    border: 1px solid red;
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