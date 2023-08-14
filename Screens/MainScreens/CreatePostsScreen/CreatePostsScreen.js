import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";

const CreatePostsScreen = () => {
  const [photo, setPhoto] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const [name, setName] = useState("");
  const [locality, setLocality] = useState("");

  const [isKeyboard, setIsKeyboard] = useState(false);

  const KeyboardHide = () => {
    setIsKeyboard(false);
    Keyboard.dismiss();
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <TouchableWithoutFeedback onPress={KeyboardHide}>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <ScrollView style={styles.container}>
          <View style={styles.cameraView}>
            <View style={styles.photoView}>
              <TouchableOpacity>
                <Image source={require("../../../assets/camera-black.png")} style={{ width: 24, height: 24 }} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.toggleText}>Завантажте фото</Text>
          <SafeAreaView style={styles.form}>
            <TextInput
              style={[styles.input, styles.inputContainer, isFocused && styles.inputFocused]}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChangeText={setName}
              value={name}
              placeholder="Назва..."
              placeholderTextColor="#BDBDBD"
            />
            <View style={styles.inputContainer}>
              <Image source={require("../../../assets/map-pin.png")} style={{ width: 24, height: 24 }} />
              <TextInput
                style={[styles.input, isFocused && styles.inputFocused]}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={setLocality}
                value={locality}
                placeholder="Місцевість..."
                placeholderTextColor="#BDBDBD"
              />
            </View>
            <TouchableOpacity style={photo ? styles.btn : { ...styles.btn, backgroundColor: "#F6F6F6" }}>
              <Text style={photo ? styles.btnTitle : { ...styles.btnTitle, color: "#BDBDBD" }}>Опублікувати</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setName("");
                setLocality("");
                setPhoto(null);
              }}
              style={styles.btnTrash}
            >
              <Image source={require("../../../assets/trash.png")} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
            {!isKeyboard && <View style={styles.indicator}></View>}
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },
  cameraView: {
    height: 200,
    marginTop: 32,
    borderRadius: 8,
    overflow: "hidden",
  },
  camera: {
    flex: 1,
  },
  photoView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  button: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
  },
  toggleText: {
    marginTop: 8,
    fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 19,
  },
  form: {
    width: "100%",
    height: 409,
    marginTop: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  input: {
    height: 50,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  inputFocused: {
    color: "#212121",
  },
  btn: {
    height: 50,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  btnTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  btnTrash: {
    marginTop: 80,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
  indicator: {
    marginTop: 21,
    marginLeft: "auto",
    marginRight: "auto",
    width: 134,
    height: 5,
    backgroundColor: "#212121",
  },
});

export default CreatePostsScreen;
