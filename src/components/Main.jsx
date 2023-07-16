import { Text, View, StyleSheet } from "react-native";
import { Route, Routes } from "react-router-native";
import NavBar from "./NavBar";
import Home from "./home/Home";
import Pensum from "./pensum/Pensum";
import SubjectsInLevelList from "./pensum/SubjectsInLevelList";
import ClassesToday from "./classestoday/ClassesToday";
import Schedule from "./schedule/Schedule";
import Express from "./express/Express";
import { StatusBar } from "expo-status-bar";
import { useDeviceOrientation } from "@react-native-community/hooks";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function Main() {
  const orientation = useDeviceOrientation();
  const vertical = orientation === "landscape";
  const sty = [
    styles.container,
    orientation === "landscape" && { flexDirection: "row" },
  ];

  return (
    <View style={sty}>
      <StatusBar style="auto" backgroundColor="#ccc" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pensum" element={<Pensum />} />
        <Route path="/pensum/:level" element={<SubjectsInLevelList />} />
        <Route path="/clases-hoy" element={<ClassesToday />} />
        <Route path="/horario" element={<Schedule />} />
        <Route path="/express" element={<Express />} />
        <Route path="*" element={<Text>Not Found</Text>} />
      </Routes>
      <NavBar vertical={vertical} />
    </View>
  );
}
