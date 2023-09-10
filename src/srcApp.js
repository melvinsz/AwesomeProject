import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RegistrationScreen from "./screens/auth/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen/LoginScreen";
import MapScreen from "./screens/otherScreens/MapScreen/MapScreen";
import CommentsScreen from "./screens/otherScreens/CommentsScreen/CommentsScreen";
import MainTabNav from "./Routing/MainTabNav";
import { fontFamily } from "./variables/fontFamily";
import LeftNavArrow from "./components/LeftNavArrow";
import { useSelector } from "react-redux";

export default function SrcApp() {
  const { currentUser } = useSelector((state) => state.auth);

  const AuthStack = createStackNavigator();
  const OtherStack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        {!currentUser && (
          <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="login">{(props) => <LoginScreen {...props} />}</AuthStack.Screen>

            <AuthStack.Screen name="registration">{(props) => <RegistrationScreen {...props} />}</AuthStack.Screen>
          </AuthStack.Navigator>
        )}

        {currentUser && (
          <OtherStack.Navigator screenOptions={mainOptions}>
            <OtherStack.Screen name="home" options={{ headerShown: false }}>
              {(props) => <MainTabNav {...props} />}
            </OtherStack.Screen>
            <OtherStack.Screen name="map" component={MapScreen} options={{ title: "Мапа" }} />
            <OtherStack.Screen name="comments" component={CommentsScreen} options={{ title: "Коментарі" }} />
          </OtherStack.Navigator>
        )}
      </NavigationContainer>
      <Toast />
    </Provider>
  );
}

const mainOptions = {
  headerTitleAlign: "center",
  headerTintColor: "#212121",
  headerTitleStyle: {
    fontFamily: fontFamily.roboto500,
    fontSize: 17,
    lineHeight: 22,
  },
  headerStyle: {
    height: 88,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#b3b3b3",
  },
  headerLeft: (props) => <LeftNavArrow {...props} />,
};
