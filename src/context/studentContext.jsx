import { createContext, useEffect, useState } from "react";
import {
  getCourse,
  getCurrentSubjectsList,
  getStudent,
  getLevels,
  saveLevels,
  saveCourse,
  saveCurrentSubjectsList,
} from "../storage/storage";

const StudentContext = createContext();

function StudentProvider({ children }) {
  const [student, setStudent] = useState({
    notexist: true,
    name: "",
    description: "",
    avatar: "",
  });

  useEffect(() => {
    getStudent().then((student) => {
      if (student) setStudent(student);
    });
  }, []);

  const [course, setCourseContext] = useState({
    name: "",
    totalSubjects: 0,
    approvedSubjects: 0,
    pendingSubjects: 0,
    inProgressSubjects: 0,
  });

  const setCourse = async (newCourse) => {
    try {
      setCourseContext(newCourse);
      await saveCourse(newCourse);
    } catch (error) {
      console.log("Error Course", error);
    }
  };

  useEffect(() => {
    getCourse().then((course) => {
      if (course) setCourseContext(course);
    });
  }, []);

  const [currentSubjectsList, setCurrentSubjectsListContext] = useState([]);

  const setCurrentSubjectsList = async (newCurrentSubjectsList) => {
    try {
      setCurrentSubjectsListContext(newCurrentSubjectsList);
      await saveCurrentSubjectsList(newCurrentSubjectsList);
    } catch (error) {
      console.log("Error CurrentSubjectsList", error);
    }
  };

  useEffect(() => {
    getCurrentSubjectsList().then((currentSubjectsListStorage) => {
      if (currentSubjectsListStorage)
        setCurrentSubjectsListContext(currentSubjectsListStorage);
    });
  }, []);

  const [levels, setLevelsContext] = useState([]);

  const setLevels = async (newLevels) => {
    try {
      setLevelsContext(newLevels);
      await saveLevels(newLevels);
    } catch (error) {
      console.log("Error Levels", error);
    }
  };

  useEffect(() => {
    getLevels().then((levels) => {
      if (levels) setLevelsContext(levels);
    });
  }, []);

  const data = {
    student,
    course,
    currentSubjectsList,
    levels,
    setStudent,
    setCourse,
    setCurrentSubjectsList,
    setLevels,
  };
  return (
    <StudentContext.Provider value={data}>{children}</StudentContext.Provider>
  );
}

export { StudentContext };
export default StudentProvider;
