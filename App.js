import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import StudentProvider from "./src/context/studentContext";
import { useEffect, useState } from "react";
import Intro from "./src/components/intro/Intro";
import { getStudent } from "./src/storage/storage";
import Register from "./src/components/register/Register";
import { useFonts } from "expo-font";

export default function App() {
  const [intro, setIntro] = useState(true);
  const [existStudent, setExistStudent] = useState(false);
  const [fontsLoaded] = useFonts({
    "Good Dog": require("./assets/fonts/GoodDog.otf"),
    "Holiday Budapest": require("./assets/fonts/Holiday_Budapest.ttf"),
  });
  useEffect(() => {
    setTimeout(() => {
      setIntro(false);
    }, 3000);
  }, []);
  useEffect(() => {
    getStudent().then((std) => {
      if (std) {
        setExistStudent(true);
      } else {
        setExistStudent(false);
      }
    });
  }, []);
  return (
    <NativeRouter>
      <StudentProvider>
        {intro || !fontsLoaded ? (
          <Intro />
        ) : existStudent ? (
          <Main />
        ) : (
          <Register login={() => setExistStudent(true)} />
        )}
      </StudentProvider>
    </NativeRouter>
  );
}
