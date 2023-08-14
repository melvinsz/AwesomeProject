import { TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

import PostsScreen from "./PostsScreen/PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "./ProfileScreen/ProfileScreen";

const MainTab = createBottomTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();

  const CustomButton = () => (
    <TouchableOpacity
      onPress={() => navigation.navigate("CreatePosts")}
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        width: 70,
        height: 40,
        backgroundColor: "#FF6C00",
        borderRadius: 20,
      }}
    >
      <Image source={require("../../assets/union.png")} style={{ width: 13, height: 13 }} />
    </TouchableOpacity>
  );

  const BackButton = () => (
    <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
      <Image source={require("../../assets/arrow-left.png")} style={{ width: 24, height: 24 }} />
    </TouchableOpacity>
  );

  const LogOutButton = () => (
    <TouchableOpacity onPress={() => navigation.navigate("login")}>
      <Image source={require("../../assets/log-out.png")} style={{ width: 24, height: 24 }} />
    </TouchableOpacity>
  );

  return (
    <MainTab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 83, paddingBottom: 23, paddingHorizontal: "15%" },
        headerTitleStyle: { fontFamily: "Roboto-Medium", fontSize: 17, color: "#212121" },
      }}
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerTitle: "Публікації",
          headerTitleAlign: "center",
          tabBarIcon: () => <Image source={require("../../assets/grid.png")} style={{ width: 24, height: 24 }} />,
          headerLeftContainerStyle: { paddingHorizontal: 16 },
          headerRightContainerStyle: { paddingHorizontal: 16 },
          headerRight: LogOutButton,
        }}
      />
      <MainTab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          tabBarButton: CustomButton,
          headerTitle: "Створити публікацію",
          headerTitleAlign: "center",
          headerLeftContainerStyle: { paddingHorizontal: 16 },
          headerRightContainerStyle: { paddingHorizontal: 16 },
          tabBarStyle: { display: "none" },
          headerLeft: BackButton,
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitleAlign: "center",
          tabBarIcon: () => <Image source={require("../../assets/user.png")} style={{ width: 24, height: 24 }} />,
          headerLeftContainerStyle: { paddingHorizontal: 16 },
          headerRightContainerStyle: { paddingHorizontal: 16 },
          headerRight: LogOutButton,
        }}
      />
    </MainTab.Navigator>
  );
};

export default HomeScreen;
