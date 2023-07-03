import { Image, StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";
import UserIcon from "./icons/UserIcon";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: Constants.statusBarHeight,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "#ccc",
    borderRadius: 4,
  },
  userInfo: {
    marginLeft: 10,
    justifyContent: "center",
  },
});

export default function UserCard({ image, name, description = "" }) {
  return (
    <View style={styles.container}>
      {image != "" ? (
        <Image style={styles.image} source={{ uri: image }} />
      ) : (
        <UserIcon />
      )}
      <View style={styles.userInfo}>
        <Text>{name}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
}
