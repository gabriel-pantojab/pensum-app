import { Pressable, View, StyleSheet } from "react-native";
import TextStyle from "../../TextStyle";
import Group from "./Group";
import { getGruposCarreraNivelMateria } from "../../../../firebaseconfig";
import { theme } from "../../../theme";
import CaretDownIcon from "../../icons/CaretDownIcon";
import CaretUpIcon from "../../icons/CaretUpIcon";
import useFetchOffer from "../../../hooks/useFetchOffer";
import Loading from "../../Loading";

export default function Subject({ name, nivel, sisSubject, sisCarrera }) {
  const getData = async () => {
    const data = await getGruposCarreraNivelMateria({
      sisCarrera,
      nivel,
      materia: name,
    });
    return data;
  };
  const { offer, setShowOffer, showOffer } = useFetchOffer({ getData });
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.subject}
        onPress={() => setShowOffer(!showOffer)}
      >
        <TextStyle style={styles.nameSubject}>{name}</TextStyle>
        {showOffer && offer && offer.grupos ? (
          <CaretUpIcon color={theme.colors.black} width={15} height={15} />
        ) : (
          <CaretDownIcon color={theme.colors.black} width={15} height={15} />
        )}
      </Pressable>
      <View
        style={{
          marginTop: 5,
        }}
      >
        {showOffer &&
          (offer && offer.grupos ? (
            offer.grupos.map((item) => {
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
                    sis: sisSubject,
                  }}
                />
              );
            })
          ) : (
            <Loading large="small" />
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colors.black,
    marginRight: 10,
    marginLeft: 10,
    marginVertical: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    // gap: 10,
  },
  subject: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  nameSubject: {
    fontSize: 12,
    color: theme.colors.black,
  },
});
