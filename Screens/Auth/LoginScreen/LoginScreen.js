import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { authStyles as s } from "../authStyles";
import { commonStyle } from "../../../styles/commonStyle";
import Btn from "../../../Components/Button";
import KeyboardContainer from "../../../Components/KeyboardContainer";

export default function LoginScreen() {
  return (
    <KeyboardContainer>
      <View style={styles.container}>
        <ImageBackground source={require("../../../image/background.jpg")} style={styles.bg}>
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
  },
  inner: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
  },
});
