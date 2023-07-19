import { Alert } from "react-native";

const errors = {
  "auth/user-not-found": {
    header: "Usuario no encontrado",
    message: "El usuario ingresado no existe",
  },
  "auth/wrong-password": {
    header: "Datos incorrectos",
    message: "Usuario o contraseña incorrectos",
  },
  default: {
    header: "Error",
    message: "Ha ocurrido un error inesperado",
  },
};

export default function HandleError({ errorCode }) {
  const error = errors[errorCode] ? errors[errorCode] : errors["default"];
  Alert.alert(error.header, error.message, [
    {
      text: "Aceptar",
      onPress: () => {},
    },
  ]);
}
