import { View, StyleSheet } from "react-native";
import CheckBox from "../CheckBox";
import TextStyle from "../../TextStyle";
import { useContext, useState } from "react";
import { ScheduleContext } from "../../timeTableSchedule/context/scheduleContext";
import { theme } from "../../../theme";

export default function Group({ group, teacher, infoGroup }) {
  const { addSubject, schedule } = useContext(ScheduleContext);
  const valueChecked = checkedGroup(infoGroup, schedule);
  const [checked, setChecked] = useState(valueChecked);
  return (
    <View style={styles.container}>
      <CheckBox
        width={13}
        value={checked}
        onChange={() => {
          addSubject(infoGroup, !checked);
          setChecked(!checked);
        }}
      >
        <TextStyle style={styles.group}>
          G:{group} {teacher}
        </TextStyle>
      </CheckBox>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: theme.colors.white,
    marginRight: 10,
    marginLeft: 10,
    paddingVertical: 3,
  },
  group: {
    fontSize: 10,
    color: theme.colors.white,
  },
});

function checkedGroup(group, schedule) {
  const dias = {
    LU: "lunes",
    MA: "martes",
    MI: "miercoles",
    JU: "jueves",
    VI: "viernes",
    SA: "sabado",
    DO: "domingo",
  };
  let horarios = [];
  if (group.titular.horarios) {
    group.titular.horarios.forEach((h) => {
      horarios.push({
        dia: dias[h.dia],
        hora: h.hora.split("-")[0].split(":").join(""),
      });
    });
  }
  if (group.auxiliar.horarios) {
    group.auxiliar.horarios.forEach((h) => {
      horarios.push({
        dia: dias[h.dia],
        hora: h.hora.split("-")[0].split(":").join(""),
      });
    });
  }
  let checked = false;
  horarios.forEach((h) => {
    if (schedule[h.dia]) {
      if (schedule[h.dia][h.hora]) {
        const s = schedule[h.dia][h.hora].subjects.find(
          (o) => o.subjectName === group.subjectName && o.group === group.grupo
        );
        if (s) {
          checked = true;
        }
      }
    }
  });
  return checked;
}
