import { useContext, useState } from "react";
import { ScheduleContext } from "../timeTableSchedule/context/scheduleContext";
import { Pressable, View, StyleSheet, Button } from "react-native";
import TextStyle from "../TextStyle";
import CaretDownIcon from "../icons/CaretDownIcon";
import CaretUpIcon from "../icons/CaretUpIcon";
import { removeSchedule, saveSchedule } from "../../storage/storage";
import { theme } from "../../theme";
import useRunning from "../../hooks/useRunning";
import Running from "./Running";

export default function ExpressOptions({ showCarreras, showCarrerasValue }) {
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
      <Pressable style={styles.options} onPress={showCarreras}>
        <TextStyle style={styles.title}>Horarios</TextStyle>
        {showCarrerasValue ? (
          <CaretUpIcon color={theme.colors.white} width={15} height={15} />
        ) : (
          <CaretDownIcon color={theme.colors.white} width={15} height={15} />
        )}
      </Pressable>
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

const styles = StyleSheet.create({
  options: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.white,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },
  title: {
    color: theme.colors.white,
    fontSize: 15,
  },
});
