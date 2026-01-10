import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_BLUE } from "../../../theme/colors";

export default StyleSheet.create({
  joinSafe: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },

  joinRoot: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  joinTitle: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 40,
    color: "#111",
  },

  joinInputWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 30,
  },

  joinInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#111",
  },

  joinButton: {
    width: "100%",
    backgroundColor: PRIMARY_COLOR_BLUE,
    paddingVertical: 16,
    borderRadius: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  joinButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
  },
});
