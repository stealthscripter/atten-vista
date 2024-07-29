<template>
  <header class="mt-2 p-2">
    <nav class="p-2 flex w-[80%] mx-auto">
      <ul class="flex-none">
        <li class=" text-2xl text-green-500 font-semibold">Attend<span class="text-black">ance</span></li>
      </ul>

      <ul
        class="flex px-4 mx-auto align-middle justify-evenly space-x-10">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>FQA</li>
      </ul>

      <ul class="flex-none">
        <li><button class="bg-green-300 px-2 py-1 border-b-4 border-e-4 border-s-2 border-t-2  border-black rounded-lg text-sm">Join Today</button></li>
      </ul>
    </nav>
  </header>
  <h1 class="mx-auto w-[75%] font-bold mt-2 text-3xl">Dashboard</h1>
  <main class="mx-auto w-[75%] mt-2  flex p-2 gap-x-5">
    <div class="border-2 border-gray-400 rounded-md flex-none w-[25%] flex flex-col p-3 gap-y-6">
        <div class="cursor-pointer h-10 bg-green-300 px-2 py-1 rounded-lg border-b-4 border-e-4 border-black"><p class="font-medium"><PhChartBar class="inline-block" :size="24" />&nbsp;Course Statstics</p></div>
        <div class="cursor-pointer h-10"><p class="font-medium"><PhAddressBook :size="24" class="inline-block" />&nbsp; Reports</p></div>
        <div class="cursor-pointer h-10"><p class="font-medium"><PhGearSix :size="24" class="inline-block" />&nbsp; Setting</p></div>
        <div class="cursor-pointer h-10"><p class="font-medium"><PhUser :size="24" class="inline-block" />&nbsp; User</p></div>
    </div>

    <div class="border-2 border-red-600 grid grid-cols-4 p-2 flex-auto gap-y-2 gap-x-2">
      <div class="h-24 border-2 border-slate-800">
        <p><PhAddressBook :size="24" class="inline-block" /> &nbsp;Courses</p>
        <p class="text-center mt-2 text-3xl">887</p>
      </div>
      <div class="h-24 border-2 border-slate-800">Students</div>
      <div class="h-24 border-2 border-slate-800">Complation</div>
      <div class="h-24 border-2 border-slate-800">New Student</div>

      <div class="border-2 border-black col-start-1 col-end-5 h-80">
          <p>Hey</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  setup() {},
};
</script>
