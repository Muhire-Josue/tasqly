import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_BLUE } from "../../theme/colors";

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 18,
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
    backgroundColor: PRIMARY_COLOR_BLUE,
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
    margin: 0,
  },
  menuContent: {
    borderRadius: 18,
    paddingVertical: 4,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default styles;
