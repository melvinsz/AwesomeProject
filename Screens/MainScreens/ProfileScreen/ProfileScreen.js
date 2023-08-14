import { FlatList, ImageBackground, SafeAreaView, Text, View } from "react-native";
import { style as s } from "./ProfileScreen.style";

import { commonStyle } from "../../../styles/commonStyle";
import KeyboardContainer from "../../../Components/KeyboardContainer";
import Avatar from "../../../Components/Avatar";
import { useState } from "react";

const Empty = ({ height, ...another }) => <View style={{ backgroundColor: "#ffffff", height }} {...another} />;

export default function ProfileScreen() {
  const [avatarImg, setAvatarImg] = useState("");

  return (
    <KeyboardContainer>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageBackground style={s.bg} source={require("../../../image/background.jpg")}>
          <SafeAreaView style={{ flex: 1 }}>
            <FlatList
              ListHeaderComponent={
                <View style={s.inner}>
                  <View style={s.avatarWrapper}>
                    <View style={s.avatar}>
                      <Avatar avatarImg={avatarImg} setAvatarImg={setAvatarImg} />
                    </View>
                  </View>

                  <Text style={[commonStyle.title]}>Name</Text>
                </View>
              }
              ItemSeparatorComponent={() => <Empty height={32} />}
              renderItem={({ item }) => (
                <View style={{ paddingHorizontal: 16, backgroundColor: "#ffffff" }}>
                  <Text>Post</Text>
                </View>
              )}
              ListEmptyComponent={
                <View
                  style={{
                    height: 100,
                    backgroundColor: "#ffffff",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>У вас ще не має постів</Text>
                </View>
              }
              ListFooterComponent={<Empty height={43} />}
            />

            <View
              style={{
                marginTop: -1,
                flexGrow: 10 ** 10,
                width: "100%",
                backgroundColor: "#ffffff",
              }}
            />
          </SafeAreaView>
        </ImageBackground>
      </View>
    </KeyboardContainer>
  );
}
