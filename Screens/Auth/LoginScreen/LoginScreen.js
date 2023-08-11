import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Btn from "../../../Components/Button";
import { authStyles as s } from "../authStyles";
import { useKeyboardShow } from "../../../hooks/useKeyboardShow";
import { commonStyle } from "../../../styles/commonStyle";
import KeyboardContainer from "../../../Components/KeyboardContainer";

const initValues = {
  email: "",
  password: "",
};

const initFocus = { email: false, password: false };

export default function LoginScreen({ navigation }) {
  const { isShowKeyboard, setIsShowKeyboard } = useKeyboardShow();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [values, setValues] = useState(initValues);
  const [hasFocus, setHasFocus] = useState(initFocus);

  const onChangeText = (value, name) => {
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onInputFocus = (name) => {
    setIsShowKeyboard(true);
    setHasFocus((p) => ({ ...p, [name]: true }));
  };

  const onInputBlur = (name) => {
    setHasFocus((p) => ({ ...p, [name]: false }));
  };

  const onPressSubmitBtn = () => {
    const { email, password } = values;
    if (email === "" || password === "") {
      alert("Email та Password повинні бути заповнені.");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    setValues(initValues);
  };

  return (
    <KeyboardContainer>
      <View style={styles.container}>
        <ImageBackground style={styles.bg} source={require("../../../image/background.jpg")}>
          <View style={[styles.inner, { paddingBottom: isShowKeyboard ? 32 : 144 }]}>
            <Text style={[commonStyle.title]}>Увійти</Text>
            <View style={[s.inputWrapper, hasFocus.email && s.inputWrapperFocus, { marginBottom: 16 }]}>
              <TextInput
                style={s.input}
                textContentType="emailAddress"
                placeholder="Адреса електроної пошти"
                value={values.email}
                onChangeText={(v) => onChangeText(v, "email")}
                onFocus={() => onInputFocus("email")}
                onBlur={() => onInputBlur("email")}
              />
            </View>
            <View
              style={[s.inputWrapper, hasFocus.password && s.inputWrapperFocus, { marginBottom: isShowKeyboard ? 0 : 43 }]}
            >
              <View style={{ flex: 4 }}>
                <TextInput
                  style={s.input}
                  secureTextEntry={!isShowPassword}
                  placeholder="Пароль"
                  value={values.password}
                  onChangeText={(v) => onChangeText(v, "password")}
                  onFocus={() => onInputFocus("password")}
                  onBlur={() => onInputBlur("password")}
                />
              </View>
              <View>
                <TouchableOpacity style={s.btnInput} onPress={() => setIsShowPassword((p) => !p)}>
                  <Text style={s.btnInputText}>Показати пароль</Text>
                </TouchableOpacity>
              </View>
            </View>
            {!isShowKeyboard && (
              <>
                <View style={{ marginBottom: 16 }}>
                  <Btn onPress={onPressSubmitBtn} text="Увійти" />
                </View>

                <Text style={s.text}>
                  Немає акаунта? <Text onPress={() => navigation.navigate("registration")}>Зареєструватись</Text>
                </Text>
              </>
            )}
          </View>
        </ImageBackground>
      </View>
    </KeyboardContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  inner: {
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 111,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
