import { Text } from "react-native";
import { Route, Routes } from "react-router-native";
import Home from "../pages/home/Home";
import PensumPage from "../pages/pensum/PensumPage";
import SubjectsInLevelList from "../components/pensum/SubjectsInLevelList";
import ClassesTodayPage from "../pages/classestoday/ClassesTodayPage";
import SchedulePage from "../pages/schedule/SchedulePage";
import ExpressPage from "../pages/express/ExpressPage";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pensum" element={<PensumPage />} />
      <Route path="/pensum/:level" element={<SubjectsInLevelList />} />
      <Route path="/clases-hoy" element={<ClassesTodayPage />} />
      <Route path="/horario" element={<SchedulePage />} />
      <Route path="/express" element={<ExpressPage />} />
      <Route path="*" element={<Text>Not Found</Text>} />
    </Routes>
  );
}