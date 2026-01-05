import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_RED } from "../../../theme/colors";
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  safeArea: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
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
  bottomTab: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default styles;
