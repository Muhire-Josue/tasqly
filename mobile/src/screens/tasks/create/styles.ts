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
  },
  frequencySummaryText: {
    fontSize: 16,
    color: "#000",
  },

  frequencyWrapper: {
    flex: 1,
  },

  frequencyLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111",
    marginBottom: 0,
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
    width: "100%",
  },

  frequencySelectorText: {
    fontSize: 18,
    color: "#000",
    marginLeft: 12,
    flexShrink: 0,
  },
  dateHeaderRow: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 4,
  },

  frequencyDropdownMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    width: "100%",
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
  statusFrequencyHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 4,
  },

  statusSummaryLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  frequencyHeaderRight: {
    flex: 1,
    alignItems: "flex-start",
  },

  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },

  dateColumn: {
    flex: 1,
  },

  frequencyColumn: {
    flex: 1,
  },
  dueDateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  assigneeSection: {
    marginTop: 16,
    position: "relative",
  },

  assigneeButtonWrapper: {
    alignSelf: "flex-start",
  },

  assigneeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: PRIMARY_COLOR_BLUE,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  assigneeButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },

  // assigneeDropdownMenu: {
  //   position: "absolute",
  //   top: 48,              // just under the button
  //   left: 0,
  //   right: undefined,
  //   minWidth: 260,
  //   backgroundColor: "#FFFFFF",
  //   borderRadius: 18,
  //   marginTop: 8,
  //   paddingVertical: 8,
  //   shadowColor: "#000",
  //   shadowOpacity: 0.18,
  //   shadowRadius: 8,
  //   shadowOffset: { width: 0, height: 4 },
  //   elevation: 6,
  //   zIndex: 30,
  //   maxHeight: 320,
  // },

  // assigneeRow: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   paddingHorizontal: 16,
  //   paddingVertical: 10,
  // },

  // assigneeAvatar: {
  //   width: 40,
  //   height: 40,
  //   borderRadius: 20,
  //   overflow: "hidden",
  //   backgroundColor: "#EEE",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginRight: 12,
  // },

  assigneeAvatarImage: {
    width: "100%",
    height: "100%",
  },

  assigneeNameText: {
    fontSize: 16,
    color: "#000",
  },

  assigneeSummaryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  assigneeSummaryLabel: {
    fontSize: 16,
    color: "#888",
    marginRight: 4,
  },

  assigneeSummaryValue: {
    flexDirection: "row",
    alignItems: "center",
  },

  assigneeSummaryName: {
    fontSize: 16,
    color: "#000",
  },
  addAssigneeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: PRIMARY_COLOR_BLUE,
    paddingVertical: 14,
    borderRadius: 8,
  },

  addAssigneeText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },

  assigneeOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
    alignItems: "center",
  },

  assigneeCard: {
    width: "90%",
    maxHeight: "70%",
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },

  assigneeHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  assigneeTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },

  assigneeRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },

  assigneeAvatar: {
  width: 36,
  height: 36,
  borderRadius: 18,
  overflow: "hidden",
  marginRight: 12,
  backgroundColor: "#F1F1F1",
  justifyContent: "center",
  alignItems: "center",
},

  assigneeAvatarPlaceholder: {
    width: 36,
    height: 36,
    borderRadius: 24,
    marginRight: 16,
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    alignItems: "center",
  },

  assigneeName: {
    fontSize: 18,
    color: "#111",
  },
});

export default styles;
