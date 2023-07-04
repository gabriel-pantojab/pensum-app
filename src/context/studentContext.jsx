import { createContext, useEffect, useState } from "react";
import {
  getCourse,
  getCurrentSubjectsList,
  getStudent,
  getLevels,
  saveLevels,
  saveCourse,
} from "../storage/storage";

const StudentContext = createContext();

function StudentProvider({ children }) {
  const [student, setStudent] = useState({
    name: "",
    description: "",
    avatar: "",
  });

  useEffect(() => {
    getStudent().then((student) => {
      setStudent(student);
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
    setCourseContext(newCourse);
    await saveCourse(newCourse);
  };

  useEffect(() => {
    getCourse().then((course) => {
      setCourse(course);
    });
  }, []);

  const [currentSubjectsList, setCurrentSubjectsListContext] = useState([]);

  const setCurrentSubjectsList = async (newCurrentSubjectsList) => {
    setCurrentSubjectsListContext(newCurrentSubjectsList);
    await getCurrentSubjectsList(newCurrentSubjectsList);
  };

  useEffect(() => {
    getCurrentSubjectsList().then((currentSubjectsList) => {
      setCurrentSubjectsList(currentSubjectsList);
    });
  }, []);

  const [levels, setLevelsContext] = useState([]);

  const setLevels = async (newLevels) => {
    setLevelsContext(newLevels);
    await saveLevels(newLevels);
  };

  useEffect(() => {
    getLevels().then((levels) => {
      setLevels(levels);
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
