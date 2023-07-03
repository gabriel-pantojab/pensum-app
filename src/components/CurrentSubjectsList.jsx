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
    maxHeight: 350,
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

export default function CurrentSubjectsList({ subjects }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cursando</Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={subjects}
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
