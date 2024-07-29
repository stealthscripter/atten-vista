<template>
  <router-link :to="{name: 'students' , params:{id: classes.id}}">
    <main>
      <div class="left-box">
        <p class="course">{{ classes.course }}</p>
        <p class="instructor">{{ classes.instructor }}</p>
      </div>
      <div class="right-box">
        <p class="section">{{ classes.section }}</p>
      </div>
    </main>
  
  </router-link>
</template>

<script>

export default {
  props: ['classes'],
  setup() {},
};
</script>

<style scoped>
main {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  margin: 0.8rem 0;
  border: 1px solid black;
  padding: 5px 10px;
}

.course {
  margin: 0;
  margin-top: 0.2rem;
}
.right-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.section {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
}
.instructor {
  font-size: 0.8rem;
  margin: 0;
}
main > div {
  /* border: 1px solid red; */
}
a{
  color: #000;
  text-decoration: none;
}
</style>

