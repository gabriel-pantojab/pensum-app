import { View, StyleSheet } from "react-native";
import TextStyle from "../../TextStyle";
import { theme } from "../../../theme";

export default function SubjectGP({ name, state }) {
  const { backgroundColor, borderColor } = theme.statesSubject[state];
  return (
    <View
      style={{
        ...styles.subject,
        backgroundColor,
        borderColor,
      }}
    >
      <TextStyle style={styles.nameSubject}>{name}</TextStyle>
    </View>
  );
}

const styles = StyleSheet.create({
  subject: {
    width: 100,
    minHeight: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    padding: 3,
  },
  nameSubject: {
    fontSize: 12,
    textAlign: "center",
  },
});
