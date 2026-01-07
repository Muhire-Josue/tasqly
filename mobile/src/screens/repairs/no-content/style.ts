import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_BLUE } from "../../../theme/colors";

const styles = StyleSheet.create({
  noContentWrap: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
  },

  noContentIconCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: PRIMARY_COLOR_BLUE,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  noContentTitle: {
    fontSize: 30,
    fontWeight: "500",
    color: "#111",
    marginTop: 6,
  },

  noContentSubtitle: {
    fontSize: 16,
    color: "#111",
    opacity: 0.85,
    marginTop: 6,
    textAlign: "center",
  },

  noContentButton: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: PRIMARY_COLOR_BLUE,
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: 12,
  },

  noContentButtonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFF",
  },
});

export default styles;
