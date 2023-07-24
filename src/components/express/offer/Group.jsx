import { View, StyleSheet } from "react-native";
import CheckBox from "../CheckBox";
import TextStyle from "../../TextStyle";
import { useContext, useState } from "react";
import { ScheduleContext } from "../../TimeTableSchedule/context/scheduleContext";

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
