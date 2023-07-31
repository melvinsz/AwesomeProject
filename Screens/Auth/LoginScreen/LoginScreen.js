import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { authStyles as s } from "../authStyles";
import { commonStyle } from "../../../styles/commonStyle";
import Btn from "../../../Components/Button";
import KeyboardContainer from "../../../Components/KeyboardContainer";

export default function LoginScreen() {
  return (
    <KeyboardContainer>
      <View style={styles.container}>
        <ImageBackground style={styles.bg} source={require("../../../image/background.jpg")}>
          <View style={[styles.inner, { paddingBottom: 144 }]}>
            <Text style={[commonStyle.title, { marginBottom: 32 }]}>Увійти</Text>
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
                <TouchableOpacity style={s.btnInput}>
                  <Text style={s.btnInputText}>Показати</Text>
                </TouchableOpacity>
              </View>
            </View>
            <>
              <View style={{ marginBottom: 16 }}>
                <Btn text="Увійти" />
              </View>

              <Text style={s.text}>
                Немає акаунта? <Text>Зареєструватись</Text>
              </Text>
            </>
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
