import { StyleSheet } from "react-native";
import { View } from "react-native";
import UserCard from "./UserCard";
import Course from "./Course";
import CurrentSubjectsList from "./CurrentSubjectsList";
import { useContext } from "react";
import { StudentContext } from "../context/studentContext";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fefefe",
    flex: 1,
    alignItems: "center",
    gap: 50,
  },
});
export default function Home() {
  const { student, currentSubjectsList } = useContext(StudentContext);
  return (
    <View style={styles.container}>
      <UserCard
        image={student.avatar}
        name={student.name}
        description={student.description}
      />
      <Course />
      <CurrentSubjectsList subjects={currentSubjectsList} />
    </View>
  );
}
