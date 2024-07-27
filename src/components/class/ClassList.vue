<template>
  <main class="main" v-for="classes in classData">
    <ClassItem :classes="classes" />
  </main>
</template>

<script>
import { onUpdated, onMounted, ref, watch } from 'vue';
import ClassItem from './ClassItem.vue';
    export default {
        props: ['classData'],
        components: {ClassItem},
        setup(){

        }
    }
</script>

<style scoped>
.main {
  width: 50%;
  margin: 0 auto;
  padding: 10px;
}
</style>