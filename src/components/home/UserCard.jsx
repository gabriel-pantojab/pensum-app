import { Image, StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";
import UserIcon from "../icons/UserIcon";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
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
    alignItems: "center",
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 10,
  },
  textInfo: {
    flexWrap: "wrap",
    width: "100%",
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
            ...styles.textInfo,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {name}
        </Text>
        <Text style={styles.textInfo}>{description}</Text>
      </View>
    </View>
  );
}
