import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function MenuIcon() {
  return (
    <View>
      <Svg width="20" height="20" fill="black" viewBox="0 0 16 16">
        <Path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </Svg>
    </View>
  );
}
