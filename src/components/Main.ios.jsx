import { Text, View, StyleSheet } from "react-native";
import { Route, Routes, useLocation } from "react-router-native";
import NavBar from "./NavBar";
import SubjectsInLevelList from "./pensum/SubjectsInLevelList";
import { StatusBar } from "expo-status-bar";
import { useDeviceOrientation } from "@react-native-community/hooks";
import Constants from "expo-constants";
import Header from "./Header";
import Home from "../pages/home/Home";
import PensumPage from "../pages/pensum/PensumPage";
import ClassesTodayPage from "../pages/classestoday/ClassesTodayPage";
import SchedulePage from "../pages/schedule/SchedulePage";
import ExpressPage from "../pages/express/ExpressPage";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pensum" element={<PensumPage />} />
        <Route path="/pensum/:level" element={<SubjectsInLevelList />} />
        <Route path="/clases-hoy" element={<ClassesTodayPage />} />
        <Route path="/horario" element={<SchedulePage />} />
        <Route path="/express" element={<ExpressPage />} />
        <Route path="*" element={<Text>Not Found</Text>} />
      </Routes>
      <NavBar vertical={vertical} />
    </View>
  );
}
