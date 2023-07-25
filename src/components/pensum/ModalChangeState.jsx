import { StyleSheet, View, Modal, Pressable } from "react-native";
import CloseIcon from "../icons/CloseIcon";
import TextStyle from "../TextStyle";
import { theme } from "../../theme";
import RadioButton from "../RadioButton";

export default function ModalChangeState({
  modal,
  setModal,
  name,
  stateSubject,
  action,
}) {
  return (
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
            <TextStyle
              style={{
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "center",
              }}
            >
              {name}
            </TextStyle>
            <RadioButton
              values={["No Cursada", "Cursando", "Aprobada"]}
              action={(value) => {
                action(value);
              }}
              initValue={stateSubject}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: theme.colors.white,
    gap: 10,
  },
});
