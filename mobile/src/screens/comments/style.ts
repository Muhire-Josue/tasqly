import { StyleSheet } from "react-native";

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  headerSafe: {
    backgroundColor: "#eef5f5", // 👈 this is the key line
  },

  headerRoot: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    backgroundColor: "#EFFFFF",
  },

  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
    color: "#111",
    marginTop: 15,
  },

  rightSpacer: {
    width: 40,
  },
  header: {
    height: 64,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backBtn: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  headerRightSpacer: {
    width: 44,
    height: 44,
  },
  headerDivider: {
    height: 1,
    backgroundColor: "#00000033",
  },

  listContent: {
    paddingTop: 18,
    paddingBottom: 22,
  },

  commentRow: {
    flexDirection: "row",
    paddingHorizontal: 18,
    marginBottom: 22,
  },

  avatarWrap: {
    width: 54,
    alignItems: "center",
  },
  avatarPlaceholder: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  avatarImg: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },

  commentMain: {
    flex: 1,
    paddingLeft: 10,
  },

  nameTimeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 8,
  },
  authorName: {
    fontSize: 15,
    fontWeight: "700",
  },
  timeText: {
    fontSize: 15,
    color: "#111",
  },

  bubbleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  bubble: {
    backgroundColor: "#ecebeb",
    paddingHorizontal: 16,
    paddingVertical: 12,
    maxWidth: "85%",

    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderTopLeftRadius: 4,
  },
  bubbleText: {
    fontSize: 15,
    color: "#111",
    lineHeight: 26,
  },

  editBtn: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  editBtnSpacer: {
    width: 44,
    height: 44,
  },
});
