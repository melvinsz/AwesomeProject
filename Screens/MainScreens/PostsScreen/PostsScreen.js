import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { fontFamily } from "../../../variables/fontFamily";

import KeyboardContainer from "../../../Components/KeyboardContainer";

export default function PostsScreen() {
  return (
    <KeyboardContainer>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 32,
            backgroundColor: "#ffffff",
          }}
        >
          <View style={[st.userCard, { marginBottom: 32 }]}>
            <Image source={require("../../../assets/user.png")} style={{ width: 24, height: 24 }} />
            <View style={st.userCardContent}>
              <Text style={st.userCardName}>Name</Text>
              <Text style={st.userCardEmail}>Email</Text>
            </View>
          </View>

          <View>
            <Text>Posts</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardContainer>
  );
}

const st = StyleSheet.create({
  userCard: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  userCardContent: {},
  userCardName: {
    fontFamily: fontFamily.roboto700,
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userCardEmail: {
    fontFamily: fontFamily.roboto400,
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});

// import React from "react";
// import { TouchableOpacity, Image } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { useNavigation } from "@react-navigation/native";

// import DefaultScreenPosts from "../../NestedScreens/Default";
// import CommentsScreen from "../../OtherScreens/CommentScreen/CommentScreen";
// import MapScreen from "../../OtherScreens/MapScreen/MapScreen";

// const NestedScreen = createStackNavigator();

// const PostsScreen = () => {
//   const navigation = useNavigation();

//   const LogoutButton = () => (
//     <TouchableOpacity onPress={() => navigation.navigate("Login")}>
//       <Image source={require("../../../assets/log-out.png")} style={{ width: 24, height: 24 }} />
//     </TouchableOpacity>
//   );

//   const BackButton = () => (
//     <TouchableOpacity onPress={() => navigation.navigate("DefaultScreen")}>
//       <Image source={require("../../../assets/arrow-left.png")} style={{ width: 24, height: 24 }} />
//     </TouchableOpacity>
//   );

//   return (
//     <NestedScreen.Navigator initialRouteName="DefaultScreen">
//       <NestedScreen.Screen
//         name="DefaultScreen"
//         component={DefaultScreenPosts}
//         options={{
//           headerTitle: "Публікації",
//           headerTitleAlign: "center",
//           headerLeftContainerStyle: { paddingHorizontal: 16 },
//           headerRightContainerStyle: { paddingHorizontal: 16 },
//           headerLeft: () => null,
//           headerRight: LogoutButton,
//         }}
//       />
//       <NestedScreen.Screen
//         name="Comment"
//         component={CommentsScreen}
//         options={{
//           headerTitle: "Коментарі",
//           headerTitleAlign: "center",
//           headerLeftContainerStyle: { paddingHorizontal: 16 },
//           headerRightContainerStyle: { paddingHorizontal: 16 },
//           headerLeft: BackButton,
//         }}
//       />
//       <NestedScreen.Screen
//         name="Map"
//         component={MapScreen}
//         options={{
//           headerTitle: "Map",
//           headerTitleAlign: "center",
//           headerLeftContainerStyle: { paddingHorizontal: 16 },
//           headerRightContainerStyle: { paddingHorizontal: 16 },
//           headerLeft: BackButton,
//         }}
//       />
//     </NestedScreen.Navigator>
//   );
// };

// export default PostsScreen;
