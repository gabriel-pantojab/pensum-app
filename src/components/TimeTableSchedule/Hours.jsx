import { View, StyleSheet } from "react-native";
import TextStyle from "../TextStyle";
import { Hour } from "./Hour";

export function Hours({ hours }) {
  if (hours.length === 0) return;

  return (
    <View>
      <TextStyle style={styles.hourName}>hora</TextStyle>
      <View style={styles.hoursContainer}>
        {hours.map((hr) => (
          <Hour key={hr} hr={hr} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hourName: {
    fontSize: 16,
    textAlign: "center",
    padding: 5,
  },
  hoursContainer: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: "#999",
  },
});
