import { Text, View, StyleSheet } from "react-native";
import { Route, Routes, useLocation } from "react-router-native";
import NavBar from "./NavBar";
import Home from "./home/Home";
import Pensum from "./pensum/Pensum";
import SubjectsInLevelList from "./pensum/SubjectsInLevelList";
import ClassesToday from "./classestoday/ClassesToday";
import * as ScreenOrientation from "expo-screen-orientation";
import Schedule from "./schedule/Schedule";
import Express from "./express/Express";
import { useContext, useEffect, useState } from "react";
import { StudentContext } from "../context/studentContext";
import Register from "./register/Register";
import { removeSchedule } from "../storage/storage";
import { StatusBar } from "expo-status-bar";
import { useDeviceOrientation } from "@react-native-community/hooks";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function Main() {
  const location = useLocation().pathname;
  const orientation = useDeviceOrientation();
  const vertical = orientation === "landscape";

  const sty = [
    styles.container,
    orientation === "landscape" && { flexDirection: "row" },
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
  // removeCurrentSubjectsList();
  //removeSchedule();
  return (
    <>
      {state ? (
        <View style={sty}>
          <StatusBar style="auto" />
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
      ) : (
        <Register />
      )}
    </>
  );
}
