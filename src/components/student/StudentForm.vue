<template>
  <h4>Student Logger</h4>
  <main>
    <form @submit.prevent.stop="submitHandler">
      <div class="fname">
        <input autofocus v-model="firstname" type="text" placeholder="Abebe" required />
      </div>

      <div class="lname">
        <input v-model="lastname" type="text" placeholder="Bikila" required />
      </div>

      <div class="id">
        <input v-model="id" type="number" placeholder="3376" required />
      </div>

      <div class="submit">
        <button type="submit">Submit</button>
      </div>
    </form>
  </main>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  props: ['id'],
  emits: ['submit'],
  setup(props, { emit }) {
    const firstname = ref("");
    const lastname = ref("");
    const id = ref("");

    const submitHandler = () => {
      const studentData = {
        firstname: firstname.value,
        lastname: lastname.value,
        id: id.value,
        classid: props.id
      };

      emit('submit', studentData);
      firstname.value = ""
      lastname.value = ""
      id.value = "";
    };

    return { id, submitHandler , firstname , lastname};
  }
};
</script>

<style scoped>
h4 {
  text-align: center;
}
main {
  background: rgb(235, 232, 232);
  padding: 3rem;
  margin-top: 2rem;
}

form {
  padding: 5px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  width: fit-content;
  /* border: 1px solid red; */
}

input {
  padding: 5px 5px;
}

.submit {
  /* border: 1px solid black; */
  grid-column: 1/4;
  display: flex;
  justify-content: center;
}

button {
  cursor: pointer;
  /* border: 2px dotted black; */
  padding: 5px 15px;
}

.id,
.name,
.submit {
  /* border: 1px solid black; */
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
</style>
