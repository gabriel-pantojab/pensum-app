import { useCallback, useContext, useEffect, useState } from "react";
import { StudentContext } from "../context/studentContext";

export default function useUpdateSubjectState({ name, state, level, id }) {
  const {
    levels,
    setLevels,
    course,
    setCourse,
    currentSubjectsList,
    setCurrentSubjectsList,
  } = useContext(StudentContext);
  const [stateSubject, setStateSubject] = useState(state);

  useEffect(() => {
    setStateSubject(state);
  }, [state]);

  const updateCourse = useCallback(async (antValue, value) => {
    if (antValue === value) return;
    if (antValue === "No Cursada") {
      if (value === "Aprobada") {
        course.approvedSubjects += 1;
      } else if (value === "Cursando") {
        course.inProgressSubjects += 1;
      }
      course.pendingSubjects -= 1;
    } else if (antValue === "Cursando") {
      if (value === "Aprobada") {
        course.approvedSubjects += 1;
      } else if (value === "No Cursada") {
        course.pendingSubjects += 1;
      }
      course.inProgressSubjects -= 1;
    } else {
      if (value === "No Cursada") {
        course.pendingSubjects += 1;
      } else if (value === "Cursando") {
        course.inProgressSubjects += 1;
      }
      course.approvedSubjects -= 1;
    }
    setCourse(course);
  }, []);

  const updateCurrentSubjectsList = useCallback(async (value) => {
    let newCurrentSubjectsList = [];
    if (value === "Cursando") {
      newCurrentSubjectsList = [
        ...currentSubjectsList,
        {
          name,
          group: "",
          teacher: "",
          level,
        },
      ];
    } else {
      newCurrentSubjectsList = currentSubjectsList.filter(
        (subject) => subject.name != name
      );
    }
    setCurrentSubjectsList(newCurrentSubjectsList);
  }, []);

  const handleChangeState = useCallback(async (value) => {
    const temp = [...levels];
    const index = temp.indexOf(temp.find((nivel) => nivel.name === level));
    const currentLevel = temp[index];
    const currentSubject = currentLevel.subjects.find(
      (subject) => subject.sis === id
    );
    const antValue = currentSubject.state;
    if (antValue === value) return;
    currentSubject.state = value;
    const totalSubjects = currentLevel.subjects.length;
    const approvedSubjects = currentLevel.subjects.filter(
      (subject) => subject.state === "Aprobada"
    ).length;
    const inProgressSubjects = currentLevel.subjects.filter(
      (subject) => subject.state === "Cursando"
    ).length;

    currentLevel.progress = (approvedSubjects / totalSubjects) * 100;
    currentLevel.inProgress = false;
    if (currentLevel.progress === 0) {
      currentLevel.progress = 0;
      currentLevel.inProgress = inProgressSubjects > 0;
    }
    temp[index] = currentLevel;
    setLevels(temp);
    setStateSubject(value);
    await updateCourse(antValue, value);
    await updateCurrentSubjectsList(value);
  }, []);
  return { handleChangeState, stateSubject };
}
