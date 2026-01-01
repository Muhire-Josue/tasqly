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

  // Row that just holds the title, centered
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

  // Row for Delete (left) & Edit (right)
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  actionButtonBase: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    minWidth: 130,
  },

  deleteButton: {
    backgroundColor: PRIMARY_COLOR_RED,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    minWidth: 130,
  },

  editButton: {
    backgroundColor: PRIMARY_COLOR_BLUE,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    minWidth: 130,
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

  // Modal styles
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
});

export default styles;
