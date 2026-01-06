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
});

export default styles;
