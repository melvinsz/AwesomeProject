import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Btn({ onPress, text, disabled }) {
  const onPressBtn = () => {
    if (disabled) return;
    onPress();
  };

  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.7}
      style={[style.btn, disabled && style.btnDisabled]}
      onPress={onPressBtn}
    >
      <Text style={[style.text, disabled && style.textDisabled]}>{text}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  btn: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  btnDisabled: {
    backgroundColor: "#F6F6F6",
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    alignItems: "center",
    color: "#ffffff",
  },
  textDisabled: {
    color: "#BDBDBD",
  },
});
