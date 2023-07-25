import { View, StyleSheet } from "react-native";
import TextStyle from "../TextStyle";
import { theme } from "../../theme";
import { statesSubject } from "../../utils/utils";

export default function StateSubject({ state }) {
  const styStateCircle = [styles.circle, theme.statesSubject[state]];
  return (
    <View style={styles.state}>
      <View style={styStateCircle}></View>
      <TextStyle>{state}</TextStyle>
    </View>
  );
}

const styles = StyleSheet.create({
  state: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
});
