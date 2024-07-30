
<template>
    <header class="mt-2 p-2">
    <nav class="p-2 flex w-[80%] mx-auto">
      <ul class="flex-none">
        <li class="text-2xl text-green-500 font-semibold">
          Attend<span class="text-black">ance</span>
        </li>
      </ul>

      <ul class="flex px-4 mx-auto align-middle justify-evenly space-x-10">
        <li><router-link :to="{name: 'home'}">Home</router-link></li>
        <li><router-link :to="{name: 'dashboard'}">Dashboard</router-link></li>
        <li>About</li>
        <li>FQA</li>
      </ul>

      <ul class="flex-none">
        <li>
          <button
            class="bg-green-300 px-2 py-1 border-b-4 border-e-4 border-s-2 border-t-2 border-black rounded-lg text-sm"
          >
            Join Today
          </button>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>

<script>
    import { RouterLink, RouterView } from 'vue-router'
    export default {
      setup(){

      }
    }
</script>

<style scoped>
  li {
     cursor: pointer;
  }
  a.router-link-active {
  font-weight: bold;
  color: #00ce89;
  padding-bottom: 4px;
}
</style>