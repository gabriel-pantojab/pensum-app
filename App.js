import { NativeRouter } from "react-router-native";
import StudentProvider from "./src/context/studentContext";
import { useEffect, useState } from "react";
import Intro from "./src/components/intro/Intro";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import AuthRouter from "./src/routes/AuthRouter";

export default function App() {
  const [intro, setIntro] = useState(true);
  const [fontsLoaded] = useFonts({
    "Good Dog": require("./assets/fonts/GoodDog.otf"),
    "Holiday Budapest": require("./assets/fonts/Holiday_Budapest.ttf"),
    "Holiday Budapest Regular": require("./assets/fonts/HolidaybudapestRegular.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      setIntro(false);
    }, 3000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeRouter>
      <StudentProvider>
        <StatusBar style="auto" />
        {intro || !fontsLoaded ? <Intro /> : <AuthRouter />}
      </StudentProvider>
    </NativeRouter>
  );
}
