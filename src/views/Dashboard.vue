<template>
    <h1 class="mx-auto w-[75%] font-bold mt-2 text-3xl">Dashboard</h1>
    <main class="mx-auto w-[75%] mt-2  flex p-2 gap-x-5">
      <div class="border-2 border-gray-400 rounded-md flex-none w-[25%] flex flex-col p-3 gap-y-6">
          <RouterLink to="/x" class="cursor-pointer h-10 bg-green-300 px-2 py-1 rounded-lg border-b-4 border-e-4 border-black"><p class="font-medium"><PhChartBar class="inline-block" :size="24" />&nbsp;Attendance Statstics</p></RouterLink>
          <RouterLink to="/classes" class="cursor-pointer h-10"><p class="font-medium"><PhChalkboard :size="24" class="inline-block" />&nbsp; Class</p></RouterLink>
          <RouterLink to="/x" class="cursor-pointer h-10"><p class="font-medium"><PhAddressBook :size="24" class="inline-block" />&nbsp; Attendance</p></RouterLink>
          <RouterLink to="/x" class="cursor-pointer h-10"><p class="font-medium"><PhStudent :size="24" class="inline-block" />&nbsp; Students</p></RouterLink>
          <RouterLink to="/x" class="cursor-pointer h-10"><p class="font-medium"><PhGearSix :size="24" class="inline-block" />&nbsp; Setting</p></RouterLink>
      </div>
  
      <div class="grid grid-cols-4 p-2 flex-auto gap-y-2 gap-x-2 cursor-pointer">
        <div class="h-24 rounded-md border-2 border-slate-800 p-2">
          <p><PhChalkboard :size="24" class="inline-block" /> &nbsp;Classes</p>
          <p class="text-center mt-2 text-3xl font-medium">887</p>
        </div>
        <div class="round-md h-24 border-2 border-slate-800 p-2 cursor-pointer">
          <p><PhStudent :size="24" class="inline-block" /> &nbsp;Students</p>
          <p class="text-center mt-2 text-3xl font-medium">234</p>
        </div>
        <div class="round-md h-24 border-2 border-slate-800 p-2 cursor-pointer">
          <p><PhChartDonut :size="24" class="inline-block" /> &nbsp;Complation</p>
          <p class="text-center mt-2 text-3xl font-medium">98%</p>
        </div>
        
        <div class="h-24 rounded-md border-2 border-slate-800 p-2">
          <p><PhUsersFour :size="24" class="inline-block" /> &nbsp;New Students</p>
          <p class="text-center mt-2 text-3xl font-medium">7</p>
        </div>
  
        <!-- Single Page Implementation -->
        <div class="border-2 border-black col-start-1 col-end-5 h-80">
              <RouterView/>
        </div>

      </div>
    </main>
  </template>
  
  <script>
  import { PhChalkboard, PhChartDonut, PhStudent, PhUsers, PhUsersFour } from '@phosphor-icons/vue';
  import { RouterLink, RouterView } from 'vue-router';
  export default {
    setup() {
        
    },
  };
  </script>
  