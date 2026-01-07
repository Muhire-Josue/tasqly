import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_BLUE } from "../../theme/colors";

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
    fontSize: 28,
    fontWeight: "600",
    color: "#111",
  },
  root: {
    flex: 1,
    backgroundColor: "#F7FAFB",
  },
  sectionTitle: {
    marginTop: 12,
    fontSize: 26,
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
    fontSize: 22,
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
    fontSize: 20,
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
    fontSize: 18,
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
});

export default styles;
