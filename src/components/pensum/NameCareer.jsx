import { View, StyleSheet } from "react-native";
import TextStyle from "../TextStyle";
import { Link } from "react-router-native";
import { useContext } from "react";
import { StudentContext } from "../../context/studentContext";
import { theme } from "../../theme";
import BackIcon from "../icons/BackIcon";

export default function NameCareer() {
  const { course } = useContext(StudentContext);
  return (
    <View style={styles.container}>
      <TextStyle style={styles.title}>{course.name}</TextStyle>
      <Link
        underlayColor={"transparent"}
        style={{
          alignSelf: "flex-end",
        }}
        to="/main/pensum"
      >
        <BackIcon />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: theme.colors.primary,
  },
});
