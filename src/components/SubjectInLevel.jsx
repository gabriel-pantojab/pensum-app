import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import MenuIcon from "./icons/MenuIcon";
import CloseIcon from "./icons/CloseIcon";

function RadioButton({ initValue, values, action }) {
  const [currentValue, setCurrentValue] = useState(initValue);
  return values.map((value) => (
    <Pressable
      key={value}
      onPress={() => {
        setCurrentValue(value);
        action(value);
      }}
    >
      <View style={styles.radioButton}>
        <View
          style={{
            ...styles.radioButtonCircle,
            backgroundColor: value === currentValue ? "blue" : "white",
          }}
        />
        <Text>{value}</Text>
      </View>
    </Pressable>
  ));
}

export default function SubjectInLevel({ name, state }) {
  const [modal, setModal] = useState(false);
  const [stateSubject, setStateSubject] = useState(state);
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
      <Text
        style={{
          ...styles.title,
          color: stateSubject === "No Cursada" ? "#ccc" : "black",
        }}
      >
        {name}
      </Text>
      <Modal
        visible={modal}
        animationType="slide"
        transparent
        onRequestClose={() => setModal(false)}
      >
        <View style={styles.containerModal}>
          <View style={styles.modal}>
            <Pressable
              onPress={() => setModal(false)}
              style={{
                height: 20,
                alignSelf: "flex-end",
              }}
            >
              <CloseIcon />
            </Pressable>
            <View
              style={{
                justifyContent: "center",
                padding: 20,
                gap: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                {name}
              </Text>
              <RadioButton
                values={["No Cursada", "Cursando", "Aprobada"]}
                action={(value) => {
                  setStateSubject(value);
                }}
                onClose={() => setModal(false)}
                initValue={stateSubject}
              />
            </View>
          </View>
        </View>
      </Modal>
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
  },
  menu: {
    height: 20,
  },
  containerModal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#ccc",
    gap: 10,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  noCursada: {
    borderColor: "#ccc",
    // backgroundColor: "#ccc",
  },
  aprobada: {
    backgroundColor: "#b2f2bb",
    borderColor: "#2f9e44",
  },
  cursando: {
    borderColor: "#fff842",
    backgroundColor: "#ffec99",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  radioButtonCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
});
