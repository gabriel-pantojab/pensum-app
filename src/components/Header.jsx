import { View, Text, StyleSheet } from "react-native";
import { theme } from "../theme";
import Logo from "./Logo";
import { useLocation } from "react-router-native";

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

function getNamePage({ pathName }) {
  if (pathName.includes("pensum")) {
    return "pensum";
  }
  switch (pathName) {
    case "/main":
      return "pensum app";
    case "/main/clases-hoy":
      return "clases hoy";
    case "/main/horario":
      return "horario";
    case "/main/express":
      return "express";
    default:
      return "pensum app";
  }
}

export default function Header({ children }) {
  const location = useLocation();
  const name = getNamePage({ pathName: location.pathname });
  const styHeader = [styles.container];
  return (
    <View style={styHeader}>
      <View style={styles.contentAppName}>
        {children}
        <Text style={styles.appName}>{name}</Text>
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
