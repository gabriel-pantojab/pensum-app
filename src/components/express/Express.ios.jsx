import { View, StyleSheet, FlatList, Dimensions, Button } from "react-native";
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
import { useDeviceOrientation } from "@react-native-community/hooks";
import { theme } from "../../theme";
import TextStyle from "../TextStyle";

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
        <TextStyle
          style={{
            color: "green",
            fontSize: 10,
          }}
        >
          {mensaje}
        </TextStyle>
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
        <TextStyle style={styles.title}>Carreras</TextStyle>
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

function Carrera({ name, sis }) {
  const getData = async () => {
    const data = await getNiveles({ sisCarrera: sis });
    return data;
  };
  const { offer, setShowOffer, showOffer } = useFetchOffer({
    getData,
  });

  return (
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
        onPress={() => setShowOffer(!showOffer)}
      >
        <TextStyle style={styles.carrera}>{name}</TextStyle>
        {showOffer && offer ? (
          <CaretUpIcon color={theme.colors.white} width={15} height={15} />
        ) : (
          <CaretDownIcon color={theme.colors.white} width={15} height={15} />
        )}
      </Pressable>
      {showOffer && offer && (
        <LevelsList
          levels={offer.niveles}
          nameCarrera={name}
          sisCarrera={sis}
        />
      )}
    </View>
  );
}

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
            <Carrera name={item.nombre} sis={item.sis} />
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

function ExpressHeader({ action, showCarreras }) {
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
      <CarrerasOption showCarreras={action} showCarrerasValue={showCarreras} />
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
          <TimeTableExpress />
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
