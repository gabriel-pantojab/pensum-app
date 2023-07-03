import { StatusBar } from "expo-status-bar";

import { NativeRouter, Routes, Route } from "react-router-native";

import Main from "./src/components/Main";
import NavBar from "./src/components/NavBar";

export default function App() {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
}
