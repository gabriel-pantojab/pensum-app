import { View } from "react-native";
import { statesSubject } from "../../utils/utils";
import StateSubject from "./StateSubject";

export default function StatesSubject() {
  const states = Object.values(statesSubject);
  return (
    <View>
      {states.map((state, index) => (
        <StateSubject key={index} state={state} />
      ))}
    </View>
  );
}
