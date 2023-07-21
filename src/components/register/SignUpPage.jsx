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
  getInfoNiveles,
  getTotalMateriasCarrera,
  onAuthStateChanged,
} from "../../../firebaseconfig";
import { saveStudent } from "../../storage/storage";
import { useContext, useState } from "react";
import { StudentContext } from "../../context/studentContext";
import HandleError from "./HandleError";
import Select, { Option } from "../Select";

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

async function signUp({
  nickname,
  password,
  username,
  nameCarrera,
  sisCarrera,
}) {
  await crearUsuario({ nickname, password, username });
  const user = await getCurrentUser();
  const uid = user.uid;
  await addUser({
    uid,
    name: username,
    description: "Estudiante de " + nameCarrera,
    avatar: "",
    nickname,
    nameCarrera,
    sisCarrera,
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
  const [carrera, setCarrera] = useState({
    name: "",
    sis: "",
  });
  const [emptyCarrera, setEmptyCarrera] = useState(false);
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
    if (!carrera.sis) {
      setEmptyCarrera(true);
      return;
    }
    setEmptyCarrera(false);
    const { username, nickname, password } = data;
    try {
      const newStudent = await signUp({
        nickname,
        password,
        username,
        nameCarrera: carrera.name,
        sisCarrera: carrera.sis,
      });
      let Levels = await getInfoNiveles({ sisCarrera: carrera.sis });
      Levels = Levels.map((level) => {
        return {
          ...level,
          progress: 0,
          inProgress: 0,
        };
      });
      const totalMateriasCarrera = await getTotalMateriasCarrera({
        sisCarrera: carrera.sis,
      });
      const Course = {
        name: carrera.name,
        sis: carrera.sis,
        totalSubjects: totalMateriasCarrera,
        approvedSubjects: 0,
        pendingSubjects: totalMateriasCarrera,
        inProgressSubjects: 0,
      };
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
        <View
          style={{
            width: "80%",
          }}
        >
          <Text
            style={{
              ...theme.form.text,
              color: theme.colors.primary,
              marginBottom: 5,
            }}
          >
            Carrera
          </Text>
          <Select defaultValue={carrera.sis}>
            <Option
              value={"134111"}
              name="Licenciatura en Ingeniería Informática"
              onChange={(value) => {
                setCarrera(value);
              }}
            >
              <Text>Licenciatura en Ingeniería Informática</Text>
            </Option>

            <Option
              value={"411702"}
              name="Licenciatura en Ingeniería de Sistemas"
              onChange={(value) => {
                setCarrera(value);
              }}
            >
              <Text>Licenciatura en Ingeniería de Sistemas</Text>
            </Option>
          </Select>
          {emptyCarrera && (
            <Text style={{ ...theme.form.textError, marginTop: 7 }}>
              Porfavor seleccione una carrera
            </Text>
          )}
        </View>
        <Button title="Registrar" onPress={handleSubmit(onSubmit)} />
        {isSubmitting && <Loading />}
      </View>
    </View>
  );
}
