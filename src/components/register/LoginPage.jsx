import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Constants from "expo-constants";
import { theme } from "../../theme";
import { Link } from "react-router-native";
import BackIcon from "../icons/BackIcon";
import Loading from "../Loading";
import { useContext } from "react";
import {
  getUser,
  login as loginFirebase,
  onAuthStateChanged,
} from "../../../firebaseconfig";
import { StudentContext } from "../../context/studentContext";
import {
  saveCourse,
  saveCurrentSubjectsList,
  saveLevels,
  saveSchedule,
  saveStudent,
} from "../../storage/storage";
import HandleError from "./HandleError";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    padding: 10,
    gap: 10,
  },
});

async function login({ nickname, password }) {
  const responseLogin = await loginFirebase({
    nickname,
    password,
  });
  const user = responseLogin.user;
  const uid = user.uid;
  const userDB = await getUser({ uid });
  const student = { ...userDB.user, uid, nickname };
  const course = userDB.course;
  const currentSubjectsList = userDB.currentSubjectsList
    ? userDB.currentSubjectsList
    : [];
  const levels = userDB.levels;
  const schedule = userDB.schedule;
  if (!schedule.selectedSubjects) schedule.selectedSubjects = [];
  Object.values(schedule.schedule).forEach((day) => {
    Object.values(day).forEach((hour) => {
      if (!hour.subjects) hour.subjects = [];
    });
  });
  return {
    student,
    course,
    currentSubjectsList,
    levels,
    schedule,
  };
}

const defaultValues = {
  nickname: "",
  password: "",
};

const schema = yup.object({
  nickname: yup.string().required("Porfavor ingrese su nickname").trim(),
  password: yup.string().required("Porfavor ingrese su contraseña").trim(),
});

export default function LoginPage() {
  const { setStudent, setCourse, setCurrentSubjectsList, setLevels } =
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
    const { nickname, password } = data;
    try {
      const { student, course, currentSubjectsList, levels, schedule } =
        await login({ nickname, password });
      if (student) {
        setStudent(student);
        await saveStudent(student);
      }
      if (course) {
        setCourse(course);
        await saveCourse(course);
      }
      if (currentSubjectsList) {
        setCurrentSubjectsList(currentSubjectsList);
        await saveCurrentSubjectsList(currentSubjectsList);
      }
      if (levels) {
        setLevels(levels);
        await saveLevels(levels);
      }
      if (schedule) {
        await saveSchedule(schedule);
      }
      onAuthStateChanged();
    } catch (error) {
      const errorCode = error.code;
      HandleError({ errorCode });
      reset(defaultValues);
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
      <Text style={theme.form.title}>Inicio de Sesión</Text>
      <View style={theme.form.container}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[
                theme.form.textInput,
                errors.nickname && {
                  borderColor: theme.colors.redIinformatica,
                },
              ]}
              placeholder="nickname"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="nickname"
        />
        {errors.nickname && (
          <Text style={theme.form.textError}>{errors.nickname.message}</Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[
                theme.form.textInput,
                errors.password && {
                  borderColor: theme.colors.redIinformatica,
                },
              ]}
              placeholder="password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text style={theme.form.textError}>{errors.password.message}</Text>
        )}
        <Button title="Ingresar" onPress={handleSubmit(onSubmit)} />
        {isSubmitting && <Loading />}
      </View>
    </View>
  );
}
