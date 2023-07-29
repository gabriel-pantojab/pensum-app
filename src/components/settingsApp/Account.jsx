import { useContext, useState } from "react";
import { StudentContext } from "../../context/studentContext";
import { View, StyleSheet, Pressable } from "react-native";
import TextStyle from "../TextStyle";
import { theme } from "../../theme";
import Loading from "../Loading";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import UserName from "./UserName";

const schema = yup.object({
  username: yup
    .string()
    .required("No puedo estar vacio")
    .matches(/^[a-zA-Z\s]+$/, "El nombre solo puede contener letras")
    .trim(),
});

export default function Account() {
  const { student } = useContext(StudentContext);
  const [edit, setEdit] = useState(false);

  const defaultValues = {
    username: student.name,
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    setEdit(false);
  };

  return (
    <View style={styles.account}>
      <View style={styles.accountHeader}>
        <TextStyle style={styles.title}>Cuenta</TextStyle>
      </View>
      <View>
        <UserName
          control={control}
          errors={errors}
          action={() => setEdit(true)}
          edit={edit}
        />
        {edit && (
          <View style={styles.optionsEdit}>
            {isSubmitting && <Loading />}
            <Pressable
              style={[
                styles.optionEdit,
                {
                  borderColor: "green",
                },
              ]}
              onPress={handleSubmit(onSubmit)}
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
                setEdit(false);
                reset(defaultValues);
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
