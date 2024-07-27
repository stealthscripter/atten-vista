<template>
  <main>
    <form action="" @submit.prevent="submitHandler">
      <div class="course">
        <input v-model="course" type="text" placeholder="Course" required />
      </div>

      <div class="section">
        <input v-model="section" type="text" placeholder="Section" required />
      </div>

      <div class="insructor">
        <input
          v-model="instructor"
          type="text"
          placeholder="Instructor"
          required
        />
      </div>

      <div class="submit">
        <button type="submit">Submit</button>
      </div>
    </form>
  </main>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  emits: ["submit"],
  setup(props, { emit }) {
    const course = ref("");
    const section = ref("");
    const instructor = ref("");


    const submitHandler = () => {
      const classData = {
        course: course.value,
        section: section.value,
        instructor: instructor.value,
      };

      emit("submit", classData);

      course.value = "";
      section.value = "";
      instructor.value = "";
      
    };

    return { submitHandler, section, instructor, course };
  },
};
</script>

<style scoped>
main {
  background: rgb(235, 232, 232);
  padding: 3rem;
  margin-top: 8rem;
}

form {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  width: fit-content;
  /* border: 1px solid red; */
}
p {
  margin: 5px;
}

input {
  padding: 5px 5px;
}
.submit {
  grid-column: 2;
  display: flex;
  justify-content: center;
  /* border: 1px solid black; */
}
.submit > button {
  margin-top: 25px;
}
button {
  cursor: pointer;
  border: 2px dotted black;
  padding: 5px 15px;
}
</style>
