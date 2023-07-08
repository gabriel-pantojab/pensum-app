import { Text, View, StyleSheet } from "react-native";
import { Route, Routes, useLocation } from "react-router-native";
import NavBar from "./NavBar";
import Home from "./Home";
import Pensum from "./Pensum";
import SubjectsInLevel from "./SubjectsInLevel";
import ClassesToday from "./classestoday/ClassesToday";
import * as ScreenOrientation from "expo-screen-orientation";
import Schedule from "./schedule/Schedule";
import Express from "./express/Express";
import { useContext, useEffect, useState } from "react";
import { StudentContext } from "../context/studentContext";
import Register from "./register/Register";
import { removeCourse, removeLevels, removeStudent } from "../storage/storage";

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
  const { student, course, levels } = useContext(StudentContext);
  const [state, setState] = useState(false);
  useEffect(() => {
    if (student.notexist) {
      setState(false);
    } else {
      if (course.name != "" && levels.length) setState(true);
    }
  }, [student, course, levels]);
  // removeStudent();
  // removeCourse();
  // removeLevels();
  return (
    <>
      {state ? (
        <View style={sty}>
          <NavBar vertical={vertical} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pensum" element={<Pensum />} />
            <Route path="/pensum/:level" element={<SubjectsInLevel />} />
            <Route path="/clases-hoy" element={<ClassesToday />} />
            <Route path="/horario" element={<Schedule />} />
            <Route path="/express" element={<Express />} />
            <Route path="*" element={<Text>Not Found</Text>} />
          </Routes>
        </View>
      ) : (
        <Register />
      )}
    </>
  );
}
