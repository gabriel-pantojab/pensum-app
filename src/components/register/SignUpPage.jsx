import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-native";
import BackIcon from "../icons/BackIcon";
import Constants from "expo-constants";
import { theme } from "../../theme";
import Loading from "../Loading";
import {
  addUser,
  crearUsuario,
  getCurrentUser,
  onAuthStateChanged,
} from "../../../firebaseconfig";
import { saveStudent } from "../../storage/storage";
import { useContext } from "react";
import { StudentContext } from "../../context/studentContext";
import { Course, Levels } from "../../storage/createInformatica";
import HandleError from "./HandleError";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    padding: 10,
    gap: 10,
  },
});

const defaultValues = {
  username: "",
  nickname: "",
  password: "",
};

const schema = yup.object({
  username: yup
    .string()
    .required("Porfavor ingrese su nombre")
    .matches(/^[a-zA-Z\s]+$/, "El nombre solo puede contener letras")
    .trim(),
  nickname: yup
    .string()
    .required("Porfavor ingrese su nickname")
    .min(6, "El nickname debe tener al menos 6 caracteres")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "No se aceptan espacios ni caracteres especiales"
    )
    .trim(),
  password: yup
    .string()
    .required("Porfavor ingrese su contraseña")
    .min(8, "Contraseña muy corta")
    .matches(/^(?=.*[A-Z]).+$/, "La contraseña debe tener una letra mayuscula")
    .matches(
      /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/,
      "La contraseña debe tener un caracter especial"
    )
    .trim(),
});

async function signUp({ nickname, password, username }) {
  await crearUsuario({ nickname, password, username });
  const user = await getCurrentUser();
  const uid = user.uid;
  await addUser({
    uid,
    name: username,
    description: "Estudiante de Ing. Informática",
    avatar: "",
    nickname,
  });
  const studentDB = {
    name: username,
    description: "Estudiante de Ing. Informática",
    avatar: "",
    uid,
    nickname,
  };
  await saveStudent(studentDB);
  return studentDB;
}

export default function SignUpPage() {
  const { setStudent, setCourse, setLevels, setCurrentSubjectsList } =
    useContext(StudentContext);
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
    const { username, nickname, password } = data;
    try {
      const newStudent = await signUp({ nickname, password, username });
      setStudent(newStudent);
      setCourse(Course);
      setLevels(Levels);
      setCurrentSubjectsList([]);
      onAuthStateChanged();
    } catch (error) {
      const errorCode = error.code;
      HandleError({ errorCode });
      reset({
        username,
        nickname: "",
        password,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "100%",
          padding: 10,
        }}
      >
        <Link to="/" underlayColor="transparent">
          <BackIcon />
        </Link>
      </View>
      <Text style={theme.form.title}>Registrarse</Text>
      <View style={theme.form.container}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[
                theme.form.textInput,
                errors.username && {
                  borderColor: theme.colors.redIinformatica,
                },
              ]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Nombre"
            />
          )}
          name="username"
        />
        {errors.username && (
          <Text style={theme.form.textError}>{errors.username.message}</Text>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[
                theme.form.textInput,
                errors.nickname && {
                  borderColor: theme.colors.redIinformatica,
                },
              ]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Nickname"
            />
          )}
          name="nickname"
        />
        {errors.nickname && (
          <Text style={theme.form.textError}>{errors.nickname.message}</Text>
        )}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[
                theme.form.textInput,
                errors.password && {
                  borderColor: theme.colors.redIinformatica,
                },
              ]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Contraseña"
              secureTextEntry
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text style={theme.form.textError}>{errors.password.message}</Text>
        )}
        <Button title="Registrar" onPress={handleSubmit(onSubmit)} />
        {isSubmitting && <Loading />}
      </View>
    </View>
  );
}
