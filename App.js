import { NativeRouter } from "react-router-native";

import Main from "./src/components/Main";
import StudentProvider from "./src/context/studentContext";

export default function App() {
  return (
    <NativeRouter>
      <StudentProvider>
        <Main />
      </StudentProvider>
    </NativeRouter>
  );
}
