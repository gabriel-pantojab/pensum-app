import { useContext, useEffect, useState } from "react";
import { StudentContext } from "../../context/studentContext";
import { getCarreras } from "../../../firebaseconfig";
import { Pressable, View, StyleSheet } from "react-native";
import Career from "./offer/Career";
import TextStyle from "../TextStyle";
import CaretDownIcon from "../icons/CaretDownIcon";
import CaretUpIcon from "../icons/CaretUpIcon";
import { theme } from "../../theme";
import Loading from "../Loading";

export default function CareersList({ carreraStudent }) {
  const [showOthersCareers, setShowOthersCareers] = useState(false);
  const { course } = useContext(StudentContext);
  const [carreras, setCarreras] = useState([]);
  const [stateFechingCareers, setStateFechingCareers] = useState(false);
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
    <View style={styles.menu}>
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
          <TextStyle style={{ ...styles.carrera }}>Otras Carreras</TextStyle>
          {showOthersCareers ? (
            <CaretUpIcon color={theme.colors.black} width={15} height={15} />
          ) : (
            <CaretDownIcon color={theme.colors.black} width={15} height={15} />
          )}
        </Pressable>
        {showOthersCareers &&
          (stateFechingCareers ? (
            <Loading large="small" />
          ) : carreras.length > 0 ? (
            <View>
              {carreras.map((carrera) => (
                <Career
                  name={carrera.nombre}
                  sis={carrera.sis}
                  key={carrera.sis}
                />
              ))}
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
    fontSize: 15,
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
