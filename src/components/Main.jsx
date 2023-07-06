import { Text, View, StyleSheet } from "react-native";
import { Route, Routes } from "react-router-native";
import NavBar from "./NavBar";
import Home from "./Home";
import Pensum from "./Pensum";
import SubjectsInLevel from "./SubjectsInLevel";
import Schedule from "./schedule/Schedule";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function Main() {
  return (
    <View style={styles.container}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pensum" element={<Pensum />} />
        <Route path="/pensum/:level" element={<SubjectsInLevel />} />
        <Route path="/clases-hoy" element={<Schedule />} />
        <Route path="/horario" element={<Text>Horario</Text>} />
        <Route path="/express" element={<Text>Express</Text>} />
        <Route path="*" element={<Text>Not Found</Text>} />
      </Routes>
    </View>
  );
}
