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

export default function CareersList({ carreraStudent }) {
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
      <View style={styles.careers}>
        <Pressable
          style={styles.btn_careers}
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
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: "#ccc",
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderBottomRightRadius: 5,
    borderColor: theme.colors.white,
    maxHeight: Dimensions.get("window").height - Constants.statusBarHeight,
    padding: 5,
  },
  carrera: {
    color: theme.colors.white,
    padding: 5,
    fontSize: 10,
    marginBottom: 5,
  },
  careers: {
    borderBottomWidth: 1,
    borderColor: theme.colors.white,
  },
  btn_careers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
