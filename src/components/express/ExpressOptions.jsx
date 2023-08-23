import { useContext, useState } from "react";
import { ScheduleContext } from "../timeTableSchedule/context/scheduleContext";
import { View, Button } from "react-native";
import { removeSchedule, saveSchedule } from "../../storage/storage";
import useRunning from "../../hooks/useRunning";
import Running from "./Running";

export default function ExpressOptions() {
  const {
    schedule,
    minPeriod,
    maxPeriod,
    selectedSubjects,
    colorsSubjects,
    clear,
  } = useContext(ScheduleContext);
  const { running, finish, init, end } = useRunning();
  const [sms, setSms] = useState("");
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
      }}
    >
      <Button
        onPress={() => {
          setSms("Guardado");
          init();
          saveSchedule({
            schedule,
            minPeriod,
            maxPeriod,
            selectedSubjects,
            colorsSubjects,
          }).then(() => {
            end();
          });
        }}
        title="Guardar"
      />
      <Button
        onPress={() => {
          setSms("Limpiado");
          init();
          removeSchedule().then(() => {
            clear();
            end();
          });
        }}
        title="Limpiar"
      />
      <Running running={running} finish={finish} message={sms} />
    </View>
  );
}
