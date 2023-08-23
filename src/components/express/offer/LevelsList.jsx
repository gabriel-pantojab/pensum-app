import { View } from "react-native";
import Level from "./Level";

export default function LevelsList({ levels, sisCarrera }) {
  return (
    <View>
      {levels.map((item) => (
        <Level
          key={item.nombreNivel}
          name={item.nombreNivel}
          sisCarrera={sisCarrera}
        />
      ))}
    </View>
  );
}
