import { useContext } from "react";
import { StudentContext } from "../../context/studentContext";
import { ScrollView, View, StyleSheet } from "react-native";
import Course from "../../components/home/Course";
import CurrentSubjectsList from "../../components/home/CurrentSubjectsList";
import { theme } from "../../theme";
import Logout from "../../components/home/Logout";

export default function Home() {
  const { currentSubjectsList } = useContext(StudentContext);
  return (
    <View style={styles.container}>
      <Logout />
      <ScrollView contentContainerStyle={styles.contentContainer}>
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
    paddingTop: 20,
    gap: 50,
  },
});
