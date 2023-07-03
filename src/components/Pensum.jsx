import { View, Text, StyleSheet, FlatList } from "react-native";
import { levels } from "../model/mockups";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  level: {
    position: "relative",
    borderWidth: 2,
    paddingVertical: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  progress: {
    alignSelf: "flex-start",
    position: "absolute",
    top: 0,
    bottom: 0,
    backgroundColor: "green",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  titleLevel: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

function Level({ name, progress }) {
  return (
    <View style={styles.level}>
      <View
        style={{
          ...styles.progress,
          width: `${progress}%`,
          borderBottomRightRadius: progress === 100 ? 8 : 0,
          borderTopRightRadius: progress === 100 ? 8 : 0,
        }}
      ></View>
      <Text style={styles.titleLevel}>{name}</Text>
    </View>
  );
}

export default function Pensum() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Licenciatura en Ing. Informática</Text>
      <FlatList
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        data={levels}
        renderItem={({ item }) => (
          <Level key={item.id} progress={item.progress} name={item.name} />
        )}
      />
    </View>
  );
}
