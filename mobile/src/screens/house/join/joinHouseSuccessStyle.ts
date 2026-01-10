import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_BLUE } from "../../../theme/colors";

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F7FAFB",
  },

  imageWrapper: {
    width: "100%",
    height: 300,
    backgroundColor: "#E5E7EB",
  },

  houseImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 18,
  },

  houseName: {
    fontSize: 42,
    fontWeight: "300",
    color: "#111",
    marginBottom: 18,
  },

  successCard: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    paddingVertical: 28,
    paddingHorizontal: 22,
    alignItems: "center",
  },

  checkCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: PRIMARY_COLOR_BLUE,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  successTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111",
    textAlign: "center",
    marginBottom: 12,
  },

  successSubtitle: {
    fontSize: 16,
    color: "#374151",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 22,
  },

  goHomeBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: PRIMARY_COLOR_BLUE,
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 12,
    minWidth: 220,
  },

  goHomeText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
