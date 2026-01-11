import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_BLUE } from "../../theme/colors";

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  headerSafe: {
    backgroundColor: "#eef5f5",
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
  notesWrap: {
    paddingTop: 18,
    paddingBottom: 20,
    alignItems: "center",
  },

  noteRow: {
    paddingHorizontal: 18,
    paddingVertical: 6,
  },

  noteText: {
    fontSize: 15,
    color: "#8B8B8B",
    textAlign: "center",
  },

  noteTime: {
    color: "#6B7280",
  },

  notesSpacer: {
    height: 18,
  },
  composerSafe: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 18,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },

  composerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingBottom: 10,
  },

  inputWrap: {
    flex: 1,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 18,
    paddingLeft: 18,
    paddingRight: 12,
  },

  input: {
    flex: 1,
    fontSize: 18,
    color: "#111",
    paddingVertical: 12,
  },

  clipBtn: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  sendBtn: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: PRIMARY_COLOR_BLUE,
    alignItems: "center",
    justifyContent: "center",
  },

  attachmentRow: {
    paddingBottom: 10,
  },

  attachmentChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#F3F4F6",
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  attachmentThumb: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: "#E5E7EB",
  },

  attachmentText: {
    flex: 1,
    fontSize: 14,
    color: "#111",
  },

  attachmentRemoveBtn: {
    width: 30,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  bubble: {
    backgroundColor: "#ecebeb",
    paddingHorizontal: 16,
    paddingVertical: 12,
    maxWidth: "85%",
    borderRadius: 18,
  },

  bubbleWithImage: {
    width: "85%",
    maxWidth: "85%",
  },

  bubbleImage: {
    marginTop: 10,
    width: "100%",
    height: 210,
    borderRadius: 14,
    backgroundColor: "#E5E7EB",
  },
});
