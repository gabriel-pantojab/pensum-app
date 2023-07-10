import { Image, StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";
import UserIcon from "../icons/UserIcon";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Constants.statusBarHeight,
    width: "90%",
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "#ccc",
    borderRadius: 4,
  },

  userInfo: {
    flex: 1,
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
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            flexWrap: "wrap",
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            flexWrap: "wrap",
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
}
