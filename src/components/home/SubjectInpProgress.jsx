import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: "#fff842",
    backgroundColor: "#ffec99",
  },
  subject: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    padding: 10,
  },
});

export default function SubjectInpProgress({
  name,
  group = "",
  teacher = "",
  level = "",
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.subject}>{name}</Text>
      <Text>Nivel: {level}</Text>
      {teacher !== "" && <Text>Grupo: {group}</Text>}
      {group !== "" && <Text>Docente: {teacher}</Text>}
    </View>
  );
}
