import { FlatList, Pressable, View, StyleSheet } from "react-native";
import TextStyle from "../../TextStyle";
import Group from "./Group";
import { getGruposCarreraNivelMateria } from "../../../../firebaseconfig";
import { theme } from "../../../theme";
import CaretDownIcon from "../../icons/CaretDownIcon";
import CaretUpIcon from "../../icons/CaretUpIcon";
import useFetchOffer from "../../../hooks/useFetchOffer";

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
          <CaretUpIcon color={theme.colors.white} width={15} height={15} />
        ) : (
          <CaretDownIcon color={theme.colors.white} width={15} height={15} />
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
                    sis: sisSubject,
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

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: theme.colors.white,
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
    color: theme.colors.white,
  },
});
