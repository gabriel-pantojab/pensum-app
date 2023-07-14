import { useContext, useState } from "react";
import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import CaretDownIcon from "../icons/CaretDownIcon";
import useFetchOffer from "../../hooks/useFetchOffer";
import CheckBox from "./CheckBox";
import CaretUpIcon from "../icons/CaretUpIcon";
import { ScheduleContext } from "./context/scheduleContext";
import {
  getGruposCarreraNivelMateria,
  getMateriasNivelCarrera,
} from "../../../firebaseconfig";
function checkedGroup(group, schedule) {
  const dias = {
    LU: "lunes",
    MA: "martes",
    MI: "miercoles",
    JU: "jueves",
    VI: "viernes",
    SA: "sabado",
    DO: "domingo",
  };
  let horarios = [];
  if (group.titular.horarios) {
    group.titular.horarios.forEach((h) => {
      horarios.push({
        dia: dias[h.dia],
        hora: h.hora.split("-")[0].split(":").join(""),
      });
    });
  }
  if (group.auxiliar.horarios) {
    group.auxiliar.horarios.forEach((h) => {
      horarios.push({
        dia: dias[h.dia],
        hora: h.hora.split("-")[0].split(":").join(""),
      });
    });
  }
  let checked = false;
  horarios.forEach((h) => {
    if (schedule[h.dia]) {
      if (schedule[h.dia][h.hora]) {
        const s = schedule[h.dia][h.hora].subjects.find(
          (o) => o.subjectName === group.subjectName && o.group === group.grupo
        );
        if (s) {
          checked = true;
        }
      }
    }
  });
  return checked;
}
function Group({ group, teacher, infoGroup }) {
  const { addSubject, schedule } = useContext(ScheduleContext);
  const valueChecked = checkedGroup(infoGroup, schedule);
  const stylesGroup = StyleSheet.create({
    container: {
      borderColor: "#fff",
      marginRight: 10,
      marginLeft: 10,
      paddingVertical: 3,
    },
    group: {
      fontSize: 10,
      color: "#fff",
    },
  });
  const [checked, setChecked] = useState(valueChecked);
  return (
    <View style={stylesGroup.container}>
      <CheckBox
        width={13}
        value={checked}
        onChange={() => {
          addSubject(infoGroup, !checked);
          setChecked(!checked);
        }}
      >
        <Text style={stylesGroup.group}>
          G:{group} {teacher}
        </Text>
      </CheckBox>
    </View>
  );
}

function Subject({ name, carrera, nivel, sis }) {
  const stylesSubject = StyleSheet.create({
    container: {
      borderBottomWidth: 1,
      borderColor: "#fff",
      marginRight: 10,
      marginLeft: 10,
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
      fontSize: 10,
      fontWeight: "bold",
      color: "#fff",
    },
  });
  const getData = async () => {
    const data = await getGruposCarreraNivelMateria({
      carrera: carrera.split(" ").join("").trim(),
      nivel,
      materia: name,
    });
    return data;
  };
  const { offer, setShowOffer, showOffer } = useFetchOffer({ getData });
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
            style={{ gap: 5 }}
            initialNumToRender={3}
            data={offer.grupos}
            renderItem={({ item }) => {
              const nameTeacher =
                item.titular.docente != undefined
                  ? item.titular.docente
                  : item.auxiliar.nombre;
              return (
                <Group
                  key={item.grupo}
                  group={item.grupo}
                  teacher={nameTeacher}
                  infoGroup={{
                    ...item,
                    subjectName: name,
                    sis,
                  }}
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
      marginLeft: 10,
      marginRight: 10,
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
  const getData = async () => {
    const data = await getMateriasNivelCarrera({
      carrera: carrera.split(" ").join("").trim(),
      nivel: name,
    });
    return data;
  };
  const { offer, showOffer, setShowOffer } = useFetchOffer({
    getData,
  });
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
                sis={item.sis}
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
