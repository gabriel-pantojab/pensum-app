import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useEffect, useState } from "react";
import useLoading from "../../hooks/useLoading";
import ScheduleProvider from "../timeTableSchedule/context/scheduleContext";
import { getCarreras } from "../../../firebaseconfig";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { theme } from "../../theme";
import TimeTableEschedule from "../timeTableSchedule/TimeTableSchedule";
import ExpressHeader from "./ExpressHeader.ios";
import CareersList from "./CareersList.ios";

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
            <CareersList
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
  content: {
    flex: 1,
    flexDirection: "row",
  },
});
