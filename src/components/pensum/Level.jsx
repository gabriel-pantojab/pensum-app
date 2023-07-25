import { useContext, useEffect, useState } from "react";
import { StudentContext } from "../../context/studentContext";
import { Link } from "react-router-native";
import { View, StyleSheet } from "react-native";
import TextStyle from "../TextStyle";

export default function Level({
  name,
  progress = 0,
  inProgress = false,
  index,
}) {
  const { levels } = useContext(StudentContext);
  const [approved, setApproved] = useState(0);
  const [subjectsInProgress, setSubjectsInProgress] = useState(0);
  const [pending, setPending] = useState(0);

  useEffect(() => {
    const subjs = levels[index].subjects;
    const appro = subjs.filter((s) => s.state === "Aprobada").length;
    const inProg = subjs.filter((s) => s.state === "Cursando").length;
    const pendg = subjs.filter((s) => s.state === "No Cursada").length;
    setApproved(appro);
    setSubjectsInProgress(inProg);
    setPending(pendg);
  }, []);

  return (
    <Link
      to={`/main/pensum/${name}`}
      underlayColor={"transparent"}
      style={{
        ...styles.level,
        borderColor: progress > 0 || inProgress ? "#2f9e44" : "#ccc",
      }}
    >
      <>
        <View
          style={{
            ...styles.progress,
            width: `${progress}%`,
            borderBottomRightRadius: progress === 100 ? 8 : 0,
            borderTopRightRadius: progress === 100 ? 8 : 0,
          }}
        ></View>
        <TextStyle
          style={{
            ...styles.titleLevel,
            color: progress > 0 || inProgress ? "black" : "#ccc",
          }}
        >
          Nivel {name}
        </TextStyle>
        <View
          style={{
            alignSelf: "flex-start",
            padding: 10,
          }}
        >
          <TextStyle
            style={{
              color: progress > 0 || inProgress ? "black" : "#ccc",
            }}
          >
            Aprobadas: {approved}
          </TextStyle>
          <TextStyle
            style={{
              color: progress > 0 || inProgress ? "black" : "#ccc",
            }}
          >
            Cursando: {subjectsInProgress}
          </TextStyle>
          <TextStyle
            style={{
              color: progress > 0 || inProgress ? "black" : "#ccc",
            }}
          >
            No Cursadas: {pending}
          </TextStyle>
        </View>
      </>
    </Link>
  );
}

const styles = StyleSheet.create({
  level: {
    position: "relative",
    borderWidth: 2,
    paddingVertical: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  progress: {
    alignSelf: "flex-start",
    position: "absolute",
    top: 0,
    bottom: 0,
    backgroundColor: "#b2f2bb",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  titleLevel: {
    fontSize: 18,
  },
});
