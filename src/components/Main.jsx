import { Text, View, StyleSheet } from "react-native";
import { Route, Routes } from "react-router-native";
import NavBar from "./NavBar";
import Home from "./Home";
import Pensum from "./Pensum";

const styles = StyleSheet.create({
  container: {},
});

export default function Main() {
  return (
    <View>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pensum" element={<Pensum />} />
        <Route path="/horario" element={<Text>Horario</Text>} />
        <Route path="*" element={<Text>Not Found</Text>} />
      </Routes>
    </View>
  );
}
