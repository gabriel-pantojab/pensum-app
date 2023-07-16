import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import StudentProvider from "./src/context/studentContext";
import { useEffect, useState } from "react";
import Intro from "./src/components/intro/Intro";
import { getStudent } from "./src/storage/storage";
import Register from "./src/components/register/Register";

export default function App() {
  const [intro, setIntro] = useState(true);
  const [existStudent, setExistStudent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIntro(false);
    }, 3500);
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
        {intro ? (
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
