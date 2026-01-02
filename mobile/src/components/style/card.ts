import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_RED } from "../../theme/colors";

const styles = StyleSheet.create({
  taskCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  taskSideStrip: {
    width: 10,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
  },
  taskCardInner: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  taskHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    flexShrink: 1,
  },
  statusPill: {
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  statusPillText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },
  taskMetaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 4,
  },
  // metaRow: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   gap: 8,
  //   marginTop: 4,
  // },
  // dateText: {
  //   fontSize: 14,
  // },
  // urgentText: {
  //   fontSize: 14,
  //   color: PRIMARY_COLOR_RED,
  //   fontWeight: "600",
  // },
  assigneeBlock: {
    alignItems: "flex-end",
    gap: 8,
  },
  // assigneeAvatar: {
  //   width: 40,
  //   height: 40,
  //   borderRadius: 20,
  // },
  listHeader: {
    marginBottom: 20,
  },
  // assigneeLabel: {
  //   fontSize: 14,
  //   color: "#777",
  // },
  //   taskMetaRow: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   marginTop: 12,
  //   gap: 12,
  // },

  dateColumn: {
    flex: 1, // owns the left half
  },

  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  dateText: {
    fontSize: 14,
    fontWeight: "500",
  },

  urgentText: {
    fontSize: 14,
    color: PRIMARY_COLOR_RED,
    marginLeft: 4,
    marginTop: 10,
  },

  assigneeColumn: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "45%", // prevents it from eating the whole row
    justifyContent: "flex-end",
  },

  assigneeAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },

  assigneeLabel: {
    marginLeft: 8,
    fontSize: 14,
    color: "#6B7280",
    flexShrink: 1, // allow truncation
  },
});

export default styles;
