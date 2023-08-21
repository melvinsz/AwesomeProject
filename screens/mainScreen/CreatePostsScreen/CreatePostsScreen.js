import * as Location from "expo-location";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style as s } from "./CreatePostsScreen.style";
import MapPinIcon from "../../../components/svg/MapPinIcon";
import Btn from "../../../components/Button";
import TrashIcon from "../../../components/svg/TrashIcon";
import { useEffect, useState } from "react";
import CameraComponent from "../CameraComponent";
import { useKeyboardShow } from "../../../hooks/useKeyboardShow";

const initValues = { title: "", place: "" };

export default function CreatePostsScreen({ imgUrl, navigation }) {
  const [photoUri, setPhotoUri] = useState("");
  const [values, setValues] = useState(initValues);
  const [isShowKeyboard] = useKeyboardShow();
  const [placeLocation, setPlaceLocation] = useState(null);

  const onChangeText = (value, name) => {
    setValues((v) => ({ ...v, [name]: value }));
  };

  const sendPost = () => {
    const result = { ...values, photoUri, placeLocation };
    navigation.navigate("posts", { newPost: result });
  };

  const onPressReset = () => {
    setValues(initValues);
    setPhotoUri("");
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setPlaceLocation(coords);
    })();
  }, []);

  return (
    <View style={s.container}>
      <View style={{ marginBottom: 32 }}>
        {isShowKeyboard ? (
          <View>
            {photoUri ? (
              <Image style={{ width: 50, height: 50 }} source={{ uri: photoUri }} />
            ) : (
              <Text>Фото поки ще не зроблено</Text>
            )}
          </View>
        ) : (
          <>
            <View style={[s.imgWrapper, { marginBottom: 8 }]}>
              <CameraComponent photoUri={photoUri} setPhotoUri={setPhotoUri} />
            </View>
            <Text style={s.imgText}>{imgUrl ? "Редагувати" : "Завантажте"} фото</Text>
          </>
        )}
      </View>
      <View style={[s.inputWrapper, { marginBottom: 16 }]}>
        <TextInput
          style={s.input}
          placeholder="Назва..."
          placeholderTextColor="#BDBDBD"
          value={values.title}
          onChangeText={(v) => onChangeText(v, "title")}
        />
      </View>
      <View style={[s.inputWrapper, { marginBottom: 32 }]}>
        <MapPinIcon style={s.inputIcon} />
        <TextInput
          style={s.input}
          placeholder="Місцевість..."
          placeholderTextColor="#BDBDBD"
          value={values.place}
          onChangeText={(v) => onChangeText(v, "place")}
        />
      </View>
      <Btn onPress={sendPost} text="Опублікувати" />
      <TouchableOpacity style={{ marginTop: "auto", alignSelf: "center" }} activeOpacity={0.7} onPress={onPressReset}>
        <TrashIcon />
      </TouchableOpacity>
    </View>
  );
}

// import { useEffect, useState } from "react";
// import { useNavigation, useIsFocused } from "@react-navigation/native";
// import { FontAwesome } from "@expo/vector-icons";
// import { Feather } from "@expo/vector-icons";
// import { Camera } from "expo-camera";
// import * as MediaLibrary from "expo-media-library";
// import { styles } from "./CreatePostsScreen.style";

// import * as Location from "expo-location";

// import { Image, Keyboard, KeyboardAvoidingView } from "react-native";

// import { TouchableWithoutFeedback, TextInput, TouchableOpacity, Text, View } from "react-native";

// const CreatePostsScreen = () => {
//   const navigation = useNavigation();
//   const isFocused = useIsFocused();

//   const [hasPermission, setHasPermission] = useState(null);
//   const [cameraRef, setCameraRef] = useState(null);

//   const [postImg, setPostImg] = useState("");
//   const [postName, setPostName] = useState("");
//   const [postAddress, setPostAddress] = useState("");
//   const [postLocation, setPostLocation] = useState(null);

//   const [isShowKeyboard, setIsShowKeyboard] = useState(false);
//   const [currentFocused, setCurrentFocused] = useState("");

//   useEffect(() => {
//     setPostImg("");
//     setPostLocation(null);

//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       await MediaLibrary.requestPermissionsAsync();

//       setHasPermission(status === "granted");
//     })();

//     (async () => {
//       const { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         console.log("Permission to access location was denied");
//       }
//     })();
//   }, []);

//   const addImageLocation = async () => {
//     const location = await Location.getCurrentPositionAsync({});
//     const coords = {
//       latitude: location.coords.latitude,
//       longitude: location.coords.longitude,
//     };

//     const [address] = await Location.reverseGeocodeAsync({
//       latitude: location.coords.latitude,
//       longitude: location.coords.longitude,
//     });

//     setPostAddress(address.city);
//     setPostLocation(coords);
//   };

//   const clearForm = () => {
//     setPostImg("");
//     setPostName("");
//     setPostAddress("");
//     setPostLocation(null);
//   };

//   const onSubmitPost = () => {
//     if (!postImg || !postName.trim() || !postLocation) return console.warn("Будь ласка завантажте фото та заповніть поля");

//     console.log({ postImg, postName, postAddress, postLocation });

//     handleKeyboardHide();
//     navigation.navigate("NestedPostScreen", {
//       postImg,
//       postName: postName.trim(),
//       postAddress: postAddress.trim(),
//       postLocation,
//     });
//     clearForm();
//   };

//   const onLoadPostImg = async () => {
//     if (cameraRef) {
//       try {
//         const { uri } = await cameraRef.takePictureAsync();
//         await MediaLibrary.createAssetAsync(uri);
//         setPostImg(uri);
//       } catch (error) {
//         console.log("Error > ", error.message);
//       }
//     }
//     addImageLocation();
//   };

//   const handleFocus = (currentFocusInput = "") => {
//     setIsShowKeyboard(true);
//     setCurrentFocused(currentFocusInput);
//   };
//   const handleKeyboardHide = () => {
//     setIsShowKeyboard(false);
//     setCurrentFocused("");
//     Keyboard.dismiss();
//   };
//   const handleGoBack = () => {
//     clearForm();
//     navigation.goBack();
//   };

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === true) {
//     return <Text> No access to camera</Text>;
//   }
//   return (
//     <TouchableWithoutFeedback onPress={handleKeyboardHide}>
//       <View
//         style={{
//           ...styles.container,
//           justifyContent: isShowKeyboard ? "center" : "flex-start",
//         }}
//       >
//         <View style={styles.loadWrapper}>
//           <View style={styles.postImgWrapper}>
//             {postImg ? (
//               <>
//                 <Image style={styles.bgImage} source={{ uri: postImg }} />
//                 <TouchableOpacity
//                   style={{
//                     ...styles.loadBtn,
//                     backgroundColor: "rgba(255, 255, 255, 0.3)",
//                   }}
//                   onPress={onLoadPostImg}
//                 >
//                   <FontAwesome name="camera" size={24} color="#ffffff" />
//                 </TouchableOpacity>
//               </>
//             ) : (
//               isFocused && (
//                 <Camera style={styles.camera} ratio="1:1" zoom={0} type={Camera.Constants.Type.back} ref={setCameraRef}>
//                   <TouchableOpacity
//                     style={{
//                       ...styles.loadBtn,
//                       backgroundColor: postImg ? "rgba(255, 255, 255, 0.3)" : "#ffffff",
//                     }}
//                     onPress={onLoadPostImg}
//                   >
//                     <FontAwesome name="camera" size={24} color={postImg ? "#ffffff" : "#bdbdbd"} />
//                   </TouchableOpacity>
//                 </Camera>
//               )
//             )}
//           </View>
//           <Text style={styles.loadWrapperText}>{postImg ? "Редагувати фото" : "Завантажте фото"}</Text>
//         </View>
//         <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardView}>
//           <View>
//             <TextInput
//               style={{
//                 ...styles.input,
//                 borderColor: currentFocused === "postName" ? "#ff6c00" : "#e8e8e8",
//               }}
//               placeholderTextColor="#bdbdbd"
//               placeholder="Назва..."
//               autoComplete="off"
//               autoCapitalize="none"
//               value={postName}
//               onChangeText={setPostName}
//               onFocus={() => handleFocus("postName")}
//             />
//             <View
//               style={{
//                 ...styles.locationInputWrapper,
//                 borderColor: currentFocused === "location" ? "#ff6c00" : "#e8e8e8",
//               }}
//             >
//               <Feather name="map-pin" size={22} color="#BDBDBD" style={styles.btnLoaction} />
//               <TextInput
//                 style={styles.inputLocation}
//                 placeholderTextColor="#bdbdbd"
//                 placeholder="Місцевість..."
//                 autoComplete="off"
//                 autoCapitalize="none"
//                 value={postAddress}
//                 onChangeText={setPostAddress}
//                 onFocus={() => handleFocus("location")}
//               />
//             </View>
//           </View>
//         </KeyboardAvoidingView>
//         <TouchableOpacity
//           style={{
//             ...styles.btn,
//             backgroundColor: !postImg || !postName.trim() || !postLocation ? "#f6f6f6" : "#ff6c00",
//           }}
//           onPress={onSubmitPost}
//         >
//           <Text
//             style={{
//               ...styles.btnText,
//               color: !postImg || !postName.trim() || !postLocation ? "#bdbdbd" : "#ffffff",
//             }}
//           >
//             Опубліковати
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.btnTrash} onPress={handleGoBack}>
//           <Feather name="trash-2" color="#dbdbdb" size={24} />
//         </TouchableOpacity>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

// export default CreatePostsScreen;
