import CameraIcon from "./svg/CameraIcon";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

export default function CameraBtn({ isEdit, ...other }) {
  return (
    <TouchableOpacity style={[s.container, isEdit && s.containerEdit]} {...other}>
      <CameraIcon style={s.icon} color={isEdit ? "#ffffff" : "#BDBDBD"} />
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "#ffffff",
    borderRadius: 100,
  },
  containerEdit: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  icon: {
    position: "absolute",
    width: 24,
    height: 24,
  },
});
