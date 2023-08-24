import { View, StyleSheet, TouchableOpacity } from "react-native";
import TextStyle from "../TextStyle";
import StatesSubject from "./StatesSubject";
import Select from "../selectComponent/Select";
import Option from "../selectComponent/Option";
import { useState } from "react";
import CheckIcon from "../icons/CheckIcon";

export default function HeaderLevel({
  approved,
  inProgress,
  pending,
  levelName,
}) {
  const [checkAll, setCheckAll] = useState(false);

  return (
    <>
      <View style={styles.info}>
        <TextStyle style={styles.level}>Nivel {levelName}</TextStyle>
        <StatesSubject />
      </View>
      <View style={styles.info}>
        <TextStyle>Aprobadas: {approved}</TextStyle>
        <TextStyle>Cursando: {inProgress}</TextStyle>
        <TextStyle>No Cursadas: {pending}</TextStyle>
      </View>
      <View style={styles.info}>
        <TouchableOpacity
          style={styles.checkBoxContainer}
          onPress={() => {
            setCheckAll(!checkAll);
          }}
        >
          <View style={styles.checkBox}>
            {checkAll && <CheckIcon color={"#1493ff"} width={13} height={13} />}
          </View>
          <TextStyle style={styles.textCheck}>Marcar Todas</TextStyle>
        </TouchableOpacity>

        <Select
          defaultValue="1"
          style={{
            width: 110,
            height: 30,
            padding: 3,
          }}
          styleOptions={{
            width: 110,
            minWidth: 110,
            height: 100,
            padding: 3,
          }}
        >
          <Option value="1" name={"Aprovada"} onChange={(value) => {}}>
            <TextStyle style={styles.textCheck}>Aprobada</TextStyle>
          </Option>
          <Option value="2" name={"Cursando"} onChange={(value) => {}}>
            <TextStyle style={styles.textCheck}>Cursando</TextStyle>
          </Option>
          <Option value="3" name={"No Cursada"} onChange={(value) => {}}>
            <TextStyle style={styles.textCheck}>No Cursada</TextStyle>
          </Option>
        </Select>

        <TouchableOpacity>
          <TextStyle style={styles.textCheck}>Marcar</TextStyle>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  level: {
    fontSize: 18,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  textCheck: {
    fontSize: 13,
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkBox: {
    width: 15,
    height: 15,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#000",
    marginRight: 5,
  },
});
