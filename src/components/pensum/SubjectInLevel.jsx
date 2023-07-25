import { useContext, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MenuIcon from "../icons/MenuIcon";
import { StudentContext } from "../../context/studentContext";
import { theme } from "../../theme";
import TextStyle from "../TextStyle";
import ModalChangeState from "./ModalChangeState";

export default function SubjectInLevel({ name, state, level, id }) {
  const {
    levels,
    setLevels,
    setCourse,
    setCurrentSubjectsList,
    course,
    currentSubjectsList,
  } = useContext(StudentContext);
  const [modal, setModal] = useState(false);
  const [stateSubject, setStateSubject] = useState(state);
  const stylesSubject = [
    styles.container,
    stateSubject === "No Cursada" && styles.noCursada,
    stateSubject === "Aprobada" && styles.aprobada,
    stateSubject === "Cursando" && styles.cursando,
  ];

  const updateCourse = async (antValue, value) => {
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
  };

  const updateCurrentSubjectsList = async (value) => {
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
  };

  const handleChangeState = async (value) => {
    const temp = [...levels];
    const index = temp.indexOf(temp.find((nivel) => nivel.name === level));
    const currentLevel = temp[index];
    const currentSubject = currentLevel.subjects.find(
      (subject) => subject.id === id
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
  };

  return (
    <View style={stylesSubject}>
      <TouchableOpacity style={styles.menu} onPress={() => setModal(true)}>
        <MenuIcon />
      </TouchableOpacity>
      <TextStyle
        style={{
          ...styles.title,
          color: stateSubject === "No Cursada" ? "#ccc" : "black",
        }}
      >
        {name}
      </TextStyle>

      <ModalChangeState
        modal={modal}
        setModal={setModal}
        name={name}
        stateSubject={stateSubject}
        action={handleChangeState}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    height: 100,
    justifyContent: "center",
    backgroundColor: theme.colors.white,
  },
  menu: {
    height: 20,
  },
  title: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
  },
  noCursada: {
    borderColor: theme.statesSubject["No Cursada"].borderColor,
  },
  aprobada: {
    backgroundColor: theme.statesSubject["Aprobada"].backgroundColor,
    borderColor: theme.statesSubject["Aprobada"].borderColor,
  },
  cursando: {
    borderColor: theme.statesSubject["Cursando"].borderColor,
    backgroundColor: theme.statesSubject["Cursando"].backgroundColor,
  },
});
