import { FlatList, Pressable, View, StyleSheet } from "react-native";
import TextStyle from "../../TextStyle";
import useFetchOffer from "../../../hooks/useFetchOffer";
import { getMateriasNivelCarrera } from "../../../../firebaseconfig";
import Subject from "./Subject";
import { theme } from "../../../theme";
import CaretDownIcon from "../../icons/CaretDownIcon";
import CaretUpIcon from "../../icons/CaretUpIcon";

export default function Level({ name, sisCarrera }) {
  const getData = async () => {
    const data = await getMateriasNivelCarrera({
      sisCarrera,
      nivel: name,
    });
    return data;
  };
  const { offer, showOffer, setShowOffer } = useFetchOffer({
    getData,
  });
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.level}
        onPress={() => {
          setShowOffer(!showOffer);
        }}
      >
        <TextStyle style={styles.nameLevel}>NIVEL: {name}</TextStyle>
        {showOffer && offer ? (
          <CaretUpIcon color={theme.colors.white} width={15} height={15} />
        ) : (
          <CaretDownIcon color={theme.colors.white} width={15} height={15} />
        )}
      </Pressable>
      {showOffer && offer && offer.materias && (
        <View>
          <FlatList
            data={offer.materias}
            renderItem={({ item }) => (
              <Subject
                key={item.nombreMateria}
                name={item.nombreMateria}
                nivel={name.trim()}
                sisSubject={item.sis}
                sisCarrera={sisCarrera}
              />
            )}
            keyExtractor={(item) => item.nombreMateria}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: theme.colors.white,
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
    color: theme.colors.white,
    fontSize: 10,
    borderBottomWidth: 1,
    borderColor: theme.colors.white,
  },
});
