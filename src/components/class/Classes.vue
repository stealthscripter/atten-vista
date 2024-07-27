<template>
  <h2>class logger</h2>
  <ClassForm @submit="submitHandler" />
  <ClassList :classData="classData"/>
</template>

<script>
import { onMounted, ref } from "vue";
import ClassForm from "./ClassForm.vue";
import ClassList from "./ClassList.vue";
export default {
  components: { ClassForm, ClassList },
  setup() {


    const classData = ref([])

    const fetchClasses = () => {
      fetch("http://localhost:3000/classes").then(res => res.json()).then(data => classData.value = data)
    }

    onMounted(() => {
       fetchClasses()
    })
    
    const submitHandler = (data) => { 
      fetch("http://localhost:3000/classes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(newData => classData.value.push(newData))
    };

    return { submitHandler , classData};
  },
};
</script>

<style></style>
