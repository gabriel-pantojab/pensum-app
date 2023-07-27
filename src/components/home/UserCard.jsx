import { Image, StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";
import UserIcon from "../icons/UserIcon";
import { theme } from "../../theme";
import TextStyle from "../TextStyle";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "#ccc",
    borderRadius: 4,
  },

  userInfo: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  textInfo: {
    flexWrap: "wrap",
    width: "100%",
    color: theme.colors.white,
  },
});

export default function UserCard({ image, name, description = "" }) {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <TextStyle
          style={{
            ...styles.textInfo,
            fontSize: 20,
          }}
        >
          Estudiante:
        </TextStyle>
        <Text
          style={{
            ...styles.textInfo,
            paddingLeft: 10,
            fontSize: 16,
          }}
        >
          {name}
        </Text>
      </View>
    </View>
  );
}
