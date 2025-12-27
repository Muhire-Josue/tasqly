import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
    backgroundColor: "#e7fafeff",
    position: "relative",
  },
  taskList: {
    marginTop: 20,
    flex: 1,
  },

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

  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 4,
  },

  dateText: {
    fontSize: 14,
  },

  urgentText: {
    fontSize: 14,
    color: "#D62828",
    fontWeight: "600",
  },

  assigneeBlock: {
    alignItems: "flex-end",
    gap: 8,
  },

  assigneeLabel: {
    fontSize: 14,
    color: "#777",
  },

  assigneeAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default styles;
