import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function Schedule() {
  return (
    <View style={styles.container}>
      <Text>Horario</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
