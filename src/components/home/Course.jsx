import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StudentContext } from "../../context/studentContext";
import { theme } from "../../theme";
import TextStyle from "../TextStyle";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccc",
    width: "90%",
    borderRadius: 10,
    position: "relative",
    paddingTop: 20,
    padding: 10,
    gap: 15,
  },
  title: {
    color: theme.colors.white,
    position: "absolute",
    top: -18,
    left: 10,
    fontSize: 20,
    backgroundColor: "#ccc",
    paddingHorizontal: 10,
    borderRadius: 5,
    fontFamily: theme.fonts.holidayBudapest,
  },
  infoSubjects: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    color: theme.colors.white,
  },
});

function ProgressCareer() {
  const { course } = useContext(StudentContext);
  const { totalSubjects, approvedSubjects } = course;
  const percent = (approvedSubjects * 100) / totalSubjects;
  const width = (percent * 96.5) / 100;
  const stylesProgress = StyleSheet.create({
    container: {
      width: "100%",
      borderWidth: 2,
      borderColor: theme.colors.white,
      borderRadius: 10,
      position: "relative",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ccc",
      marginTop: 10,
    },
    progress: {
      position: "absolute",
      width: `${width}%`,
      top: 10,
      bottom: 5,
      left: 5,
      backgroundColor: theme.colors.greenProgress,
      borderRadius: 10,
    },
    progressText: {
      fontWeight: "bold",
      fontSize: 18,
    },
    title: {
      position: "absolute",
      top: -18,
      left: -5,
      fontSize: 16,
      padding: 3,
      paddingHorizontal: 10,
      backgroundColor: "#ccc",
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
      color: theme.colors.white,
    },
  });
  return (
    <View style={stylesProgress.container}>
      <TextStyle style={stylesProgress.title}>Progreso</TextStyle>
      <View style={stylesProgress.progress} />
      <TextStyle style={stylesProgress.progressText}>
        {Math.round(percent)} %
      </TextStyle>
    </View>
  );
}

export default function Course() {
  const { course } = useContext(StudentContext);
  return (
    <View style={styles.container}>
      <TextStyle style={styles.title}>Carrera</TextStyle>
      <TextStyle
        style={{
          ...styles.text,
          fontSize: 20,
        }}
      >
        {course.name}
      </TextStyle>
      <TextStyle style={styles.text}>
        Total Materias: {course.totalSubjects}
      </TextStyle>
      <View style={styles.infoSubjects}>
        <TextStyle style={styles.text}>
          Aprobadas: {course.approvedSubjects}
        </TextStyle>
        <TextStyle style={styles.text}>
          Cursando: {course.inProgressSubjects}
        </TextStyle>
        <TextStyle style={styles.text}>
          Restantes: {course.pendingSubjects}
        </TextStyle>
      </View>
      <ProgressCareer />
    </View>
  );
}
