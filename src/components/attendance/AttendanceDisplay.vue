<template>
  <input type="date" @input="checkTheData" v-model="date" />
  <h1 class="text-2xl text-red-300">Attendance Display</h1>
  <div v-for="attendanceData in filteredAttendance">
    <div
      v-if="attendanceData.students"
      v-for="student in attendanceData.students">
      <p>{{ student.firstname }} {{ student.status }}</p>
    </div>
  </div>

  <div v-if="datax !== null">
    <div v-if="datax">
      <p>Yes it Avaliable</p>
    </div>
  <div v-else>
    <p>No its not here</p>
  </div>
  </div>
</template>
<script>
import { computed, onMounted, ref, watch } from "vue";
export default {
  props: ["id"],
  components: {},
  setup(props) {
    const attendanceList = ref([]);
    const date = ref([]);
    const datax = ref(null);
    const fetchAttendanceData = async () => {
      try {
        const res = await fetch("http://localhost:4000/attendance");
        const data = await res.json();
        attendanceList.value = data;
      } catch (err) {
        console.log(err.message);
      }
    };

    const filteredAttendance = computed(() => {
      return attendanceList.value.filter(
        (attendance) =>
          attendance.date == date.value && attendance.classid == props.id
      );
    });

    onMounted(() => {
      fetchAttendanceData();
    });

    const checkTheData = () => {
      if (
        filteredAttendance.value.length > 0 &&
        filteredAttendance.value[0].students.length > 0
      ) {
        datax.value = true;
      } else {
        datax.value = false;
      }
    };

    watch(date, () => {
      checkTheData();
    });

    return {
      date,
      datax,
      attendanceList,
      filteredAttendance,
      fetchAttendanceData,
      checkTheData,
    };
  },
};
</script>

<style></style>
