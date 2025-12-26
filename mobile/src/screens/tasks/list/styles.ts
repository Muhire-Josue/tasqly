import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../../../theme/colors";

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
    backgroundColor: "#F6FBFC",
    position: "relative", // important so absolute children anchor correctly
  },
  filterIcon: {
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  dropdown: {
    position: "absolute",
    right: 24,
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 18,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  optionText: {
    fontSize: 16,
    color: "#000",
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 8,
  },
  filterRow: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  filterChips: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  filterChip: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#EAF3F7",
  },

  filterChipActive: {
    backgroundColor: PRIMARY_COLOR,
  },

  filterChipPressed: {
    opacity: 0.8,
  },

  filterChipText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },

  filterChipTextActive: {
    color: "#FFFFFF",
  },

  filterIconButton: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },

  filterIconButtonPressed: {
    opacity: 0.7,
  },
});

export default styles;
