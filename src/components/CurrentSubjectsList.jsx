import { View, Text, StyleSheet, FlatList } from "react-native";
import SubjectInpProgress from "./SubjectInpProgress";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    position: "relative",
    borderRadius: 10,
    borderWidth: 2,
    paddingTop: 20,
    padding: 10,
    gap: 15,
    maxHeight: 300,
  },
  title: {
    position: "absolute",
    top: -18,
    left: 10,
    fontSize: 20,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  list: {
    gap: 20,
  },
});

export default function CurrentSubjectsList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cursando</Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={[
          { key: "1", name: "Matemática I", group: "1", teacher: "Perez" },
          { key: "2", name: "Matemática II", group: "2", teacher: "Perez" },
          { key: "3", name: "Matemática III", group: "3", teacher: "Perez" },
        ]}
        renderItem={({ item }) => (
          <SubjectInpProgress
            name={item.name}
            group={item.group}
            teacher={item.teacher}
          />
        )}
      />
    </View>
  );
}
