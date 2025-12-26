// src/components/style/taskFilterBar.ts
import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../../theme/colors";

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 18,
    // important: this view is only as tall as its content
    // so overlay is limited to this vertical region
    position: "relative",
  },

  filterRow: {
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
    right: 0,
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

  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 6,
  },

  optionText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
});

export default styles;
