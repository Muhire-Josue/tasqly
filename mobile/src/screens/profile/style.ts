import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7FAFB",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 10,
  },

  avatarSection: {
    alignItems: "center",
    marginTop: 12,
    marginBottom: 18,
  },
  avatarPressable: {
    position: "relative",
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: "#111",
  },
  cameraBadge: {
    position: "absolute",
    right: 8,
    bottom: 10,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#F7FAFB",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#111",
  },

  headerTitle: {
    fontSize: 36,
    fontWeight: "400",
    color: "#111",
    marginBottom: 18,
  },

  linkRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 18,
    marginBottom: 18,
  },
  linkLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  linkLabel: {
    fontSize: 20,
    fontWeight: "500",
    color: "#111",
  },

  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  settingLabel: {
    fontSize: 20,
    fontWeight: "500",
    color: "#6B7280",
  },
});

export default styles;
