import { View, ActivityIndicator, StyleSheet } from "react-native";

const Loading = ({ large = "large" }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={large} color="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loading;
