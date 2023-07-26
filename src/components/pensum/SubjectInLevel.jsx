import { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MenuIcon from "../icons/MenuIcon";
import { theme } from "../../theme";
import TextStyle from "../TextStyle";
import ModalChangeState from "./ModalChangeState";
import useUpdateSubjectState from "../../hooks/useUpdateSubjectState";

export default function SubjectInLevel({ name, state, level, id }) {
  const [modal, setModal] = useState(false);
  const { handleChangeState, stateSubject } = useUpdateSubjectState({
    name,
    state,
    level,
    id,
  });
  const stylesSubject = [
    styles.container,
    stateSubject === "No Cursada" && styles.noCursada,
    stateSubject === "Aprobada" && styles.aprobada,
    stateSubject === "Cursando" && styles.cursando,
  ];

  return (
    <View style={stylesSubject}>
      <TouchableOpacity style={styles.menu} onPress={() => setModal(true)}>
        <MenuIcon />
      </TouchableOpacity>
      <TextStyle
        style={{
          ...styles.title,
          color: stateSubject === "No Cursada" ? "#ccc" : "black",
        }}
      >
        {name}
      </TextStyle>

      <ModalChangeState
        modal={modal}
        setModal={setModal}
        name={name}
        stateSubject={stateSubject}
        action={handleChangeState}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    height: 100,
    justifyContent: "center",
    backgroundColor: theme.colors.white,
  },
  menu: {
    height: 20,
  },
  title: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
  },
  noCursada: {
    borderColor: theme.statesSubject["No Cursada"].borderColor,
  },
  aprobada: {
    backgroundColor: theme.statesSubject["Aprobada"].backgroundColor,
    borderColor: theme.statesSubject["Aprobada"].borderColor,
  },
  cursando: {
    borderColor: theme.statesSubject["Cursando"].borderColor,
    backgroundColor: theme.statesSubject["Cursando"].backgroundColor,
  },
});
