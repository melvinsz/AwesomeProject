import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import AddIcon from "./svg/AddIcon";
import DeleteIcon from "./svg/DeleteIcon";

export default function Avatar({ avatarImg, setAvatarImg }) {
  const addImage = () => {};

  const deleteImage = () => {};

  return (
    <View style={style.container}>
      {avatarImg ? (
        <Image style={style.img} source={{ uri: avatarImg }} />
      ) : (
        <TouchableOpacity style={style.btn} onPress={addImage}>
          <AddIcon />
        </TouchableOpacity>
      )}
      {avatarImg && (
        <TouchableOpacity style={style.deleteBtn} onPress={deleteImage}>
          <DeleteIcon />
        </TouchableOpacity>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    position: "relative",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    resizeMode: "cover",
  },
  btn: {
    position: "absolute",
    right: -12,
    bottom: 14,
    width: 25,
    height: 25,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
});
