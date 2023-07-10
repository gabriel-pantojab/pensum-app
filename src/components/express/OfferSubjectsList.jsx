import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import CaretDownIcon from "../icons/CaretDownIcon";
import useFetchOffer from "../../hooks/useFetchOffer";
import useLoading from "../../hooks/useLoading";
import { IP } from "../../../constants";
import CheckBox from "./CheckBox";
import CaretUpIcon from "../icons/CaretUpIcon";

export const levels = [
  {
    nombreNivel: "",
    materias: [
      {
        nombreMateria: "",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "Leticia",
              horarios: [{ dia: "", hora: "", aula: "" }],
            },
            auxiliar: {
              nombre: "",
              horarios: [{ dia: "", hora: "", aula: "" }],
            },
          },
        ],
      },
    ],
  },
  {
    nombreNivel: "",
    materias: [
      {
        nombreMateria: "",
        grupos: [
          {
            grupo: "1",
            titular: {
              docente: "",
              horarios: [{ dia: "", hora: "", aula: "" }],
            },
            auxiliar: {
              nombre: "",
              horarios: [{ dia: "", hora: "", aula: "" }],
            },
          },
        ],
      },
    ],
  },
];

function Group({ group, teacher }) {
  const stylesGroup = StyleSheet.create({
    container: {
      borderColor: "#fff",
      marginRight: 20,
      marginLeft: 20,
      paddingVertical: 3,
    },
    group: {
      fontSize: 11,
      color: "#fff",
    },
  });
  const [checked, setChecked] = useState(false);
  return (
    <View style={stylesGroup.container}>
      <CheckBox
        width={13}
        value={checked}
        onChange={() => setChecked(!checked)}
      >
        <Text style={stylesGroup.group}>
          G:{group} {teacher}
        </Text>
      </CheckBox>
    </View>
  );
}

//TODO: REVISAR COMO ESTAN LLEGANDO LOS DATOS PARA RENDERIZAR DOCENTE Y AUXILIAR
function Subject({ name, carrera, nivel }) {
  const stylesSubject = StyleSheet.create({
    container: {
      borderBottomWidth: 1,
      borderColor: "#fff",
      marginRight: 20,
      marginLeft: 20,
      marginVertical: 5,
      paddingHorizontal: 3,
    },
    subject: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
    },
    nameSubject: {
      fontSize: 11,
      fontWeight: "bold",
      color: "#fff",
    },
  });
  const URL = `http://${IP}:3000/carreras/${carrera
    .split(" ")
    .join("")
    .trim()}/${nivel}/${name.trim()}/grupos`;
  const { offer, setShowOffer, showOffer } = useFetchOffer({ url: URL });
  return (
    <View style={stylesSubject.container}>
      <Pressable
        style={stylesSubject.subject}
        onPress={() => setShowOffer(!showOffer)}
      >
        <Text style={stylesSubject.nameSubject}>{name}</Text>
        {showOffer && offer ? (
          <CaretUpIcon color="#fff" width={15} height={15} />
        ) : (
          <CaretDownIcon color="#fff" width={15} height={15} />
        )}
      </Pressable>
      <View>
        {showOffer && offer && (
          <FlatList
            initialNumToRender={1}
            data={offer.grupos}
            renderItem={({ item }) => {
              const nameTeacher =
                item.titular.docente != ""
                  ? item.titular.docente
                  : item.auxiliar.nombre;
              return (
                <Group
                  key={item.grupo}
                  group={item.grupo}
                  teacher={nameTeacher}
                />
              );
            }}
          />
        )}
      </View>
    </View>
  );
}

function Level({ name, carrera }) {
  const stylesLevel = StyleSheet.create({
    container: {
      marginLeft: 20,
      marginRight: 20,
      marginVertical: 5,
      borderWidth: 1,
      borderColor: "#fff",
      borderRadius: 5,
      padding: 3,
    },
    level: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      padding: 3,
    },
    nameLevel: {
      color: "#fff",
      fontSize: 10,
      fontWeight: "bold",
      borderBottomWidth: 1,
      borderColor: "#fff",
    },
  });
  const URL = `http://${IP}:3000/carreras/${carrera
    .split(" ")
    .join("")
    .trim()}/niveles/${name}/materias`;
  const { offer, showOffer, setShowOffer } = useFetchOffer({ url: URL });
  return (
    <View style={stylesLevel.container}>
      <Pressable
        style={stylesLevel.level}
        onPress={() => {
          setShowOffer(!showOffer);
        }}
      >
        <Text style={stylesLevel.nameLevel}>NIVEL: {name}</Text>
        {showOffer && offer ? (
          <CaretUpIcon color="#fff" width={15} height={15} />
        ) : (
          <CaretDownIcon color="#fff" width={15} height={15} />
        )}
      </Pressable>
      {showOffer && offer && (
        <View>
          <FlatList
            data={offer.materias}
            renderItem={({ item }) => (
              <Subject
                key={item.nombreMateria}
                name={item.nombreMateria}
                nivel={name.trim()}
                carrera={carrera}
              />
            )}
            keyExtractor={(item) => item.nombreMateria}
          />
        </View>
      )}
    </View>
  );
}

export default function LevelsList({ levels, nameCarrera }) {
  return (
    <View>
      <FlatList
        initialNumToRender={3}
        data={levels}
        renderItem={({ item }) => (
          <Level
            key={item.nobreNivel}
            name={item.nombreNivel}
            carrera={nameCarrera}
          />
        )}
        keyExtractor={(item) => item.nombreNivel}
      />
    </View>
  );
}
