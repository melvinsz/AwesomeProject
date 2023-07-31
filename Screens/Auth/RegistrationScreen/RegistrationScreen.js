import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Btn from "../../../Components/Button";
import { authStyles as s } from "../authStyles";
import { commonStyle } from "../../../styles/commonStyle";
import KeyboardContainer from "../../../Components/KeyboardContainer";

export default function RegistrationScreen() {
  return (
    <KeyboardContainer>
      <ImageBackground style={styles.bg} source={require("../../../image/background.jpg")}>
        <View style={[styles.inner, { paddingBottom: 78 }]}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatar}></View>
          </View>

          <Text style={[commonStyle.title, { marginBottom: 32 }]}>Реєстрація</Text>
          <View style={[s.inputWrapper, { marginBottom: 16 }]}>
            <TextInput style={s.input} placeholder="Логін" value="" />
          </View>
          <View style={[s.inputWrapper, { marginBottom: 16 }]}>
            <TextInput
              style={s.input}
              autoComplete="email"
              keyboardType="email-address"
              textContentType="emailAddress"
              placeholder="Адреса електроної пошти"
              value=""
            />
          </View>
          <View style={[s.inputWrapper, { marginBottom: 43 }]}>
            <View style={{ flex: 4 }}>
              <TextInput style={s.input} placeholder="Пароль" value="" />
            </View>
            <View>
              <TouchableOpacity style={s.btnInput} activeOpacity={0.5}>
                <Text style={s.btnInputText}>Показати</Text>
              </TouchableOpacity>
            </View>
          </View>

          <>
            <View style={{ marginBottom: 16 }}>
              <Btn text="Зареєструватись" />
            </View>

            <Text style={s.text}>
              Вже є акаунт? <Text>Увійти</Text>
            </Text>
          </>
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
