import { StyleSheet } from "react-native";
// import { PRIMARY_COLOR_BLUE } from "../../../theme/colors";

export default StyleSheet.create({
  // root: {
  //   flex: 1,
  //   backgroundColor: "#F7FAFB",
  // },

  // imageArea: {
  //   width: "100%",
  //   height: 340,
  //   backgroundColor: "#D6D6D6",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   position: "relative",
  // },

  houseImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  imagePlaceholder: {
    width: 170,
    height: 170,
    borderRadius: 22,
    backgroundColor: "#2F3B46",
  },

  // uploadBtn: {
  //   position: "absolute",
  //   top: "50%",
  //   transform: [{ translateY: -22 }],
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   gap: 10,
  //   backgroundColor: PRIMARY_COLOR_BLUE,
  //   paddingHorizontal: 26,
  //   height: 44,
  //   borderRadius: 22,
  // },

  // uploadText: {
  //   color: "#FFF",
  //   fontSize: 18,
  //   fontWeight: "600",
  // },

  // safeArea: {
  //   paddingHorizontal: 24,
  //   paddingTop: 18,
  // },

  // title: {
  //   fontSize: 34,
  //   fontWeight: "400",
  //   color: "#111",
  //   textAlign: "center",
  // },

  root: {
    flex: 1,
    backgroundColor: "#F7FAFB",
  },

  imageArea: {
    width: "100%",
    height: 340,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  imageAreaImg: {
    // optional: soften edges if you want
  },

  // subtle dark oval behind the upload button
  uploadShade: {
    position: "absolute",
    width: 220,
    height: 64,
    borderRadius: 32,
    backgroundColor: "rgba(0,0,0,0.25)",
  },

  // uploadBtn: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   gap: 10,
  //   backgroundColor: PRIMARY_COLOR_BLUE,
  //   paddingHorizontal: 26,
  //   height: 44,
  //   borderRadius: 22,
  // },

  // uploadText: {
  //   color: "#FFF",
  //   fontSize: 18,
  //   fontWeight: "600",
  // },

  safeArea: {
    paddingHorizontal: 24,
    paddingTop: 18,
  },

  title: {
    fontSize: 34,
    fontWeight: "400",
    color: "#111",
    textAlign: "center",
  },

  imageSection: {
    width: "100%",
    height: 260,
    overflow: "hidden",
    backgroundColor: "#E5E7EB",
  },

  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)", // 👈 this is the dark shade
  },

  uploadBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#38BDF8", // your blue
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 999,
    zIndex: 2,
  },

  uploadText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },

  formLabel: {
    marginTop: 18,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "500",
    color: "#6B7280",
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    width: "100%",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },

  input: {
    flex: 1,
    fontSize: 20,
    color: "#111",
  },

  descHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 20,
    marginBottom: 12,
  },

  descLabel: {
    fontSize: 22,
    fontWeight: "500",
    color: "#6B7280",
  },

  textareaWrap: {
    width: "100%",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 16,
    minHeight: 220,
  },

  textarea: {
    flex: 1,
    fontSize: 18,
    color: "#111",
    lineHeight: 24,
  },
});
