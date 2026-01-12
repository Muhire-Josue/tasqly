import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_BLUE, PRIMARY_COLOR_RED } from "../../../theme/colors";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8FCFF",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },

  headerRow: {
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
    marginTop: 12,
    marginBottom: 24,
    marginHorizontal: 24,
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  deleteButton: {
    backgroundColor: PRIMARY_COLOR_RED,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 12,
    minWidth: 140,
  },

  editButton: {
    backgroundColor: PRIMARY_COLOR_BLUE,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 12,
    minWidth: 140,
  },

  actionButtonPressed: {
    opacity: 0.9,
  },

  actionIcon: {
    marginRight: 8,
  },

  deleteText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  editText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 28,
    gap: 16,
  },

  infoColumn: {
    flex: 1,
  },

  infoLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  infoLabelIcon: {
    marginRight: 6,
  },

  infoLabelText: {
    fontSize: 16,
    color: "#6B7280",
    fontWeight: "500",
  },

  responsibleValueRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  responsibleAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  responsibleAvatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
  },

  responsibleName: {
    fontSize: 16,
    color: "#111827",
    fontWeight: "600",
    flexShrink: 1,
  },

  deadlineText: {
    marginTop: 4,
    fontSize: 16,
    color: "#111827",
    fontWeight: "600",
    textAlign: "left",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalCard: {
    width: "85%",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 18,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    marginBottom: 8,
  },

  modalMessage: {
    fontSize: 15,
    color: "#444",
    marginBottom: 20,
  },

  modalButtonsRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 12,
  },

  modalCancelButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 999,
    backgroundColor: "#F3F4F6",
  },

  modalDeleteButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 999,
    backgroundColor: PRIMARY_COLOR_RED,
  },

  modalButtonPressed: {
    opacity: 0.9,
  },

  modalCancelText: {
    fontSize: 15,
    color: "#111",
    fontWeight: "500",
  },

  modalDeleteText: {
    fontSize: 15,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  metaSection: {
    marginTop: 20,
  },

  statusUrgentRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  statusLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1,
    paddingRight: 12,
  },

  metaLabel: {
    fontSize: 18,
    color: "#8A8A8A",
    marginRight: 8,
  },

  metaValue: {
    fontSize: 18,
    color: "#000",
    fontWeight: "700",
    marginRight: 8,
  },

  urgentPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D06A63",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 999,
  },

  urgentText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },

  commentsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },

  commentsLink: {
    color: PRIMARY_COLOR_BLUE,
    fontSize: 20,
    textDecorationLine: "underline",
    fontWeight: "500",
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  statusLabel: {
    fontSize: 16,
    color: "#888",
    marginRight: 6,
  },

  statusValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginRight: 8,
  },

  statusIcon: {
    marginTop: 1,
  },
  scrollContent: {},

  descriptionSection: {
    marginTop: 26,
  },

  descriptionLabel: {
    fontSize: 18,
    color: "#8A8A8A",
    fontWeight: "500",
    marginBottom: 12,
  },

  descriptionBox: {
    borderWidth: 1,
    borderColor: "#D7D7D7",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 18,
    paddingVertical: 16,
    minHeight: 180,
  },

  descriptionText: {
    fontSize: 18,
    color: "#000",
    lineHeight: 30,
  },

  completeButton: {
    marginTop: 28,
    alignSelf: "center",
    width: "92%",
    backgroundColor: "#000000",
    borderRadius: 999,
    paddingVertical: 18,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOpacity: 0.22,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },

  completeButtonPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },

  completeIcon: {
    marginRight: 14,
  },

  completeText: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "500",
  },
});

export default styles;
