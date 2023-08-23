import { useContext, useEffect, useState } from "react";
import useLoading from "../../hooks/useLoading";
import { StudentContext } from "../../context/studentContext";
import { getCarreras } from "../../../firebaseconfig";
import {
  FlatList,
  Pressable,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import Career from "./offer/Career";
import TextStyle from "../TextStyle";
import CaretDownIcon from "../icons/CaretDownIcon";
import CaretUpIcon from "../icons/CaretUpIcon";
import { theme } from "../../theme";
import Constants from "expo-constants";
import { useDeviceOrientation } from "@react-native-community/hooks";
import Loading from "../Loading";

export default function CareersList({ carreraStudent }) {
  const [showOthersCareers, setShowOthersCareers] = useState(false);
  const { course } = useContext(StudentContext);
  const [carreras, setCarreras] = useState([]);
  const [stateFechingCareers, setStateFechingCareers] = useState(false);
  const { loading, finishedRender, initLoading } = useLoading();
  const orientation = useDeviceOrientation();

  const styMenu = [
    styles.menu,
    orientation === "landscape" && {
      marginLeft: Constants.statusBarHeight,
    },
  ];

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
      setStateFechingCareers(true);
      getCarrerasDB().then((data) => {
        setStateFechingCareers(false);
        if (data) {
          const carreras = data.filter((carrera) => carrera.sis !== course.sis);
          setCarreras(carreras);
        } else setCarreras([]);
      });
    }
  }, [showOthersCareers]);
  return (
    <View style={styMenu}>
      <Career
        name={carreraStudent.name}
        sis={carreraStudent.sis}
        key={carreraStudent.sis}
      />
      <View style={styles.careers}>
        <Pressable
          style={{
            ...styles.btn_careers,
            borderBottomWidth: showOthersCareers ? 1 : 0,
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
        {showOthersCareers &&
          (stateFechingCareers ? (
            <Loading large="small" />
          ) : carreras.length ? (
            <View onLayout={finishedRender}>
              <FlatList
                initialNumToRender={5}
                data={carreras}
                renderItem={({ item }) => (
                  <Career name={item.nombre} sis={item.sis} />
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
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    borderTopWidth: 1,
    backgroundColor: theme.colors.white,
    minHeight: 100,
    padding: 5,
    paddingBottom: 50,
  },
  carrera: {
    color: theme.colors.black,
    padding: 5,
    fontSize: 10,
    marginBottom: 5,
  },
  careers: {
    borderBottomWidth: 1,
    borderColor: theme.colors.black,
  },
  btn_careers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
