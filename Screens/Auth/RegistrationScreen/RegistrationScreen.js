import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Btn from "../../../Components/Button";
import { authStyles as s } from "../authStyles";
import Avatar from "../../../Components/Avatar";
import { useKeyboardShow } from "../../../hooks/useKeyboardShow";
import { commonStyle } from "../../../styles/commonStyle";
import KeyboardContainer from "../../../Components/KeyboardContainer";

const initValues = {
  email: "",
  password: "",
  nickname: "",
};

const initFocus = { email: false, password: false, nickname: false };

export default function RegistrationScreen({ navigation }) {
  const { isShowKeyboard, setIsShowKeyboard } = useKeyboardShow();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [values, setValues] = useState(initValues);
  const [avatarImg, setAvatarImg] = useState("");
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
    const { email, password, nickname } = values;

    // if (avatarImg === "") {
    //   alert("Avatar повинен бути заповнений");
    //   console.log("onPressSubmitBtn");
    //   return;
    // }
    if (email === "" || password === "" || nickname === "") {
      alert("Email, Password та Nickname повинні бути заповнені.");
      return;
    }
    console.log("Nickname:", nickname);
    console.log("Email:", email);
    console.log("Password:", password);
    setValues(initValues);
    navigation.navigate("HomeScreen");
  };

  return (
    <KeyboardContainer>
      <ImageBackground style={styles.bg} source={require("../../../image/background.jpg")}>
        <View style={[styles.inner, { paddingBottom: isShowKeyboard ? 32 : 78 }]}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatar}>
              <Avatar avatarImg={avatarImg} setAvatarImg={setAvatarImg} />
            </View>
          </View>

          <Text style={[commonStyle.title]}>Реєстрація</Text>
          <View style={[s.inputWrapper, hasFocus.nickname && s.inputWrapperFocus, { marginBottom: 16 }]}>
            <TextInput
              style={s.input}
              placeholder="Логін"
              value={values.nickname}
              onChangeText={(v) => onChangeText(v, "nickname")}
              onFocus={() => onInputFocus("nickname")}
              onBlur={() => onInputBlur("nickname")}
            />
          </View>
          <View style={[s.inputWrapper, hasFocus.email && s.inputWrapperFocus, { marginBottom: 16 }]}>
            <TextInput
              style={s.input}
              autoComplete="email"
              keyboardType="email-address"
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
              <TouchableOpacity style={s.btnInput} activeOpacity={0.5} onPress={() => setIsShowPassword((p) => !p)}>
                <Text style={s.btnInputText}>Показати</Text>
              </TouchableOpacity>
            </View>
          </View>
          {!isShowKeyboard && (
            <>
              <View style={{ marginBottom: 16 }}>
                <Btn onPress={onPressSubmitBtn} text="Зареєструватись" />
              </View>

              <Text style={s.text}>
                Вже є акаунт? <Text onPress={() => navigation.navigate("login")}>Увійти</Text>
              </Text>
            </>
          )}
        </View>
      </ImageBackground>
    </KeyboardContainer>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  inner: {
    position: "relative",
    paddingTop: 92,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarWrapper: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    position: "absolute",
  },
});
