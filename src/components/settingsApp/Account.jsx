import { useContext, useState } from "react";
import { StudentContext } from "../../context/studentContext";
import { View, StyleSheet, TextInput, Pressable } from "react-native";
import TextStyle from "../TextStyle";
import { theme } from "../../theme";
import EditIcon from "../icons/EditIcon";

export default function Account() {
  const { student } = useContext(StudentContext);
  const [name, setName] = useState(student.name);
  const [editName, setEditName] = useState(false);
  return (
    <View style={styles.account}>
      <View style={styles.accountHeader}>
        <TextStyle style={styles.title}>Cuenta</TextStyle>
      </View>
      <View>
        <View style={styles.field}>
          <Pressable
            style={styles.fieldHeader}
            onPress={() => {
              setEditName(true);
            }}
          >
            <TextStyle>Nombre</TextStyle>
            <View style={[editName && { opacity: 0.5 }]}>
              <EditIcon width={17} height={17} color={theme.colors.black} />
            </View>
          </Pressable>
          <TextInput
            style={{
              fontFamily: theme.fonts.holidayBudapest,
              borderBottomWidth: 1,
              borderBottomColor: theme.colors.primary,
            }}
            value={name}
            editable={editName}
            onChangeText={(text) => setName(text)}
            autoFocus={editName}
          />
          {editName && (
            <View style={styles.optionsEdit}>
              <Pressable
                style={[
                  styles.optionEdit,
                  {
                    borderColor: "green",
                  },
                ]}
              >
                <TextStyle
                  style={{
                    color: "green",
                    fontSize: 13,
                  }}
                >
                  Guardar
                </TextStyle>
              </Pressable>
              <Pressable
                style={[
                  styles.optionEdit,
                  {
                    borderColor: "red",
                  },
                ]}
                onPress={() => {
                  setEditName(false);
                  setName(student.name);
                }}
              >
                <TextStyle
                  style={{
                    color: "red",
                    fontSize: 13,
                  }}
                >
                  Cancelar
                </TextStyle>
              </Pressable>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  account: {
    backgroundColor: theme.colors.white,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  title: {
    fontSize: 20,
    color: theme.colors.primary,
    marginHorizontal: 10,
  },
  accountHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  field: {
    margin: 10,
  },
  fieldHeader: {
    flexDirection: "row",
    gap: 10,
  },
  optionsEdit: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    marginTop: 5,
  },
  optionEdit: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
});
