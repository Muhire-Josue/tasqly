import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_BLUE } from "../../../theme/colors";

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F7FAFB",
  },

  imageArea: {
    width: "100%",
    height: 340,
    backgroundColor: "#D6D6D6",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

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

  uploadBtn: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -22 }],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: PRIMARY_COLOR_BLUE,
    paddingHorizontal: 26,
    height: 44,
    borderRadius: 22,
  },

  uploadText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },

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
});
