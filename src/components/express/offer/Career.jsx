import { Pressable, View, StyleSheet } from "react-native";
import { getNiveles } from "../../../../firebaseconfig";
import useFetchOffer from "../../../hooks/useFetchOffer";
import TextStyle from "../../TextStyle";
import CaretDownIcon from "../../icons/CaretDownIcon";
import CaretUpIcon from "../../icons/CaretUpIcon";
import LevelsList from "./LevelsList";
import { theme } from "../../../theme";
import Loading from "../../Loading";

export default function Career({ name, sis }) {
  const getData = async () => {
    const data = await getNiveles({ sisCarrera: sis });
    return data;
  };

  const { offer, setShowOffer, showOffer } = useFetchOffer({
    getData,
  });

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.content}
        onPress={() => {
          setShowOffer(!showOffer);
        }}
      >
        <TextStyle style={styles.carrera}>{name}</TextStyle>
        {showOffer && offer && offer.niveles ? (
          <CaretUpIcon color={theme.colors.black} width={15} height={15} />
        ) : (
          <CaretDownIcon color={theme.colors.black} width={15} height={15} />
        )}
      </Pressable>
      {showOffer &&
        (offer && offer.niveles ? (
          <LevelsList levels={offer.niveles} sisCarrera={sis} />
        ) : (
          <Loading large="small" />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: theme.colors.black,
    padding: 5,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  carrera: {
    color: theme.colors.black,
    padding: 5,
    fontSize: 12,
    marginBottom: 5,
  },
});
