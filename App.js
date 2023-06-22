import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./Screens/Auth/LoginScreen/LoginScreen";
import { useFonts } from "expo-font";
// import RegistrationScreen from "./Screens/Auth/RegistrationScreen/RegistrationScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <LoginScreen style={styles.container} />
      {/* <RegistrationScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
