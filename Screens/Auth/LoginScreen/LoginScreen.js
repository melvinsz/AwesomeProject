import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bg} source={require("../../../image/background.jpg")}>
        <View>
          <Text>Увійти</Text>
          <View>
            <TextInput
              autoComplete="email"
              keyboardType="email-address"
              textContentType="emailAddress"
              placeholder="Адреса електроної пошти"
              value=""
            />
          </View>
          <View>
            <View>
              <TextInput placeholder="Пароль" value="" />
            </View>
            <View>
              <TouchableOpacity>
                <Text>Показати</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <>
            <View>
              <Btn text="Войти" />
            </View>

            <Text style={s.text}>
              Немає акаунта? <Text>Зареєструватись</Text>
            </Text>
          </> */}
        </View>
      </ImageBackground>
    </View>
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
});
