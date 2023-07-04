import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StudentContext } from "../context/studentContext";

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
    color: "white",
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
    color: "white",
  },
});

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
    </View>
  );
}
