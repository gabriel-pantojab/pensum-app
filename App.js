import { NativeRouter, Navigate, Route, Routes } from "react-router-native";
import Main from "./src/components/Main";
import StudentProvider from "./src/context/studentContext";
import { useEffect, useState } from "react";
import Intro from "./src/components/intro/Intro";
import {
  getStudent,
  removeCourse,
  removeCurrentSubjectsList,
  removeLevels,
  removeSchedule,
  removeStudent,
} from "./src/storage/storage";
import Register from "./src/components/register/Register";
import { useFonts } from "expo-font";
import { Text } from "react-native";
import Login from "./src/components/register/Login";
import SignUp from "./src/components/register/SignUp";
import { StatusBar } from "expo-status-bar";

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
  removeStudent();
  removeCourse();
  removeSchedule();
  removeCurrentSubjectsList();
  removeLevels();
  return (
    <NativeRouter>
      <StudentProvider>
        <StatusBar style="auto" />
        {intro || !fontsLoaded ? (
          <Intro />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                !existStudent ? (
                  <Register />
                ) : (
                  <Navigate to="/main" replace={true} />
                )
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/signUp"
              element={
                !existStudent ? (
                  <SignUp login={() => setExistStudent(true)} />
                ) : (
                  <Navigate to="/main" replace={true} />
                )
              }
            />
            <Route path="/main/*" element={<Main />} />
          </Routes>
        )}
      </StudentProvider>
    </NativeRouter>
  );
}
