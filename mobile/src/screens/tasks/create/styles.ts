import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_BLUE, PRIMARY_COLOR_RED } from "../../../theme/colors";
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#000000",
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
  formSection: {
    flexShrink: 0,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111",
    marginBottom: 8,
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

  urgentRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  urgentLabel: {
    fontSize: 16,
    color: "#111",
    fontWeight: "500",
  },
  statusDropdownWrapper: {
    flex: 1,
    position: "relative",
    zIndex: 10,
  },

  statusSelector: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#DDD",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
  },

  statusSelectorText: {
    fontSize: 18,
    color: "#000",
    marginLeft: 12,
  },

  statusDropdownMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    marginTop: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
    zIndex: 20,
  },

  statusOptionRow: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  statusOptionText: {
    fontSize: 18,
    color: "#000",
  },

  statusSummaryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  statusSummaryLabel: {
    fontSize: 16,
    color: "#888",
    marginRight: 4,
  },

  statusSummaryValue: {
    flexDirection: "row",
    alignItems: "center",
  },

  statusSummaryText: {
    fontSize: 16,
    color: "#000",
  },
  statusRow: {
    flexDirection: "row",
    marginTop: 16,
    gap: 16,
  },
  dateButtonWrapper: {
    flex: 1,
  },

  dateButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: PRIMARY_COLOR_BLUE,
    paddingVertical: 14,
    borderRadius: 6,
  },

  dateButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  dueDateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  dueDateLabel: {
    fontSize: 16,
    color: "#888",
    marginRight: 4,
  },

  dueDateValue: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
  calendarOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
    alignItems: "center",
  },

  calendarCard: {
    width: "90%",
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },

  calendarCloseButton: {
    marginTop: 8,
    alignSelf: "flex-end",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "#EFEFEF",
  },

  calendarCloseText: {
    fontSize: 14,
    color: "#111",
  },
  frequencyDropdownWrapper: {
    position: "relative",
    zIndex: 10,
  },
  frequencySelector: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#DDD",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#FFFFFF",
  },
  frequencySelectorText: {
    fontSize: 18,
    color: "#000",
    marginLeft: 12,
  },
  frequencyDropdownMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    marginTop: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
    zIndex: 20,
  },
  frequencyOptionRow: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  frequencyOptionText: {
    fontSize: 18,
    color: "#000",
  },

  frequencySummaryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  frequencySummaryLabel: {
    fontSize: 16,
    color: "#888",
    marginRight: 4,
  },
  frequencySummaryText: {
    fontSize: 16,
    color: "#000",
  },
  dateRow: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },

  frequencyWrapper: {
    flex: 1,
  },

  frequencyLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "#111",
    textAlign: "right",
  },
  dateHeaderRow: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 4,
  },
});

export default styles;
