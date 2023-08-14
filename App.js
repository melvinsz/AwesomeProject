import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./Screens/Auth/LoginScreen/LoginScreen";
import RegistrationScreen from "./Screens/Auth/RegistrationScreen/RegistrationScreen";
import HomeScreen from "./Screens/MainScreens/HomeScreen";

export default function App() {
  const AuthStack = createStackNavigator();

  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="login">{(props) => <LoginScreen {...props} />}</AuthStack.Screen>
        <AuthStack.Screen name="registration">{(props) => <RegistrationScreen {...props} />}</AuthStack.Screen>
        <AuthStack.Screen name="HomeScreen">{(props) => <HomeScreen {...props} />}</AuthStack.Screen>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
