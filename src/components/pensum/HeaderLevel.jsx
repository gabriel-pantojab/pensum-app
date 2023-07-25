import { View, StyleSheet } from "react-native";
import TextStyle from "../TextStyle";
import StatesSubject from "./StatesSubject";

export default function HeaderLevel({
  approved,
  inProgress,
  pending,
  levelName,
}) {
  return (
    <>
      <View style={styles.info}>
        <TextStyle style={styles.level}>Nivel {levelName}</TextStyle>
        <StatesSubject />
      </View>
      <View style={styles.info}>
        <TextStyle>Aprobadas: {approved}</TextStyle>
        <TextStyle>Cursando: {inProgress}</TextStyle>
        <TextStyle>No Cursadas: {pending}</TextStyle>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  level: {
    fontSize: 18,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
});
