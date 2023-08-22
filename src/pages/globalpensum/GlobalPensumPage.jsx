import { View, StyleSheet } from "react-native";
import TextStyle from "../../components/TextStyle";
import { useContext } from "react";
import { StudentContext } from "../../context/studentContext";

export default function GlobalPensumPage() {
  const { course } = useContext(StudentContext);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextStyle>{course.name}</TextStyle>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
});
