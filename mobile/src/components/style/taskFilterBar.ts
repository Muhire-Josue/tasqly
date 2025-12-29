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
  calendarBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
    alignItems: "center",
  },

  calendarCard: {
    width: "90%",
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },

  calendarActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 8,
  },

  calendarActionText: {
    fontSize: 16,
    color: PRIMARY_COLOR_BLUE,
    fontWeight: "600",
  },
  rightIconsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});

export default styles;
