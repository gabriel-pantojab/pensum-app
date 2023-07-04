import { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import MenuIcon from "./icons/MenuIcon";
import CloseIcon from "./icons/CloseIcon";
import { StudentContext } from "../context/studentContext";
import { getCourse } from "../storage/storage";

function RadioButton({ initValue, values, action }) {
  const [currentValue, setCurrentValue] = useState(initValue);
  return values.map((value) => (
    <Pressable
      key={value}
      onPress={() => {
        setCurrentValue(value);
        action(value);
      }}
    >
      <View style={styles.radioButton}>
        <View
          style={{
            ...styles.radioButtonCircle,
            backgroundColor: value === currentValue ? "blue" : "white",
          }}
        />
        <Text>{value}</Text>
      </View>
    </Pressable>
  ));
}

function ModalChangeState({ modal, setModal, name, stateSubject, action }) {
  return (
    <Modal
      visible={modal}
      animationType="slide"
      transparent
      onRequestClose={() => setModal(false)}
    >
      <View style={styles.containerModal}>
        <View style={styles.modal}>
          <Pressable
            onPress={() => setModal(false)}
            style={{
              height: 20,
              alignSelf: "flex-end",
            }}
          >
            <CloseIcon />
          </Pressable>
          <View
            style={{
              justifyContent: "center",
              padding: 20,
              gap: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "center",
              }}
            >
              {name}
            </Text>
            <RadioButton
              values={["No Cursada", "Cursando", "Aprobada"]}
              action={(value) => {
                action(value);
              }}
              initValue={stateSubject}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default function SubjectInLevel({ name, state, level, id }) {
  const { levels, setLevels, setCourse, setCurrentSubjectsList } =
    useContext(StudentContext);
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
    const course = await getCourse();
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
    if (value === "Cursando") {
      setCurrentSubjectsList((prev) => {
        return [
          ...prev,
          {
            name,
            group: "",
            teacher: "",
            level,
          },
        ];
      });
    } else {
      setCurrentSubjectsList((prev) => {
        return prev.filter((subject) => subject.name != name);
      });
    }
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
      <Text
        style={{
          ...styles.title,
          color: stateSubject === "No Cursada" ? "#ccc" : "black",
        }}
      >
        {name}
      </Text>

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
  },
  menu: {
    height: 20,
  },
  containerModal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#f9faf5",
    gap: 10,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  noCursada: {
    borderColor: "#ccc",
    // backgroundColor: "#ccc",
  },
  aprobada: {
    backgroundColor: "#b2f2bb",
    borderColor: "#2f9e44",
  },
  cursando: {
    borderColor: "#fff842",
    backgroundColor: "#ffec99",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  radioButtonCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
});
