import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_BLUE, PRIMARY_COLOR_RED } from "../../theme/colors";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  container: {
    flex: 1,
    width: "100%",
  },

  imageWrapper: {
    width: "100%",
    height: 260,
    position: "relative",
    backgroundColor: "#E5E7EB",
  },

  houseImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  editBadge: {
    position: "absolute",
    right: 16,
    bottom: 16,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 12,
    width: "100%",
    paddingTop: 16,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111",
  },
  root: {
    flex: 1,
    backgroundColor: "#F7FAFB",
  },
  sectionTitle: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "500",
    color: "#111",
  },

  generalCard: {
    marginTop: 12,
    backgroundColor: "#ECECEC",
    borderRadius: 18,
    padding: 18,
  },

  generalHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },

  generalHeaderLabel: {
    fontSize: 15,
    fontWeight: "500",
    color: "#6B7280",
  },

  generalInputWrap: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    paddingHorizontal: 18,
    paddingVertical: 14,
  },

  generalInput: {
    fontSize: 18,
    color: "#111",
  },
  inviteCard: {
    marginTop: 12,
    backgroundColor: "#ECECEC",
    borderRadius: 18,
    padding: 18,
    width: "100%",
  },

  inviteHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },

  inviteHeaderLabel: {
    fontSize: 15,
    fontWeight: "500",
    color: "#6B7280",
    flex: 1,
  },

  inviteRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    paddingLeft: 18,
    paddingRight: 10,
    paddingVertical: 10,
  },

  inviteInput: {
    flex: 1,
    fontSize: 18,
    color: "#111",
    paddingVertical: 10,
  },

  copyButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  addMemberBtn: {
    marginTop: 18,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: PRIMARY_COLOR_BLUE,
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 14,
  },

  addMemberText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFF",
  },
  memberMenuOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
  },

  memberMenu: {
    position: "absolute",
    width: 340,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 10,
  },

  memberSearchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
  },

  memberSearchInput: {
    flex: 1,
    fontSize: 18,
    color: "#111",
    paddingVertical: 6,
  },

  memberResults: {
    backgroundColor: "#ECECEC",
    paddingVertical: 8,
  },

  memberNotFound: {
    paddingHorizontal: 14,
    paddingVertical: 16,
    fontSize: 16,
    color: "#6B7280",
  },

  memberResultRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },

  memberAvatar: {
    width: "100%",
    height: "100%",
  },

  memberResultName: {
    fontSize: 15,
    color: "#111",
  },

  memberDialogOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  memberDialogSafe: {
    flex: 1,
    justifyContent: "flex-end",
  },

  memberDialogCard: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 10,
    maxHeight: "75%",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  memberDialogHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
  },

  memberDialogTitle: {
    fontSize: 18,
    color: "#111",
  },
  membersCard: {
    marginTop: 12,
    backgroundColor: "#ECECEC",
    borderRadius: 18,
    padding: 16,
  },

  membersInner: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  memberRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },

  memberLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
    paddingRight: 12,
  },

  memberAvatarWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    justifyContent: "center",
  },

  memberName: {
    fontSize: 15,
    color: "#111",
  },

  removeBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  memberSeparator: {
    height: 1,
    backgroundColor: "#E5E7EB",
  },

  moreInfoCard: {
    marginTop: 12,
    backgroundColor: "#ECECEC",
    borderRadius: 18,
    padding: 18,
  },

  moreInfoHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },

  moreInfoHeaderLabel: {
    fontSize: 15,
    fontWeight: "500",
    color: "#6B7280",
  },

  moreInfoInputWrap: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    paddingHorizontal: 14,
    paddingVertical: 12,
    minHeight: 170,
  },

  moreInfoInput: {
    fontSize: 16,
    color: "#111",
    lineHeight: 22,
  },

  bottomButtonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 18,
    marginTop: 18,
  },

  dangerButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: PRIMARY_COLOR_RED,
  },

  dangerButtonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFF",
  },

  primaryButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: PRIMARY_COLOR_BLUE,
  },

  primaryButtonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFF",
  },
  confirmOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  confirmCard: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  confirmTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },

  confirmBody: {
    marginTop: 8,
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
  },

  confirmButtonsRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 16,
  },

  confirmCancelBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },

  confirmCancelText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111",
  },

  confirmDeleteBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 14,
    backgroundColor: "#C0392B",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },

  confirmDeleteText: {
    fontSize: 15,
    fontWeight: "800",
    color: "#FFF",
  },
});

export default styles;
