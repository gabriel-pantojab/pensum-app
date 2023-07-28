import { View, StyleSheet, Pressable } from "react-native";
import { Link, useLocation } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import { useDeviceOrientation } from "@react-native-community/hooks";
import Constants from "expo-constants";
import Header from "./Header";
import MainRouter from "../routes/MainRouter";
import MenuIcon from "./icons/MenuIcon";
import BackIcon from "./icons/BackIcon";
import { theme } from "../theme";
import { useLocation } from "react-router-native";
import SideMenu from "./sideMenu/SideMenu";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

export default function Main() {
  const location = useLocation().pathname;
  const orientation = useDeviceOrientation();
  const [showSideMenu, setShowSideMenu] = useState(false);

  const sty = [
    styles.container,
    orientation === "landscape" && { flexDirection: "row", marginTop: 0 },
  ];
  return (
    <View style={sty}>
      <SideMenu show={showSideMenu} close={() => setShowSideMenu(false)} />
      <StatusBar style="auto" />
      {location !== "/main/express" && orientation !== "landscape" && (
        <Header>
          {location === "/main" ? (
            <Pressable onPress={() => setShowSideMenu(!showSideMenu)}>
              <MenuIcon color={theme.colors.white} width={30} height={30} />
            </Pressable>
          ) : (
            <Link
              to="/main"
              underlayColor={"transparent"}
              style={{
                padding: 5,
              }}
            >
              <BackIcon color={theme.colors.white} width={25} height={25} />
            </Link>
          )}
        </Header>
      )}
      <MainRouter />
    </View>
  );
}
