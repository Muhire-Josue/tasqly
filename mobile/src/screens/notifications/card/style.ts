import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_BLUE, PRIMARY_COLOR_RED } from "../../../theme/colors";

const styles = StyleSheet.create({
  card: {
    paddingTop: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingVertical: 10,
  },

  left: {
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1,
    paddingRight: 12,
  },

  avatarWrap: {
    width: 46,
    height: 46,
    borderRadius: 23,
    overflow: "hidden",
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    marginTop: 2,
  },

  avatar: {
    width: "100%",
    height: "100%",
  },

  textCol: {
    flex: 1,
  },

  message: {
    fontSize: 16,
    color: "#111",
    lineHeight: 22,
  },

  bold: {
    fontWeight: "800",
    color: "#000",
  },

  time: {
    marginTop: 6,
    fontSize: 14,
    color: "#111",
  },

  deleteBtn: {
    paddingLeft: 8,
    paddingTop: 6,
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
    gap: 14,
    marginTop: 14,
  },

  declineBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 14,
    backgroundColor: PRIMARY_COLOR_RED,
  },

  declineText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFF",
  },

  acceptBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 14,
    backgroundColor: PRIMARY_COLOR_BLUE,
  },

  acceptText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFF",
  },
});

export default styles;
