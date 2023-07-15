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
    fontSize: 17,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    padding: 10,
    textAlign: "center",
  },
  infoSubject: {
    flexDirection: "row",
    gap: 5,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
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
      {teacher !== "" && (
        <View style={styles.infoSubject}>
          <Text style={styles.subtitle}>Docente:</Text>
          <Text>{teacher}</Text>
        </View>
      )}
      {group !== "" && (
        <View style={styles.infoSubject}>
          <Text style={styles.subtitle}>Grupo:</Text>
          <Text>{group}</Text>
        </View>
      )}
      {level !== "" && (
        <View style={styles.infoSubject}>
          <Text style={styles.subtitle}>Nivel:</Text>
          <Text>{level}</Text>
        </View>
      )}
    </View>
  );
}
