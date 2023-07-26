import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import Constants from "expo-constants";
import { useEffect, useState } from "react";
import useLoading from "../../hooks/useLoading";
import ScheduleProvider from "../timeTableSchedule/context/scheduleContext";
import { getCarreras } from "../../../firebaseconfig";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { theme } from "../../theme";
import TextStyle from "../TextStyle";
import TimeTableEschedule from "../timeTableSchedule/TimeTableSchedule";
import ExpressHeader from "./ExpressHeader.ios";
import Career from "./offer/Career";

function Carreras({ carreras, loading, finishedRender }) {
  const orientation = useDeviceOrientation();
  const styMenu = [
    styles.menu,
    orientation === "landscape" && {
      marginLeft: Constants.statusBarHeight,
    },
  ];
  return (
    <View style={styMenu} onLayout={finishedRender}>
      {carreras.length ? (
        <FlatList
          initialNumToRender={5}
          data={carreras}
          renderItem={({ item }) => (
            <Career name={item.nombre} sis={item.sis} />
          )}
          keyExtractor={(item) => item.sis}
          ListFooterComponent={loading}
        />
      ) : (
        <TextStyle style={styles.carrera}>
          No hay carreras disponibles
        </TextStyle>
      )}
    </View>
  );
}

export default function Express() {
  const [carreras, setCarreras] = useState([]);
  const [showCarreras, setShowCarreras] = useState(false);
  const { loading, finishedRender, initLoading } = useLoading();
  const orientation = useDeviceOrientation();

  const styCont = [
    styles.container,
    orientation === "landscape" && {
      paddingLeft: Constants.statusBarHeight,
    },
  ];
  const getCarrerasDB = async () => {
    try {
      const data = await getCarreras();
      setCarreras(data);
    } catch (e) {
      setCarreras([]);
      console.log(e);
    }
  };
  useEffect(() => {
    getCarrerasDB();
  }, []);
  return (
    <ScheduleProvider>
      <View style={styCont}>
        <ExpressHeader
          action={() => {
            initLoading(true);
            setShowCarreras(!showCarreras);
          }}
          showCarreras={showCarreras}
        />
        <View style={styles.content}>
          {showCarreras && (
            <Carreras
              carreras={carreras}
              loading={loading}
              finishedRender={finishedRender}
            />
          )}
          <TimeTableEschedule />
        </View>
      </View>
    </ScheduleProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  header: {
    position: "relative",
    backgroundColor: theme.colors.primary,
    padding: 5,
    gap: 10,
  },
  options: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.white,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },
  title: {
    color: theme.colors.white,
    fontSize: 15,
  },
  menu: {
    backgroundColor: "#ccc",
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderBottomRightRadius: 5,
    borderColor: "#fff",
    maxHeight: Dimensions.get("window").height - Constants.statusBarHeight,
    padding: 5,
  },

  content: {
    flex: 1,
    flexDirection: "row",
  },
  carrera: {
    color: theme.colors.white,
    padding: 5,
    fontSize: 10,
    marginBottom: 5,
  },
});
