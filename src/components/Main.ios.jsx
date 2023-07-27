import { View, StyleSheet } from "react-native";
import { useLocation } from "react-router-native";
import NavBar from "./NavBar";
import { StatusBar } from "expo-status-bar";
import { useDeviceOrientation } from "@react-native-community/hooks";
import Constants from "expo-constants";
import Header from "./Header";
import MainRouter from "../routes/MainRouter";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

export default function Main() {
  const location = useLocation().pathname;
  const orientation = useDeviceOrientation();
  const vertical = orientation === "landscape";

  const sty = [
    styles.container,
    orientation === "landscape" && { flexDirection: "row", marginTop: 0 },
  ];
  return (
    <View style={sty}>
      <StatusBar style="auto" />
      {location !== "/main/express" && orientation !== "landscape" && (
        <Header />
      )}
      <MainRouter />
      <NavBar vertical={vertical} />
    </View>
  );
}
