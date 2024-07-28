<template>
  <div>
    <nav class="main-nav">
      <router-link :to="{ name: 'students', params: { id: id } }"
        >Student</router-link
      >
      <router-link :to="{ name: 'attendance', params: { id: id } }"
        >Attendance</router-link
      >
    </nav>

    <div v-if="$route.name === 'attendance'">
      <nav class="secondary-nav">
        <button
          @click="currentComponent('takeattendance')"
          class="border-2 border-dotted border-blue-400 px-2"
        >
          Take Attendance
        </button>
        <button
          @click="currentComponent('viewattendance')"
          class="border-2 border-dotted border-blue-400 px-2"
        >
          View Attendance
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  emits: ['current'],
  setup(props, {emit}) {
      const currentComponent = (current) => {
            console.log(current)
            emit('current' , current)
      }

      return {currentComponent}
  }
}
</script>

<style scoped>
.main-nav {
  text-align: center;
  margin: 40px auto;
}
.main-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: #999;
  font-size: 18px;
}
a.router-link-active {
  border-bottom: 2px solid #00ce89;
  padding-bottom: 4px;
}
.secondary-nav {
  margin-top: 20px;
}

.secondary-nav button {
  margin-right: 10px;
}

.secondary-nav .active {
  font-weight: bold;
  border-bottom: 2px solid #000;
}
</style>
