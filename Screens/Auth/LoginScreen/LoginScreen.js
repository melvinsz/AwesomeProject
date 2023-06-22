import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { commonStyle } from "../../../styles/commonStyle";
import { authStyles as s } from "../authStyles";

export default function LoginScreen() {
  return (
    <>
      <View style={{ flex: 1 }}>
        <ImageBackground style={styles.bg} source={require("../../../image/background.jpg")}>
          <View style={styles.inner}>
            <Text style={commonStyle.title}>Увійти</Text>
            <View style={s.inputWrapper}>
              <TextInput
                style={s.input}
                autoComplete="email"
                keyboardType="email-address"
                textContentType="emailAddress"
                placeholder="Адреса електроної пошти"
                value=""
              />
            </View>
            <View style={s.inputWrapper}>
              <View style={{ flex: 4 }}>
                <TextInput style={s.input} placeholder="Пароль" value="" />
              </View>
              <View>
                <TouchableOpacity style={s.btnInput}>
                  <Text style={s.btnInputText}>Показати</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* <>
              <View style={{ marginBottom: 16 }}>
                <Btn text="Войти" />
              </View>

              <Text style={s.text}>
                Немає акаунта? <Text>Зареєструватись</Text>
              </Text>
            </> */}
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  inner: {
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 144,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
