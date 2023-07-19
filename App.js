import { NativeRouter } from "react-router-native";
import StudentProvider from "./src/context/studentContext";
import { useEffect, useState } from "react";
import Intro from "./src/components/intro/Intro";
import {
  removeCourse,
  removeCurrentSubjectsList,
  removeLevels,
  removeSchedule,
  removeStudent,
} from "./src/storage/storage";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import MainRouter from "./src/components/MainRouter";

export default function App() {
  const [intro, setIntro] = useState(true);
  const [fontsLoaded] = useFonts({
    "Good Dog": require("./assets/fonts/GoodDog.otf"),
    "Holiday Budapest": require("./assets/fonts/Holiday_Budapest.ttf"),
  });
  useEffect(() => {
    setTimeout(() => {
      setIntro(false);
    }, 3000);
  }, []);
  return (
    <NativeRouter>
      <StudentProvider>
        <StatusBar style="auto" />
        {intro || !fontsLoaded ? <Intro /> : <MainRouter />}
      </StudentProvider>
    </NativeRouter>
  );
}
