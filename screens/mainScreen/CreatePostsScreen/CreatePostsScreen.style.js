import { StyleSheet } from "react-native";
import { fontFamily } from "../../../variables/fontFamily";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 32,
    paddingBottom: 42,
    paddingHorizontal: 16,
  },
  imgWrapper: {
    position: "relative",
    width: "100%",
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
  },
  img: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imgText: {
    fontFamily: fontFamily.roboto400,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  cameraBtnWrapper: {
    position: "absolute",
    zIndex: 2,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  input: {
    flex: 1,
    height: 50,
    fontFamily: fontFamily.roboto400,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  inputIcon: {
    marginRight: 4,
  },
});

// import { StyleSheet, Dimensions } from "react-native";

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//     paddingHorizontal: 16,
//     paddingVertical: 32,

//     backgroundColor: "#fff",

//     resizeMode: "cover",
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },

//   loadWrapper: {
//     marginBottom: 32,
//   },
//   postImgWrapper: {
//     position: "relative",
//     alignItems: "center",
//     justifyContent: "center",

//     height: 240,
//     maxHeight: 240,
//     maxWidth: 342,

//     marginBottom: 8,

//     backgroundColor: "#F6F6F6",
//     border: "1px solid #E8E8E8",
//     borderRadius: 8,
//     overflow: "hidden",
//   },
//   camera: {
//     alignItems: "center",
//     justifyContent: "center",

//     height: "100%",
//     width: "100%",
//   },

//   bgImage: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     // zIndex: 99,
//     flex: 1,
//     height: 240,
//     maxHeight: 240,
//     width: "100%",
//     maxWidth: 342,
//     backgroundColor: "#000",
//   },
//   loadBtn: {
//     alignItems: "center",
//     alignContent: "center",

//     width: 60,
//     height: 60,

//     padding: 18,

//     color: "#bdbdbd",
//     backgroundColor: "#ffffff",
//     borderRadius: 50,
//   },
//   loadWrapperText: {
//     fontFamily: "Roboto",
//     fontStyle: "normal",
//     fontWeight: 400,
//     fontSize: 16,
//     lineHeight: 19,

//     color: "#BDBDBD",
//   },

//   locationInputWrapper: {
//     position: "relative",
//     height: 50,
//     paddingVertical: 16,

//     alignContent: "center",

//     color: "#212121",
//     backgroundColor: "#ffffff",

//     borderBottomWidth: 1,
//     borderColor: "#e8e8e8",
//   },
//   input: {
//     height: 50,
//     fontSize: 16,
//     paddingVertical: 16,
//     marginBottom: 16,

//     color: "#212121",
//     backgroundColor: "#ffffff",

//     borderBottomWidth: 1,
//     borderColor: "#e8e8e8",
//   },
//   inputLocation: {
//     fontSize: 16,

//     marginLeft: 28,

//     color: "#212121",
//     backgroundColor: "#ffffff",
//   },
//   btnLoaction: {
//     position: "absolute",
//     left: 0,
//     bottom: 16,
//     alignSelf: "center",

//     backgroundColor: "transparent",
//   },
//   btn: {
//     marginTop: 32,
//     marginBottom: 120,

//     paddingVertical: 16,

//     backgroundColor: "#f6f6f6",
//     borderRadius: 100,
//   },
//   btnText: {
//     fontFamily: "Roboto",
//     fontStyle: "normal",
//     fontWeight: 400,
//     fontSize: 16,

//     textAlign: "center",

//     color: "#bdbdbd",
//   },
//   btnTrash: {
//     alignSelf: "center",
//     alignItems: "center",

//     width: 70,
//     height: 40,

//     paddingVertical: 8,
//     paddingHorizontal: 8,

//     backgroundColor: "#f6f6f6",
//     borderRadius: 20,
//     // backgroundColor: props.accessibilityState.selected ? '#f6f6f6' : '#ff6c00',
//   },
// });
