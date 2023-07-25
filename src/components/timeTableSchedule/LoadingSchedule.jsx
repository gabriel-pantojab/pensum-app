import { View } from "react-native";
import TextStyle from "../TextStyle";
import Loading from "../Loading";

export function LoadingSchedule() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextStyle
        style={{
          fontSize: 20,
          textAlign: "center",
        }}
      >
        Cargando...
      </TextStyle>
      <Loading />
    </View>
  );
}
