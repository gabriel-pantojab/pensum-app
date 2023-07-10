import { StyleSheet } from "react-native";
import { View } from "react-native";
import UserCard from "./UserCard";
import Course from "./Course";
import CurrentSubjectsList from "./CurrentSubjectsList";
import { useContext } from "react";
import { StudentContext } from "../../context/studentContext";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
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
