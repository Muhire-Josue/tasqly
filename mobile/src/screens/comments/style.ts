import { StyleSheet } from "react-native";

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F7FAFB",
  },

  headerSafe: {
    backgroundColor: "#F7FAFB",
  },

  headerRoot: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    backgroundColor: "#F7FAFB",
  },

  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
    color: "#111",
  },

  rightSpacer: {
    width: 40,
  },
});
