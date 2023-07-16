import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StudentContext } from "../../context/studentContext";
import { theme } from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6e77ee",
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
    backgroundColor: "#6e77ee",
    paddingHorizontal: 10,
    borderRadius: 5,
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
      backgroundColor: "#6e77ee",
      marginTop: 10,
    },
    progress: {
      position: "absolute",
      width: `${width}%`,
      top: 10,
      bottom: 5,
      left: 5,
      backgroundColor: "#b2f2bb",
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
      backgroundColor: "#6e77ee",
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
      color: theme.colors.white,
    },
  });
  return (
    <View style={stylesProgress.container}>
      <Text style={stylesProgress.title}>Progreso</Text>
      <View style={stylesProgress.progress} />
      <Text style={stylesProgress.progressText}>{Math.round(percent)} %</Text>
    </View>
  );
}

export default function Course() {
  const { course } = useContext(StudentContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrera</Text>
      <Text
        style={{
          ...styles.text,
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        {course.name}
      </Text>
      <Text style={styles.text}>Total Materias: {course.totalSubjects}</Text>
      <View style={styles.infoSubjects}>
        <Text style={styles.text}>Aprobadas: {course.approvedSubjects}</Text>
        <Text style={styles.text}>Cursando: {course.inProgressSubjects}</Text>
        <Text style={styles.text}>Restantes: {course.pendingSubjects}</Text>
      </View>
      <ProgressCareer />
    </View>
  );
}
