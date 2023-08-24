import { View, StyleSheet, TouchableOpacity } from "react-native";
import TextStyle from "../TextStyle";
import StatesSubject from "./StatesSubject";
import Select from "../selectComponent/Select";
import Option from "../selectComponent/Option";
import { useContext, useState } from "react";
import CheckIcon from "../icons/CheckIcon";
import { StudentContext } from "../../context/studentContext";

export default function HeaderLevel({
  approved,
  inProgress,
  pending,
  levelName,
}) {
  const { levels, setLevels } = useContext(StudentContext);
  const [checkAll, setCheckAll] = useState(false);
  const [state, setState] = useState("Aprobada");

  const indexLevel = levels.findIndex((l) => l.name === levelName);

  const checkAllSubjects = () => {
    const temp = [...levels];
    const subjects = temp[indexLevel].subjects;
    subjects.forEach((s) => {
      s.state = state;
    });

    temp[indexLevel].subjects = subjects;
    const totalSubjects = subjects.length;
    const approvedSubjects = subjects.filter(
      (subject) => subject.state === "Aprobada"
    ).length;
    const inProgressSubjects = subjects.filter(
      (subject) => subject.state === "Cursando"
    ).length;

    temp[indexLevel].progress = (approvedSubjects / totalSubjects) * 100;
    temp[indexLevel].inProgress = false;
    if (temp[indexLevel].progress === 0) {
      temp[indexLevel].progress = 0;
      temp[indexLevel].inProgress = inProgressSubjects > 0;
    }
    setLevels(temp);
  };

  return (
    <>
      <View style={styles.info}>
        <TextStyle style={styles.level}>Nivel {levelName}</TextStyle>
        <StatesSubject />
      </View>
      <View style={styles.info}>
        <TextStyle>Aprobadas: {approved}</TextStyle>
        <TextStyle>Cursando: {inProgress}</TextStyle>
        <TextStyle>No Cursadas: {pending}</TextStyle>
      </View>
      <View style={{ ...styles.info, alignItems: "flex-start" }}>
        <TouchableOpacity
          style={styles.checkBoxContainer}
          onPress={() => {
            setCheckAll(!checkAll);
          }}
        >
          <View style={styles.checkBox}>
            {checkAll && <CheckIcon color={"#1493ff"} width={13} height={13} />}
          </View>
          <TextStyle style={styles.textCheck}>Marcar Todas</TextStyle>
        </TouchableOpacity>

        <Select
          defaultValue="1"
          style={{
            width: 110,
            height: 25,
            padding: 3,
          }}
          textSize={13}
          styleOptions={{
            width: 110,
            minWidth: 110,
            height: 100,
            padding: 3,
          }}
          enable={checkAll}
        >
          <Option
            value="1"
            name={"Aprobada"}
            onChange={(value) => {
              setState(value.name);
            }}
          >
            <TextStyle style={styles.textCheck}>Aprobada</TextStyle>
          </Option>
          <Option
            value="2"
            name={"Cursando"}
            onChange={(value) => {
              setState(value.name);
            }}
          >
            <TextStyle style={styles.textCheck}>Cursando</TextStyle>
          </Option>
          <Option
            value="3"
            name={"No Cursada"}
            onChange={(value) => {
              setState(value.name);
            }}
          >
            <TextStyle style={styles.textCheck}>No Cursada</TextStyle>
          </Option>
        </Select>

        <TouchableOpacity
          style={{ ...styles.checkButton, opacity: checkAll ? 1 : 0.5 }}
          onPress={() => {
            if (!checkAll) return;
            checkAllSubjects();
          }}
        >
          <TextStyle style={styles.textCheck}>Marcar</TextStyle>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  level: {
    fontSize: 18,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  textCheck: {
    fontSize: 13,
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkBox: {
    width: 15,
    height: 15,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#000",
    marginRight: 5,
  },
  checkButton: {
    backgroundColor: "#1493ff",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
