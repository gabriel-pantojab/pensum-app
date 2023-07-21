import AsyncStorage from "@react-native-async-storage/async-storage";
import { logout, updateUser } from "../../firebaseconfig";

async function getStudent() {
  try {
    const student = await AsyncStorage.getItem("student");
    if (student !== null) {
      return JSON.parse(student);
    }
    return null;
  } catch (error) {
    console.log(error);
  }
}

async function saveStudent({ name, description, avatar, uid, nickname }) {
  let student = await getStudent();

  if (student === null) {
    student = {
      name,
      description,
      avatar,
      uid,
      nickname,
    };
  } else {
    student.name = name || student.name;
    student.description = description || student.description;
    student.avatar = avatar || student.avatar;
  }

  try {
    const r = await AsyncStorage.setItem("student", JSON.stringify(student));
  } catch (error) {
    console.log(error);
  }
}

async function removeStudent() {
  try {
    await AsyncStorage.removeItem("student");
  } catch (error) {
    console.log(error);
  }
}

async function getCourse() {
  try {
    const course = await AsyncStorage.getItem("course");
    if (course !== null) {
      return JSON.parse(course);
    }
    return null;
  } catch (error) {
    console.log(error);
  }
}

async function saveCourse({
  name,
  sis,
  totalSubjects,
  approvedSubjects,
  pendingSubjects,
  inProgressSubjects,
}) {
  let course = await getCourse();

  if (course === null) {
    course = {
      name,
      sis,
      totalSubjects,
      approvedSubjects,
      pendingSubjects,
      inProgressSubjects,
    };
  } else {
    course.name = name != undefined ? name : course.name;
    course.sis = sis != undefined ? sis : course.sis;
    course.totalSubjects =
      totalSubjects != undefined ? totalSubjects : course.totalSubjects;
    course.approvedSubjects =
      approvedSubjects != undefined
        ? approvedSubjects
        : course.approvedSubjects;
    course.pendingSubjects =
      pendingSubjects != undefined ? pendingSubjects : course.pendingSubjects;
    course.inProgressSubjects =
      inProgressSubjects != undefined
        ? inProgressSubjects
        : course.inProgressSubjects;
  }

  try {
    await AsyncStorage.setItem("course", JSON.stringify(course));
  } catch (error) {
    console.log(error);
  }
}

async function removeCourse() {
  try {
    await AsyncStorage.removeItem("course");
  } catch (error) {
    console.log(error);
  }
}

async function getCurrentSubjectsList() {
  try {
    const currentSubjectsList = await AsyncStorage.getItem(
      "currentSubjectsList"
    );
    if (currentSubjectsList !== null) {
      return JSON.parse(currentSubjectsList);
    }
    return [];
  } catch (error) {
    console.log(error);
  }
}

async function saveCurrentSubjectsList(currentSubjectsList) {
  try {
    await AsyncStorage.setItem(
      "currentSubjectsList",
      JSON.stringify(currentSubjectsList)
    );
  } catch (error) {
    console.log(error);
  }
}

async function removeCurrentSubjectsList() {
  try {
    await AsyncStorage.removeItem("currentSubjectsList");
  } catch (error) {
    console.log(error);
  }
}

async function getLevels() {
  try {
    const levels = await AsyncStorage.getItem("levels");
    if (levels !== null) {
      return JSON.parse(levels);
    }
    return [];
  } catch (error) {
    console.log(error);
  }
}

async function saveLevels(levels) {
  try {
    await AsyncStorage.setItem("levels", JSON.stringify(levels));
  } catch (error) {
    console.log(error);
  }
}

async function removeLevels() {
  try {
    await AsyncStorage.removeItem("levels");
  } catch (error) {
    console.log(error);
  }
}

async function getSchedule() {
  try {
    const schedule = await AsyncStorage.getItem("schedule");
    if (schedule !== null) {
      return JSON.parse(schedule);
    }
    return null;
  } catch (error) {
    console.log(error);
  }
}

async function saveSchedule(schedule) {
  try {
    await AsyncStorage.setItem("schedule", JSON.stringify(schedule));
  } catch (error) {
    console.log(error);
  }
}

async function removeSchedule() {
  try {
    await AsyncStorage.removeItem("schedule");
  } catch (error) {
    console.log(error);
  }
}

// saveCourse({
//   name: "Licenciatura en Ing. Informática",
//   totalSubjects: 48,
//   approvedSubjects: 0,
//   pendingSubjects: 48,
//   inProgressSubjects: 0,
// });

export async function logoutApp({ uid }) {
  const student = await getStudent();
  const course = await getCourse();
  let currentSubjectsList = await getCurrentSubjectsList();
  const levels = await getLevels();
  let schedule = await getSchedule();
  await removeStudent();
  await removeCourse();
  await removeCurrentSubjectsList();
  await removeLevels();
  await removeSchedule();

  if (!schedule) schedule = {};
  if (!currentSubjectsList) currentSubjectsList = [];

  const userdata = {
    user: {
      ...student,
    },
    course,
    currentSubjectsList,
    levels,
    schedule,
  };

  await updateUser({
    uid,
    userdata,
  });

  await logout();
}

export {
  saveStudent,
  getStudent,
  removeStudent,
  saveCourse,
  getCourse,
  removeCourse,
  saveCurrentSubjectsList,
  getCurrentSubjectsList,
  removeCurrentSubjectsList,
  saveLevels,
  getLevels,
  removeLevels,
  saveSchedule,
  getSchedule,
  removeSchedule,
};
