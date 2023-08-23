import { Pressable, View, StyleSheet } from "react-native";
import TextStyle from "../../TextStyle";
import useFetchOffer from "../../../hooks/useFetchOffer";
import { getMateriasNivelCarrera } from "../../../../firebaseconfig";
import Subject from "./Subject";
import { theme } from "../../../theme";
import CaretDownIcon from "../../icons/CaretDownIcon";
import CaretUpIcon from "../../icons/CaretUpIcon";
import Loading from "../../Loading";

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
        style={{ ...styles.level, borderBottomWidth: showOffer ? 1 : 0 }}
        onPress={() => {
          setShowOffer(!showOffer);
        }}
      >
        <TextStyle style={styles.nameLevel}>NIVEL: {name}</TextStyle>
        {showOffer && offer ? (
          <CaretUpIcon color={theme.colors.black} width={15} height={15} />
        ) : (
          <CaretDownIcon color={theme.colors.black} width={15} height={15} />
        )}
      </Pressable>
      {showOffer &&
        (offer && offer.materias ? (
          <View>
            {offer.materias.map((item) => (
              <Subject
                key={item.sis}
                name={item.nombreMateria}
                nivel={name.trim()}
                sisSubject={item.sis}
                sisCarrera={sisCarrera}
              />
            ))}
          </View>
        ) : (
          <Loading large="small" />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: theme.colors.black,
    borderRadius: 5,
  },
  level: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    padding: 13,
  },
  nameLevel: {
    color: theme.colors.black,
    fontSize: 12,
  },
});
