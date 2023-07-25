import { View, StyleSheet } from "react-native";
import TextStyle from "../../TextStyle";
import { theme } from "../../../theme";

export default function Subject({ subjects }) {
  const bg = subjects.map((s) => s.color);
  const styC = [
    styles.subject,
    { backgroundColor: bg[0] },
    subjects.length > 1 && styles.choque,
  ];
  const styT = [styles.subjectText, subjects.length > 1 && styles.choqueText];
  return (
    <View style={styC}>
      {subjects.map((s) => (
        <View key={s.subjectName}>
          <TextStyle style={styT}>{s.subjectName}</TextStyle>
          <TextStyle style={styT}>
            {s.classroom} G:{s.group}
          </TextStyle>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  subject: {
    position: "absolute",
    top: 1,
    left: 7,
    right: 0,
    bottom: 1,
    justifyContent: "center",
  },
  choque: {
    backgroundColor: theme.colors.white,
  },
  subjectText: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 5,
  },
  choqueText: {
    color: "red",
  },
});
