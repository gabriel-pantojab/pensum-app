import { View, Text, StyleSheet } from "react-native";
import { theme } from "../theme";
import Logo from "./Logo";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    padding: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  appName: {
    color: theme.colors.white,
    fontSize: 30,
    fontFamily: theme.fonts.goodDog,
    marginRight: 10,
  },
  contentAppName: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default function Header({ children }) {
  const styHeader = [styles.container];
  return (
    <View style={styHeader}>
      <View style={styles.contentAppName}>
        {children}
        <Text style={styles.appName}>pensum app</Text>
      </View>
      <Logo
        widthBG={80}
        heightBG={51}
        widthBirrete={30}
        heightBirrete={30}
        topBirrete={17}
        leftBirrete={24}
      />
    </View>
  );
}
