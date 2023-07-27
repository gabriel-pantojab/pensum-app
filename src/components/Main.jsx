import { View, StyleSheet, Text, Pressable } from "react-native";
import { useLocation } from "react-router-native";
import NavBar from "./NavBar";
import { StatusBar } from "expo-status-bar";
import { useDeviceOrientation } from "@react-native-community/hooks";
import Constants from "expo-constants";
import Header from "./Header";
import MainRouter from "../routes/MainRouter";
import SideMenu from "./sideMenu/SideMenu";
import { useState } from "react";
import MenuIcon from "./icons/MenuIcon";
import { theme } from "../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

export default function Main() {
  const orientation = useDeviceOrientation();
  const location = useLocation();
  const [showSideMenu, setShowSideMenu] = useState(false);
  const vertical = orientation === "landscape";
  const sty = [
    styles.container,
    orientation === "landscape" && { flexDirection: "row" },
  ];

  return (
    <View style={sty}>
      <SideMenu show={showSideMenu} close={() => setShowSideMenu(false)} />
      <StatusBar style="auto" backgroundColor="#ccc" />
      {location.pathname !== "/main/express" && orientation !== "landscape" && (
        <Header>
          <Pressable onPress={() => setShowSideMenu(!showSideMenu)}>
            <MenuIcon color={theme.colors.white} width={30} height={30} />
          </Pressable>
        </Header>
      )}
      <MainRouter />
    </View>
  );
}
