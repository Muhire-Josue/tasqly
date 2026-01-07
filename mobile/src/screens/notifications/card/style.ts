import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    paddingTop: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingRight: 12,
  },

  avatarWrap: {
    width: 52,
    height: 52,
    borderRadius: 26,
    overflow: "hidden",
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  avatar: {
    width: "100%",
    height: "100%",
  },

  textCol: {
    flex: 1,
  },

  message: {
    fontSize: 15,
    color: "#111",
    lineHeight: 28,
  },

  bold: {
    fontWeight: "800",
    color: "#000",
  },

  time: {
    marginTop: 4,
    fontSize: 13,
    color: "#111",
  },

  deleteBtn: {
    paddingLeft: 8,
  },

  divider: {
    height: 1,
    backgroundColor: "#C9C9C9",
    marginTop: 14,
  },
  decisionText: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
  },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
    marginTop: 12,
  },

  declineBtn: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#F1F5F9",
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },

  declineText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
  },

  acceptBtn: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
    backgroundColor: "#111",
  },

  acceptText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#FFF",
  },
});

export default styles;
