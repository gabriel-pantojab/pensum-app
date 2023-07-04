import AsyncStorage from "@react-native-async-storage/async-storage";

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

async function saveStudent({ name, description, avatar }) {
  let student = await getStudent();
  console.log(student);

  if (student === null) {
    student = {
      name,
      description,
      avatar,
    };
  } else {
    student.name = name || student.name;
    student.description = description || student.description;
    student.avatar = avatar || student.avatar;
  }

  try {
    console.log(student);
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
  totalSubjects,
  approvedSubjects,
  pendingSubjects,
  inProgressSubjects,
}) {
  let course = await getCourse();

  if (course === null) {
    course = {
      name,
      totalSubjects,
      approvedSubjects,
      pendingSubjects,
      inProgressSubjects,
    };
  } else {
    course.name = name != undefined ? name : course.name;
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

// saveCourse({
//   name: "Licenciatura en Ing. Informática",
//   totalSubjects: 48,
//   approvedSubjects: 0,
//   pendingSubjects: 48,
//   inProgressSubjects: 0,
// });

export {
  saveStudent,
  getStudent,
  removeStudent,
  saveCourse,
  getCourse,
  removeCourse,
  saveCurrentSubjectsList,
  getCurrentSubjectsList,
  saveLevels,
  getLevels,
};
