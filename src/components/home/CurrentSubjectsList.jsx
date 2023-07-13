import { View, Text, StyleSheet } from "react-native";
import SubjectInpProgress from "./SubjectInpProgress";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    position: "relative",
    borderRadius: 10,
    borderWidth: 2,
    paddingTop: 20,
    padding: 10,
    marginBottom: 20,
  },
  title: {
    position: "absolute",
    top: -18,
    left: 10,
    fontSize: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  list: {
    gap: 20,
  },
});

export default function CurrentSubjectsList({ subjects }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cursando</Text>
      {subjects.length > 0 ? (
        <View style={styles.list}>
          {subjects.map((item) => (
            <SubjectInpProgress
              name={item.name}
              group={item.group}
              teacher={item.teacher}
              level={item.level}
              key={item.id}
            />
          ))}
        </View>
      ) : (
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
            color: "#ccc",
            margin: 20,
          }}
        >
          No esta cursando ni una materia
        </Text>
      )}
    </View>
  );
}
