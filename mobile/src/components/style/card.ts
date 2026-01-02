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
  assigneeBlock: {
    alignItems: "flex-end",
    gap: 8,
  },
  listHeader: {
    marginBottom: 20,
  },
  dateColumn: {
    flex: 1,
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
    maxWidth: "45%",
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
    flexShrink: 1,
  },
});

export default styles;
