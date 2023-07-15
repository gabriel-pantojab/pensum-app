import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Button,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { Pressable } from "react-native";
import CaretDownIcon from "../icons/CaretDownIcon";
import { useContext, useEffect, useState } from "react";
import useLoading from "../../hooks/useLoading";
import LevelsList from "./OfferSubjectsList";
import useFetchOffer from "../../hooks/useFetchOffer";
import CaretUpIcon from "../icons/CaretUpIcon";
import TimeTableExpress from "./TimeTableExpress";
import ScheduleProvider, { ScheduleContext } from "./context/scheduleContext";
import { removeSchedule, saveSchedule } from "../../storage/storage";
import Loading from "../Loading";
import CheckIcon from "../icons/CheckIcon";
import { getCarreras, getNiveles } from "../../../firebaseconfig";

function useEjecutando() {
  const [ejecutando, setEjecutando] = useState(false);
  const [ejecutado, setEjecutado] = useState(false);

  const init = () => {
    setEjecutando(true);
    setEjecutado(false);
  };

  const finish = () => {
    setTimeout(() => {
      setEjecutando(false);
      setEjecutado(true);
      setTimeout(() => {
        setEjecutado(false);
      }, 500);
    }, 500);
  };
  return { init, finish, ejecutando, ejecutado };
}

function Ejecutando({ ejecutando, ejecutado, mensaje }) {
  if (!ejecutando && !ejecutado) return;
  if (ejecutando) return <Loading />;
  if (ejecutado)
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 3,
          backgroundColor: "#f9faf5",
          padding: 3,
          borderRadius: 5,
        }}
      >
        <CheckIcon width={10} height={10} color="green" />
        <Text
          style={{
            color: "green",
            fontSize: 10,
          }}
        >
          {mensaje}
        </Text>
      </View>
    );
}

function CarrerasOption({ showCarreras, showCarrerasValue }) {
  const {
    schedule,
    minPeriod,
    maxPeriod,
    selectedSubjects,
    colorsSubjects,
    clear,
  } = useContext(ScheduleContext);
  const { ejecutando, ejecutado, init, finish } = useEjecutando();
  const [sms, setSms] = useState("");
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
      }}
    >
      <Pressable style={styles.options} onPress={showCarreras}>
        <Text style={styles.title}>Carreras</Text>
        {showCarrerasValue ? (
          <CaretUpIcon color="#fff" width={15} height={15} />
        ) : (
          <CaretDownIcon color="#fff" width={15} height={15} />
        )}
      </Pressable>
      <Button
        onPress={() => {
          setSms("Guardado");
          init();
          saveSchedule({
            schedule,
            minPeriod,
            maxPeriod,
            selectedSubjects,
            colorsSubjects,
          }).then(() => {
            finish();
          });
        }}
        title="Guardar"
      />
      <Button
        onPress={() => {
          setSms("Limpiado");
          init();
          removeSchedule().then(() => {
            clear();
            finish();
          });
        }}
        title="Limpiar"
      />
      <Ejecutando ejecutando={ejecutando} ejecutado={ejecutado} mensaje={sms} />
    </View>
  );
}

function Carrera({ name }) {
  const getData = async () => {
    const data = await getNiveles(name.split(" ").join("").trim());
    return data;
  };
  const { offer, setShowOffer, showOffer } = useFetchOffer({
    getData,
  });

  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: "#fff",
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onPress={() => setShowOffer(!showOffer)}
      >
        <Text style={styles.carrera}>{name}</Text>
        {showOffer && offer ? (
          <CaretUpIcon color="#fff" width={15} height={15} />
        ) : (
          <CaretDownIcon color="#fff" width={15} height={15} />
        )}
      </Pressable>
      {showOffer && offer && (
        <LevelsList levels={offer.niveles} nameCarrera={name} />
      )}
    </View>
  );
}

function Carreras({ carreras, loading, finishedRender }) {
  return (
    <View style={styles.menu} onLayout={finishedRender}>
      {carreras.length ? (
        <FlatList
          initialNumToRender={5}
          data={carreras}
          renderItem={({ item }) => <Carrera name={item} />}
          keyExtractor={(item) => item}
          ListFooterComponent={loading}
        />
      ) : (
        <Text style={styles.carrera}>No hay carreras disponibles</Text>
      )}
    </View>
  );
}

function ExpressHeader({ action, showCarreras }) {
  return (
    <View style={styles.header}>
      <ScrollView
        horizontal
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "space-between",
          gap: 30,
        }}
      >
        <CarrerasOption
          showCarreras={action}
          showCarrerasValue={showCarreras}
        />
        <Text style={styles.title}>
          Express - Gestión {new Date().getFullYear()}
        </Text>
      </ScrollView>
    </View>
  );
}

export default function Express() {
  const [carreras, setCarreras] = useState([]);
  const [showCarreras, setShowCarreras] = useState(false);
  const { loading, finishedRender, initLoading } = useLoading();
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
      <View style={styles.container}>
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
          <TimeTableExpress />
        </View>
      </View>
    </ScheduleProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#ccc",
  },
  header: {
    position: "relative",
    flexDirection: "row",
    backgroundColor: "#24263e",
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  options: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "#999",
    maxWidth: 85,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
  },
  menu: {
    backgroundColor: "#999",
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
    color: "#fff",
    padding: 5,
    fontWeight: "bold",
    fontSize: 10,
    marginBottom: 5,
  },
});
