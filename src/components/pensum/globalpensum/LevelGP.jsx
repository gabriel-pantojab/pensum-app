import { View, StyleSheet } from "react-native";
import TextStyle from "../../TextStyle";
import SubjectGP from "./SubjectGP";

export default function LevelGP({ name, subjects }) {
  return (
    <View style={styles.level}>
      <View style={styles.nameLevel}>
        <TextStyle>{name}</TextStyle>
      </View>
      <View style={styles.subjects}>
        {subjects.map((s) => {
          return <SubjectGP key={s.sis} name={s.name} state={s.state} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  level: {
    width: "100%",
    minWidth: "100%",
    maxWidth: "100%",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#279EFF",
    borderRadius: 5,
    padding: 5,
    paddingLeft: 0,
  },
  nameLevel: {
    width: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 3,
  },
  subjects: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
});
