import { useDeviceOrientation } from "@react-native-community/hooks";
import { View, StyleSheet } from "react-native";
import TextStyle from "../TextStyle";
import { theme } from "../../theme";
import ExpressOptions from "./ExpressOptions";

export default function ExpressHeader({ action, showCarreras }) {
  const orientation = useDeviceOrientation();
  const styHeader = [
    styles.header,
    orientation === "landscape" && {
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      paddingLeft: Constants.statusBarHeight,
    },
  ];

  return (
    <View style={styHeader}>
      <TextStyle style={styles.title}>
        Express - Gestión {new Date().getFullYear()}
      </TextStyle>
      <ExpressOptions showCarreras={action} showCarrerasValue={showCarreras} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "relative",
    backgroundColor: theme.colors.primary,
    padding: 5,
    gap: 10,
  },
  title: {
    color: theme.colors.white,
    fontSize: 15,
  },
});
