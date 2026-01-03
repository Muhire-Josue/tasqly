import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_RED } from "../../../theme/colors";

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
    marginTop: 24,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  cancelButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: PRIMARY_COLOR_RED,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 999,
  },
  cancelText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#000000",
  },
  formSection: {
    flexShrink: 0,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111",
    marginBottom: 8,
    marginTop: 10,
  },
  textInput: {
    borderWidth: 1.5,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#000",
    marginBottom: 20,
  },
});

export default style;
