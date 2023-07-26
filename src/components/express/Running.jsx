import { View, StyleSheet } from "react-native";
import CheckIcon from "../icons/CheckIcon";
import TextStyle from "../TextStyle";
import Loading from "../Loading";

export default function Running({ running, finish, message }) {
  if (!running && !finish) return;
  if (running) return <Loading />;
  if (finish)
    return (
      <View style={styles.container}>
        <CheckIcon width={10} height={10} color="green" />
        <TextStyle style={styles.text}>{message}</TextStyle>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    backgroundColor: "#f9faf5",
    padding: 3,
    borderRadius: 5,
  },
  text: {
    color: "green",
    fontSize: 10,
  },
});
