import { View, StyleSheet } from "react-native";
import TextStyle from "../TextStyle";
import { theme } from "../../theme";

export function Subject({ subject, choque }) {
  const styleSubject = [
    !choque
      ? { ...styles.subject, backgroundColor: subject.color }
      : styles.choque,
  ];
  return (
    <View style={styleSubject}>
      <TextStyle style={[styles.infoSubject, choque && { color: "red" }]}>
        {subject.auxi && "* "}
        {subject.subjectName}
      </TextStyle>
      <TextStyle style={[styles.infoSubject, choque && { color: "red" }]}>
        {subject.classroom} G:{subject.group}
      </TextStyle>
    </View>
  );
}

const styles = StyleSheet.create({
  subject: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    width: 100,
  },
  choque: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.white,
    padding: 3,
  },
  infoSubject: {
    fontSize: 9,
    textAlign: "center",
  },
});
