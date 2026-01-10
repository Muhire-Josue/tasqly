import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_BLUE } from "../../../theme/colors";

export default StyleSheet.create({
  root: { flex: 1, backgroundColor: "#F7FAFB" },

  imageWrapper: {
    width: "100%",
    height: 360,
    position: "relative",
    backgroundColor: "#D1D5DB",
  },
  houseImage: { width: "100%", height: "100%", resizeMode: "cover" },

  imageShade: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.18)",
  },

  uploadBtn: {
    position: "absolute",
    alignSelf: "center",
    top: "42%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: PRIMARY_COLOR_BLUE,
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 28,
  },
  uploadBtnText: { color: "#FFF", fontSize: 22, fontWeight: "500" },

  safeArea: { flex: 1, paddingHorizontal: 24 },

  createTitle: {
    marginTop: 18,
    fontSize: 38,
    fontWeight: "400",
    color: "#111",
    textAlign: "center",
  },

  fieldLabel: {
    marginTop: 22,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: "500",
    color: "#6B7280",
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  input: { flex: 1, fontSize: 22, color: "#111" },

  descHeaderRow: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  descLabel: { fontSize: 24, fontWeight: "500", color: "#6B7280" },

  textAreaWrap: {
    marginTop: 12,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 18,
    height: 220,
    padding: 16,
  },
  textArea: { fontSize: 20, color: "#111", height: "100%" },

  addMemberBtn: {
    marginTop: 26,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: PRIMARY_COLOR_BLUE,
    paddingHorizontal: 26,
    paddingVertical: 16,
    borderRadius: 12,
  },
  addMemberText: { color: "#FFF", fontSize: 24, fontWeight: "500" },

  membersCard: {
    marginTop: 22,
    backgroundColor: "#ECECEC",
    borderRadius: 18,
    padding: 16,
  },
  membersInner: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    paddingVertical: 6,
  },

  membersEmptyWrap: { paddingVertical: 20, paddingHorizontal: 16 },
  membersEmptyTitle: { fontSize: 18, fontWeight: "600", color: "#111" },
  membersEmptySub: { marginTop: 6, fontSize: 15, color: "#6B7280" },

  emptyMembersState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 28,
    paddingHorizontal: 20,
  },
  emptyMembersTitle: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },
  emptyMembersSubtitle: {
    marginTop: 6,
    fontSize: 15,
    color: "#6B7280",
    textAlign: "center",
  },

  memberRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  memberLeft: { flexDirection: "row", alignItems: "center", gap: 12 },

  memberAvatarWrap: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  memberAvatar: { width: "100%", height: "100%" },
  memberName: { fontSize: 20, color: "#111", fontWeight: "500" },
  removeBtn: { padding: 6 },

  memberSeparator: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginLeft: 72,
    marginRight: 14,
  },

  memberDialogOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.25)" },
  memberDialogSafe: { position: "absolute", left: 0, right: 0, bottom: 0 },
  memberDialogCard: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    padding: 16,
    maxHeight: "75%",
  },
  memberDialogHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },
  memberDialogTitle: { fontSize: 20, fontWeight: "600", color: "#111" },

  memberSearchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  memberSearchInput: { flex: 1, fontSize: 18, color: "#111" },

  memberNotFound: { paddingTop: 14, textAlign: "center", color: "#6B7280" },

  memberResultRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  memberResultName: { fontSize: 18, color: "#111", fontWeight: "500" },

  addMemberButtonWrapper: {
    marginTop: 26,
    alignItems: "center",
  },

  assigneeOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
    paddingHorizontal: 26,
  },

  assigneeCard: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 16,
    maxHeight: "70%",
  },

  assigneeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },

  assigneeTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111",
  },

  assigneeRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
  },

  assigneeAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 12,
  },

  assigneeAvatarPlaceholder: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 12,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
  },

  assigneeName: {
    fontSize: 18,
    fontWeight: "500",
    color: "#111",
  },
  createButtonWrapper: {
    marginTop: 26,
    paddingBottom: 30,
    alignItems: "center",
  },

  createButton: {
    width: "100%",
    backgroundColor: PRIMARY_COLOR_BLUE,
    borderRadius: 40,
    paddingVertical: 18,
    paddingHorizontal: 26,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOpacity: 0.22,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 10,
  },

  createButtonText: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "600",
  },
});
