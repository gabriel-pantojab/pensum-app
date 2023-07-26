import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import Constants from "expo-constants";
import { Pressable } from "react-native";
import CaretDownIcon from "../icons/CaretDownIcon";
import { useContext, useEffect, useState } from "react";
import useLoading from "../../hooks/useLoading";
import CaretUpIcon from "../icons/CaretUpIcon";
import { getCarreras } from "../../../firebaseconfig";
import { theme } from "../../theme";
import TextStyle from "../TextStyle";
import { StudentContext } from "../../context/studentContext";
import ScheduleProvider from "../timeTableSchedule/context/scheduleContext";
import TimeTableEschedule from "../timeTableSchedule/TimeTableSchedule";
import ExpressHeader from "./ExpressHeader";
import Career from "./offer/Career";

function Carreras({ carreraStudent }) {
  const [showOthersCareers, setShowOthersCareers] = useState(false);
  const { course } = useContext(StudentContext);
  const [carreras, setCarreras] = useState([]);
  const { loading, finishedRender, initLoading } = useLoading();
  const getCarrerasDB = async () => {
    try {
      const data = await getCarreras();
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (showOthersCareers) {
      initLoading();
      getCarrerasDB().then((data) => {
        if (data) {
          const carreras = data.filter((carrera) => carrera.sis !== course.sis);
          setCarreras(carreras);
        } else setCarreras([]);
      });
    }
  }, [showOthersCareers]);
  return (
    <View style={styles.menu}>
      <Career
        name={carreraStudent.name}
        sis={carreraStudent.sis}
        key={carreraStudent.sis}
      />
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: theme.colors.white,
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onPress={() => setShowOthersCareers(!showOthersCareers)}
        >
          <TextStyle style={{ ...styles.carrera, fontSize: 13 }}>
            Otras Carreras
          </TextStyle>
          {showOthersCareers ? (
            <CaretUpIcon color={theme.colors.white} width={15} height={15} />
          ) : (
            <CaretDownIcon color={theme.colors.white} width={15} height={15} />
          )}
        </Pressable>
        {carreras.length && showOthersCareers ? (
          <View onLayout={finishedRender}>
            <FlatList
              initialNumToRender={5}
              data={carreras}
              renderItem={({ item }) => (
                <Carrera name={item.nombre} sis={item.sis} />
              )}
              keyExtractor={(item) => item.sis}
              ListFooterComponent={loading}
            />
          </View>
        ) : (
          showOthersCareers && (
            <TextStyle style={styles.carrera}>
              No hay carreras disponibles
            </TextStyle>
          )
        )}
      </View>
    </View>
  );
}

export default function Express() {
  const { course } = useContext(StudentContext);
  const [showCarreras, setShowCarreras] = useState(false);
  return (
    <ScheduleProvider>
      <View style={styles.container}>
        <ExpressHeader
          action={() => {
            setShowCarreras(!showCarreras);
          }}
          showCarreras={showCarreras}
        />
        <View style={styles.content}>
          {showCarreras && (
            <Carreras
              carreraStudent={{
                name: course.name.toUpperCase(),
                sis: course.sis,
              }}
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
    borderColor: theme.colors.white,
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
