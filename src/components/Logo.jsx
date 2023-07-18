import { View } from "react-native";
import BGLogo from "./icons/BGLogo";
import Birrete from "./icons/Birrete";

export default function Logo({
  widthBG = 163,
  heightBG = 134,
  widthBirrete = 45,
  heightBirrete = 45,
  topBirrete = 35,
  leftBirrete = 23,
  rigthBirrete = 0,
  bottomBirrete = 0,
}) {
  const styCont = {
    position: "relative",
  };
  return (
    <View style={styCont}>
      <BGLogo width={widthBG} height={heightBG} />
      <View
        style={{
          position: "absolute",
          top: topBirrete,
          left: leftBirrete,
          right: rigthBirrete,
          bottom: bottomBirrete,
        }}
      >
        <Birrete color={"white"} width={widthBirrete} height={heightBirrete} />
      </View>
    </View>
  );
}
