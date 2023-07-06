import { Text, View, StyleSheet } from "react-native";
import { Route, Routes, useLocation } from "react-router-native";
import NavBar from "./NavBar";
import Home from "./Home";
import Pensum from "./Pensum";
import SubjectsInLevel from "./SubjectsInLevel";
import ClassesToday from "./classestoday/ClassesToday";
import * as ScreenOrientation from "expo-screen-orientation";
import Schedule from "./schedule/Schedule";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function Main() {
  const location = useLocation().pathname;
  const vertical = location === "/horario" || location === "/express";
  if (location === "/horario" || location === "/express") {
    ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
  } else {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }
  const sty = [
    styles.container,
    (location === "/horario" || location === "/express") && {
      flexDirection: "row",
    },
  ];
  return (
    <View style={sty}>
      <NavBar vertical={vertical} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pensum" element={<Pensum />} />
        <Route path="/pensum/:level" element={<SubjectsInLevel />} />
        <Route path="/clases-hoy" element={<ClassesToday />} />
        <Route path="/horario" element={<Schedule />} />
        <Route path="/express" element={<Text>Express</Text>} />
        <Route path="*" element={<Text>Not Found</Text>} />
      </Routes>
    </View>
  );
}
