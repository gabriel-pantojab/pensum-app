import { useContext } from "react";
import { StudentContext } from "../../context/studentContext";
import { ScrollView, View, StyleSheet } from "react-native";
import UserCard from "../../components/home/UserCard";
import Course from "../../components/home/Course";
import CurrentSubjectsList from "../../components/home/CurrentSubjectsList";
import { theme } from "../../theme";
import Logout from "../../components/home/Logout";

export default function Home() {
  const { student, currentSubjectsList } = useContext(StudentContext);
  return (
    <View style={styles.container}>
      <Logout />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <UserCard
          image={student.avatar}
          name={student.name}
          description={student.description}
        />
        <Course />
        <CurrentSubjectsList subjects={currentSubjectsList} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  contentContainer: {
    alignItems: "center",
    gap: 50,
  },
});
