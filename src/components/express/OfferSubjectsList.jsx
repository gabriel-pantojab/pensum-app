import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import CaretDownIcon from "../icons/CaretDownIcon";
import useFetchOffer from "../../hooks/useFetchOffer";
import useLoading from "../../hooks/useLoading";
import { IP } from "../../../constants";
import CheckBox from "./CheckBox";

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
  return (
    <View>
      <Text
        style={{
          flexDirection: "row",
        }}
      >
        G:{group} {teacher}
      </Text>
    </View>
  );
}

//TODO: REVISAR COMO ESTAN LLEGANDO LOS DATOS PARA RENDERIZAR DOCENTE Y AUXILIAR
function Subject({ name, groups }) {
  const stylesSubject = StyleSheet.create({
    container: {
      borderBottomWidth: 1,
      borderColor: "#fff",
      marginRight: "auto",
      marginLeft: 20,
      marginVertical: 5,
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
  return (
    <View style={stylesSubject.container}>
      <Pressable style={stylesSubject.subject}>
        <Text style={stylesSubject.nameSubject}>{name}</Text>
        <CaretDownIcon color="#fff" width={12} height={12} />
      </Pressable>
      <View>
        {/* {groups.map((group) => (
          <Group
            key={`${group.grupo}${group.titular.docente.substring(0, 3)}}`}
            group={group.grupo}
            teacher={group.titular.docente}
          />
        ))} */}
      </View>
    </View>
  );
}

function Level({ name, carrera }) {
  const stylesLevel = StyleSheet.create({
    container: {
      marginLeft: 20,
      marginRight: "auto",
      marginVertical: 5,
      borderWidth: 1,
      borderColor: "#fff",
      borderRadius: 5,
      padding: 3,
    },
    level: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    nameLevel: {
      color: "#fff",
      fontSize: 10,
      fontWeight: "bold",
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
        <CaretDownIcon color="#fff" width={15} height={15} />
      </Pressable>
      {showOffer && offer && (
        <View>
          <FlatList
            data={offer.materias}
            renderItem={({ item }) => (
              <Subject
                key={item.nombreMateria}
                name={item.nombreMateria}
                //groups={item.grupos}
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
