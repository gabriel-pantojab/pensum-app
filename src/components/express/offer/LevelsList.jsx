import { View, FlatList } from "react-native";
import Level from "./Level";

export default function LevelsList({ levels, sisCarrera }) {
  return (
    <View>
      <FlatList
        initialNumToRender={3}
        data={levels}
        renderItem={({ item }) => (
          <Level
            key={item.nobreNivel}
            name={item.nombreNivel}
            sisCarrera={sisCarrera}
          />
        )}
        keyExtractor={(item) => item.nombreNivel}
      />
    </View>
  );
}
