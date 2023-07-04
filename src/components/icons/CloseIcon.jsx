import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function CloseIcon() {
  return (
    <View>
      <Svg width="20" height="20" fill="black" viewBox="0 0 16 16">
        <Path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
      </Svg>
    </View>
  );
}
