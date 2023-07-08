import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import Constants from "expo-constants";
import { Pressable } from "react-native";
import CaretDownIcon from "../icons/CaretDownIcon";
import { useEffect, useState } from "react";
import useLoading from "../../hooks/useLoading";
import LevelsList from "./OfferSubjectsList";
import useFetchOffer from "../../hooks/useFetchOffer";

function CarrerasOption({ showCarreras }) {
  return (
    <Pressable style={styles.options} onPress={showCarreras}>
      <Text style={styles.title}>Carreras</Text>
      <CaretDownIcon color="#fff" width={15} height={15} />
    </Pressable>
  );
}

function Carrera({ name }) {
  const URL = `http://192.168.0.14:3000/carreras/${name
    .split(" ")
    .join("")}/niveles`;
  const { offer, setShowOffer, showOffer } = useFetchOffer({ url: URL });

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
        <CaretDownIcon color="#fff" width={15} height={15} />
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
      <FlatList
        initialNumToRender={5}
        data={carreras}
        renderItem={({ item }) => <Carrera name={item} />}
        keyExtractor={(item) => item}
        ListFooterComponent={loading}
      />
    </View>
  );
}

function ExpressHeader({ action }) {
  return (
    <View style={styles.header}>
      <CarrerasOption showCarreras={action} />
      <Text style={styles.title}>
        Express - Gestión {new Date().getFullYear()}
      </Text>
    </View>
  );
}

export default function Express() {
  const [carreras, setCarreras] = useState([]);
  const [showCarreras, setShowCarreras] = useState(false);
  const { loading, finishedRender, initLoading } = useLoading();
  const getCarreras = async () => {
    try {
      const res = await fetch("http://192.168.0.14:3000/carreras");
      const data = await res.json();
      setCarreras(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getCarreras();
  }, []);
  return (
    <View style={styles.container}>
      <ExpressHeader
        action={() => {
          initLoading(true);
          setShowCarreras(!showCarreras);
        }}
      />
      <View style={styles.content}>
        {showCarreras && (
          <Carreras
            carreras={carreras}
            loading={loading}
            finishedRender={finishedRender}
          />
        )}
        <View>
          <Text>Express</Text>
        </View>
      </View>
    </View>
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
    borderRightWidth: 1,
    borderBottomWidth: 1,
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
    fontSize: 12,
    marginBottom: 5,
  },
});
