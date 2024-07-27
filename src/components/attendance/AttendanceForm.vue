<template>
  <p>Attendance Form</p>
  <form @submit.prevent.stop="submitHandler">
    <input @input="createAttendance" type="date" v-model="date" />
    <AttendanceList
      :studentData="attendanceData"
      @toggleStatus="handletoggleStatus"
    />
    <button type="sumbit">Submit</button>
  </form>
</template>

<script>
import AttendanceList from "./AttendanceList.vue";
import { computed, ref } from "vue";
export default {
  emits: ["submitHandler"],
  components: { AttendanceList },
  props: ["studentData", "id"],
  setup(props, { emit }) {
    const showAttendance = ref(false);
    const date = ref("");
    const attendanceData = ref({});

    const createAttendance = () => {
      attendanceData.value = {
        date: date.value,
        classid: props.id,
        students: props.studentData.map((student) => ({
          firstname: student.firstname,
          lastname: student.lastname,
          id: student.id,
          status: false,
        })),
      };
    };

    const handletoggleStatus = (id) => {
      const studentIndex = attendanceData.value.students.findIndex(
        (student) => student.id == id
      );
      console.log("Student Index", studentIndex);
      attendanceData.value.students[studentIndex].status =
        !attendanceData.value.students[studentIndex].status;
    };

    const checkDateExist = async (date, classid) => {
      try {
        const response = await fetch("http://localhost:4000/attendance");
        const data = await response.json();

        const isExist = data.some(
          (record) =>
            new Date(record.date).toDateString() ===
              new Date(date).toDateString() && record.classid == classid
        );

        return isExist;
      } catch (error) {
        console.error("Error fetching attendance data:", error);
        return false; // or handle the error as needed
      }
    };

    const submitHandler = () => {
        checkDateExist(attendanceData.value.date, attendanceData.value.classid).then(isExist => {
            if(isExist){
                console.log("Exist")
            }
            else{
                console.log("Not Exist")
                emit("submitHandler", attendanceData.value);
            }
        })
      
    };

    return {
      date,
      showAttendance,
      createAttendance,
      attendanceData,
      handletoggleStatus,
      submitHandler,
    };
  },
};
</script>

<style scoped>
.students {
  cursor: pointer;
  width: fit-content;
  border: 1px solid red;
}
</style>
