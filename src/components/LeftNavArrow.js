import { TouchableOpacity } from "react-native";
import ArrowLeftIcon from "./svg/ArrowLeftIcon";
import { useNavigation } from "@react-navigation/native";

export default function LeftNavArrow(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.goBack();
      }}
      style={{
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 16,
      }}
    >
      <ArrowLeftIcon {...props} />
    </TouchableOpacity>
  );
}
